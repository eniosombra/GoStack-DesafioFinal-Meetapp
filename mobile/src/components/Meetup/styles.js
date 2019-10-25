import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  border-radius: 4px;
  background: #fff;
  margin-bottom: 20px;
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BoxTitle = styled.Text`
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 7px;
  font-weight: bold;
  font-size: 20px;
  color: #333;
`;

export const Info = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 15px;
`;

export const Text = styled.Text`
  color: #777;
  font-size: 15px;
  margin-top: 4px;
  margin-left: 5px;
  padding: 2px;
`;

export const SubmitButton = styled(Button)`
  margin: 15px;
  background: #f64c75;
`;

export const Banner = styled.Image`
  width: 100%;
  height: 190px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;
