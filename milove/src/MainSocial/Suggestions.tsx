import { Avatar } from "@mui/material";
import "./Suggestions.css";

export default function Suggestions() {
  return (
    <div className="suggestions">
      <div className="suggestions__title">Suggestions for you</div>
        <div className="suggestions__usernames">
          <div className="suggestions__username">
            <div className="username__left">
              <span className="avatar">
                <Avatar>M</Avatar>
              </span>
              <div className="username__info">
                <span className="username">milosz_ratkiewicz</span>
                <span className="relation">New Hunter in MILOVE</span>
              </div>
            </div>
          <button className="follow__button">Follow</button>
        </div>

        
      </div>
    </div>
  );
}
