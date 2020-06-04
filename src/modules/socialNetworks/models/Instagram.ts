import {IPostForm, IValidationPostSocialNetworkError} from "../../posts/types";
import {SocialNetwork} from "./SocialNetwork";

class Instagram implements SocialNetwork {
  id: number;
  name = 'Instagram';

  postLimits = {
    textCharLimit: 6,
    photoSizeLimit: 500
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
    // //validation here
    return [{socialNetworkId: this.id, field: 'title', message: `Sorry! You can't pass validation here, it's only for demonstration`}];
  }
}

export default Instagram



