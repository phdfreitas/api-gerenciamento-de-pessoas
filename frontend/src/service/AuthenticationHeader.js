export default function authHeader(){
    const user = localStorage.getItem('authenticatedUser');
    if(user){
        return { Authorization: 'Bearer ' + user };
    }else{
        return {};
    }
}