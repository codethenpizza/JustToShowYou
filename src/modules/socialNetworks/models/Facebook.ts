import {IPostForm, IValidationPostSocialNetworkError} from "../../posts/types";
import {SocialNetwork} from "./SocialNetwork";

class Facebook implements SocialNetwork {
  id: number;
  name = 'Facebook';
  postLimits = {
    titleCharLimit: 10,
    textCharLimit: 300
  };

  constructor(id: number) {
    this.id = id;
  }

  createValidationError(field: string, message: string): IValidationPostSocialNetworkError {
    return {
      socialNetworkId: this.id,
      field: field,
      message: message
    };
  }

  validate(data: IPostForm): IValidationPostSocialNetworkError[] {
    const validationErrors: IValidationPostSocialNetworkError[] = [];
    //validation here
    const {title, text} = data.fields;

    if (title && title.length >= this.postLimits.titleCharLimit) {
      validationErrors.push(this.createValidationError('title', `Title is to long, max limit - ${this.postLimits.titleCharLimit}`))
    }

    if (text && text.length >= this.postLimits.textCharLimit) {
      validationErrors.push(this.createValidationError('text', `Text is to long, max limit - ${this.postLimits.textCharLimit}`))
    }


    return [...validationErrors];
  }

}

export default Facebook