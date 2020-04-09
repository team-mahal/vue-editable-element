<template>
  <div id="app">
    <vue-editable-element :textarea="true" :cssclass="'text'" @textupdatedblur="updatetxt"></vue-editable-element>
  </div>
</template>

<script>
import VueEditableElement from './VueEditableElement';
export default {
  name: 'App',
  components: {
    VueEditableElement
  },
  methods: {
  updatetxt(d){
  console.log(d);
  }
  }
}
</script>

