import './ProfileEditor.css'

export default function ProfileEditor() {
  return (
    <div>
        <label htmlFor="username">Username: </label><input type="text" name="username" id="username" /><br />
        <label htmlFor="age">Age: </label><input type="number" name="age" id="age" /><br />
        <label htmlFor="name_and_surname">Name and Surname: </label><input type="text" name="name_and_surname" id="name_and_surname" /> <br />
        <label htmlFor="descritption">Description: </label><textarea name="description" id="description"></textarea><br />
        <button type='button'>Save</button>
    </div>
  )
}

