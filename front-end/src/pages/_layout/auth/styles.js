import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      padding: 0 15px;
      height: 44px;
      margin: 0 0 10px;
      border-radius: 4px;
      color: #fff;

      &::placeholder {
        color: rgba(255, 255, 255, 0.4);
      }
    }

    span {
      color: #fb6f91;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      height: 44px;
      background: #3b9eff;
      padding: 0 15px;
      margin: 5px 0 0;
      font-weight: bold;
      font-size: 16px;
      border: 0;
      border-radius: 4px;
      color: #fff;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#3b9eff')};
      }
    }

    a {
      margin-top: 15px;
      font-size: 16px;
      color: #fff;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
