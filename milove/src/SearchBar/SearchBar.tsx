import './SearchBar.css'

export default function SearchBar() {
  return (
    <div className='serchbar_window'>
        <form action="">
            <input type="text" name="searchbar_input" id="searchbar_input" />
            <button type='button' className='searchbar_buton'></button>
        </form>
    </div>
  )
}
