import React,{useState} from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {Link} from 'react-router-dom';
import classes from './SideBarMenu.module.css'
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import ExtensionIcon from '@mui/icons-material/Extension';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import MenuIcon from '@mui/icons-material/Menu';
import { closeSideBar, openSideBar } from '../Slices/sideBarSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../Slices/categorySlice';

const SideBarMenu = () => {
  // const [open,setOpen] = useState(false)

  const dispatch = useDispatch();

  const {open} = useSelector((state)=>state.sideBarSlice)

  return (
    <Sidebar collapsed={!open} className={classes.sidebar_main}>
    
  <Menu
  className={classes.menu}
    menuItemStyles={{
      button: {
        width:"80%",
        gap:"10px",
        [`&.active`]: {
          backgroundColor: 'yellow',
          color: '#b6c8d9',
        },
      },
      button: {
        [`&.hover`]: {
          backgroundColor: 'yellow',
          color: '#b6c8d9',
        },
      },
    }}
  >
  
  <MenuItem onClick={()=>{!open?dispatch(openSideBar()):dispatch(closeSideBar())}} className={`${classes.item_title} ${classes.item}`} icon={<img src="/assets/menu.png" alt="" className={classes.icon}/>} ></MenuItem>
  {/* <SubMenu label="Categories"> */}
  <MenuItem component={<Link to="/" />} className={classes.item} icon={<img src="/assets/all.png" alt="" className={classes.icon}/>} onClick={()=>dispatch(setCategory('All Games'))}> All</MenuItem>
    <MenuItem component={<Link to="/" />} className={classes.item} icon={<img src="/assets/new.png" alt="" className={classes.icon}/>} onClick={()=>dispatch(setCategory('New'))}> New</MenuItem>
    <MenuItem component={<Link to="/" />} className={classes.item} icon={<img src="/assets/games.png" alt="" className={classes.icon}/>} onClick={()=>dispatch(setCategory('Games'))}> Games</MenuItem>
    <MenuItem component={<Link to="/" />} className={classes.item} icon={<img src="/assets/quiz.png" alt="" className={classes.icon}/>} onClick={()=>dispatch(setCategory('Quiz'))}> Quiz</MenuItem>
    <MenuItem component={<Link to="/" />} className={classes.item} icon={<img src="/assets/fantasy.png" alt="" className={classes.icon}/>} onClick={()=>dispatch(setCategory('Fantasy'))}>Fantasy</MenuItem>
    <MenuItem component={<Link to="/" />} className={classes.item} icon={<img src="/assets/video.png" alt="" className={classes.icon}/>} onClick={()=>dispatch(setCategory('Videos'))}>Videos</MenuItem>
    {/* </SubMenu> */} 
  </Menu>
</Sidebar>
  )
}

export default SideBarMenu
