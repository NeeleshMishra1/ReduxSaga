import { ADD_TO_CART, REMOVE_FROM_CART, USER_LIST } from "./constants";

export function addToCart(item){
    return{
        type:ADD_TO_CART,
        payload:item
    }
}

export function removeFromeCart(item){
    return{
        type:REMOVE_FROM_CART,
        payload:item
    }
}
export function getUserList(item){
    return{
        type:USER_LIST,
        payload:item
    }
}