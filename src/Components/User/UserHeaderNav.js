import React from 'react';
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import {ReactComponent as MyPhotos} from '../../Assets/feed.svg'
import {ReactComponent as Stats} from '../../Assets/estatisticas.svg'
import {ReactComponent as AddPhoto} from '../../Assets/adicionar.svg'
import {ReactComponent as Logout} from '../../Assets/sair.svg'
import styles from './UserHeaderNav.module.css'

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end activeClassName={styles.active}>
        <MyPhotos />
        {mobile && `Minhas Fotos`}
      </NavLink>
      <NavLink to="/conta/estatisticas" activeClassName={styles.active}>
        <Stats />
        {mobile  && `Estatísticas`}
      </NavLink>
      <NavLink to="/conta/postar" activeClassName={styles.active}>
        <AddPhoto />
        {mobile && `Adicionar Foto`}
      </NavLink>
      <button onClick={userLogout}>
        <Logout />
        {mobile && `Sair`}
      </button>
    </nav>
  )
}

export default UserHeaderNav
