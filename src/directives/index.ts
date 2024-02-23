import clickOutSide from "./click-outside";
import permission from "./permission";
import debounce from './debounce'

const directives = {
  permission,
  clickOutSide,
  debounce,
};

export default {
  install(app: any) {
    Object.keys(directives).forEach((key) => {
      app.directive(key, directives[key] );
    });
  },
};
