"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[105],{6105:function(e,r,t){t.r(r),t.d(r,{default:function(){return p}});var n=t(2982),o=t(885),s=t(2791),i=t(9271),a=t(1523),c=t(4569),d=t.n(c),l=t(8567),_=t(1363),u=t(184);var f=function(e){var r=e.el,t=e.setOrders,i=e.setSuccessMsgs,c=e.setHideOrders,d=e.colors,l=(0,s.useState)(!1),_=(0,o.Z)(l,2),f=_[0],p=_[1],h=(0,s.useState)(!1),y=(0,o.Z)(h,2),m=y[0],b=y[1],x=function(e){b(!0),c((function(r){return[].concat((0,n.Z)(r),[e])})),t((function(r){return r.filter((function(r){return r._id!==e}))})),i("order returned successfully. your payment will be refunfed within a week"),b(!1)};return(0,u.jsxs)("div",{className:"your-orders__orders-container__order",children:[(0,u.jsx)("div",{className:"your-orders__orders-container__order__header-bar",children:(0,u.jsxs)("div",{className:"your-orders__orders-container__order__header-bar__details",children:[(0,u.jsxs)("div",{className:"your-orders__orders-container__order__header-bar__details__detail",children:[(0,u.jsx)("p",{className:"your-orders__orders-container__order__header-bar__details__detail__label",children:"orders placed"}),(0,u.jsx)("p",{children:new Date(r.date).toUTCString().slice(5,16)})]}),(0,u.jsxs)("div",{className:"your-orders__orders-container__order__header-bar__details__detail",children:[(0,u.jsx)("p",{className:"your-orders__orders-container__order__header-bar__details__detail__label",children:"total"}),(0,u.jsxs)("p",{children:["$ ",Number(r.amount).toFixed(2)]})]}),(0,u.jsxs)("div",{className:"your-orders__orders-container__order__header-bar__details__detail your-orders__orders-container__order__header-bar__details__detail--address",children:[(0,u.jsx)("p",{className:"your-orders__orders-container__order__header-bar__details__detail__label",children:"ship to"}),(0,u.jsxs)("div",{className:"your-orders__orders-container__order__header-bar__details__detail__address-container",children:[(0,u.jsxs)("p",{className:"your-orders__orders-container__order__header-bar__details__detail__address-container__link",onTouchEnd:function(){p(!0)},children:[r.shippingAddress.firstName," ",r.shippingAddress.lastName]}),(0,u.jsxs)("div",{className:f?"your-orders__orders-container__order__header-bar__details__detail__address-container__address--visible your-orders__orders-container__order__header-bar__details__detail__address-container__address":"your-orders__orders-container__order__header-bar__details__detail__address-container__address",children:[(0,u.jsxs)("p",{children:[r.shippingAddress.streetAddress,","]}),r.shippingAddress.extendedAddress&&(0,u.jsx)("p",{children:"".concat(r.shippingAddress.extendedAddress,",")}),(0,u.jsx)("p",{children:"".concat(r.shippingAddress.locality,", ").concat(r.shippingAddress.region," ").concat(r.shippingAddress.postalCode)})]})]})]}),(0,u.jsxs)("div",{className:"your-orders__orders-container__order__header-bar__details__detail your-orders__orders-container__order__header-bar__details__detail--order-id",children:[(0,u.jsx)("p",{className:"your-orders__orders-container__order__header-bar__details__detail__label",children:"Order id"}),(0,u.jsx)("p",{children:r._id})]})]})}),(0,u.jsxs)("div",{className:"your-orders__orders-container__order__products-container",children:[r.delivered?(0,u.jsxs)("div",{className:"your-orders__orders-container__order__products-container__title-container",children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("h3",{className:"your-orders__orders-container__order__products-container__deliveres",children:"delivered"}),(0,u.jsx)("p",{children:"Package was handed directly to the customer."}),new Date(new Date(r.date).setDate(new Date(r.date).getDate()+10))>new Date&&(0,u.jsxs)("p",{children:["returned untill"," ",new Date(new Date(r.date).setDate(new Date(r.date).getDate()+10)).toUTCString().slice(5,16)]})]}),(0,u.jsx)("div",{className:"your-orders__orders-container__order__products-container__title-container__button-container",children:new Date(new Date(r.date).setDate(new Date(r.date).getDate()+10))>new Date&&(0,u.jsx)("button",{type:"button",onClick:function(){x(r._id)},children:"return"})})]}):(0,u.jsxs)("div",{className:"your-orders__orders-container__order__products-container__title-container",children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("h3",{className:"your-orders__orders-container__order__products-container__deliveres",children:"not delivered"}),(0,u.jsx)("p",{children:"on the way"}),(0,u.jsxs)("p",{children:["returned untill"," ",new Date(new Date(r.date).setDate(new Date(r.date).getDate()+10)).toUTCString().slice(5,16)]})]}),(0,u.jsx)("div",{className:"your-orders__orders-container__order__products-container__title-container__button-container",children:m?(0,u.jsx)("button",{type:"button",className:"your-orders__orders-container__order__products-container__title-container__button-container__button your-orders__orders-container__order__products-container__title-container__button-container__button--loding",children:(0,u.jsx)("div",{className:"your-orders__orders-container__order__products-container__title-container__button-container__button__loading"})}):(0,u.jsx)("button",{type:"button",className:"your-orders__orders-container__order__products-container__title-container__button-container__button",onClick:function(){x(r._id)},children:"return"})})]}),r.items.map((function(e,r){return(0,u.jsxs)("div",{className:"your-orders__orders-container__order__products-container__product-container",children:[(0,u.jsxs)("div",{className:"your-orders__orders-container__order__products-container__product-container__product",children:[(0,u.jsx)("div",{className:"your-orders__orders-container__order__products-container__product-container__product__img",children:(0,u.jsx)(a.rU,{to:"/item/".concat(e._id),children:(0,u.jsx)("img",{src:e.image,alt:e.name,onError:function(e){e.target.src="/images/imgFailed.jpg"}})})}),(0,u.jsxs)("div",{className:"your-orders__orders-container__order__products-container__product-container__product__content",children:[(0,u.jsx)(a.rU,{to:"/item/".concat(e._id),children:e.name}),(0,u.jsxs)("p",{className:"your-orders__orders-container__order__products-container__product-container__product__content__price",children:["$ ",(e.price/100).toFixed(2)]}),(0,u.jsxs)("p",{children:["Color: ",d.filter((function(r){return r[1]===e.color}))[0][0]]}),(0,u.jsxs)("p",{children:["size: ",e.size]}),(0,u.jsxs)("p",{children:["quantity: ",e.quantity]})]})]}),(0,u.jsxs)("div",{className:"your-orders__orders-container__order__products-container__product-container__button-container",children:[(0,u.jsx)(a.rU,{to:"/item/".concat(e._id),children:(0,u.jsx)("button",{type:"button",children:"buy again"})}),(0,u.jsx)(a.rU,{to:"/item/".concat(e._id),children:(0,u.jsx)("button",{type:"button",children:"write a product review"})})]})]},r)}))]})]})};var p=function(){var e=(0,i.TH)(),r=(0,i.k6)(),t=(0,s.useContext)(l.UserContext).user,c=(0,s.useContext)(l.OrdersContext).orders,p=(0,s.useContext)(l.HideOrdersContext),h=p.hideOrders,y=p.setHideOrders,m=(0,s.useContext)(l.ColorsContext),b=(0,s.useState)([]),x=(0,o.Z)(b,2),j=x[0],v=x[1],g=(0,s.useState)(!0),w=(0,o.Z)(g,2),N=w[0],O=w[1],k=(0,s.useState)(""),D=(0,o.Z)(k,2),C=D[0],S=D[1],A=(0,s.useState)(""),T=(0,o.Z)(A,2),E=T[0],P=T[1],Z=(0,s.useState)(!1),I=(0,o.Z)(Z,2),U=I[0],z=I[1],q=(0,s.useState)(!1),H=(0,o.Z)(q,2),F=H[0],W=H[1],G=(0,s.useState)(!1),M=(0,o.Z)(G,2),Q=M[0],B=M[1];return(0,s.useEffect)((function(){document.title="Your Orders | Stand Out"}),[]),(0,s.useEffect)((function(){if(""!==E){var e=setTimeout((function(){P("")}),3400),r=setTimeout((function(){z(!0)}),1),t=setTimeout((function(){z(!1)}),3e3);return function(){clearTimeout(e),clearTimeout(r),clearTimeout(t)}}}),[E]),(0,s.useEffect)((function(){if(""!==C){var e=setTimeout((function(){S("")}),3400),r=setTimeout((function(){z(!0)}),1),t=setTimeout((function(){z(!1)}),3e3);return function(){clearTimeout(e),clearTimeout(r),clearTimeout(t)}}}),[C]),(0,s.useEffect)((function(){if("/your-orders"===e.pathname)"undefined"!==typeof t.name?d().get("/user/orders").then((function(e){if(200!==e.status)throw new Error;var r=[];c.forEach((function(e){e.customer.email===t.email&&r.push(e)}));var o=r.sort((function(e,r){return new Date(e.date)<new Date(r.date)?1:new Date(e.date)>new Date(r.date)?-1:0})),s=[].concat((0,n.Z)(o),(0,n.Z)(e.data)).filter((function(e){return!h.includes(e._id)}));v(s),O(!1)})).catch((function(e){console.log(e)})):(O(!1),W(!0));else if("/orders"===e.pathname&&""!==e.search){e.search.split("&").forEach((function(e){if(e.includes("q=")){var r=e.replace("?","").replace("q=","");h.includes(r)?(B(!0),O(!1)):d().get("/user/guest-order?orderId=".concat(r)).then((function(e){if(200!==e.status)throw new Error;if(""===e.data)throw new Error;v([e.data]),O(!1)})).catch((function(e){B(!0),O(!1)}))}}))}}),[e,t,h,c]),N?(0,u.jsx)("div",{className:"loader-container",children:(0,u.jsx)("div",{className:"loader"})}):(0,u.jsxs)("div",{className:"your-orders",children:[""!==E&&(0,u.jsxs)("div",{className:U?"msg msg--visible":"msg",children:[(0,u.jsx)(_.G,{icon:["far","times-circle"],className:"icon",onClick:function(){S("")}}),(0,u.jsx)("p",{children:E})]}),""!==C&&(0,u.jsxs)("div",{className:U?"msg msg--visible":"msg",children:[(0,u.jsx)(_.G,{icon:["far","check-circle"],className:"icon",onClick:function(){S("")}}),(0,u.jsx)("p",{children:C})]}),F&&(0,u.jsxs)("div",{className:"your-orders__tool-tip-container",children:[(0,u.jsxs)("div",{className:"your-orders__tool-tip-container__tool-tip",children:[(0,u.jsx)("p",{children:"please signin to continue"}),(0,u.jsx)(a.rU,{to:"/signin",children:(0,u.jsx)("button",{children:"ok"})})]}),(0,u.jsx)("div",{className:"your-orders__tool-tip-container__black-box",onClick:function(){r.goBack()}})]}),Q&&(0,u.jsxs)("div",{className:"your-orders__tool-tip-container",children:[(0,u.jsxs)("div",{className:"your-orders__tool-tip-container__tool-tip",children:[(0,u.jsx)("p",{children:"No orders found. Check your order-id and try again"}),(0,u.jsx)("button",{onClick:function(){r.push("/")},children:"ok"})]}),(0,u.jsx)("div",{className:"your-orders__tool-tip-container__black-box",onClick:function(){r.goBack()}})]}),(0,u.jsx)("h1",{children:"your orders"}),j.length<=0?(0,u.jsx)("p",{className:"your-orders__no-orders",children:"/your-orders"===e.pathname?"you haven't purchased anything yet..........":"No Orders left......"}):(0,u.jsx)("div",{className:"your-orders__orders-container",children:j.map((function(e,r){return(0,u.jsx)(f,{el:e,setOrders:v,setSuccessMsgs:S,setErrorMsgs:P,setHideOrders:y,colors:m},r)}))})]})}},1363:function(e,r,t){t.d(r,{G:function(){return b}});var n=t(6307),o=t(2007),s=t.n(o),i=t(2791);function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function u(e){return function(e){if(Array.isArray(e)){for(var r=0,t=new Array(e.length);r<e.length;r++)t[r]=e[r];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(e){return r=e,(r-=0)===r?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,r){return r?r.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var r}function p(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,r){var t,n=r.indexOf(":"),o=f(r.slice(0,n)),s=r.slice(n+1).trim();return o.startsWith("webkit")?e[(t=o,t.charAt(0).toUpperCase()+t.slice(1))]=s:e[o]=s,e}),{})}var h=!1;try{h=!0}catch(j){}function y(e){return n.Qc.icon?n.Qc.icon(e):null===e?null:"object"===a(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function m(e,r){return Array.isArray(r)&&r.length>0||!Array.isArray(r)&&r?c({},e,r):{}}function b(e){var r=e.forwardedRef,t=_(e,["forwardedRef"]),o=t.icon,s=t.mask,i=t.symbol,a=t.className,d=t.title,f=t.titleId,p=y(o),j=m("classes",[].concat(u(function(e){var r,t=e.spin,n=e.pulse,o=e.fixedWidth,s=e.inverse,i=e.border,a=e.listItem,d=e.flip,l=e.size,_=e.rotation,u=e.pull,f=(c(r={"fa-spin":t,"fa-pulse":n,"fa-fw":o,"fa-inverse":s,"fa-border":i,"fa-li":a,"fa-flip-horizontal":"horizontal"===d||"both"===d,"fa-flip-vertical":"vertical"===d||"both"===d},"fa-".concat(l),"undefined"!==typeof l&&null!==l),c(r,"fa-rotate-".concat(_),"undefined"!==typeof _&&null!==_&&0!==_),c(r,"fa-pull-".concat(u),"undefined"!==typeof u&&null!==u),c(r,"fa-swap-opacity",e.swapOpacity),r);return Object.keys(f).map((function(e){return f[e]?e:null})).filter((function(e){return e}))}(t)),u(a.split(" ")))),v=m("transform","string"===typeof t.transform?n.Qc.transform(t.transform):t.transform),g=m("mask",y(s)),w=(0,n.qv)(p,l({},j,{},v,{},g,{symbol:i,title:d,titleId:f}));if(!w)return function(){var e;!h&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",p),null;var N=w.abstract,O={ref:r};return Object.keys(t).forEach((function(e){b.defaultProps.hasOwnProperty(e)||(O[e]=t[e])})),x(N[0],O)}b.displayName="FontAwesomeIcon",b.propTypes={border:s().bool,className:s().string,mask:s().oneOfType([s().object,s().array,s().string]),fixedWidth:s().bool,inverse:s().bool,flip:s().oneOf(["horizontal","vertical","both"]),icon:s().oneOfType([s().object,s().array,s().string]),listItem:s().bool,pull:s().oneOf(["right","left"]),pulse:s().bool,rotation:s().oneOf([0,90,180,270]),size:s().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:s().bool,symbol:s().oneOfType([s().bool,s().string]),title:s().string,transform:s().oneOfType([s().string,s().object]),swapOpacity:s().bool},b.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var x=function e(r,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof t)return t;var o=(t.children||[]).map((function(t){return e(r,t)})),s=Object.keys(t.attributes||{}).reduce((function(e,r){var n=t.attributes[r];switch(r){case"class":e.attrs.className=n,delete t.attributes.class;break;case"style":e.attrs.style=p(n);break;default:0===r.indexOf("aria-")||0===r.indexOf("data-")?e.attrs[r.toLowerCase()]=n:e.attrs[f(r)]=n}return e}),{attrs:{}}),i=n.style,a=void 0===i?{}:i,c=_(n,["style"]);return s.attrs.style=l({},s.attrs.style,{},a),r.apply(void 0,[t.tag,l({},s.attrs,{},c)].concat(u(o)))}.bind(null,i.createElement)},2982:function(e,r,t){t.d(r,{Z:function(){return s}});var n=t(907);var o=t(181);function s(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=105.0317e4cc.chunk.js.map