import {NewsStore} from "../modules/news/store/newsStore";
import {SocialNetworksStore} from "../modules/socialNetworks/store/socialNetworksStore";
import {UserStore} from "../modules/user/store/UserStore";
import {PostStore} from "../modules/posts/store/postStore";
import PostFormStore from "../modules/posts/store/postFormStore";


export class RootStore {
  public newsStore: NewsStore;
  public socialNetworkStore: SocialNetworksStore;
  public userStore: UserStore;
  public postStore: PostStore;
  public postFormStore: PostFormStore;

  constructor() {
    this.newsStore = new NewsStore(this);
    this.socialNetworkStore = new SocialNetworksStore(this);
    this.userStore = new UserStore(this);
    this.postStore = new PostStore(this);
    this.postFormStore = new PostFormStore(this);
  }
}
