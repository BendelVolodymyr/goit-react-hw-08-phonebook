import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLogIn } = useAuth();
  return (
    <header>
      <div>
        <nav>
          <NavLink to="/">Home</NavLink>
          {isLogIn && <NavLink to="/contacts">Contacts</NavLink>}
        </nav>
      </div>
    </header>
  );
};
