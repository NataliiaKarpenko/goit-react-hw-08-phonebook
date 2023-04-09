import { useDispatch } from 'react-redux';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/joy';

import { logOut } from 'redux/operations';
import { useAuth } from '../../hooks/useAuth';
import { StyledUserMenu } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <StyledUserMenu>
      <div>
        <AccountCircleIcon color="primary" sx={{ fontSize: 40 }} />
        <p>{user}</p>
      </div>

      <Button
        type="button"
        className="LogoutBtn"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </StyledUserMenu>
  );
};
