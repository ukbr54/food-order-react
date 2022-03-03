
import { configureStore, createSlice } from '@reduxjs/toolkit'
import {createStore} from 'redux'

const initialCounterState = { counter: 0 };
const initialAuthState = { isAuthenticate: false };

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action){
            state.counter = state.counter + action.payload;
        }
    }
})

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
      login(state) {
          console.log("Inside Login Slice - Redux")
          state.isAuthenticate = true
      },
      logout(state) {
          state.isAuthenticate = false
      }
  }
});

/*const counterReducer = (state = { counter: 0 }, action) => {
    if(action.type === 'increment'){
        return{
            counter: state.counter + 1,
        }
    }
    if(action.type === 'increase'){
        return{
            counter: state.counter + action.amount,
        }
    }
    if(action.type === 'decrement'){
        return{
            counter: state.counter - 1,
        }
    }
    return state;
}

const store = createStore(counterReducer);*/



const store = configureStore({ 
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
 })

export const counterActions = counterSlice.actions; 
export const authActions = authSlice.actions;
export default store;