// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

// This contract is designed to act as a time vault.
// User can deposit into this contract but cannot withdraw for atleast a week.
// User can also extend the wait time beyond the 1 week waiting period.

/*
1. Deploy TimeLock
2. Deploy Attack with address of TimeLock
3. Call Attack.attack sending 1 ether. You will immediately be able to
   withdraw your ether.

What happened?
Attack caused the TimeLock.lockTime to overflow and was able to withdraw
before the 1 week waiting period.
*/

import "./lib/SafeMath.sol";

contract TimeLock {
    using SafeMath for uint;
    mapping(address => uint) public balances;
    mapping(address => uint) public lockTime;

    function deposit() external payable {
        balances[msg.sender] = balances[msg.sender].add(msg.value);
        lockTime[msg.sender] = lockTime[msg.sender].add(1 weeks);
    }

    function increaseLockTime(uint _secondsToIncrease) public {
        lockTime[msg.sender] = lockTime[msg.sender].add(_secondsToIncrease);
    }

    function withdraw() public {
        require(balances[msg.sender] > 0, "Insufficient funds");
        require(block.timestamp > lockTime[msg.sender], "Lock time not expired");

        uint amount = balances[msg.sender];
        balances[msg.sender] = 0;

        (bool sent, ) = msg.sender.call{value: amount}("");
        require(sent, "Failed to send Ether");
    }
}
