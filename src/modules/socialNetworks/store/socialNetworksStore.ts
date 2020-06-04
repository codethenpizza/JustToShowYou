import {observable} from "mobx";
import {RootStore} from "../../../stores/rootStore";
import {ISocialNetworkBasicInfo} from "../types";
import {SocialNetwork} from "../models/SocialNetwork";

import Facebook from "../models/Facebook";
import Instagram from "../models/Instagram";
import Twitter from "../models/Twitter";


export class SocialNetworksStore {
  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @observable socialNetworkList: SocialNetwork[] = [...mockNetworks];

  getSocialNetworksBasicInfoByIds(ids: number[]): ISocialNetworkBasicInfo[] {
    const networks: SocialNetwork[] = [...this.socialNetworkList];

    const foundedNetworks: ISocialNetworkBasicInfo[] = [];

    networks.forEach((network: SocialNetwork) => {
      if (ids.includes(network.id)) {
        foundedNetworks.push({
          id: network.id,
          name: network.name
        })
      }
    });
    return foundedNetworks
  }
}


const mockNetworks: SocialNetwork[] = [
  new Facebook(1),
  new Instagram(2),
  new Twitter(3),
];