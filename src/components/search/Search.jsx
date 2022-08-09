import React from 'react'
import {  HiOutlineSearch } from "react-icons/hi";

const Search = ({ setSearchTerm }) => {
  return (
    <div className="search-wrapper">
        <div className="app-search">
            <button><HiOutlineSearch/></button>
            <input 
                type="text" 
                placeholder='Type Doctor name to search'
                onChange={(e) => setSearchTerm(e.target.value)} 
                />
        </div>
    </div>
  )
}

export default Search
