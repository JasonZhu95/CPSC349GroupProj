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
      </div>
    );
}

export default Sidebar
