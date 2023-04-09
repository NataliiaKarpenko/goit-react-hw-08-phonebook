import styled from 'styled-components';

export const FormInputStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  & .FormInputBtn {
    margin-top: 40px;
    width: 180px;
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 18px;
    background: #3d6cb9;
    border: 2px solid transparent;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  & .FormInputBtn:hover {
    color: #3d6cb9;
    background: #fbfbfb;
    border: 2px solid #3d6cb9;
    scale: 1.01;
  }
`;

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  font-size: 20px;
  font-weight: 500;
  color: #22559c;

  &:nth-child(1) {
    margin-bottom: 25px;
  }

  &:nth-child(2) {
    margin-bottom: 45px;
  }

  & input {
    width: 350px;
    height: 40px;
    padding-left: 10px;

    border: 2px solid #3d6cb9;
    border-radius: 10px;

    font-size: 20px;
    color: #5847ad;
  }

  & input:focus,
  & input:hover {
    outline: 1px solid #0fc9e7;
  }

  & input::placeholder {
    font-size: 15px;
    color: #2772db;
    opacity: 0.8;
  }
`;
