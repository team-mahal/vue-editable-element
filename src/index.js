import VueEditableElement from './VueEditableElement';

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("vue-editable-element", VueEditableElement);
}

const plugin = {
  install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

VueEditableElement.install = install;

export default VueEditableElement;