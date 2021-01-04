import styled from 'styled-components/native'
import { Platform } from 'react-native'

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: stretch;
  padding: 40px 20px 20px 20px;
  background-color: #f5f4f5;
  overflow: scroll;
`

export const Logo = styled.View`
  height: 74px;
  padding-top: 25%;
  align-items: center;
`

export const FormLogin = styled.View`
  height: 240px;
  padding-top: 25%;
  align-items: center;
`

export const InputLogin = styled.TextInput`
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
export const LabelInput = styled.Text`
  font-size: 16px;
  color: #78909c;
`

export const LoginAction = styled.View`
  height: 150px;
  padding-top: 10px;
  align-items: center;
`

export const LoginButton = styled.Text`
  height: 40px;
  width: 300px;
  border-color: #fb8d60;
  border-radius: 20px;
  border-style: solid;
  border-width: 2px;
  padding: 10px;
  margin: 10px;
  text-align: center;
  color: #fb8d60;
  font-weight: bold;
`

export const RecuperarSenha = styled.Text`
  height: 40px;
  width: 300px;
  padding: 10px;
  margin: 10px;
  text-align: center;
  text-decoration-line: underline;
  color: #78909c;
`
export const Error = styled.Text`
  color: #e66a68;
`

export const Footer = styled.View`
  position: relative;
  height: 60px;
  align-items: center;
  top: 30px;
  bottom: 20px;
  left: 0px;
  right: 0px;
  width: 100%;
  text-align: center;
  flex: 1;
  flex-direction: column;
  align-items: center;
`

export const Termos = styled.Text`
  height: 60px;
  width: 100%;
  text-align: center;
  text-decoration-line: underline;
  color: #78909c;
  width: 160px;
`

export const InfoRecuperar = styled.Text`
  width: 300px;
  margin: 0px 20px;
  text-align: center;
  color: #78909c;
  font-size: 16px;
`

export const TermosImage = styled.View`
  height: 108px;
  padding-top: 74px;
  align-items: center;
`

export const TermosBody = styled.ScrollView`
  width: 100%;
  margin-top: 140px;
  height: 600px;
`

export const Titulo = styled.Text`
  font-size: 18px;
  color: #78909c;
  text-align: center;
  padding: 20px;
  font-weight: bold;
`

export const TextLongo = styled.Text`
  text-align: justify;
  color: #78909c;
  font-size: 14px;
  overflow: scroll;
`

export const BackButton = styled.Text`
  position: absolute;
  top: 40px;
  left: 20px;
  width: 40px;
  height: 50px;
`
export const MenuButton = styled.TouchableOpacity`
  margin-top: 40px;
  margin-left: 10px;
  width: 40px;
  height: 50px;
`
export const MenuIcon = styled.Image`
  width: 40px;
  height: 50px;
`
export const TituloConnexao = styled.Text`
  font-size: 18px;
  color: #78909c;
  text-align: center;
  padding: 20px;
  margin-top: 56px;
`
export const TextoConnexao = styled.Text`
  font-size: 18px;
  color: #78909c;
  text-align: center;
  padding: 20px;
`
export const ImagemConexao = styled.View`
  height: 108px;
  padding-top: 174px;
  align-items: center;
`
export const ActionButtons = styled.View`
  height: 60px;
  align-items: center;
  width: 300px;
  margin: 10px 35px;
  text-align: center;
`
