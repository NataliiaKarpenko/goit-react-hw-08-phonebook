import styled from 'styled-components';

export const StyledAppBar = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 5px;
    background: linear-gradient(
      138deg,
      rgb(32, 201, 255) 36.7%,
      rgb(0, 8, 187) 84.4%,
      rgb(255, 255, 255) 119.7%
    );
  }
`;
