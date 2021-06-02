
const ADD_MESSAGE = 'ADD-MESSAGE';
const REFRESH_MESSAGE = 'REFRESH-MESSAGE';


let initialState = {
    listDialogs: [
        { name: "Maxim", lastname: "Kotovshchikov", id: 1 },
    ],
    message: [],
    messageWrite: "",
}
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        // Создать и отправить сообщение
        case ADD_MESSAGE:
            return  {
                ...state,
                message: [...state.message, { id: 1, Name: "Max", lastName: "Kot", text: state.messageWrite }],
                messageWrite: ""
            }
            
        // Обновляет и отображает буквы в поле создания СООБЩЕНИЯ
        case REFRESH_MESSAGE:
            return{
                ...state,
                messageWrite: action.message_text
            }
            
        default: return state;
    }
}
export const refreshChatMessageCreator = (message_text) => ({ type: 'REFRESH-MESSAGE', message_text: message_text })
export const chatMessageCreator = () => ({ type: 'ADD-MESSAGE' })
export default dialogsReducer;


