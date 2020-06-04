import React, {useEffect} from "react";
import styled from "styled-components";
import {observer, inject} from "mobx-react";
import {RootStore} from "../../stores/rootStore";
import {useHistory} from 'react-router-dom'
import {Link} from "react-router-dom";
//interfaces
import {SocialNetwork} from "../../modules/socialNetworks/models/SocialNetwork";
import {IValidationPostError, IValidationPostSocialNetworkError} from "../../modules/posts/types";

//components
import FormError from "../form/FormError";


interface IFormButtonProps {
  readonly isDisabled: boolean
}

interface ICheckMarkProps {
  readonly isChecked: boolean
  readonly validationErrors: boolean
}

//styles
const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 80px 60px;
  min-width: 400px;
  max-width: 500px;
`;

const FormTitle = styled.h1`
  font-size: 4em;
  line-height: 1;
  margin-top: 10px;
  margin-bottom: 40px;
`;

const NetworkErrorsWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormInput = styled.input`
  color: #333;
  font-size: 1.2rem;
  width: auto;
  padding: 10px 5px;
  margin: 5px 0px;
  border-radius: 0.2rem;
  background-color: #fff;
  border: none;
  display: block;
  border-bottom: 0.3rem solid transparent;
  &:hover  {
    border-color: #54b5e3;
  }
  &:focus  {
    border-color: #54b5e3;
    outline: none;
  }
`;

const FormButton = styled.button<IFormButtonProps>`
    padding: 10px;
    background-color: ${props => props.isDisabled ? '#294d66' : '#4db7dc'}; 
    border: none;
    border-radius: 3px;
    color: #fff;
    font-weight: bold;
    font-size: 1.1em;
    margin: 10px 0;
`;


const StyledCheckBox = styled.div`
    width: 300px;
    margin: 5px 0;
    display: flex;
    align-items: center;
    user-select: none;
    label {
        font-size: 1em;
        color: #4D4D4D;
        position: absolute;
        z-index: 10;
        padding-left: 30px;
        cursor: pointer;
    }
    input {
        opacity: 0;
        visibility: hidden;
        position: absolute;
    }
`;

const StyledMark = styled.div<ICheckMarkProps>`
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        border-radius: 100px;
        background-color: #FFF;
        border: ${props => props.validationErrors ? '2px solid #FFC107;' : '2px solid #00EA90;' } ;
        box-shadow:${props => props.isChecked ? props.validationErrors ? '0px 0px 0px 15px #FFC107 inset' : '20px 0px 0px 15px #00EA90 inset;' : '0px 0px 0px 0px #00EA90 inset' } ;
        transition: all 0.15s cubic-bezier(0, 1.05, 0.72, 1.07);
        &::after {
            content: '';
            width: 100%;
            height: 100%;
            opacity: 0;
            z-index: 4;
            position: absolute;
            transform: scale(0);
            background-size: 50%;
            background-repeat: no-repeat;
            background-position: center;
            transition-delay: 0.2s !important;
            transition: all 0.25s cubic-bezier(0, 1.05, 0.72, 1.07);
        }
`;


const LinkToDashboard = styled(Link)`
 text-decoration: none;
 text-transform: uppercase;
 color: #bdbdbd;
 &:before {
  content: '';
  border: solid #bdbdbd;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  height: 3px;
  width: 3px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
 }
 &:hover {
  color: #9b9b9b;
  &:before {
    color: #9b9b9b;
  }
 } 
`;

interface IPostFormProps {
  rootStore?: RootStore
}

const PostForm: React.FC<IPostFormProps> = inject('rootStore')(observer(({rootStore}) => {
  //actions
  const {isNetworkChecked, onNetworkChange, onFiledChange, submitPost, validate} = rootStore!.postFormStore;

  //values
  const user = rootStore!.userStore.user;
  const {title, text}:{title: string, text: string} = rootStore!.postFormStore.newPost.fields;
  const {postErrors, socialNetworkErrors}: { postErrors: IValidationPostError[], socialNetworkErrors: IValidationPostSocialNetworkError[] } = rootStore!.postFormStore.newPost.meta;
  const {checkedSocialNetworksIds}: {checkedSocialNetworksIds: number[]} = rootStore!.postFormStore;

  //variables
  const isPostValid = (!postErrors.length && !socialNetworkErrors.length);

  //hooks
  const history = useHistory();
  useEffect(() => {
    validate();
  }, [checkedSocialNetworksIds]);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        submitPost();
        history.push('/')
      }}
    >
      <FormWrap>
        <LinkToDashboard to={'/'}> back to dashboard </LinkToDashboard>
        <FormTitle>Make a <br/> brand new <br/> post!</FormTitle>
        {
          user!.activeSocialNetworks.map((network: SocialNetwork) => {
            const networkError = socialNetworkErrors.filter((err: IValidationPostSocialNetworkError) => err.socialNetworkId === network.id);
            const isChecked = isNetworkChecked(network.id);
            return (
              <div key={network.id}>
                <StyledCheckBox >
                  <input id={network.name} type="checkbox" checked={isChecked} onChange={onNetworkChange} value={network.id}/>
                  <label htmlFor={network.name} >{network.name}</label>
                  <StyledMark isChecked={isChecked} validationErrors={!!(networkError.length)}/>
                </StyledCheckBox>
                {!networkError.length ?
                  null :
                  <NetworkErrorsWrap>
                    {networkError.map((error, index) => {
                      return <FormError key={index} formErrorMessage={error.message}/>
                    })}
                  </NetworkErrorsWrap>
                }
              </div>
            )
          })
        }
        {!postErrors.length ? null
          : postErrors.map((error, index) => {
            return <FormError key={index} formErrorMessage={error.message}/>
          })
        }
        <FormInput
          name="title"
          value={title}
          onChange={onFiledChange}
          placeholder="Post title"
        />
        <FormInput
          name="text"
          value={text}
          onChange={onFiledChange}
          placeholder="Post text"
        />
        <FormButton disabled={!isPostValid} isDisabled={!isPostValid} type="submit">Make a new post!</FormButton>
      </FormWrap>
    </form>
  )
}));

export default PostForm