import { useQuery } from "@tanstack/react-query";
import axios from "axios";

//
const fetchBreedList = async({queryKey}) => {
    const [,animal]=queryKey;
    if(!animal) return [];
    return axios.get(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
} 

const useBreedList = (animal) => {
    return useQuery(['breeds',animal],fetchBreedList);
}

export default useBreedList