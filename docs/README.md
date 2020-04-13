# vue-editable-element

#Installation

#NPM
```
npm i vue-editable-element -S
```

## Usage As plugin
```js
import Vue from 'vue'
import VueEditableElement from 'vue-editable-element'

Vue.use(VueEditableElement)
```

```vue
<template>
    <div>
		<vue-editable-element 
	    	:text="'aaaaaaaaaaaaaaaaa'"
	    	:cssclass="'w-full t-input t-input-size-default t-input-status-default border block rounded p-2 bg-white'"
	    	:textarea='true'
	    	@textupdatedblur="updatedesc"
	    >
	    </vue-editable-element>
    </div>
</template>

<script>
    export default {
        methods:{
        	updatedesc(data){
        		console.log(data)
        	}
        }
    }
</script>
```

## Available props
The component accepts these props:

| Attribute        | Type                   | Default     	| Description       |
| :---             | :---:                  | :---:       	| :---              |
| text  		   | String                 | :---: 	    | Set the value you want to edit
| placeholder      | String                 | :---:		 	| Set label value    
| textarea         | Boolean                | `false`      	| if you want to use textarea use `true`; |
| cssclass         | type                   | ``      	    | css class for design the input element |

## Available $emmit
The component send $emmit event to update date to api:
( textupdatedblur ) the emmit occer when the input date is update so you can catch data from parent component to update the data
