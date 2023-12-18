import {beforeEach, describe, expect, it} from "vitest";
import {flushPromises, mount} from "@vue/test-utils";
import Joke from "@/components/joke.vue";
import {jokeApiMock} from "./mock/jokeApiMock";

const mockUseJoke = {
    getJoke: vi.fn()
};
vi.mock('@/composables/UseJoke', () => ({
    useJoke: () => mockUseJoke
}));

beforeEach(() => {mockUseJoke.getJoke.mockResolvedValueOnce(jokeApiMock)})

const generateWrapper = () => mount(Joke);

describe('joke', () => {
    describe('render', () => {
        it('should render the action button', () => {
            const wrapper =generateWrapper();

            const actionButton = wrapper.find('[data-testid=joke__button-generate-joke]');

            expect(actionButton.exists()).toBe(true);
            expect(actionButton.text()).toBe('Générer la blague');
        });
    it('should show the joke question', async () => {
        const wrapper = generateWrapper();
        await flushPromises();

        const joke = wrapper.find('[data-testid=joke__question]');

        expect(joke.text()).toBe(jokeApiMock.setup)
    });
    it('should show the joke answer', async () => {
        const wrapper = generateWrapper();
        await flushPromises();

        const joke = wrapper.find('[data-testid=joke__answer]');

        expect(joke.text()).toBe(jokeApiMock.delivery)
    });

    })
})