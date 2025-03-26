import { AuthLandingPanelInputStyled } from './styles';

type Prop = {
  type: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const AuthLandingPanelInput = ({ type, placeholder, onChange }: Prop) => (
  <AuthLandingPanelInputStyled
    type={type}
    placeholder={placeholder}
    onChange={onChange}
  ></AuthLandingPanelInputStyled>
);

export default AuthLandingPanelInput;
