import React from 'react'
import { Image, Text } from 'react-native'
import logoTermos from '../../assets/termos.png'
import Back from '../../assets/baseline-arrow_back.png'
import Loader from '../../components/Loader'
import { useQuery } from 'graphql-hooks'
import HTML from 'react-native-render-html'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  TermosImage,
  TermosBody,
  TextLongo,
  Titulo,
  BackButton
} from './styles'

export default function Termos ({ navigation }) {
  const useNav = useNavigation()

  function navigateToLogin () {
    useNav.goBack()
  }

  const queryTermos = `
  query Terms {
    terms {
      id
      title
      text
    }
  }`
  const { loading, error, data } = useQuery(queryTermos)
  if (loading) return <Loader />
  if (error) alert(JSON.stringify(error))

  return (
    <Container>
      <BackButton onPress={navigateToLogin}>
        <Image source={Back} />
      </BackButton>
      <TermosImage>
        <Image source={logoTermos} />
      </TermosImage>
      <TermosBody>
        <Titulo>{data.terms.title}</Titulo>
        <HTML html={data.terms.text} />
      </TermosBody>
    </Container>
  )
}
