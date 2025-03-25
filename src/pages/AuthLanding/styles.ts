import styled from 'styled-components';
import colors from '../../styles/colors';
import { GrFormPreviousLink } from 'react-icons/gr';

export const AuthLandingContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10rem;
  padding: 5rem;

  width: 1120px;
  height: 600px;

  box-shadow: 0px 0px 16px 14px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  overflow: hidden;

  @media (max-width: 1260px) {
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin: 5rem 0;

    position: relative;
    top: auto;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 760px) {
    padding: 5rem 1.5rem;
  }
`;

export const AuthLandingPrev = styled(
  GrFormPreviousLink as React.ComponentType
)`
  position: absolute;
  top: 10px;
  left: 10px;

  font-size: 2.5rem;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
    background: ${colors.whiteEdgar};
  }

  @media (max-width: 860px) {
    font-size: 2rem;
  }
`;
