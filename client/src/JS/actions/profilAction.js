import{LOAD_PROFIL,GET_PROFIL_FAIL,GET_PROFIL_SUCCESS} from "../constants/profil"
import axios from "axios"
export const getProfil =()=>async (dispatch)=>{
    dispatch({type:LOAD_PROFIL})
    try {
        const opts = {
            headers:
                { Authorization: localStorage.getItem("token") }
        }
        const result=await axios.get("/profil/profilnutri",opts)
        dispatch({type:GET_PROFIL_SUCCESS,payload:result.data})
    } catch (error) {
        dispatch({type:GET_PROFIL_FAIL,error})
        
    }
}