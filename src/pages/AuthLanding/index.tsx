import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthLandingContainer, AuthLandingPrev } from './styles';
import LoginForm from '../../components/form/LoginForm';
import RegisterForm from '../../components/form/RegisterForm';
import AuthPanelToggle from '../../components/auth/AuthPanelToggle';
import MinifiedFooter from '../../components/MinifiedFooter';

const AuthLanding = () => {
  const [isLogin, setIsLogin] = useState(false);
  const toggleLogin = () => setIsLogin(!isLogin);

  return (
    <>
      <Link to="/Home">
        <AuthLandingPrev />
      </Link>
      <AuthLandingContainer>
        <LoginForm />
        <RegisterForm />
        <AuthPanelToggle isLogin={isLogin} toggle={toggleLogin} />
      </AuthLandingContainer>
      <MinifiedFooter />
    </>
  );
};

export default AuthLanding;
