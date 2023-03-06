export default function authHeader(){
    const user = localStorage.getItem('authenticatedUser');
    if(user){
        return { Authorization: 'Bearer ' + user, 'Content-Type': 'application/json' };
    }else{
        return {};
    }
}