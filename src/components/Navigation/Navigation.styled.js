import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 25px;
  font-weight: 600;
  color: #22559c;
  text-decoration: none;

  &.active {
    color: #e67a7a;
  }
`;
