export type AdapterTulip = {
  "version": "0.1.0",
  "name": "adapter_tulip",
  "instructions": [
    {
      "name": "deposit",
      "accounts": [
        {
          "name": "gatewayAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "baseProgramId",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "input",
          "type": "bytes"
        }
      ]
    },
    {
      "name": "withdraw",
      "accounts": [
        {
          "name": "gatewayAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "baseProgramId",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "input",
          "type": "bytes"
        }
      ]
    },
    {
      "name": "withdrawMultiDepositVaultThroughMango",
      "accounts": [
        {
          "name": "commonData",
          "accounts": [
            {
              "name": "authority",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "multiVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "multiVaultPda",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "withdrawVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "withdrawVaultPda",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "platformInformation",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "platformConfigData",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "multiBurningSharesTokenAccount",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "withdrawBurningSharesTokenAccount",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "receivingUnderlyingTokenAccount",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "multiUnderlyingWithdrawQueue",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "multiSharesMint",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "withdrawSharesMint",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "withdrawVaultUnderlyingDepositQueue",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "clock",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "lendingProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "vaultProgram",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "mangoGroupAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "withdrawVaultMangoAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mangoCache",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mangoRootBank",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mangoNodeBank",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mangoTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mangoGroupSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawMultiDepositVaultThroughSolend",
      "accounts": [
        {
          "name": "commonData",
          "accounts": [
            {
              "name": "authority",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "multiVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "multiVaultPda",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "withdrawVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "withdrawVaultPda",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "platformInformation",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "platformConfigData",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "multiBurningSharesTokenAccount",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "withdrawBurningSharesTokenAccount",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "receivingUnderlyingTokenAccount",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "multiUnderlyingWithdrawQueue",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "multiSharesMint",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "withdrawSharesMint",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "withdrawVaultUnderlyingDepositQueue",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "clock",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "lendingProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "vaultProgram",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "reserveAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveLiquiditySupply",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveCollateralMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarketAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "derivedLendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reservePythPriceAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserveSwitchboardPriceAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawMultiDepositVaultThroughTulip",
      "accounts": [
        {
          "name": "commonData",
          "accounts": [
            {
              "name": "authority",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "multiVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "multiVaultPda",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "withdrawVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "withdrawVaultPda",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "platformInformation",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "platformConfigData",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "multiBurningSharesTokenAccount",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "withdrawBurningSharesTokenAccount",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "receivingUnderlyingTokenAccount",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "multiUnderlyingWithdrawQueue",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "multiSharesMint",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "withdrawSharesMint",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "withdrawVaultUnderlyingDepositQueue",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "clock",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "lendingProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "vaultProgram",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "reserveAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveLiquiditySupply",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveCollateralMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarketAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "derivedLendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reservePythPriceAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "supply",
      "accounts": [
        {
          "name": "gatewayAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "baseProgramId",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "input",
          "type": "bytes"
        }
      ]
    },
    {
      "name": "unsupply",
      "accounts": [
        {
          "name": "gatewayAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "baseProgramId",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "input",
          "type": "bytes"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "lendingOptimizerV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "base",
            "type": {
              "defined": "VaultBaseV1"
            }
          },
          {
            "name": "currentFarmProgram",
            "type": "publicKey"
          },
          {
            "name": "currentPlatformInformation",
            "type": "publicKey"
          },
          {
            "name": "currentPlatformCount",
            "type": "u64"
          },
          {
            "name": "lastRebaseSlot",
            "type": "u64"
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u8",
                1000
              ]
            }
          }
        ]
      }
    },
    {
      "name": "lendingPlatformV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "vault",
            "type": "publicKey"
          },
          {
            "name": "programAddress",
            "type": "publicKey"
          },
          {
            "name": "programType",
            "type": {
              "defined": "ProgramType"
            }
          },
          {
            "name": "configDataAddress",
            "type": "publicKey"
          },
          {
            "name": "index",
            "type": "u64"
          },
          {
            "name": "nonce",
            "type": "u8"
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u8",
                256
              ]
            }
          }
        ]
      }
    },
    {
      "name": "splLendingConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "collateralMint",
            "type": "publicKey"
          },
          {
            "name": "reserveAccount",
            "type": "publicKey"
          },
          {
            "name": "reserveLiquidityAccount",
            "type": "publicKey"
          },
          {
            "name": "lendingMarketAccount",
            "type": "publicKey"
          },
          {
            "name": "derivedLendingMarketAuthority",
            "type": "publicKey"
          },
          {
            "name": "collateralTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "oracleKeys",
            "type": {
              "array": [
                "publicKey",
                3
              ]
            }
          },
          {
            "name": "oraclePrograms",
            "type": {
              "array": [
                "publicKey",
                3
              ]
            }
          },
          {
            "name": "informationAccount",
            "type": "publicKey"
          },
          {
            "name": "nonce",
            "type": "u8"
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u8",
                256
              ]
            }
          }
        ]
      }
    },
    {
      "name": "mangoV3Config",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroupAccount",
            "type": "publicKey"
          },
          {
            "name": "mangoAccount",
            "type": "publicKey"
          },
          {
            "name": "mangoCache",
            "type": "publicKey"
          },
          {
            "name": "mangoRootBank",
            "type": "publicKey"
          },
          {
            "name": "mangoNodeBank",
            "type": "publicKey"
          },
          {
            "name": "mangoGroupTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "informationAccount",
            "type": "publicKey"
          },
          {
            "name": "nonce",
            "type": "u8"
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u8",
                256
              ]
            }
          }
        ]
      }
    },
    {
      "name": "multiDepositOptimizerV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "base",
            "type": {
              "defined": "VaultBaseV1"
            }
          },
          {
            "name": "lastRebaseSlot",
            "type": "u64"
          },
          {
            "name": "standaloneVaults",
            "type": {
              "array": [
                {
                  "defined": "StandaloneVaultCacheV1"
                },
                6
              ]
            }
          },
          {
            "name": "targetVault",
            "type": "publicKey"
          },
          {
            "name": "stateTransitionAccount",
            "type": "publicKey"
          },
          {
            "name": "minimumRebalanceAmount",
            "type": "u64"
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u8",
                272
              ]
            }
          }
        ]
      }
    },
    {
      "name": "rebalanceStateTransitionV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "optimizerVault",
            "type": "publicKey"
          },
          {
            "name": "vaultRemovalAmountA",
            "type": "u64"
          },
          {
            "name": "vaultSupplyAmountB",
            "type": "u64"
          },
          {
            "name": "unusedTwo",
            "type": "u64"
          },
          {
            "name": "unusedThree",
            "type": "u64"
          },
          {
            "name": "vaultAddressA",
            "type": "publicKey"
          },
          {
            "name": "vaultAddressB",
            "type": "publicKey"
          },
          {
            "name": "vaultAProgramType",
            "type": {
              "defined": "ProgramType"
            }
          },
          {
            "name": "vaultBProgramType",
            "type": {
              "defined": "ProgramType"
            }
          },
          {
            "name": "state",
            "type": {
              "defined": "RebalanceStates"
            }
          },
          {
            "name": "lastCompletionTs",
            "type": "i64"
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u8",
                256
              ]
            }
          }
        ]
      }
    },
    {
      "name": "orcaVaultV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "base",
            "type": {
              "defined": "VaultBaseV1"
            }
          },
          {
            "name": "farmData",
            "type": {
              "defined": "OrcaVaultDataV1"
            }
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u8",
                135
              ]
            }
          }
        ]
      }
    },
    {
      "name": "orcaDoubleDipVaultV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "base",
            "type": {
              "defined": "VaultBaseV1"
            }
          },
          {
            "name": "farmData",
            "type": {
              "defined": "OrcaVaultDataV1"
            }
          },
          {
            "name": "ddFarmData",
            "type": {
              "defined": "OrcaVaultDataV1"
            }
          },
          {
            "name": "ddCompoundQueue",
            "type": "publicKey"
          },
          {
            "name": "ddCompoundQueueNonce",
            "type": "u8"
          },
          {
            "name": "ddConfigured",
            "type": "u8"
          },
          {
            "name": "ddWithdrawQueue",
            "type": "publicKey"
          },
          {
            "name": "ddWithdrawQueueNonce",
            "type": "u8"
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u8",
                35
              ]
            }
          }
        ]
      }
    },
    {
      "name": "quarryVaultV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "base",
            "type": {
              "defined": "VaultBaseV1"
            }
          },
          {
            "name": "miner",
            "type": "publicKey"
          },
          {
            "name": "minerTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "mintWrapper",
            "type": "publicKey"
          },
          {
            "name": "minter",
            "type": "publicKey"
          },
          {
            "name": "quarry",
            "type": "publicKey"
          },
          {
            "name": "rewarder",
            "type": "publicKey"
          },
          {
            "name": "rewardTokenMint",
            "type": "publicKey"
          },
          {
            "name": "rewardTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "swapMarkets",
            "type": {
              "array": [
                "publicKey",
                3
              ]
            }
          },
          {
            "name": "variant",
            "type": {
              "defined": "QuarryVariant"
            }
          },
          {
            "name": "configData",
            "type": "publicKey"
          },
          {
            "name": "configDataInitialized",
            "type": "u8"
          },
          {
            "name": "extraDataAccount",
            "type": "publicKey"
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u8",
                263
              ]
            }
          }
        ]
      }
    },
    {
      "name": "saberConfigurationDataV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "vault",
            "type": "publicKey"
          },
          {
            "name": "isDecimalWrappedA",
            "type": "u8"
          },
          {
            "name": "isDecimalWrappedB",
            "type": "u8"
          },
          {
            "name": "wrapperMintA",
            "type": "publicKey"
          },
          {
            "name": "wrapperAccountA",
            "type": "publicKey"
          },
          {
            "name": "wrapperAccountB",
            "type": "publicKey"
          },
          {
            "name": "wrapperMintB",
            "type": "publicKey"
          },
          {
            "name": "extraDataAccount",
            "type": "publicKey"
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u8",
                256
              ]
            }
          }
        ]
      }
    },
    {
      "name": "sunnyConfigurationDataV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "vault",
            "type": "publicKey"
          },
          {
            "name": "isDecimalWrappedA",
            "type": "u8"
          },
          {
            "name": "isDecimalWrappedB",
            "type": "u8"
          },
          {
            "name": "wrapperMintA",
            "type": "publicKey"
          },
          {
            "name": "wrapperAccountA",
            "type": "publicKey"
          },
          {
            "name": "wrapperAccountB",
            "type": "publicKey"
          },
          {
            "name": "wrapperMintB",
            "type": "publicKey"
          },
          {
            "name": "sunnyPool",
            "type": "publicKey"
          },
          {
            "name": "sunnyTvault",
            "type": "publicKey"
          },
          {
            "name": "sunnyMiner",
            "type": "publicKey"
          },
          {
            "name": "sunnyMinerTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "sunnyRewarder",
            "type": "publicKey"
          },
          {
            "name": "extraDataAccount",
            "type": "publicKey"
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u8",
                128
              ]
            }
          }
        ]
      }
    },
    {
      "name": "raydiumVaultV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "base",
            "type": {
              "defined": "VaultBaseV1"
            }
          },
          {
            "name": "raydiumLpMintAddress",
            "type": "publicKey"
          },
          {
            "name": "raydiumAmmId",
            "type": "publicKey"
          },
          {
            "name": "raydiumAmmAuthority",
            "type": "publicKey"
          },
          {
            "name": "raydiumAmmOpenOrders",
            "type": "publicKey"
          },
          {
            "name": "raydiumAmmQuantitiesOrTargetOrders",
            "type": "publicKey"
          },
          {
            "name": "raydiumStakeProgram",
            "type": "publicKey"
          },
          {
            "name": "raydiumLiquidityProgram",
            "type": "publicKey"
          },
          {
            "name": "raydiumCoinTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "raydiumPcTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "raydiumPoolTempTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "raydiumPoolLpTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "raydiumPoolWithdrawQueue",
            "type": "publicKey"
          },
          {
            "name": "raydiumPoolId",
            "type": "publicKey"
          },
          {
            "name": "raydiumPoolAuthority",
            "type": "publicKey"
          },
          {
            "name": "raydiumPoolRewardATokenAccount",
            "type": "publicKey"
          },
          {
            "name": "raydiumPoolRewardBTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "dualRewards",
            "type": "u8"
          },
          {
            "name": "vaultRewardATokenAccount",
            "type": "publicKey"
          },
          {
            "name": "vaultRewardBTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "vaultStakeInfoAccount",
            "type": "publicKey"
          },
          {
            "name": "associatedStakeInfoAddress",
            "type": "publicKey"
          },
          {
            "name": "coinMint",
            "type": "publicKey"
          },
          {
            "name": "pcMint",
            "type": "publicKey"
          },
          {
            "name": "serumMarket",
            "type": "publicKey"
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u8",
                407
              ]
            }
          }
        ]
      }
    },
    {
      "name": "depositTrackingV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "vault",
            "type": "publicKey"
          },
          {
            "name": "pdaNonce",
            "type": "u8"
          },
          {
            "name": "queueNonce",
            "type": "u8"
          },
          {
            "name": "alignment",
            "type": {
              "array": [
                "u8",
                6
              ]
            }
          },
          {
            "name": "shares",
            "type": "u64"
          },
          {
            "name": "depositedBalance",
            "type": "u64"
          },
          {
            "name": "lastDepositTime",
            "type": "i64"
          },
          {
            "name": "pendingWithdrawAmount",
            "type": "u64"
          },
          {
            "name": "totalDepositedUnderlying",
            "type": "u64"
          },
          {
            "name": "totalWithdrawnUnderlying",
            "type": "u64"
          },
          {
            "name": "lastPendingReward",
            "type": "u64"
          },
          {
            "name": "rewardPerSharePaid",
            "type": "u128"
          },
          {
            "name": "extraDataAccount",
            "type": "publicKey"
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u8",
                256
              ]
            }
          }
        ]
      }
    },
    {
      "name": "ephemeralTrackingV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "availableForWithdraw",
            "type": "u64"
          },
          {
            "name": "liqToRemove",
            "type": "u64"
          },
          {
            "name": "configured",
            "type": "u8"
          },
          {
            "name": "canWithdraw",
            "type": "u8"
          },
          {
            "name": "metadataOne",
            "type": {
              "array": [
                "u8",
                64
              ]
            }
          },
          {
            "name": "metadataTwo",
            "type": {
              "array": [
                "u8",
                64
              ]
            }
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u8",
                254
              ]
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "StandaloneVaultCacheV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "vaultAddress",
            "type": "publicKey"
          },
          {
            "name": "depositedBalance",
            "type": "u64"
          },
          {
            "name": "programType",
            "type": {
              "defined": "ProgramType"
            }
          },
          {
            "name": "programAddress",
            "type": "publicKey"
          },
          {
            "name": "sharesMint",
            "type": "publicKey"
          },
          {
            "name": "sharesAccount",
            "type": "publicKey"
          },
          {
            "name": "alignment",
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u64",
                6
              ]
            }
          }
        ]
      }
    },
    {
      "name": "OrcaVaultDataV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "userFarmAddr",
            "type": "publicKey"
          },
          {
            "name": "userFarmNonce",
            "type": "u8"
          },
          {
            "name": "vaultSwapTokenA",
            "type": "publicKey"
          },
          {
            "name": "vaultSwapTokenB",
            "type": "publicKey"
          },
          {
            "name": "poolSwapTokenA",
            "type": "publicKey"
          },
          {
            "name": "poolSwapTokenB",
            "type": "publicKey"
          },
          {
            "name": "poolSwapAccount",
            "type": "publicKey"
          },
          {
            "name": "vaultRewardTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "vaultFarmTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "vaultSwapTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "globalBaseTokenVault",
            "type": "publicKey"
          },
          {
            "name": "globalRewardTokenVault",
            "type": "publicKey"
          },
          {
            "name": "globalFarm",
            "type": "publicKey"
          },
          {
            "name": "farmTokenMint",
            "type": "publicKey"
          },
          {
            "name": "rewardTokenMint",
            "type": "publicKey"
          },
          {
            "name": "swapPoolMint",
            "type": "publicKey"
          },
          {
            "name": "tokenAMint",
            "type": "publicKey"
          },
          {
            "name": "tokenBMint",
            "type": "publicKey"
          },
          {
            "name": "swapMarkets",
            "type": {
              "array": [
                "publicKey",
                3
              ]
            }
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "ConfigureOrcaVaultArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "userFarmAddr",
            "type": "publicKey"
          },
          {
            "name": "userFarmNonce",
            "type": "u8"
          },
          {
            "name": "vaultSwapTokenA",
            "type": "publicKey"
          },
          {
            "name": "vaultSwapTokenB",
            "type": "publicKey"
          },
          {
            "name": "poolSwapTokenA",
            "type": "publicKey"
          },
          {
            "name": "poolSwapTokenB",
            "type": "publicKey"
          },
          {
            "name": "poolSwapAccount",
            "type": "publicKey"
          },
          {
            "name": "vaultRewardTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "vaultFarmTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "vaultSwapTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "globalFarm",
            "type": "publicKey"
          },
          {
            "name": "globalBaseTokenVault",
            "type": "publicKey"
          },
          {
            "name": "globalRewardTokenVault",
            "type": "publicKey"
          },
          {
            "name": "farmTokenMint",
            "type": "publicKey"
          },
          {
            "name": "rewardTokenMint",
            "type": "publicKey"
          },
          {
            "name": "swapPoolMint",
            "type": "publicKey"
          },
          {
            "name": "tokenAMint",
            "type": "publicKey"
          },
          {
            "name": "tokenBMint",
            "type": "publicKey"
          },
          {
            "name": "swapMarkets",
            "type": {
              "array": [
                "publicKey",
                3
              ]
            }
          }
        ]
      }
    },
    {
      "name": "FeesV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "feeMultiplier",
            "type": "u64"
          },
          {
            "name": "controllerFee",
            "type": "u64"
          },
          {
            "name": "platformFee",
            "type": "u64"
          },
          {
            "name": "withdrawFee",
            "type": "u64"
          },
          {
            "name": "depositFee",
            "type": "u64"
          },
          {
            "name": "feeWallet",
            "type": "publicKey"
          },
          {
            "name": "totalCollectedA",
            "type": "u64"
          },
          {
            "name": "totalCollectedB",
            "type": "u64"
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u64",
                6
              ]
            }
          }
        ]
      }
    },
    {
      "name": "TestData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "a",
            "type": "u128"
          },
          {
            "name": "b",
            "type": "u128"
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u64",
                4
              ]
            }
          }
        ]
      }
    },
    {
      "name": "VaultBaseV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "nonce",
            "type": "u8"
          },
          {
            "name": "tag",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "pda",
            "type": "publicKey"
          },
          {
            "name": "pdaNonce",
            "type": "u8"
          },
          {
            "name": "pdaAlignment",
            "type": {
              "array": [
                "u8",
                6
              ]
            }
          },
          {
            "name": "totalDepositedBalance",
            "type": "u64"
          },
          {
            "name": "totalShares",
            "type": "u64"
          },
          {
            "name": "underlyingMint",
            "type": "publicKey"
          },
          {
            "name": "underlyingWithdrawQueue",
            "type": "publicKey"
          },
          {
            "name": "underlyingDepositQueue",
            "type": "publicKey"
          },
          {
            "name": "underlyingCompoundQueue",
            "type": "publicKey"
          },
          {
            "name": "sharesMint",
            "type": "publicKey"
          },
          {
            "name": "withdrawsPaused",
            "type": "u8"
          },
          {
            "name": "depositsPaused",
            "type": "u8"
          },
          {
            "name": "compoundPaused",
            "type": "u8"
          },
          {
            "name": "supportsCompound",
            "type": "u8"
          },
          {
            "name": "rebasePaused",
            "type": "u8"
          },
          {
            "name": "rebalancePaused",
            "type": "u8"
          },
          {
            "name": "stateAlignment",
            "type": {
              "array": [
                "u8",
                2
              ]
            }
          },
          {
            "name": "precisionFactor",
            "type": "u64"
          },
          {
            "name": "lastCompoundTime",
            "type": "i64"
          },
          {
            "name": "compoundInterval",
            "type": "i64"
          },
          {
            "name": "slippageTolerance",
            "type": "u8"
          },
          {
            "name": "slipAlignment",
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          },
          {
            "name": "fees",
            "type": {
              "defined": "FeesV1"
            }
          },
          {
            "name": "farm",
            "type": {
              "array": [
                "u64",
                2
              ]
            }
          },
          {
            "name": "configured",
            "type": "u8"
          },
          {
            "name": "configuredAlignment",
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          },
          {
            "name": "pendingFees",
            "type": "u64"
          },
          {
            "name": "totalDepositedBalanceCap",
            "type": "u64"
          },
          {
            "name": "testData",
            "type": {
              "defined": "TestData"
            }
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u64",
                4
              ]
            }
          }
        ]
      }
    },
    {
      "name": "DepositInputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lpAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "WithdrawInputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "shareAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "SupplyInputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "supplyAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "UnsupplyInputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "reservedAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "DepositOutputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "shareAmount",
            "type": "u64"
          },
          {
            "name": "dummy2",
            "type": "u64"
          },
          {
            "name": "dummy3",
            "type": "u64"
          },
          {
            "name": "dummy4",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "WithdrawOutputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lpAmount",
            "type": "u64"
          },
          {
            "name": "dummy2",
            "type": "u64"
          },
          {
            "name": "dummy3",
            "type": "u64"
          },
          {
            "name": "dummy4",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "SupplyOutputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "reservedAmount",
            "type": "u64"
          },
          {
            "name": "dummy2",
            "type": "u64"
          },
          {
            "name": "dummy3",
            "type": "u64"
          },
          {
            "name": "dummy4",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "UnsupplyOutputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "unsupplyAmount",
            "type": "u64"
          },
          {
            "name": "dummy2",
            "type": "u64"
          },
          {
            "name": "dummy3",
            "type": "u64"
          },
          {
            "name": "dummy4",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "FeeCalculation",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Exclusive"
          },
          {
            "name": "Inclusive"
          }
        ]
      }
    },
    {
      "name": "MathError",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "MathOverflow"
          }
        ]
      }
    },
    {
      "name": "PausableAction",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Deposit"
          },
          {
            "name": "Withdrawal"
          },
          {
            "name": "DepositAndWithdrawal"
          },
          {
            "name": "Compound"
          },
          {
            "name": "Rebase"
          },
          {
            "name": "Rebalance"
          },
          {
            "name": "All"
          },
          {
            "name": "Unknown"
          }
        ]
      }
    },
    {
      "name": "Lending",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "TULIP"
          },
          {
            "name": "SOLEND"
          },
          {
            "name": "MANGO"
          },
          {
            "name": "PORT"
          },
          {
            "name": "LARIX"
          },
          {
            "name": "PARROT"
          },
          {
            "name": "USDC"
          },
          {
            "name": "MULTI_DEPOSIT"
          },
          {
            "name": "RAY"
          },
          {
            "name": "USDT"
          },
          {
            "name": "SOL"
          },
          {
            "name": "PLACEHOLDER_E"
          },
          {
            "name": "PLACEHOLDER_F"
          },
          {
            "name": "PLACEHOLDER_G"
          },
          {
            "name": "PLACEHOLDER_H"
          },
          {
            "name": "PLACEHOLDER_I"
          },
          {
            "name": "PLACEHOLDER_J"
          },
          {
            "name": "PLACEHOLDER_K"
          },
          {
            "name": "PLACEHOLDER_L"
          },
          {
            "name": "PLACEHOLDER_M"
          },
          {
            "name": "PLACEHOLDER_N"
          },
          {
            "name": "PLACEHOLDER_O"
          },
          {
            "name": "PLACEHOLDER_P"
          },
          {
            "name": "PLACEHOLDER_Q"
          },
          {
            "name": "PLACEHOLDER_R"
          },
          {
            "name": "PLACEHOLDER_S"
          },
          {
            "name": "PLACEHOLDER_T"
          },
          {
            "name": "PLACEHOLDER_U"
          },
          {
            "name": "PLACEHOLDER_V"
          },
          {
            "name": "PLACEHOLDER_W"
          },
          {
            "name": "PLACEHOLDER_X"
          },
          {
            "name": "PLACEHOLDER_Y"
          },
          {
            "name": "PLACEHOLDER_Z"
          },
          {
            "name": "UNKNOWN"
          }
        ]
      }
    },
    {
      "name": "Orca",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "ATLASUSDC"
          },
          {
            "name": "POLISUSDC"
          },
          {
            "name": "ORCASOL"
          },
          {
            "name": "USDTUSDC"
          },
          {
            "name": "ORCAUSDC"
          },
          {
            "name": "BASISUSDC"
          },
          {
            "name": "SAMOUSDC"
          },
          {
            "name": "SHDWUSDC"
          },
          {
            "name": "SHDWSOL"
          },
          {
            "name": "stSOLUSDC"
          },
          {
            "name": "wUSTUSDC"
          },
          {
            "name": "CMFIUSDC"
          },
          {
            "name": "PLACEHOLDER_B"
          },
          {
            "name": "PLACEHOLDER_C"
          },
          {
            "name": "PLACEHOLDER_D"
          },
          {
            "name": "PLACEHOLDER_E"
          },
          {
            "name": "PLACEHOLDER_F"
          },
          {
            "name": "PLACEHOLDER_G"
          },
          {
            "name": "PLACEHOLDER_H"
          },
          {
            "name": "PLACEHOLDER_I"
          },
          {
            "name": "PLACEHOLDER_J"
          },
          {
            "name": "PLACEHOLDER_K"
          },
          {
            "name": "PLACEHOLDER_L"
          },
          {
            "name": "PLACEHOLDER_M"
          },
          {
            "name": "PLACEHOLDER_N"
          },
          {
            "name": "PLACEHOLDER_O"
          },
          {
            "name": "PLACEHOLDER_P"
          },
          {
            "name": "PLACEHOLDER_Q"
          },
          {
            "name": "PLACEHOLDER_R"
          },
          {
            "name": "PLACEHOLDER_S"
          },
          {
            "name": "PLACEHOLDER_T"
          },
          {
            "name": "PLACEHOLDER_U"
          },
          {
            "name": "PLACEHOLDER_V"
          },
          {
            "name": "PLACEHOLDER_W"
          },
          {
            "name": "PLACEHOLDER_X"
          },
          {
            "name": "PLACEHOLDER_Y"
          },
          {
            "name": "PLACEHOLDER_Z"
          },
          {
            "name": "UNKNOWN"
          }
        ]
      }
    },
    {
      "name": "Quarry",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "VANILLA"
          },
          {
            "name": "SABER"
          },
          {
            "name": "SUNNY"
          },
          {
            "name": "UNKNOWN"
          }
        ]
      }
    },
    {
      "name": "Raydium",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "ALEPHUSDC"
          },
          {
            "name": "BOPRAY"
          },
          {
            "name": "COPEUSDC"
          },
          {
            "name": "LIKEUSDC"
          },
          {
            "name": "PSYUSDC"
          },
          {
            "name": "MERUSDC"
          },
          {
            "name": "stSOLUSDC"
          },
          {
            "name": "RAY"
          },
          {
            "name": "RAYUSDT"
          },
          {
            "name": "RAYUSDC"
          },
          {
            "name": "RAYSRM"
          },
          {
            "name": "RAYSOL"
          },
          {
            "name": "RAYETH"
          },
          {
            "name": "ROPEUSDC"
          },
          {
            "name": "SAMORAY"
          },
          {
            "name": "SNYUSDC"
          },
          {
            "name": "stSOLUSDT"
          },
          {
            "name": "TULIPUSDC"
          },
          {
            "name": "ATLASRAY"
          },
          {
            "name": "POLISRAY"
          },
          {
            "name": "PLACEHOLDER_A"
          },
          {
            "name": "PLACEHOLDER_B"
          },
          {
            "name": "PLACEHOLDER_C"
          },
          {
            "name": "PLACEHOLDER_D"
          },
          {
            "name": "PLACEHOLDER_E"
          },
          {
            "name": "PLACEHOLDER_F"
          },
          {
            "name": "PLACEHOLDER_G"
          },
          {
            "name": "PLACEHOLDER_H"
          },
          {
            "name": "PLACEHOLDER_I"
          },
          {
            "name": "PLACEHOLDER_J"
          },
          {
            "name": "PLACEHOLDER_K"
          },
          {
            "name": "PLACEHOLDER_L"
          },
          {
            "name": "PLACEHOLDER_M"
          },
          {
            "name": "PLACEHOLDER_N"
          },
          {
            "name": "PLACEHOLDER_O"
          },
          {
            "name": "PLACEHOLDER_P"
          },
          {
            "name": "PLACEHOLDER_Q"
          },
          {
            "name": "PLACEHOLDER_R"
          },
          {
            "name": "PLACEHOLDER_S"
          },
          {
            "name": "PLACEHOLDER_T"
          },
          {
            "name": "PLACEHOLDER_U"
          },
          {
            "name": "PLACEHOLDER_V"
          },
          {
            "name": "PLACEHOLDER_W"
          },
          {
            "name": "PLACEHOLDER_X"
          },
          {
            "name": "PLACEHOLDER_Y"
          },
          {
            "name": "PLACEHOLDER_Z"
          },
          {
            "name": "UNKNOWN"
          }
        ]
      }
    },
    {
      "name": "Unknown",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Uknown"
          }
        ]
      }
    },
    {
      "name": "Farm",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Raydium",
            "fields": [
              {
                "name": "name",
                "type": {
                  "defined": "Raydium"
                }
              }
            ]
          },
          {
            "name": "Lending",
            "fields": [
              {
                "name": "name",
                "type": {
                  "defined": "Lending"
                }
              }
            ]
          },
          {
            "name": "Orca",
            "fields": [
              {
                "name": "name",
                "type": {
                  "defined": "Orca"
                }
              }
            ]
          },
          {
            "name": "Quarry",
            "fields": [
              {
                "name": "name",
                "type": {
                  "defined": "Quarry"
                }
              }
            ]
          },
          {
            "name": "Unknown",
            "fields": [
              {
                "name": "name",
                "type": {
                  "defined": "Unknown"
                }
              }
            ]
          }
        ]
      }
    },
    {
      "name": "ProgramType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "SplUnmodified"
          },
          {
            "name": "SplModifiedSolend"
          },
          {
            "name": "MangoV3"
          },
          {
            "name": "Unknown"
          }
        ]
      }
    },
    {
      "name": "RebalanceStates",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Inactive"
          },
          {
            "name": "Started"
          },
          {
            "name": "VaultARemoved"
          },
          {
            "name": "VaultABRebalanced"
          }
        ]
      }
    },
    {
      "name": "QuarryVariant",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Vanilla"
          },
          {
            "name": "Saber"
          },
          {
            "name": "Sunny"
          },
          {
            "name": "UNKNOWN"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InstructionUnpackError",
      "msg": "Failed to unpack instruction data"
    },
    {
      "code": 6001,
      "name": "AlreadyInitialized",
      "msg": "Account is already initialized"
    },
    {
      "code": 6002,
      "name": "NotRentExempt",
      "msg": "Lamport balance below rent-exempt threshold"
    },
    {
      "code": 6003,
      "name": "InvalidMarketAuthority",
      "msg": "Market authority is invalid"
    },
    {
      "code": 6004,
      "name": "InvalidMarketOwner",
      "msg": "Market owner is invalid"
    },
    {
      "code": 6005,
      "name": "InvalidAccountOwner",
      "msg": "Input account owner is not the program address"
    },
    {
      "code": 6006,
      "name": "InvalidTokenOwner",
      "msg": "Input token account is not owned by the correct token program id"
    },
    {
      "code": 6007,
      "name": "InvalidTokenAccount",
      "msg": "Input token account is not valid"
    },
    {
      "code": 6008,
      "name": "InvalidTokenMint",
      "msg": "Input token mint account is not valid"
    },
    {
      "code": 6009,
      "name": "InvalidTokenProgram",
      "msg": "Input token program account is not valid"
    },
    {
      "code": 6010,
      "name": "InvalidAmount",
      "msg": "Input amount is invalid"
    },
    {
      "code": 6011,
      "name": "InvalidConfig",
      "msg": "Input config value is invalid"
    },
    {
      "code": 6012,
      "name": "InvalidSigner",
      "msg": "Input account must be a signer"
    },
    {
      "code": 6013,
      "name": "InvalidAccountInput",
      "msg": "Invalid account input"
    },
    {
      "code": 6014,
      "name": "MathOverflow",
      "msg": "Math operation overflow"
    },
    {
      "code": 6015,
      "name": "TokenInitializeMintFailed",
      "msg": "Token initialize mint failed"
    },
    {
      "code": 6016,
      "name": "TokenInitializeAccountFailed",
      "msg": "Token initialize account failed"
    },
    {
      "code": 6017,
      "name": "TokenTransferFailed",
      "msg": "Token transfer failed"
    },
    {
      "code": 6018,
      "name": "TokenMintToFailed",
      "msg": "Token mint to failed"
    },
    {
      "code": 6019,
      "name": "TokenBurnFailed",
      "msg": "Token burn failed"
    },
    {
      "code": 6020,
      "name": "InsufficientLiquidity",
      "msg": "Insufficient liquidity available"
    },
    {
      "code": 6021,
      "name": "ReserveCollateralDisabled",
      "msg": "Input reserve has collateral disabled"
    },
    {
      "code": 6022,
      "name": "ReserveStale",
      "msg": "Reserve state needs to be refreshed"
    },
    {
      "code": 6023,
      "name": "WithdrawTooSmall",
      "msg": "Withdraw amount too small"
    },
    {
      "code": 6024,
      "name": "WithdrawTooLarge",
      "msg": "Withdraw amount too large"
    },
    {
      "code": 6025,
      "name": "BorrowTooSmall",
      "msg": "Borrow amount too small to receive liquidity after fees"
    },
    {
      "code": 6026,
      "name": "BorrowTooLarge",
      "msg": "Borrow amount too large for deposited collateral"
    },
    {
      "code": 6027,
      "name": "RepayTooSmall",
      "msg": "Repay amount too small to transfer liquidity"
    },
    {
      "code": 6028,
      "name": "LiquidationTooSmall",
      "msg": "Liquidation amount too small to receive collateral"
    },
    {
      "code": 6029,
      "name": "ObligationHealthy",
      "msg": "Cannot liquidate healthy obligations"
    },
    {
      "code": 6030,
      "name": "ObligationStale",
      "msg": "Obligation state needs to be refreshed"
    },
    {
      "code": 6031,
      "name": "ObligationReserveLimit",
      "msg": "Obligation reserve limit exceeded"
    },
    {
      "code": 6032,
      "name": "InvalidObligationOwner",
      "msg": "Obligation owner is invalid"
    },
    {
      "code": 6033,
      "name": "ObligationDepositsEmpty",
      "msg": "Obligation deposits are empty"
    },
    {
      "code": 6034,
      "name": "ObligationBorrowsEmpty",
      "msg": "Obligation borrows are empty"
    },
    {
      "code": 6035,
      "name": "ObligationDepositsZero",
      "msg": "Obligation deposits have zero value"
    },
    {
      "code": 6036,
      "name": "ObligationBorrowsZero",
      "msg": "Obligation borrows have zero value"
    },
    {
      "code": 6037,
      "name": "InvalidObligationCollateral",
      "msg": "Invalid obligation collateral"
    },
    {
      "code": 6038,
      "name": "InvalidObligationLiquidity",
      "msg": "Invalid obligation liquidity"
    },
    {
      "code": 6039,
      "name": "ObligationCollateralEmpty",
      "msg": "Obligation collateral is empty"
    },
    {
      "code": 6040,
      "name": "ObligationLiquidityEmpty",
      "msg": "Obligation liquidity is empty"
    },
    {
      "code": 6041,
      "name": "NegativeInterestRate",
      "msg": "Interest rate is negative"
    },
    {
      "code": 6042,
      "name": "InvalidOracleConfig",
      "msg": "Input oracle config is invalid"
    },
    {
      "code": 6043,
      "name": "NotEnoughLiquidityAfterFlashLoan",
      "msg": "Not enough liquidity after flash loan"
    },
    {
      "code": 6044,
      "name": "MethodNotAllowed",
      "msg": "405 method not allowed"
    },
    {
      "code": 6045,
      "name": "InvalidUpdatePseudoDepositOperation",
      "msg": "Invalid update pseudo deposit operation"
    },
    {
      "code": 6046,
      "name": "UnauthorizedBorrowAuthorizer",
      "msg": "Unauthorized borrow signer"
    },
    {
      "code": 6047,
      "name": "InvalidPythPriceAccount",
      "msg": "Invalid Pyth Price Account"
    }
  ]
};

