import {describe, expect, it} from "vitest";
import {mount} from "@vue/test-utils";
import Joke from "../../../src/components/joke.vue";

const generateWrapper = () => mount(Joke);

describe('joke', () => {
    describe('render', () => {
        it('should render the action button', () => {
            const wrapper =generateWrapper();

            const actionButton = wrapper.find('[data-testid=joke__button-generate-joke]');

            expect(actionButton.exists()).toBe(true);
            expect(actionButton.text()).toBe('Générer la blague');
        });


    })
})