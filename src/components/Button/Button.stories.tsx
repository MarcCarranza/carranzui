import { StoryFn, Meta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Disabled button",
  disabled: true,
};
