export const CollectionManager = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_owner',
        type: 'address'
      },
      {
        internalType: 'contract IERC20',
        name: '_acceptedToken',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_committee',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_feesCollector',
        type: 'address'
      },
      {
        internalType: 'contract IRarities',
        name: '_rarities',
        type: 'address'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'contract IERC20',
        name: '_oldAcceptedToken',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'contract IERC20',
        name: '_newAcceptedToken',
        type: 'address'
      }
    ],
    name: 'AcceptedTokenSet',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_oldCommittee',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_newCommittee',
        type: 'address'
      }
    ],
    name: 'CommitteeSet',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_oldFeesCollector',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_newFeesCollector',
        type: 'address'
      }
    ],
    name: 'FeesCollectorSet',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'userAddress',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'relayerAddress',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'functionSignature',
        type: 'bytes'
      }
    ],
    name: 'MetaTransactionExecuted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'OwnershipTransferred',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'contract IRarities',
        name: '_oldRarities',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'contract IRarities',
        name: '_newRarities',
        type: 'address'
      }
    ],
    name: 'RaritiesSet',
    type: 'event'
  },
  {
    inputs: [],
    name: 'acceptedToken',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'committee',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'contract IForwarder',
        name: '_forwarder',
        type: 'address'
      },
      {
        internalType: 'contract IERC721CollectionFactoryV2',
        name: '_factory',
        type: 'address'
      },
      {
        internalType: 'bytes32',
        name: '_salt',
        type: 'bytes32'
      },
      {
        internalType: 'string',
        name: '_name',
        type: 'string'
      },
      {
        internalType: 'string',
        name: '_symbol',
        type: 'string'
      },
      {
        internalType: 'string',
        name: '_baseURI',
        type: 'string'
      },
      {
        internalType: 'address',
        name: '_creator',
        type: 'address'
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'rarity',
            type: 'string'
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256'
          },
          {
            internalType: 'address',
            name: 'beneficiary',
            type: 'address'
          },
          {
            internalType: 'string',
            name: 'metadata',
            type: 'string'
          }
        ],
        internalType: 'struct IERC721CollectionV2.ItemParam[]',
        name: '_items',
        type: 'tuple[]'
      }
    ],
    name: 'createCollection',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'domainSeparator',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'userAddress',
        type: 'address'
      },
      {
        internalType: 'bytes',
        name: 'functionSignature',
        type: 'bytes'
      },
      {
        internalType: 'bytes32',
        name: 'sigR',
        type: 'bytes32'
      },
      {
        internalType: 'bytes32',
        name: 'sigS',
        type: 'bytes32'
      },
      {
        internalType: 'uint8',
        name: 'sigV',
        type: 'uint8'
      }
    ],
    name: 'executeMetaTransaction',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes'
      }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'feesCollector',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getChainId',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address'
      }
    ],
    name: 'getNonce',
    outputs: [
      {
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'contract IForwarder',
        name: '_forwarder',
        type: 'address'
      },
      {
        internalType: 'contract IERC721CollectionV2',
        name: '_collection',
        type: 'address'
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes'
      }
    ],
    name: 'manageCollection',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'pricePerItem',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'rarities',
    outputs: [
      {
        internalType: 'contract IRarities',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20',
        name: '_newAcceptedToken',
        type: 'address'
      }
    ],
    name: 'setAcceptedToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_newCommittee',
        type: 'address'
      }
    ],
    name: 'setCommittee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_newFeesCollector',
        type: 'address'
      }
    ],
    name: 'setFeesCollector',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'contract IRarities',
        name: '_newRarities',
        type: 'address'
      }
    ],
    name: 'setRarities',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
]
