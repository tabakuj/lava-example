import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../helpers";
import { MsgDetection, MsgConflictVoteCommit, MsgConflictVoteReveal } from "./tx";
export interface MsgDetectionAminoType extends AminoMsg {
  type: "/lavanet.lava.conflict.MsgDetection";
  value: {
    creator: string;
    finalizationConflict: {
      relayReply0: {
        data: Uint8Array;
        sig: Uint8Array;
        nonce: number;
        latest_block: string;
        finalized_blocks_hashes: Uint8Array;
        sig_blocks: Uint8Array;
      };
      relayReply1: {
        data: Uint8Array;
        sig: Uint8Array;
        nonce: number;
        latest_block: string;
        finalized_blocks_hashes: Uint8Array;
        sig_blocks: Uint8Array;
      };
    };
    responseConflict: {
      conflictRelayData0: {
        request: {
          relay_session: {
            spec_id: string;
            content_hash: Uint8Array;
            session_id: string;
            cu_sum: string;
            provider: string;
            relay_num: string;
            qos_report: {
              latency: string;
              availability: string;
              sync: string;
            };
            epoch: string;
            unresponsive_providers: Uint8Array;
            lava_chain_id: string;
            sig: Uint8Array;
            badge: {
              cu_allocation: string;
              epoch: string;
              address: string;
              lava_chain_id: string;
              project_sig: Uint8Array;
            };
          };
          relay_data: {
            connection_type: string;
            api_url: string;
            data: Uint8Array;
            request_block: string;
            api_interface: string;
            salt: Uint8Array;
          };
        };
        reply: {
          data: Uint8Array;
          sig: Uint8Array;
          nonce: number;
          latest_block: string;
          finalized_blocks_hashes: Uint8Array;
          sig_blocks: Uint8Array;
        };
      };
      conflictRelayData1: {
        request: {
          relay_session: {
            spec_id: string;
            content_hash: Uint8Array;
            session_id: string;
            cu_sum: string;
            provider: string;
            relay_num: string;
            qos_report: {
              latency: string;
              availability: string;
              sync: string;
            };
            epoch: string;
            unresponsive_providers: Uint8Array;
            lava_chain_id: string;
            sig: Uint8Array;
            badge: {
              cu_allocation: string;
              epoch: string;
              address: string;
              lava_chain_id: string;
              project_sig: Uint8Array;
            };
          };
          relay_data: {
            connection_type: string;
            api_url: string;
            data: Uint8Array;
            request_block: string;
            api_interface: string;
            salt: Uint8Array;
          };
        };
        reply: {
          data: Uint8Array;
          sig: Uint8Array;
          nonce: number;
          latest_block: string;
          finalized_blocks_hashes: Uint8Array;
          sig_blocks: Uint8Array;
        };
      };
    };
    sameProviderConflict: {
      relayReply0: {
        data: Uint8Array;
        sig: Uint8Array;
        nonce: number;
        latest_block: string;
        finalized_blocks_hashes: Uint8Array;
        sig_blocks: Uint8Array;
      };
      relayReply1: {
        data: Uint8Array;
        sig: Uint8Array;
        nonce: number;
        latest_block: string;
        finalized_blocks_hashes: Uint8Array;
        sig_blocks: Uint8Array;
      };
    };
  };
}
export interface MsgConflictVoteCommitAminoType extends AminoMsg {
  type: "/lavanet.lava.conflict.MsgConflictVoteCommit";
  value: {
    creator: string;
    voteID: string;
    hash: Uint8Array;
  };
}
export interface MsgConflictVoteRevealAminoType extends AminoMsg {
  type: "/lavanet.lava.conflict.MsgConflictVoteReveal";
  value: {
    creator: string;
    voteID: string;
    nonce: string;
    hash: Uint8Array;
  };
}
export const AminoConverter = {
  "/lavanet.lava.conflict.MsgDetection": {
    aminoType: "/lavanet.lava.conflict.MsgDetection",
    toAmino: ({
      creator,
      finalizationConflict,
      responseConflict,
      sameProviderConflict
    }: MsgDetection): MsgDetectionAminoType["value"] => {
      return {
        creator,
        finalizationConflict: {
          relayReply0: {
            data: finalizationConflict.relayReply0.data,
            sig: finalizationConflict.relayReply0.sig,
            nonce: finalizationConflict.relayReply0.nonce,
            latest_block: finalizationConflict.relayReply0.latestBlock.toString(),
            finalized_blocks_hashes: finalizationConflict.relayReply0.finalizedBlocksHashes,
            sig_blocks: finalizationConflict.relayReply0.sigBlocks
          },
          relayReply1: {
            data: finalizationConflict.relayReply1.data,
            sig: finalizationConflict.relayReply1.sig,
            nonce: finalizationConflict.relayReply1.nonce,
            latest_block: finalizationConflict.relayReply1.latestBlock.toString(),
            finalized_blocks_hashes: finalizationConflict.relayReply1.finalizedBlocksHashes,
            sig_blocks: finalizationConflict.relayReply1.sigBlocks
          }
        },
        responseConflict: {
          conflictRelayData0: {
            request: {
              relay_session: {
                spec_id: responseConflict.conflictRelayData0.request.relaySession.specId,
                content_hash: responseConflict.conflictRelayData0.request.relaySession.contentHash,
                session_id: responseConflict.conflictRelayData0.request.relaySession.sessionId.toString(),
                cu_sum: responseConflict.conflictRelayData0.request.relaySession.cuSum.toString(),
                provider: responseConflict.conflictRelayData0.request.relaySession.provider,
                relay_num: responseConflict.conflictRelayData0.request.relaySession.relayNum.toString(),
                qos_report: {
                  latency: responseConflict.conflictRelayData0.request.relaySession.qosReport.latency,
                  availability: responseConflict.conflictRelayData0.request.relaySession.qosReport.availability,
                  sync: responseConflict.conflictRelayData0.request.relaySession.qosReport.sync
                },
                epoch: responseConflict.conflictRelayData0.request.relaySession.epoch.toString(),
                unresponsive_providers: responseConflict.conflictRelayData0.request.relaySession.unresponsiveProviders,
                lava_chain_id: responseConflict.conflictRelayData0.request.relaySession.lavaChainId,
                sig: responseConflict.conflictRelayData0.request.relaySession.sig,
                badge: {
                  cu_allocation: responseConflict.conflictRelayData0.request.relaySession.badge.cuAllocation.toString(),
                  epoch: responseConflict.conflictRelayData0.request.relaySession.badge.epoch.toString(),
                  address: responseConflict.conflictRelayData0.request.relaySession.badge.address,
                  lava_chain_id: responseConflict.conflictRelayData0.request.relaySession.badge.lavaChainId,
                  project_sig: responseConflict.conflictRelayData0.request.relaySession.badge.projectSig
                }
              },
              relay_data: {
                connection_type: responseConflict.conflictRelayData0.request.relayData.connectionType,
                api_url: responseConflict.conflictRelayData0.request.relayData.apiUrl,
                data: responseConflict.conflictRelayData0.request.relayData.data,
                request_block: responseConflict.conflictRelayData0.request.relayData.requestBlock.toString(),
                api_interface: responseConflict.conflictRelayData0.request.relayData.apiInterface,
                salt: responseConflict.conflictRelayData0.request.relayData.salt
              }
            },
            reply: {
              data: responseConflict.conflictRelayData0.reply.data,
              sig: responseConflict.conflictRelayData0.reply.sig,
              nonce: responseConflict.conflictRelayData0.reply.nonce,
              latest_block: responseConflict.conflictRelayData0.reply.latestBlock.toString(),
              finalized_blocks_hashes: responseConflict.conflictRelayData0.reply.finalizedBlocksHashes,
              sig_blocks: responseConflict.conflictRelayData0.reply.sigBlocks
            }
          },
          conflictRelayData1: {
            request: {
              relay_session: {
                spec_id: responseConflict.conflictRelayData1.request.relaySession.specId,
                content_hash: responseConflict.conflictRelayData1.request.relaySession.contentHash,
                session_id: responseConflict.conflictRelayData1.request.relaySession.sessionId.toString(),
                cu_sum: responseConflict.conflictRelayData1.request.relaySession.cuSum.toString(),
                provider: responseConflict.conflictRelayData1.request.relaySession.provider,
                relay_num: responseConflict.conflictRelayData1.request.relaySession.relayNum.toString(),
                qos_report: {
                  latency: responseConflict.conflictRelayData1.request.relaySession.qosReport.latency,
                  availability: responseConflict.conflictRelayData1.request.relaySession.qosReport.availability,
                  sync: responseConflict.conflictRelayData1.request.relaySession.qosReport.sync
                },
                epoch: responseConflict.conflictRelayData1.request.relaySession.epoch.toString(),
                unresponsive_providers: responseConflict.conflictRelayData1.request.relaySession.unresponsiveProviders,
                lava_chain_id: responseConflict.conflictRelayData1.request.relaySession.lavaChainId,
                sig: responseConflict.conflictRelayData1.request.relaySession.sig,
                badge: {
                  cu_allocation: responseConflict.conflictRelayData1.request.relaySession.badge.cuAllocation.toString(),
                  epoch: responseConflict.conflictRelayData1.request.relaySession.badge.epoch.toString(),
                  address: responseConflict.conflictRelayData1.request.relaySession.badge.address,
                  lava_chain_id: responseConflict.conflictRelayData1.request.relaySession.badge.lavaChainId,
                  project_sig: responseConflict.conflictRelayData1.request.relaySession.badge.projectSig
                }
              },
              relay_data: {
                connection_type: responseConflict.conflictRelayData1.request.relayData.connectionType,
                api_url: responseConflict.conflictRelayData1.request.relayData.apiUrl,
                data: responseConflict.conflictRelayData1.request.relayData.data,
                request_block: responseConflict.conflictRelayData1.request.relayData.requestBlock.toString(),
                api_interface: responseConflict.conflictRelayData1.request.relayData.apiInterface,
                salt: responseConflict.conflictRelayData1.request.relayData.salt
              }
            },
            reply: {
              data: responseConflict.conflictRelayData1.reply.data,
              sig: responseConflict.conflictRelayData1.reply.sig,
              nonce: responseConflict.conflictRelayData1.reply.nonce,
              latest_block: responseConflict.conflictRelayData1.reply.latestBlock.toString(),
              finalized_blocks_hashes: responseConflict.conflictRelayData1.reply.finalizedBlocksHashes,
              sig_blocks: responseConflict.conflictRelayData1.reply.sigBlocks
            }
          }
        },
        sameProviderConflict: {
          relayReply0: {
            data: sameProviderConflict.relayReply0.data,
            sig: sameProviderConflict.relayReply0.sig,
            nonce: sameProviderConflict.relayReply0.nonce,
            latest_block: sameProviderConflict.relayReply0.latestBlock.toString(),
            finalized_blocks_hashes: sameProviderConflict.relayReply0.finalizedBlocksHashes,
            sig_blocks: sameProviderConflict.relayReply0.sigBlocks
          },
          relayReply1: {
            data: sameProviderConflict.relayReply1.data,
            sig: sameProviderConflict.relayReply1.sig,
            nonce: sameProviderConflict.relayReply1.nonce,
            latest_block: sameProviderConflict.relayReply1.latestBlock.toString(),
            finalized_blocks_hashes: sameProviderConflict.relayReply1.finalizedBlocksHashes,
            sig_blocks: sameProviderConflict.relayReply1.sigBlocks
          }
        }
      };
    },
    fromAmino: ({
      creator,
      finalizationConflict,
      responseConflict,
      sameProviderConflict
    }: MsgDetectionAminoType["value"]): MsgDetection => {
      return {
        creator,
        finalizationConflict: {
          relayReply0: {
            data: finalizationConflict.relayReply0.data,
            sig: finalizationConflict.relayReply0.sig,
            nonce: finalizationConflict.relayReply0.nonce,
            latestBlock: Long.fromString(finalizationConflict.relayReply0.latest_block),
            finalizedBlocksHashes: finalizationConflict.relayReply0.finalized_blocks_hashes,
            sigBlocks: finalizationConflict.relayReply0.sig_blocks
          },
          relayReply1: {
            data: finalizationConflict.relayReply1.data,
            sig: finalizationConflict.relayReply1.sig,
            nonce: finalizationConflict.relayReply1.nonce,
            latestBlock: Long.fromString(finalizationConflict.relayReply1.latest_block),
            finalizedBlocksHashes: finalizationConflict.relayReply1.finalized_blocks_hashes,
            sigBlocks: finalizationConflict.relayReply1.sig_blocks
          }
        },
        responseConflict: {
          conflictRelayData0: {
            request: {
              relaySession: {
                specId: responseConflict.conflictRelayData0.request.relay_session.spec_id,
                contentHash: responseConflict.conflictRelayData0.request.relay_session.content_hash,
                sessionId: Long.fromString(responseConflict.conflictRelayData0.request.relay_session.session_id),
                cuSum: Long.fromString(responseConflict.conflictRelayData0.request.relay_session.cu_sum),
                provider: responseConflict.conflictRelayData0.request.relay_session.provider,
                relayNum: Long.fromString(responseConflict.conflictRelayData0.request.relay_session.relay_num),
                qosReport: {
                  latency: responseConflict.conflictRelayData0.request.relay_session.qos_report.latency,
                  availability: responseConflict.conflictRelayData0.request.relay_session.qos_report.availability,
                  sync: responseConflict.conflictRelayData0.request.relay_session.qos_report.sync
                },
                epoch: Long.fromString(responseConflict.conflictRelayData0.request.relay_session.epoch),
                unresponsiveProviders: responseConflict.conflictRelayData0.request.relay_session.unresponsive_providers,
                lavaChainId: responseConflict.conflictRelayData0.request.relay_session.lava_chain_id,
                sig: responseConflict.conflictRelayData0.request.relay_session.sig,
                badge: {
                  cuAllocation: Long.fromString(responseConflict.conflictRelayData0.request.relay_session.badge.cu_allocation),
                  epoch: Long.fromString(responseConflict.conflictRelayData0.request.relay_session.badge.epoch),
                  address: responseConflict.conflictRelayData0.request.relay_session.badge.address,
                  lavaChainId: responseConflict.conflictRelayData0.request.relay_session.badge.lava_chain_id,
                  projectSig: responseConflict.conflictRelayData0.request.relay_session.badge.project_sig
                }
              },
              relayData: {
                connectionType: responseConflict.conflictRelayData0.request.relay_data.connection_type,
                apiUrl: responseConflict.conflictRelayData0.request.relay_data.api_url,
                data: responseConflict.conflictRelayData0.request.relay_data.data,
                requestBlock: Long.fromString(responseConflict.conflictRelayData0.request.relay_data.request_block),
                apiInterface: responseConflict.conflictRelayData0.request.relay_data.api_interface,
                salt: responseConflict.conflictRelayData0.request.relay_data.salt
              }
            },
            reply: {
              data: responseConflict.conflictRelayData0.reply.data,
              sig: responseConflict.conflictRelayData0.reply.sig,
              nonce: responseConflict.conflictRelayData0.reply.nonce,
              latestBlock: Long.fromString(responseConflict.conflictRelayData0.reply.latest_block),
              finalizedBlocksHashes: responseConflict.conflictRelayData0.reply.finalized_blocks_hashes,
              sigBlocks: responseConflict.conflictRelayData0.reply.sig_blocks
            }
          },
          conflictRelayData1: {
            request: {
              relaySession: {
                specId: responseConflict.conflictRelayData1.request.relay_session.spec_id,
                contentHash: responseConflict.conflictRelayData1.request.relay_session.content_hash,
                sessionId: Long.fromString(responseConflict.conflictRelayData1.request.relay_session.session_id),
                cuSum: Long.fromString(responseConflict.conflictRelayData1.request.relay_session.cu_sum),
                provider: responseConflict.conflictRelayData1.request.relay_session.provider,
                relayNum: Long.fromString(responseConflict.conflictRelayData1.request.relay_session.relay_num),
                qosReport: {
                  latency: responseConflict.conflictRelayData1.request.relay_session.qos_report.latency,
                  availability: responseConflict.conflictRelayData1.request.relay_session.qos_report.availability,
                  sync: responseConflict.conflictRelayData1.request.relay_session.qos_report.sync
                },
                epoch: Long.fromString(responseConflict.conflictRelayData1.request.relay_session.epoch),
                unresponsiveProviders: responseConflict.conflictRelayData1.request.relay_session.unresponsive_providers,
                lavaChainId: responseConflict.conflictRelayData1.request.relay_session.lava_chain_id,
                sig: responseConflict.conflictRelayData1.request.relay_session.sig,
                badge: {
                  cuAllocation: Long.fromString(responseConflict.conflictRelayData1.request.relay_session.badge.cu_allocation),
                  epoch: Long.fromString(responseConflict.conflictRelayData1.request.relay_session.badge.epoch),
                  address: responseConflict.conflictRelayData1.request.relay_session.badge.address,
                  lavaChainId: responseConflict.conflictRelayData1.request.relay_session.badge.lava_chain_id,
                  projectSig: responseConflict.conflictRelayData1.request.relay_session.badge.project_sig
                }
              },
              relayData: {
                connectionType: responseConflict.conflictRelayData1.request.relay_data.connection_type,
                apiUrl: responseConflict.conflictRelayData1.request.relay_data.api_url,
                data: responseConflict.conflictRelayData1.request.relay_data.data,
                requestBlock: Long.fromString(responseConflict.conflictRelayData1.request.relay_data.request_block),
                apiInterface: responseConflict.conflictRelayData1.request.relay_data.api_interface,
                salt: responseConflict.conflictRelayData1.request.relay_data.salt
              }
            },
            reply: {
              data: responseConflict.conflictRelayData1.reply.data,
              sig: responseConflict.conflictRelayData1.reply.sig,
              nonce: responseConflict.conflictRelayData1.reply.nonce,
              latestBlock: Long.fromString(responseConflict.conflictRelayData1.reply.latest_block),
              finalizedBlocksHashes: responseConflict.conflictRelayData1.reply.finalized_blocks_hashes,
              sigBlocks: responseConflict.conflictRelayData1.reply.sig_blocks
            }
          }
        },
        sameProviderConflict: {
          relayReply0: {
            data: sameProviderConflict.relayReply0.data,
            sig: sameProviderConflict.relayReply0.sig,
            nonce: sameProviderConflict.relayReply0.nonce,
            latestBlock: Long.fromString(sameProviderConflict.relayReply0.latest_block),
            finalizedBlocksHashes: sameProviderConflict.relayReply0.finalized_blocks_hashes,
            sigBlocks: sameProviderConflict.relayReply0.sig_blocks
          },
          relayReply1: {
            data: sameProviderConflict.relayReply1.data,
            sig: sameProviderConflict.relayReply1.sig,
            nonce: sameProviderConflict.relayReply1.nonce,
            latestBlock: Long.fromString(sameProviderConflict.relayReply1.latest_block),
            finalizedBlocksHashes: sameProviderConflict.relayReply1.finalized_blocks_hashes,
            sigBlocks: sameProviderConflict.relayReply1.sig_blocks
          }
        }
      };
    }
  },
  "/lavanet.lava.conflict.MsgConflictVoteCommit": {
    aminoType: "/lavanet.lava.conflict.MsgConflictVoteCommit",
    toAmino: ({
      creator,
      voteID,
      hash
    }: MsgConflictVoteCommit): MsgConflictVoteCommitAminoType["value"] => {
      return {
        creator,
        voteID,
        hash
      };
    },
    fromAmino: ({
      creator,
      voteID,
      hash
    }: MsgConflictVoteCommitAminoType["value"]): MsgConflictVoteCommit => {
      return {
        creator,
        voteID,
        hash
      };
    }
  },
  "/lavanet.lava.conflict.MsgConflictVoteReveal": {
    aminoType: "/lavanet.lava.conflict.MsgConflictVoteReveal",
    toAmino: ({
      creator,
      voteID,
      nonce,
      hash
    }: MsgConflictVoteReveal): MsgConflictVoteRevealAminoType["value"] => {
      return {
        creator,
        voteID,
        nonce: nonce.toString(),
        hash
      };
    },
    fromAmino: ({
      creator,
      voteID,
      nonce,
      hash
    }: MsgConflictVoteRevealAminoType["value"]): MsgConflictVoteReveal => {
      return {
        creator,
        voteID,
        nonce: Long.fromString(nonce),
        hash
      };
    }
  }
};