import * as React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './routes'
import { ClientContext } from 'graphql-hooks'
import { createDrawerNavigator } from '@react-navigation/drawer'
import api from './services/api'
import Configuracoes from './screens/Configuracoes'
import Perfil from './screens/Perfil'
import PlanoEstudo from './screens/PlanoEstudo'
import UniversidadeCurso from './screens/UniversidadeCurso'

const Drawer = createDrawerNavigator()

export default function PrepApp () {
  function PerfilScreen () {
    return <Perfil />
  }

  function PlanoEstudoScreen () {
    return <PlanoEstudo />
  }

  function UniversidadeCursoScreen () {
    return <UniversidadeCurso />
  }

  function ConfiguracoesScreen () {
    return <Configuracoes />
  }

  return (
    <ClientContext.Provider value={api}>
      <StatusBar backgroundColor='#f5f4f5' barStyle='light-content' />
      <NavigationContainer>
        {/*<Drawer.Navigator>
          <Drawer.Screen name='Perfil' component={PerfilScreen} />
          <Drawer.Screen
            name='Plano de Estudos'
            component={PlanoEstudoScreen}
          />
          <Drawer.Screen
            name='Universidade e Curso'
            component={UniversidadeCursoScreen}
          />
          <Drawer.Screen name='Configurações' component={ConfiguracoesScreen} />
        </Drawer.Navigator>*/}
        <StatusBar barStyle='dark-content' />
        <Routes />
      </NavigationContainer>
    </ClientContext.Provider>
  )
}
