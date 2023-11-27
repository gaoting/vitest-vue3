import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

import Demo1 from "../components/Demo1.vue";

describe("Demo1", () => {
  test("demo mounted", async () => {
    expect(Demo1).toBeTruthy();

    const wrapper = mount(Demo1, {
      props: {
        count: 4,
      },
    });

    await wrapper.get("button").trigger("click");

    expect(wrapper.text()).toContain("4 x 3 = 12");

    await wrapper.get("button").trigger("click");
    expect(wrapper.text()).toContain("4 x 4 = 16");
  });
});
