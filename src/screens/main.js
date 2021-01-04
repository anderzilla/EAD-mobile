import React, { useState, useContext } from 'react'
import { View, Text, Button, Image } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import { MenuLateral } from '../components/Menu'
import { Container, MenuButton, MenuIcon } from './Login/styles'
import { ClientContext, useQuery } from 'graphql-hooks'
import Loader from '../components/Loader'

import Simulado from './Simulado'
import Inicio from './Inicio'
import Ranking from './Ranking'
import Historico from './Historico'
import Conteudo from './Conteudo'
import Perfil from './Perfil'

import MenuImage from '../assets/icons/menu.png'
import HomeIcon from '../assets/icons/home.png'
import SimuladoIcon from '../assets/icons/fileCheck.png'
import ConteudoIcon from '../assets/icons/folder.png'
import RankingIcon from '../assets/icons/barsChart.png'
import HistoricoIcon from '../assets/icons/clock.png'

const Tab = createBottomTabNavigator()

export default function Main ({ navigation }) {
  const client = useContext(ClientContext)
  const [errors, setErrors] = useState('')

  getTokenStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('@AUTH_TOKEN')
      client.setHeader('Authorization', `Bearer ${value}`)
      const token = value
    } catch (e) {
      setErrors('Erro ao recuperar o token, realize o login novamente')
    }
  }

  const getToken = getTokenStorage()

  const queryMe = `
  query Me {
    user {
      me {
        id
        name
        gender
        courses {
          id
          universityId
          courseName
        }
      }
    }
  }`

  const { loading, error, data } = useQuery(queryMe)
  if (loading) return <Loader />
  if (error) alert(JSON.stringify(error))

  setUser = async () => {
    try {
      await AsyncStorage.setItem('AUTH_USER', data.user.me.name)
      await AsyncStorage.setItem('AUTH_USER_ID', data.user.me.id)
      await AsyncStorage.setItem('AUTH_USER_GENDER', data.user.me.gender)
      await AsyncStorage.setItem(
        'AUTH_USER_COURSES',
        JSON.stringify(data.user.me.courses)
      )
    } catch (e) {}
  }

  function SimuladoScreen () {
    return <Simulado />
  }

  function InicioScreen () {
    return <Inicio />
  }

  function ConteudoScreen () {
    return <Conteudo />
  }

  function RankingScreen () {
    return <Ranking />
  }

  function HistoricoScreen () {
    return <Historico />
  }

  function PerfilScreen () {
    return <Perfil />
  }

  function openMenu () {
    navigation.navigate('Perfil')
  }

  return (
    <>
      <MenuButton onPress={openMenu}>
        <MenuIcon source={MenuImage} />
      </MenuButton>

      <Tab.Navigator
        initialRouteName='InicioScreen'
        tabBarOptions={{
          activeTintColor: '#FB8D60'
        }}
        style={{ padding: 20 }}
      >
        <Tab.Screen name='Inicio' component={InicioScreen} />
        <Tab.Screen name='Simulado' component={SimuladoScreen} />
        <Tab.Screen name='Conteúdo' component={ConteudoScreen} />
        <Tab.Screen name='Ranking' component={RankingScreen} />
        <Tab.Screen name='Histórico' component={HistoricoScreen} />
        <Tab.Screen name='Perfil' component={PerfilScreen} />
      </Tab.Navigator>
    </>
  )
}
