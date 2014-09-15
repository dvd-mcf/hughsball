/*
	Big Picture by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

/* skel.js v1.0 | (c) n33 | n33.co | MIT licensed */
var skel=function(){var e="config",t="breakpoints",n="iterate",r="stateId",i="elements",s="getElementsByClassName",o="stateElements",u=!1,a="getElementsByTagName",f="length",l="parentNode",c=null,h="gutters",p="insertBefore",d=" 0 0 ",v="push",m="className",g="getCachedElement",y="!important",b="object",w="newInline",E="grid",S="config_breakpoint",x="orientationChange",T="locations",N="parseMeasurement",C="match",k="createElement",L="padding-top:0!important",A="deviceType",O="newElement",M="substring",_=!0,D="cache",P="viewport",H="cacheElement",B="}",j="_skel_isReversed",F="head",I="vars",q="containers",R="indexOf",U="replace",z="padding-top:",W="matchesMedia",X="extend",V="events",$="isArray",J="onorientationchange",K="DOMReady",Q="skel-placeholder-breakpoint",G=":first-child>:first-child {",Y="addEventListener",Z="getComputedStyle",et="^head",tt="padding:",nt="{display:none!important}",rt="registerLocation",it="hasOwnProperty",st="defaults",ot="IEVersion",ut="documentElement",at="attachElements",ft="horizontal",lt="attachElement",ct="DOMContentLoaded",ht="text/css",pt="change",dt="states",vt="_skel_attach",mt="firstChild",gt=":first-child>*{",yt="initial-scale=1",bt="removeEventListener",wt="placeholder",Et=">*{",St="(min-width: ",xt="applyRowTransforms",Tt="resize",Nt=".row.uniform",Ct="attached",kt=".row",Lt="vertical",At="media",Ot="forceDefaultState",Mt="html",_t="nextSibling",Dt="collapse",Pt="_skel_placeholder",Ht="querySelectorAll",Bt="max-height",jt="min-height",Ft="prototype",It="min-width",qt="max-width",Rt="innerHTML",Ut="domready",zt="href",Wt=".\\3$1 ",Xt="isStatic",Vt="priority",$t="readyState",Jt="onresize",Kt="android",Qt={breakpoints:[],breakpointList:[],cache:{elements:{},states:{},stateElements:{}},config:{breakpoints:{"skel-placeholder-breakpoint":{href:u,media:""}},containers:960,defaultState:c,events:{},grid:{collapse:u,gutters:{vertical:40,horizontal:0}},pollOnce:u,preload:u,reset:u,RTL:u,viewport:{width:"device-width"}},css:{bm:"*,*:before,*:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}",n:'article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,video{display:inline-block}audio:not([controls]){display:none;height:0}[hidden],template{display:none}html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}a{background:transparent}a:focus{outline:thin dotted}a:active,a:hover{outline:0}h1{font-size:2em;margin:.67em 0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}mark{background:#ff0;color:#000}code,kbd,pre,samp{font-family:monospace,serif;font-size:1em}pre{white-space:pre-wrap}q{quotes:"C" "D" "8" "9"}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:0}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}button,input,select,textarea{font-family:inherit;font-size:100%;margin:0}button,input{line-height:normal}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}textarea{overflow:auto;vertical-align:top}table{border-collapse:collapse;border-spacing:0}',r:"html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}body{-webkit-text-size-adjust:none}"},defaults:{breakpoint:{config:c,elements:c,test:c},config_breakpoint:{containers:"100%",grid:{},href:u,media:"",viewport:{}}},events:[],forceDefaultState:u,isInit:u,isStatic:u,locations:{body:c,head:c,html:c},me:c,plugins:{},sd:"/",stateId:"",vars:{},DOMReady:c,getElementsByClassName:c,indexOf:c,isArray:c,iterate:c,matchesMedia:c,extend:function(e,t){var r;Qt[n](t,function(n){Qt[$](t[n])?(Qt[$](e[n])||(e[n]=[]),Qt[X](e[n],t[n])):typeof t[n]==b?(typeof e[n]!=b&&(e[n]={}),Qt[X](e[n],t[n])):e[n]=t[n]})},getArray:function(e){return Qt[$](e)?e:[e]},getLevel:function(e){return typeof e=="boolean"?e?100:0:parseInt(e)},parseMeasurement:function(e){var t,n;if(typeof e!="string")t=[e,"px"];else if(e=="fluid")t=[100,"%"];else{var n;n=e[C](/([0-9\.]+)([^\s]*)/),n[f]<3||!n[2]?t=[parseFloat(e),"px"]:t=[parseFloat(n[1]),n[2]]}return t},canUse:function(e){return Qt[t][e]&&Qt[t][e].test()},hasActive:function(e){var t=u;return Qt[n](e,function(n){t=t||Qt.isActive(e[n])}),t},isActive:function(e){return Qt[R](Qt[r],Qt.sd+e)!==-1},useActive:function(e){if(typeof e!==b)return e;var t=c;return Qt[n](e,function(n){if(t!==c)return;Qt.isActive(n)&&(t=e[n])}),t},wasActive:function(e){return Qt[R](Qt[I].lastStateId,Qt.sd+e)!==-1},applyRowTransforms:function(t){var r,i,o,a=Qt.getLevel(t[e][E][Dt]);Qt[e].RTL&&(Qt.unreverseRows(),a>0&&Qt.reverseRows(a)),i="_skel_cell_important_placeholder",r=Qt[s]("skel-cell-important"),r&&r[f]>0&&Qt[n](r,function(t){if(t===f)return;var n=r[t],s,o=n[l],c;if(!o)return;o[m][C](/no-collapse/)?c=101:o[m][C](/collapse-at-([0-9])/)?c=parseInt(RegExp.$1):c=0;if(a>0&&c<=a){if(n[it](i)&&n[i]!==u)return;s=Qt[e].RTL?_t:"previousSibling",o=n[s];while(o&&o.nodeName=="#text")o=o[s];if(!o)return;n[l][p](n,n[l][mt]),n[i]=o}else n[it](i)||(n[i]=u),o=n[i],o!==u&&(n[l][p](n,o[_t]),n[i]=u)})},reverseRows:function(e){var t=Qt[s]("row");Qt[n](t,function(n){if(n===f)return;var r=t[n];if(r[j]||e>0&&r[m][C](/\bcollapse-at-([0-9])\b/)&&parseInt(RegExp.$1)>=e)return;var i=r.children,s;for(s=1;s<i[f];s++)r[p](i[s],i[0]);r[j]=_})},unreverseRows:function(){var e=Qt[s]("row");Qt[n](e,function(t){if(t===f)return;var n=e[t];if(!n[j])return;var r=n.children,i;for(i=1;i<r[f];i++)n[p](r[i],r[0]);n[j]=u})},bind:function(e,t){Qt[V][e]||(Qt[V][e]=[]),Qt[V][e][v](t),e==pt&&Qt.isInit&&t()},change:function(e){Qt.bind(pt,e)},trigger:function(e){if(!Qt[V][e]||Qt[V][e][f]==0)return;var t;Qt[n](Qt[V][e],function(t){Qt[V][e][t]()})},registerLocation:function(e,t){e==F?t[vt]=function(e,t){t?this[p](e,this[mt]):this===Qt.me[l]?this[p](e,Qt.me):this.appendChild(e)}:t[vt]=function(e,t){t?this[p](e,this[mt]):this.appendChild(e)},Qt[T][e]=t},addCachedElementToBreakpoint:function(e,n){Qt[t][e]&&Qt[t][e][i][v](n)},addCachedElementToState:function(e,t){Qt[D][o][e]?Qt[D][o][e][v](t):Qt[D][o][e]=[t]},attachElement:function(e){var t,n=e.location,r=u;return e[Ct]?_:(n[0]=="^"&&(n=n[M](1),r=_),n in Qt[T]?(t=Qt[T][n],t[vt](e[b],r),e[Ct]=_,e.onAttach&&e.onAttach(),_):u)},attachElements:function(e){var t=[],r=[],i,s,o;Qt[n](e,function(n){t[e[n][Vt]]||(t[e[n][Vt]]=[]),t[e[n][Vt]][v](e[n])}),Qt[n](t,function(e){if(t[e][f]==0)return;Qt[n](t[e],function(n){Qt[lt](t[e][n])||r[v](t[e][n])})}),r[f]>0&&Qt[K](function(){Qt[n](r,function(e){Qt[lt](r[e])})})},cacheElement:function(e,t,n,r){return t[l]&&t[l].removeChild(t),Qt[D][i][e]=Qt[O](e,t,n,r)},detachAllElements:function(e){var t,r,s={};Qt[n](e,function(t){s[e[t].id]=_}),Qt[n](Qt[D][i],function(e){if(e in s)return;Qt.detachElement(e)})},detachElement:function(e){var t=Qt[D][i][e],n;if(!t[Ct])return;n=t[b];if(!n[l]||n[l]&&!n[l].tagName)return;n[l].removeChild(n),t[Ct]=u,t.onDetach&&t.onDetach()},getCachedElement:function(e){return Qt[D][i][e]?Qt[D][i][e]:c},newElement:function(e,t,n,r){return{id:e,object:t,location:n,priority:r,attached:u}},changeState:function(s){var a,l,c,p,m,b,x,T;Qt[I].lastStateId=Qt[r],Qt[r]=s;if(!Qt[D][dt][Qt[r]]){Qt[D][dt][Qt[r]]={config:{},elements:[],values:{}},c=Qt[D][dt][Qt[r]],Qt[r]===Qt.sd?a=[]:a=Qt[r][M](1).split(Qt.sd),Qt[X](c[e],Qt[st][S]),Qt[n](a,function(n){Qt[X](c[e],Qt[t][a[n]][e])}),p=[],b="mV"+Qt[r],c[e][P].content?x=c[e][P].content:(c[e][P].scalable===u?p[v]("user-scalable=no"):p[v]("user-scalable=yes"),c[e][P].width?p[v]("width="+c[e][P].width):p[v](yt),x=p.join(",")),(m=Qt[g](b))||(m=Qt[H](b,Qt.newMeta(P,x),et,4)),c[i][v](m);var C,k;p=Qt[N](c[e][q]),C=p[0],k=p[1],c.values[q]=C+k,b="iC"+c.values[q];if(!(m=Qt[g](b))){var A,O,_;A=C*.75+k,O=C+k,_=C*1.25+k,m=Qt[H](b,Qt[w]("body{min-width:"+O+B+".container{margin-left:auto;margin-right:auto;width:"+O+B+".container.small{width:"+A+B+".container.big{width:100%;max-width:"+_+";min-width:"+O+B),F,3)}c[i][v](m),b="iGG"+c[e][E][h][Lt]+"_"+c[e][E][h][ft];if(!(m=Qt[g](b))){var j,W,V,$,J,Q,Y;p=Qt[N](c[e][E][h][Lt]),j=p[0],W=p[1],V=j+W,$=j/2+W,J=j/4+W,Q=j*1.5+W,Y=j*2+W;var Z,rt,it,ot,ut,lt,ct;p=Qt[N](c[e][E][h][ft]),Z=p[0],rt=p[1],it=Z+rt,ot=Z/2+rt,ut=Z/4+rt,lt=Z*1.5+rt,ct=Z*2+rt,m=Qt[H]("iGG"+c[e][E][h][Lt]+"_"+c[e][E][h][ft],Qt[w](".row>*{padding-left:"+V+B+".row+.row>*{padding:"+it+d+V+B+".row{margin-left:-"+V+B+".row+.row.uniform>*{padding:"+V+d+V+B+".row.flush>*{padding-left:0}"+".row+.row.flush>*{padding:0}"+".row.flush{margin-left:0}"+".row+.row.uniform.flush>*{padding:0}"+".row.half>*{padding-left:"+$+B+".row+.row.half>*{padding:"+ot+d+$+B+".row.half{margin-left:-"+$+B+".row+.row.uniform.half>*{padding:"+$+d+$+B+".row.quarter>*{padding-left:"+J+B+".row+.row.quarter>*{padding:"+ut+d+J+B+".row.quarter{margin-left:-"+J+B+".row+.row.uniform.quarter>*{padding:"+J+d+J+B+".row.oneandhalf>*{padding-left:"+Q+B+".row+.row.oneandhalf>*{padding:"+lt+d+Q+B+".row.oneandhalf{margin-left:-"+Q+B+".row+.row.uniform.oneandhalf>*{padding:"+Q+d+Q+B+".row.double>*{padding-left:"+Y+B+".row+.row.double>*{padding:"+ct+d+Y+B+".row.double{margin-left:-"+Y+B+".row+.row.uniform.double>*{padding:"+Y+d+Y+B),F,3)}c[i][v](m);if(c[e][E][Dt]){var ht=Qt.getLevel(c[e][E][Dt]),vt,mt;b="iGC"+ht+"-"+c.values[q];if(!(m=Qt[g](b))){x=":not(.no-collapse)";switch(ht){case 4:break;case 3:x+=":not(.collapse-at-4)";break;case 2:x+=":not(.collapse-at-4):not(.collapse-at-3)";break;case 1:x+=":not(.collapse-at-4):not(.collapse-at-3):not(.collapse-at-2)"}p=Qt[N](c[e][E][h][Lt]),vt=p[0]+p[1],p=Qt[N](c[e][E][h][ft]),mt=p[0]+p[1],m=Qt[H](b,Qt[w](".row>*{padding-left:"+vt+y+B+".row>*:first-child{"+L+B+".row+.row>*{"+tt+mt+d+vt+y+B+".row+.row.uniform>*{"+tt+vt+d+vt+y+B+".row{"+"margin-left:-"+vt+y+B+kt+x+Et+"float:none!important;"+"width:100%!important;"+"margin-left:0!important"+B+".row:not(.flush)"+x+gt+z+mt+y+B+".row.uniform:not(.flush)"+x+gt+z+vt+y+B+kt+x+G+L+B+Nt+x+G+L+B+kt+x+Et+z+mt+B+Nt+x+Et+z+vt+B+kt+x+">*:first-child{"+"padding-top:0"+B+".row+.row"+x+Et+tt+mt+d+vt+B+".row+.row.uniform"+x+Et+tt+vt+d+vt+B+".row.flush>*{"+"padding:0!important"+B+".row.flush{"+"margin-left:0px!important"+B+".container{"+"max-width:none!important;"+"min-width:0!important;"+"width:"+c[e][q]+y+B),F,3)}c[i][v](m)}b="iCd"+Qt[r];if(!(m=Qt[g](b))){x=[],T=[],Qt[n](Qt[t],function(e){Qt[R](a,e)!==-1?x[v](".not-"+e):T[v](".only-"+e)});var bt=(x[f]>0?x.join(",")+nt:"")+(T[f]>0?T.join(",")+nt:"");m=Qt[H](b,Qt[w](bt[U](/\.([0-9])/,Wt)),F,3),c[i][v](m)}Qt[n](a,function(r){Qt[t][a[r]][e][zt]&&(b="ss"+a[r],(m=Qt[g](b))||(m=Qt[H](b,Qt.newStyleSheet(Qt[t][a[r]][e][zt]),F,5)),c[i][v](m)),Qt[t][a[r]][i][f]>0&&Qt[n](Qt[t][a[r]][i],function(e){c[i][v](Qt[t][a[r]][i][e])})}),Qt[D][o][Qt[r]]&&(Qt[n](Qt[D][o][Qt[r]],function(e){c[i][v](Qt[D][o][Qt[r]][e])}),Qt[D][o][Qt[r]]=[])}else c=Qt[D][dt][Qt[r]];Qt.detachAllElements(c[i]),Qt[at](c[i]),Qt[K](function(){Qt[xt](c)}),Qt[I].state=Qt[D][dt][Qt[r]],Qt[I][r]=Qt[r],Qt.trigger(pt)},getStateId:function(){if(Qt[Ot]&&Qt[e].defaultState)return Qt[e].defaultState;var r="";return Qt[n](Qt[t],function(e){Qt[t][e].test()&&(r+=Qt.sd+e)}),r},poll:function(){var e="";e=Qt.getStateId(),e===""&&(e=Qt.sd),e!==Qt[r]&&(Qt[Xt]?Qt.changeState(e):(Qt[T][Mt][m]=Qt[T][Mt][m][U](Qt[r][M](1)[U](new RegExp(Qt.sd,"g")," "),""),Qt.changeState(e),Qt[T][Mt][m]=Qt[T][Mt][m]+" "+Qt[r][M](1)[U](new RegExp(Qt.sd,"g")," "),Qt[T][Mt][m].charAt(0)==" "&&(Qt[T][Mt][m]=Qt[T][Mt][m][M](1))))},updateState:function(){var e,s,u,a,l=[];if(Qt[r]==Qt.sd)return;e=Qt[r][M](1).split(Qt.sd),Qt[n](e,function(o){s=Qt[t][e[o]];if(s[i][f]==0)return;Qt[n](s[i],function(e){Qt[D][dt][Qt[r]][i][v](s[i][e]),l[v](s[i][e])})}),Qt[D][o][Qt[r]]&&(Qt[n](Qt[D][o][Qt[r]],function(e){Qt[D][dt][Qt[r]][i][v](Qt[D][o][Qt[r]][e]),l[v](Qt[D][o][Qt[r]][e])}),Qt[D][o][Qt[r]]=[]),l[f]>0&&Qt[at](l)},newDiv:function(e){var t=document[k]("div");return t[Rt]=e,t},newInline:function(e){var t;return t=document[k]("style"),t.type=ht,t[Rt]=e,t},newMeta:function(e,t){var n=document[k]("meta");return n.name=e,n.content=t,n},newStyleSheet:function(e){var t=document[k]("link");return t.rel="stylesheet",t.type=ht,t[zt]=e,t},initPlugin:function(t,n){typeof n==b&&Qt[X](t[e],n),t.init&&t.init()},registerPlugin:function(e,t){if(!t)return u;Qt.plugins[e]=t,t._=this,t.register&&t.register()},init:function(e,t){Qt.initConfig(e),Qt.initElements(),Qt.initEvents(),Qt.poll(),Qt[n](Qt.plugins,function(e){Qt.initPlugin(Qt.plugins[e],typeof t==b&&e in t?t[e]:c)}),Qt.isInit=_},initAPI:function(){var e,t,r=navigator.userAgent;Qt[I][ot]=99,e="other",r[C](/Firefox/)?e="firefox":r[C](/Chrome/)?e="chrome":r[C](/Safari/)&&!r[C](/Chrome/)?e="safari":r[C](/(OPR|Opera)/)?e="opera":r[C](/MSIE ([0-9]+)/)?(e="ie",Qt[I][ot]=RegExp.$1):r[C](/Trident\/.+rv:([0-9]+)/)&&(e="ie",Qt[I][ot]=RegExp.$1),Qt[I].browser=e,Qt[I][A]="other",t={ios:"(iPad|iPhone|iPod)",android:"Android",mac:"Macintosh",wp:"Windows Phone",windows:"Windows NT"},Qt[n](t,function(e){r[C](new RegExp(t[e],"g"))&&(Qt[I][A]=e)});switch(Qt[I][A]){case"ios":r[C](/([0-9_]+) like Mac OS X/),e=parseFloat(RegExp.$1[U]("_",".")[U]("_",""));break;case Kt:r[C](/Android ([0-9\.]+)/),e=parseFloat(RegExp.$1);break;case"mac":r[C](/Mac OS X ([0-9_]+)/),e=parseFloat(RegExp.$1[U]("_",".")[U]("_",""));break;case"wp":r[C](/IEMobile\/([0-9\.]+)/),e=parseFloat(RegExp.$1);break;case"windows":r[C](/Windows NT ([0-9\.]+)/),e=parseFloat(RegExp.$1);break;default:e=99}Qt[I].deviceVersion=e,Qt[I].isTouch=Qt[I][A]=="wp"?navigator.msMaxTouchPoints>0:"ontouchstart"in window,Qt[I].isMobile=Qt[I][A]=="wp"||Qt[I][A]==Kt||Qt[I][A]=="ios"},initConfig:function(r){var s=[],o=[];typeof r==b&&(r[t]&&(Qt[e][t]={}),Qt[X](Qt[e],r)),E in Qt[e]&&h in Qt[e][E]&&typeof Qt[e][E][h]!=b&&(Qt[e][E][h]={vertical:Qt[e][E][h],horizontal:Qt[e][E][h]}),Qt[X](Qt[st][S][E],Qt[e][E]),Qt[st][S][q]=Qt[e][q],Qt[n](Qt[e][t],function(n){var r,s={},u,a;Qt[X](s,Qt[e][t][n]),zt in s||(s[zt]=Qt[st][S][zt]),At in s||(s[At]=Qt[st][S][At]),"range"in s&&(u=s.range,u=="*"?a="":u.charAt(0)=="-"?a="(max-width: "+parseInt(u[M](1))+"px)":u.charAt(u[f]-1)=="-"?a=St+parseInt(u[M](0,u[f]-1))+"px)":Qt[R](u,"-")!=-1&&(u=u.split("-"),a=St+parseInt(u[0])+"px) and (max-width: "+parseInt(u[1])+"px)"),s[At]=a),E in s&&h in s[E]&&typeof s[E][h]!=b&&(s[E][h]={vertical:s[E][h],horizontal:s[E][h]}),Qt[e][t][n]=s,r={},Qt[X](r,Qt[st].breakpoint),r[e]=Qt[e][t][n],r.test=function(){return Qt[W](s[At])},r[i]=[],Qt[e].preload&&r[e][zt]&&o[v](r[e][zt]),Qt[t][n]=r,Qt.breakpointList[v](n)}),Q in Qt[e][t]&&(Qt[Xt]=_,Qt[e][t][Q][P]=Qt[e][P]),Qt[n](Qt[e][V],function(t){Qt.bind(t,Qt[e][V][t])}),o[f]>0&&window.location.protocol!="file:"&&Qt[K](function(){var e,t=document[a](F)[0],r=new XMLHttpRequest;Qt[n](o,function(e){r.open("GET",o[e],u),r.send("")})})},initElements:function(){var t=[];t[v](Qt[O]("mV",Qt.newMeta(P,yt),et,1));switch(Qt[e].reset){case"full":t[v](Qt[O]("iR",Qt[w](Qt.css.r),et,2));break;case"normalize":t[v](Qt[O]("iN",Qt[w](Qt.css.n),et,2))}t[v](Qt[O]("iBM",Qt[w](Qt.css.bm),et,1)),t[v](Qt[O]("iG",Qt[w](".\\31 2u{width:100%}.\\31 1u{width:91.6666666667%}.\\31 0u{width:83.3333333333%}.\\39 u{width:75%}.\\38 u{width:66.6666666667%}.\\37 u{width:58.3333333333%}.\\36 u{width:50%}.\\35 u{width:41.6666666667%}.\\34 u{width:33.3333333333%}.\\33 u{width:25%}.\\32 u{width:16.6666666667%}.\\31 u{width:8.3333333333%}.\\-11u{margin-left:91.6666666667%}.\\-10u{margin-left:83.3333333333%}.\\-9u{margin-left:75%}.\\-8u{margin-left:66.6666666667%}.\\-7u{margin-left:58.3333333333%}.\\-6u{margin-left:50%}.\\-5u{margin-left:41.6666666667%}.\\-4u{margin-left:33.3333333333%}.\\-3u{margin-left:25%}.\\-2u{margin-left:16.6666666667%}.\\-1u{margin-left:8.3333333333%}"),F,3)),t[v](Qt[O]("iGR",Qt[w](".row>*{float:left}.row:after{content:'';display:block;clear:both;height:0}.row:first-child>*{padding-top:0!important}.row.uniform>*>:first-child{margin-top:0}.row.uniform>*>:last-child{margin-bottom:0}"),F,3)),Qt[at](t)},initEvents:function(){var t;!Qt[e].pollOnce&&!Qt[Xt]&&(Qt.bind(Tt,function(){Qt.poll()}),Qt.bind(x,function(){Qt.poll()})),Qt[I][A]=="ios"&&Qt[K](function(){Qt.bind(x,function(){var e=document[a]("input");Qt[n](e,function(t){e[t][Pt]=e[t][wt],e[t][wt]=""}),window.setTimeout(function(){Qt[n](e,function(t){e[t][wt]=e[t][Pt]})},100)})}),window[Jt]&&Qt.bind(Tt,window[Jt]),window[Jt]=function(){Qt.trigger(Tt)},window[J]&&Qt.bind(x,window[J]),window[J]=function(){Qt.trigger(x)}},initUtilityMethods:function(){document[Y]?!function(e,t){Qt[K]=t()}(Ut,function(){function e(e){s=1;while(e=t.shift())e()}var t=[],n,r=document,i=ct,s=/^loaded|^c/.test(r[$t]);return r[Y](i,n=function(){r[bt](i,n),e()}),function(e){s?e():t[v](e)}}):!function(e,t){Qt[K]=t()}(Ut,function(e){function t(e){p=1;while(e=n.shift())e()}var n=[],r,i=!1,s=document,o=s[ut],u=o.doScroll,a=ct,f=Y,l="onreadystatechange",c=$t,h=u?/^loaded|^c/:/^loaded|c/,p=h.test(s[c]);return s[f]&&s[f](a,r=function(){s[bt](a,r,i),t()},i),u&&s.attachEvent(l,r=function(){/^c/.test(s[c])&&(s.detachEvent(l,r),t())}),e=u?function(t){self!=top?p?t():n[v](t):function(){try{o.doScroll("left")}catch(n){return setTimeout(function(){e(t)},50)}t()}()}:function(e){p?e():n[v](e)}}),document[s]?Qt[s]=function(e){return document[s](e)}:Qt[s]=function(e){var t=document;return t[Ht]?t[Ht](("."+e[U](" "," ."))[U](/\.([0-9])/,Wt)):[]},Array[Ft][R]?Qt[R]=function(e,t){return e[R](t)}:Qt[R]=function(e,t){if(typeof e=="string")return e[R](t);var n,r=t?t:0,i;if(!this)throw new TypeError;i=this[f];if(i===0||r>=i)return-1;r<0&&(r=i-Math.abs(r));for(n=r;n<i;n++)if(this[n]===e)return n;return-1},Array[$]?Qt[$]=function(e){return Array[$](e)}:Qt[$]=function(e){return Object[Ft].toString.call(e)==="[object Array]"},Object.keys?Qt[n]=function(e,t){if(!e)return[];var n,r=Object.keys(e);for(n=0;r[n];n++)t(r[n])}:Qt[n]=function(e,t){if(!e)return[];var n;for(n in e)Object[Ft][it].call(e,n)&&t(n)},window.matchMedia?Qt[W]=function(e){return e==""?_:window.matchMedia(e).matches}:window.styleMedia||window[At]?Qt[W]=function(e){if(e=="")return _;var t=window.styleMedia||window[At];return t.matchMedium(e||"all")}:window[Z]?Qt[W]=function(e){if(e=="")return _;var t=document[k]("style"),n=document[a]("script")[0],r=c;t.type=ht,t.id="matchmediajs-test",n[l][p](t,n),r=Z in window&&window[Z](t,c)||t.currentStyle;var i="@media "+e+"{ #matchmediajs-test { width: 1px; } }";return t.styleSheet?t.styleSheet.cssText=i:t.textContent=i,r.width==="1px"}:(Qt[Ot]=_,Qt[W]=function(e){if(e=="")return _;var t,n,r,i,s={"min-width":c,"max-width":c},o=u;n=e.split(/\s+and\s+/);for(i in n)t=n[i],t.charAt(0)=="("&&(t=t[M](1,t[f]-1),r=t.split(/:\s+/),r[f]==2&&(s[r[0][U](/^\s+|\s+$/g,"")]=parseInt(r[1]),o=_));if(!o)return u;var a=document[ut].clientWidth,l=document[ut].clientHeight;return s[It]!==c&&a<s[It]||s[qt]!==c&&a>s[qt]||s[jt]!==c&&l<s[jt]||s[Bt]!==c&&l>s[Bt]?u:_})},preInit:function(){var e=document[a]("script");Qt.me=e[e[f]-1],Qt.initUtilityMethods(),Qt.initAPI(),Qt[rt](Mt,document[a](Mt)[0]),Qt[rt](F,document[a](F)[0]),Qt[K](function(){Qt[rt]("body",document[a]("body")[0])}),Qt[I][ot]>=10&&Qt[lt](Qt[O]("msie-viewport-fix",Qt[w]("@-ms-viewport{width:device-width;}"),et,1))}};return Qt.preInit(),Qt[I][ot]<9&&(Qt[xt]=function(e){},Qt[w]=function(e){var t;return t=document[k]("span"),t[Rt]='&nbsp;<style type="text/css">'+e+"</style>",t}),Qt}();

