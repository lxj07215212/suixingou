export const setToken = (token)=>{
    // 获取永久的token
    localStorage.setItem('TOKEN', token)
}

export const getToken = ()=>{
    return localStorage.getItem('TOKEN')
}
export const removeToken = ()=>{
    return localStorage.removeItem("TOKEN")
}

