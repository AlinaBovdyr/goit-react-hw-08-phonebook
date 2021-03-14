(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{32:function(t,e,n){t.exports={colors:"'../../styles/variables/colors.css'",mainColor:"#0b2630",mainContainer:"Container_mainContainer__1i2mt",section:"Container_section__32cGE",container:"Container_container__2OXeW",titleWrapper:"Container_titleWrapper__3f69r",mainTitle:"Container_mainTitle__blb2e",childContainer:"Container_childContainer__3NmLo",appear:"Container_appear__1QiSn",appearActive:"Container_appearActive__2bEnQ"}},7:function(t,e,n){"use strict";n.d(e,"j",(function(){return c})),n.d(e,"k",(function(){return a})),n.d(e,"i",(function(){return o})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i})),n.d(e,"g",(function(){return b})),n.d(e,"h",(function(){return j})),n.d(e,"f",(function(){return l})),n.d(e,"d",(function(){return O})),n.d(e,"e",(function(){return d}));var r=n(3),c=Object(r.b)("contacts/fetchContactRequest"),a=Object(r.b)("contacts/fetchContactSuccess"),o=Object(r.b)("contacts/fetchContactError"),u=Object(r.b)("contacts/addContactRequest"),s=Object(r.b)("contacts/addContactSuccess"),i=Object(r.b)("contacts/addContactError"),b=Object(r.b)("contacts/deleteContactRequest"),j=Object(r.b)("contacts/deleteContactSuccess"),l=Object(r.b)("contacts/deleteContactError"),O=Object(r.b)("contacts/ChangeFilter"),d=Object(r.b)("contacts/ChangeSorting")},8:function(t,e,n){t.exports={colors:"'../../styles/variables/colors.css'",bgColor:"tomato",accentColor:"#19c98a",activeBtnColor:"#712375",header:"Navigation_header__Kium1",link:"Navigation_link__18bBj",activeLink:"Navigation_activeLink__hGKfi",userMenu:"Navigation_userMenu__2VqQR",headerBtn:"Navigation_headerBtn__1rKNO",avatar:"Navigation_avatar__3jkMw"}},85:function(t,e,n){},86:function(t,e,n){"use strict";n.r(e);var r,c,a,o=n(0),u=n.n(o),s=n(25),i=n.n(s),b=n(16),j=n(10),l=n(49),O=n(28),d=n(3),f=n(18),h=n(50),g=n.n(h),p=n(51),m=n.n(p),v=n(2),x=n(6),C=n(7),k=Object(d.c)([],(r={},Object(v.a)(r,C.k,(function(t,e){return e.payload})),Object(v.a)(r,C.c,(function(t,e){var n=e.payload;return[].concat(Object(O.a)(t),[n])})),Object(v.a)(r,C.h,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),r)),_=Object(d.c)("",Object(v.a)({},C.d,(function(t,e){return e.payload}))),S=Object(d.c)("date",Object(v.a)({},C.e,(function(t,e){return e.payload}))),y=Object(d.c)(!1,(c={},Object(v.a)(c,C.j,(function(){return!0})),Object(v.a)(c,C.k,(function(){return!1})),Object(v.a)(c,C.i,(function(){return!1})),Object(v.a)(c,C.b,(function(){return!0})),Object(v.a)(c,C.c,(function(){return!1})),Object(v.a)(c,C.a,(function(){return!1})),Object(v.a)(c,C.g,(function(){return!0})),Object(v.a)(c,C.h,(function(){return!1})),Object(v.a)(c,C.f,(function(){return!1})),c)),E=Object(d.c)(null,(a={},Object(v.a)(a,C.i,(function(t,e){return e.payload})),Object(v.a)(a,C.a,(function(t,e){return e.payload})),Object(v.a)(a,C.f,(function(t,e){return e.payload})),a)),N=Object(x.c)({items:k,filter:_,sorter:S,loading:y,error:E}),A=n(9),R=[].concat(Object(O.a)(Object(d.d)({serializableCheck:{ignoredActions:[f.a,f.f,f.b,f.c,f.d,f.e]}})),[m.a]),U={key:"auth",storage:g.a,whitelist:["token"]},q=Object(d.a)({reducer:{auth:Object(f.g)(U,A.b),contacts:N},middleware:R,devTools:!1}),w={store:q,persistor:Object(f.h)(q)},L=n(36),T=n(37),z=n(39),B=n(38),I="/",M="/register",P="/login",W="/contacts",K=n(8),Q=n.n(K),F=n(1),G=Object(j.b)((function(t){return{isAuthenticated:A.c.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(F.jsxs)("nav",{children:[Object(F.jsx)(b.b,{to:I,exact:!0,className:Q.a.link,activeClassName:Q.a.activeLink,children:"Homepage"}),e&&Object(F.jsx)(b.b,{to:W,exact:!0,className:Q.a.link,activeClassName:Q.a.activeLink,children:"Contacts"})]})})),J=function(){return Object(F.jsxs)("div",{children:[Object(F.jsx)(b.b,{to:M,exact:!0,className:Q.a.link,activeClassName:Q.a.activeLink,children:"Registration"}),Object(F.jsx)(b.b,{to:P,exact:!0,className:Q.a.link,activeClassName:Q.a.activeLink,children:"Login"})]})},D=n.p+"static/media/default-avatar.49abd8f3.png",H={onLogout:A.a.logout},V=Object(j.b)((function(t){return{name:A.c.getUserName(t),avatar:D}}),H)((function(t){var e=t.avatar,n=t.name,r=t.onLogout;return Object(F.jsxs)("div",{className:Q.a.userMenu,children:[Object(F.jsx)("img",{className:Q.a.avatar,src:e,alt:n}),Object(F.jsxs)("span",{className:Q.a.link,children:["Welcome, ",n]}),Object(F.jsx)("button",{className:Q.a.headerBtn,type:"button",onClick:r,children:"Logout"})]})})),X=Object(j.b)((function(t){return{isAuthenticated:A.c.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(F.jsxs)("header",{className:Q.a.header,children:[Object(F.jsx)(G,{}),e?Object(F.jsx)(V,{}):Object(F.jsx)(J,{})]})})),Y=n(5),Z=n(19),$=n(24),tt=Object(j.b)((function(t){return{isAuthenticated:A.c.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object($.a)(t,["component","isAuthenticated","redirectTo"]);return Object(F.jsx)(Y.b,Object(Z.a)(Object(Z.a)({},c),{},{render:function(t){return n?Object(F.jsx)(e,Object(Z.a)({},t)):Object(F.jsx)(Y.a,{to:r})}}))})),et=Object(j.b)((function(t){return{isAuthenticated:A.c.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object($.a)(t,["component","isAuthenticated","redirectTo"]);return Object(F.jsx)(Y.b,Object(Z.a)(Object(Z.a)({},c),{},{render:function(t){return n&&c.restricted?Object(F.jsx)(Y.a,{to:r}):Object(F.jsx)(e,Object(Z.a)({},t))}}))})),nt=n.p+"static/media/not_found.c1d9e774.jpg",rt=function(){return Object(F.jsx)(F.Fragment,{children:Object(F.jsx)("img",{src:nt,alt:"Page not found"})})},ct=Object(o.lazy)((function(){return n.e(2).then(n.bind(null,133))})),at=Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,134))})),ot=Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,135))})),ut=Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(8),n.e(1)]).then(n.bind(null,136))})),st=function(){return Object(F.jsx)(o.Suspense,{fallback:Object(F.jsx)("h1",{children:"Loading..."}),children:Object(F.jsxs)(Y.d,{children:[Object(F.jsx)(et,{path:I,exact:!0,component:ct}),Object(F.jsx)(et,{path:M,restricted:!0,redirectTo:W,component:at}),Object(F.jsx)(et,{path:P,restricted:!0,redirectTo:W,component:ot}),Object(F.jsx)(tt,{path:W,component:ut,redirectTo:P}),Object(F.jsx)(Y.b,{component:rt})]})})},it=n(32),bt=n.n(it);function jt(t){var e=t.children;return Object(F.jsx)("section",{className:bt.a.section,children:Object(F.jsx)("div",{className:bt.a.mainContainer,children:e})})}var lt=function(t){Object(z.a)(n,t);var e=Object(B.a)(n);function n(){return Object(L.a)(this,n),e.apply(this,arguments)}return Object(T.a)(n,[{key:"componentDidMount",value:function(){this.props.onRefresh()}},{key:"render",value:function(){return Object(F.jsxs)(jt,{children:[Object(F.jsx)(X,{}),Object(F.jsx)(st,{})]})}}]),n}(o.Component),Ot={onRefresh:A.a.getCurrentUser},dt=Object(j.b)(null,Ot)(lt);n(84),n(85);i.a.render(Object(F.jsx)(u.a.StrictMode,{children:Object(F.jsx)(j.a,{store:w.store,children:Object(F.jsx)(l.a,{loading:null,persistor:w.persistor,children:Object(F.jsx)(b.a,{children:Object(F.jsx)(dt,{})})})})}),document.getElementById("root"))},9:function(t,e,n){"use strict";n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return E})),n.d(e,"c",(function(){return N}));var r=n(3),c={registerRequest:Object(r.b)("auth/registerRequest"),registerSuccess:Object(r.b)("auth/registerSuccess"),registerError:Object(r.b)("auth/registerError"),loginRequest:Object(r.b)("auth/loginRequest"),loginSuccess:Object(r.b)("auth/loginSuccess"),loginError:Object(r.b)("auth/loginError"),logoutRequest:Object(r.b)("auth/logoutRequest"),logoutSuccess:Object(r.b)("auth/logoutSuccess"),logoutError:Object(r.b)("auth/logoutError"),getCurrentUserRequest:Object(r.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(r.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(r.b)("auth/getCurrentUserError")},a=n(17),o=n.n(a),u=n(23),s=n(20),i=n.n(s);i.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var b,j,l,O,d=function(t){i.a.defaults.headers.common.Authorization="Bearer ".concat(t)},f=function(){i.a.defaults.headers.common.Authorization=""},h={register:function(t){return function(){var e=Object(u.a)(o.a.mark((function e(n){var r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(c.registerRequest()),e.prev=1,e.next=4,i.a.post("/users/signup",t);case 4:r=e.sent,a=r.data,d(a.token),n(c.registerSuccess(a)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n(c.registerError(e.t0.message));case 13:case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},login:function(t){return function(){var e=Object(u.a)(o.a.mark((function e(n){var r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(c.loginRequest()),e.prev=1,e.next=4,i.a.post("/users/login",t);case 4:r=e.sent,a=r.data,d(a.token),n(c.loginSuccess(a)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n(c.loginError(e.t0.message));case 13:case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},logout:function(){return function(){var t=Object(u.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(c.logoutRequest()),t.prev=1,t.next=4,i.a.post("/users/logout");case 4:f(),e(c.logoutSuccess()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(c.logoutError(t.t0.message));case 11:case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var t=Object(u.a)(o.a.mark((function t(e,n){var r,a,u,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n(),a=r.auth.token){t.next=3;break}return t.abrupt("return");case 3:return d(a),e(c.getCurrentUserRequest()),t.prev=5,t.next=8,i.a.get("/users/current");case 8:u=t.sent,s=u.data,console.log(s),e(c.getCurrentUserSuccess(s)),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(5),e(c.getCurrentUserError(t.t0.message));case 17:case"end":return t.stop()}}),t,null,[[5,14]])})));return function(e,n){return t.apply(this,arguments)}}()}},g=n(2),p=n(6),m={name:null,email:null},v=function(t,e){return e.payload.user},x=function(t,e){return e.payload.token},C=function(t,e){return e.payload},k=Object(r.c)(m,(b={},Object(g.a)(b,c.registerSuccess,v),Object(g.a)(b,c.loginSuccess,v),Object(g.a)(b,c.logoutSuccess,(function(){return m})),Object(g.a)(b,c.getCurrentUserSuccess,(function(t,e){return e.payload})),b)),_=Object(r.c)(null,(j={},Object(g.a)(j,c.registerSuccess,x),Object(g.a)(j,c.loginSuccess,x),Object(g.a)(j,c.logoutSuccess,(function(){return null})),j)),S=Object(r.c)(null,(l={},Object(g.a)(l,c.registerError,C),Object(g.a)(l,c.loginError,C),Object(g.a)(l,c.logoutError,C),Object(g.a)(l,c.getCurrentUserError,C),l)),y=Object(r.c)(!1,(O={},Object(g.a)(O,c.registerSuccess,(function(){return!0})),Object(g.a)(O,c.loginSuccess,(function(){return!0})),Object(g.a)(O,c.getCurrentUserSuccess,(function(){return!0})),Object(g.a)(O,c.registerError,(function(){return!1})),Object(g.a)(O,c.loginError,(function(){return!1})),Object(g.a)(O,c.getCurrentUserError,(function(){return!1})),Object(g.a)(O,c.logoutSuccess,(function(){return!1})),O)),E=Object(p.c)({user:k,token:_,isAuthenticated:y,error:S}),N={getIsAuthenticated:function(t){return t.auth.isAuthenticated},getUserName:function(t){return t.auth.user.name},getError:function(t){return t.auth.error}}}},[[86,6,7]]]);
//# sourceMappingURL=main.567057e3.chunk.js.map