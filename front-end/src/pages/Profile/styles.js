import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

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

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
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
  }
`;
