import { useState,useEffect,useMemo, useCallback } from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchNews } from "../../utils/fetchNews"
import { store } from "../../store/config"
import "./NewsList.scss"
import { News } from "../News/News"
export const NewsList =()=>{

    let  newsArray  = useSelector((state)=>state.news)
    const dispatch = useDispatch()
    const fetchData = async ()=>{
        let newsResult= await fetchNews();       
        console.log(newsResult)
        if(newsResult){

            dispatch({
                type:"news",payload:newsResult
            })
        }
        console.log(newsArray)
       
    }


    useEffect(()=>{        
        fetchData()  
        store.getState(state=>console.log(state));                 
    },[])


     if(!newsArray)return <p>Data On the Way</p>
     return(
         <div className="news-container" >
         {newsArray.map((news,i)=>{
          return   <News  key={i} data={news}/>
             
            }
            )
        }
        </div>     



    )

}