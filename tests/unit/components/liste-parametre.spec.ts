import {mount} from "@vue/test-utils";
import {describe, expect, it} from "vitest";
import ListeParametre from "../../../src/components/liste-parametre.vue";

const generateWrapper = () => mount(ListeParametre);

describe('ListeParametre', () => {
    describe('render', () => {
        it('should render correctly', () => {
            const wrapper = generateWrapper();

                expect(wrapper.html()).toMatchSnapshot()
        });
        it('should render a list', () => {
            const wrapper = generateWrapper();

            const list = wrapper.find('[data-testid=liste-parametre__list-container]');

            expect(list.exists()).toBe(true);
        })
    })
})