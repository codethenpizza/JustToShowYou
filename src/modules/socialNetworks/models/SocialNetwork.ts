import {IPostForm} from "../../posts/types";
import {IValidationPostSocialNetworkError} from '../../posts/types'


/* We can create social networks just for just for receiving news */
export abstract class UnregisteredSocialNetwork {
  abstract id: number;
  abstract name: string;
}

/* And then if we want to give user possibility to post there^ just add a validation methods for a post */
export abstract class SocialNetwork implements UnregisteredSocialNetwork{
  abstract id: number;
  abstract name: string;

  abstract createValidationError(field: string, message: string): IValidationPostSocialNetworkError

  abstract validate(data: IPostForm): IValidationPostSocialNetworkError[]

}


