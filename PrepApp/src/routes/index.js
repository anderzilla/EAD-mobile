import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

import Main from '../screens/main'

import Login from '../screens/Login/login'
import Termos from '../screens/Login/termos'
import Recuperar from '../screens/Login/recuperarSenha'
import NovaSenha from '../screens/Login/novaSenha'
import Conexao from '../screens/Login/connectionStatus'

export default function Routes () {
  return (
    <Stack.Navigator
      initialRouteName={'Login'}
      screenOptions={{
        headerTintColor: '#cecece',
        headerShown: false
      }}
    >
      <Stack.Screen
        name='Main'
        component={Main}
        options={{ title: 'Home', headerShown: false }}
      />
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ title: 'Login', headerShown: false }}
      />
      <Stack.Screen
        name='Termos'
        component={Termos}
        options={{ title: 'Termos' }}
      />
      <Stack.Screen
        name='Recuperar'
        component={Recuperar}
        options={{ title: 'Recuperar', headerShown: false }}
      />
      <Stack.Screen
        name='NovaSenha'
        component={NovaSenha}
        options={{ title: 'NovaSenha', headerShown: false }}
      />
      <Stack.Screen
        name='Conexao'
        component={Conexao}
        options={{ title: 'Conexão', headerShown: false }}
      />
    </Stack.Navigator>
  )
}
