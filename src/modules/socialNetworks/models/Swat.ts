import {UnregisteredSocialNetwork} from "./SocialNetwork";


class Swat implements UnregisteredSocialNetwork{
  id: number;
  name = 'Swat';

  constructor(id: number) {
    this.id = id
  }

}

export default Swat