import {useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {showMessage} from 'react-native-flash-message';
import {useState} from 'react';

/**
 * save data to local storage
 * @param {string} local_storage_key
 * @param {any} data
 * @returns Boolean
 */
export const saveItem = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (error) {
    console.log('saveItem', error.message);
  }
  return false;
};

/**
 * get data from local storage
 * @param {string} local_storage_key
 * @returns data | null
 */
export const getItem = async key => {
  try {
    const retrievedItem = await AsyncStorage.getItem(key);
    const item = JSON.parse(retrievedItem);
    return item;
  } catch (error) {
    console.log('getItem', error.message);
  }
  return null;
};

/**
 * remove data from local storage
 * @param {string} local_storage_key
 * @returns Boolean
 */
export const removeItem = async key => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    console.log('removeItem', error.message);
  }
  return false;
};

/**
 * clear local storage
 * @returns void
 */
export const clearStorage = async () => {
  await AsyncStorage.clear();
};

/**
 * handel Login and Register errors
 * @param {string} error_message
 */
export const handelAuthErrors = ({message}) => {
  const ErrorsTypes = {
    EMAIL_NOT_FOUND:
      'There is no user record corresponding to this identifier. The user may have been deleted',
    INVALID_PASSWORD:
      'The password is invalid or the user does not have a password',
    INVALID_EMAIL: 'The email is invalid',
    INVALID_PASSWORD:
      'The password is invalid or the user does not have a password',
    EMAIL_EXISTS: 'The email address is already in use by another account.',
  };
  showMessage({
    message: ErrorsTypes[message],
    type: 'danger',
  });
};

/**
 * save user data to local storage
 * @param {object} data
 */
export const SaveUserDataHandler = async data => {
  try {
    await saveItem('userData', data);
  } catch (error) {
    console.log(error);
  }
};

/**
 * hook to get user data from local storage
 * @returns object | null | undefined
 */
export const useGetUserData = () => {
  const [userData, setUserData] = useState(undefined);
  useEffect(() => {
    getItem('userData').then(data => {
      setUserData(data);
    });
  }, []);
  return userData;
};
