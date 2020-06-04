import React, {Component} from "react";

import styled, {DefaultTheme, withTheme} from "styled-components";
import {ISocialNetworkBasicInfo} from "../modules/socialNetworks/types";

//style
interface ISocialNetworkName {
  readonly socialNetworkName: string;
}

const CardTemplate = styled.div<ISocialNetworkName>`
      background: linear-gradient(30deg, ${props => {
        const gradient = props.theme.color.socialNetworks[props.socialNetworkName].gradient;
        return gradient.join(', ')
      }});
      color: #fff;
      padding: 5px 25px;
      border-radius: 3px 3px 0 0;
      position: relative;
      &:before {
        position: absolute;
        top: 6px;
        left: 5px;
        content: '';
        display: inline-block;
        background: url('/social-icons/${props => props.socialNetworkName}.svg') no-repeat center;
        background-size: contain;
        height: 15px;
        width: 15px;
      }
`;


interface ICardHeaderProps {
  theme?: DefaultTheme
  basicSocialNetwork: ISocialNetworkBasicInfo
  children: any
}

class CardHeader extends Component<ICardHeaderProps> {

  render() {

    const network: ISocialNetworkBasicInfo = this.props.basicSocialNetwork;

    return (
      <CardTemplate
        theme={this.props.theme}
        socialNetworkName={network.name}
      >
        {this.props.children}
      </CardTemplate>
    );
  }
}

export default withTheme(CardHeader)