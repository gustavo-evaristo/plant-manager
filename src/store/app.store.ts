import AsyncStorage from '@react-native-async-storage/async-storage';

const { getItem, setItem } = AsyncStorage;

export const setStore = async (name: string, item: string): Promise<void> => {
  const response = await setItem(name, item);

  return response;
};

export const getStore = async (item: string): Promise<string> => {
  const response = await getItem(item);

  return response;
};
