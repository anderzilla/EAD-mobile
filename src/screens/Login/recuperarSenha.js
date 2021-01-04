import React, { useState, useContext } from 'react'
import styled from 'styled-components/native'
import { View, Image } from 'react-native'
import logoPrepApp from '../../assets/logo-PrepApp-Final_01.png'
import Back from '../../assets/baseline-arrow_back.png'
import { ClientContext, useMutation } from 'graphql-hooks'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  Logo,
  FormLogin,
  InputLogin,
  LoginButton,
  Footer,
  InfoRecuperar,
  BackButton
} from './styles'

const Recuperar = ({ navigation }) => {
  const useNav = useNavigation()
  const [loader, setLoader] = useState(false)
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState('')
  const [status, setStatus] = useState('#78909c')

  const RECOVERY_MUTATION = `mutation ForgotPassword {
    forgotPassword(
      user: "${email}",  
      callbackUrl: "http://localhost:3000/reset-password"  
    )
  }`

  const client = useContext(ClientContext)
  const [recoveryPassMutation] = useMutation(RECOVERY_MUTATION)

  const handleRecovery = async e => {
    e.preventDefault()
    const { data, error } = await recoveryPassMutation()
    if (error) {
      setStatus('#E66A68')
      setErrors('Nenhum usuário encontrado!')
    } else {
      setStatus('#6FB372')
      setErrors('Enviado com sucesso!')
      setTimeout(() => {
        navigation.navigate('Login')
      }, 10000)
    }
  }

  function navigateToLogin () {
    useNav.goBack()
  }

  return (
    <Container>
      <BackButton>
        <Image source={Back} onPress={navigateToLogin} />
      </BackButton>
      <Logo>
        <Image source={logoPrepApp} />
      </Logo>
      <FormLogin>
        <InfoRecuperar>
          Digite seu e-mail, usuário ou CPF cadstrado. Você receberá instruções
          para criar uma nova senha:
        </InfoRecuperar>
        <InputRecovery
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder='E-MAIL, USUÁRIO OU CPF'
          style={{ borderColor: status }}
        />
        {errors.length !== 0 && (
          <ErrorRecovery style={{ color: status }}>{errors}</ErrorRecovery>
        )}
      </FormLogin>
      <View></View>
      <Footer>
        <LoginButton onPress={handleRecovery}> ENVIAR </LoginButton>
      </Footer>
    </Container>
  )
}

const InputRecovery = styled.TextInput`
  height: 40px;
  width: 300px;
  border-color: #78909c;
  border-radius: 20px;
  border-style: solid;
  border-width: 2px;
  padding: 10px;
  margin: 10px;
  text-align: center;
  color: #78909c;
  font-weight: bold;
`
const ErrorRecovery = styled.Text`
  color: #e66a68;
`

export default Recuperar
