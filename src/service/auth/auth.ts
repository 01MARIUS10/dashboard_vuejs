export function isAuthenticated() {
    let token = localStorage.getItem('user_token');
    return (token)? true:false;
}
