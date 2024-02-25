import axios from "axios";


const axiosClient = axios.create({
     baseURL: 'http://127.0.0.1:8000/api',
     timeout: 6000,
});

axiosClient.interceptors.request.use((configuration) => {
     const token = localStorage.getItem('ACCESS')
     configuration.headers.Authorization = `Bearer ${token}`
     return configuration;
})

axiosClient.interceptors.response.use((response) => {
     return response;
}, (error) => {
     console.log(error)
     if (error.response.status == 401) {
          localStorage.removeItem('ACCESS')
     }
     console.log(error)
     throw error;
})
export default axiosClient