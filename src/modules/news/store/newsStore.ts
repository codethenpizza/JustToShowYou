import {observable, action} from 'mobx'
import {INews} from "../types";
import {RootStore} from "../../../stores/rootStore";

export class NewsStore {
  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @observable newsList: INews[] = [...NewsMock];

  // @action
  // addNews(news: INews) {
  //   this.rootStore.newsStore.newsList.push(news)
  // }

  @action
  discardNews = (newsId: number) => {
    this.newsList = this.newsList.filter((news: INews) => news.id !== newsId)
  }

}


const NewsMock: INews[] = [{
  id: 1,
  basicSocialNetworks: {
    id: 1,
    name: 'Facebook'
  },
  title: 'New subscribers',
  text: 'Amazing! You reach 1000 subscribers',
  event: 'string',
}, {
  id: 4,
  basicSocialNetworks: {
    id: 4,
    name: 'Swat'
  },
  title: 'Read in our blog',
  text: '10 Tips for Crisis Management on Social Media',
  event: 'string',
}, {
  id: 2,
  basicSocialNetworks: {
    id: 2,
    name: 'Instagram'
  },
  title: 'New likes',
  text: 'Your last post reach 1000 likes!',
  event: 'string',
}];