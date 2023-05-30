import * as _1 from "../common/fixationEntry";
import * as _2 from "../conflict/conflict_data";
import * as _3 from "../conflict/conflict_vote";
import * as _4 from "../conflict/genesis";
import * as _5 from "../conflict/params";
import * as _6 from "../conflict/query";
import * as _7 from "../conflict/tx";
import * as _8 from "../epochstorage/endpoint";
import * as _9 from "../epochstorage/epoch_details";
import * as _10 from "../epochstorage/fixated_params";
import * as _11 from "../epochstorage/genesis";
import * as _12 from "../epochstorage/params";
import * as _13 from "../epochstorage/query";
import * as _14 from "../epochstorage/stake_entry";
import * as _15 from "../epochstorage/stake_storage";
import * as _16 from "../epochstorage/tx";
import * as _17 from "../pairing/epoch_payments";
import * as _18 from "../pairing/genesis";
import * as _19 from "../pairing/params";
import * as _20 from "../pairing/provider_payment_storage";
import * as _21 from "../pairing/query";
import * as _22 from "../pairing/relay";
import * as _23 from "../pairing/relayCache";
import * as _24 from "../pairing/stake_to_max_cu_list";
import * as _25 from "../pairing/tx";
import * as _26 from "../pairing/unique_payment_storage_client_provider";
import * as _27 from "../plans/genesis";
import * as _28 from "../plans/params";
import * as _29 from "../plans/plan";
import * as _30 from "../plans/plans_add_proposal";
import * as _31 from "../plans/query";
import * as _32 from "../plans/tx";
import * as _33 from "../projects/genesis";
import * as _34 from "../projects/params";
import * as _35 from "../projects/project";
import * as _36 from "../projects/query";
import * as _37 from "../projects/tx";
import * as _38 from "../spec/genesis";
import * as _39 from "../spec/params";
import * as _40 from "../spec/query";
import * as _41 from "../spec/service_api";
import * as _42 from "../spec/spec_add_proposal";
import * as _43 from "../spec/spec";
import * as _44 from "../spec/tx";
import * as _45 from "../subscription/genesis";
import * as _46 from "../subscription/params";
import * as _47 from "../subscription/query";
import * as _48 from "../subscription/subscription";
import * as _49 from "../subscription/tx";
import * as _163 from "../conflict/tx.amino";
import * as _164 from "../pairing/tx.amino";
import * as _165 from "../projects/tx.amino";
import * as _166 from "../subscription/tx.amino";
import * as _167 from "../conflict/tx.registry";
import * as _168 from "../pairing/tx.registry";
import * as _169 from "../projects/tx.registry";
import * as _170 from "../subscription/tx.registry";
import * as _171 from "../conflict/query.rpc.Query";
import * as _172 from "../epochstorage/query.rpc.Query";
import * as _173 from "../pairing/query.rpc.Query";
import * as _174 from "../plans/query.rpc.Query";
import * as _175 from "../projects/query.rpc.Query";
import * as _176 from "../spec/query.rpc.Query";
import * as _177 from "../subscription/query.rpc.Query";
import * as _178 from "../conflict/tx.rpc.msg";
import * as _179 from "../pairing/tx.rpc.msg";
import * as _180 from "../projects/tx.rpc.msg";
import * as _181 from "../subscription/tx.rpc.msg";
import * as _242 from "./rpc.query";
import * as _243 from "./rpc.tx";
export namespace lavanet {
  export namespace lava {
    export const common = {
      ..._1
    };
    export const conflict = {
      ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._163,
      ..._167,
      ..._171,
      ..._178
    };
    export const epochstorage = {
      ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._172
    };
    export const pairing = {
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._164,
      ..._168,
      ..._173,
      ..._179
    };
    export const plans = {
      ..._27,
      ..._28,
      ..._29,
      ..._30,
      ..._31,
      ..._32,
      ..._174
    };
    export const projects = {
      ..._33,
      ..._34,
      ..._35,
      ..._36,
      ..._37,
      ..._165,
      ..._169,
      ..._175,
      ..._180
    };
    export const spec = {
      ..._38,
      ..._39,
      ..._40,
      ..._41,
      ..._42,
      ..._43,
      ..._44,
      ..._176
    };
    export const subscription = {
      ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._166,
      ..._170,
      ..._177,
      ..._181
    };
  }
  export const ClientFactory = {
    ..._242,
    ..._243
  };
}