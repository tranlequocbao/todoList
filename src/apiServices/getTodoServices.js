import * as request from '../ultil/request'

export const getTodoList = async (path, message) => {
    try {
        let data = await request.get(path, '')
        if (data.data !== 'error' && data.status === 200) {

            return data.data
        }
        else {
            message(data.data)
        }
    }
    catch (error) {
        message(error.code)
        return false
    }
}
