import React from 'react';
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import {ReactComponent as MyPhotos} from '../../Assets/feed.svg'
import {ReactComponent as Stats} from '../../Assets/estatisticas.svg'
import {ReactComponent as AddPhoto} from '../../Assets/adicionar.svg'
import {ReactComponent as Logout} from '../../Assets/sair.svg'
import styles from './UserHeaderNav.module.css'
import useMedia from '../../Hooks/useMedia';

const UserHeaderNav = () => {
  const mobile = useMedia('(max-width: 40rem)')
  const { userLogout } = React.useContext(UserContext);
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname])

  return (
    <>
      {mobile && (
        <button 
        className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
        aria-label="Menu" 
        onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
        )}
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
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
    </>
  )
}

export default UserHeaderNav
