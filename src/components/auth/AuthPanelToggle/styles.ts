import styled from 'styled-components';
import colors from '../../../styles/colors';

export const AuthLandingPanelLeft = styled.div<{ $isLogin: boolean }>`
  text-align: center;
  position: absolute;
  top: 35%;
  left: ${({ $isLogin }) => ($isLogin ? '-50%' : '10%')};

  display: flex;
  flex-direction: column;
  gap: 1rem;

  color: ${colors.white};
  transition: all 0.5s ease-in-out;

  @media (max-width: 1260px) {
    top: ${({ $isLogin }) => ($isLogin ? '-50%' : '15%')};
    left: 50%;

    gap: 1.5rem;
    width: 65%;
    transform: translateX(-50%);
  }
`;

export const AuthLandingPanelRight = styled.div<{ $isLogin: boolean }>`
  text-align: center;
  position: absolute;
  top: 35%;
  right: ${({ $isLogin }) => ($isLogin ? '10%' : '-50%')};

  display: flex;
  flex-direction: column;
  gap: 1rem;

  color: ${colors.white};
  transition: all 0.5s ease-in-out;

  @media (max-width: 1260px) {
    top: ${({ $isLogin }) => ($isLogin ? '70%' : '100%')};
    right: 50%;

    gap: 1.5rem;
    width: 65%;
    transform: translateX(50%);
  }
`;

export const AuthLandingPanel = styled.div<{ $isLogin: boolean }>`
  position: absolute;
  left: ${({ $isLogin }) => ($isLogin ? '50%' : '-250%')};

  width: 300%;
  height: 100%;

  background-color: ${colors.primary};
  border-radius: 10rem;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1260px) {
    top: ${({ $isLogin }) => ($isLogin ? '50%' : '-50%')};
    left: 0;

    height: 100%;
    width: 100%;
    border-radius: 5rem;

    @media (max-width: 1260px) {
      border-radius: 3rem;
    }
  }
`;
