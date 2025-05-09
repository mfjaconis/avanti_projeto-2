import { useState } from "react";
import { SlMagnifier } from "react-icons/sl";
import { Input, InputContainer, InputContent } from './styles';

type InputSearchProps = {
  onSearch: (username: string) => void;
}

function InputSearch({ onSearch }: InputSearchProps) {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    if (inputValue.trim()) {
      onSearch(inputValue.trim());
    }
  };

  return (
    <>
      <InputContainer className='container'>
        <InputContent>
          <Input
            type="text"
            placeholder='Digite um usuário do Github'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" onClick={handleSearch}><SlMagnifier className='searchIcon' /></button>
        </InputContent>
      </InputContainer>
    </>
  )
}

export default InputSearch;
