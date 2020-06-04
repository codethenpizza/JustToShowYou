import {observable, action} from "mobx";
import moment from "moment";
import {IPost} from "../types";
import {RootStore} from "../../../stores/rootStore";


export class PostStore {
  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @observable postList: IPost[] = [...mockPosts];

  getByDate(date: moment.Moment): IPost[] {
    const searchDate = date.format("MM-DD-YYYY");
    return this.postList.filter((post: IPost) => moment(post.publicationDate).format("MM-DD-YYYY") === searchDate)
  }

  @action
  addPost = (post: IPost): void => {
    console.log('pushing pushing: ', post);
    console.log('send post to backend and save to store');
    this.rootStore.postStore.postList.push(post)
  };
}


//mock data
const mockPosts:IPost[] = [
  {
    id: 1,
    statistic: [
      {
        socialNetworkId: 1,
        socialNetworkStatistic: {
          likesQnt: '100',
          commentsQnt: '20',
          repostsQnt: '3',
          viewsQnt: '200'
        }
      },
      {
        socialNetworkId: 2,
        socialNetworkStatistic: {
          likesQnt: '1k',
          commentsQnt: '20',
          repostsQnt: '500'
        }
      },
      {
        socialNetworkId: 3,
        socialNetworkStatistic: {
          likesQnt: '100',
          commentsQnt: '20',
          repostsQnt: '3'
        }
      }
    ],
    basicSocialNetworks: [
      {
        id: 1,
        name: 'Facebook'
      },
      {
        id: 2,
        name: 'Instagram'
      },
      {
        id: 3,
        name: 'Twitter'
      }
    ],
    title: 'My First post',
    text: 'yup, it is',
    isEditable: true,
    creationDate: '2020-05-30T20:13:07.061Z',
    publicationDate: '2020-05-30T20:13:07.061Z'
  }, {
    id: 2,
    basicSocialNetworks: [
      {
        id: 3,
        name: 'Twitter'
      }
    ],
    title: 'My Second post',
    text: 'look^ what I can',
    isEditable: true,
    creationDate: '2020-05-30T20:13:07.061Z',
    publicationDate: '2020-05-30T20:13:07.061Z'
  }, {
    id: 3,
    basicSocialNetworks: [
      {
        id: 1,
        name: 'Facebook'
      },
      {
        id: 2,
        name: 'Instagram'
      },
      {
        id: 3,
        name: 'Twitter'
      }
    ],
    title: 'oh my, its my post',
    text: 'here another one',
    isEditable: true,
    creationDate: '2020-05-30T20:13:07.061Z',
    publicationDate: '2020-06-01T20:13:07.061Z'
  }, {
    id: 4,
    basicSocialNetworks: [
      {
        id: 2,
        name: 'Instagram'
      },
      {
        id: 3,
        name: 'Twitter'
      }
    ],
    title: 'love posting, are u?',
    text: 'text of mmy last post',
    isEditable: true,
    creationDate: '2020-05-30T20:13:07.061Z',
    publicationDate: '2020-06-03T20:13:07.061Z',
  },];