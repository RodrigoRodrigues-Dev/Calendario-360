import { useState } from 'react';
import { AuthLandingContainer, AuthLandingPrev } from './styles';
import LoginForm from '../../components/form/LoginForm';
import RegisterForm from '../../components/form/RegisterForm';
import AuthPanelToggle from '../../components/auth/AuthPanelToggle';
import AuthFooter from '../../components/auth/AuthFooter';

const AuthLanding = () => {
  const [isLogin, setIsLogin] = useState(false);
  const toggleLogin = () => setIsLogin(!isLogin);

  return (
    <>
      <AuthLandingPrev />
      <AuthLandingContainer>
        <LoginForm />
        <RegisterForm />
        <AuthPanelToggle isLogin={isLogin} toggle={toggleLogin} />
      </AuthLandingContainer>
      <AuthFooter />
    </>
  );
};

export default AuthLanding;
