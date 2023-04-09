import styled from 'styled-components';

export const StyledUserMenu = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  & div {
    text-align: center;
  }

  & p {
    font-size: 18px;
    font-weight: 600;
    color: #22559c;
  }

  & .LogoutBtn {
    width: 80px;
    font-size: 15px;
    background: #3d6cb9;
    border: 2px solid transparent;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  & .LogoutBtn:hover {
    color: #3d6cb9;
    background-color: #fbfbfb;
    border: 2px solid #3d6cb9;
    scale: 1.01;
  }
`;