(function($) {
	/* skel.js v1.0 | (c) n33 | n33.co | MIT licensed */
	var skel=function(){var e="config",t="breakpoints",n="iterate",r="stateId",i="elements",s="getElementsByClassName",o="stateElements",u=!1,a="getElementsByTagName",f="length",l="parentNode",c=null,h="gutters",p="insertBefore",d=" 0 0 ",v="push",m="className",g="getCachedElement",y="!important",b="object",w="newInline",E="grid",S="config_breakpoint",x="orientationChange",T="locations",N="parseMeasurement",C="match",k="createElement",L="padding-top:0!important",A="deviceType",O="newElement",M="substring",_=!0,D="cache",P="viewport",H="cacheElement",B="}",j="_skel_isReversed",F="head",I="vars",q="containers",R="indexOf",U="replace",z="padding-top:",W="matchesMedia",X="extend",V="events",$="isArray",J="onorientationchange",K="DOMReady",Q="skel-placeholder-breakpoint",G=":first-child>:first-child {",Y="addEventListener",Z="getComputedStyle",et="^head",tt="padding:",nt="{display:none!important}",rt="registerLocation",it="hasOwnProperty",st="defaults",ot="IEVersion",ut="documentElement",at="attachElements",ft="horizontal",lt="attachElement",ct="DOMContentLoaded",ht="text/css",pt="change",dt="states",vt="_skel_attach",mt="firstChild",gt=":first-child>*{",yt="initial-scale=1",bt="removeEventListener",wt="placeholder",Et=">*{",St="(min-width: ",xt="applyRowTransforms",Tt="resize",Nt=".row.uniform",Ct="attached",kt=".row",Lt="vertical",At="media",Ot="forceDefaultState",Mt="html",_t="nextSibling",Dt="collapse",Pt="_skel_placeholder",Ht="querySelectorAll",Bt="max-height",jt="min-height",Ft="prototype",It="min-width",qt="max-width",Rt="innerHTML",Ut="domready",zt="href",Wt=".\\3$1 ",Xt="isStatic",Vt="priority",$t="readyState",Jt="onresize",Kt="android",Qt={breakpoints:[],breakpointList:[],cache:{elements:{},states:{},stateElements:{}},config:{breakpoints:{"skel-placeholder-breakpoint":{href:u,media:""}},containers:960,defaultState:c,events:{},grid:{collapse:u,gutters:{vertical:40,horizontal:0}},pollOnce:u,preload:u,reset:u,RTL:u,viewport:{width:"device-width"}},css:{bm:"*,*:before,*:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}",n:'article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,video{display:inline-block}audio:not([controls]){display:none;height:0}[hidden],template{display:none}html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}a{background:transparent}a:focus{outline:thin dotted}a:active,a:hover{outline:0}h1{font-size:2em;margin:.67em 0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}mark{background:#ff0;color:#000}code,kbd,pre,samp{font-family:monospace,serif;font-size:1em}pre{white-space:pre-wrap}q{quotes:"C" "D" "8" "9"}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:0}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}button,input,select,textarea{font-family:inherit;font-size:100%;margin:0}button,input{line-height:normal}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}textarea{overflow:auto;vertical-align:top}table{border-collapse:collapse;border-spacing:0}',r:"html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}body{-webkit-text-size-adjust:none}"},defaults:{breakpoint:{config:c,elements:c,test:c},config_breakpoint:{containers:"100%",grid:{},href:u,media:"",viewport:{}}},events:[],forceDefaultState:u,isInit:u,isStatic:u,locations:{body:c,head:c,html:c},me:c,plugins:{},sd:"/",stateId:"",vars:{},DOMReady:c,getElementsByClassName:c,indexOf:c,isArray:c,iterate:c,matchesMedia:c,extend:function(e,t){var r;Qt[n](t,function(n){Qt[$](t[n])?(Qt[$](e[n])||(e[n]=[]),Qt[X](e[n],t[n])):typeof t[n]==b?(typeof e[n]!=b&&(e[n]={}),Qt[X](e[n],t[n])):e[n]=t[n]})},getArray:function(e){return Qt[$](e)?e:[e]},getLevel:function(e){return typeof e=="boolean"?e?100:0:parseInt(e)},parseMeasurement:function(e){var t,n;if(typeof e!="string")t=[e,"px"];else if(e=="fluid")t=[100,"%"];else{var n;n=e[C](/([0-9\.]+)([^\s]*)/),n[f]<3||!n[2]?t=[parseFloat(e),"px"]:t=[parseFloat(n[1]),n[2]]}return t},canUse:function(e){return Qt[t][e]&&Qt[t][e].test()},hasActive:function(e){var t=u;return Qt[n](e,function(n){t=t||Qt.isActive(e[n])}),t},isActive:function(e){return Qt[R](Qt[r],Qt.sd+e)!==-1},useActive:function(e){if(typeof e!==b)return e;var t=c;return Qt[n](e,function(n){if(t!==c)return;Qt.isActive(n)&&(t=e[n])}),t},wasActive:function(e){return Qt[R](Qt[I].lastStateId,Qt.sd+e)!==-1},applyRowTransforms:function(t){var r,i,o,a=Qt.getLevel(t[e][E][Dt]);Qt[e].RTL&&(Qt.unreverseRows(),a>0&&Qt.reverseRows(a)),i="_skel_cell_important_placeholder",r=Qt[s]("skel-cell-important"),r&&r[f]>0&&Qt[n](r,function(t){if(t===f)return;var n=r[t],s,o=n[l],c;if(!o)return;o[m][C](/no-collapse/)?c=101:o[m][C](/collapse-at-([0-9])/)?c=parseInt(RegExp.$1):c=0;if(a>0&&c<=a){if(n[it](i)&&n[i]!==u)return;s=Qt[e].RTL?_t:"previousSibling",o=n[s];while(o&&o.nodeName=="#text")o=o[s];if(!o)return;n[l][p](n,n[l][mt]),n[i]=o}else n[it](i)||(n[i]=u),o=n[i],o!==u&&(n[l][p](n,o[_t]),n[i]=u)})},reverseRows:function(e){var t=Qt[s]("row");Qt[n](t,function(n){if(n===f)return;var r=t[n];if(r[j]||e>0&&r[m][C](/\bcollapse-at-([0-9])\b/)&&parseInt(RegExp.$1)>=e)return;var i=r.children,s;for(s=1;s<i[f];s++)r[p](i[s],i[0]);r[j]=_})},unreverseRows:function(){var e=Qt[s]("row");Qt[n](e,function(t){if(t===f)return;var n=e[t];if(!n[j])return;var r=n.children,i;for(i=1;i<r[f];i++)n[p](r[i],r[0]);n[j]=u})},bind:function(e,t){Qt[V][e]||(Qt[V][e]=[]),Qt[V][e][v](t),e==pt&&Qt.isInit&&t()},change:function(e){Qt.bind(pt,e)},trigger:function(e){if(!Qt[V][e]||Qt[V][e][f]==0)return;var t;Qt[n](Qt[V][e],function(t){Qt[V][e][t]()})},registerLocation:function(e,t){e==F?t[vt]=function(e,t){t?this[p](e,this[mt]):this===Qt.me[l]?this[p](e,Qt.me):this.appendChild(e)}:t[vt]=function(e,t){t?this[p](e,this[mt]):this.appendChild(e)},Qt[T][e]=t},addCachedElementToBreakpoint:function(e,n){Qt[t][e]&&Qt[t][e][i][v](n)},addCachedElementToState:function(e,t){Qt[D][o][e]?Qt[D][o][e][v](t):Qt[D][o][e]=[t]},attachElement:function(e){var t,n=e.location,r=u;return e[Ct]?_:(n[0]=="^"&&(n=n[M](1),r=_),n in Qt[T]?(t=Qt[T][n],t[vt](e[b],r),e[Ct]=_,e.onAttach&&e.onAttach(),_):u)},attachElements:function(e){var t=[],r=[],i,s,o;Qt[n](e,function(n){t[e[n][Vt]]||(t[e[n][Vt]]=[]),t[e[n][Vt]][v](e[n])}),Qt[n](t,function(e){if(t[e][f]==0)return;Qt[n](t[e],function(n){Qt[lt](t[e][n])||r[v](t[e][n])})}),r[f]>0&&Qt[K](function(){Qt[n](r,function(e){Qt[lt](r[e])})})},cacheElement:function(e,t,n,r){return t[l]&&t[l].removeChild(t),Qt[D][i][e]=Qt[O](e,t,n,r)},detachAllElements:function(e){var t,r,s={};Qt[n](e,function(t){s[e[t].id]=_}),Qt[n](Qt[D][i],function(e){if(e in s)return;Qt.detachElement(e)})},detachElement:function(e){var t=Qt[D][i][e],n;if(!t[Ct])return;n=t[b];if(!n[l]||n[l]&&!n[l].tagName)return;n[l].removeChild(n),t[Ct]=u,t.onDetach&&t.onDetach()},getCachedElement:function(e){return Qt[D][i][e]?Qt[D][i][e]:c},newElement:function(e,t,n,r){return{id:e,object:t,location:n,priority:r,attached:u}},changeState:function(s){var a,l,c,p,m,b,x,T;Qt[I].lastStateId=Qt[r],Qt[r]=s;if(!Qt[D][dt][Qt[r]]){Qt[D][dt][Qt[r]]={config:{},elements:[],values:{}},c=Qt[D][dt][Qt[r]],Qt[r]===Qt.sd?a=[]:a=Qt[r][M](1).split(Qt.sd),Qt[X](c[e],Qt[st][S]),Qt[n](a,function(n){Qt[X](c[e],Qt[t][a[n]][e])}),p=[],b="mV"+Qt[r],c[e][P].content?x=c[e][P].content:(c[e][P].scalable===u?p[v]("user-scalable=no"):p[v]("user-scalable=yes"),c[e][P].width?p[v]("width="+c[e][P].width):p[v](yt),x=p.join(",")),(m=Qt[g](b))||(m=Qt[H](b,Qt.newMeta(P,x),et,4)),c[i][v](m);var C,k;p=Qt[N](c[e][q]),C=p[0],k=p[1],c.values[q]=C+k,b="iC"+c.values[q];if(!(m=Qt[g](b))){var A,O,_;A=C*.75+k,O=C+k,_=C*1.25+k,m=Qt[H](b,Qt[w]("body{min-width:"+O+B+".container{margin-left:auto;margin-right:auto;width:"+O+B+".container.small{width:"+A+B+".container.big{width:100%;max-width:"+_+";min-width:"+O+B),F,3)}c[i][v](m),b="iGG"+c[e][E][h][Lt]+"_"+c[e][E][h][ft];if(!(m=Qt[g](b))){var j,W,V,$,J,Q,Y;p=Qt[N](c[e][E][h][Lt]),j=p[0],W=p[1],V=j+W,$=j/2+W,J=j/4+W,Q=j*1.5+W,Y=j*2+W;var Z,rt,it,ot,ut,lt,ct;p=Qt[N](c[e][E][h][ft]),Z=p[0],rt=p[1],it=Z+rt,ot=Z/2+rt,ut=Z/4+rt,lt=Z*1.5+rt,ct=Z*2+rt,m=Qt[H]("iGG"+c[e][E][h][Lt]+"_"+c[e][E][h][ft],Qt[w](".row>*{padding-left:"+V+B+".row+.row>*{padding:"+it+d+V+B+".row{margin-left:-"+V+B+".row+.row.uniform>*{padding:"+V+d+V+B+".row.flush>*{padding-left:0}"+".row+.row.flush>*{padding:0}"+".row.flush{margin-left:0}"+".row+.row.uniform.flush>*{padding:0}"+".row.half>*{padding-left:"+$+B+".row+.row.half>*{padding:"+ot+d+$+B+".row.half{margin-left:-"+$+B+".row+.row.uniform.half>*{padding:"+$+d+$+B+".row.quarter>*{padding-left:"+J+B+".row+.row.quarter>*{padding:"+ut+d+J+B+".row.quarter{margin-left:-"+J+B+".row+.row.uniform.quarter>*{padding:"+J+d+J+B+".row.oneandhalf>*{padding-left:"+Q+B+".row+.row.oneandhalf>*{padding:"+lt+d+Q+B+".row.oneandhalf{margin-left:-"+Q+B+".row+.row.uniform.oneandhalf>*{padding:"+Q+d+Q+B+".row.double>*{padding-left:"+Y+B+".row+.row.double>*{padding:"+ct+d+Y+B+".row.double{margin-left:-"+Y+B+".row+.row.uniform.double>*{padding:"+Y+d+Y+B),F,3)}c[i][v](m);if(c[e][E][Dt]){var ht=Qt.getLevel(c[e][E][Dt]),vt,mt;b="iGC"+ht+"-"+c.values[q];if(!(m=Qt[g](b))){x=":not(.no-collapse)";switch(ht){case 4:break;case 3:x+=":not(.collapse-at-4)";break;case 2:x+=":not(.collapse-at-4):not(.collapse-at-3)";break;case 1:x+=":not(.collapse-at-4):not(.collapse-at-3):not(.collapse-at-2)"}p=Qt[N](c[e][E][h][Lt]),vt=p[0]+p[1],p=Qt[N](c[e][E][h][ft]),mt=p[0]+p[1],m=Qt[H](b,Qt[w](".row>*{padding-left:"+vt+y+B+".row>*:first-child{"+L+B+".row+.row>*{"+tt+mt+d+vt+y+B+".row+.row.uniform>*{"+tt+vt+d+vt+y+B+".row{"+"margin-left:-"+vt+y+B+kt+x+Et+"float:none!important;"+"width:100%!important;"+"margin-left:0!important"+B+".row:not(.flush)"+x+gt+z+mt+y+B+".row.uniform:not(.flush)"+x+gt+z+vt+y+B+kt+x+G+L+B+Nt+x+G+L+B+kt+x+Et+z+mt+B+Nt+x+Et+z+vt+B+kt+x+">*:first-child{"+"padding-top:0"+B+".row+.row"+x+Et+tt+mt+d+vt+B+".row+.row.uniform"+x+Et+tt+vt+d+vt+B+".row.flush>*{"+"padding:0!important"+B+".row.flush{"+"margin-left:0px!important"+B+".container{"+"max-width:none!important;"+"min-width:0!important;"+"width:"+c[e][q]+y+B),F,3)}c[i][v](m)}b="iCd"+Qt[r];if(!(m=Qt[g](b))){x=[],T=[],Qt[n](Qt[t],function(e){Qt[R](a,e)!==-1?x[v](".not-"+e):T[v](".only-"+e)});var bt=(x[f]>0?x.join(",")+nt:"")+(T[f]>0?T.join(",")+nt:"");m=Qt[H](b,Qt[w](bt[U](/\.([0-9])/,Wt)),F,3),c[i][v](m)}Qt[n](a,function(r){Qt[t][a[r]][e][zt]&&(b="ss"+a[r],(m=Qt[g](b))||(m=Qt[H](b,Qt.newStyleSheet(Qt[t][a[r]][e][zt]),F,5)),c[i][v](m)),Qt[t][a[r]][i][f]>0&&Qt[n](Qt[t][a[r]][i],function(e){c[i][v](Qt[t][a[r]][i][e])})}),Qt[D][o][Qt[r]]&&(Qt[n](Qt[D][o][Qt[r]],function(e){c[i][v](Qt[D][o][Qt[r]][e])}),Qt[D][o][Qt[r]]=[])}else c=Qt[D][dt][Qt[r]];Qt.detachAllElements(c[i]),Qt[at](c[i]),Qt[K](function(){Qt[xt](c)}),Qt[I].state=Qt[D][dt][Qt[r]],Qt[I][r]=Qt[r],Qt.trigger(pt)},getStateId:function(){if(Qt[Ot]&&Qt[e].defaultState)return Qt[e].defaultState;var r="";return Qt[n](Qt[t],function(e){Qt[t][e].test()&&(r+=Qt.sd+e)}),r},poll:function(){var e="";e=Qt.getStateId(),e===""&&(e=Qt.sd),e!==Qt[r]&&(Qt[Xt]?Qt.changeState(e):(Qt[T][Mt][m]=Qt[T][Mt][m][U](Qt[r][M](1)[U](new RegExp(Qt.sd,"g")," "),""),Qt.changeState(e),Qt[T][Mt][m]=Qt[T][Mt][m]+" "+Qt[r][M](1)[U](new RegExp(Qt.sd,"g")," "),Qt[T][Mt][m].charAt(0)==" "&&(Qt[T][Mt][m]=Qt[T][Mt][m][M](1))))},updateState:function(){var e,s,u,a,l=[];if(Qt[r]==Qt.sd)return;e=Qt[r][M](1).split(Qt.sd),Qt[n](e,function(o){s=Qt[t][e[o]];if(s[i][f]==0)return;Qt[n](s[i],function(e){Qt[D][dt][Qt[r]][i][v](s[i][e]),l[v](s[i][e])})}),Qt[D][o][Qt[r]]&&(Qt[n](Qt[D][o][Qt[r]],function(e){Qt[D][dt][Qt[r]][i][v](Qt[D][o][Qt[r]][e]),l[v](Qt[D][o][Qt[r]][e])}),Qt[D][o][Qt[r]]=[]),l[f]>0&&Qt[at](l)},newDiv:function(e){var t=document[k]("div");return t[Rt]=e,t},newInline:function(e){var t;return t=document[k]("style"),t.type=ht,t[Rt]=e,t},newMeta:function(e,t){var n=document[k]("meta");return n.name=e,n.content=t,n},newStyleSheet:function(e){var t=document[k]("link");return t.rel="stylesheet",t.type=ht,t[zt]=e,t},initPlugin:function(t,n){typeof n==b&&Qt[X](t[e],n),t.init&&t.init()},registerPlugin:function(e,t){if(!t)return u;Qt.plugins[e]=t,t._=this,t.register&&t.register()},init:function(e,t){Qt.initConfig(e),Qt.initElements(),Qt.initEvents(),Qt.poll(),Qt[n](Qt.plugins,function(e){Qt.initPlugin(Qt.plugins[e],typeof t==b&&e in t?t[e]:c)}),Qt.isInit=_},initAPI:function(){var e,t,r=navigator.userAgent;Qt[I][ot]=99,e="other",r[C](/Firefox/)?e="firefox":r[C](/Chrome/)?e="chrome":r[C](/Safari/)&&!r[C](/Chrome/)?e="safari":r[C](/(OPR|Opera)/)?e="opera":r[C](/MSIE ([0-9]+)/)?(e="ie",Qt[I][ot]=RegExp.$1):r[C](/Trident\/.+rv:([0-9]+)/)&&(e="ie",Qt[I][ot]=RegExp.$1),Qt[I].browser=e,Qt[I][A]="other",t={ios:"(iPad|iPhone|iPod)",android:"Android",mac:"Macintosh",wp:"Windows Phone",windows:"Windows NT"},Qt[n](t,function(e){r[C](new RegExp(t[e],"g"))&&(Qt[I][A]=e)});switch(Qt[I][A]){case"ios":r[C](/([0-9_]+) like Mac OS X/),e=parseFloat(RegExp.$1[U]("_",".")[U]("_",""));break;case Kt:r[C](/Android ([0-9\.]+)/),e=parseFloat(RegExp.$1);break;case"mac":r[C](/Mac OS X ([0-9_]+)/),e=parseFloat(RegExp.$1[U]("_",".")[U]("_",""));break;case"wp":r[C](/IEMobile\/([0-9\.]+)/),e=parseFloat(RegExp.$1);break;case"windows":r[C](/Windows NT ([0-9\.]+)/),e=parseFloat(RegExp.$1);break;default:e=99}Qt[I].deviceVersion=e,Qt[I].isTouch=Qt[I][A]=="wp"?navigator.msMaxTouchPoints>0:"ontouchstart"in window,Qt[I].isMobile=Qt[I][A]=="wp"||Qt[I][A]==Kt||Qt[I][A]=="ios"},initConfig:function(r){var s=[],o=[];typeof r==b&&(r[t]&&(Qt[e][t]={}),Qt[X](Qt[e],r)),E in Qt[e]&&h in Qt[e][E]&&typeof Qt[e][E][h]!=b&&(Qt[e][E][h]={vertical:Qt[e][E][h],horizontal:Qt[e][E][h]}),Qt[X](Qt[st][S][E],Qt[e][E]),Qt[st][S][q]=Qt[e][q],Qt[n](Qt[e][t],function(n){var r,s={},u,a;Qt[X](s,Qt[e][t][n]),zt in s||(s[zt]=Qt[st][S][zt]),At in s||(s[At]=Qt[st][S][At]),"range"in s&&(u=s.range,u=="*"?a="":u.charAt(0)=="-"?a="(max-width: "+parseInt(u[M](1))+"px)":u.charAt(u[f]-1)=="-"?a=St+parseInt(u[M](0,u[f]-1))+"px)":Qt[R](u,"-")!=-1&&(u=u.split("-"),a=St+parseInt(u[0])+"px) and (max-width: "+parseInt(u[1])+"px)"),s[At]=a),E in s&&h in s[E]&&typeof s[E][h]!=b&&(s[E][h]={vertical:s[E][h],horizontal:s[E][h]}),Qt[e][t][n]=s,r={},Qt[X](r,Qt[st].breakpoint),r[e]=Qt[e][t][n],r.test=function(){return Qt[W](s[At])},r[i]=[],Qt[e].preload&&r[e][zt]&&o[v](r[e][zt]),Qt[t][n]=r,Qt.breakpointList[v](n)}),Q in Qt[e][t]&&(Qt[Xt]=_,Qt[e][t][Q][P]=Qt[e][P]),Qt[n](Qt[e][V],function(t){Qt.bind(t,Qt[e][V][t])}),o[f]>0&&window.location.protocol!="file:"&&Qt[K](function(){var e,t=document[a](F)[0],r=new XMLHttpRequest;Qt[n](o,function(e){r.open("GET",o[e],u),r.send("")})})},initElements:function(){var t=[];t[v](Qt[O]("mV",Qt.newMeta(P,yt),et,1));switch(Qt[e].reset){case"full":t[v](Qt[O]("iR",Qt[w](Qt.css.r),et,2));break;case"normalize":t[v](Qt[O]("iN",Qt[w](Qt.css.n),et,2))}t[v](Qt[O]("iBM",Qt[w](Qt.css.bm),et,1)),t[v](Qt[O]("iG",Qt[w](".\\31 2u{width:100%}.\\31 1u{width:91.6666666667%}.\\31 0u{width:83.3333333333%}.\\39 u{width:75%}.\\38 u{width:66.6666666667%}.\\37 u{width:58.3333333333%}.\\36 u{width:50%}.\\35 u{width:41.6666666667%}.\\34 u{width:33.3333333333%}.\\33 u{width:25%}.\\32 u{width:16.6666666667%}.\\31 u{width:8.3333333333%}.\\-11u{margin-left:91.6666666667%}.\\-10u{margin-left:83.3333333333%}.\\-9u{margin-left:75%}.\\-8u{margin-left:66.6666666667%}.\\-7u{margin-left:58.3333333333%}.\\-6u{margin-left:50%}.\\-5u{margin-left:41.6666666667%}.\\-4u{margin-left:33.3333333333%}.\\-3u{margin-left:25%}.\\-2u{margin-left:16.6666666667%}.\\-1u{margin-left:8.3333333333%}"),F,3)),t[v](Qt[O]("iGR",Qt[w](".row>*{float:left}.row:after{content:'';display:block;clear:both;height:0}.row:first-child>*{padding-top:0!important}.row.uniform>*>:first-child{margin-top:0}.row.uniform>*>:last-child{margin-bottom:0}"),F,3)),Qt[at](t)},initEvents:function(){var t;!Qt[e].pollOnce&&!Qt[Xt]&&(Qt.bind(Tt,function(){Qt.poll()}),Qt.bind(x,function(){Qt.poll()})),Qt[I][A]=="ios"&&Qt[K](function(){Qt.bind(x,function(){var e=document[a]("input");Qt[n](e,function(t){e[t][Pt]=e[t][wt],e[t][wt]=""}),window.setTimeout(function(){Qt[n](e,function(t){e[t][wt]=e[t][Pt]})},100)})}),window[Jt]&&Qt.bind(Tt,window[Jt]),window[Jt]=function(){Qt.trigger(Tt)},window[J]&&Qt.bind(x,window[J]),window[J]=function(){Qt.trigger(x)}},initUtilityMethods:function(){document[Y]?!function(e,t){Qt[K]=t()}(Ut,function(){function e(e){s=1;while(e=t.shift())e()}var t=[],n,r=document,i=ct,s=/^loaded|^c/.test(r[$t]);return r[Y](i,n=function(){r[bt](i,n),e()}),function(e){s?e():t[v](e)}}):!function(e,t){Qt[K]=t()}(Ut,function(e){function t(e){p=1;while(e=n.shift())e()}var n=[],r,i=!1,s=document,o=s[ut],u=o.doScroll,a=ct,f=Y,l="onreadystatechange",c=$t,h=u?/^loaded|^c/:/^loaded|c/,p=h.test(s[c]);return s[f]&&s[f](a,r=function(){s[bt](a,r,i),t()},i),u&&s.attachEvent(l,r=function(){/^c/.test(s[c])&&(s.detachEvent(l,r),t())}),e=u?function(t){self!=top?p?t():n[v](t):function(){try{o.doScroll("left")}catch(n){return setTimeout(function(){e(t)},50)}t()}()}:function(e){p?e():n[v](e)}}),document[s]?Qt[s]=function(e){return document[s](e)}:Qt[s]=function(e){var t=document;return t[Ht]?t[Ht](("."+e[U](" "," ."))[U](/\.([0-9])/,Wt)):[]},Array[Ft][R]?Qt[R]=function(e,t){return e[R](t)}:Qt[R]=function(e,t){if(typeof e=="string")return e[R](t);var n,r=t?t:0,i;if(!this)throw new TypeError;i=this[f];if(i===0||r>=i)return-1;r<0&&(r=i-Math.abs(r));for(n=r;n<i;n++)if(this[n]===e)return n;return-1},Array[$]?Qt[$]=function(e){return Array[$](e)}:Qt[$]=function(e){return Object[Ft].toString.call(e)==="[object Array]"},Object.keys?Qt[n]=function(e,t){if(!e)return[];var n,r=Object.keys(e);for(n=0;r[n];n++)t(r[n])}:Qt[n]=function(e,t){if(!e)return[];var n;for(n in e)Object[Ft][it].call(e,n)&&t(n)},window.matchMedia?Qt[W]=function(e){return e==""?_:window.matchMedia(e).matches}:window.styleMedia||window[At]?Qt[W]=function(e){if(e=="")return _;var t=window.styleMedia||window[At];return t.matchMedium(e||"all")}:window[Z]?Qt[W]=function(e){if(e=="")return _;var t=document[k]("style"),n=document[a]("script")[0],r=c;t.type=ht,t.id="matchmediajs-test",n[l][p](t,n),r=Z in window&&window[Z](t,c)||t.currentStyle;var i="@media "+e+"{ #matchmediajs-test { width: 1px; } }";return t.styleSheet?t.styleSheet.cssText=i:t.textContent=i,r.width==="1px"}:(Qt[Ot]=_,Qt[W]=function(e){if(e=="")return _;var t,n,r,i,s={"min-width":c,"max-width":c},o=u;n=e.split(/\s+and\s+/);for(i in n)t=n[i],t.charAt(0)=="("&&(t=t[M](1,t[f]-1),r=t.split(/:\s+/),r[f]==2&&(s[r[0][U](/^\s+|\s+$/g,"")]=parseInt(r[1]),o=_));if(!o)return u;var a=document[ut].clientWidth,l=document[ut].clientHeight;return s[It]!==c&&a<s[It]||s[qt]!==c&&a>s[qt]||s[jt]!==c&&l<s[jt]||s[Bt]!==c&&l>s[Bt]?u:_})},preInit:function(){var e=document[a]("script");Qt.me=e[e[f]-1],Qt.initUtilityMethods(),Qt.initAPI(),Qt[rt](Mt,document[a](Mt)[0]),Qt[rt](F,document[a](F)[0]),Qt[K](function(){Qt[rt]("body",document[a]("body")[0])}),Qt[I][ot]>=10&&Qt[lt](Qt[O]("msie-viewport-fix",Qt[w]("@-ms-viewport{width:device-width;}"),et,1))}};return Qt.preInit(),Qt[I][ot]<9&&(Qt[xt]=function(e){},Qt[w]=function(e){var t;return t=document[k]("span"),t[Rt]='&nbsp;<style type="text/css">'+e+"</style>",t}),Qt}();


	var settings = {

		// Fullscreen?
			fullScreen: true,
			
		// Section Transitions?
			sectionTransitions: true,

		// Fade in speed (in ms).
			fadeInSpeed: 1000

	};

	skel.init({
		reset: 'full',
		breakpoints: {
			'max': { range: '*', href: '/assets/style.css', containers: 1440, viewport: { scalable: false }, grid: { gutters: 40 } },
			'wide': { range: '-1920', href: '/assets/style-wide.css', containers: 1360 },
			'normal': { range: '-1680', href: '/assets/style-normal.css', containers: 1200 },
			'narrow': { range: '-1170', href: '/assets/style-narrow.css', containers: 960 },
			'narrower': { range: '-970', href: '/assets/style-narrower.css', containers: '95%' },
			'mobile': { range: '-768', href: '/assets/style-mobile.css', grid: { gutters: 20 } },
			'mobile-narrow': { range: '-480', grid: { collapse: true, gutters: 10 } }
		}
	});
	
	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$all = $body.add($header),
			sectionTransitionState = false;

		// Settings.
		
			// IE<10?
				if (skel.vars.IEVersion < 10) {
					
					// Turn off transitions.
						settings.sectionTransitions = false;
						
				}
		
			// Touch?
				if (skel.vars.isTouch) {
				
					// Disable section transitions
						settings.sectionTransitions = false;
						
					// Turn on touch mode
						$body.addClass('touch');
				
				}
				
		// Fade in once everything's loaded.
			$all
				.addClass('is-loading')
				.fadeTo(0, 0.0001);
			
			$window.load(function() {
				window.setTimeout(function() {
					$all
						.fadeTo(settings.fadeInSpeed, 1, function() {
							$body.removeClass('is-loading');
							$all.fadeTo(0, 1);
						});
				}, settings.fadeInSpeed);
			});

		// Forms (IE<10).
			var $form = $('form');
			if ($form.length > 0) {

				$form.find('.form-button-submit')
					.on('click', function() {
						$(this).parents('form').submit();
						return false;
					});

				if (skel.vars.IEVersion < 10) {
					$.fn.n33_formerize=function(){var _fakes=new Array(),_form = $(this);_form.find('input[type=text],textarea').each(function() { var e = $(this); if (e.val() == '' || e.val() == e.attr('placeholder')) { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).blur(function() { var e = $(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).focus(function() { var e = $(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() == e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); _form.find('input[type=password]').each(function() { var e = $(this); var x = $($('<div>').append(e.clone()).remove().html().replace(/type="password"/i, 'type="text"').replace(/type=password/i, 'type=text')); if (e.attr('id') != '') x.attr('id', e.attr('id') + '_fakeformerizefield'); if (e.attr('name') != '') x.attr('name', e.attr('name') + '_fakeformerizefield'); x.addClass('formerize-placeholder').val(x.attr('placeholder')).insertAfter(e); if (e.val() == '') e.hide(); else x.hide(); e.blur(function(event) { event.preventDefault(); var e = $(this); var x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } }); x.focus(function(event) { event.preventDefault(); var x = $(this); var e = x.parent().find('input[name=' + x.attr('name').replace('_fakeformerizefield', '') + ']'); x.hide(); e.show().focus(); }); x.keypress(function(event) { event.preventDefault(); x.val(''); }); });  _form.submit(function() { $(this).find('input[type=text],input[type=password],textarea').each(function(event) { var e = $(this); if (e.attr('name').match(/_fakeformerizefield$/)) e.attr('name', ''); if (e.val() == e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); }).bind("reset", function(event) { event.preventDefault(); $(this).find('select').val($('option:first').val()); $(this).find('input,textarea').each(function() { var e = $(this); var x; e.removeClass('formerize-placeholder'); switch (this.type) { case 'submit': case 'reset': break; case 'password': e.val(e.attr('defaultValue')); x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } else { e.show(); x.hide(); } break; case 'checkbox': case 'radio': e.attr('checked', e.attr('defaultValue')); break; case 'text': case 'textarea': e.val(e.attr('defaultValue')); if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } break; default: e.val(e.attr('defaultValue')); break; } }); window.setTimeout(function() { for (x in _fakes) _fakes[x].trigger('formerize_sync'); }, 10); }); return _form; };
					$form.n33_formerize();
				}

				// Custom select.
					$form.find('.select select')
						.on('focus', function() {
							$(this).parent().addClass('focus');
						})
						.on('blur', function() {
							$(this).parent().removeClass('focus');
						});						

			}

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Gallery.
			$('.gallery').poptrox({
				baseZIndex: 10001,
				useBodyOverflow: false,
				usePopupEasyClose: false,
				overlayColor: '#1f2328',
				overlayOpacity: 0.65,
				usePopupDefaultStyling: false,
				usePopupCaption: true,
				popupLoaderText: '',
				windowMargin: (skel.isActive('mobile') ? 5 : 50),
				usePopupNav: true
			});

		// Section transitions.

			if (settings.sectionTransitions) {

				// Generic sections.
					$('.main.style1')
						.scrollwatch({
							delay:		50,
							range:		0.5,
							anchor:		'center',
							on:			function(t) { t.removeClass('inactive'); },
							off:		function(t) { t.addClass('inactive'); }
						});

					$('.main.style2')
						.scrollwatch({
							delay:		50,
							range:		0.5,
							anchor:		'center',
							init:		function(t) { t.addClass('inactive'); },
							on:			function(t) { t.removeClass('inactive'); },
							off:		function(t) { t.addClass('inactive'); }
						});
			
				// Work.
					$('#work')
						.scrollwatch({
							delay:		25,
							range:		0.6,
							anchor:		'center',
							init:		function(t) { t.find('.row.images').addClass('inactive'); },
							on:			function(t) {
											var	rows = t.find('.row.images'),
												length = rows.length,
												n = 0;
											
											rows.each(function() {
												var row = $(this);
												window.setTimeout(function() {
													row.removeClass('inactive');
												}, 100 * (length - n++));
											});
										},
							off:		function(t) {
											var	rows = t.find('.row.images'),
												length = rows.length,
												n = 0;
											
											rows.each(function() {
												var row = $(this);
												window.setTimeout(function() {
													row.addClass('inactive');
												}, 100 * (length - n++));
											});
										}
						});

				// Contact.
					$('#contact')
						.scrollwatch({
							delay:		25,
							range:		0.5,
							anchor:		'center',
							init:		function(t) { t.addClass('inactive'); },
							on:			function(t) { t.removeClass('inactive'); },
							off:		function(t) { t.addClass('inactive'); }
						});

			}

		// Events.
		
			// Change (skel).
				skel.change(function() {

					// Force touch mode if we're in mobile.
						if (skel.isActive('mobile'))
							$body.addClass('touch');
						else if (!skel.vars.isTouch)
							$body.removeClass('touch');
				
					// Section transitions.
						if (settings.sectionTransitions) {
						
							if (skel.isActive('mobile')) {

								// Generic sections.
									$('.main.style1')
										.scrollwatchSuspend();
									
									$('.main.style2')
										.scrollwatchSuspend();
							
								// Work.
									$('#work')
										.scrollwatchSuspend();

								// Contact.
									$('#contact')
										.scrollwatchSuspend();
							
							}
							else {

								// Generic sections.
									$('.main.style1')
										.scrollwatchResume();
									
									$('.main.style2')
										.scrollwatchResume();
							
								// Work.
									$('#work')
										.scrollwatchResume();

								// Contact.
									$('#contact')
										.scrollwatchResume();

							}

						}
					
				});

			// Resize.
				var resizeTimeout, resizeScrollTimeout;
				
				$window.resize(function() {

					// Disable animations/transitions.
						$body.addClass('is-loading');

					window.clearTimeout(resizeTimeout);

					resizeTimeout = window.setTimeout(function() {

						// Update scrolly links.
							$('a[href^=#]').scrolly(1500, $header.outerHeight() - 1);

						// Resize fullscreen elements.
							if (settings.fullScreen
							&&	!skel.isActive('mobile')) {
								$('.fullscreen').each(function() {
								
									var $t = $(this),
										$c = $t.children('.content'),
										x = Math.max(100, Math.round(($window.height() - $c.outerHeight() - $header.outerHeight()) / 2) + 1);

									$t
										.css('padding-top', x)
										.css('padding-bottom', x);
								
								});
							}
							else
								$('.fullscreen')
									.css('padding-top', '')
									.css('padding-bottom', '');
							
							
						// Re-enable animations/transitions.
							window.setTimeout(function() {
								$body.removeClass('is-loading');
								$window.trigger('scroll');
							}, 0);

					}, 100);

				});
				
		// Trigger events on load.
			$window.load(function() {
				
				$window
					.trigger('resize')
					.trigger('scroll');
			
			});

	});
	
})(jQuery);