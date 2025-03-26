import { AuthLandingPanelButtonFormStyled } from './styles';

type Prop = {
  children: React.ReactNode;
  onClick: () => void;
};

const AuthLandingPanelButton = ({ onClick, children }: Prop) => {
  return (
    <AuthLandingPanelButtonFormStyled onClick={onClick}>
      {children}
    </AuthLandingPanelButtonFormStyled>
  );
};

export default AuthLandingPanelButton;
