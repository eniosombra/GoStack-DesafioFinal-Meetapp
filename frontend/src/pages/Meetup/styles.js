import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 960px;
  margin: 10px auto;

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
      margin-top: 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    > span {
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

    section {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      button {
        width: 150px;
        height: 35px;
        background: #f64c75;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        margin-top: 10px;

        transition: background 0.2s;

        &:hover {
          background: ${darken(0.05, '#f64c75')};
        }
      }
    }
  }
`;
