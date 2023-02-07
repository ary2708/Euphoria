
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Roles.sol";
import "./Context.sol";

contract SupplierRole is Context {
    using Roles for Roles.Role;
    
    event SupplierAdded(address indexed account);
    event SupplierRemoved(address indexed account);

    Roles.Role private Suppliers;

    constructor() public {
        _addSupplier(_msgSender());
    }

    modifier onlySupplier() {
        require(isSupplier(_msgSender()));
        _;
    }

    function isSupplier(address account) public view returns (bool) {
        return Suppliers.has(account);
    }

    function addSupplier(address account) public onlySupplier {
        _addSupplier(account);
    }

    function renounceSupplier() public {
        _removeSupplier(_msgSender());
    }

    function _addSupplier(address account) internal {
        Suppliers.add(account);
        emit SupplierAdded(account);
    }

    function _removeSupplier(address account) internal {
        Suppliers.remove(account);
        emit SupplierRemoved(account);
    }
}
