import React from "react";
import styled from "styled-components"
import {Link} from "react-router-dom";

const MenuWrap = styled.div`
  position: fixed;
  top: 0;
  background-color:#5C6BC0;
  width: 50px;
  height: 100vh;
  padding: 25px 2px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  opacity: 0.7;
  transition: 0.5s all;
  &:hover {
    opacity: 1;
  }
`;

interface IMenuIconProps {
  iconName:string
}

const MenuIcon = styled(Link)<IMenuIconProps>`
  text-decoration: none;
  margin: 10px 0;
  width: 30px;
  height: 30px;
  background-image:url('${props => props.iconName}.svg');
  background-position: center ;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Menu: React.FC = () => (
  <MenuWrap>
    <MenuIcon iconName={'dashboard'} to={'/'} />
    <MenuIcon iconName={'tickets'} to={'/'} />
    <MenuIcon iconName={'calendar'} to={'/'} />
    <MenuIcon iconName={'statistic'} to={'/'} />

  </MenuWrap>
);

export default Menu
