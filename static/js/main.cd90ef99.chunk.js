(this["webpackJsonpccnyacm-website"]=this["webpackJsonpccnyacm-website"]||[]).push([[0],{55:function(e,t,n){e.exports=n(68)},68:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),l=n.n(c),i=n(49),o=n(99),s=n(21),m=n(14),u=function(){return r.a.createElement("h1",null,"Not found")},h=n(20),p=n.n(h),d=n(23),f=n(24),v=n(29),E=n(25),g=n(31),b=n(45),y=n(90),w=n(93),j=n(32),k=n(91),O=n(92),S=Object(b.a)({card:{maxWidth:275,justifyContent:"center",floatLeft:"10%"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},media:{height:0,paddingTop:"56.25%"},typography:{textAlign:"center"}}),x=function(e){var t=S();return r.a.createElement("div",null,r.a.createElement(y.a,{className:t.card,id:e.event.id},r.a.createElement(k.a,{title:e.event.title,subheader:e.event.host}),r.a.createElement(O.a,{className:t.media,image:e.event.eventImage,title:"Bujar"}),r.a.createElement(w.a,null,r.a.createElement(j.a,{className:t.typography},"When: ",e.event.date),r.a.createElement(j.a,{className:t.typography},"Time: ",e.event.timeStart," to ",e.event.timeEnd),r.a.createElement(j.a,null,e.event.description),r.a.createElement(j.a,null,r.a.createElement("a",{href:e.event.url},e.event.url)))))},I=n(94),N=function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,e.title),r.a.createElement(I.a,{container:!0,spacing:2},e.events.map((function(e){return r.a.createElement(I.a,{item:!0},r.a.createElement(x,{key:e.id,event:e}))}))))};function D(e){var t=e.substring(8);return e.substring(5,7)+"/"+t+"/"+e.substring(0,4)}var M=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(v.a)(this,Object(E.a)(t).call(this))).state={events:[{id:"ccny1",url:"",title:"Mock Technical Interview Session",host:"",description:"Join ACM for our third Mock Interview Session on solving technical problems! This week's topics is strings!",date:"1/25/2020",timeStart:"1:00pm",timeEnd:"3:00pm",eventImage:"http://theinterviewpro.com/wp-content/uploads/2016/05/Mock-Interview.png"}],hackathons:[]},e}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=function(){var t,n,a,r,c,l,i;return p.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,p.a.awrap(fetch("https://mlh-events.now.sh/na-2020"));case 2:return t=o.sent,o.next=5,p.a.awrap(t.json());case 5:n=o.sent,e.setState({hackathons:n}),a=new Date,r=String(a.getDate()).padStart(2,"0"),c=String(a.getMonth()+1).padStart(2,"0"),l=n.filter((function(e){var t=e.isHighSchool,n=e.startDate,a=n.substring(8),l=n.substring(5,7);if(!t){if(l>c)return e;if(l===c&&a>=r)return e}})),i=1,l.forEach((function(e){e.id="mlh"+i,i++,e.eventImage=e.imageUrl,e.date=e.location,e.timeStart=D(e.startDate),e.timeEnd=D(e.endDate),e.title=e.name,delete e.name,delete e.startDate,delete e.endDate,delete e.imageUrl})),e.setState({hackathons:l});case 14:case"end":return o.stop()}}))};p.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.awrap(t());case 2:case"end":return e.stop()}}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null," This is the events Page "),r.a.createElement(N,{title:"CCNY Events",events:this.state.events}),r.a.createElement(N,{title:"Hackathon Events",events:this.state.hackathons.slice(0,8)}))}}]),t}(a.Component),C=n(50),B=n(98),T=n(100),A=n(102),H=n(95),U=n(101),F=Object(b.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}})),J=function(e){var t,n=e.children,a=e.scrollStep,c=e.delayInMS,l=F(),i=Object(H.a)({disableHysteresis:!0,threshold:100}),o=function(){0===window.pageYOffset&&clearInterval(t),window.scroll({left:0,top:window.pageYOffset-a})};return r.a.createElement(U.a,{in:i},r.a.createElement("div",{onClick:function(){t=setInterval(o,c)},role:"presentation",className:l.root},n))},Y=n(97),z=n(96),P=n(47),W=n.n(P),L=function(e){var t=e.children,n=Object(H.a)({disableHysteresis:!0,threshold:0});return r.a.cloneElement(t,{elevation:n?4:0})},q=function(e){function t(){return Object(d.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e={};return r.a.createElement("div",{className:e.root},r.a.createElement(z.a,null),r.a.createElement(L,null,r.a.createElement(Y.a,{position:"fixed"},r.a.createElement(B.a,null,r.a.createElement(W.a,{edge:"start","aria-label":"UniFree-forum"}),r.a.createElement(j.a,{variant:"h6",color:"inherit",className:e.title,component:s.b,to:"/"},"UniFree")))))}}]),t}(a.PureComponent),G=function(e){var t=e.component,n=Object(C.a)(e,["component"]);return r.a.createElement(m.a,Object.assign({},n,{component:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(q,null),r.a.createElement(B.a,null),r.a.createElement(t,e),r.a.createElement(J,{scrollStep:100,delayInMS:16.6},r.a.createElement(T.a,{color:"inherit",size:"small","aria-label":"scroll back to top"},r.a.createElement(A.a,null))))}}))},K=Object(i.a)({palette:{primary:{main:"#3B72AE"},secondary:{main:"#333333"},background:{main:"#fff"},text:{primary:"#464646",secondary:"#3B72AE",hint:"#f3cf45"}}});l.a.render(r.a.createElement(o.a,{theme:K},r.a.createElement((function(){return r.a.createElement(s.a,null,r.a.createElement(m.c,null,r.a.createElement(G,{exact:!0,path:"/",component:M}),r.a.createElement(G,{path:"*",component:u})))}),null)),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.cd90ef99.chunk.js.map