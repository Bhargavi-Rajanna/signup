 export const getRegex = (value)=>{
    switch (value){
        case 'email':
            return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        case 'password':
            return [/[a-z]/, /[A-Z]/];
        default:
            return ''
    }

}