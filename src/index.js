import EditElement from './EditElement.vue';

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("edit-element", EditElement);
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

EditElement.install = install;

export default EditElement;