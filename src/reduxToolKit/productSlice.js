import { createSlice } from "@reduxjs/toolkit";

const MyProductslice = createSlice({
    name: "product",
    initialState: [],
    reducers: {
        addMyProduct(state, action) {
            state.push(action.payload);
        },
        increseQty(state,action){
            let myIndex=-1;
            state.map((item,index)=>{
                if(item.id==action.payload){
                    myIndex=index;
                }
            });
            if(myIndex==-1){

            }else{
                state[myIndex].qty+=1;
            }
        }
    }
})

export const { addMyProduct } = MyProductslice.actions;
export default MyProductslice.reducer;