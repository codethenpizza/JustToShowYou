import {ISocialNetworkBasicInfo} from "../socialNetworks/types";

export interface IValidationPostError {
  message: string
}

export interface IValidationPostSocialNetworkError extends IValidationPostError{
  socialNetworkId: number
  field: string
}

export interface IPostStatistic {
  socialNetworkId: number
  socialNetworkStatistic: {
    likesQnt?: string
    repostsQnt?: string
    commentsQnt?: string
    viewsQnt?: string
  }
}

export interface IPost {
  id: number,
  basicSocialNetworks: ISocialNetworkBasicInfo[],
  statistic?: IPostStatistic[]
  title?: string,
  text?: string,
  image?: string,
  isEditable: boolean // post may be editable before publication or even after in some social networks
  creationDate: string,
  publicationDate: string,
}


export interface IPostForm {
  fields: {
    socialNetworkIds: number[] //ids of network where post will be posted
    title: string
    text: string
    image: string
  },
  meta: {
    isValid: boolean
    postErrors: IValidationPostError[],
    socialNetworkErrors: IValidationPostSocialNetworkError[]
  }
}
