import { supabase } from '../lib/supabase';
import { View, ActivityIndicator } from 'react-native';
import React from 'react';
import Button from '../components/Button';
import { Link, Redirect } from 'expo-router';
import { useAuth } from '../Providers/AuthProvider';


const index = () => {
    const {session, loading, isAdmin} = useAuth();

    if(loading){
      return <ActivityIndicator />
    }

    if(!session){
        return <Redirect href={'/(auth)/sign-in'}/>
    }
    if(!isAdmin){
      return <Redirect href ={'/(tabs)'} />
    }
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
      <Link href={'/(tabs)'} asChild>
        <Button text="User" />
      </Link>
      <Link href={'/(admin)' } asChild>
        <Button text="Admin"  />
      </Link>
     
      
      <Button onPress={() => supabase.auth.signOut()} text='Sign out' />
    </View>
  );
};

export default index;