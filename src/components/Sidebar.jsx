import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 200px;
  height: 100%;
  background-color: #1c1c1c;
  padding-top: 20px;
`;

const SidebarSubContainer = styled.div`
  position: relative;
  height: 100%;
`;

const SidebarLink = styled(Link)`
  display: block;
  padding: 20px;
  color: #fff;
  text-decoration: none;
  &:hover {
    background-color: #2f2f2f;
  }
`;

const SidebarSair = styled(Link)`
  position: absolute;
  width: 160px;
  bottom: 60px;
  padding: 20px;
  color: #fff;
  text-decoration: none;
  align-self: flex-end;
  &:hover {
    background-color: #2f2f2f;
  }
`;

const Logo = styled.img`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  margin: 20px auto;
  width: 140px;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarSubContainer>
        <Logo src="./src/assets/logo.png" alt="Logo do Museu" />
        <SidebarLink to="/dashboard/eventos">Eventos</SidebarLink>
        <SidebarLink to="/dashboard">Dados e Estatísticas</SidebarLink>
        <SidebarLink to="/dashboard/suporte">Suporte</SidebarLink>
        <SidebarSair to="/">Logout</SidebarSair>
      </SidebarSubContainer>
    </SidebarContainer>
  );
}

export default Sidebar;
