/** Copyright (c) 2016 WIMI5. All rights reserved. */ (function(){var f=void 0;Math.random();var g=["PENGO","client","shared","uiManager","uiManager"],h=this;!(g[0]in h)&&h.execScript&&h.execScript("var "+g[0]);for(var k;g.length&&(k=g.shift());){var l;if(l=!g.length)l=!1;l?h[k]=f:h=h[k]?h[k]:h[k]={}}
window.PENGO.client.shared.uiManager.uiManager.resolve=function(){function b(a,b,c){var d=this;this.model=new r;this.view=new s({model:this.model,templates:c,showViewCallback:a,hideViewCallback:b});this.addView=function(a,b){d.model.b(a,b)};this.removeView=function(a){d.model.c(a)};this.reportResizeEvent=function(){d.model.d()}}var c=f,d,e,m,n,p=Backbone.Model.extend({idAttribute:"_id",getModelId:function(){return this.id.substring(0,this.id.indexOf(b.prototype.a))},getViewId:function(){return this.id.substring(this.id.indexOf(b.prototype.a)+
b.prototype.a.length)}}),t=Backbone.Collection.extend({model:p}),r=Backbone.Model.extend({defaults:function(){return{views:new t}},b:function(a,q){if(!(a instanceof m))throw c.error("The view must be a Backbone view. It's not added."),new d("The view must be a Backbone view. It's not added.",e.INVALID_TYPE);if(!a.options.viewsMgr||!a.options.viewsMgr instanceof n)throw c.error("This PengoView should have a reference to a views manager in a 'viewsMgr' property. It's not added."),new d("This PengoView should have a reference to a views manager in a 'viewsMgr' property. It's not added.",
e.INVALID_CONFIG);if(a.model.id===f)throw c.error(a+" PengoView's model must have a defined id. It's not added."),new d(a+" PengoView's model must have a defined id. It's not added.",e.INVALID_CONFIG);if(a.options.viewsMgr.getView(a.model.id,a.cid)===f)throw c.error("PengoView with id '"+a.model.id+b.prototype.a+a.cid+"' should be referenced into its views manager. It's not added."),new d("PengoView with id '"+a.model.id+b.prototype.a+a.cid+"' should be referenced into its views manager. It's not added.",
e.INVALID_CONFIG);if(this.get("views").get(a.model.id+b.prototype.a+a.cid))throw c.warn("PengoView with id '"+a.model.id+b.prototype.a+a.cid+"' is already added."),new d("PengoView with id '"+a.model.id+b.prototype.a+a.cid+"' is already added.",e.ALREADY_SET);this.get("views").add(new p({_id:a.model.id+b.prototype.a+a.cid,view:a,resizeCallback:q}));c.debug("PengoView added with id '"+a.model.id+b.prototype.a+a.cid+"'")},c:function(a){if(a.model.id===f)throw c.error(a+" PengoView's model must have a defined id. It's not removed."),
new d(a+" PengoView's model must have a defined id. It's not removed.",e.INVALID_CONFIG);this.get("views").get(a.model.id+b.prototype.a+a.cid)?(this.get("views").remove([this.get("views").get(a.model.id+b.prototype.a+a.cid)]),c.debug("PengoView with id "+a.model.id+b.prototype.a+a.cid+" removed.")):c.warn("PengoView with id "+a.model.id+b.prototype.a+a.cid+" is not stored, so it can't be removed!.")},d:function(){this.get("views").each(function(a){a.get("resizeCallback")&&a.get("resizeCallback")()})}}),
s=Backbone.View.extend({initialize:function(){if(this.options.showViewCallback===f||"function"!==typeof this.options.showViewCallback)throw c.error("To create this view a reference to a function in a 'showAddedCallback' construction option is needed"),new d("A reference to a function in a 'showAddedCallback' construction option is needed",e.NOT_FOUND);if(this.options.hideViewCallback===f||"function"!==typeof this.options.hideViewCallback)throw c.error("A reference to a function in a 'hideViewCallback' construction option is needed"),
new d("A reference to a function in a 'hideViewCallback' construction option is needed",e.NOT_FOUND);this.model.get("views").on("add",this.options.showViewCallback,this);this.model.get("views").on("remove",this.options.hideViewCallback,this);this.render(this.options.templates)},render:function(a){this.el=document.getElementById("pengoApp");null===this.el&&(this.el=document.createElement("div"),this.el.id="pengoApp",$("body").append(this.el));if(a)for(var b in a)$(this.el).append(_.template(a[b])())}});
b.prototype={a:"_viewId=",e:function(a){c=a},start:function(){$(window).on("resize",this.reportResizeEvent)},stop:function(){$(window).off("resize",this.reportResizeEvent)}};b.prototype.setLogger=b.prototype.e;b.prototype.start=b.prototype.start;b.prototype.stop=b.prototype.stop;return{dependencies:function(a){d=a.pengoError.pengoError.PengoError;e=a.pengoError.codes.codes;m=a.bbWrappers.pengoView.PengoView;n=a.bbWrappers.viewsManager.ViewsManager},implementation:{UIManager:b}}};})();