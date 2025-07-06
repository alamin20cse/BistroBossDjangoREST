import axios from "axios";


export const axiosSecure=axios.create({
    baseURL:''
})
const useAxiosSecure = () => {
    return axiosSecure
   
};

export default useAxiosSecure;