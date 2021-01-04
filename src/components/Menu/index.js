import * as React from 'react'
import { Button, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

const Drawer = createDrawerNavigator()

export default function MenuLateral () {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Perfil' component={PerfilScreen} />
        <Drawer.Screen name='Plano de Estudos' component={PlanoEstudoScreen} />
        <Drawer.Screen
          name='Universidade e Curso'
          component={UniversidadeCursoScreen}
        />
        <Drawer.Screen name='Configurações' component={ConfiguracoesScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
