import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk"
import themReducer from "./header-reducer";
import navBarReducer from "./nav-reducer";
import appReducer from "./app-reducer";


let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    ProfilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    themPage: themReducer,
    navBar: navBarReducer,
    app: appReducer,
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;