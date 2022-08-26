import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import { Loading } from '../components/Loading/Loading';

import { SignIn } from '../screens/SignIn/Signin';
import { AppRoutes } from './app.routes';

export function Routes() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const subscrible = auth()
      .onAuthStateChanged(response => {
        setUser(response);
        setLoading(false);
      });

    return subscrible;
  }, []);

  if (loading) {
    return <Loading />
  }

  return (
    <NavigationContainer>
      {user ? <AppRoutes /> : <SignIn />}
    </NavigationContainer>
  )
}