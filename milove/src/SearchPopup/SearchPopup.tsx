import React from 'react'
import './SearchPopup.css'
import Popup from 'reactjs-popup';

export default function SearchPopup() {
  return (
    <Popup trigger={<button>Open Popup</button>}>
        <div>Have to attach the searchbar</div>
    </Popup>
  ) 
}

