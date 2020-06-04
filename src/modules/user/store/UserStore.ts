import {observable} from "mobx";
import {IUser} from "../types";
import {RootStore} from "../../../stores/rootStore";
import {SocialNetwork} from "../../socialNetworks/models/SocialNetwork";
import Facebook from "../../socialNetworks/models/Facebook";
import Twitter from "../../socialNetworks/models/Twitter";
import Instagram from "../../socialNetworks/models/Instagram";

export class UserStore {
  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @observable user: IUser | null = {
    id: 1,
    name: 'Sarah',
    activeSocialNetworks: [...mockActiveNetworks]
  };
}


/*I thought about save only id's of user active social networks,
* but decide that it may increase quantity of useless operations in future,
* so better approach is finds it when user login - lets imagine that we already did it
*  */

const mockActiveNetworks: SocialNetwork[] = [
  new Facebook(1),
  new Instagram(2),
  new Twitter( 3)
];

