import { Button } from '@mui/joy';
import styled from 'styled-components';

export const StyledEditBtn = styled(Button)`

    width: 140px;
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 15px;
    background: #3d6cb9;
    border: 2px solid transparent;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .EditBtn&:hover {
    color: #3d6cb9;
    background: #fbfbfb;
    border: 2px solid #3d6cb9;
    scale: 1.01;
  }`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
