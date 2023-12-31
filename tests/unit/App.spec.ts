import {describe, expect, it} from "vitest";
import {mount} from "@vue/test-utils";
import App from "@/App.vue";
import Titre from "@/components/Titre.vue";

const generateWrapper = () => mount(App);

describe('App', () => {
    describe('render', () => {
        it('should render correctly', () => {
            const wrapper = generateWrapper();

            expect(wrapper.html()).toMatchSnapshot();
        });
        it('should have title', () => {
            const wrapper = generateWrapper()

            const titleComponent = wrapper.findComponent(Titre);

            expect(titleComponent.exists()).toBe(true);
        });
    })
})