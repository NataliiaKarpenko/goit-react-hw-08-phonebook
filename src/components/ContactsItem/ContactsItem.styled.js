import { Grid } from '@mui/material';
import styled from 'styled-components';

export const ContactsItemStyled = styled(Grid)`
  & .Name,
  & .Number {
    height: 30px;
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 18px;
    color: #504077;
    font-weight: 500;
  }

  & span {
    font-style: italic;
  }

  & .FunctionBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
  }

  & .FunctionBtn:hover {
    scale: 1.1;
  }

  & button {
    border: none;
    background-color: transparent;
    transition: all 80s ease-in-out;
  }

  & button:hover {
    scale: 1.1;
  }
`;
