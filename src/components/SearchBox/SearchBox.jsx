import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import s from './SearchBox.module.css';

function SearchBox() {
  const dispatch = useDispatch();

  const handleSearchUser = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <form className={s.container}>
      <label>
        <span className={s.span}>Знайти контакт за іменем</span>
      </label>
      <input
        className={s.input}
        type="text"
        onChange={handleSearchUser}
        placeholder="Введіть ім'я"
      />
    </form>
  );
}

export default SearchBox;