import { TextField } from '@mui/material';
import styled from 'styled-components';

export const StyledRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  & .Input {
    width: 400px;
    background: #fbfbfb;
  }

  & .SubmitBtn {
    margin-top: 40px;
    width: 180px;
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 18px;
    background: #3d6cb9;
    border: 2px solid transparent;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  & .SubmitBtn:hover {
    color: #3d6cb9;
    background: #fbfbfb;
    border: 2px solid #3d6cb9;
    scale: 1.01;
  }

  & div {
    position: relative;
  }
`;

export const StyledInputPassword = styled(TextField)`
  position: relative;
`;

export const StyledVisibilityBtn = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  background: transparent;
  border: none;
`;
