
var styl	=require('node-styl');
var rgbstyl	=require('node-styl-rgb');

var StylTheme	= require('styl-abstract-theme');


var build={};
build.c16=function(){
	return new StylTheme(function(txt){
		let st = styl();
		if(this.front)st[this.front];
		if(this.back)st[this.back+'BG'];
		if(this.style.length)this.style.forEach(s=>st[s]);
		return st;
	});
};
build.rgb=function(type){
	return new StylTheme(function(txt){
		let st = rgbstyl[type]();
		if(this.front)st.front(this.front);
		if(this.back)st.back(this.back);
		if(this.style.length)this.style.forEach(s=>st[s]);
		return st;
	});
};

var STheme=function(type){
	var stheme=build[(type==='c256'||type==='c16m')?'rgb':'c16'](type);

	this.get=function(data){
		return stheme.get(data);
	};
	this.load=function(src){
		return stheme.load(src);
	};
};

var Theme={};

Theme['c16']	= new STheme('c16');
Theme['c256']	= new STheme('c256');
Theme['c16m']	= new STheme('c16m');

module.exports = Theme;
