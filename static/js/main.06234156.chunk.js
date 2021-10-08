(this["webpackJsonprick-and-morty-api"]=this["webpackJsonprick-and-morty-api"]||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var c,n=a(0),r=a.n(n),s=a(23),i=a.n(s),o=a(10),u=a(15),l=a(6),j=a(16),d=a(22),h=a.n(d),O=(a(71),a(2)),b=function(e){var t=e.name,a=e.species,c=e.image,n=e.stat,r=e.id;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"characters__item",children:[Object(O.jsx)("img",{src:c,alt:"Characters",className:"characters__image"}),Object(O.jsxs)("div",{className:"characters__information",children:[Object(O.jsx)(u.b,{to:{pathname:"/details/".concat(r)},style:{textDecoration:"none"},children:Object(O.jsx)("h3",{className:"characters__name",children:t})}),Object(O.jsxs)("p",{className:"characters__species",children:[n," ","-"," ",a]}),Object(O.jsx)("div",{className:"characters__location",children:Object(O.jsx)("p",{className:"characters__location--info",children:"Last known location:"})})]})]})})},p=function(e){return e.charactersReducer.charasters},f=function(e){return e.charactersLength},m=(a(77),function(){var e=Object(o.c)(p),t=Object(n.useState)(!0),a=Object(j.a)(t,2),c=a[0],r=a[1];return console.log(e),setTimeout((function(){r(!1)}),1e3),c?Object(O.jsx)("div",{className:"loader loader__characters-list",children:Object(O.jsx)(h.a,{type:"TailSpin",color:"#00BFFF",height:100,width:100})}):Object(O.jsx)("div",{className:"charachers",children:e.map((function(e){return Object(O.jsx)(b,{name:e.name,species:e.species,image:e.image,stat:e.status,id:e.id},e.id)}))})}),_=a(17),v=function(e){var t=e.handlerOnClick,a=e.className,c=e.field;return Object(O.jsx)("button",{onClick:t,className:"button ".concat(a),children:c})};!function(e){e.LOAD_SUCCESS="CHARACTERS_LOAD_SUCCESS",e.LOAD_CHARACTER="LOAD_CHARACTER",e.SET_LENGTH="SET_LENGTH"}(c||(c={}));var x,A,g=function(e){return{type:c.SET_LENGTH,payload:e}},S=(a(78),function(){var e=Object(l.g)().id,t=void 0===e?"1":e,a=Object(o.b)(),r=Object(o.c)(f),s=Object(n.useState)([]),i=Object(j.a)(s,2),d=i[0],h=i[1],b=function(){var e=Math.max(1,+t-1);return"/page/".concat(e)},p=function(){var e=Math.min(r,+t+1);return"/page/".concat(e)},m=function(e,t){for(var a=t,c=[],n=e;n<=a;n++)c.push(n);return c};return Object(n.useEffect)((function(){var e,n=+t,s=m(1,Math.min(1,r)),i=m(Math.min(r,r-1+1),r),o=[];o=n<5?m(2,5):r-5<n?m(r-5,r-1):m(n-1,n+1),h([].concat(Object(_.a)(s),Object(_.a)(o),Object(_.a)(i))),a((e={page:+t},{type:c.LOAD_CHARACTER,payload:e}))}),[t,r]),Object(O.jsxs)("div",{className:"pagination",children:[Object(O.jsx)(u.b,{to:b,children:Object(O.jsx)(v,{handlerOnClick:b,className:"pagination__button",field:"Prev Page"})}),d.map((function(e){return Object(O.jsx)(u.b,{style:{textDecoration:"none"},to:{pathname:"/page/".concat(e)},children:Object(O.jsx)("p",{className:e===+t?"pagination__item--active":"pagination__item",children:e})},e)})),Object(O.jsx)(u.b,{to:p,children:Object(O.jsx)(v,{handlerOnClick:p,className:"pagination__button",field:"Next Page"})})]})}),E=(a(79),function(e){var t=e.handlerSubmit,a=e.children,c=e.className;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("form",{className:c,onSubmit:t,children:a})})}),C=(a(80),function(e){var t=e.placeholder,a=e.handlerChange,c=e.searchValue,n=e.className;return Object(O.jsx)("input",{className:"input ".concat(n),placeholder:t,value:c,onChange:a})}),y=(a(81),function(e){var t=e.items,a=e.value,c=e.name,n=e.handleChange,r=e.className;return Object(O.jsx)("select",{className:"select ".concat(r),name:c,onChange:n,value:a,children:t.map((function(e){return Object(O.jsx)("option",{selected:e.value===a,value:e.value,children:e.value},e.id)}))})});(A=x||(x={})).LOAD_SEARCH="CHARACTERS_LOAD_SEARCH",A.SET_SEARCH="CHARACTERS_SET_SEARCH",A.LOAD_MORE="CHARACTERS_LOAD_MORE",A.LOAD_FAILURE="CHARACTERS_LOAD_FAILURE",A.SET_PAGE_SEARCH="SET_PAGE_SEARCH",A.SET_LOAD_CHARACTERS="SET_LOAD_CHARACTERS",A.LOAD_PAGE="CHARACTERS_LOAD_PAGE";var R,L=function(e){return{type:x.LOAD_SEARCH,payload:e}},D=function(e){return{type:x.SET_SEARCH,payload:e}},T=function(e){return{type:x.LOAD_MORE,payload:e}},N=function(e){return{type:x.LOAD_FAILURE,payload:e}},w=function(e){return{type:x.SET_LOAD_CHARACTERS,payload:e}},H=[{id:1,value:"Alive"},{id:2,value:"Dead"},{id:3,value:"unknown"}],k=[{id:1,value:"Female"},{id:2,value:"Male"},{id:3,value:"Genderless"},{id:4,value:"unknown"}],F=function(){var e=Object(n.useState)("Alive"),t=Object(j.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)("Female"),s=Object(j.a)(r,2),i=s[0],u=s[1],d=Object(n.useState)(""),h=Object(j.a)(d,2),b=h[0],p=h[1],f=Object(l.f)(),m=Object(o.b)();b.replace(/%20/g," ");var _=function(e){e.preventDefault(),f.push("/search?name=".concat(b,"&gender=").concat(i,"&status=").concat(a)),p(""),m(L({page:1,name:b||"",gender:i||"",status:a||""})),m(N(!1))};return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{children:Object(O.jsxs)(E,{handlerSubmit:_,className:"form",children:[Object(O.jsx)(C,{placeholder:"Find your hero",searchValue:b,handlerChange:function(e){p(e.target.value)},className:"characters__input"}),Object(O.jsx)(y,{name:"characterStatus",value:a,handleChange:function(e){c(e.target.value)},items:H,className:"custom__select"}),Object(O.jsx)(y,{name:"characterGender",value:i,handleChange:function(e){u(e.target.value)},items:k,className:"custom__select"}),Object(O.jsx)(v,{handlerOnClick:_,className:"pagination__button pagination__button--search",field:"Search"})]})})})},M=function(e){return e.charactersSearch.loading},G=function(e){return e.charactersSearch.loadingMore},I=function(e){return e.charactersSearch.searchFailure},P=function(e){return e.charactersSearch.charasters},U=(a(82),function(){var e=Object(o.c)(P),t=Object(o.c)(M),a=Object(o.c)(G),c=Object(o.c)(f),r=Object(o.c)(I),s=Object(o.b)(),i=Object(n.useState)(1),l=Object(j.a)(i,2),d=l[0],b=l[1],p=new URLSearchParams(window.location.search),m=p.get("name"),_=p.get("gender"),A=p.get("status");return Object(n.useEffect)((function(){s(L({page:d,name:m||"",gender:_||"",status:A||""}))}),[d,m,_,A]),r?Object(O.jsx)("div",{children:Object(O.jsx)("h1",{children:"Hero not Found"})}):Object(O.jsxs)(O.Fragment,{children:[t?Object(O.jsx)("div",{className:"charachers",children:e.map((function(e){return Object(O.jsxs)("div",{className:"characters__item",children:[Object(O.jsx)("img",{src:e.image,alt:"Characters",className:"characters__image"}),Object(O.jsxs)("div",{className:"characters__information",children:[Object(O.jsx)(u.b,{to:{pathname:"/details/".concat(e.id)},style:{textDecoration:"none"},children:Object(O.jsx)("h3",{className:"characters__name",children:e.name})}),Object(O.jsxs)("p",{className:"characters__species",children:[" ","-"," ",e.species]}),Object(O.jsx)("div",{className:"characters__location",children:Object(O.jsx)("p",{className:"characters__location--info",children:"Last known location:"})})]})]},e.id)}))}):Object(O.jsx)("div",{className:"loader loader__search-page",children:Object(O.jsx)(h.a,{type:"TailSpin",color:"#00BFFF",height:100,width:100})}),a?Object(O.jsx)("div",{className:"loader loader__search-page",children:Object(O.jsx)(h.a,{type:"TailSpin",color:"#00BFFF",height:50,width:50})}):Object(O.jsx)(v,{handlerOnClick:function(){var e;d!==c&&(s(T(!0)),b(d+1),s((e={page:d,name:m||"",gender:_||"",status:A||""},{type:x.LOAD_PAGE,payload:e})))},className:d===c?"button__show-more__disabled":"button__show-more",field:"Show More"})]})}),B=(a(83),function(){return Object(O.jsxs)("div",{className:"home__page",children:[Object(O.jsx)("h1",{children:"Rick And Morty Api"}),Object(O.jsx)(u.b,{to:"/page/1",style:{textDecoration:"none"},children:Object(O.jsx)("h4",{className:"home__link",children:"Find your Characters"})})]})});!function(e){e.DETAILS="CHARACTERS_DETAILS",e.LOAD_DETAILS="CHARACTERS_LOAD_DETAILS"}(R||(R={}));var J,V=function(e){return{type:R.LOAD_DETAILS,payload:e}},q=function(){var e=Object(l.g)().id,t=void 0===e?"1":e,a=Object(o.c)((function(e){return e.charactersDetails})),c=Object(o.b)();return Object(n.useEffect)((function(){c(function(e){return{type:R.DETAILS,payload:e}}(+t))}),[]),Object(O.jsxs)("div",{className:"details",children:[Object(O.jsx)("img",{src:a.image,alt:"Characters"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:a.name}),Object(O.jsx)("p",{children:a.species}),Object(O.jsx)("div",{})]})]})},z=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(u.a,{children:Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{exact:!0,path:"/",component:B}),Object(O.jsxs)(l.a,{path:"/page/:id",children:[Object(O.jsx)(F,{}),Object(O.jsx)(S,{}),Object(O.jsx)(m,{})]}),Object(O.jsx)(l.a,{path:"/details/:id",component:q}),Object(O.jsxs)(l.a,{path:"/search/",children:[Object(O.jsx)(F,{}),Object(O.jsx)(U,{})]})]})})})},K=a(19),Q=a(43),W={charasters:[],page:1,loading:!1,loadingMore:!0,searchFailure:!1},X=a(11),Y={id:0,name:"",status:"",type:"",gender:"",image:"",url:"",species:"",alive:"",location:""},Z={charasters:[],loading:!1,loadingMore:!1,searchFailure:!1,page:1};!function(e){e.PAGE="CHARACTERS_PAGE"}(J||(J={}));var $=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J.PAGE:return t.payload;default:return e}},ee=Object(K.b)({charactersReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.LOAD_SUCCESS:return{charasters:Object(_.a)(t.payload),page:1,loading:!0,loadingMore:!1,searchFailure:!0};default:return e}},charactersPage:$,charactersLength:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.SET_LENGTH:return t.payload;default:return e}},charactersSearch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x.SET_SEARCH:var a=t,c=a.payload;return Object(X.a)(Object(X.a)({},e),{},{charasters:Object(_.a)(c),loading:!0});case x.SET_LOAD_CHARACTERS:var n=t,r=n.payload;return Object(X.a)(Object(X.a)({},e),{},{charasters:[].concat(Object(_.a)(e.charasters),Object(_.a)(r))});case x.LOAD_MORE:var s=t,i=s.payload;return Object(X.a)(Object(X.a)({},e),{},{loadingMore:i});case x.LOAD_FAILURE:var o=t,u=o.payload;return Object(X.a)(Object(X.a)({},e),{},{searchFailure:u});default:return e}},charactersID:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.DETAILS:return t.payload;default:return e}},charactersDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.LOAD_DETAILS:return Object(X.a)(Object(X.a)({},e),t.payload);default:return e}}}),te=a(7),ae=a.n(te),ce=a(5),ne=a(31),re=a(32),se=a.n(re),ie=function(){var e=Object(ne.a)(ae.a.mark((function e(t){var a;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.entries(t).map((function(e){var t=Object(j.a)(e,2),a=t[0],c=t[1];return"".concat(a,"=").concat(c)})).join("&"),e.abrupt("return",se.a.get("https://rickandmortyapi.com/api/character/?".concat(a)).then((function(e){return e.data})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),oe=function(){var e=Object(ne.a)(ae.a.mark((function e(t){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",se.a.get("https://rickandmortyapi.com/api/character/".concat(t)).then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ue=ae.a.mark(je),le=ae.a.mark(de);function je(e){var t,a;return ae.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.next=3,Object(ce.b)(ie,t);case 3:return a=n.sent,n.next=6,Object(ce.e)((r=a.results,{type:c.LOAD_SUCCESS,payload:r}));case 6:return n.next=8,Object(ce.e)(g(a.info.pages));case 8:case"end":return n.stop()}var r}),ue)}function de(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ce.f)(c.LOAD_CHARACTER,je);case 2:case"end":return e.stop()}}),le)}var he=ae.a.mark(be),Oe=ae.a.mark(pe);function be(e){var t,a;return ae.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,c.next=3,Object(ce.b)(oe,t);case 3:return a=c.sent,c.next=6,Object(ce.e)(V(a));case 6:case"end":return c.stop()}}),he)}function pe(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ce.f)(R.DETAILS,be);case 2:case"end":return e.stop()}}),Oe)}var fe=ae.a.mark(ve),me=ae.a.mark(xe),_e=ae.a.mark(Ae);function ve(e){var t,a;return ae.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,c.next=3,Object(ce.c)(500);case 3:return c.prev=3,c.next=6,Object(ce.b)(ie,t);case 6:return a=c.sent,c.next=9,Object(ce.e)(g(a.info.pages));case 9:return c.next=11,Object(ce.e)(D(a.results));case 11:return c.next=13,Object(ce.e)(T(!1));case 13:c.next=20;break;case 15:return c.prev=15,c.t0=c.catch(3),c.next=19,Object(ce.e)(N(!0));case 19:console.log("hero not found");case 20:case"end":return c.stop()}}),fe,null,[[3,15]])}function xe(e){var t,a;return ae.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,c.next=3,Object(ce.c)(500);case 3:return c.next=5,Object(ce.b)(ie,t);case 5:return a=c.sent,c.next=8,Object(ce.e)(w(a.results));case 8:case"end":return c.stop()}}),me)}function Ae(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ce.f)(x.LOAD_SEARCH,ve);case 2:return e.next=4,Object(ce.f)(x.LOAD_PAGE,xe);case 4:case"end":return e.stop()}}),_e)}var ge=ae.a.mark(Se);function Se(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ce.a)([Object(ce.d)(de),Object(ce.d)(pe),Object(ce.d)(Ae)]);case 2:case"end":return e.stop()}}),ge)}var Ee=Se,Ce=Object(Q.a)(),ye=Object(K.d)(ee,Object(K.a)(Ce));Ce.run(Ee);var Re=ye;i.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(o.a,{store:Re,children:Object(O.jsx)(z,{})})}),document.getElementById("root"))},71:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){}},[[104,1,2]]]);
//# sourceMappingURL=main.06234156.chunk.js.map