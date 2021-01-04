import React from 'react'
import { View, Image, Text, ActivityIndicator } from 'react-native'
import logoPrepApp from '../../assets/logo-PrepApp-Final_01.png'
import logoConn from '../../assets/semconexao.png'
import Loader from '../../components/Loader'
import Connection from './connectionStatus'
import { useNetInfo } from '@react-native-community/netinfo'

import {
  Container,
  Logo,
  FormLogin,
  InputLogin,
  LoginAction,
  LoginButton,
  Footer,
  LabelInput
} from './styles'

export default function novaSenha ({ navigation }) {
  let loader = false

  function navigateToMain () {
    navigation.navigate('Main')
  }

  function navigateToLogin () {
    loader = true
    setTimeout(() => {
      navigation.navigate('Login')
    }, 2000)
  }
  function navigateToConexao () {
    navigation.navigate('Conexao')
  }

  const netInfo = useNetInfo()
  if (netInfo.isConnected) {
    return (
      <Container>
        <Logo>
          <Image source={logoPrepApp} />
        </Logo>
        <FormLogin>
          <LabelInput>Digite a sua nova senha:</LabelInput>
          <InputLogin type='text' secureTextEntry={true} placeholder='SENHA' />
          <LabelInput>Confirme a sua nova senha:</LabelInput>
          <InputLogin
            type='text'
            secureTextEntry={true}
            placeholder='REPITA A SENHA'
          />
        </FormLogin>
        <LoginAction>
          <Loader />
        </LoginAction>
        <Footer>
          <LoginButton onPress={navigateToMain}> SALVAR </LoginButton>
        </Footer>
      </Container>
    )
  } else {
    return <Connection />
  }
}
