import { StyledNavLink } from './Navigation.styled';
import telephoneBook from '../../images/telephoneBook.jpg';

export const Navigation = () => {
  return (
    <nav>
      <StyledNavLink to="/">
        {' '}
        <img src={telephoneBook} alt="telephone-book" width="40" />
        Home
      </StyledNavLink>
    </nav>
  );
};
