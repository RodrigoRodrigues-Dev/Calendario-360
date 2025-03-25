import React from 'react';
import AuthLandingPanelButton from '../AuthLandingPanelButton';

import {
  AuthLandingPanelLeft,
  AuthLandingPanelRight,
  AuthLandingPanel
} from './styles';

interface Props {
  isLogin: boolean;
  toggle: () => void;
}

const AuthPanelToggle: React.FC<Props> = ({ isLogin, toggle }) => {
  return (
    <>
      <AuthLandingPanel $isLogin={isLogin} />
      <AuthLandingPanelLeft $isLogin={isLogin}>
        <h2>Bem-vindo de volta!</h2>
        <p>Use seu email para fazer log-in</p>
        <AuthLandingPanelButton onClick={toggle}>
          Fazer Log-in
        </AuthLandingPanelButton>
      </AuthLandingPanelLeft>
      <AuthLandingPanelRight $isLogin={isLogin}>
        <h2>Bem-vindo!</h2>
        <p>Crie sua conta</p>
        <AuthLandingPanelButton onClick={toggle}>
          Criar Conta
        </AuthLandingPanelButton>
      </AuthLandingPanelRight>
    </>
  );
};

export default AuthPanelToggle;
