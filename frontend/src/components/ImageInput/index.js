import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';
import { MdAddAPhoto } from 'react-icons/md';

import api from '~/services/api';

import { Container } from './styles';

export default function ImageInput({ name, ...rest }) {
  const ref = useRef();
  const { defaultValue, registerField, error } = useField(name);

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'file_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref.current]); // eslint-disable-line

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor={name}>
        {preview ? (
          <img src={preview} alt="imagem" />
        ) : (
          <div>
            <MdAddAPhoto size={45} />
            <p>Selecionar imagem</p>
          </div>
        )}

        <input
          type="file"
          id={name}
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
          {...rest}
        />
      </label>

      {error && <span>{error}</span>}
    </Container>
  );
}

ImageInput.propTypes = {
  name: PropTypes.string.isRequired,
};
