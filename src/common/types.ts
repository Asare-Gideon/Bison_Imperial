export type AgentType = {
  _id: string;
  companyName: string;
};
export type UsedAgentType = {
  shippingMark: string;
};
export type UserType = {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  allnames: string;
  phoneNumber: string;
  usedAgents: UsedAgentType[];
  superCreator: AgentType;
  createdOn: Date;
  verified?: boolean;
  userSignedUp: boolean;
};

export type LocationType = {
  _id: string;
  name: string;
  longitude: number;
  latitude: number;
};

export type CountryType = {
  _id: string;
  flag: string;
  code: string;
  name: string;
  currency: string;
};

export type ContainerType = {
  _id: string;
  code: string;
  routes?: {
    location: LocationType;
    reachedOn?: boolean;
    isCurrent: boolean;
    indx: number;
  }[];
  routeId?: string;
  reachedLocalWarehouse?: boolean;
  loadingDate: Date;
  eta?: Date;
  rate: number;
  dollarRate: number;
  isAir?: boolean;
  from?: CountryType;
  to?: CountryType;
  reachedWarehouseOn?: Date;
};

export type ShipmentType = {
  _id: string;
  user: UserType;
  container: ContainerType;
  tracking: string;
  shippingMark: string;
  delivered: boolean;
  cbm: number;
  confirmedCbm: number;
  quantity: number;
  isAir: boolean;
  description: string;
  supplyTracking: string;
  rate: number;
  price: number;
  confirmedPrice: number;
  found?: boolean;
  confirmedLength?: number;
  confirmedWidth?: number;
  confirmedHeight?: number;
  length?: number;
  width?: number;
  height?: number;
  calcQuantity?: number;
  confirmedCalcQuantity?: number;
  weight?: number;
};

export type ShipmentsQuerierType = {
  _id: string;
  container: ContainerType;
  user: UserType;
  shipments: ShipmentType[];
  tracking: string;
  shippingMark: string;
  delivered?: boolean;
  isAir: boolean;
  isNewLoading: boolean;
};
