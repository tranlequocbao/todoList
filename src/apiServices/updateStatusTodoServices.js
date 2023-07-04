import * as request from '../ultil/request'

export const updateStatusTodo = async(path,params)=>{
   const data =await request.put(path,params)
   if(data &&data.status===200)
   return data
   else
   return false
}