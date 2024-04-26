import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import classes from './GameModal.module.css'
import {useDispatch,useSelector} from 'react-redux'
import { setView } from '../Slices/viewSlice';
// import Layout from './Layout.module.css'

const GameModal = ({open,close,game}) => {

  

      const dispatch = useDispatch();

      const handleMobileClick=()=>{
        close()
        dispatch(setView("MobileView"))
        window.scrollTo(0,0);
      }

      const handleDesktopClick=()=>{
        close()
        dispatch(setView("DesktopView"))
        window.scrollTo(0,0);
      }

      console.log(game?.game_name)

  return (
    <>
    {

    open &&
   
       <Modal
        open={open}
        // onClose={()=>close()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={classes.main}
      >
        <Box  className={classes.card}>
  <div class={classes.card__border}></div>
  <div class={classes.card_title__container}>
    <span class={classes.card_title}>Do You Want to Play in which view?</span>
   
  </div>
  
  <button class={classes.button} onClick={handleMobileClick}>Mobile View</button>
  <button class={classes.button} onClick={handleDesktopClick}>Desktop View</button>

  {
    game?.game_name == "QUIZ_BOX" || game?.game_name == "SOCCER_PORTAL" || game?.game_name == "TIC_TAC_TOE" || game?.game_name == "ZERO_POINT" ?
    <div  className={classes.card} style={{marginTop:"2rem",padding:"1rem",textAlign:"center"}}>
  <div class={classes.card__border}></div>
  <div class={classes.card_title__container}>
    <span class={classes.card_title}>Login Details</span>
  </div>
  <div className={classes.text}>
   <span style={{fontWeight:"bold"}}>UserName</span>&nbsp;: &nbsp;{game?.userName}
  </div>
  <div className={classes.text}>
    <span style={{fontWeight:"bold"}}>Password</span>&nbsp;: &nbsp;{game?.password}
  </div>
        </div>
        :""
  }
        </Box>
      </Modal>
 
    }
    </>
  )
}

export default GameModal
