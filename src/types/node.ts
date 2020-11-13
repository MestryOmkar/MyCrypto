// Used to be named RawNodeConfig in v1
export enum NodeType {
  RPC = 'rpc',
  ETHERSCAN = 'etherscan',
  INFURA = 'infura',
  POCKET = 'pocket',
  WEB3 = 'web3',
  MYC_CUSTOM = 'myccustom'
}

export interface NodeConfig {
  isCustom?: boolean;
  name: string;
  type: NodeType;
  service: string;
  url: string;
  hidden?: boolean;
}

export interface CustomNodeConfig extends NodeConfig {
  isCustom: true;
  type: NodeType.MYC_CUSTOM;
  auth?: {
    username: string;
    password: string;
  };
}

export interface StaticNodeConfig extends NodeConfig {
  isCustom: false;
  type: NodeType.ETHERSCAN | NodeType.INFURA | NodeType.POCKET | NodeType.RPC | NodeType.WEB3;
}

export type NodeOptions = StaticNodeConfig | CustomNodeConfig;
