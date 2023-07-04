import axios from "axios"
const request = axios.create({
     baseURL: 'https://10.40.12.4:3006/todoList/',
    //baseURL: 'http://113.174.246.52:3005/todoList/',
})

export const get = async (path,option={})=>{
    const response = await request.get(path,option)
    return response
}
export const post = async(path,option={})=>{
    const response = await request.post(path,{data:option})
    return response
}
export const put =async(path,option={})=>{
    const response=await request.put(path,{data:option})
    return response
}
export default request