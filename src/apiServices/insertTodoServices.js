import * as request from '../ultil/request'

export const insertTodo = async (path, params) => {
    const data = await request.post(path, params)
    if (data.data && data.status === 200)
        return data.data
    else
        return false
}