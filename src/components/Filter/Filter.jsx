import { useDispatch } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';
import { changeFilter } from '../../redux/reducers';
import s from './Filter.module.css';

function Filter() {
  const dispatch = useDispatch();
  const setFilter = useDebouncedCallback(value => {
    dispatch(changeFilter(value));
  }, 500);

  return (
    <label className={s.label}>
      Find contacts by name
      <input type="text" name="filter" onChange={e => setFilter(e.target.value)} />
    </label>
  );
}

export default Filter;