import * as request from '../ultil/request'


export const getTodoList = async(path)=>{
    try{
       let data=await request.get(path,'')
       if(data.data!=='error'&& data.status===200){
        return data.data
       }
       
   
    }
    catch(error){
        console.log('getTodoList: '+ error)
    }
}
