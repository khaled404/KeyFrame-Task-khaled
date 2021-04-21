export const firebaseConfig = {
  apiKey: 'AIzaSyAAybupKUbL-WG6od_phBUGS7keZC6pZ-Q',
};

export const firebaseAuthUrl = route =>
  `https://identitytoolkit.googleapis.com/v1/${route}?key=${firebaseConfig.apiKey}`;
