import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
`;

export const ActivityIndicatorWrapper = styled.ActivityIndicator.attrs({
  color: ['#f64c75'],
  size: 50,
})`
  background: #ffffff;
  height: 80;
  width: 80;
  border-radius: 10;
  margin-top: 50px;
`;
