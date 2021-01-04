import React, { useState, useContext } from 'react'

import { Image, StatusBar, Text } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import { IconEye, IconEyeSlash, IconUser } from '../../assets/icons'

import logoPrepApp from '../../assets/logo-PrepApp-Final_01.png'
import logoConn from '../../assets/semconexao.png'
import Loader from '../../components/Loader'
import Connection from './connectionStatus'
import { useNetInfo } from '@react-native-community/netinfo'
import { ClientContext, useMutation } from 'graphql-hooks'

import {
  Container,
  Logo,
  FormLogin,
  InputLogin,
  LoginAction,
  LoginButton,
  RecuperarSenha,
  Error,
  Footer,
  Termos,
  ActionButtons,
  ImagemConexao,
  TermosBody,
  TituloConnexao,
  TextoConnexao
} from './styles'

const Login = ({ navigation }) => {
  const netInfo = useNetInfo() //verifica se há conexão com a internet
  const [loader, setLoader] = useState(false)
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')
  const [errors, setErrors] = useState('')

  const LOGIN_MUTATION = `mutation Auth {
    auth(
      user: "${user}" , 
      password: "${password}"
    )
  }`

  const client = useContext(ClientContext)
  const [loginUserMutation] = useMutation(LOGIN_MUTATION)

  getTokenStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('@AUTH_TOKEN')
      client.setHeader('Authorization', `Bearer ${value}`)
      const token = value
      //token === undefined ? alert('token vazio') : navigation.navigate('Main')
    } catch (e) {
      setErrors('Erro ao recuperar o token, realize o login novamente')
    }
  }

  const getToken = getTokenStorage()

  const handleLogin = async e => {
    e.preventDefault()
    const { data, error } = await loginUserMutation({
      variables: { user, password }
    })
    if (error) {
      setErrors('Algo deu errado, tente novamente!')
    } else {
      const token = data.auth
      setErrors('')
      client.setHeader('Authorization', `Bearer ${token}`)
      setValue = async () => {
        try {
          await AsyncStorage.setItem('@AUTH_TOKEN', token)
        } catch (e) {}
      }
      navigation.navigate('Main')
    }
  }

  function navigateToRecuperarSenha () {
    navigation.navigate('Recuperar')
  }

  function navigateToNovaSenha () {
    navigation.navigate('NovaSenha')
  }

  function navigateToTermos () {
    navigation.navigate('Termos')
  }

  function navigateToHome () {
    navigation.navigate('Main')
  }

  if (netInfo.isConnected) {
    return (
      <Container>
        <Logo>
          <Image source={logoPrepApp} />
        </Logo>
        <FormLogin>
          <InputLogin
            value={user}
            autoCapitalize='none'
            onChangeText={text => setUser(text)}
            placeholder='LOGIN'
            leftIcon={IconUser}
          />
          <InputLogin
            value={password}
            secureTextEntry
            leftIcon={IconEye}
            placeholder='SENHA'
            onChangeText={text => setPassword(text)}
          />
          {errors.length !== 0 && <Error>{errors}</Error>}
        </FormLogin>
        <LoginAction>
          <LoginButton onPress={handleLogin}> ENTRAR </LoginButton>
          <RecuperarSenha onPress={navigateToRecuperarSenha}>
            Esqueci minha senha{' '}
          </RecuperarSenha>
          {/*<Termos onPress={navigateToNovaSenha}> NOVA SENHA </Termos>*/}
          {/*<Termos onPress={navigateToConexao} > SEM CONEXÃO </Termos>*/}
          {/*<Termos onPress={navigateToHome}> Acesso sem login </Termos>*/}
        </LoginAction>
        <Footer>
          <Termos onPress={navigateToTermos}>
            Termos de uso e Políticas de privacidade{' '}
          </Termos>
        </Footer>
      </Container>
    )
  } else {
    return <Connection />
  }
}

export default Login
