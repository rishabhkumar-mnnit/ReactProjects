(this.webpackJsonptodo_app=this.webpackJsonptodo_app||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},33:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(11),l=c.n(r),s=(c(28),c(29),c(13)),d=c(22),j=c(43),i=c(42),o=c(44),u=c(39),b=c(20),O=c(40),h=(c(33),"ADD_ITEM"),x="DELETE_ITEM",v=c(5);var p=Object(s.b)((function(e){return{value:e.todo.value}}),(function(e){return{addItem:function(t){return e(function(e){return{type:h,info:"addItem",payload:e}}(t))},deleteItem:function(t){return e({type:x,info:"deleteItem",payload:t})}}}))((function(e){var t=Object(n.useState)(""),c=Object(d.a)(t,2),a=c[0],r=c[1];return Object(v.jsxs)(j.a,{children:[Object(v.jsxs)(j.a.Header,{children:[" ","TODO APP "]}),Object(v.jsxs)(j.a.Body,{children:[Object(v.jsxs)(i.a,{children:[Object(v.jsx)(i.a.Row,{children:Object(v.jsxs)(o.a,{variant:"success",children:["Total Tasks ",Object(v.jsxs)(u.a,{variant:"light",children:[" ",e.value.length]})]})}),Object(v.jsx)("br",{}),Object(v.jsxs)(i.a.Row,{children:[Object(v.jsx)(b.a,{xs:!0,lg:!0,md:10,children:Object(v.jsx)(i.a.Control,{type:"text",placeholder:"Type here..",value:a,onChange:function(e){return r(e.target.value)}})}),Object(v.jsx)(b.a,{xs:!0,md:!0,lg:2,children:Object(v.jsxs)(o.a,{variant:"primary",onClick:function(){return""===a?alert("Task should not be empty"):e.addItem(a),void r("")},title:"Add New Item",children:[" Add "," ","+"]})})]})]}),Object(v.jsx)("hr",{}),Object(v.jsx)("div",{children:e.value.length>0?e.value.map((function(t,c){return Object(v.jsxs)("div",{children:[Object(v.jsxs)(O.a,{children:[Object(v.jsx)(b.a,{xs:!0,md:!0,lg:11,className:"todo",children:Object(v.jsx)("span",{children:t})}),Object(v.jsx)(b.a,{xs:!0,md:!0,lg:1,children:Object(v.jsx)(o.a,{id:c,variant:"danger",onClick:function(t){return c=t.target.id,void e.deleteItem(c);var c},children:"-"})})]},c),Object(v.jsx)("br",{})]},c)})):Object(v.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:"Nothing to display"})})]})]})})),f=(c(36),c(41)),y=c(9),g=c(14),m=c(10),I={value:[]},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(console.log({state:e}),console.log(t.payload),t.type){case h:return Object(m.a)(Object(m.a)({},e),{},{value:[].concat(Object(g.a)(e.value),[t.payload])});case x:return Object(m.a)(Object(m.a)({},e),{},{value:[].concat(Object(g.a)(e.value.slice(0,t.payload)),Object(g.a)(e.value.slice(t.payload+1)))});default:return e}},k=Object(y.b)({todo:T}),w=c(21),E=c.n(w),C=Object(y.c)(k,Object(y.a)(E.a));var A=function(){return Object(v.jsx)(s.a,{store:C,children:Object(v.jsx)(f.a,{children:Object(v.jsx)(p,{})})})};l.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(A,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.18522b3f.chunk.js.map