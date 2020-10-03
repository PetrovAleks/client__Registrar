(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{26:function(e,a,t){e.exports=t.p+"static/media/avatar.4f99f147.jpg"},28:function(e,a,t){e.exports=t(39)},38:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),c=t.n(l),i=t(2),o=t(14),s=t(1);var u=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:"header-nav"},r.a.createElement("ul",{className:"header-nav__list list-style"},r.a.createElement("li",null,r.a.createElement(o.b,{to:"/home",className:"header-nav__item",activeClassName:"active-link"},"Home")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/about",className:"header-nav__item",activeClassName:"active-link"},"About me"))))))},m=t(26),p=t.n(m);var d=function(){return r.a.createElement("section",{className:"about"},r.a.createElement("div",{className:"container about-wrapper"},r.a.createElement("div",{className:"about-wrapper__img"},r.a.createElement("img",{className:"about__img",src:p.a,width:"400px",alt:"\u044d\u0442\u043e \u044f"})),r.a.createElement("div",{className:"about-wrapper__text"},r.a.createElement("h2",{className:"about__title"},"\u041f\u0435\u0442\u0440\u043e\u0432 \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440"),r.a.createElement("p",{className:"about__text"},"\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, \u043f\u0440\u0435\u0442\u0435\u043d\u0434\u0443\u044e \u043d\u0430 \u043f\u043e\u0437\u0438\u0446\u0438\u044e Junior Frontend Developer. \u041d\u0438\u0436\u0435 \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0430\u043c \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u043c\u043e\u0435 \u043f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e \u0438 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 \u043d\u0430 GITHUB"),r.a.createElement("ul",{className:"about__list list-style"},r.a.createElement("li",{className:"about__item"},r.a.createElement("a",{className:"about__links",href:"https://petrovaleks.github.io/portfolio_site/"},"portfolio")),r.a.createElement("li",{className:"about__item"},r.a.createElement("a",{className:"about__links",href:"https://github.com/PetrovAleks"},"GITHUB"))))))},b=t(8),E=t(10),h=t(11),g=t(12),v=(new Date).toLocaleDateString(),f=function e(a,t,n,r,l){Object(b.a)(this,e),this.name=a,this.surname=t,this.gender=n,this.loyaltyProgram=r,this.id=l,this.date=v},N=[{name:"Vlad",surname:"Vladov",gender:"male",loyaltyProgram:null,date:(new Date).toLocaleDateString(),id:1},{name:"Igor",surname:"Vladov",gender:"male",loyaltyProgram:null,date:(new Date).toLocaleDateString(),id:2},{name:"Dimitriy",surname:"Vladov",gender:"male",loyaltyProgram:null,date:(new Date).toLocaleDateString(),id:3}],y=t(4),_=Object(y.b)("RENDER_FORM"),C=Object(y.b)("INPUT_CHANGE"),O=Object(y.b)("RESET_FORM"),j=Object(y.b)("REQUEST_SERVER"),S=Object(y.b)("REQUEST_SUCCESS"),w=Object(y.b)("ERROR_SERVER"),R=Object(y.b)("RESET_STATE"),k=Object(y.b)("GET_LIST"),x=Object(y.b)("ADD_CLIENT"),T=function(e){Object(g.a)(t,e);var a=Object(h.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(E.a)(t,[{key:"componentDidMount",value:function(){this.props.getclientsList()}},{key:"render",value:function(){var e=this.props.clientsList.map((function(e){return r.a.createElement("li",{key:e.id,className:"clientele__item"},r.a.createElement("div",{className:"clientele__item-link"},r.a.createElement("p",{clientele__item:"item-info"},e.name," ",e.surname,r.a.createElement("br",null),r.a.createElement("span",{className:"info-text"},e.date))))}));return r.a.createElement("section",{className:"clientele"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"clientele__title"}," \u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432"),r.a.createElement("p",{className:"clientele__text"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt harum voluptate temporibus eveniet inventore."),r.a.createElement("div",{className:"wrapper-clientele__list"},r.a.createElement("div",{className:"wrapper-list"},r.a.createElement("ul",{className:"clientele__list list-style"},e)),r.a.createElement("button",{onClick:this.props.renderForm,className:"clientele__btn"},"Add new client"))))}}]),t}(n.Component),D=Object(i.b)((function(e){return{clientsList:e.clientsList}}),(function(e){return{renderForm:function(){return e(_())},getclientsList:function(){return e(k(N))}}}))(T),P=t(7);var L=Object(i.b)((function(e){return{inputChange:e.inputChange}}),(function(e){return{handleChange:function(a){var t=a.target,n=t.name,r=t.value;return e(C(Object(P.a)({},n,r)))}}}))((function(e){var a=e.inputChange,t=e.handleChange;return r.a.createElement("div",{className:"wrapper-input"},r.a.createElement("label",{className:"label-input"},r.a.createElement("span",{className:"adding-form__name-input"},"Name"),r.a.createElement("input",{onChange:t,type:"text",name:"name",value:a.name,placeholder:"Enter your name"})),r.a.createElement("label",{className:"label-input"},r.a.createElement("span",{className:"adding-form__name-input"},"Surname"),r.a.createElement("input",{onChange:t,type:"text",name:"surname",value:a.surname,placeholder:"Enter your surname"})))})),F="male",A="female";var I=Object(i.b)((function(e){return{inputChange:e.inputChange}}),(function(e){return{handleChange:function(a){var t=a.target,n=t.name,r=t.value;return e(C(Object(P.a)({},n,r)))}}}))((function(e){var a=e.inputChange,t=e.handleChange;return r.a.createElement("div",{className:"wrapper-input wrapper-input--flex "},r.a.createElement("label",{className:"label-gender label-radio"},r.a.createElement("span",{className:"text-gender text-label"},"male"),r.a.createElement("input",{onChange:t,className:"input-radio",type:"radio",name:"gender",value:F,checked:F===a.gender})),r.a.createElement("label",{className:"label-gender label-radio"},r.a.createElement("span",{className:"text-gender text-label"},"female"),r.a.createElement("input",{onChange:t,className:"input-radio",type:"radio",name:"gender",value:A,checked:A===a.gender})))}));var U=Object(i.b)((function(e){return{inputChange:e.inputChange}}),(function(e){return{handleChange:function(a){var t=a.target,n=t.name,r=t.value;return e(C(Object(P.a)({},n,r)))}}}))((function(e){var a=e.inputChange,t=e.handleChange;return r.a.createElement("label",{className:"label-input"},r.a.createElement("input",{onChange:t,type:"number",name:"loyaltyProgram",placeholder:"enter your card number",value:a.loyaltyProgram}))})),V="\u043d\u0435\u0442",G="\u2116",M="\u041c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435",H=function(e){Object(g.a)(t,e);var a=Object(h.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(E.a)(t,[{key:"renderInputCard",value:function(){var e=this.props.inputChange.loyaltyProgram;return G===e||e!==V&&e!==M?r.a.createElement(U,null):null}},{key:"render",value:function(){var e=this.props,a=e.inputChange,t=e.handleChange;return r.a.createElement("div",{className:"wrapper-input wrapper-input--flex",role:"group"},r.a.createElement("label",{className:"label-bonus label-radio"},r.a.createElement("span",{className:"text-bonus text-label"},"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d"),r.a.createElement("input",{onChange:t,className:"input-radio",type:"radio",name:"loyaltyProgram",value:V,checked:V===a.loyaltyProgram})),r.a.createElement("label",{className:"label-bonus label-radio"},r.a.createElement("span",{className:"text-bonus text-label"},"\u041f\u043b\u0430\u0441\u0442\u0438\u043a\u043e\u0432\u0430\u044f \u043a\u0430\u0440\u0442\u0430"),r.a.createElement("input",{onChange:t,className:"input-radio ",type:"radio",name:"loyaltyProgram",value:G,checked:G===a.loyaltyProgram})),this.renderInputCard(),r.a.createElement("label",{className:"label-bonus label-radio"},r.a.createElement("span",{className:"text-bonus text-label"},"\u041c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"),r.a.createElement("input",{onChange:t,className:"input-radio",type:"radio",name:"loyaltyProgram",value:M,checked:M===a.loyaltyProgram})))}}]),t}(n.Component),B=Object(i.b)((function(e){return{inputChange:e.inputChange}}),(function(e){return{handleChange:function(a){var t=a.target,n=t.name,r=t.value;return e(C(Object(P.a)({},n,r)))}}}))(H),J=function(){return function(e){e(j()),fetch("https://meowfacts.herokuapp.com").then((function(e){return e.json()})).then((function(a){e(S(a.data))})).catch((function(a){e(w(a))}))}},Q=function(e){Object(g.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).onAddNewClient=function(a){a.preventDefault();var t=e.props,n=t.renderForm,r=t.inputChange,l=t.addNewClient,c=t.clientsList,i=t.resetForm,o=r.name,s=r.surname,u=r.gender,m=r.loyaltyProgram;l(new f(o,s,u,m,c.length+1)),i(),n()},e}return Object(E.a)(t,[{key:"componentDidMount",value:function(){this.props.getServerResponse()}},{key:"componentWillUnmount",value:function(){(0,this.props.resetServerState)()}},{key:"render",value:function(){var e=this.props,a=e.renderForm,t=e.inputChange,n=e.resultServer,l=t.name,c=t.surname,i=t.gender,o=t.loyaltyProgram;return r.a.createElement("div",{className:"wrapper-form"},r.a.createElement("section",{className:"form"},r.a.createElement("button",{className:"form-btn__closed","aria-label":"closed form",onClick:a},"X"),r.a.createElement("form",{onSubmit:this.onAddNewClient,className:"adding-form"},r.a.createElement(L,null),r.a.createElement(I,null),r.a.createElement("p",{className:"bonus-text"},"\u0421hoose a bonus program"),r.a.createElement(B,null),r.a.createElement("button",{className:"form-btn__add","aria-label":"add a client",type:"submit",disabled:!(l&&c&&i&&o)},"Add"),r.a.createElement("p",{className:"server-response"},n))))}}]),t}(n.Component),W=Object(i.b)((function(e){return{inputChange:e.inputChange,resultServer:e.resultServer,clientsList:e.clientsList}}),(function(e){return{renderForm:function(){return e(_())},resetForm:function(){return e(O())},getServerResponse:function(){return e(J())},resetServerState:function(){return e(R())},addNewClient:function(a){return e(x(a))}}}))(Q),X=Object(i.b)((function(e){return{renderValue:e.renderForm}}))((function(e){var a=e.renderValue;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,a?r.a.createElement(W,null):null,r.a.createElement(u,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/home",component:function(){return r.a.createElement(D,null)}}),r.a.createElement(s.b,{path:"/about",component:d}),r.a.createElement(s.a,{to:"/home"}))))})),q=t(17),z=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"RENDER_FORM":return!e;default:return e}},K=t(27),Y={name:"",surname:"",loyaltyProgram:"\u043d\u0435\u0442",gender:""},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"INPUT_CHANGE":return Object(K.a)({},e,{},a.payload);case"RESET_FORM":return Y;default:return e}},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"REQUEST_SUCCESS":return e+a.payload;case"ERROR_SERVER":return"\u041e\u0448\u0438\u0431\u043a\u0430 \u0421\u0435\u0440\u0432\u0435\u0440\u0430";case"RESET_STATE":return"";default:return e}},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_LIST":return Object(q.a)(a.payload);case"ADD_CLIENT":return N.push(a.payload),N;default:return e}},ae=Object(y.c)(),te=Object(y.a)({reducer:{renderForm:z,inputChange:Z,resultServer:$,clientsList:ee},middleware:Object(q.a)(ae)});t(38);c.a.render(r.a.createElement(i.a,{store:te},r.a.createElement(X,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.161618ff.chunk.js.map