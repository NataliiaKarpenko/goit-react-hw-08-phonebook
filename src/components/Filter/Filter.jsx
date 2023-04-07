import { useDispatch } from 'react-redux';

import { FilterStyled } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FilterStyled>
      Find contacts by name
      <input
        type="text"
        placeholder="Enter a name"
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </FilterStyled>
  );
};
