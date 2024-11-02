(()=>{var e,o={5971:(e,o,n)=>{"use strict";const l=window.wp.blocks,t=JSON.parse('{"UU":"blockons/table-of-contents"}'),a=window.wp.element,s=window.wp.i18n,r=window.wp.data,c=window.wp.blockEditor,i=window.wp.components;var d=n(8221),b=n.n(d);const h=window.ReactJSXRuntime,u=e=>{const{label:o,value:n,onChange:l,paletteColors:t}=e;return(0,h.jsx)(i.Dropdown,{className:"blockons-colorpicker",contentClassName:"blockons-editor-popup blockons-colorpicker-popup",popoverProps:{placement:"bottom-start"},renderToggle:({isOpen:e,onToggle:l})=>(0,h.jsxs)(i.Button,{variant:"link",onClick:l,className:"blockons-colorpicker-btn",children:[(0,h.jsx)(i.ColorIndicator,{colorValue:n}),(0,h.jsx)("span",{children:o})]}),renderContent:()=>(0,h.jsx)(i.ColorPalette,{colors:t,value:n,onChange:l})})},m=[{name:"white",color:"#FFF"},{name:"Grey",color:"#9b9b9b"},{name:"Black",color:"#000"},{name:"Dark",color:"#232323"},{name:"Turqoise",color:"#00b291"},{name:"Emerald",color:"#51d88b"},{name:"Peter River",color:"#3497df"},{name:"Amethyst",color:"#9c56b8"},{name:"Wet Asphalt",color:"#34495d"},{name:"Sunflower",color:"#f1c50f"},{name:"Carrot",color:"#e77e22"},{name:"Alizarin",color:"#e84c3d"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a5"},{name:"Dusty Pink",color:"#d4afb9"},{name:"Soft Purple",color:"#9cadce"},{name:"Creamy",color:"#f2e8ce"},{name:"Soil",color:"#874c48"}],g={src:(0,h.jsxs)("svg",{width:"100px",height:"100px",viewBox:"0 0 1024 1024",class:"icon",version:"1.1",xmlns:"http://www.w3.org/2000/svg",fill:"#af2dbf",stroke:"#af2dbf","stroke-width":"0.01024",children:[(0,h.jsx)("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),(0,h.jsx)("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),(0,h.jsxs)("g",{id:"SVGRepo_iconCarrier",children:[(0,h.jsx)("path",{d:"M91.89 238.457c-29.899 0-54.133 24.239-54.133 54.134 0 29.899 24.234 54.137 54.133 54.137s54.138-24.238 54.138-54.137c0-29.896-24.239-54.134-54.138-54.134z",fill:"#af2dbf"}),(0,h.jsx)("path",{d:"M91.89 462.463c-29.899 0-54.133 24.239-54.133 54.139 0 29.895 24.234 54.133 54.133 54.133s54.138-24.238 54.138-54.133c0-29.9-24.239-54.139-54.138-54.139z",fill:"#af2dbf"}),(0,h.jsx)("path",{d:"M91.89 686.475c-29.899 0-54.133 24.237-54.133 54.133 0 29.899 24.234 54.138 54.133 54.138s54.138-24.238 54.138-54.138c0-29.896-24.239-54.133-54.138-54.133z",fill:"#af2dbf"}),(0,h.jsx)("path",{d:"M941.26 234.723H328.964c-28.867 0-52.263 23.4-52.263 52.268v3.734c0 28.868 23.396 52.269 52.263 52.269H941.26c28.869 0 52.269-23.401 52.269-52.269v-3.734c-0.001-28.868-23.4-52.268-52.269-52.268z",fill:"#af2dbf"}),(0,h.jsx)("path",{d:"M941.26 682.74H328.964c-28.867 0-52.263 23.399-52.263 52.268v3.734c0 28.863 23.396 52.269 52.263 52.269H941.26c28.869 0 52.269-23.405 52.269-52.269v-3.734c-0.001-28.868-23.4-52.268-52.269-52.268z",fill:"#af2dbf"}),(0,h.jsx)("path",{d:"M709.781 458.729H328.964c-28.867 0-52.263 23.4-52.263 52.269v3.734c0 28.873 23.396 52.269 52.263 52.269h380.817c28.866 0 52.271-23.396 52.271-52.269v-3.734c0.001-28.869-23.405-52.269-52.271-52.269z",fill:"#af2dbf"})]})]})},{UU:p}=t;(0,l.registerBlockType)(p,{icon:g,edit:e=>{const{attributes:{maxWidth:o,alignment:n,align:l,headings:t,canCollapse:d,showTitle:g,title:p,showDescTop:x,descTop:f,showDescBottom:v,descBottom:k,border:C,borderWidth:j,borderRadius:_,titleColor:w,titleSize:S,showNumbers:N,numberSize:y,numberSpacing:T,includeH1:$,includeH2:z,includeH3:B,includeH4:R,includeH5:O,includeH6:H,paddingHoriz:E,paddingVert:P,paddingIn:A,spacing:D,showBlurbs:M,bgColor:F,borderColor:W,headColor:I,descColor:V,blurbColor:L,numberColor:U,headSize:q,descSize:G,blurbSize:J,isPremium:X,addAnchors:K},isSelected:Q,setAttributes:Y}=e,Z=Boolean(blockonsEditorObj.isPremium),[ee,oe]=(0,a.useState)([]),[ne,le]=(0,a.useState)({}),[te,ae]=(0,a.useState)(""),[se,re]=(0,a.useState)(!1),ce=(0,r.useSelect)((e=>e("core/editor").getEditedPostContent())),ie=(0,c.useBlockProps)({className:`alignment-${n} ${l}-align style-${C}`}),de=(0,a.useMemo)((()=>({h1:$,h2:z,h3:B,h4:R,h5:O,h6:H})),[$,z,B,R,O,H]);(0,a.useEffect)((()=>{Y({isPremium:Z})}),[]);const be=(0,a.useMemo)((()=>{let e=0;return Object.keys(de).reduce(((o,n)=>(de[n]&&(o[n]=++e),o)),{})}),[de]),he=(0,a.useCallback)((e=>{const o=(new DOMParser).parseFromString(e,"text/html"),n=Object.entries(de).filter((([e,o])=>o)).map((([e])=>e)).join(", "),l=o.querySelectorAll(n);return Array.from(l).map((e=>{const o=e.textContent.trim();return{content:o,level:e.tagName.toLowerCase(),padding:(be[e.tagName.toLowerCase()]-1)*A,anchor:encodeURIComponent(o.toLowerCase().replace(/\s+/g,"-"))}}))}),[de,be,A]),ue=(0,a.useMemo)((()=>b()((e=>{if(e!==te){const o=he(e);oe(o),ae(e)}}),300)),[te,he]);(0,a.useEffect)((()=>{ue(ce)}),[ce,ue]);const me=(0,a.useMemo)((()=>ee.map(((e,o)=>({...e,blurb:ne[o]||""})))),[ee,ne]);(0,a.useEffect)((()=>{JSON.stringify(me)!==JSON.stringify(t)&&Y({headings:me})}),[me,Y]),(0,a.useEffect)((()=>{const e={};t.forEach(((o,n)=>{e[n]=o.blurb||""})),le(e)}),[t]),(0,a.useEffect)((()=>{(()=>{const e=document.querySelectorAll(".wp-block-heading");ee.forEach((o=>{const n=Array.from(e).find((e=>e.textContent.trim()===o.content));n&&(n.id=o.anchor)}))})()}),[ee]),(0,a.useEffect)((()=>{document.querySelectorAll(".blockons-toc-link").forEach((e=>{e.addEventListener("click",(o=>{o.preventDefault();const n=e.getAttribute("href").substring(1),l=document.getElementById(n);l&&(l.scrollIntoView({behavior:"smooth"}),history.pushState(null,null,`#${n}`))}))}))}),[ee]);const ge=(0,a.useCallback)(((e,o)=>{le((n=>({...n,[e]:o})))}),[]);return(0,a.useEffect)((()=>{(()=>{if(window.location.hash){const e=window.location.hash.substring(1),o=document.getElementById(e);o&&o.scrollIntoView({behavior:"smooth"})}})()}),[]),(0,h.jsxs)("div",{...ie,children:[(0,h.jsxs)(c.InspectorControls,{children:[(0,h.jsxs)(i.PanelBody,{title:(0,s.__)("Table of Contents Settings","blockons"),children:[(0,h.jsx)(i.ToggleControl,{label:(0,s.__)("Turn on Toggle Mode","blockons"),checked:d,onChange:e=>Y({canCollapse:e}),help:d?(0,s.__)("The Table of headings will now collapse when not selected.","blockons"):""}),(0,h.jsx)("div",{className:"blockons-divider"}),(0,h.jsx)(i.__experimentalUnitControl,{label:(0,s.__)("Table Of Contents Max-Width","blockons"),value:o,onChange:e=>Y({maxWidth:e}),units:[{value:"%",label:"%",default:100},{value:"px",label:"px",default:300}],isResetValueOnUnitChange:!0}),(0,h.jsx)("div",{className:"blockons-divider"}),(0,h.jsx)(i.ToggleControl,{label:(0,s.__)("Show Title","blockons"),checked:g,onChange:e=>Y({showTitle:e})}),(0,h.jsx)(i.ToggleControl,{label:(0,s.__)("Show Top Description","blockons"),checked:x,onChange:e=>Y({showDescTop:e})}),(0,h.jsx)(i.ToggleControl,{label:(0,s.__)("Show Bottom Description","blockons"),checked:v,onChange:e=>Y({showDescBottom:e})}),(0,h.jsx)("div",{className:"blockons-divider"}),["H1","H2","H3","H4","H5","H6"].map((e=>(0,h.jsx)(i.ToggleControl,{label:(0,s.__)(`Show ${e} Headings`,"blockons"),checked:de[e.toLowerCase()],onChange:o=>Y({[`include${e}`]:o})},e))),(0,h.jsx)("div",{className:"blockons-divider"}),(0,h.jsx)(i.ToggleControl,{label:(0,s.__)("Show Heading Blurbs","blockons"),checked:M,onChange:e=>Y({showBlurbs:e})})]}),(0,h.jsxs)(i.PanelBody,{title:(0,s.__)("Table of Contents Design","blockons"),initialOpen:!1,children:[(0,h.jsx)(i.SelectControl,{label:(0,s.__)("Border","blockons"),value:C,options:[{label:(0,s.__)("Plain Border","blockons"),value:"one"},{label:(0,s.__)("Dashed Border","blockons"),value:"two"},{label:(0,s.__)("No Border","blockons"),value:"three"}],onChange:e=>Y({border:e})}),"three"!==C&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i.RangeControl,{label:(0,s.__)("Border Width","blockons"),value:j,onChange:e=>Y({borderWidth:e}),min:0,max:10}),(0,h.jsx)(i.RangeControl,{label:(0,s.__)("Border Radius","blockons"),value:_,onChange:e=>Y({borderRadius:e}),min:0,max:50}),(0,h.jsx)(u,{label:(0,s.__)("Border Color","blockons"),value:W,onChange:e=>Y({borderColor:e}),paletteColors:m}),(0,h.jsx)("div",{className:"blockons-divider"})]}),(0,h.jsx)(i.RangeControl,{label:(0,s.__)("Horizontal Padding","blockons"),value:E,onChange:e=>Y({paddingHoriz:e}),min:0,max:80}),(0,h.jsx)(i.RangeControl,{label:(0,s.__)("Vertical Padding","blockons"),value:P,onChange:e=>Y({paddingVert:e}),min:0,max:80}),(0,h.jsx)("div",{className:"blockons-divider"}),g&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(u,{label:(0,s.__)("Title Color","blockons"),value:w,onChange:e=>Y({titleColor:e}),paletteColors:m}),(0,h.jsx)(i.RangeControl,{label:(0,s.__)("Title Size","blockons"),value:S,onChange:e=>Y({titleSize:e}),min:10,max:48}),(0,h.jsx)("div",{className:"blockons-divider"})]}),(0,h.jsx)(i.ToggleControl,{label:(0,s.__)("Show Numbers","blockons"),checked:N,onChange:e=>Y({showNumbers:e})}),N&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i.RangeControl,{label:(0,s.__)("Number Size","blockons"),value:y,onChange:e=>Y({numberSize:e}),min:10,max:84}),(0,h.jsx)(i.RangeControl,{label:(0,s.__)("Number Spacing","blockons"),value:T,onChange:e=>Y({numberSpacing:e}),min:0,max:100})]}),(0,h.jsx)("div",{className:"blockons-divider"}),(0,h.jsx)(i.RangeControl,{label:(0,s.__)("Item Inwards Padding","blockons"),value:A,onChange:e=>Y({paddingIn:e}),min:0,max:50}),(0,h.jsx)(i.RangeControl,{label:(0,s.__)("Spacing","blockons"),value:D,onChange:e=>Y({spacing:null!=e?e:10}),min:0,max:50}),(0,h.jsx)("div",{className:"blockons-divider"}),(0,h.jsx)(u,{label:(0,s.__)("Background Color","blockons"),value:F,onChange:e=>Y({bgColor:e}),paletteColors:m}),N&&(0,h.jsx)(u,{label:(0,s.__)("Numbers Color","blockons"),value:U,onChange:e=>Y({numberColor:e}),paletteColors:m}),(0,h.jsx)(u,{label:(0,s.__)("Heading Color","blockons"),value:I,onChange:e=>Y({headColor:e}),paletteColors:m}),(0,h.jsx)(i.RangeControl,{label:(0,s.__)("Heading Size","blockons"),value:q,onChange:e=>Y({headSize:e}),min:10,max:48}),(x||v)&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(u,{label:(0,s.__)("Description Color","blockons"),value:V,onChange:e=>Y({descColor:e}),paletteColors:m}),(0,h.jsx)(i.RangeControl,{label:(0,s.__)("Description Size","blockons"),value:G,onChange:e=>Y({descSize:e}),min:10,max:48})]}),M&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(u,{label:(0,s.__)("Blurb Color","blockons"),value:L,onChange:e=>Y({blurbColor:e}),paletteColors:m}),(0,h.jsx)(i.RangeControl,{label:(0,s.__)("Blurb Size","blockons"),value:J,onChange:e=>Y({blurbSize:e}),min:10,max:48})]})]}),X&&(0,h.jsxs)(i.PanelBody,{title:(0,s.__)("Table of Contents Links","blockons"),initialOpen:!1,children:[(0,h.jsx)(i.ToggleControl,{label:(0,s.__)("Add Link Anchor Buttons","blockons"),checked:K,onChange:e=>Y({addAnchors:e})}),(0,h.jsx)("p",{children:(0,s.__)("This link functionality works only on the website's frontend, so please make sure to enable it and test it directly on the live page.","blockons")}),(0,h.jsx)("p",{className:"blockons-set-title",children:(0,s.__)("EXAMPLE: ","blockons")}),(0,h.jsxs)("h4",{className:"blockons-anchor-example",children:["Example Heading",K&&(0,h.jsx)("span",{className:"fa-solid fa-link"})]})]})]}),(0,h.jsxs)(c.BlockControls,{children:[(0,h.jsx)(c.AlignmentToolbar,{value:n,onChange:e=>Y({alignment:e})}),(0,h.jsx)(c.BlockAlignmentToolbar,{value:l,controls:["left","center","right"],onChange:e=>Y({align:e})})]}),(0,h.jsxs)("div",{className:`blockons-toc ${d?"collapsible":""} ${se||Q?"open":""}`,style:{maxWidth:o,padding:`${P}px ${E}px`,..."#ffffff"!==F?{backgroundColor:F}:{},borderWidth:`${j}px`,borderRadius:`${_}px`,..."three"!==C&&W?{borderColor:W}:{}},...X&&K?{"data-anchor":"link"}:{},children:[(0,h.jsxs)("div",{className:"header "+(d?"toggle":""),children:[(0,h.jsxs)("div",{className:"header-txt",children:[g&&(0,h.jsx)(c.RichText,{tagName:"p",value:p,className:"blockons-toc-title",onChange:e=>Y({title:e}),allowedFormats:["core/bold","core/italic"],placeholder:(0,s.__)("Table of Contents","blockons"),style:{...24!==S?{fontSize:`${S}px`}:{},color:w}}),x&&(0,h.jsx)(c.RichText,{tagName:"p",value:f,className:"blockons-toc-desc",onChange:e=>Y({descTop:e}),allowedFormats:["core/bold","core/italic"],placeholder:(0,s.__)("Click the relevant heading to jump to that section.","blockons"),style:{...15!==G?{fontSize:`${G}px`}:{},color:V}})]}),d&&(0,h.jsx)("div",{className:"blockons-toggle-btn",children:(0,h.jsx)("span",{className:"toggle-btn fa-solid fa-chevron-right"})})]}),(0,h.jsxs)("div",{className:"blockons-toc-content",children:[(0,h.jsx)("ul",{className:"blockons-toc-ul",children:t.map(((e,o)=>(0,h.jsxs)("li",{className:"blockons-toc-li",style:{paddingLeft:`${e.padding}px`,marginBottom:`${D}px`},children:[N&&(0,h.jsx)("div",{className:"blockons-toc-number",style:{...8!==T?{marginRight:`${T}px`}:{},...18!==y?{fontSize:`${y}px`}:{},color:U},children:(0,h.jsx)("span",{children:(o+1).toString().padStart(2,"0")})}),(0,h.jsxs)("div",{className:"blockons-toc-item",children:[(0,h.jsx)("a",{href:`#${e.anchor}`,className:"blockons-toc-link","data-target":e.anchor,style:{...16!==q?{fontSize:`${q}px`}:{},color:I},children:e.content}),M&&(0,h.jsx)(c.RichText,{tagName:"p",value:ne[o]||"",className:"blockons-toc-blurb",onChange:e=>ge(o,e),allowedFormats:["core/bold","core/italic"],placeholder:(0,s.__)("Enter a short description","blockons"),style:{...13!==J?{fontSize:`${J}px`}:{},color:L}})]})]},`heading-${o}`)))}),v&&(0,h.jsx)("div",{className:"footer",children:(0,h.jsx)(c.RichText,{tagName:"p",value:k,className:"blockons-toc-botdesc",onChange:e=>Y({descBottom:e}),allowedFormats:["core/bold","core/italic"],placeholder:(0,s.__)("Click the relevant heading to jump to that section.","blockons"),style:{...15!==G?{fontSize:`${G}px`}:{},color:V}})})]})]})]})},save:({attributes:e})=>{const{maxWidth:o,alignment:n,align:l,headings:t,canCollapse:a,showTitle:s,title:r,showDescTop:i,descTop:d,showDescBottom:b,descBottom:u,border:m,borderWidth:g,borderRadius:p,titleColor:x,titleSize:f,showNumbers:v,numberSize:k,numberSpacing:C,paddingHoriz:j,paddingVert:_,paddingIn:w,spacing:S,showBlurbs:N,bgColor:y,borderColor:T,headColor:$,descColor:z,blurbColor:B,numberColor:R,headSize:O,descSize:H,blurbSize:E,isPremium:P,addAnchors:A}=e,D=c.useBlockProps.save({className:`alignment-${n} ${l}-align style-${m}`});return(0,h.jsx)("div",{...D,children:(0,h.jsxs)("div",{className:"blockons-toc "+(a?"collapsible":""),style:{maxWidth:o,padding:`${_}px ${j}px`,..."#ffffff"!==y?{backgroundColor:y}:{},borderWidth:`${g}px`,borderRadius:`${p}px`,..."three"!==m&&T?{borderColor:T}:{}},...P&&A?{"data-anchor":"link"}:{},children:[(0,h.jsxs)("div",{className:"header "+(a?"toggle":""),children:[(0,h.jsxs)("div",{className:"header-txt",children:[s&&(0,h.jsx)(c.RichText.Content,{tagName:"p",value:r,className:"blockons-toc-title",style:{...24!==f?{fontSize:`${f}px`}:{},color:x}}),i&&(0,h.jsx)(c.RichText.Content,{tagName:"p",value:d,className:"blockons-toc-desc",style:{...15!==H?{fontSize:`${H}px`}:{},color:z}})]}),a&&(0,h.jsx)("div",{className:"blockons-toggle-btn",children:(0,h.jsx)("span",{className:"toggle-btn fa-solid fa-chevron-right"})})]}),(0,h.jsxs)("div",{className:"blockons-toc-content",children:[(0,h.jsx)("ul",{className:"blockons-toc-ul",children:t.map(((e,o)=>(0,h.jsxs)("li",{className:"blockons-toc-li",style:{paddingLeft:`${e.padding}px`,marginBottom:`${S}px`},children:[v&&(0,h.jsx)("div",{className:"blockons-toc-number",style:{...8!==C?{marginRight:`${C}px`}:{},...18!==k?{fontSize:`${k}px`}:{},color:R},children:(0,h.jsx)("span",{children:(o+1).toString().padStart(2,"0")})}),(0,h.jsxs)("div",{className:"blockons-toc-item",children:[(0,h.jsx)("a",{href:`#${e.anchor}`,className:"blockons-toc-link",style:{...16!==O?{fontSize:`${O}px`}:{},color:$},children:e.content}),N&&e.blurb&&(0,h.jsx)(c.RichText.Content,{tagName:"p",value:e.blurb,className:"blockons-toc-blurb",style:{...14!==E?{fontSize:`${E}px`}:{},color:B}})]})]},`heading-${o}`)))}),b&&(0,h.jsx)("div",{className:"footer "+(a?"toggle":""),children:(0,h.jsx)(c.RichText.Content,{tagName:"p",value:u,className:"blockons-toc-botdesc",style:{...15!==H?{fontSize:`${H}px`}:{},color:z}})})]})]})})}})},1873:(e,o,n)=>{var l=n(9325).Symbol;e.exports=l},2552:(e,o,n)=>{var l=n(1873),t=n(659),a=n(9350),s=l?l.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":s&&s in Object(e)?t(e):a(e)}},4128:(e,o,n)=>{var l=n(1800),t=/^\s+/;e.exports=function(e){return e?e.slice(0,l(e)+1).replace(t,""):e}},4840:(e,o,n)=>{var l="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=l},659:(e,o,n)=>{var l=n(1873),t=Object.prototype,a=t.hasOwnProperty,s=t.toString,r=l?l.toStringTag:void 0;e.exports=function(e){var o=a.call(e,r),n=e[r];try{e[r]=void 0;var l=!0}catch(e){}var t=s.call(e);return l&&(o?e[r]=n:delete e[r]),t}},9350:e=>{var o=Object.prototype.toString;e.exports=function(e){return o.call(e)}},9325:(e,o,n)=>{var l=n(4840),t="object"==typeof self&&self&&self.Object===Object&&self,a=l||t||Function("return this")();e.exports=a},1800:e=>{var o=/\s/;e.exports=function(e){for(var n=e.length;n--&&o.test(e.charAt(n)););return n}},8221:(e,o,n)=>{var l=n(3805),t=n(124),a=n(9374),s=Math.max,r=Math.min;e.exports=function(e,o,n){var c,i,d,b,h,u,m=0,g=!1,p=!1,x=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(o){var n=c,l=i;return c=i=void 0,m=o,b=e.apply(l,n)}function v(e){var n=e-u;return void 0===u||n>=o||n<0||p&&e-m>=d}function k(){var e=t();if(v(e))return C(e);h=setTimeout(k,function(e){var n=o-(e-u);return p?r(n,d-(e-m)):n}(e))}function C(e){return h=void 0,x&&c?f(e):(c=i=void 0,b)}function j(){var e=t(),n=v(e);if(c=arguments,i=this,u=e,n){if(void 0===h)return function(e){return m=e,h=setTimeout(k,o),g?f(e):b}(u);if(p)return clearTimeout(h),h=setTimeout(k,o),f(u)}return void 0===h&&(h=setTimeout(k,o)),b}return o=a(o)||0,l(n)&&(g=!!n.leading,d=(p="maxWait"in n)?s(a(n.maxWait)||0,o):d,x="trailing"in n?!!n.trailing:x),j.cancel=function(){void 0!==h&&clearTimeout(h),m=0,c=u=i=h=void 0},j.flush=function(){return void 0===h?b:C(t())},j}},3805:e=>{e.exports=function(e){var o=typeof e;return null!=e&&("object"==o||"function"==o)}},346:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},4394:(e,o,n)=>{var l=n(2552),t=n(346);e.exports=function(e){return"symbol"==typeof e||t(e)&&"[object Symbol]"==l(e)}},124:(e,o,n)=>{var l=n(9325);e.exports=function(){return l.Date.now()}},9374:(e,o,n)=>{var l=n(4128),t=n(3805),a=n(4394),s=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,c=/^0o[0-7]+$/i,i=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return NaN;if(t(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=t(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=l(e);var n=r.test(e);return n||c.test(e)?i(e.slice(2),n?2:8):s.test(e)?NaN:+e}}},n={};function l(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={exports:{}};return o[e](a,a.exports,l),a.exports}l.m=o,e=[],l.O=(o,n,t,a)=>{if(!n){var s=1/0;for(d=0;d<e.length;d++){n=e[d][0],t=e[d][1],a=e[d][2];for(var r=!0,c=0;c<n.length;c++)(!1&a||s>=a)&&Object.keys(l.O).every((e=>l.O[e](n[c])))?n.splice(c--,1):(r=!1,a<s&&(s=a));if(r){e.splice(d--,1);var i=t();void 0!==i&&(o=i)}}return o}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,t,a]},l.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return l.d(o,{a:o}),o},l.d=(e,o)=>{for(var n in o)l.o(o,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={237:0,361:0};l.O.j=o=>0===e[o];var o=(o,n)=>{var t,a,s=n[0],r=n[1],c=n[2],i=0;if(s.some((o=>0!==e[o]))){for(t in r)l.o(r,t)&&(l.m[t]=r[t]);if(c)var d=c(l)}for(o&&o(n);i<s.length;i++)a=s[i],l.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return l.O(d)},n=self.webpackChunkblockons=self.webpackChunkblockons||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))})();var t=l.O(void 0,[361],(()=>l(5971)));t=l.O(t)})();