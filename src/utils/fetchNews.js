import axios from "axios"

const apiKey = "83dd2e90e4144275b34cb8c2c9941ecf";

export const  fetchNews =   async (country="ng",category="entertainment") =>{

  return await axios.get(`http://newsapi.org/v2/top-headlines`,{
  params:{
  country:country,
  category:category
  },    
    headers:{
        "X-Api-Key":apiKey
    }
    }).then(response=>response.data.articles).catch(err=>console.log(err))

} 