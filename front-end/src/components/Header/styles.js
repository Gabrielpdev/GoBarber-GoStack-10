import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-left: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      font-weight: bold;
      color: #7159c1;
      margin-left: 10px;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 10px;
  padding-left: 20px;
  border-left: 1px solid #eee;
  align-items: center;

  div.profile {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;

      &:hover {
        color: #7159c1;
      }
    }
  }

  img {
    height: 32px;
    width: 32px;
    border-radius: 50%;
    margin-right: 10px;
  }

  div.logout {
    border-left: 1px solid #eee;
    height: 40px;
    display: flex;
    align-items: center;
  }
`;

export const Badge = styled.button`
  border: none;
  background: none;
  height: 20px;

  svg {
    margin-left: 10px;

    &:hover {
      color: #fb6f91;
    }
  }
`;
