(this.webpackJsonpvkapp=this.webpackJsonpvkapp||[]).push([[0],{92:function(e,t,n){e.exports=n(93)},93:function(e,t,n){"use strict";n.r(t);var a=n(24),r=n(25),l=n(39),c=n(38),m=n(17),o=n.n(m),i=n(19),s=n(0),u=n.n(s),E=n(12),p=n.n(E),d=n(18),h=n.n(d),f=n(3);n(109);h.a.send("VKWebAppInit");var y="main",k=u.a.createElement(f.n,{size:"medium",style:{marginTop:"50%"}}),b=u.a.createElement(f.n,{size:"medium",style:{marginTop:"50%"}}),v=u.a.createElement(f.n,{size:"medium",style:{marginTop:"50%"}}),g=[u.a.createElement(f.e,null,u.a.createElement(f.b,{size:"xl",onClick:S},"\u041c\u043e\u044f \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430")),u.a.createElement(f.e,null,u.a.createElement(f.b,{size:"xl",onClick:J},"\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438"))],w="1",x="",j="",I="",T="",B="",z="",O="",_="",C="",W="",R="",A="",G="";function S(){return M.apply(this,arguments)}function M(){return(M=Object(i.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y="userMe",p.a.render(u.a.createElement(D,null),document.getElementById("root")),t="https://cors-anywhere.herokuapp.com/http://f0442357.xsph.ru/botTest/VkApp/userMeInfo.php?user_id="+x,e.next=5,fetch(t,{method:"GET"});case 5:return n=e.sent,e.next=8,n.json();case 8:n=e.sent,T=n.meStatus,B=n.meBalans,z=n.meActions,O=n.meWinRate,_=n.meWins,C=n.meLose,W=n.meWinRateDop,R=n.meGun,A=n.meWinStrick,G=n.meTime,b=1==n.accept?[u.a.createElement(f.e,null,u.a.createElement(f.c,{before:u.a.createElement(f.a,{src:j}),description:T},I),u.a.createElement(f.h,null,"\u0411\u0430\u043b\u0430\u043d\u0441: "+B),u.a.createElement(f.h,null,"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0439: "+z)),u.a.createElement(f.p,null),u.a.createElement(f.e,null,u.a.createElement(f.i,{header:"\u0412\u0438\u043d\u0440\u0435\u0439\u0442: "+O+"%"},u.a.createElement(f.m,{value:O}))),u.a.createElement(f.e,{style:{display:"flex"}},u.a.createElement(f.h,{indicator:u.a.createElement(f.d,{mode:"primary"},_)},"\u041f\u043e\u0431\u0435\u0434"),u.a.createElement(f.h,{indicator:u.a.createElement(f.d,{mode:"prominent"},C)},"\u041f\u043e\u0440\u0430\u0436\u0435\u043d\u0438\u0439")),u.a.createElement(f.e,null,u.a.createElement(f.h,{indicator:u.a.createElement(f.d,null,W)},"\u0428\u0430\u043d\u0441 \u043f\u043e\u0431\u0435\u0434\u044b"),u.a.createElement(f.h,{indicator:u.a.createElement(f.d,null,R)},"\u041e\u0440\u0443\u0436\u0438\u0435"),u.a.createElement(f.h,{indicator:u.a.createElement(f.d,null,A+" games")},"Winstrick")),u.a.createElement(f.p,null),u.a.createElement(f.e,null,u.a.createElement(f.f,null,"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0432 "+G),u.a.createElement(f.b,{size:"xl",onClick:V},"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"))]:u.a.createElement(f.e,null,u.a.createElement(f.c,{before:u.a.createElement(f.a,{src:j}),description:"\u042d\u0442\u043e \u0432\u044b"},I),u.a.createElement(f.h,{indicator:u.a.createElement(f.d,null,"\u0432\u044b \u043d\u0435 \u0441\u043e\u0441\u0442\u043e\u0438\u0442\u0435 \u0432 \u0431\u0435\u0441\u0435\u0434\u0435")},"\u041e\u0448\u0438\u0431\u043a\u0430")),p.a.render(u.a.createElement(D,null),document.getElementById("root"));case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(){b=u.a.createElement(f.n,{size:"medium",style:{marginTop:"50%"}}),p.a.render(u.a.createElement(D,null),document.getElementById("root")),S()}function J(){return L.apply(this,arguments)}function L(){return(L=Object(i.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y="users",p.a.render(u.a.createElement(D,null),document.getElementById("root")),t="https://cors-anywhere.herokuapp.com/http://f0442357.xsph.ru/botTest/VkApp/usersInfo.php?type="+w,e.next=5,fetch(t,{method:"GET"});case 5:return n=e.sent,e.next=8,n.json();case 8:for(n=e.sent,v=[u.a.createElement(f.e,null,u.a.createElement(f.g,{onChange:function(e){w=document.getElementById("sortType").value,P()}},u.a.createElement(f.o,{value:w,id:"sortType",top:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043f\u043e\u0441\u043e\u0431 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438"},u.a.createElement("option",{value:"1"},"\u041f\u043e \u0432\u0438\u043d\u0440\u0435\u0439\u0442\u0443"),u.a.createElement("option",{value:"2"},"\u041f\u043e \u0434\u0435\u043d\u044c\u0433\u0430\u043c"))))],a=1;a<=Object.keys(n).length;a++)v=[v,u.a.createElement(f.e,null,u.a.createElement(f.f,null,a+" \u043c\u0435\u0441\u0442\u043e"),u.a.createElement(f.c,{before:u.a.createElement(f.a,{src:n[a].link}),description:n[a].status},n[a].name),"  ",u.a.createElement(f.i,{header:"\u0412\u0438\u043d\u0440\u0435\u0439\u0442: "+n[a].winRate+"%"},u.a.createElement(f.m,{value:n[a].winRate})),u.a.createElement(f.h,{indicator:u.a.createElement(f.d,null,n[a].money)},"\u0411\u0430\u043b\u0430\u043d\u0441"),u.a.createElement(f.h,{indicator:u.a.createElement(f.d,null,n[a].winSchance)},"\u0428\u0430\u043d\u0441 \u043d\u0430 \u043f\u043e\u0431\u0435\u0434\u0443"))];v=[v,u.a.createElement(f.e,null,u.a.createElement(f.f,null,"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0432 "+n[1].meTime),u.a.createElement(f.b,{size:"xl",onClick:P},"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"))],p.a.render(u.a.createElement(D,null),document.getElementById("root"));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return q.apply(this,arguments)}function q(){return(q=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v=u.a.createElement(f.n,{size:"medium",style:{marginTop:"50%"}}),p.a.render(u.a.createElement(D,null),document.getElementById("root")),J();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(i.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x=new URLSearchParams(window.location.search).get("vk_user_id"),t="https://cors-anywhere.herokuapp.com/https://api.vk.com/method/users.get?user_id="+x+"&v=5.107&fields=photo_100&access_token=9d0a4679de9f92b8544f85b68de8bec1d34ff98994f27108ac9183c52997d5a67d9430ca710daacb5c539",e.next=4,fetch(t,{method:"GET"});case 4:return n=e.sent,e.next=7,n.json();case 7:n=e.sent,j=n.response[0].photo_100,I=n.response[0].first_name+" "+n.response[0].last_name,k=[u.a.createElement(f.e,null,u.a.createElement(f.c,{before:u.a.createElement(f.a,{src:j}),description:"\u042d\u0442\u043e \u0412\u044b"},I)),g],p.a.render(u.a.createElement(D,null),document.getElementById("root"));case 12:case"end":return e.stop()}}),e)})))();var D=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return u.a.createElement(f.q,{activePanel:y},u.a.createElement(f.j,{id:"main"},u.a.createElement(f.k,null,"\u041c\u0435\u043d\u044e"),k),u.a.createElement(f.j,{id:"userMe"},u.a.createElement(f.k,{left:u.a.createElement(f.l,{onClick:function(){y="main",p.a.render(u.a.createElement(n,null),document.getElementById("root"))}})},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"),b),u.a.createElement(f.j,{id:"users"},u.a.createElement(f.k,{left:u.a.createElement(f.l,{onClick:function(){y="main",p.a.render(u.a.createElement(n,null),document.getElementById("root"))}})},"\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438"),v))}}]),n}(u.a.Component);p.a.render(u.a.createElement(D,null),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.58f8e0a7.chunk.js.map