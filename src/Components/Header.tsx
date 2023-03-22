import logo from '../assets/Logo.png'
import { NavLink } from 'react-router-dom'

import './Header.css'

export function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="logo" />

        <div>
          <NavLink to='/'>
            <button>Home</button>
          </NavLink>
          <NavLink to='/Projects'>
            <button>Projetos</button>
          </NavLink>
          <NavLink to='Contacts'>
            <button>Contatos</button>
          </NavLink>
        </div>


      </nav>
    </header>
  );
}
