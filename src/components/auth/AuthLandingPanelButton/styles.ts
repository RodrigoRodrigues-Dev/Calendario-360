import styled from 'styled-components';
import colors from '../../../styles/colors';

export const AuthLandingPanelButton = styled.button`
  width: 320px;
  padding: 1rem 0;

  border: 1px solid ${colors.white};
  border-radius: 1rem;

  background-color: ${colors.primary};
  color: ${colors.white};

  &:hover {
    cursor: pointer;

    background-color: ${colors.white};
    color: ${colors.primary};
    border: 1px solid ${colors.primary};

    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 1260px) {
    width: 100%;
  }
`;
