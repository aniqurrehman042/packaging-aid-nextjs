(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[999],{6860:function(e,i,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products/[productId]",function(){return s(3685)}])},5738:function(e,i,s){"use strict";var n=s(4051),a=s.n(n),t=s(5893),o=s(1163),r=s(7294);function c(e,i,s,n,a,t,o){try{var r=e[t](o),c=r.value}catch(l){return void s(l)}r.done?i(c):Promise.resolve(c).then(n,a)}i.Z=function(e){var i=e.className,s=(0,r.useState)(!1),n=s[0],l=s[1],d=(0,r.useState)(""),u=d[0],m=d[1],p=(0,r.useState)(""),h=p[0],x=p[1],g=(0,r.useState)(""),v=g[0],f=g[1],j=(0,r.useState)(""),N=j[0],y=j[1],b=(0,r.useState)(""),S=b[0],C=b[1],_=(0,r.useState)(""),w=_[0],B=_[1],k=(0,o.useRouter)(),T=function(){var e,i=(e=a().mark((function e(i){var s,n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("form submit"),i.preventDefault(),!E()){e.next=14;break}return l(!0),e.next=7,fetch("https://www.packagingaid.com/quote",{method:"POST",body:JSON.stringify({firstName:u,lastName:h,email:v,phone:N,boxType:S,message:w})});case 7:return s=e.sent,e.next=10,s.json();case 10:n=e.sent,t=n.message,l(!1),"Success"===t?(k.push("/form-thank-you"),console.log("Email Sent Successfully")):console.log("Email Could not be sent");case 14:case"end":return e.stop()}}),e)})),function(){var i=this,s=arguments;return new Promise((function(n,a){var t=e.apply(i,s);function o(e){c(t,n,a,o,r,"next",e)}function r(e){c(t,n,a,o,r,"throw",e)}o(void 0)}))});return function(e){return i.apply(this,arguments)}}(),E=function(){return""!==u.trim()&&""!==h.trim()&&""!==v.trim()&&""!==N.trim()&&""!==S.trim()&&""!==w.trim()};return(0,t.jsxs)("form",{className:"quote-form ".concat(null!==i&&void 0!==i?i:""),onSubmit:function(e){return T(e)},children:[(0,t.jsx)("h2",{className:"form-heading",children:"GET INSTANT QUOTE"}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-6",children:(0,t.jsx)("input",{className:"form-input",value:u,placeholder:"First name",name:"firstName",id:"firstName",type:"text",onChange:function(e){return m(e.target.value)},required:!0})}),(0,t.jsx)("div",{className:"col-6",children:(0,t.jsx)("input",{className:"form-input",value:h,placeholder:"Last name",name:"lastName",id:"lastName",type:"text",onChange:function(e){return x(e.target.value)},required:!0})})]}),(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-12",children:(0,t.jsx)("input",{className:"form-input",value:v,placeholder:"Your email",name:"email",id:"email",type:"email",onChange:function(e){return f(e.target.value)},required:!0})})}),(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-12",children:(0,t.jsx)("input",{className:"form-input",value:N,placeholder:"Your phone",name:"phone",id:"phone",type:"text",onChange:function(e){return y(e.target.value)},required:!0})})}),(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-12",children:(0,t.jsxs)("select",{className:"form-input",value:S,placeholder:"Select Box Type",name:"boxType",id:"boxType",onChange:function(e){return C(e.target.value)},children:[(0,t.jsx)("option",{value:"CBD Boxes",children:"CBD Boxes"}),(0,t.jsx)("option",{value:"Cosmetic Boxes",children:"Cosmetic Boxes"}),(0,t.jsx)("option",{value:"Display Boxes",children:"Display Boxes"}),(0,t.jsx)("option",{value:"Eco Friendly Boxes",children:"Eco Friendly Boxes"}),(0,t.jsx)("option",{value:"Metalized Boxes",children:"Metalized Boxes"}),(0,t.jsx)("option",{value:"Retail Boxes",children:"Retail Boxes"}),(0,t.jsx)("option",{value:"Food & Beverage Boxes",children:"Food & Beverage Boxes"}),(0,t.jsx)("option",{value:"Gift Boxes",children:"Gift Boxes"})]})})}),(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-12",children:(0,t.jsx)("textarea",{className:"form-input",value:w,rows:5,placeholder:"Let us know what you need! Box dimensions, number of boxes you need, design-we can help.",name:"message",id:"message",onChange:function(e){return B(e.target.value)}})})}),(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-12",children:(0,t.jsx)("button",{className:"form-input btn-submit",children:"SUBMIT"})})}),n&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{id:"overlay"}),(0,t.jsx)("div",{id:"loader"})]})]})}},7502:function(e,i,s){"use strict";var n=s(5893);i.Z=function(){return(0,n.jsx)("section",{className:"specifications",children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsxs)("div",{className:"specification-item",children:[(0,n.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/ic_starting_from.svg?alt=media"}),(0,n.jsx)("p",{children:"Starting from 100 Boxes"})]})}),(0,n.jsx)("li",{children:(0,n.jsxs)("div",{className:"specification-item",children:[(0,n.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/ic_free_designing.svg?alt=media"}),(0,n.jsx)("p",{children:"Free Designing Support"})]})}),(0,n.jsx)("li",{children:(0,n.jsxs)("div",{className:"specification-item",children:[(0,n.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/ic_fast_turnaround.svg?alt=media"}),(0,n.jsx)("p",{children:"Fast Turnaround Time"})]})}),(0,n.jsx)("li",{children:(0,n.jsxs)("div",{className:"specification-item",children:[(0,n.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/ic_free_shipping.svg?alt=media"}),(0,n.jsx)("p",{children:"Free Shipping Worldwide"})]})}),(0,n.jsx)("li",{children:(0,n.jsxs)("div",{className:"specification-item",children:[(0,n.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/ic_hidden_charges.svg?alt=media"}),(0,n.jsx)("p",{children:"No Hidden Charges"})]})})]})})}},3685:function(e,i,s){"use strict";s.r(i),s.d(i,{__N_SSG:function(){return u},default:function(){return m}});var n=s(5893),a=s(7294),t=function(e){var i=e.description,s=e.style,t=(0,a.useState)(""),o=t[0],r=t[1];return(0,a.useEffect)((function(){r(i)}),[]),(0,n.jsx)("p",{className:"product-description",dangerouslySetInnerHTML:{__html:o},style:s})},o=[{name:"Dimensions",value:"All Custom Sizes & Shapes"},{name:"Printing",value:"CMYK, PMS, No Printing"},{name:"Paper Stock",value:"10pt to 28pt (60lb to 400lb) Eco-Friendly Kraft, E-flute Corrugated, Bux Board, Cardstock"},{name:"Quantities",value:"100 \u2013 500,000"},{name:"Coating",value:"Gloss, Matte, Spot UV"},{name:"Default Process",value:"Die Cutting, Gluing, Scoring, Perforation"},{name:"Options",value:"Custom Window Cut Out, Gold/Silver Foiling, Embossing, Raised Ink, PVC Sheet."},{name:"Proof",value:"Flat View, 3D Mock-up, Physical Sampling (On request)"},{name:"Turn Around Time",value:"4-6 Business Days, Rush"}],r=function(e){var i=e.style,s=o.map((function(e,i){return(0,n.jsxs)("div",{className:"specification-row",children:[(0,n.jsx)("p",{className:"specification-name",children:e.name}),(0,n.jsx)("p",{className:"specification-value",children:e.value})]},i)}));return(0,n.jsx)("div",{className:"specifications-area",style:i,children:s})},c=function(e){var i=e.description,s=(0,a.useState)(!1),o=s[0],c=s[1];return(0,n.jsxs)("section",{id:"productDetailsSection",children:[(0,n.jsxs)("div",{className:"details-headings-area",children:[(0,n.jsx)("h4",{className:"details-heading left-heading",onClick:function(){return c(!1)},children:"SPECIFICATIONS"}),(0,n.jsx)("h4",{className:"details-heading right-heading",onClick:function(){return c(!0)},children:"DESCRIPTION"})]}),(0,n.jsx)(r,{style:{display:o?"none":"initial"}}),(0,n.jsx)(t,{description:i,style:{display:o?"initial":"none"}})]})},l=s(5738),d=s(7502),u=!0,m=function(e){var i=e.product,s=(0,a.useState)(0),t=s[0],o=s[1],r=(0,a.useState)(0),u=r[0],m=r[1],p=(0,a.useState)(0),h=p[0],x=p[1],g=(0,a.useRef)(null),v=i.imgUrls.map((function(e,s){return(0,n.jsx)("div",{className:"product-thumbnail-box",onClick:function(){o(s)},children:(0,n.jsx)("img",{className:"product-thumbnail",src:"https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/".concat(e,"?alt=media"),alt:null===i||void 0===i?void 0:i.name})},s)}));return(0,n.jsxs)("main",{children:[(0,n.jsxs)("div",{className:"top-content",children:[(0,n.jsxs)("section",{id:"productGallerySection",children:[(0,n.jsx)("div",{ref:g,className:"zoom-image-area",onMouseOut:function(){return m(0),void x(0)},onMouseMove:function(e){return function(e){var i,s=null===(i=g.current)||void 0===i?void 0:i.getBoundingClientRect();m((e.clientX-s.left)/s.width*100*1.6),x((e.clientY-s.top)/s.height*100*1.6)}(e)},children:(0,n.jsx)("img",{className:"zoom-image",style:{transformOrigin:"".concat(u,"% ").concat(h,"%")},src:"https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/".concat(null===i||void 0===i?void 0:i.imgUrls[t],"?alt=media"),alt:null===i||void 0===i?void 0:i.name})}),(0,n.jsx)("div",{className:"product-thumbnails-area",children:v})]}),(0,n.jsxs)("section",{id:"productDescriptionSection",children:[(0,n.jsxs)("h1",{className:"page-heading",children:[null===i||void 0===i?void 0:i.name,(0,n.jsx)("div",{className:"heading-underline"})]}),"box-by-style"!==i.categoryId&&(0,n.jsx)("div",{className:"product-description",dangerouslySetInnerHTML:{__html:null===i||void 0===i?void 0:i.shortDescription}}),"box-by-style"===i.categoryId&&(0,n.jsx)(d.Z,{})]}),(0,n.jsx)("section",{id:"formQuoteSection",children:(0,n.jsx)(l.Z,{})})]}),"box-by-style"!==i.categoryId&&(0,n.jsx)(d.Z,{}),"box-by-style"!==i.categoryId&&(0,n.jsx)(c,{description:null===i||void 0===i?void 0:i.description})]})}}},function(e){e.O(0,[774,888,179],(function(){return i=6860,e(e.s=i);var i}));var i=e.O();_N_E=i}]);