(this.webpackJsonpvkapp=this.webpackJsonpvkapp||[]).push([[0],{93:function(e,t,n){e.exports=n(94)},94:function(e,t,n){"use strict";n.r(t);var a=n(24),r=n(25),c=n(38),l=n(37),m=n(17),o=n.n(m),s=n(19),i=n(0),u=n.n(i),p=n(7),d=n.n(p),E=n(18),h=n.n(E),f=n(3);n(110);h.a.send("VKWebAppInit");var k="main",y=u.a.createElement(f.m,{size:"medium",style:{marginTop:"50%"}}),b=u.a.createElement(f.m,{size:"medium",style:{marginTop:"50%"}}),g=u.a.createElement(f.m,{size:"medium",style:{marginTop:"50%"}}),v=[u.a.createElement(f.e,null,u.a.createElement(f.b,{size:"xl",onClick:G},"\u041c\u043e\u044f \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430")),u.a.createElement(f.e,null,u.a.createElement(f.b,{size:"xl",onClick:function(){return M.apply(this,arguments)}},"\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438"))],w="",x="",j="",I="",T="",B="",_="",O="",z="",C="",W="",A="",R="";function G(){return S.apply(this,arguments)}function S(){return(S=Object(s.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k="userMe",d.a.render(u.a.createElement(J,null),document.getElementById("root")),t="https://cors-anywhere.herokuapp.com/http://f0442357.xsph.ru/botTest/VkApp/userMeInfo.php?user_id="+w,e.next=5,fetch(t,{method:"GET"});case 5:return n=e.sent,e.next=8,n.json();case 8:n=e.sent,I=n.meStatus,T=n.meBalans,B=n.meActions,_=n.meWinRate,O=n.meWins,z=n.meLose,C=n.meWinRateDop,W=n.meGun,A=n.meWinStrick,R=n.meTime,b=[u.a.createElement(f.e,null,u.a.createElement(f.c,{before:u.a.createElement(f.a,{src:x}),description:I},j),u.a.createElement(f.g,null,"\u0411\u0430\u043b\u0430\u043d\u0441: "+T),u.a.createElement(f.g,null,"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0439: "+B)),u.a.createElement(f.n,null),u.a.createElement(f.e,null,u.a.createElement(f.h,{header:"\u0412\u0438\u043d\u0440\u0435\u0439\u0442: "+_+"%"},u.a.createElement(f.l,{value:_}))),u.a.createElement(f.e,{style:{display:"flex"}},u.a.createElement(f.g,{indicator:u.a.createElement(f.d,{mode:"primary"},O)},"\u041f\u043e\u0431\u0435\u0434"),u.a.createElement(f.g,{indicator:u.a.createElement(f.d,{mode:"prominent"},z)},"\u041f\u043e\u0440\u0430\u0436\u0435\u043d\u0438\u0439")),u.a.createElement(f.e,null,u.a.createElement(f.g,{indicator:u.a.createElement(f.d,null,C)},"\u0428\u0430\u043d\u0441 \u043f\u043e\u0431\u0435\u0434\u044b"),u.a.createElement(f.g,{indicator:u.a.createElement(f.d,null,W)},"\u041e\u0440\u0443\u0436\u0438\u0435"),u.a.createElement(f.g,{indicator:u.a.createElement(f.d,null,A+" games")},"Winstrick")),u.a.createElement(f.n,null),u.a.createElement(f.e,null,u.a.createElement(f.f,null,"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0432 "+R),u.a.createElement(f.b,{size:"xl",onClick:V},"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"))],d.a.render(u.a.createElement(J,null),document.getElementById("root"));case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(){b=u.a.createElement(f.m,{size:"medium",style:{marginTop:"50%"}}),d.a.render(u.a.createElement(J,null),document.getElementById("root")),G()}function M(){return(M=Object(s.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k="users",d.a.render(u.a.createElement(J,null),document.getElementById("root")),"https://cors-anywhere.herokuapp.com/http://f0442357.xsph.ru/botTest/VkApp/usersInfo.php",e.next=5,fetch("https://cors-anywhere.herokuapp.com/http://f0442357.xsph.ru/botTest/VkApp/usersInfo.php",{method:"GET"});case 5:return t=e.sent,e.next=8,t.json();case 8:for(t=e.sent,g=[],n=1;n<=Object.keys(t).length;n++)g=[g,u.a.createElement(f.e,null,u.a.createElement(f.f,null,n+" \u043c\u0435\u0441\u0442\u043e"),u.a.createElement(f.c,{indicator:u.a.createElement(f.d,null,"\u0428\u0430\u043d\u0441 \u043d\u0430 \u043f\u043e\u0431\u0435\u0434\u0443: "+t[n].winSchance),before:u.a.createElement(f.a,{src:t[n].link}),description:t[n].status},t[n].name),"  ",u.a.createElement(f.h,{header:"\u0412\u0438\u043d\u0440\u0435\u0439\u0442: "+t[n].winRate+"%"},u.a.createElement(f.l,{value:t[n].winRate})),"   ")];d.a.render(u.a.createElement(J,null),document.getElementById("root"));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(s.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w=new URLSearchParams(window.location.search).get("vk_user_id"),t="https://cors-anywhere.herokuapp.com/https://api.vk.com/method/users.get?user_id="+w+"&v=5.107&fields=photo_100&access_token=9d0a4679de9f92b8544f85b68de8bec1d34ff98994f27108ac9183c52997d5a67d9430ca710daacb5c539",e.next=4,fetch(t,{method:"GET"});case 4:return n=e.sent,e.next=7,n.json();case 7:n=e.sent,x=n.response[0].photo_100,j=n.response[0].first_name+" "+n.response[0].last_name,y=[u.a.createElement(f.e,null,u.a.createElement(f.c,{before:u.a.createElement(f.a,{src:x}),description:"\u042d\u0442\u043e \u0412\u044b"},j)),v],d.a.render(u.a.createElement(J,null),document.getElementById("root"));case 12:case"end":return e.stop()}}),e)})))();var J=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return u.a.createElement(f.o,{activePanel:k},u.a.createElement(f.i,{id:"main"},u.a.createElement(f.j,null,"\u041c\u0435\u043d\u044e"),y),u.a.createElement(f.i,{id:"userMe"},u.a.createElement(f.j,{left:u.a.createElement(f.k,{onClick:function(){k="main",d.a.render(u.a.createElement(n,null),document.getElementById("root"))}})},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"),b),u.a.createElement(f.i,{id:"users"},u.a.createElement(f.j,{left:u.a.createElement(f.k,{onClick:function(){k="main",d.a.render(u.a.createElement(n,null),document.getElementById("root"))}})},"\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438"),g))}}]),n}(u.a.Component);d.a.render(u.a.createElement(J,null),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.013589e4.chunk.js.map