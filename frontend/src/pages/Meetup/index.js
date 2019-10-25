import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';
import ImageInput from '~/components/ImageInput';
import DatePicker from '~/components/DatePicker';
import api from '~/services/api';
import history from '~/services/history';

const schema = Yup.object().shape({
  file_id: Yup.string().required('O campo IMAGEM é obrigatório'),
  title: Yup.string().required('O campo TÍTULO é obrigatório'),
  description: Yup.string().required('O campo DESCRIÇÃO é obrigatório'),
  date: Yup.string().required('O campo DATA é obrigatório'),
  location: Yup.string().required('O campo LOCALIZAÇÃO é obrigatório'),
  id: Yup.string(),
});

export default function Meetup({ location }) {
  const { dataset } = location.state;

  async function handleCreate(data) {
    try {
      await api.post('meetups', data);
      toast.success('Dados incluídos com sucesso!');
      history.push('/dashboard');
    } catch (err) {
      toast.error(err.response.data.error);
    }
  }

  async function handleUpdate(data) {
    try {
      await api.put(`meetups/${data.id}`, data);
      toast.success('Dados atualizados com sucesso!');
      history.push('/dashboard');
    } catch (err) {
      toast.error(err.response.data.error);
    }
  }

  return (
    <Container>
      <header />

      {dataset ? (
        <Form initialData={dataset} onSubmit={handleUpdate} schema={schema}>
          <Input name="id" hidden />
          <ImageInput name="banner" />
          <Input name="title" placeholder="Título do Meetup" />
          <Input name="description" placeholder="Descrição completa" />
          <DatePicker name="date" placeholder="Data e Hora" />
          <Input name="location" placeholder="Localização" />
          <section>
            <button type="submit">Salvar meetup</button>
          </section>
        </Form>
      ) : (
        <Form onSubmit={handleCreate} schema={schema}>
          <ImageInput name="file_id" />
          <Input name="title" placeholder="Título do Meetup" />
          <Input name="description" placeholder="Descrição completa" />
          <DatePicker name="date" placeholder="Data e Hora" />
          <Input name="location" placeholder="Localização" />
          <section>
            <button type="submit">Salvar meetup</button>
          </section>
        </Form>
      )}
    </Container>
  );
}

Meetup.propTypes = {
  location: PropTypes.oneOfType([PropTypes.object]),
};

Meetup.defaultProps = {
  location: {},
};
