import { Circles } from 'react-loader-spinner';

import { StyledLoder } from './Loader.styled';

export const Loader = () => {
  return (
    <StyledLoder>
      <Circles
        height="60"
        width="60"
        color="#3d6cb9"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </StyledLoder>
  );
};
