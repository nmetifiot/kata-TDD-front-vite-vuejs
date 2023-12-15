import axios from "axios";

export const useJoke = () => {
    const getJoke = async () => {
        const reponse = await axios.get('https://v2.jokeapi.dev/joke/programming?type=twopart');
        return reponse.data;
    };

    return {
        getJoke
    }
}