import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.3);
`;

export const Content = styled.div`
  height: 64px;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      width: 28px;
      height: 28px;
    }

    a {
      font-weight: bold;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;
    font-size: 13px;

    strong {
      display: block;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  button {
    border: none;
    color: #fff;
    font-weight: bold;
    width: 60px;
    height: 35px;
    background: #f64c75;
    margin-left: 10px;
    border-radius: 4px;

    &:hover {
      background: ${darken(0.05, '#f64c75')};
    }
  }
`;
