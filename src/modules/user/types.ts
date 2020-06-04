import {SocialNetwork} from "../socialNetworks/models/SocialNetwork";

export interface IUser {
  id: number,
  name: string,
  activeSocialNetworks: SocialNetwork[]
}

