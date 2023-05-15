// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.9.0;

import "./Roles.sol";

contract Distributor {

  using Roles for Roles.Role; //Using Roles Library

  event DistributorAdded(address indexed _account);
  event DistributorRemoved(address indexed _account);

  Roles.Role private distributorList;//Stores distributors roles

  constructor() public {
    distributorList.addRole(msg.sender);
    emit DistributorAdded(msg.sender);
  }

  modifier onlyDistributor() {
    require(isDistributor(msg.sender));
    _;
  }

  function isDistributor(address _account) public view returns (bool) {
    return distributorList.hasRole(_account);
  }

  function addDistributor(address _account) public onlyDistributor {
    distributorList.addRole(_account);
    emit DistributorAdded(_account);
  }

  function removeDistributor() public {
    distributorList.removeRole(msg.sender);
    emit DistributorRemoved(msg.sender);
  }

}