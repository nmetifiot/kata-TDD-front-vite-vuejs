import axios from "axios";
import type {JokeDto} from "@/model/jokeDto";

export const useJoke = () => {
    const getJoke = async ():Promise<JokeDto> => {
        const reponse = await axios.get('https://v2.jokeapi.dev/joke/programming?type=twopart');
        return reponse.data;
    };

    return {
        getJoke
    }
}