import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';
import { format, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';
import Meetup from '~/components/Meetup';
import Header from '~/components/Header';
import Loading from '~/components/Loading';
import Message from '~/components/Message';

import { Container, DateSelection, DateTitle, List } from './styles';

function Dashboard({ isFocused }) {
  const [meetups, setMeetups] = useState([]);
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(true);

  const dateFormmatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  useEffect(() => {
    if (isFocused) {
      setLoading(true);
      async function loadMeetups() {
        const response = await api.get('meetups', {
          params: { date },
        });

        setMeetups(response.data);
        setLoading(false);
      }

      loadMeetups();
    }
  }, [date, isFocused]);

  async function handleSubscription(id, title) {
    try {
      await api.post(`meetups/${id}/subscriptions`);

      Alert.alert(
        'Inscrição realizada com sucesso!',
        `Parabéns! você acaba de realizar sua inscrição no meetup: \n\n${title}.`
      );
    } catch (error) {
      Alert.alert(
        `Erro`,
        `Ocorreu um erro ao tentar realizar sua inscrição: \n\n${error.response.data.error}.`
      );
    }
  }

  return (
    <Background>
      <Container>
        <Header />

        <DateSelection>
          <Icon
            name="chevron-left"
            size={38}
            color="#FFF"
            onPress={handlePrevDay}
          />
          <DateTitle>{dateFormmatted}</DateTitle>
          <Icon
            name="chevron-right"
            size={38}
            color="#FFF"
            onPress={handleNextDay}
          />
        </DateSelection>

        {loading && <Loading />}

        {!loading &&
          (meetups.length ? (
            <List
              data={meetups}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => (
                <Meetup
                  buttonTitle="Realizar inscrição"
                  buttonAction={() => handleSubscription(item.id, item.title)}
                  data={item}
                />
              )}
            />
          ) : (
            <Message>
              Não existe nenhum Meetup para data {dateFormmatted}. Por favor,
              escolha outra data.
            </Message>
          ))}
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={25} color={tintColor} />
  ),
};

export default withNavigationFocus(Dashboard);

Dashboard.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};
