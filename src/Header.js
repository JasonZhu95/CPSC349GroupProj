//Navbar Header for the Website
//Import react
import React from 'react'
import "./Header.css";
//Import Icons from Material UI
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from "./StateProvider";

function Header() {
    const [{ user }, dispatch] = useStateValue();

    return <div className='header'>
        <div className="header__left">
            <img
                src="https://i.imgur.com/S4TF9YI.png" alt=""
            />
            <div className="header__input">
                <SearchIcon />
                <input placeholder="Search DatCoder" type="text" />
            </div>
        </div>

        <div className="header__center">
        {/* Apply Imported Icons from Material UI library*/}
            <div className="header__option header__option--active" >
                <HomeIcon fontSize="large" />
            </div>
            <div className="header__option">
                <FlagIcon fontSize="large" />
            </div>
            <div className="header__option">
                <SubscriptionsOutlinedIcon fontSize="large" />
            </div>
            <div className="header__option">
                <StorefrontOutlinedIcon fontSize="large" />
            </div>
            <div className="header__option">
                <SupervisedUserCircleIcon fontSize="large" />
            </div>
        </div>

        <div className="header__right">
            <div className="header__info">
                <Avatar src={user.photoURL} />
                <h4>{user.displayName}</h4>
            </div>

            {/* Material UI that allows for clickable icons */}
            <IconButton>
                <AddIcon style={{fill: "#e4e6eb"}}/>
            </IconButton>
            <IconButton>
                <ForumIcon style={{fill: "#e4e6eb"}}/>
            </IconButton>
            <IconButton>
                <NotificationsActiveIcon style={{fill: "#e4e6eb"}}/>
            </IconButton>
            <IconButton>
                <ExpandMoreIcon style={{fill: "#e4e6eb"}}/>
            </IconButton>
        </div>

    </div>;
}

export default Header
