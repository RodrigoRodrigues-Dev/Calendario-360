import { AuthLandingPanelButtonFormStyled } from './styles';

type Prop = {
  children: React.ReactNode;
};

const AuthLandingPanelButton = (props: Prop) => {
  return (
    <AuthLandingPanelButtonFormStyled>
      {props.children}
    </AuthLandingPanelButtonFormStyled>
  );
};

export default AuthLandingPanelButton;
