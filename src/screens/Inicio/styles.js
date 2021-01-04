import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: stretch;
  padding: 40px 20px 50px 20px;
  background-color: #f5f4f5;
  overflow: scroll;
`
export const PerfilHome = styled.View`
  height: 200px;
  width: 100%;
  padding-top: 30px;
  align-items: center;
`
export const PerfilMoldura = styled.Image`
  position: absolute;
  height: 160px;
  width: 160px;
  padding-top: 30px;
  align-items: center;
`
export const PerfilFoto = styled.Image`
  width: 100px;
  height: 80px;
  margin: 5px;
  align-items: center;
`
export const NomeAluno = styled.Text`
  margin-top: 50px;
  font-size: 16px;
  font-weight: bold;
  color: #d186a4;
  padding: 5px;
`
export const InfoText = styled.Text`
  font-size: 14px;
  color: #90a4ad;
  text-align: center;
  width: 280px;
`
export const HomeProgress = styled.View`
  height: 100px;
  width: 100%;
  padding-top: 20px;
  align-items: center;
`
export const ProgressButton = styled.Text`
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
export const ProgressBarInfo = styled.View`
  font-size: 12px;

  width: 330px;
`
export const DiaSemana = styled.Text`
  position: absolute;
  top: -10px;
  left: 0px;
  color: #b5c2c9;
`
export const TempoDecorrido = styled.Text`
  position: absolute;
  top: -10px;
  right: 0px;
  color: #b5c2c9;
`
export const HomeDisciplinas = styled.View`
  height: 600px;
  width: 100%;
  padding-top: 30px;
  align-items: center;
`
