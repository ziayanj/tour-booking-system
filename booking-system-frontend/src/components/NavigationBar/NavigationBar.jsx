import { NavLink } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/icons/logo.svg';

import './NavigationBar.scss';

const NavigationBar = () => {
  const navbarItems = [
    { name: 'Tours', path: '/tours' },
    { name: 'Add Tour', path: '/add-tour' },
    { name: 'My Tours', path: '/my-tours' },
  ]

  return (
    <div className='navbar-container'>
      <span>
        <NavLink to='/'><Logo /></NavLink>
      </span>
      <div className='navbar-items'>
        {navbarItems.map(item => (
          <span className="navbar-item" key={item.name}>
            <NavLink to={item.path}>{item.name}</NavLink>
          </span>
        ))}
      </div>
    </div>
  );
};

export default NavigationBar;
