export const STORAGE_ADDRESS = "0x5b0c36E15Caa4941FA6fb7d8595Cc99321A29190";

export const STORAGE_ABI = [
  {
    constant: false,
    inputs: [],
    name: "removeRetailer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x16479b85",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_account",
        type: "address",
      },
    ],
    name: "isManufacturer",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x17d4a491",
  },
  {
    constant: true,
    inputs: [],
    name: "distributorCount",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x3ac140e8",
  },
  {
    constant: true,
    inputs: [],
    name: "retailerCount",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x47c16a7f",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_account",
        type: "address",
      },
    ],
    name: "isRetailer",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x5da09b88",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_account",
        type: "address",
      },
    ],
    name: "addManufacturer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x5f8a5afa",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_account",
        type: "address",
      },
    ],
    name: "addDistributor",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x7250e224",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "products",
    outputs: [
      {
        name: "pc",
        type: "uint256",
      },
      {
        name: "sk",
        type: "uint256",
      },
      {
        name: "productId",
        type: "uint256",
      },
      {
        name: "productPrice",
        type: "uint256",
      },
      {
        name: "name",
        type: "string",
      },
      {
        name: "manufacturingDate",
        type: "string",
      },
      {
        name: "manufacturerName",
        type: "string",
      },
      {
        name: "productStage",
        type: "uint8",
      },
      {
        name: "manufacturerId",
        type: "address",
      },
      {
        name: "distributorId",
        type: "address",
      },
      {
        name: "retailerId",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x7acc0b20",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_account",
        type: "address",
      },
    ],
    name: "addRetailer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x8ec4f505",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_account",
        type: "address",
      },
    ],
    name: "isDistributor",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x8f0c86fa",
  },
  {
    constant: false,
    inputs: [],
    name: "removeDistributor",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x9bdc0801",
  },
  {
    constant: true,
    inputs: [],
    name: "manufacturerCount",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xbe0c6f1c",
  },
  {
    constant: true,
    inputs: [],
    name: "productCount",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xe0f6ef87",
  },
  {
    constant: false,
    inputs: [],
    name: "removeManufacturer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xf89620e1",
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
    signature: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "id",
        type: "uint256",
      },
    ],
    name: "produced",
    type: "event",
    signature:
      "0x3bad00b74ec692016f8280d4c64d5a23ba2832749ce9f6307747ef3b935ecd91",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "id",
        type: "uint256",
      },
    ],
    name: "packed",
    type: "event",
    signature:
      "0x977eca9ca36fa23a0b799e12df1355eb88fb1900d76f0ca60e9f3026c809b644",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "id",
        type: "uint256",
      },
    ],
    name: "sold",
    type: "event",
    signature:
      "0x9c03facbfbb3359f78225339a47f6cdfd0c5dd30af8ac94a64e0fd3191bc8adf",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "id",
        type: "uint256",
      },
    ],
    name: "shipped",
    type: "event",
    signature:
      "0xae3fc7024aaab40b80265cc32a3c8894ce4dafdf54b91a78a2aa49f8b0bc521a",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "id",
        type: "uint256",
      },
    ],
    name: "received",
    type: "event",
    signature:
      "0xe66f0a779f42a53dbb677b5713ab20003216db33f14e5e97ae193ea7c04432c0",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "_account",
        type: "address",
      },
    ],
    name: "RetailerAdded",
    type: "event",
    signature:
      "0x71ae26cad02663e3d92efd6ec56031a80d74a20c0ab4183faa8bf262261c9baa",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "_account",
        type: "address",
      },
    ],
    name: "RetailerRemoved",
    type: "event",
    signature:
      "0xdb7176e79cffef81cb01767dd0447a0b24bb72ca9778d4b245581086b2a7e6db",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "_account",
        type: "address",
      },
    ],
    name: "DistributorAdded",
    type: "event",
    signature:
      "0xddbf200aa634dc3fb81cfd68583dd1040d1c751d335e1d86b631bde3e977fea8",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "_account",
        type: "address",
      },
    ],
    name: "DistributorRemoved",
    type: "event",
    signature:
      "0x126174f6cf49c81cdb4a9214c6b8f037bef55b4ec31e4fc776cea2a1c8a88d59",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "_account",
        type: "address",
      },
    ],
    name: "ManufacturerAdded",
    type: "event",
    signature:
      "0x561138658ca49a8540dc70dcfe64c9026c1c5b9344642242dd6562970f9c1278",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "_account",
        type: "address",
      },
    ],
    name: "ManufacturerRemoved",
    type: "event",
    signature:
      "0x2fed5abf6a80d6dfe30b4895481b2fc5d7dce5f8f7b931832f4a2947d5040c7f",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_pc",
        type: "uint256",
      },
    ],
    name: "getStatus",
    outputs: [
      {
        name: "temp",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x5c622a0e",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_pc",
        type: "uint256",
      },
      {
        name: "_name",
        type: "string",
      },
      {
        name: "_date",
        type: "string",
      },
      {
        name: "_manufacturerName",
        type: "string",
      },
      {
        name: "_manufacturer",
        type: "address",
      },
    ],
    name: "addProduct",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xed917d02",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_pc",
        type: "uint256",
      },
    ],
    name: "packProduct",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xb6a87e10",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_pc",
        type: "uint256",
      },
    ],
    name: "sellProduct",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
    signature: "0x492deb15",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_pc",
        type: "uint256",
      },
      {
        name: "_price",
        type: "uint256",
      },
    ],
    name: "shipProduct",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x022ec688",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_pc",
        type: "uint256",
      },
    ],
    name: "receivedProduct",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
    signature: "0x103748e1",
  },
];
