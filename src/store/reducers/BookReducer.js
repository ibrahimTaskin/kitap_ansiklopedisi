const initState = {
    books:[
        {id:1,title:'1. Kitap',description:'lasfasfasf asdfasfasf asfas fasfasfasfasf',datetime:'01.01.2016'},
        {id:2,title:'2. Kitap',description:'lasfasfasf asdfasfasf asfas fasfasfasfasf',datetime:'01.01.2016'},
        {id:3,title:'3. Kitap',description:'lasfasfasf asdfasfasf asfas fasfasfasfasf',datetime:'01.01.2016'},
        {id:4,title:'4. Kitap',description:'lasfasfasf asdfasfasf asfas fasfasfasfasf',datetime:'01.01.2016'},
        {id:5,title:'5. Kitap',description:'lasfasfasf asdfasfasf asfas fasfasfasfasf',datetime:'01.01.2016'},
    ]
};

export const bookReducer = (state = initState,action) => {
    return state;
}