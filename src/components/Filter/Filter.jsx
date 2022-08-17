import { useSelector, useDispatch } from 'react-redux';
import { filterItems, getFilterWord } from '../../redux/contactsSlice';
import { Label } from 'components/ui/Label/Label';
import { FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterWord);

  return (
    <Label>
      Find contacts by name
      <FilterInput
        type="text"
        name="name"
        onChange={e => dispatch(filterItems(e.currentTarget.value))}
        value={filter}
      />
    </Label>
  );
};
