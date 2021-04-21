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
