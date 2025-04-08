import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref as dbRef, get } from 'firebase/database';

import firebaseConfig from '../../../firebaseConfig';
import { setUser, setLoginStatus } from '../../../store/reducers/user';
import { RootState } from '../../../store';

import { AuthLandingLogin, AuthLandingLoginHeader } from './styles';
import AuthLandingPanelInput from '../../auth/AuthLandingPanelInput';
import AuthLandingPanelButtonForm from '../../auth/AuthLandingPanelButtonForm';
import InvalidField from '../InvalidField';

// Firebase initialization
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getDatabase(firebaseApp);

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state: RootState) => state.user.isLogin);

  const [email, setEmail] = useState<string>('');
  const [emailValid, setEmailValid] = useState<boolean>(true);
  const [password, setPassword] = useState<string>('');
  const [passwordValid, setPasswordValid] = useState<boolean>(true);

  useEffect(() => {
    if (isLogin) {
      navigate('/Calendario');
    }
  }, [isLogin, navigate]);

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

  const signIn = async () => {
    if (!emailValid || !passwordValid) {
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userId = userCredential.user.uid;

      const userRef = dbRef(db, 'users/' + userId);
      const snapshot = await get(userRef);
      const userData = snapshot.val();

      dispatch(setUser(userData));
      dispatch(setLoginStatus(true));
    } catch (error) {
      console.error('Error during sign in: ', error);
      alert(
        'Login failed: ' +
          (error instanceof Error ? error.message : 'Unknown error')
      );
    }
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
