const contractAddress ="0xe0751c4dFE81641c9F1E420268f868eF6A7daCA3";	
const contractABI = [
	{
		"inputs": [],
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_productCode",
				"type": "uint256"
			}
		],
		"name": "PurchaseHistory",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "itemproductCode",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "productName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "productPrice",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "ProviderID",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "temperature_Provider",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "ManufacturerID",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "temperature_Manufacture",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "ConsumerID",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "addConsumer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "addManufacturer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "addProvider",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getProductsArray",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "stockUnit",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "productName",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "productCode",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "temperature_Provider",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "temperature_Manufacture",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "ownerID",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "ProviderID",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "productPrice",
						"type": "uint256"
					},
					{
						"internalType": "enum SupplyChain.State",
						"name": "itemState",
						"type": "uint8"
					},
					{
						"internalType": "address",
						"name": "ManufacturerID",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "ConsumerID",
						"type": "address"
					}
				],
				"internalType": "struct SupplyChain.Item[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "isConsumer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "isManufacturer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "isProvider",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_productCode",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_productName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "temperature",
				"type": "uint256"
			}
		],
		"name": "processedItemByManufacturer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_productCode",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_productName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "temperature",
				"type": "uint256"
			}
		],
		"name": "produceItemByProvider",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "productsArray",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "stockUnit",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "productName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "productCode",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "temperature_Provider",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "temperature_Manufacture",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "ownerID",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "ProviderID",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "productPrice",
				"type": "uint256"
			},
			{
				"internalType": "enum SupplyChain.State",
				"name": "itemState",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "ManufacturerID",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "ConsumerID",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_productCode",
				"type": "uint256"
			}
		],
		"name": "purchaseItemByConsumer",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_productCode",
				"type": "uint256"
			}
		],
		"name": "purchaseItemByManufacturer",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_productCode",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "sellItemByManufacturer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
module.exports = { contractAddress, contractABI };
