function parse_media_html_attributes(w){var x="";if(w.indexOf("<object ")!=-1){var o=w.split("<object ");for(i=0;i<o.length;i++){var m=o[i].split(">");for(z=0;z<m.length;z++){if(m[z].indexOf('type="application/x-shockwave-flash"')!=-1||m[z].indexOf('type="video/quicktime"')!=-1||m[z].indexOf('type="application/x-mplayer2"')!=-1||m[z].indexOf('type="audio/x-pn-realaudio-plugin"')!=-1){var f=m[z].split(" ");var s="";var n="";var v="";var e="";for(y=0;y<f.length;y++){if(f[y].indexOf("type=")!=-1){s=f[y]+" "}else{if(f[y].indexOf("data=")!=-1){var h=f[y];var g=h.substring(h.length-4,h.length-1).toLowerCase();if(g=="flv"){n='data="../templates/flowPlayer.swf" '}else{n=f[y]+" "}}else{v+=f[y]+" "}}}e=s+n+v;e=e.replace(/\s+\S*$/,"");x+=e}else{var l=false;if(m[z].indexOf('<param name="flv_src" value="')==0){l=true;var k=o[i].split("config={'playlist': [ { 'url': '");if(k.length>1){k=k[1];k=k.split("'");x+='<param name="flv_src" value="'+k[0]+'" />'}}else{if(m[z].indexOf('<param name="flashvars" value="')==0){var u=m[z].replace('<param name="flashvars" value="',"").replace('"',"");var j=u.replace("url=","");j=j.split("&")[0];if(j.split(".").pop().toLowerCase()=="flv"){var t="config={'playlist': [ { 'url': '"+j+"', 'autoPlay': false, 'autoBuffering': true } ] }";x+='<param name="flashvars" value="'+t+'" /'}else{x+=m[z]}}else{x+=m[z]}}}if(z<(m.length-1)&&!l){x+=">"}}if(i<(o.length-1)){x+="<object "}}var a='"http://'+window.location.host+"/templates/flowPlayer.swf";var p=new RegExp(a,"g");x=x.replace(p,'"../templates/flowPlayer.swf');var d='"http://'+window.location.host+"/templates/xspf_player.swf";var r=new RegExp(d,"g");x=x.replace(r,'"../templates/xspf_player.swf');var a="http://"+window.location.host+"/"+encodeURIComponent(exe_package_name)+"/";var p=new RegExp(a,"g");x=x.replace(p,"");var b="http://"+window.location.host;var q=new RegExp(b,"g");x=x.replace(q,"")}else{x=w}if(typeof(exe_export_format)!='undefined'&&exe_export_format=="html5"&&x.indexOf("<iframe ")!=-1){var r='';var c_parts=x.split("<iframe ");for(i=0;i<c_parts.length;i++){var c_parts_2=c_parts[i].split(">");for(z=0;z<c_parts_2.length;z++){var p=c_parts_2[z];if(p.indexOf(' style="')==-1&&p.indexOf('width="')==0&&(p.substr(p.length-15)=='frameborder="0"'||p.substr(p.length-34)=='frameborder="0" allowfullscreen=""')){p=p.replace(' frameborder="0"',' style="border:0"')}r+=p;if(z<c_parts_2.length-1)r+=">"}if(i<(c_parts.length-1))r+="<iframe "}x=r}return x}(function(){var b=tinymce.explode("id,name,width,height,style,align,class,hspace,vspace,bgcolor,type"),a=tinymce.makeMap(b.join(",")),f=tinymce.html.Node,d,j,h=tinymce.util.JSON,g;d=[["Flash","d27cdb6e-ae6d-11cf-96b8-444553540000","application/x-shockwave-flash","http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"],["ShockWave","166b1bca-3f9c-11cf-8075-444553540000","application/x-director","http://download.macromedia.com/pub/shockwave/cabs/director/sw.cab#version=8,5,1,0"],["WindowsMedia","6bf52a52-394a-11d3-b153-00c04f79faa6,22d6f312-b0f6-11d0-94ab-0080c74c7e95,05589fa1-c356-11ce-bf01-00aa0055595a","application/x-mplayer2","http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=5,1,52,701"],["QuickTime","02bf25d5-8c17-4b23-bc80-d3488abddc6b","video/quicktime","http://www.apple.com/qtactivex/qtplugin.cab#version=6,0,2,0"],["RealMedia","cfcdaa03-8be4-11cf-b84b-0020afbbccfa","audio/x-pn-realaudio-plugin","http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"],["Java","8ad9c840-044e-11d1-b3e9-00805f499d93","application/x-java-applet","http://java.sun.com/products/plugin/autodl/jinstall-1_5_0-windows-i586.cab#Version=1,5,0,0"],["Silverlight","dfeaf541-f3e1-4c24-acac-99c30715084a","application/x-silverlight-2"],["Iframe"],["Video"],["EmbeddedAudio"],["Audio"]];function e(k){return typeof(k)=="string"?k.replace(/[^0-9%]/g,""):k}function c(n){var m,k,l;if(n&&!n.splice){k=[];for(l=0;true;l++){if(n[l]){k[l]=n[l]}else{break}}return k}return n}tinymce.create("tinymce.plugins.MediaPlugin",{init:function(o,k){var s=this,m={},n,q,r,l;function p(t){return t&&t.nodeName==="IMG"&&o.dom.hasClass(t,"mceItemMedia")}s.editor=o;s.url=k;j="";for(n=0;n<d.length;n++){l=d[n][0];r={name:l,clsids:tinymce.explode(d[n][1]||""),mimes:tinymce.explode(d[n][2]||""),codebase:d[n][3]};for(q=0;q<r.clsids.length;q++){m["clsid:"+r.clsids[q]]=r}for(q=0;q<r.mimes.length;q++){m[r.mimes[q]]=r}m["mceItem"+l]=r;m[l.toLowerCase()]=r;j+=(j?"|":"")+l}tinymce.each(o.getParam("media_types","video=mp4,m4v,ogv,webm;silverlight=xap;flash=swf,flv;shockwave=dcr;quicktime=mov,qt,mpg,mpeg;shockwave=dcr;windowsmedia=avi,wmv,wm,asf,asx,wmx,wvx;realmedia=rm,ra,ram;java=jar;audio=mp3,ogg").split(";"),function(w){var t,v,u;w=w.split(/=/);v=tinymce.explode(w[1].toLowerCase());for(t=0;t<v.length;t++){u=m[w[0].toLowerCase()];if(u){m[v[t]]=u}}});j=new RegExp("write("+j+")\\(([^)]+)\\)");s.lookup=m;o.onPreInit.add(function(){o.schema.addValidElements("object[id|style|width|height|classid|codebase|*],param[name|value],embed[id|style|width|height|type|src|*],video[*],audio[*],source[*]");o.parser.addNodeFilter("object,embed,video,audio,script,iframe",function(t){var u=t.length;while(u--){s.objectToImg(t[u])}});o.serializer.addNodeFilter("img",function(t,v,u){var w=t.length,x;while(w--){x=t[w];if((x.attr("class")||"").indexOf("mceItemMedia")!==-1){s.imgToObject(x,u)}}})});o.onInit.add(function(){if(o.theme&&o.theme.onResolveName){o.theme.onResolveName.add(function(t,u){if(u.name==="img"&&o.dom.hasClass(u.node,"mceItemMedia")){u.name="media"}})}if(o&&o.plugins.contextmenu){o.plugins.contextmenu.onContextMenu.add(function(u,v,t){if(t.nodeName==="IMG"&&t.className.indexOf("mceItemMedia")!==-1){v.add({title:"media.edit",icon:"media",cmd:"mceMedia"})}})}});o.addCommand("mceMedia",function(){var u,t;t=o.selection.getNode();if(p(t)){u=o.dom.getAttrib(t,"data-mce-json");if(u){u=h.parse(u);tinymce.each(b,function(v){var w=o.dom.getAttrib(t,v);if(w){u[v]=w}});u.type=s.getType(t.className).name.toLowerCase()}}if(!u){u={type:"video",video:{sources:[]},params:{}}}o.windowManager.open({file:k+"/media.htm",width:430+parseInt(o.getLang("media.delta_width",0)),height:500+parseInt(o.getLang("media.delta_height",0)),inline:1},{plugin_url:k,data:u})});o.addButton("media",{title:"media.desc",cmd:"mceMedia"});o.onNodeChange.add(function(u,t,v){t.setActive("media",p(v))});o.onSaveContent.add(function(t,u){u.content=parse_media_html_attributes(u.content)});o.onInit.add(function(){o.dom.loadCSS(k+"/css/content.css")})},convertUrl:function(m,p){var l=this,o=l.editor,n=o.settings,q=n.url_converter,k=n.url_converter_scope||l;if(!m){return m}if(p){return o.documentBaseURI.toAbsolute(m)}return q.call(k,m,"src","object")},getInfo:function(){return{longname:"Media",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/media",version:tinymce.majorVersion+"."+tinymce.minorVersion}},dataToImg:function(n,l){var s=this,p=s.editor,q=p.documentBaseURI,k,r,o,m;n.params.src=s.convertUrl(n.params.src,l);r=n.video.attrs;if(r){r.src=s.convertUrl(r.src,l)}if(r){r.poster=s.convertUrl(r.poster,l)}k=c(n.video.sources);if(k){for(m=0;m<k.length;m++){k[m].src=s.convertUrl(k[m].src,l)}}o=s.editor.dom.create("img",{id:n.id,style:n.style,align:n.align,hspace:n.hspace,vspace:n.vspace,src:s.editor.theme.url+"/img/trans.gif","class":"mceItemMedia mceItem"+s.getType(n.type).name,"data-mce-json":h.serialize(n,"'")});o.width=n.width=e(n.width||(n.type=="audio"?"300":"320"));o.height=n.height=e(n.height||(n.type=="audio"?"32":"240"));return o},dataToHtml:function(k,l){return this.editor.serializer.serialize(this.dataToImg(k,l),{forced_root_block:"",force_absolute:l})},htmlToData:function(m){var l,k,n;n={type:"flash",video:{sources:[]},params:{}};l=this.editor.parser.parse(m);k=l.getAll("img")[0];if(k){n=h.parse(k.attr("data-mce-json"));n.type=this.getType(k.attr("class")).name.toLowerCase();tinymce.each(b,function(o){var p=k.attr(o);if(p){n[o]=p}})}return n},getType:function(n){var l,k,m;k=tinymce.explode(n," ");for(l=0;l<k.length;l++){m=this.lookup[k[l]];if(m){return m}}},imgToObject:function(C,p){var v=this,q=v.editor,F,K,k,u,L,B,J,x,l,H,t,r,D,G,o,A,m,E,I;function s(n,M){var Q,P,R,O,N;N=q.getParam("flash_video_player_url",v.convertUrl(v.url+"/moxieplayer.swf"));if(N){Q=q.documentBaseURI;J.params.src=n;if(q.getParam("flash_video_player_absvideourl",true)){n=Q.toAbsolute(n||"",true);M=Q.toAbsolute(M||"",true)}R="";P=q.getParam("flash_video_player_flashvars",{url:"$url",poster:"$poster"});tinymce.each(P,function(T,S){T=T.replace(/\$url/,n||"");T=T.replace(/\$poster/,M||"");if(T.length>0){R+=(R?"&":"")+S+"="+escape(T)}});if(R.length){J.params.flashvars=R}O=q.getParam("flash_video_player_params",{allowfullscreen:true,allowscriptaccess:true});tinymce.each(O,function(T,S){J.params[S]=""+T})}}J=C.attr("data-mce-json");if(!J){return}J=h.parse(J);r=this.getType(C.attr("class"));E=C.attr("data-mce-style");if(!E){E=C.attr("style");if(E){E=q.dom.serializeStyle(q.dom.parseStyle(E,"img"))}}J.width=C.attr("width")||J.width;J.height=C.attr("height")||J.height;if(r.name==="Iframe"){A=new f("iframe",1);tinymce.each(b,function(n){var M=C.attr(n);if(n=="class"&&M){M=M.replace(/mceItem.+ ?/g,"")}if(M&&M.length>0){A.attr(n,M)}});for(L in J.params){A.attr(L,J.params[L])}A.attr({style:E,src:J.params.src});C.replace(A);return}if(this.editor.settings.media_use_script){A=new f("script",1).attr("type","text/javascript");B=new f("#text",3);B.value="write"+r.name+"("+h.serialize(tinymce.extend(J.params,{width:C.attr("width"),height:C.attr("height")}))+");";A.append(B);C.replace(A);return}if(r.name==="Video"&&J.video.sources[0]){F=new f("video",1).attr(tinymce.extend({id:C.attr("id"),width:e(C.attr("width")),height:e(C.attr("height")),style:E},J.video.attrs));if(J.video.attrs){m=J.video.attrs.poster}l=J.video.sources=c(J.video.sources);for(D=0;D<l.length;D++){if(/\.mp4$/.test(l[D].src)){o=l[D].src}}if(!l[0].type){F.attr("src",l[0].src);l.splice(0,1)}for(D=0;D<l.length;D++){x=new f("source",1).attr(l[D]);x.shortEnded=true;F.append(x)}J.params.src=""}if(r.name==="Audio"&&J.video.sources[0]){I=new f("audio",1).attr(tinymce.extend({id:C.attr("id"),width:e(C.attr("width")),height:e(C.attr("height")),style:E},J.video.attrs));if(J.video.attrs){m=J.video.attrs.poster}l=J.video.sources=c(J.video.sources);if(!l[0].type){I.attr("src",l[0].src);l.splice(0,1)}for(D=0;D<l.length;D++){x=new f("source",1).attr(l[D]);x.shortEnded=true;I.append(x)}J.params.src=""}if(r.name==="EmbeddedAudio"){k=new f("embed",1);k.shortEnded=true;k.attr({id:C.attr("id"),width:e(C.attr("width")),height:e(C.attr("height")),style:E,type:C.attr("type")});for(L in J.params){k.attr(L,J.params[L])}tinymce.each(b,function(n){if(J[n]&&n!="type"){k.attr(n,J[n])}});J.params.src=""}if(J.params.src){if(/\.flv$/i.test(J.params.src)){s(J.params.src,"")}if(p&&p.force_absolute){J.params.src=q.documentBaseURI.toAbsolute(J.params.src)}K=new f("object",1).attr({id:C.attr("id"),width:e(C.attr("width")),height:e(C.attr("height")),style:E});tinymce.each(b,function(n){var M=J[n];if(n=="class"&&M){M=M.replace(/mceItem.+ ?/g,"")}if(M&&n!="type"){K.attr(n,M)}});for(L in J.params){t=new f("param",1);t.shortEnded=true;B=J.params[L];if(L==="src"&&r.name==="WindowsMedia"){L="url"}t.attr({name:L,value:B});K.append(t)}if(this.editor.getParam("media_strict",true)){K.attr({data:J.params.src,type:r.mimes[0]})}else{K.attr({classid:"clsid:"+r.clsids[0],codebase:r.codebase});k=new f("embed",1);k.shortEnded=true;k.attr({id:C.attr("id"),width:e(C.attr("width")),height:e(C.attr("height")),style:E,type:r.mimes[0]});for(L in J.params){k.attr(L,J.params[L])}tinymce.each(b,function(n){if(J[n]&&n!="type"){k.attr(n,J[n])}});K.append(k)}if(J.object_html){B=new f("#text",3);B.raw=true;B.value=J.object_html;K.append(B)}if(F){F.append(K)}}if(F){if(J.video_html){B=new f("#text",3);B.raw=true;B.value=J.video_html;F.append(B)}}if(I){if(J.video_html){B=new f("#text",3);B.raw=true;B.value=J.video_html;I.append(B)}}var w=F||I||K||k;if(w){C.replace(w)}else{C.remove()}},objectToImg:function(F){var O,l,I,t,P,Q,B,D,A,J,H,u,r,L,E,m,N,p,K=this.lookup,n,C,w=this.editor.settings.url_converter,o=this.editor.settings.url_converter_scope,x,s,G,k;function v(R){return new tinymce.html.Serializer({inner:true,validate:false}).serialize(R)}function M(S,R){return K[(S.attr(R)||"").toLowerCase()]}function q(S){var R=S.replace(/^.*\.([^.]+)$/,"$1");return K[R.toLowerCase()||""]}if(!F.parent){return}if(F.name==="script"){if(F.firstChild){n=j.exec(F.firstChild.value)}if(!n){return}p=n[1];N={video:{},params:h.parse(n[2])};D=N.params.width;A=N.params.height}N=N||{video:{},params:{}};P=new f("img",1);P.attr({src:this.editor.theme.url+"/img/trans.gif"});Q=F.name;if(Q==="video"||Q=="audio"){I=F;O=F.getAll("object")[0];l=F.getAll("embed")[0];D=I.attr("width");A=I.attr("height");B=I.attr("id");N.video={attrs:{},sources:[]};C=N.video.attrs;for(Q in I.attributes.map){C[Q]=I.attributes.map[Q]}E=F.attr("src");if(E){N.video.sources.push({src:w.call(o,E,"src",F.name)})}m=I.getAll("source");for(H=0;H<m.length;H++){E=m[H].remove();N.video.sources.push({src:w.call(o,E.attr("src"),"src","source"),type:E.attr("type"),media:E.attr("media")})}if(C.poster){C.poster=w.call(o,C.poster,"poster",F.name)}}if(F.name==="object"){O=F;l=F.getAll("embed")[0]}if(F.name==="embed"){l=F}if(F.name==="iframe"){t=F;p="Iframe"}if(O){D=D||O.attr("width");A=A||O.attr("height");J=J||O.attr("style");B=B||O.attr("id");x=x||O.attr("hspace");s=s||O.attr("vspace");G=G||O.attr("align");k=k||O.attr("bgcolor");N.name=O.attr("name");L=O.getAll("param");for(H=0;H<L.length;H++){r=L[H];Q=r.remove().attr("name");if(!a[Q]){N.params[Q]=r.attr("value")}}N.params.src=N.params.src||O.attr("data")}if(l){D=D||l.attr("width");A=A||l.attr("height");J=J||l.attr("style");B=B||l.attr("id");x=x||l.attr("hspace");s=s||l.attr("vspace");G=G||l.attr("align");k=k||l.attr("bgcolor");for(Q in l.attributes.map){if(!a[Q]&&!N.params[Q]){N.params[Q]=l.attributes.map[Q]}}}if(t){D=e(t.attr("width"));A=e(t.attr("height"));J=J||t.attr("style");B=t.attr("id");x=t.attr("hspace");s=t.attr("vspace");G=t.attr("align");k=t.attr("bgcolor");tinymce.each(b,function(R){P.attr(R,t.attr(R))});for(Q in t.attributes.map){if(!a[Q]&&!N.params[Q]){N.params[Q]=t.attributes.map[Q]}}}if(N.params.movie){N.params.src=N.params.src||N.params.movie;delete N.params.movie}if(N.params.src){N.params.src=w.call(o,N.params.src,"src","object")}if(I){if(F.name==="video"){p=K.video.name}else{if(F.name==="audio"){p=K.audio.name}}}if(O&&!p){p=(M(O,"clsid")||M(O,"classid")||M(O,"type")||{}).name}if(l&&!p){p=(M(l,"type")||q(N.params.src)||{}).name}if(l&&p=="EmbeddedAudio"){N.params.type=l.attr("type")}F.replace(P);if(l){l.remove()}if(O){u=v(O.remove());if(u){N.object_html=u}}if(I){u=v(I.remove());if(u){N.video_html=u}}N.hspace=x;N.vspace=s;N.align=G;N.bgcolor=k;P.attr({id:B,"class":"mceItemMedia mceItem"+(p||"Flash"),style:J,width:D||(F.name=="audio"?"300":"320"),height:A||(F.name=="audio"?"32":"240"),hspace:x,vspace:s,align:G,bgcolor:k,"data-mce-json":h.serialize(N,"'")})}});tinymce.PluginManager.add("media",tinymce.plugins.MediaPlugin)})();