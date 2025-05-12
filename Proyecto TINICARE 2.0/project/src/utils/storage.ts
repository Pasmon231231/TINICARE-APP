import { User } from '../types';

const USER_STORAGE_KEY = 'tinycare_user';

export const storeUser = (user: User): void => {
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
};

export const getStoredUser = (): User | null => {
  const storedUser = localStorage.getItem(USER_STORAGE_KEY);
  return storedUser ? JSON.parse(storedUser) : null;
};

export const clearStoredUser = (): void => {
  localStorage.removeItem(USER_STORAGE_KEY);
};