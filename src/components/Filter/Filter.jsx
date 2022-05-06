import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/actions';
import s from './Filter.module.css';

function Filter() {
  const dispatch = useDispatch();
  const setFilter = e => dispatch(changeFilter(e.currentTarget.value));

  return (
    <label className={s.label}>
      Find contacts by name
      <input type="text" name="filter" onChange={setFilter} />
    </label>
  );
}

export default Filter;