export const firebaseConfig = {
  apiKey: 'AIzaSyAAybupKUbL-WG6od_phBUGS7keZC6pZ-Q',
};

export const firebaseAuthUrl = route =>
  `https://identitytoolkit.googleapis.com/v1/${route}?key=${firebaseConfig.apiKey}`;

export const baseurl = 'https://osta.uplift16.net/api/';

export const headers = {
  'Content-Type': 'application/json',
};
