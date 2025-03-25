import { AuthLandingRegister } from './styles';

import AuthLandingPanelInput from '../../auth/AuthLandingPanelInput';
import AuthLandingPanelButtonForm from '../../auth/AuthLandingPanelButtonForm';

const RegisterForm = () => {
  return (
    <AuthLandingRegister>
      <h2>Criar Conta</h2>
      <p>Use seu e-mail para registro</p>
      <AuthLandingPanelInput type="text" placeholder="Nome de Usuario" />
      <AuthLandingPanelInput type="text" placeholder="Nome e Sobrenome" />
      <AuthLandingPanelInput type="email" placeholder="Email" />
      <AuthLandingPanelInput type="password" placeholder="Senha" />
      <AuthLandingPanelButtonForm>Registrar</AuthLandingPanelButtonForm>
    </AuthLandingRegister>
  );
};

export default RegisterForm;
