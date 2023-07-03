import axios from 'axios';

const callApi = async (method, extendUrl, data) => {
  try {
   const url = `http://10.40.12.4:3005/todoList/${extendUrl}`
    const response = await axios({
      method,
      url,
      data,
    });

    if (response.data!=='error'&&response.status === 200) {
      return response.data;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

export {
    callApi,
} ;