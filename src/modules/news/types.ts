import {ISocialNetworkBasicInfo} from "../socialNetworks/types";

export interface INews {
  id: number,
  basicSocialNetworks: ISocialNetworkBasicInfo,
  title: string,
  text: string,
  event: string,
  date?: string
}
