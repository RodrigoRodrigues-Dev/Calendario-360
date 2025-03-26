import { InvalidFieldStyled } from './styles';

type Prop = {
  children: string;
};

const InvalidField = (props: Prop) => (
  <InvalidFieldStyled>{props.children}</InvalidFieldStyled>
);

export default InvalidField;
