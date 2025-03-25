import styled from 'styled-components';
import AuthLandingPanelButton from '../AuthLandingPanelButton';
import colors from '../../../styles/colors';

export const AuthLandingPanelButtonFormStyled = styled(AuthLandingPanelButton)`
  width: 120px;
  border-radius: 2rem;

  &:hover {
    border: 1px solid ${colors.primary};
  }
`;
