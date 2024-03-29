import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import { SignIn } from '../screens/Signin';
import { AppRoutes } from './app.routes';
import { Loading } from '../components/Loadingtsx';


export function Routes() {
  const [loading, setIsLoading] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User>();

  useEffect(() => {
    const subscriber = auth()
    .onAuthStateChanged( response => {
      setUser(response);
      setIsLoading(false);
      
    })
    return subscriber;
  },[]);

  if(loading) {
    return <Loading />
  }


  return (
    <NavigationContainer>
      {user ? <AppRoutes /> : <SignIn />}
    </NavigationContainer>
  )
} 