import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 15px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.3);
      border: 0;
      border-radius: 4px;
      height: 40px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

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

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    > div {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      button {
        height: 40px;
        width: 150px;
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
  }
`;
