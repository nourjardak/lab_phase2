import { ADD_TO_BUY, ADD_TO_READ, ADD_TO_SHARE, DELETE_FROM_BUY, DELETE_FROM_READ } from "../Const/ActionTypes"

export const addToRead=(payload)=>{
    //id
   return{
       type:ADD_TO_READ,
       payload
   }
}
export const addToBuy=(payload)=>{
    //cost
   return{
       type:ADD_TO_BUY,
       payload
   }
}
export const addToShare=(payload)=>{
    //id type title review cover cost author
   return{
       type:ADD_TO_SHARE,
       payload
   }
}
export const deletefrombuy=(payload)=>{
    //cost
    return{
        type:DELETE_FROM_BUY,
        payload
    }
}
export const deletefromread=(payload)=>{
    //title
    return{
        type:DELETE_FROM_READ,
        payload
    }
}