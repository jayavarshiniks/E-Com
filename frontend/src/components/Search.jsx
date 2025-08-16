import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Search = () => {

    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();

    const searchHandler = () => {
        navigate('/search?keyword='+keyword);
    }

  return (
            <div className="join w-full max-w-sm md:max-w-md">
              <input
                type="text"
                id="search_field"
                onChange={(e) => setKeyword(e.target.value)}
                onBlur={searchHandler}
                placeholder="Enter Product Name ..."
                className="input input-bordered join-item w-full text-sm md:text-base"
              />
              <button id="search_btn" className="btn btn-primary join-item" onClick={searchHandler}>
                <FaSearch className="text-sm md:text-lg" />
              </button>
            </div>
  )
}

export default Search