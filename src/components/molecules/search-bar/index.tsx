import React, { useState } from 'react';
import NavBarItem from '../../atoms/navbar/navbar-item';
import { SearchBarStyled } from './styles';
import { ReactComponent as SearchIcon } from '../../../assets/images/icons/search.svg';

const SearchBar: React.FC = () => {
  const [activeSearch, setActiveSearch] = useState(false);
  const [valueInput, setValueInput] = useState('');

  const handleButtonChange = () => {
    if (valueInput === '') {
      setActiveSearch(!activeSearch);
    } else {
      alert(`Buscar por: ${valueInput}`);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(event.target.value);
  };
  return (
    <SearchBarStyled>
      <input
        type="text"
        name="searchInput"
        id="searchInput"
        className={activeSearch ? 'active-search' : undefined}
        placeholder="Search..."
        value={valueInput}
        onChange={handleInputChange}
      />
      <NavBarItem icon={<SearchIcon />} onClick={handleButtonChange} />
    </SearchBarStyled>
  );
};

export default SearchBar;
