import { DeployFunction } from "hardhat-deploy/types"
import { network } from "hardhat"
import {
    networkConfig,
    developmentChains,
    VERIFICATION_BLOCK_CONFIRMATIONS,
} from "../helper-hardhat-config"
import { verify } from "../helper-functions"

const deployFunction: DeployFunction = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments

    const { deployer } = await getNamedAccounts()
    const chainId: number | undefined = network.config.chainId
    if (!chainId) return

    // Price Feed Address, values can be obtained at https://docs.chain.link/docs/reference-contracts
    // Default one below is ETH/USD contract on Sepolia
    const waitBlockConfirmations: number = developmentChains.includes(network.name)
        ? 1
        : VERIFICATION_BLOCK_CONFIRMATIONS
    log(`----------------------------------------------------`)
    const etherStoreV3 = await deploy("EtherStore", {
        from: deployer,
        args: [],
        log: true,
        waitConfirmations: waitBlockConfirmations,
    })

    // Verify the deployment
    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        log("Verifying...")
        await verify(etherStoreV3.address, [])
    }

    log("----------------------------------------------------")
}

export default deployFunction
deployFunction.tags = [`all`, `etherStore`]
