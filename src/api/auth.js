import {firebaseAuthUrl, headers} from '../constants/config';

export const LoginHandler = async body => {
  const response = await fetch(firebaseAuthUrl('accounts:signInWithPassword'), {
    method: 'POST',
    headers,
    body: JSON.stringify({
      ...body,
      returnSecureToken: true,
    }),
  });
  return await response.json();
};

export const RegisterHandler = async body => {
  const response = await fetch(firebaseAuthUrl('accounts:signUp'), {
    method: 'POST',
    headers,
    body: JSON.stringify({
      ...body,
      returnSecureToken: true,
    }),
  });
  return await response.json();
};
