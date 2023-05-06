import React from 'react';
import "./SearchBox.css";

class SearchBox extends React.Component {

    render() {
        return (
            <div className='SearchBox'>
                <input placeholder='搜索'></input>
                <button>搜索</button>
            </div>
        );
    }
}

export default SearchBox;