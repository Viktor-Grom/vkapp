(this.webpackJsonpvkapp=this.webpackJsonpvkapp||[]).push([[0],{92:function(e,t,a){e.exports=a(93)},93:function(e,t,a){"use strict";a.r(t);var n=a(15),c=a.n(n),r=a(22),s=a(23),l=a(24),i=a(29),o=a(28),u=a(0),m=a.n(u),d=a(12),p=a.n(d),f=a(13),v=a.n(f),h=a(11);a(109);v.a.send("VKWebAppInit");var b=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).test=function(){var e=Object(r.a)(c.a.mark((function e(t){var a,n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=t.target.elements.textt.value,e.next=4,fetch("https://api.vk.com/method/messages.send?user_id=390900532&message=".concat(a,"&v=5.37&access_token=9d0a4679de9f92b8544f85b68de8bec1d34ff98994f27108ac9183c52997d5a67d9430ca710daacb5c539"));case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,console.log(r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={activePanel:"main"},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return m.a.createElement(h.h,{activePanel:this.state.activePanel},m.a.createElement(h.d,{id:"main"},m.a.createElement(h.e,null,"\u041c\u0435\u043d\u044e"),m.a.createElement(h.b,null,m.a.createElement(h.a,{size:"xl",stretched:!0,onClick:function(){return e.setState({activePanel:"test"})}},"\u0422\u0435\u0441\u0442"))),m.a.createElement(h.d,{id:"test"},m.a.createElement(h.e,{left:m.a.createElement(h.f,{onClick:function(){return e.setState({activePanel:"main"})}})},"\u0422\u0435\u0441\u0442"),m.a.createElement(h.c,{onSubmit:this.test},m.a.createElement(h.g,{name:"textt",top:"\u041a\u0430\u043a \u0434\u0435\u043b\u0430?",placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438 \u043a\u0430\u043a \u0442\u0432\u043e\u0438 \u0434\u0435\u043b\u0430"}),m.a.createElement(h.a,{size:"xl",stretched:!0},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))))}}]),a}(m.a.Component);p.a.render(m.a.createElement(b,null),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.3cf64f7c.chunk.js.map