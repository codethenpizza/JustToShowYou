import React from "react";
import {observable, action} from "mobx";

import moment from "moment";
import {IPostForm, IPost, IValidationPostError, IValidationPostSocialNetworkError} from "../types";
import {ISocialNetworkBasicInfo} from "../../socialNetworks/types";
import {RootStore} from "../../../stores/rootStore";
import {SocialNetwork} from "../../socialNetworks/models/SocialNetwork";


class PostFormStore {
  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  //networks to validate
  @observable checkedSocialNetworksIds: number[] = [];

  @observable newPost: IPostForm = {
    fields: {
      socialNetworkIds: [],
      title: '',
      text: '',
      image: '',
    },
    meta: {
      isValid: false,
      postErrors: [],
      socialNetworkErrors: []
    }
  };

  isNetworkChecked = (socialNetworkId: number): boolean => {
    return this.checkedSocialNetworksIds.includes(socialNetworkId);
  };

  @action
  onNetworkChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const socialNetworkId: number = +event.target.value;

    const checkedSocialNetworkId: boolean = this.checkedSocialNetworksIds.includes(socialNetworkId);
    if (checkedSocialNetworkId) {
      this.checkedSocialNetworksIds = this.checkedSocialNetworksIds.filter((networkId: number) => networkId !== socialNetworkId)
    } else {
      this.checkedSocialNetworksIds.push(socialNetworkId)
    }
    this.validate();
  };

  @action
  onFiledChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {name, value}: { name: string, value: string } = event.target;

    // @ts-ignore
    this.newPost.fields[name] = value;
    this.validate();
  };

  //check if one or more network selected
  validateCheckedNetwork = (): void => {
    //validateCheckedNetwork error
    const validationError: IValidationPostError = {
      message: `Must be selected at least one social network`
    };

    if (!this.checkedSocialNetworksIds.length) {
      const isErrorExist = this.newPost.meta.postErrors.find(error => error.message === validationError.message);
      if (!isErrorExist) this.newPost.meta.postErrors.push(validationError)
    } else {
      this.newPost.meta.postErrors = this.newPost.meta.postErrors.filter(error => error.message !== validationError.message);
    }
  };

  validateEmptyStrings = () => {
    let emptyFields: number = 0;
    const fields = Object.entries(this.newPost.fields);
    //validateEmptyStrings error
    const validationError: IValidationPostError = {
      message: `Must contain at least one completed field`
    };

    fields.forEach(field => {
      if (!field[1].length) {
        emptyFields++
      }
    });

    if (emptyFields === fields.length) {
      const isErrorExist = this.newPost.meta.postErrors.find(error => error.message === validationError.message);
      if (!isErrorExist) this.newPost.meta.postErrors.push(validationError)
    } else {
      this.newPost.meta.postErrors = this.newPost.meta.postErrors.filter(error => error.message !== validationError.message);
    }
  };

  @action
  validate = (): void => {
    const validationErrors: IValidationPostSocialNetworkError[] = [];

    //checked social networks validation
    this.validateCheckedNetwork();

    //empty fields validation
    this.validateEmptyStrings();

    const networks: SocialNetwork[] = [];
    this.checkedSocialNetworksIds.forEach((networkId: number) => {
      const foundedNetwork = this.rootStore.userStore.user!.activeSocialNetworks.find((network: SocialNetwork) => network.id === networkId);
      if (foundedNetwork) {
        networks.push(foundedNetwork)
      }
    });

    networks.forEach((network: SocialNetwork) => {
      const errors = network.validate(this.newPost);
      validationErrors.push(...errors)
    });

    this.newPost.meta.socialNetworkErrors = validationErrors;
  };

  @action
  submitPost = (): void => {
    if (!this.newPost.meta.postErrors.length && !this.newPost.meta.socialNetworkErrors.length) {
      const {postList} = this.rootStore.postStore;

      const NetworksInfo: ISocialNetworkBasicInfo[] = this.rootStore.socialNetworkStore.getSocialNetworksBasicInfoByIds(this.checkedSocialNetworksIds);

      const post: IPost = {
        id: postList.length + 1, // usually we send this post on backend, get id from response, and push post to a store
        basicSocialNetworks: [...NetworksInfo], //normally we'd just out ids here, but for now we will put here info
        title: this.newPost.fields.title,
        text: this.newPost.fields.text,
        isEditable: true,
        creationDate: moment().toISOString(),
        publicationDate: moment().toISOString(),
      };

      this.rootStore.postStore.addPost(post);
      this.clearNewPost();
    }
  };

  @action
  clearNewPost = (): void => {
    this.newPost = {
      fields: {
        socialNetworkIds: [],
        title: '',
        text: '',
        image: '',
      },
      meta: {
        isValid: false,
        postErrors: [],
        socialNetworkErrors: []
      }
    }
  };
}

export default PostFormStore