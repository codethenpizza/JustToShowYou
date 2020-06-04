import React from "react";

import styled, {DefaultTheme, withTheme} from "styled-components";
import {IPostStatistic} from "../../modules/posts/types";
import {ISocialNetworkBasicInfo} from "../../modules/socialNetworks/types";

import CardHeader from "../CardHeader";


interface ISingleStatProps {
  readonly singleStatName: string
}

const CardHeaderTitle = styled.h4`
  font-weight: normal;
  margin: 0;
  text-align: center;
  display: flex; 
  justify-content: center;
`;

const StatWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const SingleStat = styled.h5<ISingleStatProps>`
  margin: 0px 3px;
  &:before {
      content: '';
      display: inline-block;
      background: url('/post-stat/${props => props.singleStatName}.svg') no-repeat center;
      background-size: contain;
      height: 12px;
      width: 12px;
      margin-right: 3px;
  }
`;

interface IPostHeaderProps {
  basicSocialNetwork: ISocialNetworkBasicInfo
  socialNetworkStatistic: IPostStatistic | null
}

export const PostHeader: React.FC<IPostHeaderProps> = ({basicSocialNetwork, socialNetworkStatistic}) => {
  const network: ISocialNetworkBasicInfo = basicSocialNetwork;
  const statistic: IPostStatistic | null = socialNetworkStatistic;

  const displayStatistic = (statistic: IPostStatistic) => {
    let values = Object.entries(statistic.socialNetworkStatistic);

    return values.map((singleStat, index) => {
      return <SingleStat key={index} singleStatName={singleStat[0]}>{singleStat[1]}</SingleStat>
    });
  };
  return (
    <CardHeader basicSocialNetwork={network}>
      <StatWrap>
        {(!statistic) ?
          <CardHeaderTitle>will be posted</CardHeaderTitle>
          : displayStatistic(statistic)}
      </StatWrap>
    </CardHeader>
  );
};

// export default withTheme(PostHeader);
export default PostHeader;
// export default withTheme;