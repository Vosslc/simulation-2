// In redux, components need to connect to a store. 
//createStore will allows us to export the creation of our store
import { createStore } from 'redux'; 
import reducer from "./reducer";
export default createStore( reducer );