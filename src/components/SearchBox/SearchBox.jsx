import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import {
  selectNameFilter,
  selectNumberFilter,
} from "../../redux/filters/selectors";
import { changeFilter, changeFilterNumber } from "../../redux/filters/slice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);
  const numberFilter = useSelector(selectNumberFilter);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  const handleChangeNumber = (event) => {
    dispatch(changeFilterNumber(event.target.value));
  };

  return (
    <div className={css.container}>
      <p className={css.text}>Find contacts by name</p>
      <input value={nameFilter} onChange={handleChange} type="text"></input>
      <p className={css.text}>Find contacts by number</p>
      <input
        value={numberFilter}
        onChange={handleChangeNumber}
        type="text"
      ></input>
    </div>
  );
}
