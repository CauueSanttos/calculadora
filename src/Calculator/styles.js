import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex: 1;
`;

export const Visor = styled.View`
  background-color: #01911e;
  width: 100%;
  height: 150px;
  padding: 20px;
  padding-top: ${Constants.statusBarHeight + 50}px;
`

export const VisorText = styled.Text`
  color: #fff;
  font-size: 50px;
`;

export const Area = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  width: 25%;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.TextInput`
  font-size: 25px;
`;

export const TextButtonAction = styled.TextInput`
  font-size: 25px;
  color: #01911e;
`;