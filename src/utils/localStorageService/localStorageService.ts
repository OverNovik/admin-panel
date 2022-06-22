const FAKE_TOKEN = "fake-token";

const setToken = (token: string) => {
  localStorage.setItem(FAKE_TOKEN, token);
};

const getToken = () => localStorage.getItem(FAKE_TOKEN);

const removeToken = () => {
  localStorage.removeItem(FAKE_TOKEN);
};

export default { setToken, getToken, removeToken };
