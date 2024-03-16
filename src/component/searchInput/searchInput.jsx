import React from 'react';
import st from './searchInput.module.scss';
import { arrayCountry } from '../arrayCountry';
import { debounce } from 'lodash';

const SearchInput = () => {
  const [value, setValue] = React.useState('');
  const [searchValue, setSearchValue] = React.useState(['']);
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const updateSearchValue = React.useCallback(
    debounce((value) => {
      if (value.length != 0 && value.length > 1) {
        let a = arrayCountry.filter((obj) =>
          Object.values(obj).join(',').toLocaleLowerCase().includes(value.toLocaleLowerCase()),
        );
        setSearchValue(a);
        if (a.length != 0) {
          setSelectedItem(a[0].capital);
        }
      } else {
        setSearchValue(['']);
      }
      if (searchValue != ['']) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }, 700),
    [],
  );
  const onChangeInput = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    updateSearchValue(inputValue);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.popUp')) {
      setVisible(false); // Закрываем попап, если клик был сделан вне его
    }
  };

  const selectedCity = (item) => {
    if (visible && searchValue.length > 0) {
      setVisible(false);
      setValue(Object.values(searchValue.filter((obj) => obj.capital === selectedItem)[0]));
    }
    if (item !== null) {
      setVisible(false);
      setValue(Object.values(searchValue.filter((obj) => obj.capital === item)[0]));
    }
  };

  const onKeyDown = (event) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      const currentIndex = searchValue.findIndex((item) => item.capital === selectedItem);
      if (event.key === 'ArrowDown') {
        setSelectedItem(searchValue[(currentIndex + 1) % searchValue.length].capital);
      } else if (event.key === 'ArrowUp') {
        setSelectedItem(
          searchValue[(currentIndex - 1 + searchValue.length) % searchValue.length].capital,
        );
      }
    } else if (event.key === 'Enter') {
      selectedCity(null);
    }
  };

  return (
    <div className={st.input_block} onClick={() => setVisible(false)}>
      <input
        value={value}
        onChange={onChangeInput}
        onKeyDown={onKeyDown}
        placeholder="Write your city to find out the weather"></input>
      {visible ? (
        <div className={st.popUp} onClick={(e) => e.stopPropagation()}>
          <ul>
            {searchValue[0]
              ? searchValue.map((obj) => (
                  <li
                    key={obj.capital}
                    onClick={() => selectedCity(obj.capital)}
                    className={selectedItem === obj.capital ? st.selected : null}>
                    {obj.capital},{obj.country}
                  </li>
                ))
              : null}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default SearchInput;
