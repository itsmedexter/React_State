import React, {useState} from 'react';


const SearchBar = props => {
    const [inputText, setInputText] = useState('');

    const handleSearch = () => props.handleSearch(inputText);
    console.log(inputText)
    return (<div>
        <input type="text" value={inputText} onChange={e => setInputText(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
    </div>)
}

export default SearchBar;