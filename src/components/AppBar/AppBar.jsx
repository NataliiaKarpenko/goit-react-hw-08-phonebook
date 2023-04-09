import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';
import { StyledAppBar } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <StyledAppBar>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </StyledAppBar>
  );
};
