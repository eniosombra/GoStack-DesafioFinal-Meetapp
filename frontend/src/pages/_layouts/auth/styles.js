import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-180deg, #22202c, #402845);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    input {
      background: rgba(0, 0, 0, 0.3);
      border: 0;
      border-radius: 4px;
      height: 40px;
      padding: 0 15px;
      color: #fff;
      margin-top: 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      align-self: flex-start;
      font-weight: bold;
      color: #212529;
      background-color: #ffc107;
      border-radius: 10px;
      font-size: 11px;
      padding-top: 2px;
      padding-bottom: 2px;
      padding-inline-start: 10px;
      padding-inline-end: 10px;
    }

    button {
      margin-top: 20px;
      height: 40px;
      background: #f64c75;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#f64c75')};
      }
    }
  }

  a {
    color: #999;
    margin-top: 15px;
    font-size: 16px;
    font-weight: bold;

    opacity: 0.8;

    &:hover {
      opacity: 2;
    }
  }
`;
