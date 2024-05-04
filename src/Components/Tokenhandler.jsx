

export function isToken(){
    const token=localStorage.getItem('token')
    if (token) {
        return true;
    }
    else{
        return false;
    }
}

export function deleteToken(){
    localStorage.clear()
}
