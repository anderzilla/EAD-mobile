import React from 'react'
import { View, Text, Button } from 'react-native'

import {
  PerfilUsuario,
  PerfilFoto,
  Titulo,
  PerfilDados,
  InputDados,
  LabelDados
} from './styles'
import PerfilAvatar from '../../assets/Perfil.png'

export default function Perfil ({ navigation }) {
  return (
    <>
      <PerfilUsuario>
        <PerfilFoto source={PerfilAvatar} resizeMode='contain' />
        <Titulo>PERFIL</Titulo>
      </PerfilUsuario>
      <PerfilDados>
        <LabelDados>Nome</LabelDados>
        <InputDados value={'Nome do Aluno'} editable={false} />
        <LabelDados>Sexo</LabelDados>
        <InputDados value={'Masculino'} editable={false} />
        <LabelDados>E-mail</LabelDados>
        <InputDados value={'email@email.com.br'} editable={false} />
        <LabelDados>Escola</LabelDados>
        <InputDados value={'ESCOLA EDITORA TESTE'} editable={false} />
      </PerfilDados>
    </>
  )
}
