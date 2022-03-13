import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Modal } from "./Modal";

export default {
  title: "Components/Modal/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Hello World",
  title: "Modal",
};
