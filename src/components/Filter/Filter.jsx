import { useSelector, useDispatch } from 'react-redux';
import { contactSelectors, changeFilter } from '../../redux/contact';
import s from './Filter.module.css';

function Filter() {
  const dispatch = useDispatch();

  const value = useSelector(contactSelectors.getFilter);

  return (
    <label className={s.label}>
      Find contacts by name
      <input 
        type="text" 
        name="filter" 
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))} />
    </label>
  );
}

export default Filter;