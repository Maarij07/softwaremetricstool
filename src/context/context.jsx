import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../lib/firebase';  // Firebase auth instance
import { onAuthStateChanged } from 'firebase/auth';

// Create context
const AuthContext = createContext();

// Create provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, set the user state
        setUser(user);
      } else {
        // User is signed out, reset user state
        setUser(null);
      }
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => React.useContext(AuthContext);
