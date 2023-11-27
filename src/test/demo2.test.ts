import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

import Demo2 from "../components/Demo2.vue";

describe("world",()=>{
  test("renders a message and responds correctly to user input",async()=>{
    const wrapper = shallowMount(Demo2,{
      props: {
        message: 'hello',
        username: ''
      }
    })

    expect(wrapper.find(".message").text()).toEqual("hello")

    expect(wrapper.find(".error").exists()).toBeTruthy()

    await wrapper.setProps({username: "Luna"})
    expect(wrapper.find(".error").exists()).toBeFalsy()
  })
})
