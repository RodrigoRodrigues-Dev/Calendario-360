import styled from 'styled-components';
import colors from '../../styles/colors';

export const MinifiedFooterStyled = styled.footer`
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translateX(-50%);
  color: ${colors.grayishCyan};

  @media (max-width: 1260px) {
    position: relative;
    margin: 1rem;
  }
`;
