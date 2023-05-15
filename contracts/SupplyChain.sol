// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.9.0;

import "./Ownable.sol";
import "./Manufacturer.sol";
import "./Distributor.sol";
import "./Retailer.sol";

contract SupplyChain is Manufacturer,Distributor,Retailer{

    address owner;
    uint public productCount=0;
    uint public manufacturerCount=0;
    uint public distributorCount=0;
    uint public retailerCount=0;
    uint productCode;
    uint stockNumber;

    enum stage {
        produced,
        packed,
        sold,
        shipped,
        received
    }

    stage constant defaultStage=stage.produced;

    event produced(uint id);
    event packed(uint id);
    event sold(uint id);
    event shipped(uint id);
    event received(uint id);

    constructor() public{
        owner=msg.sender;
        productCode=1;
        stockNumber=1;
    }

    struct Product{
        uint pc;
        uint sk;
        uint productId;    
        uint productPrice;
        string name;
        string manufacturingDate;
        string manufacturerName;
        stage productStage;
        address manufacturerId;
        address distributorId;
        address retailerId;
    }

    mapping(uint => Product) public products;
    
    modifier OnlyOwner() {
        require(msg.sender==owner,"Only Owner is allowed!");
        _;
    }

    modifier isAmountEnough(uint price) {
        require(msg.value >= price, "Paid amount is insufficient");
        _;
    }

    modifier transferAmount(uint id) {
        _;
        uint price = products[id].productPrice;
        uint returnAmount = msg.value - price;
        //payable(msg.sender).transfer(returnAmount);
    }

    modifier Produced(uint id){
        require(products[id].productStage == stage.produced, "Item is not yet produced");
        _;
    }

    modifier Packed(uint id){
        require(products[id].productStage == stage.packed, "Item is not yet packed");
        _;
    }

    modifier Sold(uint id){
        require(products[id].productStage == stage.sold, "Item is not yet sold");
        _;
    }

    modifier Shipped(uint id){
        require(products[id].productStage == stage.shipped, "Item is not yet shipped");
        _;
    }

    modifier Received(uint id){
        require(products[id].productStage == stage.received, "Item is not yet received");
        _;
    }

    function addProduct (uint _pc,string memory _name,string memory _date,string memory _manufacturerName,address _manufacturer) public onlyManufacturer(){
        products[_pc]= Product(_pc,stockNumber,_pc + stockNumber,0,_name,_date,_manufacturerName,stage.produced,_manufacturer,address(0),address(0)); 
        stockNumber++;
        emit produced(_pc);  
    }

    function packProduct(uint _pc) public Produced(_pc) onlyManufacturer(){
        products[_pc].productStage=stage.packed;
        emit packed(_pc);
    }

    function sellProduct(uint _pc) public payable Packed(_pc) onlyDistributor() isAmountEnough(products[_pc].productPrice) transferAmount(_pc){
        products[_pc].distributorId = msg.sender;
        //payable(products[_pc].manufacturerId).transfer(products[_pc].productPrice);
        products[_pc].productStage = stage.sold;
        emit sold(_pc);
    }

    function shipProduct(uint _pc,uint _price) public Sold(_pc) onlyDistributor(){
        products[_pc].productStage=stage.shipped;
        products[_pc].productPrice=_price;
        products[_pc].distributorId=msg.sender;
        emit shipped(_pc);
    }

    function receivedProduct(uint _pc) public payable Shipped(_pc) onlyRetailer() isAmountEnough(products[_pc].productPrice) transferAmount(_pc){
        products[_pc].retailerId = msg.sender;
        //payable(products[_pc].distributorId).transfer(products[_pc].productPrice);
        products[_pc].productStage = stage.received;
        emit received(_pc);
    }

    /*struct Manufacturer{
        address manufacturerAddress;
        string name;
        uint id;
    }

    mapping(uint => Manufacturer) public manufacturers;

    function addManufacturer (string memory _name) public payable OnlyOwner{
        manufacturers[manufacturerCount]= Manufacturer(msg.sender,_name,manufacturerCount);
        manufacturerCount++;
    }

    struct Distributor{
        address distributorAddress;
        string name;
        uint id;
    }

    mapping(uint => Distributor) public distributors;

    function addDistributor (string memory _name) public OnlyOwner {
        distributors[distributorCount]= Distributor(msg.sender,_name,distributorCount);
        distributorCount++;
    }
    
    struct Retailer{
        address retailerAddress;
        string name;
        uint id;
        uint shopID;
        string shopName;
    }

    mapping(uint => Retailer) public retailers;

    function addRetailer (string memory _name,uint _shopid,string memory _shopname) public OnlyOwner{
        retailers[retailerCount]=Retailer(msg.sender,_name,retailerCount,_shopid,_shopname);
        retailerCount++;
    }

    struct Shipment{
        Manufacturer[] products;
        uint[] quantity;
        string deliveredTo;
    }

    struct Inventory{
        uint inventoryID;
        Manufacturer[] products;
        uint[] quantity;
    }
    */

}

