import {describe, expect, it} from "vitest";
import {mount} from "@vue/test-utils";
import App from '@/src/App.vue';

describe('App', () => {
    describe('render', () => {
        it('should render correctly', () => {
            const wrapper = mount(App);

            expect(wrapper.html()).toMatchSnapshot();
        })
    })
})