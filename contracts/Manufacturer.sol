// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.9.0;

import "./Roles.sol";

contract Manufacturer {

  using Roles for Roles.Role; //Using Roles Library

  event ManufacturerAdded(address indexed _account);
  event ManufacturerRemoved(address indexed _account);

  Roles.Role manufacturerList; //Stores manufacturers roles

  constructor() public {
    manufacturerList.addRole(msg.sender);
    emit ManufacturerAdded(msg.sender);
  }

  modifier onlyManufacturer() {
    require(isManufacturer(msg.sender));
    _;
  }

  function isManufacturer(address _account) public view returns (bool) {
    return manufacturerList.hasRole(_account);
  }

  function addManufacturer(address _account ) public {
    manufacturerList.addRole(_account);
    emit ManufacturerAdded(_account);
  }

  function removeManufacturer() public {
    manufacturerList.removeRole(msg.sender);
    emit ManufacturerRemoved(msg.sender);
  }

}