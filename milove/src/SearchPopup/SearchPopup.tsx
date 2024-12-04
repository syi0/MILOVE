import React from 'react'
import './SearchPopup.css'
import Popup from 'reactjs-popup';
import SearchBar from '../SearchBar/SearchBar';

export default function SearchPopup() {
  return (
    <Popup trigger={<button>Open Popup</button>}>
        <SearchBar></SearchBar>
    </Popup>
  ) 
}

