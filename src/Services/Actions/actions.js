import { ADD_TO_CART,REMOVE_TO_CART } from "../constants"
export const addTocart=(data)=>{
 
    return {
        type:ADD_TO_CART,
        data:data
    }
}

export const removeTocart=()=>{

    return {
        type:REMOVE_TO_CART
    }
}