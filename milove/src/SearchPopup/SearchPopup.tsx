import React from 'react'
import './SearchPopup.css'
import Popup from 'reactjs-popup';
import SearchBar from '../SearchBar/SearchBar';
import SearchIcon from "@mui/icons-material/Search";

export default function SearchPopup() {
  return (
    <Popup trigger={<button className='popup_button'><SearchIcon/><span className='search_text'>Search</span></button>} className='popup_button'>
        <SearchBar></SearchBar>
    </Popup>
  ) 
}

