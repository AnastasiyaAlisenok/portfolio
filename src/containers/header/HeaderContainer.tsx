import React from "react";
import styled from "styled-components";
import NavLink from "../../components/Link/NavLink";
import Logo from "../../components/Logo/Logo";
import { Contacts } from "../../components/Contacts/Contacts";

export const Header = styled.header`
  display: flex;
  width: 100%;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin-right: 31px;
`;

const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const HeaderContainer = (): JSX.Element => {
  return (
    <Header>
      <Logo />
      <Nav>
        <List>
          <NavLink text="Home" url="#" />
          <NavLink text="About" url="#about-me" />
          <NavLink text="Tech Stack" url="#tech-stack" />
          <NavLink text="Projects" url="#projects" />
          <NavLink text="Contacts" url="#" />
        </List>
      </Nav>
      <Contacts />
    </Header>
  );
};
