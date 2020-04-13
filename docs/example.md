<template>
  <div id="app">
    <vue-editable-element :text="text" :textarea="textarea=='textarea' ? true : false" :cssclass="'text'" @textupdatedblur="updatetxt"></vue-editable-element>
    <label for="">
        Input Filed? 
        <input type="radio" name="df" v-model="textarea" value="input">
    </label>
    <label for="">
        Textarea Filed? 
        <input type="radio" name="df" v-model="textarea" value="textarea">
    </label>

    <vue-editable-element :text="text" :textarea="textarea=='textarea' ? true : false" :cssclass="'text'" @textupdatedblur="updatetxt"></vue-editable-element>
  </div>
</template>

<script>
import VueEditableElement from '../src/VueEditableElement';
export default {
    name: 'App',
    components: {
        VueEditableElement
    },
    data: function(){
        return {
            textarea:'',
            text: 'Enter to edit dummy text', // empty place holder .. replace with your own localization for default
        }
    },
    methods: {
        updatetxt(d){
            this.text = d
            console.log(d);
        }
    }
}
</script>

