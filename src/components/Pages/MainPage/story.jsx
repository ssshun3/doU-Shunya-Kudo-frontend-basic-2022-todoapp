import React from "react";
import Component from "./index";
import { AlertHandlerProvider } from "../../../contexts/alert_handler";
import AlertManager from "../../Organisms/AlertManager";
export default {
  component: Component,
  title: "Pages/MainPage",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => (
  <AlertHandlerProvider>
    <Component {...args} />
    <AlertManager />
  </AlertHandlerProvider>
);

export const Default = Template.bind({});
Default.args = {};
