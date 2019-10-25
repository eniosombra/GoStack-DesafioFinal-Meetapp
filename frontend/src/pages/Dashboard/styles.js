import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 960px;
  margin: 25px auto;

  display: flex;
  flex-direction: column;

  ul {
    display: grid;
    grid-gap: 15px;
    margin-top: 30px;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      color: #fff;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 130px;
      height: 35px;

      background: #f64c75;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 15px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#f64c75')};
      }

      span {
        margin-left: 7px;
      }
    }
  }
`;

export const Meetup = styled.li`
  padding: 10px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    display: flex;
    align-items: center;
    color: #999;

    button {
      border: 0;
      background: none;
      margin-left: 10px;
    }
  }
`;
