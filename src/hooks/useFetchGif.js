import { useEffect, useState } from "react"
import { getGif } from "../helper/GetGif";

export const useFetchGif = (categoria) => {

const [state, setState] = useState({
    data:[],
    loading:true
});
useEffect(() => {
  getGif(categoria)
  .then(gif=>{
        setState({
            data:gif,
            loading:false
        })
  })
   
}, [categoria])
return state;

}
