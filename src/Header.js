//Navbar Header for the Website
//Import react
import React from 'react'
import "./Header.css";
//Import Icons from Material UI
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from "./StateProvider";
import firebase from "firebase";

function Header() {
    const [{ user }, dispatch] = useStateValue();

    return <div className='header'>
        <div className="header__left">
            <img
                src="https://i.imgur.com/S4TF9YI.png" alt=""
            />
            <div className="header__input">
                <SearchIcon />
                <input placeholder="Search" type="text" />
            </div>
        </div>
        <div className="header__center" >
        {/* Apply Imported Icons from Material UI library*/}
        <div className="header__option header__option--active"  onClick={HomeButtonHandler}>
            <HomeIcon fontSize="large"/>
        </div>
            <div className="header__option">
                <FlagIcon fontSize="large"/>
            </div>
            <div className="header__option" onClick={BottomScreenHandler}>
                <ArrowDownwardIcon fontSize="large"/>
            </div>
            <div className="header__option" onClick={CalanderTime}>
                <CalendarTodayIcon fontSize="large"/>
            </div>
            <div className="header__option"  onClick={() => GetUser(user)}>
                <SupervisedUserCircleIcon fontSize="large"/>
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

function HomeButtonHandler() {
    document.body.scrollTop = 0; //Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
}

function BottomScreenHandler(){
    window.scrollTo(0,document.body.scrollHeight);
}

function CalanderTime(){
    const monthNames = [1,2,3,4,5,6,7,8,9,10,11,12];
    const dateObj = new Date();
    const month = monthNames[dateObj.getMonth()];
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const output = month  + '/'+ day  + '/' + year;
  //  document.querySelector('.date').textContent = output; 
    var time = new Date();
    alert("The current time is: " + Math.trunc(time/1000) + " seconds\nOR: " + 
    Math.trunc(time/86400000) + " days\nOR: " + Math.trunc(time/31557600000) + " years\n" +
    "This translates into todays date: " + output + "\nOr in more detail: \n" + time)
    console.log("testing CalanderTime")
}

function GetUser(user){
    //UNUSED AT THE MOMENT
    console.log("testing GetUser")
    console.log(user.displayName)
}
    
