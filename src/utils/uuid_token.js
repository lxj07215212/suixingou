import { v4 as uuidv4 } from 'uuid';
// 要每次执行生成一个随机的字符串，且每次执行不能发生变化，游客身份持久存储
export const getuuid= ()=>{
    // 先看本地存储中是否有该游客
    let uuid_token = localStorage.getItem('UUIDTOKEN')
    // 如果没有
    if(!uuid_token){
        // 如果没有该游客，随机生成该游客id
        uuid_token = uuidv4();
        localStorage.setItem('UUIDTOKEN',uuid_token)
    }
    return uuid_token;
}