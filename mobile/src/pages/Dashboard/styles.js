import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const DateSelection = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;

export const DateTitle = styled.Text`
  font-size: 24px;
  color: #eee;
  font-weight: bold;
  margin: 0 15px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndication: false,
  contentContainerStyle: { padding: 25 },
})``;
