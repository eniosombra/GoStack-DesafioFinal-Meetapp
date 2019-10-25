import React from 'react';
import PropTypes from 'prop-types';

import { MessageBox, MessageText } from './styles';

export default function Message({ children }) {
  return (
    <MessageBox>
      <MessageText>{children}</MessageText>
    </MessageBox>
  );
}

Message.propTypes = {
  children: PropTypes.string.isRequired,
};
