/** Copyright (c) 2016 WIMI5. All rights reserved. */ (function(){var d=void 0;var f=["PENGO","client","shared","storage","local"],h=this;!(f[0]in h)&&h.execScript&&h.execScript("var "+f[0]);for(var k;f.length&&(k=f.shift());){var l;if(l=!f.length)l=!1;l?h[k]=d:h=h[k]?h[k]:h[k]={}}
window.PENGO.client.shared.storage.local.resolve=function(){function c(){g=this;this.a={};this.b={}}function m(){try{return window.localStorage.setItem("trylocalstorage",1),window.localStorage.removeItem("trylocalstorage"),!0}catch(a){return!1}}var n=null,e,p,g;c.c=function(){null===n&&(n=new c);return n};c.prototype={getItem:function(a,b){if(m())return e=window.localStorage.getItem(a),b&&b(d,e),e;if(this.a.hasOwnProperty(a)&&this.a[a]===d||(e=this.a[a]))return b&&b(d,e),e;if(window.chrome&&window.chrome.storage&&
window.chrome.storage.local)window.chrome.storage.local.get(a,function(c){b&&b(d,c[a])});else return b&&b(d,this.b[a]),e},setItem:function(a,b,c){if(m())window.localStorage.setItem(a,b),c&&c();else if(this.a[a]=b,window.chrome&&window.chrome.storage&&window.chrome.storage.local)p={},p[a]=b,window.chrome.storage.local.set(p,function(){delete g.a[a];c&&c(d)});else return this.b[a]=b,delete g.a[a],c&&c(),e},removeItem:function(a,b){if(m())window.localStorage.removeItem(a),b&&b();else if(g.a[a]=d,window.chrome&&
window.chrome.storage&&window.chrome.storage.local)window.chrome.storage.local.remove(a,function(){delete g.a[a];b&&b(d)});else return delete g.b[a],delete g.a[a],b&&b(d),e}};c.prototype.getItem=c.prototype.getItem;c.prototype.setItem=c.prototype.setItem;c.prototype.removeItem=c.prototype.removeItem;return{dependencies:function(){},implementation:{Storage:c,getInstance:c.c}}};})();