import { AuthLandingPanelInputStyled } from './styles';

type Prop = {
  type: string;
  placeholder: string;
};

const AuthLandingPanelInput = ({ type, placeholder }: Prop) => (
  <AuthLandingPanelInputStyled
    type={type}
    placeholder={placeholder}
  ></AuthLandingPanelInputStyled>
);

export default AuthLandingPanelInput;