export const IDL: AdapterTulip = {
  "version": "0.1.0",
  "name": "adapter_tulip",
  "instructions": [
    {
      "name": "deposit",
      "accounts": [
        {
          "name": "gatewayAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "baseProgramId",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "input",
          "type": "bytes"
        }
      ]
    },
    {
      "name": "withdraw",
      "accounts": [
        {
          "name": "gatewayAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "baseProgramId",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "input",
          "type": "bytes"
        }
      ]
    },
    {
      "name": "withdrawMultiDepositVaultThroughMango",
      "accounts": [
        {
          "name": "commonData",
          "accounts": [
            {
              "name": "authority",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "multiVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "multiVaultPda",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "withdrawVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "withdrawVaultPda",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "platformInformation",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "platformConfigData",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "multiBurningSharesTokenAccount",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "withdrawBurningSharesTokenAccount",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "receivingUnderlyingTokenAccount",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "multiUnderlyingWithdrawQueue",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "multiSharesMint",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "withdrawSharesMint",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "withdrawVaultUnderlyingDepositQueue",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "clock",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "lendingProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "vaultProgram",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "mangoGroupAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "withdrawVaultMangoAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mangoCache",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mangoRootBank",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mangoNodeBank",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mangoTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mangoGroupSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawMultiDepositVaultThroughSolend",
      "accounts": [
        {
          "name": "commonData",
          "accounts": [
            {
              "name": "authority",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "multiVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "multiVaultPda",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "withdrawVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "withdrawVaultPda",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "platformInformation",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "platformConfigData",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "multiBurningSharesTokenAccount",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "withdrawBurningSharesTokenAccount",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "receivingUnderlyingTokenAccount",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "multiUnderlyingWithdrawQueue",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "multiSharesMint",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "withdrawSharesMint",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "withdrawVaultUnderlyingDepositQueue",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "clock",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "lendingProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "vaultProgram",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "reserveAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveLiquiditySupply",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveCollateralMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarketAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "derivedLendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reservePythPriceAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserveSwitchboardPriceAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawMultiDepositVaultThroughTulip",
      "accounts": [
        {
          "name": "commonData",
          "accounts": [
            {
              "name": "authority",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "multiVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "multiVaultPda",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "withdrawVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "withdrawVaultPda",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "platformInformation",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "platformConfigData",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "multiBurningSharesTokenAccount",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "withdrawBurningSharesTokenAccount",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "receivingUnderlyingTokenAccount",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "multiUnderlyingWithdrawQueue",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "multiSharesMint",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "withdrawSharesMint",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "withdrawVaultUnderlyingDepositQueue",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "clock",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "lendingProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "vaultProgram",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "reserveAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveLiquiditySupply",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveCollateralMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarketAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "derivedLendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reservePythPriceAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "supply",
      "accounts": [
        {
          "name": "gatewayAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "baseProgramId",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "input",
          "type": "bytes"
        }
      ]
    },
    {
      "name": "unsupply",
      "accounts": [
        {
          "name": "gatewayAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "baseProgramId",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "input",
          "type": "bytes"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "lendingOptimizerV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "base",
            "type": {
              "defined": "VaultBaseV1"
            }
          },
          {
            "name": "currentFarmProgram",
            "type": "publicKey"
          },
          {
            "name": "currentPlatformInformation",
            "type": "publicKey"
          },
          {
            "name": "currentPlatformCount",
            "type": "u64"
          },
          {
            "name": "lastRebaseSlot",
            "type": "u64"
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u8",
                1000
              ]
            }
          }
        ]
      }
    },
    {
      "name": "lendingPlatformV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "vault",
            "type": "publicKey"
          },
          {
            "name": "programAddress",
            "type": "publicKey"
          },
          {
            "name": "programType",
            "type": {
              "defined": "ProgramType"
            }
          },
          {
            "name": "configDataAddress",
            "type": "publicKey"
          },
          {
            "name": "index",
            "type": "u64"
          },
          {
            "name": "nonce",
            "type": "u8"
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u8",
                256
              ]
            }
          }
        ]
      }
    },
    {
      "name": "splLendingConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "collateralMint",
            "type": "publicKey"
          },
          {
            "name": "reserveAccount",
            "type": "publicKey"
          },
          {
            "name": "reserveLiquidityAccount",
            "type": "publicKey"
          },
          {
            "name": "lendingMarketAccount",
            "type": "publicKey"
          },
          {
            "name": "derivedLendingMarketAuthority",
            "type": "publicKey"
          },
          {
            "name": "collateralTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "oracleKeys",
            "type": {
              "array": [
                "publicKey",
                3
              ]
            }
          },
          {
            "name": "oraclePrograms",
            "type": {
              "array": [
                "publicKey",
                3
              ]
            }
          },
          {
            "name": "informationAccount",
            "type": "publicKey"
          },
          {
            "name": "nonce",
            "type": "u8"
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u8",
                256
              ]
            }
          }
        ]
      }
    },
    {
      "name": "mangoV3Config",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroupAccount",
            "type": "publicKey"
          },
          {
            "name": "mangoAccount",
            "type": "publicKey"
          },
          {
            "name": "mangoCache",
            "type": "publicKey"
          },
          {
            "name": "mangoRootBank",
            "type": "publicKey"
          },
          {
            "name": "mangoNodeBank",
            "type": "publicKey"
          },
          {
            "name": "mangoGroupTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "informationAccount",
            "type": "publicKey"
          },
          {
            "name": "nonce",
            "type": "u8"
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u8",
                256
              ]
            }
          }
        ]
      }
    },
    {
      "name": "multiDepositOptimizerV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "base",
            "type": {
              "defined": "VaultBaseV1"
            }
          },
          {
            "name": "lastRebaseSlot",
            "type": "u64"
          },
          {
            "name": "standaloneVaults",
            "type": {
              "array": [
                {
                  "defined": "StandaloneVaultCacheV1"
                },
                6
              ]
            }
          },
          {
            "name": "targetVault",
            "type": "publicKey"
          },
          {
            "name": "stateTransitionAccount",
            "type": "publicKey"
          },
          {
            "name": "minimumRebalanceAmount",
            "type": "u64"
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u8",
                272
              ]
            }
          }
        ]
      }
    },
    {
      "name": "rebalanceStateTransitionV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "optimizerVault",
            "type": "publicKey"
          },
          {
            "name": "vaultRemovalAmountA",
            "type": "u64"
          },
          {
            "name": "vaultSupplyAmountB",
            "type": "u64"
          },
          {
            "name": "unusedTwo",
            "type": "u64"
          },
          {
            "name": "unusedThree",
            "type": "u64"
          },
          {
            "name": "vaultAddressA",
            "type": "publicKey"
          },
          {
            "name": "vaultAddressB",
            "type": "publicKey"
          },
          {
            "name": "vaultAProgramType",
            "type": {
              "defined": "ProgramType"
            }
          },
          {
            "name": "vaultBProgramType",
            "type": {
              "defined": "ProgramType"
            }
          },
          {
            "name": "state",
            "type": {
              "defined": "RebalanceStates"
            }
          },
          {
            "name": "lastCompletionTs",
            "type": "i64"
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u8",
                256
              ]
            }
          }
        ]
      }
    },
    {
      "name": "orcaVaultV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "base",
            "type": {
              "defined": "VaultBaseV1"
            }
          },
          {
            "name": "farmData",
            "type": {
              "defined": "OrcaVaultDataV1"
            }
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u8",
                135
              ]
            }
          }
        ]
      }
    },
    {
      "name": "orcaDoubleDipVaultV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "base",
            "type": {
              "defined": "VaultBaseV1"
            }
          },
          {
            "name": "farmData",
            "type": {
              "defined": "OrcaVaultDataV1"
            }
          },
          {
            "name": "ddFarmData",
            "type": {
              "defined": "OrcaVaultDataV1"
            }
          },
          {
            "name": "ddCompoundQueue",
            "type": "publicKey"
          },
          {
            "name": "ddCompoundQueueNonce",
            "type": "u8"
          },
          {
            "name": "ddConfigured",
            "type": "u8"
          },
          {
            "name": "ddWithdrawQueue",
            "type": "publicKey"
          },
          {
            "name": "ddWithdrawQueueNonce",
            "type": "u8"
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u8",
                35
              ]
            }
          }
        ]
      }
    },
    {
      "name": "quarryVaultV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "base",
            "type": {
              "defined": "VaultBaseV1"
            }
          },
          {
            "name": "miner",
            "type": "publicKey"
          },
          {
            "name": "minerTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "mintWrapper",
            "type": "publicKey"
          },
          {
            "name": "minter",
            "type": "publicKey"
          },
          {
            "name": "quarry",
            "type": "publicKey"
          },
          {
            "name": "rewarder",
            "type": "publicKey"
          },
          {
            "name": "rewardTokenMint",
            "type": "publicKey"
          },
          {
            "name": "rewardTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "swapMarkets",
            "type": {
              "array": [
                "publicKey",
                3
              ]
            }
          },
          {
            "name": "variant",
            "type": {
              "defined": "QuarryVariant"
            }
          },
          {
            "name": "configData",
            "type": "publicKey"
          },
          {
            "name": "configDataInitialized",
            "type": "u8"
          },
          {
            "name": "extraDataAccount",
            "type": "publicKey"
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u8",
                263
              ]
            }
          }
        ]
      }
    },
    {
      "name": "saberConfigurationDataV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "vault",
            "type": "publicKey"
          },
          {
            "name": "isDecimalWrappedA",
            "type": "u8"
          },
          {
            "name": "isDecimalWrappedB",
            "type": "u8"
          },
          {
            "name": "wrapperMintA",
            "type": "publicKey"
          },
          {
            "name": "wrapperAccountA",
            "type": "publicKey"
          },
          {
            "name": "wrapperAccountB",
            "type": "publicKey"
          },
          {
            "name": "wrapperMintB",
            "type": "publicKey"
          },
          {
            "name": "extraDataAccount",
            "type": "publicKey"
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u8",
                256
              ]
            }
          }
        ]
      }
    },
    {
      "name": "sunnyConfigurationDataV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "vault",
            "type": "publicKey"
          },
          {
            "name": "isDecimalWrappedA",
            "type": "u8"
          },
          {
            "name": "isDecimalWrappedB",
            "type": "u8"
          },
          {
            "name": "wrapperMintA",
            "type": "publicKey"
          },
          {
            "name": "wrapperAccountA",
            "type": "publicKey"
          },
          {
            "name": "wrapperAccountB",
            "type": "publicKey"
          },
          {
            "name": "wrapperMintB",
            "type": "publicKey"
          },
          {
            "name": "sunnyPool",
            "type": "publicKey"
          },
          {
            "name": "sunnyTvault",
            "type": "publicKey"
          },
          {
            "name": "sunnyMiner",
            "type": "publicKey"
          },
          {
            "name": "sunnyMinerTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "sunnyRewarder",
            "type": "publicKey"
          },
          {
            "name": "extraDataAccount",
            "type": "publicKey"
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u8",
                128
              ]
            }
          }
        ]
      }
    },
    {
      "name": "raydiumVaultV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "base",
            "type": {
              "defined": "VaultBaseV1"
            }
          },
          {
            "name": "raydiumLpMintAddress",
            "type": "publicKey"
          },
          {
            "name": "raydiumAmmId",
            "type": "publicKey"
          },
          {
            "name": "raydiumAmmAuthority",
            "type": "publicKey"
          },
          {
            "name": "raydiumAmmOpenOrders",
            "type": "publicKey"
          },
          {
            "name": "raydiumAmmQuantitiesOrTargetOrders",
            "type": "publicKey"
          },
          {
            "name": "raydiumStakeProgram",
            "type": "publicKey"
          },
          {
            "name": "raydiumLiquidityProgram",
            "type": "publicKey"
          },
          {
            "name": "raydiumCoinTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "raydiumPcTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "raydiumPoolTempTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "raydiumPoolLpTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "raydiumPoolWithdrawQueue",
            "type": "publicKey"
          },
          {
            "name": "raydiumPoolId",
            "type": "publicKey"
          },
          {
            "name": "raydiumPoolAuthority",
            "type": "publicKey"
          },
          {
            "name": "raydiumPoolRewardATokenAccount",
            "type": "publicKey"
          },
          {
            "name": "raydiumPoolRewardBTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "dualRewards",
            "type": "u8"
          },
          {
            "name": "vaultRewardATokenAccount",
            "type": "publicKey"
          },
          {
            "name": "vaultRewardBTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "vaultStakeInfoAccount",
            "type": "publicKey"
          },
          {
            "name": "associatedStakeInfoAddress",
            "type": "publicKey"
          },
          {
            "name": "coinMint",
            "type": "publicKey"
          },
          {
            "name": "pcMint",
            "type": "publicKey"
          },
          {
            "name": "serumMarket",
            "type": "publicKey"
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u8",
                407
              ]
            }
          }
        ]
      }
    },
    {
      "name": "depositTrackingV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "vault",
            "type": "publicKey"
          },
          {
            "name": "pdaNonce",
            "type": "u8"
          },
          {
            "name": "queueNonce",
            "type": "u8"
          },
          {
            "name": "alignment",
            "type": {
              "array": [
                "u8",
                6
              ]
            }
          },
          {
            "name": "shares",
            "type": "u64"
          },
          {
            "name": "depositedBalance",
            "type": "u64"
          },
          {
            "name": "lastDepositTime",
            "type": "i64"
          },
          {
            "name": "pendingWithdrawAmount",
            "type": "u64"
          },
          {
            "name": "totalDepositedUnderlying",
            "type": "u64"
          },
          {
            "name": "totalWithdrawnUnderlying",
            "type": "u64"
          },
          {
            "name": "lastPendingReward",
            "type": "u64"
          },
          {
            "name": "rewardPerSharePaid",
            "type": "u128"
          },
          {
            "name": "extraDataAccount",
            "type": "publicKey"
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u8",
                256
              ]
            }
          }
        ]
      }
    },
    {
      "name": "ephemeralTrackingV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "availableForWithdraw",
            "type": "u64"
          },
          {
            "name": "liqToRemove",
            "type": "u64"
          },
          {
            "name": "configured",
            "type": "u8"
          },
          {
            "name": "canWithdraw",
            "type": "u8"
          },
          {
            "name": "metadataOne",
            "type": {
              "array": [
                "u8",
                64
              ]
            }
          },
          {
            "name": "metadataTwo",
            "type": {
              "array": [
                "u8",
                64
              ]
            }
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u8",
                254
              ]
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "StandaloneVaultCacheV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "vaultAddress",
            "type": "publicKey"
          },
          {
            "name": "depositedBalance",
            "type": "u64"
          },
          {
            "name": "programType",
            "type": {
              "defined": "ProgramType"
            }
          },
          {
            "name": "programAddress",
            "type": "publicKey"
          },
          {
            "name": "sharesMint",
            "type": "publicKey"
          },
          {
            "name": "sharesAccount",
            "type": "publicKey"
          },
          {
            "name": "alignment",
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u64",
                6
              ]
            }
          }
        ]
      }
    },
    {
      "name": "OrcaVaultDataV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "userFarmAddr",
            "type": "publicKey"
          },
          {
            "name": "userFarmNonce",
            "type": "u8"
          },
          {
            "name": "vaultSwapTokenA",
            "type": "publicKey"
          },
          {
            "name": "vaultSwapTokenB",
            "type": "publicKey"
          },
          {
            "name": "poolSwapTokenA",
            "type": "publicKey"
          },
          {
            "name": "poolSwapTokenB",
            "type": "publicKey"
          },
          {
            "name": "poolSwapAccount",
            "type": "publicKey"
          },
          {
            "name": "vaultRewardTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "vaultFarmTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "vaultSwapTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "globalBaseTokenVault",
            "type": "publicKey"
          },
          {
            "name": "globalRewardTokenVault",
            "type": "publicKey"
          },
          {
            "name": "globalFarm",
            "type": "publicKey"
          },
          {
            "name": "farmTokenMint",
            "type": "publicKey"
          },
          {
            "name": "rewardTokenMint",
            "type": "publicKey"
          },
          {
            "name": "swapPoolMint",
            "type": "publicKey"
          },
          {
            "name": "tokenAMint",
            "type": "publicKey"
          },
          {
            "name": "tokenBMint",
            "type": "publicKey"
          },
          {
            "name": "swapMarkets",
            "type": {
              "array": [
                "publicKey",
                3
              ]
            }
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "ConfigureOrcaVaultArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "userFarmAddr",
            "type": "publicKey"
          },
          {
            "name": "userFarmNonce",
            "type": "u8"
          },
          {
            "name": "vaultSwapTokenA",
            "type": "publicKey"
          },
          {
            "name": "vaultSwapTokenB",
            "type": "publicKey"
          },
          {
            "name": "poolSwapTokenA",
            "type": "publicKey"
          },
          {
            "name": "poolSwapTokenB",
            "type": "publicKey"
          },
          {
            "name": "poolSwapAccount",
            "type": "publicKey"
          },
          {
            "name": "vaultRewardTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "vaultFarmTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "vaultSwapTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "globalFarm",
            "type": "publicKey"
          },
          {
            "name": "globalBaseTokenVault",
            "type": "publicKey"
          },
          {
            "name": "globalRewardTokenVault",
            "type": "publicKey"
          },
          {
            "name": "farmTokenMint",
            "type": "publicKey"
          },
          {
            "name": "rewardTokenMint",
            "type": "publicKey"
          },
          {
            "name": "swapPoolMint",
            "type": "publicKey"
          },
          {
            "name": "tokenAMint",
            "type": "publicKey"
          },
          {
            "name": "tokenBMint",
            "type": "publicKey"
          },
          {
            "name": "swapMarkets",
            "type": {
              "array": [
                "publicKey",
                3
              ]
            }
          }
        ]
      }
    },
    {
      "name": "FeesV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "feeMultiplier",
            "type": "u64"
          },
          {
            "name": "controllerFee",
            "type": "u64"
          },
          {
            "name": "platformFee",
            "type": "u64"
          },
          {
            "name": "withdrawFee",
            "type": "u64"
          },
          {
            "name": "depositFee",
            "type": "u64"
          },
          {
            "name": "feeWallet",
            "type": "publicKey"
          },
          {
            "name": "totalCollectedA",
            "type": "u64"
          },
          {
            "name": "totalCollectedB",
            "type": "u64"
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u64",
                6
              ]
            }
          }
        ]
      }
    },
    {
      "name": "TestData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "a",
            "type": "u128"
          },
          {
            "name": "b",
            "type": "u128"
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u64",
                4
              ]
            }
          }
        ]
      }
    },
    {
      "name": "VaultBaseV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "nonce",
            "type": "u8"
          },
          {
            "name": "tag",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "pda",
            "type": "publicKey"
          },
          {
            "name": "pdaNonce",
            "type": "u8"
          },
          {
            "name": "pdaAlignment",
            "type": {
              "array": [
                "u8",
                6
              ]
            }
          },
          {
            "name": "totalDepositedBalance",
            "type": "u64"
          },
          {
            "name": "totalShares",
            "type": "u64"
          },
          {
            "name": "underlyingMint",
            "type": "publicKey"
          },
          {
            "name": "underlyingWithdrawQueue",
            "type": "publicKey"
          },
          {
            "name": "underlyingDepositQueue",
            "type": "publicKey"
          },
          {
            "name": "underlyingCompoundQueue",
            "type": "publicKey"
          },
          {
            "name": "sharesMint",
            "type": "publicKey"
          },
          {
            "name": "withdrawsPaused",
            "type": "u8"
          },
          {
            "name": "depositsPaused",
            "type": "u8"
          },
          {
            "name": "compoundPaused",
            "type": "u8"
          },
          {
            "name": "supportsCompound",
            "type": "u8"
          },
          {
            "name": "rebasePaused",
            "type": "u8"
          },
          {
            "name": "rebalancePaused",
            "type": "u8"
          },
          {
            "name": "stateAlignment",
            "type": {
              "array": [
                "u8",
                2
              ]
            }
          },
          {
            "name": "precisionFactor",
            "type": "u64"
          },
          {
            "name": "lastCompoundTime",
            "type": "i64"
          },
          {
            "name": "compoundInterval",
            "type": "i64"
          },
          {
            "name": "slippageTolerance",
            "type": "u8"
          },
          {
            "name": "slipAlignment",
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          },
          {
            "name": "fees",
            "type": {
              "defined": "FeesV1"
            }
          },
          {
            "name": "farm",
            "type": {
              "array": [
                "u64",
                2
              ]
            }
          },
          {
            "name": "configured",
            "type": "u8"
          },
          {
            "name": "configuredAlignment",
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          },
          {
            "name": "pendingFees",
            "type": "u64"
          },
          {
            "name": "totalDepositedBalanceCap",
            "type": "u64"
          },
          {
            "name": "testData",
            "type": {
              "defined": "TestData"
            }
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u64",
                4
              ]
            }
          }
        ]
      }
    },
    {
      "name": "DepositInputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lpAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "WithdrawInputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "shareAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "SupplyInputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "supplyAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "UnsupplyInputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "reservedAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "DepositOutputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "shareAmount",
            "type": "u64"
          },
          {
            "name": "dummy2",
            "type": "u64"
          },
          {
            "name": "dummy3",
            "type": "u64"
          },
          {
            "name": "dummy4",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "WithdrawOutputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lpAmount",
            "type": "u64"
          },
          {
            "name": "dummy2",
            "type": "u64"
          },
          {
            "name": "dummy3",
            "type": "u64"
          },
          {
            "name": "dummy4",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "SupplyOutputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "reservedAmount",
            "type": "u64"
          },
          {
            "name": "dummy2",
            "type": "u64"
          },
          {
            "name": "dummy3",
            "type": "u64"
          },
          {
            "name": "dummy4",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "UnsupplyOutputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "unsupplyAmount",
            "type": "u64"
          },
          {
            "name": "dummy2",
            "type": "u64"
          },
          {
            "name": "dummy3",
            "type": "u64"
          },
          {
            "name": "dummy4",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "FeeCalculation",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Exclusive"
          },
          {
            "name": "Inclusive"
          }
        ]
      }
    },
    {
      "name": "MathError",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "MathOverflow"
          }
        ]
      }
    },
    {
      "name": "PausableAction",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Deposit"
          },
          {
            "name": "Withdrawal"
          },
          {
            "name": "DepositAndWithdrawal"
          },
          {
            "name": "Compound"
          },
          {
            "name": "Rebase"
          },
          {
            "name": "Rebalance"
          },
          {
            "name": "All"
          },
          {
            "name": "Unknown"
          }
        ]
      }
    },
    {
      "name": "Lending",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "TULIP"
          },
          {
            "name": "SOLEND"
          },
          {
            "name": "MANGO"
          },
          {
            "name": "PORT"
          },
          {
            "name": "LARIX"
          },
          {
            "name": "PARROT"
          },
          {
            "name": "USDC"
          },
          {
            "name": "MULTI_DEPOSIT"
          },
          {
            "name": "RAY"
          },
          {
            "name": "USDT"
          },
          {
            "name": "SOL"
          },
          {
            "name": "PLACEHOLDER_E"
          },
          {
            "name": "PLACEHOLDER_F"
          },
          {
            "name": "PLACEHOLDER_G"
          },
          {
            "name": "PLACEHOLDER_H"
          },
          {
            "name": "PLACEHOLDER_I"
          },
          {
            "name": "PLACEHOLDER_J"
          },
          {
            "name": "PLACEHOLDER_K"
          },
          {
            "name": "PLACEHOLDER_L"
          },
          {
            "name": "PLACEHOLDER_M"
          },
          {
            "name": "PLACEHOLDER_N"
          },
          {
            "name": "PLACEHOLDER_O"
          },
          {
            "name": "PLACEHOLDER_P"
          },
          {
            "name": "PLACEHOLDER_Q"
          },
          {
            "name": "PLACEHOLDER_R"
          },
          {
            "name": "PLACEHOLDER_S"
          },
          {
            "name": "PLACEHOLDER_T"
          },
          {
            "name": "PLACEHOLDER_U"
          },
          {
            "name": "PLACEHOLDER_V"
          },
          {
            "name": "PLACEHOLDER_W"
          },
          {
            "name": "PLACEHOLDER_X"
          },
          {
            "name": "PLACEHOLDER_Y"
          },
          {
            "name": "PLACEHOLDER_Z"
          },
          {
            "name": "UNKNOWN"
          }
        ]
      }
    },
    {
      "name": "Orca",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "ATLASUSDC"
          },
          {
            "name": "POLISUSDC"
          },
          {
            "name": "ORCASOL"
          },
          {
            "name": "USDTUSDC"
          },
          {
            "name": "ORCAUSDC"
          },
          {
            "name": "BASISUSDC"
          },
          {
            "name": "SAMOUSDC"
          },
          {
            "name": "SHDWUSDC"
          },
          {
            "name": "SHDWSOL"
          },
          {
            "name": "stSOLUSDC"
          },
          {
            "name": "wUSTUSDC"
          },
          {
            "name": "CMFIUSDC"
          },
          {
            "name": "PLACEHOLDER_B"
          },
          {
            "name": "PLACEHOLDER_C"
          },
          {
            "name": "PLACEHOLDER_D"
          },
          {
            "name": "PLACEHOLDER_E"
          },
          {
            "name": "PLACEHOLDER_F"
          },
          {
            "name": "PLACEHOLDER_G"
          },
          {
            "name": "PLACEHOLDER_H"
          },
          {
            "name": "PLACEHOLDER_I"
          },
          {
            "name": "PLACEHOLDER_J"
          },
          {
            "name": "PLACEHOLDER_K"
          },
          {
            "name": "PLACEHOLDER_L"
          },
          {
            "name": "PLACEHOLDER_M"
          },
          {
            "name": "PLACEHOLDER_N"
          },
          {
            "name": "PLACEHOLDER_O"
          },
          {
            "name": "PLACEHOLDER_P"
          },
          {
            "name": "PLACEHOLDER_Q"
          },
          {
            "name": "PLACEHOLDER_R"
          },
          {
            "name": "PLACEHOLDER_S"
          },
          {
            "name": "PLACEHOLDER_T"
          },
          {
            "name": "PLACEHOLDER_U"
          },
          {
            "name": "PLACEHOLDER_V"
          },
          {
            "name": "PLACEHOLDER_W"
          },
          {
            "name": "PLACEHOLDER_X"
          },
          {
            "name": "PLACEHOLDER_Y"
          },
          {
            "name": "PLACEHOLDER_Z"
          },
          {
            "name": "UNKNOWN"
          }
        ]
      }
    },
    {
      "name": "Quarry",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "VANILLA"
          },
          {
            "name": "SABER"
          },
          {
            "name": "SUNNY"
          },
          {
            "name": "UNKNOWN"
          }
        ]
      }
    },
    {
      "name": "Raydium",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "ALEPHUSDC"
          },
          {
            "name": "BOPRAY"
          },
          {
            "name": "COPEUSDC"
          },
          {
            "name": "LIKEUSDC"
          },
          {
            "name": "PSYUSDC"
          },
          {
            "name": "MERUSDC"
          },
          {
            "name": "stSOLUSDC"
          },
          {
            "name": "RAY"
          },
          {
            "name": "RAYUSDT"
          },
          {
            "name": "RAYUSDC"
          },
          {
            "name": "RAYSRM"
          },
          {
            "name": "RAYSOL"
          },
          {
            "name": "RAYETH"
          },
          {
            "name": "ROPEUSDC"
          },
          {
            "name": "SAMORAY"
          },
          {
            "name": "SNYUSDC"
          },
          {
            "name": "stSOLUSDT"
          },
          {
            "name": "TULIPUSDC"
          },
          {
            "name": "ATLASRAY"
          },
          {
            "name": "POLISRAY"
          },
          {
            "name": "PLACEHOLDER_A"
          },
          {
            "name": "PLACEHOLDER_B"
          },
          {
            "name": "PLACEHOLDER_C"
          },
          {
            "name": "PLACEHOLDER_D"
          },
          {
            "name": "PLACEHOLDER_E"
          },
          {
            "name": "PLACEHOLDER_F"
          },
          {
            "name": "PLACEHOLDER_G"
          },
          {
            "name": "PLACEHOLDER_H"
          },
          {
            "name": "PLACEHOLDER_I"
          },
          {
            "name": "PLACEHOLDER_J"
          },
          {
            "name": "PLACEHOLDER_K"
          },
          {
            "name": "PLACEHOLDER_L"
          },
          {
            "name": "PLACEHOLDER_M"
          },
          {
            "name": "PLACEHOLDER_N"
          },
          {
            "name": "PLACEHOLDER_O"
          },
          {
            "name": "PLACEHOLDER_P"
          },
          {
            "name": "PLACEHOLDER_Q"
          },
          {
            "name": "PLACEHOLDER_R"
          },
          {
            "name": "PLACEHOLDER_S"
          },
          {
            "name": "PLACEHOLDER_T"
          },
          {
            "name": "PLACEHOLDER_U"
          },
          {
            "name": "PLACEHOLDER_V"
          },
          {
            "name": "PLACEHOLDER_W"
          },
          {
            "name": "PLACEHOLDER_X"
          },
          {
            "name": "PLACEHOLDER_Y"
          },
          {
            "name": "PLACEHOLDER_Z"
          },
          {
            "name": "UNKNOWN"
          }
        ]
      }
    },
    {
      "name": "Unknown",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Uknown"
          }
        ]
      }
    },
    {
      "name": "Farm",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Raydium",
            "fields": [
              {
                "name": "name",
                "type": {
                  "defined": "Raydium"
                }
              }
            ]
          },
          {
            "name": "Lending",
            "fields": [
              {
                "name": "name",
                "type": {
                  "defined": "Lending"
                }
              }
            ]
          },
          {
            "name": "Orca",
            "fields": [
              {
                "name": "name",
                "type": {
                  "defined": "Orca"
                }
              }
            ]
          },
          {
            "name": "Quarry",
            "fields": [
              {
                "name": "name",
                "type": {
                  "defined": "Quarry"
                }
              }
            ]
          },
          {
            "name": "Unknown",
            "fields": [
              {
                "name": "name",
                "type": {
                  "defined": "Unknown"
                }
              }
            ]
          }
        ]
      }
    },
    {
      "name": "ProgramType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "SplUnmodified"
          },
          {
            "name": "SplModifiedSolend"
          },
          {
            "name": "MangoV3"
          },
          {
            "name": "Unknown"
          }
        ]
      }
    },
    {
      "name": "RebalanceStates",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Inactive"
          },
          {
            "name": "Started"
          },
          {
            "name": "VaultARemoved"
          },
          {
            "name": "VaultABRebalanced"
          }
        ]
      }
    },
    {
      "name": "QuarryVariant",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Vanilla"
          },
          {
            "name": "Saber"
          },
          {
            "name": "Sunny"
          },
          {
            "name": "UNKNOWN"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InstructionUnpackError",
      "msg": "Failed to unpack instruction data"
    },
    {
      "code": 6001,
      "name": "AlreadyInitialized",
      "msg": "Account is already initialized"
    },
    {
      "code": 6002,
      "name": "NotRentExempt",
      "msg": "Lamport balance below rent-exempt threshold"
    },
    {
      "code": 6003,
      "name": "InvalidMarketAuthority",
      "msg": "Market authority is invalid"
    },
    {
      "code": 6004,
      "name": "InvalidMarketOwner",
      "msg": "Market owner is invalid"
    },
    {
      "code": 6005,
      "name": "InvalidAccountOwner",
      "msg": "Input account owner is not the program address"
    },
    {
      "code": 6006,
      "name": "InvalidTokenOwner",
      "msg": "Input token account is not owned by the correct token program id"
    },
    {
      "code": 6007,
      "name": "InvalidTokenAccount",
      "msg": "Input token account is not valid"
    },
    {
      "code": 6008,
      "name": "InvalidTokenMint",
      "msg": "Input token mint account is not valid"
    },
    {
      "code": 6009,
      "name": "InvalidTokenProgram",
      "msg": "Input token program account is not valid"
    },
    {
      "code": 6010,
      "name": "InvalidAmount",
      "msg": "Input amount is invalid"
    },
    {
      "code": 6011,
      "name": "InvalidConfig",
      "msg": "Input config value is invalid"
    },
    {
      "code": 6012,
      "name": "InvalidSigner",
      "msg": "Input account must be a signer"
    },
    {
      "code": 6013,
      "name": "InvalidAccountInput",
      "msg": "Invalid account input"
    },
    {
      "code": 6014,
      "name": "MathOverflow",
      "msg": "Math operation overflow"
    },
    {
      "code": 6015,
      "name": "TokenInitializeMintFailed",
      "msg": "Token initialize mint failed"
    },
    {
      "code": 6016,
      "name": "TokenInitializeAccountFailed",
      "msg": "Token initialize account failed"
    },
    {
      "code": 6017,
      "name": "TokenTransferFailed",
      "msg": "Token transfer failed"
    },
    {
      "code": 6018,
      "name": "TokenMintToFailed",
      "msg": "Token mint to failed"
    },
    {
      "code": 6019,
      "name": "TokenBurnFailed",
      "msg": "Token burn failed"
    },
    {
      "code": 6020,
      "name": "InsufficientLiquidity",
      "msg": "Insufficient liquidity available"
    },
    {
      "code": 6021,
      "name": "ReserveCollateralDisabled",
      "msg": "Input reserve has collateral disabled"
    },
    {
      "code": 6022,
      "name": "ReserveStale",
      "msg": "Reserve state needs to be refreshed"
    },
    {
      "code": 6023,
      "name": "WithdrawTooSmall",
      "msg": "Withdraw amount too small"
    },
    {
      "code": 6024,
      "name": "WithdrawTooLarge",
      "msg": "Withdraw amount too large"
    },
    {
      "code": 6025,
      "name": "BorrowTooSmall",
      "msg": "Borrow amount too small to receive liquidity after fees"
    },
    {
      "code": 6026,
      "name": "BorrowTooLarge",
      "msg": "Borrow amount too large for deposited collateral"
    },
    {
      "code": 6027,
      "name": "RepayTooSmall",
      "msg": "Repay amount too small to transfer liquidity"
    },
    {
      "code": 6028,
      "name": "LiquidationTooSmall",
      "msg": "Liquidation amount too small to receive collateral"
    },
    {
      "code": 6029,
      "name": "ObligationHealthy",
      "msg": "Cannot liquidate healthy obligations"
    },
    {
      "code": 6030,
      "name": "ObligationStale",
      "msg": "Obligation state needs to be refreshed"
    },
    {
      "code": 6031,
      "name": "ObligationReserveLimit",
      "msg": "Obligation reserve limit exceeded"
    },
    {
      "code": 6032,
      "name": "InvalidObligationOwner",
      "msg": "Obligation owner is invalid"
    },
    {
      "code": 6033,
      "name": "ObligationDepositsEmpty",
      "msg": "Obligation deposits are empty"
    },
    {
      "code": 6034,
      "name": "ObligationBorrowsEmpty",
      "msg": "Obligation borrows are empty"
    },
    {
      "code": 6035,
      "name": "ObligationDepositsZero",
      "msg": "Obligation deposits have zero value"
    },
    {
      "code": 6036,
      "name": "ObligationBorrowsZero",
      "msg": "Obligation borrows have zero value"
    },
    {
      "code": 6037,
      "name": "InvalidObligationCollateral",
      "msg": "Invalid obligation collateral"
    },
    {
      "code": 6038,
      "name": "InvalidObligationLiquidity",
      "msg": "Invalid obligation liquidity"
    },
    {
      "code": 6039,
      "name": "ObligationCollateralEmpty",
      "msg": "Obligation collateral is empty"
    },
    {
      "code": 6040,
      "name": "ObligationLiquidityEmpty",
      "msg": "Obligation liquidity is empty"
    },
    {
      "code": 6041,
      "name": "NegativeInterestRate",
      "msg": "Interest rate is negative"
    },
    {
      "code": 6042,
      "name": "InvalidOracleConfig",
      "msg": "Input oracle config is invalid"
    },
    {
      "code": 6043,
      "name": "NotEnoughLiquidityAfterFlashLoan",
      "msg": "Not enough liquidity after flash loan"
    },
    {
      "code": 6044,
      "name": "MethodNotAllowed",
      "msg": "405 method not allowed"
    },
    {
      "code": 6045,
      "name": "InvalidUpdatePseudoDepositOperation",
      "msg": "Invalid update pseudo deposit operation"
    },
    {
      "code": 6046,
      "name": "UnauthorizedBorrowAuthorizer",
      "msg": "Unauthorized borrow signer"
    },
    {
      "code": 6047,
      "name": "InvalidPythPriceAccount",
      "msg": "Invalid Pyth Price Account"
    }
  ]
};
