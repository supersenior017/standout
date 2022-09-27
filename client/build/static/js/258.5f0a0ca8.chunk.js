"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[258],{6258:function(e,n,s){s.r(n),s.d(n,{default:function(){return j}});var o=s(1413),a=s(885),i=s(2791),r=s(4542),t=s(4569),c=s.n(t),d=s(1363),_=s(8567),l=s(4165),p=s(5861),u=s(184);var f=function(e){var n=e.userAddresses,s=e.usStates,o=e.errors,r=e.register,t=e.watch,c=e.setValue,_=e.trigger,f=e.field,m=e.index,h=e.remove,x=(0,i.useState)("undefined"===typeof f._id),j=(0,a.Z)(x,2),N=j[0],g=j[1];return(0,u.jsxs)("div",{className:"personal-info__container__info",children:[(0,u.jsxs)("label",{children:["address ",m+1]}),(0,u.jsxs)("div",{className:"personal-info__container__info__address",children:[(0,u.jsx)("p",{className:"personal-info__container__info__address__name",children:"".concat(t("addresses[".concat(m,"].firstName"))," ").concat(t("addresses[".concat(m,"].lastName")))}),""!==t("addresses[".concat(m,"].extendedAddress"))&&(0,u.jsxs)("p",{children:[t("addresses[".concat(m,"].extendedAddress")),","]}),(0,u.jsxs)("p",{children:[t("addresses[".concat(m,"].streetAddress")),","]}),(0,u.jsx)("p",{children:"".concat(t("addresses[".concat(m,"].locality")),", ").concat(t("addresses[".concat(m,"].region"))," ").concat(t("addresses[".concat(m,"].postalCode")))})]}),(0,u.jsxs)("div",{className:"personal-info__container__info__icon-container",children:[(0,u.jsx)(d.G,{className:"personal-info__container__info__icon",icon:"pen",onClick:function(){g(!0)}}),(0,u.jsx)(d.G,{className:"personal-info__container__info__icon",icon:"trash",onClick:function(){h(m)}})]}),N&&(0,u.jsx)("div",{className:"personal-info__black-box",onClick:function(){var e=n.findIndex((function(e){return e._id===f._id}));-1!==e?(c("addresses[".concat(m,"]"),n[e]),g(!1)):h(m)}}),(0,u.jsxs)("div",{className:N?"personal-info__container__info__pop-up":"personal-info__container__info__pop-up personal-info__container__info__pop-up--hidden",children:[(0,u.jsx)("input",{type:"hidden",name:"addresses[".concat(m,"]._id"),ref:r(),defaultValue:f._id}),(0,u.jsxs)("div",{className:"personal-info__container__info__pop-up__flex",children:[(0,u.jsxs)("div",{className:"personal-info__container__info__pop-up__input-container",children:[(0,u.jsxs)("label",{htmlFor:"addresses[".concat(m,"].firstName"),children:["first name ",(0,u.jsx)("span",{children:"*"})]}),(0,u.jsx)("input",{name:"addresses[".concat(m,"].firstName"),ref:r({pattern:{value:/^\w{2,}$/,message:"Should be 2 or more than 2 letters"},required:"Required"}),defaultValue:f.firstName}),"undefined"!==typeof o.addresses&&(0,u.jsx)("p",{className:"personal-info__container__info__pop-up__input-container__error-msg",children:"undefined"!==typeof o.addresses[m]&&(0,u.jsx)("span",{children:"undefined"!==typeof o.addresses[m].firstName&&(0,u.jsxs)("span",{children:[(0,u.jsx)(d.G,{icon:"circle",className:"icon"})," ",o.addresses[m].firstName.message]})})})]}),(0,u.jsxs)("div",{className:"personal-info__container__info__pop-up__input-container",children:[(0,u.jsxs)("label",{htmlFor:"addresses[".concat(m,"].lastName"),children:["last name ",(0,u.jsx)("span",{children:"*"})]}),(0,u.jsx)("input",{name:"addresses[".concat(m,"].lastName"),ref:r({pattern:{value:/^\w{2,}$/,message:"Should be 2 or more than 2 letters"},required:"Required"}),defaultValue:f.lastName}),"undefined"!==typeof o.addresses&&(0,u.jsx)("p",{className:"personal-info__container__info__pop-up__input-container__error-msg",children:"undefined"!==typeof o.addresses[m]&&(0,u.jsx)("span",{children:"undefined"!==typeof o.addresses[m].lastName&&(0,u.jsxs)("span",{children:[(0,u.jsx)(d.G,{icon:"circle",className:"icon"})," ",o.addresses[m].lastName.message]})})})]})]}),(0,u.jsxs)("div",{className:"personal-info__container__info__pop-up__input-container",children:[(0,u.jsxs)("label",{htmlFor:"addresses[".concat(m,"].streetAddress"),children:["street address ",(0,u.jsx)("span",{children:"*"})]}),(0,u.jsx)("input",{name:"addresses[".concat(m,"].streetAddress"),ref:r({minLength:{value:2,message:"Should be 2 or more than 2 letters"},required:"Required"}),defaultValue:f.streetAddress}),"undefined"!==typeof o.addresses&&(0,u.jsx)("p",{className:"personal-info__container__info__pop-up__input-container__error-msg",children:"undefined"!==typeof o.addresses[m]&&(0,u.jsx)("span",{children:"undefined"!==typeof o.addresses[m].streetAddress&&(0,u.jsxs)("span",{children:[(0,u.jsx)(d.G,{icon:"circle",className:"icon"})," ",o.addresses[m].streetAddress.message]})})})]}),(0,u.jsxs)("div",{className:"personal-info__container__info__pop-up__input-container",children:[(0,u.jsx)("label",{htmlFor:"addresses[".concat(m,"].extendedAddress"),children:"Apt #, Floor, etc. (optional)"}),(0,u.jsx)("input",{name:"addresses[".concat(m,"].extendedAddress"),ref:r({minLength:{value:2,message:"Should be 2 or more than 2 letters"}}),defaultValue:f.extendedAddress}),"undefined"!==typeof o.addresses&&(0,u.jsx)("p",{className:"personal-info__container__info__pop-up__input-container__error-msg",children:"undefined"!==typeof o.addresses[m]&&(0,u.jsx)("span",{children:"undefined"!==typeof o.addresses[m].extendedAddress&&(0,u.jsxs)("span",{children:[(0,u.jsx)(d.G,{icon:"circle",className:"icon"})," ",o.addresses[m].extendedAddress.message]})})})]}),(0,u.jsxs)("div",{className:"personal-info__container__info__pop-up__flex",children:[(0,u.jsxs)("div",{className:"personal-info__container__info__pop-up__input-container",children:[(0,u.jsxs)("label",{htmlFor:"addresses[".concat(m,"].postalCode"),children:["postal code ",(0,u.jsx)("span",{children:"*"})]}),(0,u.jsx)("input",{name:"addresses[".concat(m,"].postalCode"),ref:r({pattern:{value:/^\d{5}([-]?\d{4})?$/,message:"Invalid Postal Code"},required:"Required"}),defaultValue:f.postalCode}),"undefined"!==typeof o.addresses&&(0,u.jsx)("p",{className:"personal-info__container__info__pop-up__input-container__error-msg",children:"undefined"!==typeof o.addresses[m]&&(0,u.jsx)("span",{children:"undefined"!==typeof o.addresses[m].postalCode&&(0,u.jsxs)("span",{children:[(0,u.jsx)(d.G,{icon:"circle",className:"icon"})," ",o.addresses[m].postalCode.message]})})})]}),(0,u.jsxs)("div",{className:"personal-info__container__info__pop-up__input-container",children:[(0,u.jsxs)("label",{htmlFor:"addresses[".concat(m,"].locality"),children:["city ",(0,u.jsx)("span",{children:"*"})]}),(0,u.jsx)("input",{name:"addresses[".concat(m,"].locality"),ref:r({minLength:{value:2,message:"Should be 2 or more than 2 letters"},required:"Required"}),defaultValue:f.locality}),"undefined"!==typeof o.addresses&&(0,u.jsx)("p",{className:"personal-info__container__info__pop-up__input-container__error-msg",children:"undefined"!==typeof o.addresses[m]&&(0,u.jsx)("span",{children:"undefined"!==typeof o.addresses[m].locality&&(0,u.jsxs)("span",{children:[(0,u.jsx)(d.G,{icon:"circle",className:"icon"})," ",o.addresses[m].locality.message]})})})]})]}),(0,u.jsxs)("div",{className:"personal-info__container__info__pop-up__input-container",children:[(0,u.jsxs)("label",{htmlFor:"addresses[".concat(m,"].region"),children:["State / Province ",(0,u.jsx)("span",{children:"*"})]}),(0,u.jsxs)("div",{className:"personal-info__container__info__pop-up__select-container",children:[(0,u.jsx)("select",{name:"addresses[".concat(m,"].region"),ref:r(),defaultValue:f.region,children:s.map((function(e,n){return(0,u.jsx)("option",{value:e.abbreviation,children:e.name},n)}))}),(0,u.jsx)(d.G,{icon:"chevron-right",className:"icon"})]})]}),(0,u.jsxs)("div",{className:"personal-info__container__info__pop-up__button-container",children:[(0,u.jsx)("button",{type:"button",className:"personal-info__container__info__pop-up__button-container__cancel",onClick:function(){var e=n.findIndex((function(e){return e._id===f._id}));-1!==e?(c("addresses[".concat(m,"]"),n[e]),g(!1)):h(m)},children:"cancel"}),(0,u.jsx)("button",{type:"button",className:"personal-info__container__info__pop-up__button-container__ok",onClick:(0,p.Z)((0,l.Z)().mark((function e(){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(["addresses[".concat(m,"].firstName"),"addresses[".concat(m,"].lastName"),"addresses[".concat(m,"].streetAddress"),"addresses[".concat(m,"].extendedAddress"),"addresses[".concat(m,"].locality"),"addresses[".concat(m,"].postalCode")]);case 2:("undefined"===typeof o.addresses||"undefined"===typeof o.addresses[m])&&g(!1);case 3:case"end":return e.stop()}}),e)}))),children:"ok"})]})]})]})};var m=function(e){var n=e.showInput,s=e.register,a=e.user,i=e.watch,r=e.errors,t=e.setShowInput,_=e.hidePassword,l=e.setHidePassword,p=e.showPopup,f=e.setShowPopup,m=e.wrongpassword,h=e.setWrongpassword,x=e.passwordError,j=e.setPasswordError,N=e.loadingPassword,g=e.setLoadingPassword;return(0,u.jsxs)("div",{className:"personal-info__container",children:[(0,u.jsx)("h2",{children:"profile"}),(0,u.jsxs)("div",{className:n.name?"personal-info__container__info personal-info__container__info--focused":"personal-info__container__info",children:[(0,u.jsx)("label",{children:"name"}),n.name?(0,u.jsxs)("div",{className:"personal-info__container__info__input-container",children:[(0,u.jsx)("input",{autoFocus:!0,name:"name",ref:s({pattern:{value:/^[\w ]{0,}[\w]{2,}[\w ]{0,}$/,message:"should be more than 2 letters"},required:"Required"}),defaultValue:a.name.trim()}),"undefined"!==typeof r.name&&(0,u.jsxs)("p",{className:"personal-info__container__info__input-container__error-msg",children:[(0,u.jsx)(d.G,{icon:"circle",className:"icon"})," ",r.name.message]})]}):(0,u.jsx)("p",{children:a.name}),n.name?(0,u.jsx)("h4",{className:"personal-info__container__info__link",onClick:function(){t((function(e){return(0,o.Z)((0,o.Z)({},e),{},{name:!1})}))},children:"cancel"}):(0,u.jsx)(d.G,{className:"personal-info__container__info__icon",icon:"pen",onClick:function(){t((function(e){return(0,o.Z)((0,o.Z)({},e),{},{name:!0})}))}})]}),(0,u.jsxs)("div",{className:n.email?"personal-info__container__info personal-info__container__info--focused":"personal-info__container__info",children:[(0,u.jsx)("label",{children:"email"}),n.email?(0,u.jsxs)("div",{className:"personal-info__container__info__input-container",children:[(0,u.jsx)("input",{name:"email",type:"text",defaultValue:a.email,autoFocus:!0,ref:s({pattern:{value:/^\w{2,}@\w{2,}\.\w{2,}(\.\w{2,})?$/,message:"Invalid Email Address"},required:"Required"})}),"undefined"!==typeof r.email&&(0,u.jsxs)("p",{className:"personal-info__container__info__input-container__error-msg",children:[(0,u.jsx)(d.G,{icon:"circle",className:"icon"})," ",r.email.message]})]}):(0,u.jsx)("p",{children:a.email}),n.email?(0,u.jsx)("h4",{className:"personal-info__container__info__link",onClick:function(){t((function(e){return(0,o.Z)((0,o.Z)({},e),{},{email:!1})}))},children:"cancel"}):(0,u.jsx)(d.G,{className:"personal-info__container__info__icon",icon:"pen",onClick:function(){t((function(e){return(0,o.Z)((0,o.Z)({},e),{},{email:!0})}))}})]}),(0,u.jsxs)("div",{className:n.password?"personal-info__container__info personal-info__container__info--focused":"personal-info__container__info",children:[(0,u.jsx)("label",{children:"password"}),n.password?(0,u.jsxs)("div",{className:"personal-info__container__info__input-container",children:[(0,u.jsxs)("div",{className:"personal-info__container__info__input-container__password-container",onClick:function(){document.querySelector(".personal-info__container__info__input-container__password-container input").focus()},children:[(0,u.jsx)("input",{name:"password",type:_?"password":"text",ref:s({pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9\s])[A-Za-z\d\W_]{8,}$/,message:"Should be more than 8 Letters and contain atleast 1 Upper case, Lower case, Number and symbol"},required:"Required"})}),_?(0,u.jsx)(d.G,{icon:"eye",className:"icon",onClick:function(e){l(!1),document.querySelector(".personal-info__container__info__input-container__password-container input").focus()}}):(0,u.jsx)(d.G,{icon:"eye-slash",className:"icon",onClick:function(){l(!0)}})]}),"undefined"!==typeof r.password&&(0,u.jsxs)("p",{className:"personal-info__container__info__input-container__error-msg",children:[(0,u.jsx)(d.G,{icon:"circle",className:"icon"})," ",r.password.message]})]}):(0,u.jsx)("p",{children:"***********"}),p&&(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{className:"personal-info__container__info__pop-up",children:[(0,u.jsx)("p",{className:"personal-info__container__info__pop-up__title",children:"verify its you"}),(0,u.jsxs)("div",{className:"personal-info__container__info__input-container",children:[(0,u.jsxs)("label",{htmlFor:"verifyPassword",children:["password ",(0,u.jsx)("span",{children:"*"})]}),m&&(0,u.jsxs)("p",{className:"personal-info__container__info__input-container__error-msg",children:[(0,u.jsx)(d.G,{icon:"circle",className:"icon"})," incorrect password"]}),""!==x&&(0,u.jsxs)("p",{className:"personal-info__container__info__input-container__error-msg",children:[(0,u.jsx)(d.G,{icon:"circle",className:"icon"})," Required"]}),(0,u.jsxs)("div",{className:"personal-info__container__info__input-container__password-container",onClick:function(){document.querySelector(".personal-info__container__info__input-container__password-container input").focus()},children:[(0,u.jsx)("input",{name:"verifyPassword",type:_?"password":"text",ref:s({required:"Required"}),onChange:function(e){e.target.value.length>=1&&j("")}}),_?(0,u.jsx)(d.G,{icon:"eye",className:"icon",onClick:function(e){l(!1),document.querySelector(".personal-info__container__info__input-container__password-container input").focus()}}):(0,u.jsx)(d.G,{icon:"eye-slash",className:"icon",onClick:function(){l(!0)}})]})]}),(0,u.jsxs)("div",{className:"personal-info__container__info__pop-up__button-container",children:[(0,u.jsx)("button",{type:"button",className:"personal-info__container__info__pop-up__button-container__cancel",onClick:function(){f(!1)},children:"cancel"}),N?(0,u.jsx)("button",{type:"button",disabled:!0,className:"personal-info__container__info__pop-up__button-container__ok personal-info__container__info__pop-up__button-container__ok--loading",children:(0,u.jsx)("div",{className:"personal-info__container__info__pop-up__button-container__ok__loading"})}):(0,u.jsx)("button",{type:"button",className:"personal-info__container__info__pop-up__button-container__ok",onClick:function(){h(!1),""!==i("verifyPassword")?(g(!0),c().get("/user/check-user?userId=".concat(a._id,"&password=").concat(i("verifyPassword"))).then((function(e){if(200!==e.status)throw new Error;f(!1),h(!1),t((function(e){return(0,o.Z)((0,o.Z)({},e),{},{password:!0})})),g(!1),document.querySelector(".personal-info__container__info__input-container__password-container input").focus()})).catch((function(e){h(!0),g(!1),document.querySelector(".personal-info__container__info__input-container__password-container input").focus()}))):j("Required")},children:"submit"})]})]}),(0,u.jsx)("div",{className:"personal-info__black-box",onClick:function(){f(!1)}})]}),n.password?(0,u.jsx)("h4",{className:"personal-info__container__info__link",onClick:function(){t((function(e){return(0,o.Z)((0,o.Z)({},e),{},{password:!1})}))},children:"cancel"}):(0,u.jsx)(d.G,{className:"personal-info__container__info__icon",icon:"pen",onClick:function(){f(!0)}})]})]})},h=s(9271),x=s(1523);var j=function(){var e=(0,h.k6)(),n=(0,i.useContext)(_.UserContext),s=n.user,t=n.setUser,l=(0,i.useContext)(_.StateContext),p=(0,i.useState)(""),j=(0,a.Z)(p,2),N=j[0],g=j[1],v=(0,i.useState)(""),w=(0,a.Z)(v,2),b=w[0],y=w[1],k=(0,i.useState)(!1),S=(0,a.Z)(k,2),C=S[0],Z=S[1],P=(0,i.useState)({name:!1,email:!1,password:!1}),q=(0,a.Z)(P,2),A=q[0],G=q[1],O=(0,i.useState)(!1),V=(0,a.Z)(O,2),E=V[0],T=V[1],F=(0,i.useState)(!0),R=(0,a.Z)(F,2),I=R[0],L=R[1],$=(0,i.useState)(!1),D=(0,a.Z)($,2),J=D[0],U=D[1],W=(0,i.useState)(!1),z=(0,a.Z)(W,2),H=z[0],B=z[1],M=(0,i.useState)(!1),K=(0,a.Z)(M,2),Q=K[0],X=K[1],Y=(0,i.useState)(""),ee=(0,a.Z)(Y,2),ne=ee[0],se=ee[1];(0,i.useEffect)((function(){document.title="My Account | Stand Out"}),[]),(0,i.useEffect)((function(){if(""!==N){var e=setTimeout((function(){g("")}),3400),n=setTimeout((function(){Z(!0)}),1),s=setTimeout((function(){Z(!1)}),3e3);return function(){clearTimeout(e),clearTimeout(n),clearTimeout(s)}}}),[N]),(0,i.useEffect)((function(){if(""!==b){var e=setTimeout((function(){y("")}),3400),n=setTimeout((function(){Z(!0)}),1),s=setTimeout((function(){Z(!1)}),3e3);return function(){clearTimeout(e),clearTimeout(n),clearTimeout(s)}}}),[b]);var oe=(0,r.cI)({defaultValues:{addresses:s.addresses}}),ae=oe.register,ie=oe.handleSubmit,re=oe.errors,te=oe.watch,ce=oe.control,de=oe.setValue,_e=oe.trigger,le=(0,r.Dq)({control:ce,name:"addresses"}),pe=le.fields,ue=le.append,fe=le.remove;return"undefined"===typeof s.name?(0,u.jsxs)("div",{className:"personal-info__tool-tip-container",children:[(0,u.jsxs)("div",{className:"personal-info__tool-tip-container__tool-tip",children:[(0,u.jsx)("p",{children:"please signin to continue"}),(0,u.jsx)(x.rU,{to:"/signin",children:(0,u.jsx)("button",{children:"ok"})})]}),(0,u.jsx)("div",{className:"personal-info__tool-tip-container__black-box",onClick:function(){e.goBack()}})]}):(0,u.jsxs)("div",{className:"personal-info",children:[""!==N&&(0,u.jsxs)("div",{className:C?"msg msg--visible":"msg",children:[(0,u.jsx)(d.G,{icon:["far","times-circle"],className:"icon",onClick:function(){y("")}}),(0,u.jsx)("p",{children:N})]}),""!==b&&(0,u.jsxs)("div",{className:C?"msg msg--visible":"msg",children:[(0,u.jsx)(d.G,{icon:["far","check-circle"],className:"icon",onClick:function(){y("")}}),(0,u.jsx)("p",{children:b})]}),(0,u.jsx)("h1",{children:"Personal info"}),(0,u.jsxs)("form",{onSubmit:ie((function(e){"xander21here@gmail.com"===s.email?(g("you cannot change owner info, but you can change your account info"),B(!1)):(B(!0),"undefined"===typeof e.addresses?e.addresses=[]:JSON.stringify(s.addresses)===JSON.stringify(te("addresses"))?delete e.addresses:e.addresses.forEach((function(e){""===e._id&&delete e._id})),c().put("/user/update",{data:e}).then((function(n){if(200!==n.status)throw new Error;y("updated successfully"),t((function(n){return(0,o.Z)((0,o.Z)({},n),e)})),G({name:!1,email:!1,password:!1}),B(!1)})).catch((function(e){g("Something went Wrong. Please try again"),B(!1)})))})),children:[(0,u.jsx)(m,{showInput:A,register:ae,watch:te,user:s,errors:re,setShowInput:G,hidePassword:I,setHidePassword:L,showPopup:E,setShowPopup:T,wrongpassword:J,setWrongpassword:U,passwordError:ne,setPasswordError:se,loadingPassword:Q,setLoadingPassword:X}),(0,u.jsxs)("div",{className:"personal-info__container personal-info__container--address",children:[(0,u.jsx)("h2",{children:"address"}),pe.map((function(e,n){return(0,u.jsx)(f,{userAddresses:s.addresses,usStates:l,field:e,index:n,errors:re,control:ce,register:ae,watch:te,setValue:de,trigger:_e,remove:fe},e.id)})),(0,u.jsx)("div",{className:"personal-info__container__info__add-address",children:(0,u.jsx)("button",{type:"button",onClick:function(){ue({region:"AL"})},children:"add address"})})]}),(Object.values(A).includes(!0)||JSON.stringify(s.addresses)!==JSON.stringify(te("addresses")))&&(0,u.jsx)("div",{children:H?(0,u.jsx)("button",{disabled:!0,type:"button",className:"personal-info__submit personal-info__submit--loading",children:(0,u.jsx)("div",{className:"personal-info__submit__loading"})}):(0,u.jsx)("button",{type:"submit",className:"personal-info__submit",children:"upload changes"})})]})]})}},1413:function(e,n,s){s.d(n,{Z:function(){return i}});var o=s(4942);function a(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,o)}return s}function i(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?a(Object(s),!0).forEach((function(n){(0,o.Z)(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}}}]);
//# sourceMappingURL=258.5f0a0ca8.chunk.js.map