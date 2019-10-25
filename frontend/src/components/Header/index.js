import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';
import { Container, Content, Profile } from './styles';

import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="meetapp" />
          </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>

            <Link to="/profile">
              {profile.avatar ? (
                <img src={profile.avatar.url} alt={profile.name} />
              ) : (
                <img
                  src="https://api.adorable.io/avatars/50/abott@adorable.png"
                  alt={profile.name}
                />
              )}
            </Link>

            <button type="submit" onClick={handleSignOut}>
              Sair
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
