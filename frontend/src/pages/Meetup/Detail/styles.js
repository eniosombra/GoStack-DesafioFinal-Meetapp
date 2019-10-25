import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 960px;
  margin: 20px auto;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h2 {
      color: #fff;
    }

    aside {
      display: flex;
      align-items: center;

      > div {
        button {
          background: #0078d4;
          &:hover {
            background: ${darken(0.07, '#0078d4')};
          }
        }
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 15px;
      width: 110px;
      height: 35px;
      background: #f64c75;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;

      transition: background 0.2s;

      &:hover {
        background: ${darken(0.07, '#f64c75')};
      }

      span {
        margin-left: 7px;
      }
    }
  }

  p {
    color: #fff;
    margin-bottom: 20px;

    line-height: 22px;
  }

  img {
    width: 100%;
    height: 100%;
    max-height: 420px;
    border-radius: 4px;
    margin-bottom: 8px;
  }

  footer {
    display: flex;

    span {
      margin-left: 7px;
    }

    p {
      display: flex;
      margin-right: 50px;
      align-items: center;
      color: #999;
    }
  }
`;
