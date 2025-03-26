import { SucessFormStyled } from './styles';

type Prop = {
  children: string;
};

const SuccessForm = ({ children }: Prop) => (
  <SucessFormStyled>{children}</SucessFormStyled>
);

export default SuccessForm;
