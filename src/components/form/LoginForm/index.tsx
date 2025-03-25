import { AuthLandingLogin } from './styles';
import AuthLandingPanelInput from '../../auth/AuthLandingPanelInput';
import AuthLandingPanelButtonForm from '../../auth/AuthLandingPanelButtonForm';

const LoginForm = () => {
  return (
    <AuthLandingLogin>
      <h2>Fazer Log-In</h2>
      <p>É um prazer ter você aqui novamente!</p>
      <AuthLandingPanelInput type="text" placeholder="Email" />
      <AuthLandingPanelInput type="password" placeholder="Senha" />
      <AuthLandingPanelButtonForm>Fazer Log-In</AuthLandingPanelButtonForm>
    </AuthLandingLogin>
  );
};

export default LoginForm;
