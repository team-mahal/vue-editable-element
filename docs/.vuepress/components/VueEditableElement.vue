<template>
	<div>
		<div @click="onLabelClick" v-if="!edit">{{vlabel}}</div>
		<div v-if="textarea">
			<textarea
				type="text"
				v-if="edit"
				:class="cssclass"
				v-model="label"
				v-on:blur="updateTextBlur"
				ref="vueeditableelement"
				:placeholder="vplaceholder"
				@keyup.enter="updateTextEnter">
			</textarea>
		</div>
		<div v-else>
			<input
				type="text"
				v-if="edit"
				:class="cssclass"
				v-model="label"
				v-on:blur="updateTextBlur"
				ref="vueeditableelement"
				:placeholder="vplaceholder"
				@keyup.enter="updateTextEnter"
			/>
		</div>
	</div>
</template>
<script>
export default{
	name: 'VueEditableElement',
	data: function(){
		return {
			edit: false, // define whether it is in edit mode or not
			label: '', // v-bind data model for input text
			empty: 'Enter some text value', // empty place holder .. replace with your own localization for default
		}
	},
	props: {
		text:String,
		placeholder:{
			type:String,
			default: "Enter some text value",
		},
		textarea:{
			type:Boolean,
			default: false,
		},
		cssclass:{
			type:String,
			default: '',
		},
	}, // parent should provide :text or :placeholder
	methods: {
		initText: function(){
			if(this.text==''||this.text==undefined){
				this.label = this.vlabel
			}else{
				this.label = this.text
			}
		},
		// when the div label got clicked and trigger the text box
		onLabelClick: function(){
			this.edit = true;
			this.label = this.text;
		},
		// trigger when textbox got lost focus
		updateTextBlur: function(){
			// update the edit mode to false .. display div label text
			this.edit = false;
			// emit text updated callback
			this.$emit('textupdatedblur',this.label)
		},
		updateTextEnter: function(){
			this.edit = false;
			this.$emit('text-updated-enter',this.label)
		}
	},
	computed: {
		vplaceholder: function(){
			// check if the placeholder is undefined or empty
			if(this.placeholder==undefined || this.placeholder==''){
				// if it is empty or undefined, pre-populate with built-in place holder text
				return this.empty
			}else{
				return this.placeholder
			}
		},
		vlabel: function(){
			// after text has been updated
			// return text value or place holder value depends on value of the text
			if(this.text==undefined||this.text==''){
				return this.vplaceholder
			}else{
				return this.label
			}
		}
	},
	mounted: function(){
		// initiate the label view
		this.initText();
	},
	updated: function(){
		var ed = this.$refs.vueeditableelement;
		if(ed!=null){
			ed.focus();
		}
	},
	watch: {
		text: function(value){
			if(value==''||value==undefined){
				this.label = this.vplaceholder
			}else{
				this.label = value
			}
		}
	}
}
</script>
