import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  MdEdit,
  MdDeleteForever,
  MdRoom,
  MdInsertInvitation,
} from 'react-icons/md';

import { Container } from './styles';

import api from '~/services/api';
import history from '~/services/history';

export default function Detail({ location }) {
  const { dataset } = location.state;

  const { url } = dataset.banner;

  async function handleDelete() {
    try {
      await api.delete(`meetups/${dataset.id}`);
      toast.success('Dados cancelados com sucesso!');
      history.push('/dashboard');
    } catch (err) {
      toast.error(err.response.data.error);
    }
  }

  return (
    <Container>
      <header>
        <h2>{dataset.title}</h2>

        <aside>
          <div>
            <Link
              to={{
                pathname: '/meetup/edit',
                state: {
                  dataset,
                },
              }}
            >
              <button type="button">
                <MdEdit size={20} />
                <span>Editar</span>
              </button>
            </Link>
          </div>

          <button type="button" background="#999" onClick={handleDelete}>
            <MdDeleteForever size={20} />
            <span>Cancelar</span>
          </button>
        </aside>
      </header>

      <img src={url} alt="meetup" />

      <p>{dataset.description}</p>

      <footer>
        <p>
          <MdInsertInvitation size={20} />
          <span>{dataset.dateFormatted}</span>
        </p>
        <p>
          <MdRoom size={20} />
          <span>{dataset.location}</span>
        </p>
      </footer>
    </Container>
  );
}

Detail.propTypes = {
  location: PropTypes.oneOfType([PropTypes.object]),
};

Detail.defaultProps = {
  location: {},
};
