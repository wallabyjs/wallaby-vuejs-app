import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('increments the counter when the button is clicked', () => {
    const wrapper = shallowMount(HelloWorld)

    for (let i = 0; i < 10; i++) {
      wrapper.find('button').trigger('click');
    }

    expect(wrapper.find('h1').text()).toBe("10");
  });
});