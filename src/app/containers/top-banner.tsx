import "./top-banner.css";
import { Avatar } from "@mui/material";

const TopBanner = () => (
  <>
    <div className="container">
      <div className="profile-set">
        <div className="avatar-container">
          <Avatar className="avatar-profile" alt="Remy Sharp" src="/dog.jpg" />
        </div>
        <div className="profile-name">
          <span>Pasakorn</span>
          <span>Juipiam</span>
        </div>
      </div>
    </div>
  </>
);

export default TopBanner;
