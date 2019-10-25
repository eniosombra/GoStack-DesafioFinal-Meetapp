import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Form = styled.ScrollView.attrs({
  showVerticalScrollIndication: false,
  contentContainerStyle: { padding: 25 },
})`
  align-self: stretch;
  margin-top: 10px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const Separator = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.3);
  margin: 20px 0 30px;
`;

export const SubmitButton = styled(Button)`
  background: #f64c75;
  margin-top: 10px;
`;
