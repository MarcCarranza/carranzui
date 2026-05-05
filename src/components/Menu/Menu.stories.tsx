import { StoryFn, Meta } from "@storybook/react";
import Menu from "./Menu";

export default {
  title: "Components/Menu",
  component: Menu,
} as Meta<typeof Menu>;

const Template: StoryFn<typeof Menu> = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {};
