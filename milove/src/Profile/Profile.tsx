import './Profile.css'

export default function Profile() {
    return(
        <div className='profile'>
            <div className="profile_data">
                <div className='profile_icon'>Profile Icon + changing posiibility</div>
                <div className="profile_info">UserName + Age. If age is null, you need to click button to enter that shit</div>
                <div className="profile_description">Description of the profile, user must say anything about yourself</div>
                <div className="profile_message_button">Button that user must click to chat with that person</div>
                <div className="profile_posts">Post that user posted</div>
            </div>
        </div>
    );
}