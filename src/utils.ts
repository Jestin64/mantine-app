// Constants for storage keys
const USER_LOGIN_KEY = "userLogin";
const API_KEY_KEY = "apiKey";

const isLocalStorageAvailable = (): boolean => {
    try {
        localStorage.setItem("test", "test");
        localStorage.removeItem("test");
        return true;
    } catch (e) {
        return false;
    }
};

// 1) local storage for user login
export const getLocalUserLogin = () => {
    if (isLocalStorageAvailable()) {
        return localStorage.getItem(USER_LOGIN_KEY);
    }
};

export const setLocalUserLogin = (userLogin: boolean) => {
    if (isLocalStorageAvailable()) {
        localStorage.setItem(USER_LOGIN_KEY, String(userLogin));
    }
};

export const removeLocalUserLogin = (): void => {
    if (isLocalStorageAvailable()) {
        localStorage.removeItem(USER_LOGIN_KEY);
    }
};

// 2) local storage for api key
export const setLocalApiKey = (apiKey: string) => {
    if (isLocalStorageAvailable()) {
        localStorage.setItem(API_KEY_KEY, apiKey);
    }
};

export const getLocalApiKey = () => {
    if (isLocalStorageAvailable()) {
        return localStorage.getItem(API_KEY_KEY);
    }
};

export const removeLocalApiKey = () => {
    if (isLocalStorageAvailable()) {
        localStorage.removeItem(API_KEY_KEY);
    }
};