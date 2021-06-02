import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";



let store = {

    renderAll() { },
    subscribe(observer) {
        this.renderAll = observer;
    },

    _state: {
        dialogsPage: {
            listDialogs: [
                { name: "Maxim", lastname: "Kotovshchikov", id: 1 },
                { name: "Yana", lastname: "Singaevskaya", id: 2 },
                { name: "Valentin", lastname: "ElanovCeburekovAlex", id: 3 }
            ],
            textMessage: [],
            messageWrite: "",
        },
        postPage: {
            myPosts: [],
            textarea: 'post'
        }
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.postPage = profileReducer(this._state.postPage, action);
        this.renderAll(this._state)
    }

}



export default store;