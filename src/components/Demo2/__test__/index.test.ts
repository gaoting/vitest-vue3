import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

import Demo2 from "../index.vue";

describe("Demo2", () => {
  test("renders a message and responds correctly to user input", async () => {
    const wrapper = shallowMount(Demo2, {
      props: {
        message: "hello",
        name: "",
      },
    });

    expect(wrapper.find(".message").text()).toEqual("hello");

    expect(wrapper.find(".error").exists()).toBeTruthy();

    await wrapper.setProps({ name: "Luna" });
    expect(wrapper.find(".error").exists()).toBeTruthy();
  });

  test('displays an error message if the name has less than 7 letters', async () => {  
    const wrapper = shallowMount(Demo2, {  
      props: {  
        message: 'Hello, world!',  
        name: ''  
      }  
    });  
  
    await wrapper.setProps({ name: "Luna" });
    expect(wrapper.find('.error').exists()).toBeTruthy();
    expect(wrapper.find('.error').text()).toEqual('Please enter a name with at least seven letters.');  
  }); 
});
