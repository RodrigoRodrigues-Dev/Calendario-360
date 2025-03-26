import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref as dbRef, set } from 'firebase/database';

import firebaseConfig from '../../../firebaseConfig';

import { AuthLandingRegister, AuthLandingRegisterHeader } from './styles';
import AuthLandingPanelInput from '../../auth/AuthLandingPanelInput';
import AuthLandingPanelButtonForm from '../../auth/AuthLandingPanelButtonForm';
import InvalidField from '../InvalidField';
import SuccessForm from '../SuccessForm';

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getDatabase(firebaseApp);

const RegisterForm = () => {
  const [username, setUsername] = useState<string>('');
  const [isUsernameValid, setIsUsernameValid] = useState<boolean>(true);

  const [nameAndSurname, setNameAndSurname] = useState<string>('');
  const [isNameAndSurname, setIsNameAndSurname] = useState<boolean>(true);

  const [email, setEmail] = useState<string>('');
  const [emailValid, setEmailValid] = useState<boolean>(true);

  const [password, setPassword] = useState<string>('');
  const [passwordValid, setPasswordValid] = useState<boolean>(true);

  const [successfulRegistration, setSuccessfulRegistration] =
    useState<boolean>(false);

  const handleUsernameChange = (value: string) => {
    setUsername(value);
    setIsUsernameValid(value.trim().length >= 3);
  };

  const handleNameAndSurnameChange = (value: string) => {
    const trimmedValue = value.trim();
    const onlyLetters = /^[A-Za-z\s]+$/.test(trimmedValue);
    setNameAndSurname(trimmedValue);
    setIsNameAndSurname(onlyLetters && trimmedValue.includes(' '));
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const valid = emailRegex.test(value);
    setEmailValid(valid);
    return valid;
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    const meetsLength = value.trim().length >= 7;
    const letterMatches = value.match(/[A-Za-z]/g);
    const letterCount = letterMatches ? letterMatches.length : 0;
    const meetsLetterCount = letterCount <= 2;
    setPasswordValid(meetsLength && meetsLetterCount);
  };

  const register = () => {
    if (
      !emailValid ||
      !isUsernameValid ||
      !isNameAndSurname ||
      !passwordValid
    ) {
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        setSuccessfulRegistration(true);
        const userId = userCredential.user.uid;
        set(dbRef(db, 'users/' + userId), {
          username,
          nameAndSurname,
          email
        });
      })
      .catch(error => {
        console.error('Erro ao cadastrar:', error.code, error.message);
      });
  };

  return (
    <AuthLandingRegister>
      <AuthLandingRegisterHeader>
        <h2>Criar Conta</h2>
        <p>Use seu e-mail para registro</p>
      </AuthLandingRegisterHeader>
      {!isUsernameValid && (
        <InvalidField>Nome de usuario invalido</InvalidField>
      )}
      <AuthLandingPanelInput
        type="text"
        placeholder="Nome de Usuário"
        onChange={e => handleUsernameChange(e.target.value)}
      />
      {!isNameAndSurname && (
        <InvalidField>
          Nome e Sobrenome Invalidos. (Não pode conter números)
        </InvalidField>
      )}
      <AuthLandingPanelInput
        type="text"
        placeholder="Nome e Sobrenome"
        onChange={e => handleNameAndSurnameChange(e.target.value)}
      />
      {!emailValid && <InvalidField>Email Invalido</InvalidField>}
      <AuthLandingPanelInput
        type="email"
        placeholder="Email"
        onChange={e => handleEmailChange(e.target.value)}
      />
      {!passwordValid && (
        <InvalidField>
          A senha deve ter 7 ou mais caracteres e no máximo 2 letras
        </InvalidField>
      )}
      <AuthLandingPanelInput
        type="password"
        placeholder="Senha"
        onChange={e => handlePasswordChange(e.target.value)}
      />
      {successfulRegistration && (
        <SuccessForm>Cadastro realizado com sucesso!</SuccessForm>
      )}
      <AuthLandingPanelButtonForm onClick={register}>
        Registrar
      </AuthLandingPanelButtonForm>
    </AuthLandingRegister>
  );
};

export default RegisterForm;
