import { Rpc } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgAddKeys, MsgAddKeysResponse, MsgSetPolicy, MsgSetPolicyResponse, MsgSetSubscriptionPolicy, MsgSetSubscriptionPolicyResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  addKeys(request: MsgAddKeys): Promise<MsgAddKeysResponse>;
  setPolicy(request: MsgSetPolicy): Promise<MsgSetPolicyResponse>;
  setSubscriptionPolicy(request: MsgSetSubscriptionPolicy): Promise<MsgSetSubscriptionPolicyResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.addKeys = this.addKeys.bind(this);
    this.setPolicy = this.setPolicy.bind(this);
    this.setSubscriptionPolicy = this.setSubscriptionPolicy.bind(this);
  }
  addKeys(request: MsgAddKeys): Promise<MsgAddKeysResponse> {
    const data = MsgAddKeys.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.projects.Msg", "AddKeys", data);
    return promise.then(data => MsgAddKeysResponse.decode(new _m0.Reader(data)));
  }
  setPolicy(request: MsgSetPolicy): Promise<MsgSetPolicyResponse> {
    const data = MsgSetPolicy.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.projects.Msg", "SetPolicy", data);
    return promise.then(data => MsgSetPolicyResponse.decode(new _m0.Reader(data)));
  }
  setSubscriptionPolicy(request: MsgSetSubscriptionPolicy): Promise<MsgSetSubscriptionPolicyResponse> {
    const data = MsgSetSubscriptionPolicy.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.projects.Msg", "SetSubscriptionPolicy", data);
    return promise.then(data => MsgSetSubscriptionPolicyResponse.decode(new _m0.Reader(data)));
  }
}