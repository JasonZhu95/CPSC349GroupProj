import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow"
import AdbIcon from '@mui/icons-material/Adb';
import { useStateValue } from "./StateProvider";
import { AddToHomeScreenSharp } from '@mui/icons-material';

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

    return (
        <div className="sidebar">
        <SidebarRow src={user.photoURL} title={user.displayName} />
        <SidebarRow Icon={AdbIcon} title="Advertisements" />
      <p>For Advertisements, Please inquire to the Devs</p>
      
      <img src="https://w7.pngwing.com/pngs/396/401/png-transparent-twitch-logo-amazon-com-twitch-logo-streaming-media-video-on-demand-icon-svg-twitch-miscellaneous-purple-angle-thumbnail.png" alt="" />
      <img src="https://cdn.vox-cdn.com/thumbor/0kpe316UpZWk53iw3bOLoJfF6hI=/0x0:1680x1050/1400x1400/filters:focal(706x391:974x659):format(gif)/cdn.vox-cdn.com/uploads/chorus_image/image/56414325/YTLogo_old_new_animation.0.gif" alt="" />
      </div>
    );
}

export default Sidebar
