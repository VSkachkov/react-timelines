(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{16:function(e,t,a){e.exports=a(54)},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),i=a.n(o),c=a(2),s=a(4),u=a(10),l=a(11),m=a(15),d=a(13),p=a(12),h=a.n(p),f=(a(52),["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]),b=a(14),g=function(e){for(var t=[],a=0;a<e;a+=1)t.push(a);return t},k=["FF005D","0085B6","0BB4C1","00D49D","FEDF03","233D4D","FE7F2D","FCCA46","A1C181","579C87"],v=-1,y=function(e,t,a){return 1-(.299*e+.587*t+.114*a)/255<.5},O=function(e,t){for(var a=e,n=t;n>=12;)n-=12,a+=1;return{year:a,month:n+1}},w=function(e,t){var a=O(e,t);return new Date("".concat(a.year,"-").concat(a.month))},M=["adamant","adroit","amatory","animistic","antic","arcadian","baleful","bellicose","bilious","boorish","calamitous","caustic","cerulean","comely","concomitant","contumacious","corpulent","crapulous","defamatory","didactic","dilatory","dowdy","efficacious","effulgent","egregious","endemic","equanimous","execrable","fastidious","feckless","fecund","friable","fulsome","garrulous","guileless","gustatory","heuristic","histrionic","hubristic","incendiary","insidious","insolent","intransigent","inveterate","invidious","irksome","jejune","jocular","judicious","lachrymose","limpid","loquacious","luminous","mannered","mendacious","meretricious","minatory","mordant","munificent","nefarious","noxious","obtuse","parsimonious","pendulous","pernicious","pervasive","petulant","platitudinous","precipitate","propitious","puckish","querulous","quiescent","rebarbative","recalcitant","redolent","rhadamanthine","risible","ruminative","sagacious","salubrious","sartorial","sclerotic","serpentine","spasmodic","strident","taciturn","tenacious","tremulous","trenchant","turbulent","turgid","ubiquitous","uxorious","verdant","voluble","voracious","wheedling","withering","zealous"],j=["ninja","chair","pancake","statue","unicorn","rainbows","laser","senor","bunny","captain","nibblets","cupcake","carrot","gnomes","glitter","potato","salad","toejam","curtains","beets","toilet","exorcism","stick figures","mermaid eggs","sea barnacles","dragons","jellybeans","snakes","dolls","bushes","cookies","apples","ice cream","ukulele","kazoo","banjo","opera singer","circus","trampoline","carousel","carnival","locomotive","hot air balloon","praying mantis","animator","artisan","artist","colorist","inker","coppersmith","director","designer","flatter","stylist","leadman","limner","make-up artist","model","musician","penciller","producer","scenographer","set decorator","silversmith","teacher","auto mechanic","beader","bobbin boy","clerk of the chapel","filling station attendant","foreman","maintenance engineering","mechanic","miller","moldmaker","panel beater","patternmaker","plant operator","plumber","sawfiler","shop foreman","soaper","stationary engineer","wheelwright","woodworkers"],z=function(){for(var e=[],t=0;t<12;t+=1){var a=t%4+1,n=3*t,r=O(2020,n),o=O(2020,n+3);e.push({id:"".concat(r.year,"-q").concat(a),title:"Q".concat(a," ").concat(r.year),start:new Date("".concat(r.year,"-").concat(r.month,"-01")),end:new Date("".concat(o.year,"-").concat(o.month,"-01"))})}return e},D=function(){for(var e=[],t=0;t<36;t+=1){var a=t,n=w(2020,a),r=w(2020,a+1);e.push({id:"m".concat(a),title:f[t%12],start:n,end:r})}return e},x=function(e){var t=e.trackId,a=e.start,n=e.end,r=e.i,o=k[v=(v+1)%k.length],i=y.apply(void 0,Object(b.a)(function(e){var t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t]}(o)))?"#000000":"#ffffff";return{id:"t-".concat(t,"-el-").concat(r),title:"".concat(M[Math.floor(Math.random()*M.length)]," ").concat(j[Math.floor(Math.random()*j.length)]),start:a,end:n,style:{backgroundColor:"#".concat(o),color:i,borderRadius:"4px",boxShadow:"1px 1px 0px rgba(0, 0, 0, 0.25)",textTransform:"capitalize"}}},T=function(e){for(var t=[],a=1,n=Math.floor(4*Math.random());n<36;){var r=Math.floor(7*Math.random())+2;n+r>36&&(r=36-n);var o=w(2020,n),i=w(2020,n+r);t.push(x({trackId:e,start:o,end:i,i:a})),n+=r+Math.floor(8*Math.random()),a+=1}return t},I=function(e){var t=g(Math.floor(5*Math.random())+1).map((function(t){return function(e,t){return{id:"track-".concat(e,"-").concat(t),title:"Subtrack ".concat(t),elements:T(t)}}(e,t+1)}));return{id:"track-".concat(e),title:"Track ".concat(e),elements:T(e),tracks:t,isOpen:!1}},S=new Date("2021-01-01"),B=[{id:"quarters",title:"Quarters",cells:z(),style:{}},{id:"months",title:"Months",cells:D(),useAsGrid:!0,style:{}}],C=function(e){return alert("Clicked element\n".concat(JSON.stringify(e,null,2)))},E=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;Object(u.a)(this,a),(n=t.call(this,e)).handleToggleOpen=function(){n.setState((function(e){return{open:!e.open}}))},n.handleZoomIn=function(){n.setState((function(e){var t=e.zoom;return{zoom:Math.min(t+1,20)}}))},n.handleZoomOut=function(){n.setState((function(e){var t=e.zoom;return{zoom:Math.max(t-1,2)}}))},n.handleToggleTrackOpen=function(e){n.setState((function(t){var a=Object(s.a)({},t.tracksById,Object(c.a)({},e.id,Object(s.a)({},e,{isOpen:!e.isOpen})));return{tracksById:a,tracks:Object.values(a)}}))};var r=g(20).reduce((function(e,t){var a=I(t+1);return e[a.id]=a,e}),{});return n.state={open:!1,zoom:2,tracksById:r,tracks:Object.values(r)},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.open,a=e.zoom,n=e.tracks,o=new Date("".concat(2020)),i=new Date("".concat(2023));return r.a.createElement("div",{className:"app"},r.a.createElement("h1",{className:"title"},"React Timelines"),r.a.createElement(h.a,{scale:{start:o,end:i,zoom:a,zoomMin:2,zoomMax:20},isOpen:t,toggleOpen:this.handleToggleOpen,zoomIn:this.handleZoomIn,zoomOut:this.handleZoomOut,clickElement:C,clickTrackButton:function(e){alert(JSON.stringify(e))},timebar:B,tracks:n,now:S,toggleTrackOpen:this.handleToggleTrackOpen,enableSticky:!0,scrollToNow:!0}))}}]),a}(n.Component);a(53);i.a.render(r.a.createElement(E,null),document.getElementById("app"))}},[[16,1,2]]]);
//# sourceMappingURL=main.60a38150.chunk.js.map