import React,{useEffect,useState,useRef} from 'react'
import classes from './Home.module.css'
import { useSelector,useDispatch } from 'react-redux';
import { fetchDataFromBackend } from '../Services/api';
import categorySlice from '../Slices/categorySlice';
import { setCategory } from '../Slices/categorySlice';
import {useNavigate} from 'react-router-dom'
import { setOpen } from '../Slices/modalSlice';
import Lottie from "lottie-react";
import Loader from '../Animations/Loader.json'

const Home = () => {

  const {open} = useSelector((state)=>state.sideBarSlice)
  const {category} = useSelector((state)=>state.categorySlice);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [arr,setArr] = useState([])
  const [loading,setLoading] = useState(true);

  const containerRef = useRef(null);

  
  console.log(category)

    const fetchData =async()=>{
      const data = await fetchDataFromBackend();
      setLoading(false);
      // console.log(data.data);
      const Games = data.data;
      if(category=="All Games"){
        setArr(Games);
      }
      else if(category == "Games"){
        const arr = Games.filter((item)=>item.category == "Games")
        setArr(arr);
      }
      else if(category == "Quiz"){
        const arr = Games.filter((item)=>item.category == "Quiz")
        setArr(arr);
      }
      else if(category == "New"){
        const arr = Games.filter((item)=>item.status == "new")
        setArr(arr);
      }
      else if(category == "Fantasy"){
        const arr = Games.filter((item)=>item.category == "Fantasy Portal")
        setArr(arr);
      }
      else if(category == "Videos"){
        const arr = Games.filter((item)=>item.category == "Videos")
        setArr(arr);
      }
      
    }

    useEffect(()=>{
      fetchData();
    },[category])

    const handlePlay=(id)=>{
      dispatch(setOpen(true));
      navigate(`/game/${id}`)
    }


    const handleFooterButton=(item)=>{
      const container = containerRef.current;
      console.log(containerRef.current,'===================')
      const scroll = document.querySelector('.home')
        scroll.scrollTo({
          top: containerRef.current,
          behavior: 'smooth'
        });
        dispatch(setCategory(item))
      
    }


    


  return (
    <>
    <div className={`${classes.container}`} >
    <div id="topAnchor" style={{position: 'absolute',top: '0'}} ref={containerRef}></div>
    <div className={` home ${classes.sub_container}`}>
      <div className={classes.title}>
      <img src={`${category == 'All Games' ? '/assets/all.png': category=='New'?'/assets/new.png' : category=='Games'?'/assets/games.png': category=='Quiz'?'/assets/quiz.png'  : category=='Fantasy'?'/assets/fantasy.png' : category=='Videos'?'/assets/video.png' :  '/'}`} alt="" className={classes.title_logo} />
      &nbsp;
      {category}
      </div>
      <div className={!open?classes.games:classes.games_when_open}>

      {!loading ?
        arr?.map((item,idx )=>(
          <div key={idx} className={classes.item}>
          <img className={classes.item_img} src={item.img_url} alt="" />
          <p>{item.game_name}</p>
          <button className={classes.btn} onClick={()=>handlePlay(item.id)}>play</button>
          </div>
     
      
        )):  
      
      <Lottie animationData={Loader} loop={true} className={classes.animation} />
      }
      </div>
      </div>

      
    </div>
    <div className={classes.footer_container}>
    <div className={classes.buttons}>
    <button className={classes.button} onClick={()=>{handleFooterButton("All Games")}}> All
</button>
<button className={classes.button} onClick={()=>{handleFooterButton("New")}}> New
</button>
<button className={classes.button} onClick={()=>{handleFooterButton("Games")}}> Games
</button>
<button className={classes.button} onClick={()=>{handleFooterButton("Quiz")}}> Quiz
</button>
<button className={classes.button} onClick={()=>{handleFooterButton("Fantasy")}}> Fantasy
</button>
<button className={classes.button} onClick={()=>{handleFooterButton("Videos")}}> Videos
</button>
</div>
{/* <br /> */}
{/* <hr /> */}
<p className={classes.copyRight}>© 2024 Visiontrek Communication, All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Home
