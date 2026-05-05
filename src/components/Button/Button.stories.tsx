import { StoryFn, Meta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Default Button",
};

export const Selected = Template.bind({});
Selected.args = {
  text: "Selected Button",
  isSelected: true,
};

export const Dimmed = Template.bind({});
Dimmed.args = {
  text: "Dimmed Button",
  isDimmed: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: "Disabled button",
  disabled: true,
};
