import React, { useState, useContext } from 'react'
import { View, Text, Button, Image } from 'react-native'
import * as Progress from 'react-native-progress'
import styled from 'styled-components/native'
import Loader from '../../components/Loader'
import AsyncStorage from '@react-native-community/async-storage'
import { ClientContext, useQuery } from 'graphql-hooks'

import {
  Container,
  PerfilFoto,
  PerfilHome,
  PerfilMoldura,
  NomeAluno,
  InfoText,
  HomeProgress,
  ProgressButton,
  HomeDisciplinas,
  ProgressBarInfo,
  DiaSemana,
  TempoDecorrido
} from './styles'

import PerfilAvatar from '../../assets/Perfil.png'
import Moldura from '../../assets/moldura.png'
import { ActionButtons } from '../Login/styles'

const Inicio = ({ navigation }) => {
  const client = useContext(ClientContext)
  const [errors, setErrors] = useState('')
  const [usuario, setUsuario] = useState('')
  const [userId, setUserId] = useState('')

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

  const queryRN = `
  query RankingNational {
    ranking {
      list(type: NATIONAL) {
        me {
          name
          photo
          position
          score
        }
      }
    } 
  }`

  const { loading, error, data } = useQuery(queryRN)
  const ranking = data
  //const list = ranking['list']
  //setUsuario(dataRN.data.ranking.users)
  //alert(JSON.stringify(data))

  return (
    <>
      <PerfilHome>
        <PerfilMoldura source={Moldura} />
        <PerfilFoto source={PerfilAvatar} resizeMode='contain' />
        <NomeAluno>{!usuario ? 'Nome do Aluno' : usuario}</NomeAluno>
        <InfoText>50xp: {JSON.stringify(ranking)}</InfoText>
      </PerfilHome>
      <HomeProgress>
        <ProgressButton> COMEÇAR </ProgressButton>
        <Progress.Bar
          progress={0.3}
          width={330}
          color={'#FB8D60'}
          unfilledColor={'#D2D9DD'}
          borderWidth={0}
          borderRadius={0}
          style={{ marginVertical: 10 }}
        />
        <ProgressBarInfo>
          <DiaSemana>Terça-feira</DiaSemana>
          <TempoDecorrido>00:00:00/03:00:00</TempoDecorrido>
        </ProgressBarInfo>
      </HomeProgress>
      <HomeDisciplinas>
        <InfoText>
          Que tal testar seus conhecimentos? Escolha uma disciplina para
          iniciar.
        </InfoText>
        <InfoText></InfoText>
      </HomeDisciplinas>
    </>
  )
}

export default Inicio
