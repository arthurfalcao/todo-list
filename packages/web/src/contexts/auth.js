import { createContext, useState, useEffect, useContext } from 'react';

import * as userService from 'services/user';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState('idle');

  const isPending = status === 'idle' || status === 'pending';

  useEffect(() => {
    const storagedUser = localStorage.getItem('username');
    const storagedToken = localStorage.getItem('token');

    if (storagedUser && storagedToken) {
      setUser(JSON.parse(storagedUser));
      setStatus('resolved');
    } else {
      setStatus('rejected');
    }
  }, []);

  const signIn = async ({ email, password }) => {
    const { data } = await userService.login({ email, password });

    setUser(data.name);

    localStorage.setItem('token', data.token);
    localStorage.setItem('username', data.name);
  };

  const signUp = async ({ email, password, name }) => {
    const { data } = await userService.signUp({ email, password, name });

    setUser(data.name);

    localStorage.setItem('token', data.token);
    localStorage.setItem('username', data.name);
  };

  const signOut = () => {
    localStorage.clear();
    setUser(null);
  };

  if (isPending) {
    // TODO: add a full page spinner
    return null;
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signUp, signOut }}>{children}</AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('Cannot use `useAuth` outside of a AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
