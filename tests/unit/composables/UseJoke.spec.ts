import {describe, expect} from "vitest";
import {jokeApiMock} from "../components/mock/jokeApiMock";
import {useJoke} from "@/composables/UseJoke";
import axios from 'axios'

vi.mock('axios')

describe("UseJoke", () => {
    describe("getJoke", () => {
        it("should get joke", async () => {
            axios.get.mockResolvedValue({
                data: jokeApiMock,
            })

            const reponse = await useJoke().getJoke();

            expect(reponse).toStrictEqual(jokeApiMock);
        })
    })
})