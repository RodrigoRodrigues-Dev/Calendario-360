import styled from 'styled-components';
import colors from '../../styles/colors';
import { MinifiedFooterStyled } from '../../components/MinifiedFooter/styles';

export const HomeContainer = styled.div`
  z-index: 999;
  position: fixed;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 2rem;
  width: 960px;
  text-align: center;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0px 0px 16px 14px rgba(0, 0, 0, 0.1);
  background-color: ${colors.white};

  @media (max-width: 1280px) {
    width: 95vw;
  }
`;

export const HomeHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const HomeLogo = styled.img`
  width: 10%;
`;

export const HomeText = styled.p`
  font-size: 1rem;
`;

export const CallToActionButton = styled.button`
  font-size: 1.2rem;
  padding: 0.5rem 2rem;

  border-radius: 0.5rem;
  border: none;

  background-color: ${colors.black};
  color: ${colors.white};
  border: 1px solid ${colors.black};
  opacity: 0.9;
  transition: all ease 0.5s;

  &:hover {
    cursor: pointer;
    background-color: ${colors.white};
    color: ${colors.black};
  }
`;

const CircleImageBase = styled.img`
  position: absolute;

  @media (max-width: 520px) {
    width: 80%;
  }
`;

export const TopCircleImage = styled(CircleImageBase)`
  top: 0;
  right: 0;
`;

export const BottomCircleImage = styled(CircleImageBase)`
  bottom: 0;
  left: 0;
`;

export const MinifiedFooterHome = styled(MinifiedFooterStyled)`
  @media (max-width: 1360px) {
    position: absolute;
    bottom: 0;
    width: 90%;
    text-align: center;

    color: ${colors.white};
    background-color: ${colors.primary};

    margin: 1rem;
    padding: 1rem;
    border-radius: 1rem;
  }
`;
