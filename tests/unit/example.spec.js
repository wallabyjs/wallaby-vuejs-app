import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('increments the counter when the button is clicked', async () => {
    const wrapper = mount(HelloWorld)

    for (let i = 0; i < 10; i++) {
      await wrapper.find('button').trigger('click');
    }

    expect(wrapper.find('h1').text()).toBe("10");
  });
});