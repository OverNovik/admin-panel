export interface Auth {
  logIn: (token: string) => void;
  loggedIn: boolean;
  logOut: () => void;
  token: string | null;
}
