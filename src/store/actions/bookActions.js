export const createBook = (book) => {
    return (dispatch,getState,{getFirebase,getFireStore}) => {
        // async call
        dispatch({type:'CREATE_BOOK',book:book})
    }
}