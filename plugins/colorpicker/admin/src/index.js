import pluginPkg from "../../package.json";
import pluginId from "./pluginId";
import App from "./containers/App";
import Initializer from "./containers/Initializer";
import lifecycles from "./lifecycles";
import trads from "./translations";

import ColorPicker from "./components/colorPicker/index";

export default (strapi) => {
  const pluginDescription = "A color picker for Strapi";

  const icon = pluginPkg.strapi.icon;
  const name = pluginPkg.strapi.name;

  const plugin = {
    blockerComponent: null,
    blockerComponentProps: {},
    description: pluginDescription,
    icon: pluginPkg.strapi.icon,
    id: pluginId,
    initializer: () => null,
    injectedComponents: [],
    isReady: true,
    leftMenuLinks: [],
    leftMenuSections: [],
    mainComponent: null,
    name: pluginPkg.strapi.name,
    preventComponentRendering: false,
    trads: {},
  };

  strapi.registerField({ type: "colorpicker", Component: ColorPicker });

  return strapi.registerPlugin(plugin);
};
