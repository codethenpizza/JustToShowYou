import {IPostForm, IValidationPostSocialNetworkError} from "../../posts/types";
import {SocialNetwork} from "./SocialNetwork";

class Twitter implements SocialNetwork {
  id: number;
  name = 'Twitter';
  postLimits = {
    textCharLimit: 250
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

    const {text, title} = data.fields;

    const postLength = text.length + title.length;

    if (postLength >= this.postLimits.textCharLimit) {
      if (!text.length && title.length) {
        validationErrors.push(this.createValidationError('title', `title is to long - ${title.length}, max limit - ${this.postLimits.textCharLimit}`))
      }
      if (!title.length && text.length) {
        validationErrors.push(this.createValidationError('text', `Text is to long - ${text.length}, max limit - ${this.postLimits.textCharLimit}`))
      }
      if (title.length && text.length) {
        validationErrors.push(this.createValidationError('text', `title & text is to long - ${postLength}, max limit - ${this.postLimits.textCharLimit}`))
      }

    }

    return [...validationErrors];
  }
}

export default Twitter