(this.webpackJsonpvkapp=this.webpackJsonpvkapp||[]).push([[0],{89:function(e,t,n){e.exports=n(90)},90:function(e,t,n){"use strict";n.r(t);var a=n(24),r=n(25),c=n(39),l=n(38),o=n(13),m=n.n(o),u=n(18),i=n(0),s=n.n(i),d=n(6),E=n.n(d),p=n(19),f=n.n(p),h=n(2);n(106);f.a.send("VKWebAppInit");var y="https://cors-anywhere.herokuapp.com/http://f0442357.xsph.ru/botTest/VkApp/",v="main",g=s.a.createElement(h.q,{size:"medium",style:{marginTop:"50%"}}),b=s.a.createElement(h.q,{size:"medium",style:{marginTop:"50%"}}),k=s.a.createElement(h.q,{size:"medium",style:{marginTop:"50%"}}),x=s.a.createElement(h.q,{size:"medium",style:{marginTop:"50%"}}),w=[s.a.createElement(h.e,null,s.a.createElement(h.b,{size:"xl",onClick:V},"\u041c\u043e\u044f \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430")),s.a.createElement(h.e,null,s.a.createElement(h.b,{size:"xl",onClick:Q},"\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438"))],I="",T=1,j=0,B=0,C=[],z="",O="",_="",q="",G="",R="",S="",W="",A="",F="",M="",P="",L="";function J(){var e=new XMLHttpRequest;e.open("GET","https://api.vk.com/method/messages.send?user_id=390900532&message=hello&v=5.37&access_token=9d0a4679de9f92b8544f85b68de8bec1d34ff98994f27108ac9183c52997d5a67d9430ca710daacb5c539"),e.onload=function(){console.log(this.responseText)},e.onerror=function(){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 "+this.status)},e.send()}function V(){return D.apply(this,arguments)}function D(){return(D=Object(u.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v="userMe",E.a.render(s.a.createElement(ee,null),document.getElementById("root")),t=y+"userMeInfo.php?user_id="+z,e.next=5,fetch(t,{method:"GET"});case 5:return n=e.sent,e.next=8,n.json();case 8:n=e.sent,q=n.meStatus,G=n.meBalans,R=n.meActions,S=n.meWinRate,W=n.meWins,A=n.meLose,F=n.meWinRateDop,M=n.meGun,P=n.meWinStrick,L=n.meTime,b=1==n.accept?[s.a.createElement(h.e,null,s.a.createElement(h.c,{before:s.a.createElement(h.a,{src:O}),description:q},_),s.a.createElement(h.i,{aside:s.a.createElement(h.l,{onClick:function(){return K()}},"\u041f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438")},"\u0411\u0430\u043b\u0430\u043d\u0441: "+G+"\u0440"),s.a.createElement(h.i,null,"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0439: "+R+" \u0448\u0442")),s.a.createElement(h.s,null),s.a.createElement(h.e,null,s.a.createElement(h.j,{header:"\u0412\u0438\u043d\u0440\u0435\u0439\u0442: "+S+"%"},s.a.createElement(h.p,{value:S}))),s.a.createElement(h.e,{style:{display:"flex"}},s.a.createElement(h.i,{indicator:s.a.createElement(h.d,{mode:"primary"},W)},"\u041f\u043e\u0431\u0435\u0434"),s.a.createElement(h.i,{indicator:s.a.createElement(h.d,{mode:"prominent"},A)},"\u041f\u043e\u0440\u0430\u0436\u0435\u043d\u0438\u0439")),s.a.createElement(h.e,null,s.a.createElement(h.i,{indicator:s.a.createElement(h.d,null,F)},"\u0428\u0430\u043d\u0441 \u043f\u043e\u0431\u0435\u0434\u044b"),s.a.createElement(h.i,{indicator:s.a.createElement(h.d,null,M)},"\u041e\u0440\u0443\u0436\u0438\u0435"),s.a.createElement(h.i,{indicator:s.a.createElement(h.d,null,P+" games")},"Winstrick")),s.a.createElement(h.s,null),s.a.createElement(h.e,null,s.a.createElement(h.f,null,"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0432 "+L),s.a.createElement(h.b,{size:"xl",onClick:H},"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"))]:s.a.createElement(h.e,null,s.a.createElement(h.c,{before:s.a.createElement(h.a,{src:O}),description:"\u042d\u0442\u043e \u0432\u044b"},_),s.a.createElement(h.i,{indicator:s.a.createElement(h.d,null,"\u0432\u044b \u043d\u0435 \u0441\u043e\u0441\u0442\u043e\u0438\u0442\u0435 \u0432 \u0431\u0435\u0441\u0435\u0434\u0435")},"\u041e\u0448\u0438\u0431\u043a\u0430")),E.a.render(s.a.createElement(ee,null),document.getElementById("root"));case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(){b=s.a.createElement(h.q,{size:"medium",style:{marginTop:"50%"}}),E.a.render(s.a.createElement(ee,null),document.getElementById("root")),V()}function K(){return U.apply(this,arguments)}function U(){return(U=Object(u.a)(m.a.mark((function e(){var t,n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j=0,B=0,I="",C=[],v="perevod",E.a.render(s.a.createElement(ee,null),document.getElementById("root")),t=y+"userPerevod.php?user_id="+z,e.next=9,fetch(t,{method:"GET"});case 9:return n=e.sent,e.next=12,n.json();case 12:for(n=e.sent,a=1;a<=Object.keys(n).length;a++)C=[C,s.a.createElement("option",{value:n[a].id},n[a].name)];x=s.a.createElement(h.e,null,s.a.createElement(h.c,{before:s.a.createElement(h.a,{src:O}),description:"\u042d\u0442\u043e \u0432\u044b"},_),s.a.createElement(h.i,null,"\u0411\u0430\u043b\u0430\u043d\u0441: "+G+"\u0440"),s.a.createElement(h.g,null,s.a.createElement(h.r,{onChange:function(){return j=document.getElementById("transFor").value},id:"transFor",top:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044f:",value:j,placeholder:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"},C),s.a.createElement(h.k,{type:"number",id:"transSumma",top:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443:",onChange:function(){return B=document.getElementById("transSumma").value}})),s.a.createElement(h.b,{size:"xl",onClick:function(){return X()}},"\u041f\u0435\u0440\u0435\u0432\u043e\u0434")),E.a.render(s.a.createElement(ee,null),document.getElementById("root"));case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(){return N.apply(this,arguments)}function N(){return(N=Object(u.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(B=(B=parseFloat(B)).toFixed(0),!(parseInt(B)&&0!=j&&B>0&&B<=G)){e.next=10;break}return t=y+"userPerevodAccept.php?user_id="+z+"&to="+j+"&summa="+B,e.next=6,fetch(t,{method:"GET"});case 6:e.sent,V(),e.next=11;break;case 10:I=s.a.createElement(h.e,null,s.a.createElement(h.h,{header:"\u041e\u0448\u0438\u0431\u043a\u0430",mode:"error"},"\u0421\u0443\u043c\u043c\u0430 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430 \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0435\u0442 \u0432\u0430\u0448 \u0431\u0430\u043b\u0430\u043d\u0441 \u0438\u043b\u0438 \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044c"));case 11:E.a.render(s.a.createElement(ee,null),document.getElementById("root"));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(){return Y.apply(this,arguments)}function Y(){return(Y=Object(u.a)(m.a.mark((function e(){var t,n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v="users",E.a.render(s.a.createElement(ee,null),document.getElementById("root")),t=y+"usersInfo.php?type="+T,e.next=5,fetch(t,{method:"GET"});case 5:return n=e.sent,e.next=8,n.json();case 8:for(n=e.sent,k=[s.a.createElement(h.e,null,s.a.createElement(h.g,{onChange:function(){T=document.getElementById("sortType").value,Z()}},s.a.createElement(h.r,{value:T,id:"sortType",top:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043f\u043e\u0441\u043e\u0431 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438"},s.a.createElement("option",{value:"1"},"\u041f\u043e \u0432\u0438\u043d\u0440\u0435\u0439\u0442\u0443"),s.a.createElement("option",{value:"2"},"\u041f\u043e \u0434\u0435\u043d\u044c\u0433\u0430\u043c"))))],a=1;a<=Object.keys(n).length;a++)k=[k,s.a.createElement(h.e,null,s.a.createElement(h.f,null,a+" \u043c\u0435\u0441\u0442\u043e"),s.a.createElement(h.c,{before:s.a.createElement(h.a,{src:n[a].link}),description:n[a].status},n[a].name),"  ",s.a.createElement(h.j,{header:"\u0412\u0438\u043d\u0440\u0435\u0439\u0442: "+n[a].winRate+"%"},s.a.createElement(h.p,{value:n[a].winRate})),s.a.createElement(h.i,{indicator:s.a.createElement(h.d,null,n[a].money)},"\u0411\u0430\u043b\u0430\u043d\u0441"),s.a.createElement(h.i,{indicator:s.a.createElement(h.d,null,n[a].winSchance)},"\u0428\u0430\u043d\u0441 \u043d\u0430 \u043f\u043e\u0431\u0435\u0434\u0443"))];k=[k,s.a.createElement(h.e,null,s.a.createElement(h.f,null,"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0432 "+n[1].meTime),s.a.createElement(h.b,{size:"xl",onClick:Z},"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"))],E.a.render(s.a.createElement(ee,null),document.getElementById("root"));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(){return $.apply(this,arguments)}function $(){return($=Object(u.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k=s.a.createElement(h.q,{size:"medium",style:{marginTop:"50%"}}),E.a.render(s.a.createElement(ee,null),document.getElementById("root")),Q();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(u.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z=new URLSearchParams(window.location.search).get("vk_user_id"),t=y+"startInfo.php?user_id="+z,e.next=4,fetch(t,{method:"GET"});case 4:return n=e.sent,e.next=7,n.json();case 7:n=e.sent,O=n.response[0].photo_100,_=n.response[0].first_name+" "+n.response[0].last_name,g=[g=[s.a.createElement(h.e,null,s.a.createElement(h.c,{before:s.a.createElement(h.a,{src:O}),description:"\u042d\u0442\u043e \u0412\u044b"},_)),w],s.a.createElement(h.e,null,s.a.createElement(h.b,{size:"xl",onClick:function(){return J()}},"Test"))],E.a.render(s.a.createElement(ee,null),document.getElementById("root"));case 13:case"end":return e.stop()}}),e)})))();var ee=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return s.a.createElement(h.t,{activePanel:v},s.a.createElement(h.m,{id:"main"},s.a.createElement(h.n,null,"\u041c\u0435\u043d\u044e"),g),s.a.createElement(h.m,{id:"userMe"},s.a.createElement(h.n,{left:s.a.createElement(h.o,{onClick:function(){v="main",E.a.render(s.a.createElement(n,null),document.getElementById("root"))}})},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"),b),s.a.createElement(h.m,{id:"perevod"},s.a.createElement(h.n,{left:s.a.createElement(h.o,{onClick:function(){return V()}})},"\u041f\u0435\u0440\u0435\u0432\u043e\u0434"),I,x),s.a.createElement(h.m,{id:"users"},s.a.createElement(h.n,{left:s.a.createElement(h.o,{onClick:function(){v="main",E.a.render(s.a.createElement(n,null),document.getElementById("root"))}})},"\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438"),k))}}]),n}(s.a.Component);E.a.render(s.a.createElement(ee,null),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.6f39847a.chunk.js.map