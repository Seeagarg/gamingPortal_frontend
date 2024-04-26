import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import classes from './GameDetails.module.css'
import {fetchDataFromBackend} from '../Services/api'
import GameModal from '../Components/GameModal';
import {useSelector,useDispatch} from 'react-redux';
import {setOpen} from '../Slices/modalSlice'

const GameDetails = () => {

  const {view} = useSelector((state)=>state.viewSlice)
  const {open} = useSelector((state)=>state.modalSlice)
  const dispatch = useDispatch()
  // console.log(view)

    const params = useParams();
    const [Game,setGame] = useState('');
    // const [open,setOpen] = useState(true)
    // console.log(open)


    const handleClose=()=>{
        // setOpen(false);
        dispatch(setOpen(false));
    }


    const fetchData =async()=>{
        const data = await fetchDataFromBackend();
        // console.log(data.data);
        const Games = data.data;
        // console.log(Games)

        const game = Games?.find((item)=>item.id == params.id)
        console.log(game)
            setGame(game)
      }
  
      useEffect(()=>{
        fetchData();
        // console.log(Game?.game_url)
      },[])

    
  return (
    <>
    <div className={classes.main}>
    <div className={`${view == "DesktopView" ? classes.container : classes.mobile_container}`}>
    <Link to="/" className={classes.close}>  
    <button className={classes.button}>
    close
    </button>
    </Link>
    {
        !open &&
        <>
        <iframe src={Game?.game_url}  allow="encrypted-media" frameborder="0" className={`${classes.frame}`}></iframe>
    </>
    }
    </div>
    </div>
    <GameModal open={open} close={handleClose} game={Game}/>
    </>
  )
}

export default GameDetails
