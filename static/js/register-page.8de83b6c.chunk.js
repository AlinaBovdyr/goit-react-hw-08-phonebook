(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{125:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return m}));var r=n(5),a=n(50),o=n(51),u=n(53),c=n(52),i=n(0),l=n(55),s=n(31),f=n(57),p=n.n(f),b=n(1),m=function(t){Object(u.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(a.a)(this,n);for(var o=arguments.length,u=new Array(o),c=0;c<o;c++)u[c]=arguments[c];return(t=e.call.apply(e,[this].concat(u))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,o=n.value;t.setState(Object(r.a)({},a,o))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,r=n.name,a=n.number;t.props.onLogin(r,a),t.setState({name:"",number:""})},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state;t.name,t.number;return Object(b.jsxs)("div",{className:p.a.formWrapper,children:[Object(b.jsx)("h2",{className:p.a.title,children:"Registration"}),Object(b.jsxs)("form",{className:p.a.form,onSubmit:this.handleSubmit,children:[Object(b.jsx)(l.a,{label:"Name",name:"name",placeholder:" ",autoComplete:"name",onChange:this.handleChange,required:!0}),Object(b.jsx)(l.a,{label:"E-mail",name:"email",placeholder:" ",autoComplete:"email",onChange:this.handleChange,required:!0}),Object(b.jsx)(l.a,{name:"password",label:"Password",placeholder:" ",autoComplete:"new-password",type:"password",onChange:this.handleChange}),Object(b.jsx)(s.a,{type:"submit",title:"SignUp"})]})]})}}]),n}(i.Component)},50:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},51:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return a}))},52:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){return!e||"object"!==a(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=r(t);if(e){var u=r(this).constructor;n=Reflect.construct(a,arguments,u)}else n=a.apply(this,arguments);return o(this,n)}}n.d(e,"a",(function(){return u}))},53:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return a}))},55:function(t,e,n){"use strict";var r=n(21),a=n(30),o=(n(0),n(56)),u=n.n(o),c=n(1),i=function(t){var e=t.type,n=t.name,o=t.label,i=(t.className,Object(a.a)(t,["type","name","label","className"]));return Object(c.jsxs)("label",{className:u.a.inputField,children:[Object(c.jsx)("input",Object(r.a)({className:u.a.input,type:e,name:n},i)),Object(c.jsx)("span",{className:u.a.inputLabel,children:o})]})};i.defaultProps={type:"text",name:null,label:"",className:""},e.a=i},56:function(t,e,n){t.exports={inputField:"Input_inputField__3ltHs",inputLabel:"Input_inputLabel__1v25K",input:"Input_input__1a8ol"}},57:function(t,e,n){t.exports={formWrapper:"Auth_formWrapper__3TlhN",form:"Auth_form__21vrB",title:"Auth_title__8e0Wd"}}}]);
//# sourceMappingURL=register-page.8de83b6c.chunk.js.map