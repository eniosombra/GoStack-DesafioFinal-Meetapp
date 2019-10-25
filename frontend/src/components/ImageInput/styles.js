import styled from 'styled-components';

export const Container = styled.div`
  align-self: stretch;
  margin-bottom: 10px;

  label {
    cursor: pointer;

    img {
      display: block;
      width: 100%;
      height: 100%;
      max-height: 335px;
      border-radius: 4px;
    }

    input {
      display: none;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      min-height: 200px;
      border-radius: 4px;
      color: #999;
      font-weight: bold;
      background: rgba(0, 0, 0, 0.3);
      font-size: 12px;

      &:hover {
        background: rgba(0, 0, 0, 0.5);
      }

      p {
        margin: 7px;
      }
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
`;
