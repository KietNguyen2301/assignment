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
    adduser: async (username, password) => {
        try {
            const response = await axios.post(`${serverport}/user`,
                {
                    name: username,
                    fullname: password
                }
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}
export default api;