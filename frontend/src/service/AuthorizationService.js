export default function authorization(){
    const user = JSON.parse(localStorage.getItem('authenticatedUser'));
    if(user){
        return { Authorization: 'Bearer ' + user, 'Content-Type': 'application/json' };
    }else{
        return {};
    }
}