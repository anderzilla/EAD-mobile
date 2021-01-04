import React from 'react'
import { View, Text, Button } from 'react-native'

import {
  CursoInfo,
  CursoFoto,
  CursoEscolha,
  ListaCurso,
  CursoDados,
  CursoTitulo,
  CursoInstituicao,
  CursoLike,
  CursoExcluir
} from './styles'
import CursoAvatar from '../../assets/Curso.png'

export default function Perfil ({ navigation }) {
  return (
    <>
      <CursoInfo>
        <CursoFoto source={CursoAvatar} resizeMode='contain' />
        <CursoEscolha></CursoEscolha>
      </CursoInfo>
      <ListaCurso>
        <CursoDados>
          <CursoLike />
        </CursoDados>
      </ListaCurso>
    </>
  )
}
