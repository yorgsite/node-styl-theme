# node-styl-theme
theming tool for therminal with [node-styl](https://www.npmjs.com/package/node-styl) and [node-styl-rgb](https://www.npmjs.com/package/node-styl-rgb).

<hr/>
TODO ...

<hr/>

**Exemple**
```javascript

const Theme= require('node-styl-theme');
let theme=Theme.c16m.get({
	$alias1:[255,0,0],
	exemple1:{
		front:'alias1',
		back:[0,0,255]
	}
});
let theme16=Theme.c16.get({
	$alias1:'green',
	exemple1:{
		front:'alias1',
		back:'red',
		style:['bold']
	}
});

console.log("___ "+theme.exemple1('world'));
console.log("___ "+theme16.exemple1('world'));

let themejson=Theme.c16m.load('./test-theme.json');
console.log("___ "+themejson.exemple1('world'));

 ```
with **test-theme.json** as
```javascript
{
	"$alias1":[255,0,0],
	"exemple1":{
		"front":"alias1",
		"back":[0,0,255]
	}
}
```
