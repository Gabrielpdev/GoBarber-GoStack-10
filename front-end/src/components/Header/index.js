import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdExitToApp } from 'react-icons/md';

import { signOut } from '~/store/modules/auth/actions';
import Notifications from '~/components/Notifications';

import logo from '~/assets/logo-purple.svg';
import { Container, Content, Badge, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="" />
          <Link to="/dashboard">DASCHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div className="profile">
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>

            <img
              src={
                profile.avatar === null
                  ? 'https://api.adorable.io/avatars/50/abott@adorable.png'
                  : profile.avatar.url
              }
              alt={profile.name}
            />
            <div className="logout">
              <Badge onClick={handleSignOut}>
                <MdExitToApp size={20} />
              </Badge>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
