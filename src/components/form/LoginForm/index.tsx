import { useState } from 'react';

import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../../firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref as dbRef, set } from 'firebase/database';

import { AuthLandingLogin, AuthLandingLoginHeader } from './styles';
import AuthLandingPanelInput from '../../auth/AuthLandingPanelInput';
import AuthLandingPanelButtonForm from '../../auth/AuthLandingPanelButtonForm';
import InvalidField from '../InvalidField';

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getDatabase(firebaseApp);

const LoginForm = () => {
  const [email, setEmail] = useState<string>('');
  const [emailValid, setEmailValid] = useState<boolean>(true);

  const [password, setPassword] = useState<string>('');
  const [passwordValid, setPasswordValid] = useState<boolean>(true);

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

  const signIn = () => {
    if (!emailValid || !passwordValid) {
      return;
    }

    signInWithEmailAndPassword(auth, email, password).then(userCredential => {
      console.log('Login realizado com sucesso');
      const userId = userCredential.user.uid;
      set(dbRef(db, 'users/' + userId), {
        email
      });
    });
  };

  return (
    <AuthLandingLogin>
      <AuthLandingLoginHeader>
        <h2>Fazer Log-In</h2>
        <p>É um prazer ter você aqui novamente!</p>
      </AuthLandingLoginHeader>
      {!emailValid && <InvalidField>Email Invalido</InvalidField>}
      <AuthLandingPanelInput
        type="text"
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
      <AuthLandingPanelButtonForm onClick={signIn}>
        Fazer Log-In
      </AuthLandingPanelButtonForm>
    </AuthLandingLogin>
  );
};

export default LoginForm;
