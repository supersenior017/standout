"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[551],{1436:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(2791),o=n(1413),s=n(1363),c=n(184);var r=function(e){var t=e.filter,n=e.setFilter,i=e.hideFilter,r=e.setHideFilter,_=e.setLastClicked,l=e.setUpdate;return(0,c.jsxs)("div",{className:"shop__filters-container__filter-container",children:[(0,c.jsxs)("div",{className:"shop__filters-container__filter-container__filter",onClick:function(){r((function(e){return(0,o.Z)((0,o.Z)({},e),{},{sort:!e.sort})}))},children:[(0,c.jsx)("p",{className:"shop__filters-container__filter-container__filter__name",children:"sort by"}),i.sort?(0,c.jsx)("p",{className:"shop__filters-container__filter-container__filter__icon",children:"+"}):(0,c.jsx)("p",{className:"shop__filters-container__filter-container__filter__icon",children:"-"})]}),(0,c.jsxs)("div",{className:i.sort?"shop__filters-container__filter-container__options--checkbox shop__filters-container__filter-container__options--hidden":"shop__filters-container__filter-container__options--checkbox",children:[(0,c.jsxs)("div",{className:"shop__filters-container__filter-container__options--checkbox__checkbox",children:[(0,c.jsx)("div",{className:"shop__filters-container__filter-container__options--checkbox__checkbox__icons",onClick:function(){n((function(e){return(0,o.Z)((0,o.Z)({},e),{},{sort:"asc"===e.sort?"":"asc"})})),_("sort"),l((function(e){return e+1}))},children:"asc"===t.sort?(0,c.jsx)(s.G,{className:"shop__filters-container__filter-container__options--checkbox__checkbox__icons__icon",icon:"check-square"}):(0,c.jsx)(s.G,{className:"shop__filters-container__filter-container__options--checkbox__checkbox__icons__icon",icon:["far","square"]})}),(0,c.jsx)("p",{children:"Low to high"})]}),(0,c.jsxs)("div",{className:"shop__filters-container__filter-container__options--checkbox__checkbox",children:[(0,c.jsx)("div",{className:"shop__filters-container__filter-container__options--checkbox__checkbox__icons",onClick:function(){n((function(e){return(0,o.Z)((0,o.Z)({},e),{},{sort:"desc"===e.sort?"":"desc"})})),_("sort"),l((function(e){return e+1}))},children:"desc"===t.sort?(0,c.jsx)(s.G,{className:"shop__filters-container__filter-container__options--checkbox__checkbox__icons__icon",icon:"check-square"}):(0,c.jsx)(s.G,{className:"shop__filters-container__filter-container__options--checkbox__checkbox__icons__icon",icon:["far","square"]})}),(0,c.jsx)("p",{children:"High to low"})]})]})]})},_=n(3433);var l=function(e){var t=e.filter,n=e.setFilter,i=e.hideFilter,s=e.setHideFilter,r=e.itemStock,l=e.setLastClicked,a=e.setUpdate,u=e.colors;return(0,c.jsxs)("div",{className:"shop__filters-container__filter-container",children:[(0,c.jsxs)("div",{className:"shop__filters-container__filter-container__filter",onClick:function(){s((function(e){return(0,o.Z)((0,o.Z)({},e),{},{color:!e.color})}))},children:[(0,c.jsx)("p",{className:"shop__filters-container__filter-container__filter__name",children:"colour"}),i.color?(0,c.jsx)("p",{className:"shop__filters-container__filter-container__filter__icon",children:"+"}):(0,c.jsx)("p",{className:"shop__filters-container__filter-container__filter__icon",children:"-"})]}),(0,c.jsx)("div",{className:i.color?"shop__filters-container__filter-container__options--color shop__filters-container__filter-container__options--hidden":"shop__filters-container__filter-container__options--color",children:r.colors.map((function(e,i){return(0,c.jsxs)("div",{className:t.color.includes(e.slice(1))?"shop__filters-container__filter-container__options--color__color-container shop__filters-container__filter-container__options--color__color-container--active":"shop__filters-container__filter-container__options--color__color-container",onClick:function(){n((function(t){return(0,o.Z)((0,o.Z)({},t),{},{color:t.color.includes(e.slice(1))?t.color.filter((function(t){return t!==e.slice(1)})):[].concat((0,_.Z)(t.color),[e.slice(1)])})})),l("color"),a((function(e){return e+1}))},children:[(0,c.jsx)("div",{className:t.color.includes(e.slice(1))?"shop__filters-container__filter-container__options--color__color-container__color-box shop__filters-container__filter-container__options--color__color-container__color-box--active":"shop__filters-container__filter-container__options--color__color-container__color-box",children:(0,c.jsx)("div",{className:"shop__filters-container__filter-container__options--color__color-container__color-box__color",style:{backgroundColor:e}})}),(0,c.jsx)("p",{children:u.filter((function(t){return t[1]===e}))[0][0]})]},i)}))})]})};var a=function(e){var t=e.filter,n=e.setFilter,i=e.hideFilter,s=e.setHideFilter,r=e.itemStock,l=e.setLastClicked,a=e.setUpdate;return(0,c.jsxs)("div",{className:"shop__filters-container__filter-container",children:[(0,c.jsxs)("div",{className:"shop__filters-container__filter-container__filter",onClick:function(){s((function(e){return(0,o.Z)((0,o.Z)({},e),{},{size:!e.size})}))},children:[(0,c.jsx)("p",{className:"shop__filters-container__filter-container__filter__name",children:"size"}),i.size?(0,c.jsx)("p",{className:"shop__filters-container__filter-container__filter__icon",children:"+"}):(0,c.jsx)("p",{className:"shop__filters-container__filter-container__filter__icon",children:"-"})]}),(0,c.jsx)("div",{className:i.size?"shop__filters-container__filter-container__options--size shop__filters-container__filter-container__options--hidden":"shop__filters-container__filter-container__options--size",children:r.sizes.map((function(e,i){return(0,c.jsx)("div",{className:t.size.includes(e)?"shop__filters-container__filter-container__options--size__size shop__filters-container__filter-container__options--size__size--active":"shop__filters-container__filter-container__options--size__size",onClick:function(){n((function(t){return(0,o.Z)((0,o.Z)({},t),{},{size:t.size.includes(e)?t.size.filter((function(t){return t!==e})):[].concat((0,_.Z)(t.size),[e])})})),l("size"),a((function(e){return e+1}))},children:(0,c.jsx)("p",{children:e})},i)}))})]})},u=n(9331);var d=function(e){var t=e.filter,n=e.setFilter,o=e.itemStock,s=e.hideFilter,_=e.setHideFilter,d=e.showFilters,h=e.setShowFilters,f=e.setBlackBox,m=e.noResults,p=e.setLastClicked,x=e.setUpdate,g=e.hide,j=(0,i.useContext)(u.eI);return(0,i.useEffect)((function(){if(!d){var e=setTimeout((function(){document.querySelector("body").style.paddingRight=0,document.querySelector("html").style.overflowY="scroll"}),300);return function(){return clearTimeout(e)}}document.querySelector("body").style.paddingRight=window.innerWidth-document.body.clientWidth+"px",document.querySelector("html").style.overflowY="hidden"}),[d]),o.colors.length<=0?(0,c.jsxs)("div",{style:m||g?{opacity:"0",pointerEvents:"none"}:{},className:d?"shop__loading__container shop__loading__container--filter shop__loading__container--filter--active":"shop__loading__container shop__loading__container--filter",children:[(0,c.jsx)("div",{className:"shop__filters-container__button-container",children:(0,c.jsx)("button",{type:"button",onClick:function(){h(!1),f(!1)},children:(0,c.jsx)("img",{src:"https://img.icons8.com/fluent-systems-filled/24/000000/multiply.png",alt:"icon"})})}),(0,c.jsx)("div",{className:"shop__loading__container__title"}),(0,c.jsx)("div",{className:"shop__loading__container__content"}),(0,c.jsx)("div",{className:"shop__loading__container__content"}),(0,c.jsx)("div",{className:"shop__loading__container__content"})]}):(0,c.jsxs)("div",{style:g?{opacity:"0",pointerEvents:"none"}:{},className:d?"shop__filters-container shop__filters-container--active":"shop__filters-container",children:[(0,c.jsx)("div",{className:"shop__filters-container__button-container",children:(0,c.jsx)("button",{type:"button",onClick:function(){h(!1),f(!1)},children:(0,c.jsx)("img",{src:"https://img.icons8.com/fluent-systems-filled/24/000000/multiply.png",alt:"icon"})})}),(0,c.jsx)("h4",{children:"filter by :"}),(0,c.jsx)(r,{filter:t,setFilter:n,hideFilter:s,setHideFilter:_,setLastClicked:p,setUpdate:x}),(0,c.jsx)(l,{filter:t,setFilter:n,hideFilter:s,setHideFilter:_,itemStock:o,setLastClicked:p,setUpdate:x,colors:j}),(0,c.jsx)(a,{filter:t,setFilter:n,hideFilter:s,setHideFilter:_,itemStock:o,setLastClicked:p,setUpdate:x}),(0,c.jsx)("button",{className:"shop__filters-container__apply",onClick:function(){h(!1),f(!1)},children:"apply"})]})}},7551:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var i=n(1413),o=n(3433),s=n(9439),c=n(2791),r=n(1363),_=n(1243),l=n(1436),a=n(4942),u=n(1087),d=n(9331),h=n(184);var f=function(e){var t=e.el,n=e.stockIndex,_=e.index,l=e.setStockIndex,f=e.setSuccessMsgs,m=e.setItems,p=e.setUpdate,x=e.setUserProducts,g=e.setHideProducts,j=(0,c.useContext)(d.s2),v=(0,c.useState)(!0),k=(0,s.Z)(v,2),b=k[0],N=k[1],z=(0,c.useState)(!1),y=(0,s.Z)(z,2),Z=y[0],C=y[1],w=(0,c.useState)(!0),S=(0,s.Z)(w,2),E=S[0],F=S[1];return(0,h.jsxs)("div",{className:"shop__items-container__items__item",onMouseEnter:function(){N(!1)},onMouseLeave:function(){N(!0)},children:[(0,h.jsxs)("div",{className:"shop__items-container__items__item__image-container",children:[(0,h.jsx)("img",{src:j(300)+t.stock[n[_]].images[0],alt:t.name,onError:function(e){e.target.src="/images/imgFailed.jpg"}}),E?(0,h.jsxs)("div",{className:"shop__items-container__items__item__image-container__button-container",children:[(0,h.jsx)("button",{onClick:function(){F(!1)},children:"delete"}),(0,h.jsx)(u.rU,{to:"/edit-item/".concat(t._id),children:(0,h.jsx)("button",{children:"edit"})})]}):(0,h.jsxs)("div",{className:"shop__items-container__items__item__image-container__tool-tip",children:[(0,h.jsx)("p",{children:"Are you sure you want to delete this item?"}),(0,h.jsxs)("div",{className:"shop__items-container__items__item__image-container__tool-tip__button-container",children:[(0,h.jsx)("button",{onClick:function(){F(!0)},children:"no"}),(0,h.jsx)("button",{className:Z?"shop__items-container__items__item__image-container__tool-tip__button-container__yes shop__items-container__items__item__image-container__tool-tip__button-container__yes--loading":"shop__items-container__items__item__image-container__tool-tip__button-container__yes",onClick:function(){Z||(C(!0),x((function(e){return e.filter((function(e){return e._id!==t._id}))})),C(!1),f("item deleted successfully"),m((function(e){return e.filter((function(e){return e._id!==t._id}))})),t._id.length>=10&&g((function(e){return[].concat((0,o.Z)(e),[t._id])})),F(!0),p((function(e){return e+1})))},children:Z?(0,h.jsx)("div",{className:"shop__items-container__items__item__image-container__tool-tip__button-container__yes__loading"}):"yes"})]})]})]}),(0,h.jsx)("p",{className:"shop__items-container__items__item__name",children:(0,h.jsx)(u.rU,{to:"/item/".concat(t._id),children:t.name})}),(0,h.jsx)("p",{className:"shop__items-container__items__item__price",children:"$".concat((t.price/100).toFixed(2))}),t.totalRatings>=1&&(0,h.jsxs)("div",{className:"shop__items-container__items__item__rating-container",children:[(0,h.jsx)("div",{className:"shop__items-container__items__item__rating-container__icons",children:"".concat(t.averageRating).split(".").map((function(e,t){if(0===t){for(var n=[],i=0;i<Number(e);i++)n.push((0,h.jsx)(r.G,{icon:"star",className:"shop__items-container__items__item__rating-container__icons__icon"},i));return n}return(0,h.jsx)(r.G,{icon:"star-half",className:"shop__items-container__items__item__rating-container__icons__icon"},9)}))}),(0,h.jsx)("p",{className:"shop__items-container__items__item__rating-container__rating",children:t.averageRating.toFixed(1)}),(0,h.jsx)("p",{className:"shop__items-container__items__item__rating-container__people",children:"(".concat(t.totalRatings,")")})]}),b&&(0,h.jsxs)("p",{className:"shop__items-container__items__item__colors--name",children:[t.stock.length," colors"]}),!b&&(0,h.jsxs)("div",{className:"shop__items-container__items__item__colors-container",children:[(0,h.jsx)("div",{className:"shop__items-container__items__item__colors",children:t.stock.map((function(e,t){return(0,h.jsx)("div",{className:n[_]===t?"shop__items-container__items__item__colors__color-box shop__items-container__items__item__colors__color-box--active":"shop__items-container__items__item__colors__color-box",onMouseEnter:function(){l((function(e){return(0,i.Z)((0,i.Z)({},e),{},(0,a.Z)({},_,t))}))},onMouseLeave:function(){l((function(e){return(0,i.Z)((0,i.Z)({},e),{},(0,a.Z)({},_,0))}))},children:(0,h.jsx)("div",{style:{backgroundColor:e.color},className:"shop__items-container__items__item__colors__color-box__color"})},t)}))}),(0,h.jsx)("p",{className:"shop__items-container__items__item__sizes",children:function(e){var t="";return e.forEach((function(e,n){t=0===n?e.size:t+" / "+e.size})),t}(t.stock[n[_]].sizeRemaining)})]})]})},m=(n(5877),n(4799)),p=n.n(m),x=n(7689);var g=function(){var e=(0,x.s0)(),t=(0,x.TH)(),n=(0,c.useContext)(d.BZ).uploadOptions,a=(0,c.useContext)(d.ZP),m=a.userProducts,g=a.setUserProducts,j=(0,c.useContext)(d.lg),v=j.hideProducts,k=j.setHideProducts,b=(0,c.useContext)(d.St).user,N=(0,c.useState)(""),z=(0,s.Z)(N,2),y=z[0],Z=z[1],C=(0,c.useState)(""),w=(0,s.Z)(C,2),S=w[0],E=w[1],F=(0,c.useState)([]),L=(0,s.Z)(F,2),U=L[0],R=L[1],q=(0,c.useState)([]),O=(0,s.Z)(q,2),T=O[0],H=O[1],P=(0,c.useState)(!1),I=(0,s.Z)(P,2),G=I[0],M=I[1],B=(0,c.useState)([]),W=(0,s.Z)(B,2),A=W[0],$=W[1],Y=(0,c.useState)(0),D=(0,s.Z)(Y,2),J=D[0],K=D[1],Q=(0,c.useState)({colors:[],sizes:[]}),V=(0,s.Z)(Q,2),X=V[0],ee=V[1],te=(0,c.useState)({}),ne=(0,s.Z)(te,2),ie=ne[0],oe=ne[1],se=(0,c.useState)(0),ce=(0,s.Z)(se,2),re=ce[0],_e=ce[1],le=12,ae=(0,c.useState)({sort:"",color:[],size:[]}),ue=(0,s.Z)(ae,2),de=ue[0],he=ue[1],fe=(0,c.useState)({sort:!0,color:!0,size:!0}),me=(0,s.Z)(fe,2),pe=me[0],xe=me[1],ge=(0,c.useState)(!1),je=(0,s.Z)(ge,2),ve=je[0],ke=je[1],be=(0,c.useState)(""),Ne=(0,s.Z)(be,2),ze=Ne[0],ye=Ne[1],Ze=(0,c.useState)(!1),Ce=(0,s.Z)(Ze,2),we=Ce[0],Se=Ce[1],Ee=(0,c.useState)(window.innerWidth),Fe=(0,s.Z)(Ee,2),Le=Fe[0],Ue=Fe[1],Re=(0,c.useState)(""),qe=(0,s.Z)(Re,2),Oe=qe[0],Te=qe[1],He=(0,c.useState)(""),Pe=(0,s.Z)(He,2),Ie=Pe[0],Ge=Pe[1],Me=(0,c.useState)(!1),Be=(0,s.Z)(Me,2),We=Be[0],Ae=Be[1],$e=(0,c.useState)(!1),Ye=(0,s.Z)($e,2),De=Ye[0],Je=Ye[1],Ke=(0,c.useState)(0),Qe=(0,s.Z)(Ke,2),Ve=Qe[0],Xe=Qe[1];(0,c.useEffect)((function(){document.title="Update Products | Stand Out"}),[]),(0,c.useEffect)((function(){"undefined"!==typeof b.name?_.Z.get("/user/is-admin").then((function(t){if(200!==t.status)throw new Error;"admin"!==t.data&&e("/404")})).catch((function(e){console.log(e)})):e("/404",{replace:!0})}),[b.name,e]),(0,c.useEffect)((function(){window.innerWidth>=1e3&&ve&&(Se(!1),ke(!1))}),[Le,ve]);var et=(0,c.useCallback)((function(){Ue(window.innerWidth)}),[]);(0,c.useEffect)((function(){return window.addEventListener("resize",et),function(){window.removeEventListener("resize",et)}}),[et]),(0,c.useEffect)((function(){if(""!==Ie){var e=setTimeout((function(){Ge("")}),3400),t=setTimeout((function(){Ae(!0)}),1),n=setTimeout((function(){Ae(!1)}),3e3);return function(){clearTimeout(e),clearTimeout(t),clearTimeout(n)}}}),[Ie]),(0,c.useEffect)((function(){if(""!==Oe){var e=setTimeout((function(){Te("")}),3400),t=setTimeout((function(){Ae(!0)}),1),n=setTimeout((function(){Ae(!1)}),3e3);return function(){clearTimeout(e),clearTimeout(t),clearTimeout(n)}}}),[Oe]),(0,c.useEffect)((function(){var e=t.search.replace("?","").split("&");e.length>=1&&e.filter((function(e){return e.includes("q=")})).length>=1&&""!==decodeURI(e.filter((function(e){return e.includes("q=")}))[0].replace("q=",""))?(E(decodeURI(e.filter((function(e){return e.includes("q=")}))[0].replace("q=",""))),Z(decodeURI(e.filter((function(e){return e.includes("q=")}))[0].replace("q=","")))):E(";kjh4g#&o4lh")}),[t]),(0,c.useEffect)((function(){if(""!==S){var e=[],t=[],i=S.trim().replace(/[`~!@#$%^&*()_|+\-=?;:'",.{}[\]()/\\]/gi,""),o={men:["men","man","mens","mans"],women:["women","woman","womens","womans"]};i.split(" ").forEach((function(i){Object.keys(o).forEach((function(e){o[e].forEach((function(n){t.includes(e)||p().plural(n).toLowerCase().replace(/[`~!@#$%^&*()_|+\-=?;:'",.{}[\]()/\\]/gi,"")===p().plural(i).toLowerCase()&&t.push(e)}))})),Object.keys(n).forEach((function(t){"both"!==t&&n[t].forEach((function(t){e.includes(i.toLowerCase())||t.split(" ").forEach((function(n){p().plural(n).toLowerCase().replace(/[`~!@#$%^&*()_|+\-=?;:'",.{}[\]()/\\]/gi,"")===p().plural(i).toLowerCase()&&e.push(t.toLowerCase())}))}))}))})),e.length<1&&(e=[";0.hjgbhj"]),t.length<1&&(t=[";0.hjgbhj"]),R(t),H(e),Xe((function(e){return e+1}))}}),[S,n]);var tt=(0,c.useCallback)((function(){_e(0),xe({sort:!0,color:!0,size:!0}),he({sort:"",color:[],size:[]}),ye(""),M(!1),Xe((function(e){return e+1}))}),[]);(0,c.useEffect)(tt,[S]);var nt=(0,c.useCallback)((function(){$([]),_.Z.get("/product/".concat(U,"/").concat(T,"?page=",1,"&limit=").concat(le,"&sort=").concat(de.sort,"&color=").concat(de.color,"&size=").concat(de.size,"&except=").concat(v)).then((function(e){var t=e.data,n=t.count,i=t.products;if(U.length>0&&T.length>0){var s={};";0.hjgbhj"!==U[0]&&(s.catagory=[].concat((0,o.Z)(U),["both"])),";0.hjgbhj"!==T[0]&&(s.type=(0,o.Z)(T));var c=[];2===Object.keys(s).length?c=m.filter((function(e){return s.catagory.includes(e.catagory)&&s.type.includes(e.type)})):1===Object.keys(s).length&&(c=m.filter((function(e){return s[Object.keys(s)[0]].includes(e[Object.keys(s)[0]])})));var r=[];if(de.color.length<1&&de.size.length<1)r=c;else for(var _=function(e){for(var t=0;t<c[e].stock.length;t++){var n=[];if(r.filter((function(t){return t._id===c[e]._id})).length>0)break;de.color.includes(c[e].stock[t].color.replace("#",""))&&!n.includes("color")&&n.push("color");for(var i=0;i<c[e].stock[t].sizeRemaining.length;i++)de.size.includes(c[e].stock[t].sizeRemaining[i].size)&&!n.includes("size")&&n.push("size");(de.color.length>0&&de.size.length>0&&n.includes("color")&&n.includes("size")||de.color.length>0&&de.size.length<1&&n.includes("color")||de.color.length<1&&de.size.length>0&&n.includes("size"))&&r.push(c[e])}},l=0;l<c.length;l++)_(l);r.sort((function(e,t){return Number(t.createdAt)-Number(e.createdAt)})),i=[].concat((0,o.Z)(r),(0,o.Z)(i)),n+=r.length,""!==de.sort&&i.sort((function(e,t){return"asc"===de.sort?e.price-t.price:"desc"===de.sort?t.price-e.price:0}))}K(n),oe((function(e){for(var t={},n=0;n<i.length;n++)t[n]=0;return t})),console.log(i),i.length<1&&M(!0),$(i),_e(1)})).catch((function(e){console.log(e)}))}),[de,U,T,m,v]),it=(0,c.useCallback)((function(){console.log(1),U.length>0&&T.length>0&&(U.includes(";0.hjgbhj")&&T.includes(";0.hjgbhj")?M(!0):_.Z.get("/product/filter/".concat(U,"/").concat(T,"?&color=").concat(de.color,"&size=").concat(de.size,"&filter=").concat(ze,"&except=").concat(v)).then((function(e){if(Object.keys(e.data)<1)M(!0),ee({colors:[],sizes:[]});else{if(U.length>0&&T.length>0){var t={};";0.hjgbhj"!==U[0]&&(t.catagory=[].concat((0,o.Z)(U),["both"])),";0.hjgbhj"!==T[0]&&(t.type=(0,o.Z)(T));var n=[];2===Object.keys(t).length?n=m.filter((function(e){return t.catagory.includes(e.catagory)&&t.type.includes(e.type)})):1===Object.keys(t).length&&(n=m.filter((function(e){return t[Object.keys(t)[0]].includes(e[Object.keys(t)[0]])})));var s=[];if(de.color.length<1&&de.size.length<1)s=n;else if(ze.includes("color")&&de.color.length>0||ze.includes("size")&&de.size.length>0)for(var c=function(e){for(var t=0;t<n[e].stock.length&&!(s.filter((function(t){return t._id===n[e]._id})).length>0);t++){if(de.color.includes(n[e].stock[t].color.replace("#",""))&&ze.includes("color")&&de.color.length>0){s.push(n[e]);break}if(ze.includes("size")&&de.size.length>0)for(var i=0;i<n[e].stock[t].sizeRemaining.length;i++)if(de.size.includes(n[e].stock[t].sizeRemaining[i].size)){s.push(n[e]);break}}},r=0;r<n.length;r++)c(r);else s=n;var _={colors:[],sizes:[]};s.forEach((function(e){e.stock.forEach((function(e){(!ze.includes("color")||0===de.size.length&&ze.includes("size"))&&(_.colors.includes(e.color)||_.colors.push(e.color)),(!ze.includes("size")||0===de.color.length&&ze.includes("color"))&&e.sizeRemaining.forEach((function(e){var t=e.size;_.sizes.includes(t)||_.sizes.push(t)}))}))}));var l={colors:(0,o.Z)(e.data.colors),sizes:(0,o.Z)(e.data.sizes)};Object.keys(_).forEach((function(e){_[e].forEach((function(t){l[e].includes(t)||l[e].push(t)}))})),e.data=l,Object.keys(e.data).forEach((function(t){e.data[t].length<1&&delete e.data[t]}))}he((function(t){return Object.keys(e.data).forEach((function(n){"sizes"===n?t.size=t.size.filter((function(t){return e.data[n].includes(t)})):"colors"===n&&(t.color=t.color.filter((function(t){return e.data[n].includes("#"+t)})))})),t})),ee((function(t){return(0,i.Z)((0,i.Z)({},t),e.data)})),nt()}})).catch((function(e){console.log(e)})))}),[de,ze,nt,U,T,m,v]);return(0,c.useEffect)(it,[Ve]),(0,h.jsxs)("div",{className:"shop",children:[""!==Ie&&(0,h.jsxs)("div",{className:We?"msg msg--visible":"msg",children:[(0,h.jsx)(r.G,{icon:["far","times-circle"],className:"icon",onClick:function(){Te("")}}),(0,h.jsx)("p",{children:Ie})]}),""!==Oe&&(0,h.jsxs)("div",{className:We?"msg msg--visible":"msg",children:[(0,h.jsx)(r.G,{icon:["far","check-circle"],className:"icon",onClick:function(){Te("")}}),(0,h.jsx)("p",{children:Oe})]}),(0,h.jsx)(l.Z,{filter:de,setFilter:he,itemStock:X,hideFilter:pe,setHideFilter:xe,showFilters:ve,setShowFilters:ke,setBlackBox:Se,noResults:G,setLastClicked:ye,setUpdate:Xe}),(0,h.jsxs)("div",{className:"shop__items-container",children:[(0,h.jsxs)("div",{className:"shop__items-container__search-container",children:[(0,h.jsx)("svg",{className:"shop__items-container__search-container__icon",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"32",height:"32",viewBox:"0 0 30 30",style:{fill:"#ffffff"},children:(0,h.jsx)("path",{d:"M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"})}),(0,h.jsxs)("form",{children:[(0,h.jsx)("input",{type:"text",value:y,onChange:function(e){return Z(e.target.value)},autoFocus:!0,required:!0}),(0,h.jsx)(u.rU,{to:"/update-products?q=".concat(y),children:(0,h.jsx)("button",{type:"submit",style:{display:"none"}})})]})]}),(0,h.jsxs)("div",{className:"shop__items-container__title",style:G?{borderBottom:"1px solid #dddddd",paddingBottom:"2rem"}:{},children:[";kjh4g#&o4lh"!==S?(0,h.jsxs)("h1",{className:G?"shop__items-container__title__no-result":"",children:[(0,h.jsx)("span",{children:G?"We couldn't find anything for":"Results For"})," ",'"',S,'"']}):(0,h.jsx)("h1",{className:"shop__items-container__title__no-result",children:(0,h.jsx)("span",{children:"Search For Something"})}),!G&&(0,h.jsxs)("p",{onClick:function(){ke((function(e){return!e})),Se((function(e){return!e}))},children:["filter",(0,h.jsx)(r.G,{className:"icon",icon:"chevron-right"})]})]}),!G&&(0,h.jsxs)("div",{children:[A.length<1?(0,h.jsx)("div",{className:"shop__loading__box",children:function(){for(var e=[],t=0;t<le;t++)e.push(t);return e}().map((function(e){return(0,h.jsxs)("div",{className:"shop__loading__container shop__loading__container--item",children:[(0,h.jsx)("div",{className:"shop__loading__container__img"}),(0,h.jsx)("div",{className:"shop__loading__container__text shop__loading__container__text--name"}),(0,h.jsx)("div",{className:"shop__loading__container__text"}),(0,h.jsx)("div",{className:"shop__loading__container__text"})]},e)}))}):(0,h.jsx)("div",{className:"shop__items-container__items",children:A.map((function(e,t){return(0,h.jsx)(f,{el:e,stockIndex:ie,index:t,setStockIndex:oe,setSuccessMsgs:Te,setErrorMsgs:Ge,setItems:$,setUpdate:Xe,userProducts:m,setUserProducts:g,setHideProducts:k},t)}))}),A.length>0&&(0,h.jsxs)("div",{children:[(0,h.jsx)("p",{className:"shop__items-container__count",children:re*le<J?"".concat(re*le,"/").concat(J," products"):"".concat(J,"/").concat(J," products")}),re*le<J&&(0,h.jsx)("button",{className:De?"shop__items-container__load-more shop__items-container__load-more--loading":"shop__items-container__load-more",type:"button",onClick:function(){De||(Je(!0),_.Z.get("/product/".concat(U,"/").concat(T,"?page=").concat(re+1,"&limit=").concat(le,"&sort=").concat(de.sort,"&color=").concat(de.color,"&size=").concat(de.size)).then((function(e){if(200!==e.status)throw new Error;var t=e.data,n=t.count,o=t.products;K(n),oe((function(e){for(var t=(0,i.Z)({},e),n=0;n<o.length;n++)t[n+re*le]=0;return t})),$((function(e){return e.concat(o)})),_e((function(e){return e+1})),Je(!1)})).catch((function(e){console.log(e)})))},children:De?(0,h.jsx)("div",{className:"shop__items-container__load-more__loading"}):"load more"})]})]})]}),(0,h.jsx)("div",{className:we?"shop__black-box shop__black-box--visible":"shop__black-box",onClick:function(){ke(!1),Se(!1)}})]})}},5877:function(){}}]);
//# sourceMappingURL=551.eaa8aead.chunk.js.map