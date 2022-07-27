// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;


contract MyToken  {
    event Payed(address sender,uint256 amount);

    function payme() external payable {
        emit Payed(msg.sender,msg.value);

    }
}
