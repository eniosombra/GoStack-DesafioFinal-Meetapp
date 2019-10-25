import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';
import IconPage from 'react-native-vector-icons/FontAwesome';
import { withNavigationFocus } from 'react-navigation';

import api from '~/services/api';

import Background from '~/components/Background';
import Header from '~/components/Header';
import Meetup from '~/components/Meetup';
import Loading from '~/components/Loading';
import Message from '~/components/Message';

import { Container, List } from './styles';

function Subscription({ isFocused }) {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadSubscription() {
    setLoading(true);
    const response = await api.get('subscriptions');

    setSubscriptions(response.data);
    setLoading(false);
  }

  useEffect(() => {
    if (isFocused) {
      loadSubscription();
    }
  }, [isFocused]);

  async function handleCancel(id) {
    setLoading(true);
    await api.delete(`subscriptions/${id}`);
    setLoading(false);
    loadSubscription();

    Alert.alert('Inscrição cancelada com sucesso!');
  }

  return (
    <Background>
      <Container>
        <Header />

        {loading && <Loading />}

        {!loading &&
          (subscriptions.length ? (
            <List
              data={subscriptions}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => (
                <Meetup
                  buttonTitle="Cancelar inscrição"
                  buttonAction={() => handleCancel(item.id)}
                  data={item.Meetup}
                />
              )}
            />
          ) : (
            <Message>
              {`Você não tem nenhuma inscrição. \n\nAcesse a guia Meetups e inscreva-se nos que pretende participar.`}
            </Message>
          ))}
      </Container>
    </Background>
  );
}

Subscription.navigationOptions = {
  tabBarLabel: 'Inscrições',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => (
    <IconPage name="tag" size={25} color={tintColor} />
  ),
};

export default withNavigationFocus(Subscription);

Subscription.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};
