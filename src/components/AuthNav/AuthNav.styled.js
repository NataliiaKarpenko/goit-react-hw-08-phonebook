import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  font-size: 25px;
  font-weight: 600;
  color: #22559c;
  text-decoration: none;

  &:first-child {
    margin-right: 30px;
  }

  &.active {
    color: #e67a7a;
  }
`;
