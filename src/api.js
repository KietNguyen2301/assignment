import axios from "axios";
const serverport = "http://localhost:3001";

const api = {
    login: async (username, password) => {
        try {
            const response = await axios.get(`${serverport}/account?username=${username}&password=${password}`)
            return response.data[0];
        } catch (error) {
            throw error;
        }
    },
    adduser: async (id,name, fullname) => {
        try {
            const response = await axios.post(`${serverport}/user`,
                {
                    id: id,
                    name: name,
                    fullname: fullname
                }
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    },
     updateuser: async (userId, newData) => {
        try {
            const response = await axios.put(`${serverport}/user/${userId}`, newData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
     deleteuser: async (userId) => {
        try {
            const response = await axios.delete(`${serverport}/user/${userId}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    getAllUsers: async () => {
        try {
          const response = await axios.get(`${serverport}/user`);
          return response.data;
        } catch (error) {
          throw error;
        }
      }
}
export default api;