YUI.add("yui-later",function(b){var a=[];b.later=function(c,g,d,f,e){c=c||0;f=(!b.Lang.isUndefined(f))?b.Array(f):f;var j=(g&&b.Lang.isString(d))?g[d]:d,i=function(){if(!j.apply){j(f[0],f[1],f[2],f[3]);}else{j.apply(g,f||a);}},h=(e)?setInterval(i,c):setTimeout(i,c);return{id:h,interval:e,cancel:function(){if(this.interval){clearInterval(h);}else{clearTimeout(h);}}};};b.Lang.later=b.later;},"@VERSION@",{requires:["yui-base"]});