import React, {useReducer, createContext} from 'react'
import { playReducer, playState } from '../reducers/play';
import { userdataReducer,userState } from '../reducers/userdata';
import { postEventReducer, postEventState } from '../reducers/postEvent';
import { hangUpReducer, hangUpState } from '../reducers/hangUp';
import { errorReducer, errorState } from '../reducers/error';
import { paymentCallbackReducer, paymentCallbackState } from '../reducers/paymentCallback';

export const StoreContext = createContext();

const combineReducers = (reducers) => {  
    return (state = {}, action) => {
      const newState = {};
      for (let key in reducers) {
        newState[key] = reducers[key](state[key], action);
      }
      return newState;
    }
}

const Store = (props) => {
    const [state, dispatch] = useReducer(combineReducers({
        play: playReducer,
        userdata: userdataReducer,
        postEvent: postEventReducer,
        hangUp: hangUpReducer,
        error: errorReducer,
        paymentCallback: paymentCallbackReducer
      }), {
          play: playState,
          userdata: userState,
          postevent: postEventState,
          hangUp: hangUpState,
          error: errorState,
          paymentCallback: paymentCallbackState
      })
     
    return (
        <StoreContext.Provider value={{state, dispatch}}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default Store