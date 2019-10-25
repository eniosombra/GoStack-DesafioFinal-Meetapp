import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Banner,
  BoxTitle,
  Info,
  Text,
  SubmitButton,
} from './styles';

export default function Meetup({ data, buttonAction, buttonTitle }) {
  const dateFormatted = useMemo(
    () =>
      format(parseISO(data.date), "dd 'de' MMMM, 'às' HH'h'mm", {
        locale: pt,
      }),
    [data.date]
  );

  return (
    <Container>
      <Banner
        source={{
          uri: data.banner
            ? data.banner.url.replace('localhost', '192.168.0.107')
            : `http://api.adorable.io/avatar/50/${data.id}.png`,
        }}
      />

      <BoxTitle>{data.title}</BoxTitle>

      <Info>
        <Icon name="event" color="#999" size={20} />
        <Text>{dateFormatted}</Text>
      </Info>

      <Info>
        <Icon name="location-on" color="#999" size={20} />
        <Text>{data.location}</Text>
      </Info>

      <Info>
        <Icon name="person" color="#999" size={20} />
        <Text>Organizador: {data.User.name}</Text>
      </Info>

      <SubmitButton onPress={() => buttonAction()}>{buttonTitle}</SubmitButton>
    </Container>
  );
}

Meetup.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  buttonAction: PropTypes.func,
  buttonTitle: PropTypes.string.isRequired,
};

Meetup.defaultProps = {
  data: {},
  buttonAction: () => {},
};
