import React from "react";
import { View, Image, Text } from "react-native";
import logoConn from "../../assets/semconexao.png";
import Loader from "../../components/Loader";

import {
  Container,
  LoginButton,
  ActionButtons,
  ImagemConexao,
  TermosBody,
  TituloConnexao,
  TextoConnexao
} from "./styles";

export default function Conexao({ navigation }) {
  function navigateToMain() {
    navigation.navigate("Main");
  }
  return (
    <Container>
      <ImagemConexao>
        <Image source={logoConn} />
      </ImagemConexao>
      <TermosBody>
        <TituloConnexao>Ops, não foi possível carregar :(</TituloConnexao>
        <TextoConnexao>
          Parece que existe um problema com sua conexão à internet
        </TextoConnexao>
        <ActionButtons>
        <Loader /> 
            <Text>Buscando conexão...</Text> 
        </ActionButtons>
      </TermosBody>
    </Container>
  );
}
