import { AuthLandingPanelButton as AuthLandingPanelButtonStyled } from './styles';

type Props = {
  children?: React.ReactNode;
  onClick?: () => void;
};

const AuthLandingPanelButton: React.FC<Props> = ({ onClick, children }) => (
  <AuthLandingPanelButtonStyled onClick={onClick}>
    {children}
  </AuthLandingPanelButtonStyled>
);

export default AuthLandingPanelButton;
