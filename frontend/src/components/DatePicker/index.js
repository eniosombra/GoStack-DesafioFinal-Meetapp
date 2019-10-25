import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { setHours, setMinutes, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { useField } from '@rocketseat/unform';

export default function DatePicker({ name, placeholder, ...rest }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(
    defaultValue && parseISO(defaultValue)
  );

  const today = new Date();
  const startTime = setHours(setMinutes(today, 0), 8);
  const endTime = setHours(setMinutes(today, 0), 20);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      <ReactDatePicker
        name={fieldName}
        ref={ref}
        selected={selected}
        onChange={date => setSelected(date)}
        locale={pt}
        showTimeSelect
        timeIntervals={60}
        minDate={today}
        minTime={startTime}
        maxTime={endTime}
        dateFormat="dd/MM/yyyy -- HH:mm"
        timeFormat="HH:mm"
        timeCaption="Hora"
        autoComplete="off"
        placeholderText={placeholder}
        {...rest}
      />
      {error && <span>{error}</span>}
    </>
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

DatePicker.defaultProps = {
  placeholder: '',
};
