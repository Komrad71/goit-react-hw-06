import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.filters.name);

  const handleSearch = (value) => {
    dispatch(changeFilter(value));
  };

  return (
    <input
      className={css.searchInput}
      type="text"
      value={searchValue}
      onChange={(evt) => handleSearch(evt.target.value)}
      placeholder="Find contacts by name"
    />
  );
};

export default SearchBox;
