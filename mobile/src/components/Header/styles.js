import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

export const Container = styled.SafeAreaView.attrs({
  elevation: 2,
})`
  background: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
  padding: 18px 0;
`;

export const Logo = styled.Image`
  width: 27px;
  height: 27px;
`;
