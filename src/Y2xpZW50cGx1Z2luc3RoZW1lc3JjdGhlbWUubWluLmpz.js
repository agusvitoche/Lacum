/** Copyright (c) 2016 WIMI5. All rights reserved. */ (function(){var a=["PENGO","client","plugins","theme","activator"],b=this;!(a[0]in b)&&b.execScript&&b.execScript("var "+a[0]);for(var c;a.length&&(c=a.shift());){var e;if(e=!a.length)e=!1;e?b[c]=void 0:b=b[c]?b[c]:b[c]={}}
(function(){var d,f;window.PENGO.client.plugins.theme.activator.activator=function(g){return{start:function(h){f={functions:{},properties:{}};d=h;d.register("theme",f);d.getService("igloo.logger")[0]&&d.getService("igloo.logger")[0].debug("Service Theme registered");g.require.remove.deleteByName("PENGO.client.plugins.theme.theme")},stop:function(){d.unregister("theme",f)}}}})();})();