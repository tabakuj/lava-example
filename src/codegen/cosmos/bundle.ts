import * as _51 from "./app/v1alpha1/config";
import * as _52 from "./app/v1alpha1/module";
import * as _53 from "./app/v1alpha1/query";
import * as _54 from "./auth/v1beta1/auth";
import * as _55 from "./auth/v1beta1/genesis";
import * as _56 from "./auth/v1beta1/query";
import * as _57 from "./authz/v1beta1/authz";
import * as _58 from "./authz/v1beta1/event";
import * as _59 from "./authz/v1beta1/genesis";
import * as _60 from "./authz/v1beta1/query";
import * as _61 from "./authz/v1beta1/tx";
import * as _62 from "./bank/v1beta1/authz";
import * as _63 from "./bank/v1beta1/bank";
import * as _64 from "./bank/v1beta1/genesis";
import * as _65 from "./bank/v1beta1/query";
import * as _66 from "./bank/v1beta1/tx";
import * as _67 from "./base/abci/v1beta1/abci";
import * as _68 from "./base/kv/v1beta1/kv";
import * as _69 from "./base/query/v1beta1/pagination";
import * as _70 from "./base/reflection/v1beta1/reflection";
import * as _71 from "./base/reflection/v2alpha1/reflection";
import * as _72 from "./base/snapshots/v1beta1/snapshot";
import * as _73 from "./base/store/v1beta1/commit_info";
import * as _74 from "./base/store/v1beta1/listening";
import * as _75 from "./base/tendermint/v1beta1/query";
import * as _76 from "./base/v1beta1/coin";
import * as _77 from "./capability/v1beta1/capability";
import * as _78 from "./capability/v1beta1/genesis";
import * as _79 from "./crisis/v1beta1/genesis";
import * as _80 from "./crisis/v1beta1/tx";
import * as _81 from "./crypto/ed25519/keys";
import * as _82 from "./crypto/hd/v1/hd";
import * as _83 from "./crypto/keyring/v1/record";
import * as _84 from "./crypto/multisig/keys";
import * as _85 from "./crypto/secp256k1/keys";
import * as _86 from "./crypto/secp256r1/keys";
import * as _87 from "./distribution/v1beta1/distribution";
import * as _88 from "./distribution/v1beta1/genesis";
import * as _89 from "./distribution/v1beta1/query";
import * as _90 from "./distribution/v1beta1/tx";
import * as _91 from "./evidence/v1beta1/evidence";
import * as _92 from "./evidence/v1beta1/genesis";
import * as _93 from "./evidence/v1beta1/query";
import * as _94 from "./evidence/v1beta1/tx";
import * as _95 from "./feegrant/v1beta1/feegrant";
import * as _96 from "./feegrant/v1beta1/genesis";
import * as _97 from "./feegrant/v1beta1/query";
import * as _98 from "./feegrant/v1beta1/tx";
import * as _99 from "./genutil/v1beta1/genesis";
import * as _100 from "./gov/v1/genesis";
import * as _101 from "./gov/v1/gov";
import * as _102 from "./gov/v1/query";
import * as _103 from "./gov/v1/tx";
import * as _104 from "./gov/v1beta1/genesis";
import * as _105 from "./gov/v1beta1/gov";
import * as _106 from "./gov/v1beta1/query";
import * as _107 from "./gov/v1beta1/tx";
import * as _108 from "./group/v1/events";
import * as _109 from "./group/v1/genesis";
import * as _110 from "./group/v1/query";
import * as _111 from "./group/v1/tx";
import * as _112 from "./group/v1/types";
import * as _113 from "./mint/v1beta1/genesis";
import * as _114 from "./mint/v1beta1/mint";
import * as _115 from "./mint/v1beta1/query";
import * as _116 from "./msg/v1/msg";
import * as _117 from "./nft/v1beta1/event";
import * as _118 from "./nft/v1beta1/genesis";
import * as _119 from "./nft/v1beta1/nft";
import * as _120 from "./nft/v1beta1/query";
import * as _121 from "./nft/v1beta1/tx";
import * as _122 from "./orm/v1/orm";
import * as _123 from "./orm/v1alpha1/schema";
import * as _124 from "./params/v1beta1/params";
import * as _125 from "./params/v1beta1/query";
import * as _126 from "./slashing/v1beta1/genesis";
import * as _127 from "./slashing/v1beta1/query";
import * as _128 from "./slashing/v1beta1/slashing";
import * as _129 from "./slashing/v1beta1/tx";
import * as _130 from "./staking/v1beta1/authz";
import * as _131 from "./staking/v1beta1/genesis";
import * as _132 from "./staking/v1beta1/query";
import * as _133 from "./staking/v1beta1/staking";
import * as _134 from "./staking/v1beta1/tx";
import * as _135 from "./tx/signing/v1beta1/signing";
import * as _136 from "./tx/v1beta1/service";
import * as _137 from "./tx/v1beta1/tx";
import * as _138 from "./upgrade/v1beta1/query";
import * as _139 from "./upgrade/v1beta1/tx";
import * as _140 from "./upgrade/v1beta1/upgrade";
import * as _141 from "./vesting/v1beta1/tx";
import * as _142 from "./vesting/v1beta1/vesting";
import * as _182 from "./authz/v1beta1/tx.amino";
import * as _183 from "./bank/v1beta1/tx.amino";
import * as _184 from "./crisis/v1beta1/tx.amino";
import * as _185 from "./distribution/v1beta1/tx.amino";
import * as _186 from "./evidence/v1beta1/tx.amino";
import * as _187 from "./feegrant/v1beta1/tx.amino";
import * as _188 from "./gov/v1/tx.amino";
import * as _189 from "./gov/v1beta1/tx.amino";
import * as _190 from "./group/v1/tx.amino";
import * as _191 from "./nft/v1beta1/tx.amino";
import * as _192 from "./slashing/v1beta1/tx.amino";
import * as _193 from "./staking/v1beta1/tx.amino";
import * as _194 from "./upgrade/v1beta1/tx.amino";
import * as _195 from "./vesting/v1beta1/tx.amino";
import * as _196 from "./authz/v1beta1/tx.registry";
import * as _197 from "./bank/v1beta1/tx.registry";
import * as _198 from "./crisis/v1beta1/tx.registry";
import * as _199 from "./distribution/v1beta1/tx.registry";
import * as _200 from "./evidence/v1beta1/tx.registry";
import * as _201 from "./feegrant/v1beta1/tx.registry";
import * as _202 from "./gov/v1/tx.registry";
import * as _203 from "./gov/v1beta1/tx.registry";
import * as _204 from "./group/v1/tx.registry";
import * as _205 from "./nft/v1beta1/tx.registry";
import * as _206 from "./slashing/v1beta1/tx.registry";
import * as _207 from "./staking/v1beta1/tx.registry";
import * as _208 from "./upgrade/v1beta1/tx.registry";
import * as _209 from "./vesting/v1beta1/tx.registry";
import * as _210 from "./app/v1alpha1/query.rpc.Query";
import * as _211 from "./auth/v1beta1/query.rpc.Query";
import * as _212 from "./authz/v1beta1/query.rpc.Query";
import * as _213 from "./bank/v1beta1/query.rpc.Query";
import * as _214 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _215 from "./distribution/v1beta1/query.rpc.Query";
import * as _216 from "./evidence/v1beta1/query.rpc.Query";
import * as _217 from "./feegrant/v1beta1/query.rpc.Query";
import * as _218 from "./gov/v1/query.rpc.Query";
import * as _219 from "./gov/v1beta1/query.rpc.Query";
import * as _220 from "./group/v1/query.rpc.Query";
import * as _221 from "./mint/v1beta1/query.rpc.Query";
import * as _222 from "./nft/v1beta1/query.rpc.Query";
import * as _223 from "./params/v1beta1/query.rpc.Query";
import * as _224 from "./slashing/v1beta1/query.rpc.Query";
import * as _225 from "./staking/v1beta1/query.rpc.Query";
import * as _226 from "./tx/v1beta1/service.rpc.Service";
import * as _227 from "./upgrade/v1beta1/query.rpc.Query";
import * as _228 from "./authz/v1beta1/tx.rpc.msg";
import * as _229 from "./bank/v1beta1/tx.rpc.msg";
import * as _230 from "./crisis/v1beta1/tx.rpc.msg";
import * as _231 from "./distribution/v1beta1/tx.rpc.msg";
import * as _232 from "./evidence/v1beta1/tx.rpc.msg";
import * as _233 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _234 from "./gov/v1/tx.rpc.msg";
import * as _235 from "./gov/v1beta1/tx.rpc.msg";
import * as _236 from "./group/v1/tx.rpc.msg";
import * as _237 from "./nft/v1beta1/tx.rpc.msg";
import * as _238 from "./slashing/v1beta1/tx.rpc.msg";
import * as _239 from "./staking/v1beta1/tx.rpc.msg";
import * as _240 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _241 from "./vesting/v1beta1/tx.rpc.msg";
import * as _244 from "./rpc.query";
import * as _245 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export const v1alpha1 = {
      ..._51,
      ..._52,
      ..._53,
      ..._210
    };
  }
  export namespace auth {
    export const v1beta1 = {
      ..._54,
      ..._55,
      ..._56,
      ..._211
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._57,
      ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._182,
      ..._196,
      ..._212,
      ..._228
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._62,
      ..._63,
      ..._64,
      ..._65,
      ..._66,
      ..._183,
      ..._197,
      ..._213,
      ..._229
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._67
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._68
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._69
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._70
      };
      export const v2alpha1 = {
        ..._71
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._72
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._73,
        ..._74
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._75,
        ..._214
      };
    }
    export const v1beta1 = {
      ..._76
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._77,
      ..._78
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._79,
      ..._80,
      ..._184,
      ..._198,
      ..._230
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._81
    };
    export namespace hd {
      export const v1 = {
        ..._82
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._83
      };
    }
    export const multisig = {
      ..._84
    };
    export const secp256k1 = {
      ..._85
    };
    export const secp256r1 = {
      ..._86
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._87,
      ..._88,
      ..._89,
      ..._90,
      ..._185,
      ..._199,
      ..._215,
      ..._231
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._91,
      ..._92,
      ..._93,
      ..._94,
      ..._186,
      ..._200,
      ..._216,
      ..._232
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._187,
      ..._201,
      ..._217,
      ..._233
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._99
    };
  }
  export namespace gov {
    export const v1 = {
      ..._100,
      ..._101,
      ..._102,
      ..._103,
      ..._188,
      ..._202,
      ..._218,
      ..._234
    };
    export const v1beta1 = {
      ..._104,
      ..._105,
      ..._106,
      ..._107,
      ..._189,
      ..._203,
      ..._219,
      ..._235
    };
  }
  export namespace group {
    export const v1 = {
      ..._108,
      ..._109,
      ..._110,
      ..._111,
      ..._112,
      ..._190,
      ..._204,
      ..._220,
      ..._236
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._113,
      ..._114,
      ..._115,
      ..._221
    };
  }
  export namespace msg {
    export const v1 = {
      ..._116
    };
  }
  export namespace nft {
    export const v1beta1 = {
      ..._117,
      ..._118,
      ..._119,
      ..._120,
      ..._121,
      ..._191,
      ..._205,
      ..._222,
      ..._237
    };
  }
  export namespace orm {
    export const v1 = {
      ..._122
    };
    export const v1alpha1 = {
      ..._123
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._124,
      ..._125,
      ..._223
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._126,
      ..._127,
      ..._128,
      ..._129,
      ..._192,
      ..._206,
      ..._224,
      ..._238
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._130,
      ..._131,
      ..._132,
      ..._133,
      ..._134,
      ..._193,
      ..._207,
      ..._225,
      ..._239
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._135
      };
    }
    export const v1beta1 = {
      ..._136,
      ..._137,
      ..._226
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._138,
      ..._139,
      ..._140,
      ..._194,
      ..._208,
      ..._227,
      ..._240
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._141,
      ..._142,
      ..._195,
      ..._209,
      ..._241
    };
  }
  export const ClientFactory = {
    ..._244,
    ..._245
  };
}