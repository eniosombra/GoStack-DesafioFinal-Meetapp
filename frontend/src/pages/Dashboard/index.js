import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import api from '~/services/api';

import { Container, Meetup } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetapp() {
      const response = await api.get('organizing');

      const data = response.data.map(meetup => ({
        ...meetup,
        dateFormatted: format(
          parseISO(meetup.date),
          "d 'de' MMMM, ' às ' HH'h'mm",
          {
            locale: pt,
            timeZone: 'America/Sao_Paulo',
          }
        ),
      }));

      setMeetups(data);
    }

    loadMeetapp();
  }, []);

  return (
    <Container>
      <header>
        <h2>Meus Meetups</h2>

        <Link
          to={{
            pathname: '/meetup/new',
            state: {
              dataset: null,
            },
          }}
        >
          <button type="button">
            <MdAddCircleOutline />
            <span>Novo meetup</span>
          </button>
        </Link>
      </header>
      <ul>
        {meetups.map(meetup => (
          <Meetup key={meetup.id}>
            <strong>{meetup.title}</strong>
            <span>
              {meetup.dateFormatted}

              <Link
                to={{
                  pathname: '/meetup/detail',
                  state: {
                    dataset: meetup,
                  },
                }}
              >
                <button type="button">
                  <MdChevronRight size={30} color="#FFF" />
                </button>
              </Link>
            </span>
          </Meetup>
        ))}
      </ul>
    </Container>
  );
}
