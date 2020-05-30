import React, {useState }from 'react'
import search from './logo/search.png';
import { Link } from 'react-router-dom'
function Search() {
    const design = {
        'float': 'right'
    }
    const [query, setQuery] = useState('');
    return (
        <div className="header-right">
            <input type="text" name="search" placeholder="Search.." value={query} onChange={e => setQuery(e.target.value)}/>
            <Link to={"/query="+query}>
                <img src={search} style={design} alt="search" />
            </Link>

        </div>
    )
}

export default Search
