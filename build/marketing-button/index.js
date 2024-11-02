(()=>{"use strict";var o,e={8467:()=>{const o=window.wp.blocks,e=JSON.parse('{"UU":"blockons/marketing-button"}'),n=window.wp.i18n,l=window.wp.blockEditor,t=window.wp.components,a=window.ReactJSXRuntime,i=o=>{const{icon:e,iconSize:n,onClick:l,style:t}=o;return(0,a.jsx)("span",{className:`blockons-fontawesome fa-solid fa-${e}`,style:{...t,fontSize:n||"inherit"},onClick:l||null})},r=o=>{const{label:e,value:n,onChange:l,paletteColors:i}=o;return(0,a.jsx)(t.Dropdown,{className:"blockons-colorpicker",contentClassName:"blockons-editor-popup blockons-colorpicker-popup",popoverProps:{placement:"bottom-start"},renderToggle:({isOpen:o,onToggle:l})=>(0,a.jsxs)(t.Button,{variant:"link",onClick:l,className:"blockons-colorpicker-btn",children:[(0,a.jsx)(t.ColorIndicator,{colorValue:n}),(0,a.jsx)("span",{children:e})]}),renderContent:()=>(0,a.jsx)(t.ColorPalette,{colors:i,value:n,onChange:l})})},s=[{name:"white",color:"#FFF"},{name:"Grey",color:"#9b9b9b"},{name:"Black",color:"#000"},{name:"Dark",color:"#232323"},{name:"Turqoise",color:"#00b291"},{name:"Emerald",color:"#51d88b"},{name:"Peter River",color:"#3497df"},{name:"Amethyst",color:"#9c56b8"},{name:"Wet Asphalt",color:"#34495d"},{name:"Sunflower",color:"#f1c50f"},{name:"Carrot",color:"#e77e22"},{name:"Alizarin",color:"#e84c3d"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a5"},{name:"Dusty Pink",color:"#d4afb9"},{name:"Soft Purple",color:"#9cadce"},{name:"Creamy",color:"#f2e8ce"},{name:"Soil",color:"#874c48"}],c={"arrow-right":"arrow-right","caret-right":"caret-right","circle-right":"circle-right","right-left":"right-left",check:"check",bullhorn:"bullhorn","star-of-life":"star-of-life","circle-radiation":"circle-radiation","comment-sms":"comment-sms",comment:"comment","face-grin":"face-grin","hands-clapping":"hands-clapping",bug:"bug",play:"play",info:"info",flag:"flag",road:"road",gears:"gears",recycle:"recycle",scissors:"scissors",gift:"gift","power-off":"power-off",rotate:"rotate",print:"print",podcast:"podcast","circle-info":"circle-info",certificate:"certificate",heart:"heart",bone:"bone",skull:"skull","skull-crossbones":"skull-crossbones",phone:"phone","phone-flip":"phone-flip",envelope:"envelope","square-envelope":"square-envelope","envelope-circle-check":"envelope-circle-check","envelopes-bulk":"envelopes-bulk","envelope-open-text":"envelope-open-text",inbox:"inbox",at:"at",atom:"atom",house:"house",plane:"plane",plug:"plug","location-dot":"location-dot","location-arrow":"location-arrow","map-location":"map-location","map-pin":"map-pin",tags:"tags","chart-simple":"chart-simple","people-group":"people-group","rectangle-ad":"rectangle-ad",lightbulb:"lightbulb",timeline:"timeline",award:"award","baby-carriage":"baby-carriage",bell:"bell","pizza-slice":"pizza-slice",bookmark:"bookmark","ice-cream":"ice-cream",pen:"pen","pen-fancy":"pen-fancy"},d=["core/bold","core/italic","core/highlight","core/subscript","core/superscript","core/strikethrough"],b={src:(0,a.jsxs)("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg",fill:"#af2dbf",children:[(0,a.jsx)("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),(0,a.jsx)("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),(0,a.jsx)("g",{id:"SVGRepo_iconCarrier",children:(0,a.jsx)("path",{fill:"#af2dbf",d:"M15.7 5.3l-1-1c-0.2-0.2-0.4-0.3-0.7-0.3h-13c-0.6 0-1 0.4-1 1v5c0 0.3 0.1 0.6 0.3 0.7l1 1c0.2 0.2 0.4 0.3 0.7 0.3h13c0.6 0 1-0.4 1-1v-5c0-0.3-0.1-0.5-0.3-0.7zM14 10h-13v-5h13v5z"})})]})},{UU:g}=e;(0,o.registerBlockType)(g,{icon:b,edit:o=>{const{isSelected:e,attributes:{alignment:b,buttonAlign:g,mbMinWidth:h,mbMinHeight:m,layout:p,hasIcon:u,theIcon:k,customIcon:x,customIconName:v,iconPosition:C,iconSize:f,iconSpacing:j,linkTo:_,linkTarget:w,title:S,showSubText:T,subText:N,bRadius:y,vertPad:P,horizPad:I,bgColor:z,borderColor:R,iconColor:B,textColor:O,titleColor:M,titleSize:A,textSize:F},setAttributes:H}=o,$=(0,l.useBlockProps)({className:`align-${b} ${g}-align design-${p} icon-pos-${C}`});function L(){return(0,a.jsx)("div",{className:"blockons-mb-icon",style:{..."one"===C||"three"===C?{marginRight:j}:{marginLeft:j},color:B},children:(0,a.jsx)(t.Dropdown,{className:"blockons-icon-selecter",contentClassName:"blockons-editor-popup marketing-button",popoverProps:{placement:"bottom-end"},renderToggle:({isOpen:o,onToggle:e})=>(0,a.jsx)(i,{icon:x&&v?v:k,iconSize:f,onClick:e}),renderContent:()=>Object.keys(c).map((o=>(0,a.jsx)(i,{icon:o,iconSize:20,onClick:()=>{H({theIcon:o})}})))})})}return(0,a.jsxs)("div",{...$,children:[e&&(0,a.jsxs)(l.InspectorControls,{children:[(0,a.jsxs)(t.PanelBody,{title:(0,n.__)("Marketing Button Settings","blockons"),initialOpen:!0,children:[(0,a.jsx)(t.TextControl,{label:"Link URL",value:_,onChange:o=>{H({linkTo:o})}}),(0,a.jsx)(t.ToggleControl,{label:(0,n.__)("Open in new window","blockons"),checked:w,onChange:o=>{H({linkTarget:o})}}),(0,a.jsx)("br",{}),(0,a.jsx)(t.SelectControl,{label:(0,n.__)("Design","blockons"),value:p,options:[{label:(0,n.__)("Bordered","blockons"),value:"one"},{label:(0,n.__)("Plain","blockons"),value:"two"}],onChange:o=>H({layout:void 0===o?"one":o}),__nextHasNoMarginBottom:!0}),(0,a.jsx)(t.RangeControl,{label:(0,n.__)("Min Width","blockons"),value:h,onChange:o=>H({mbMinWidth:void 0===o?200:parseInt(o)}),min:200,max:1e3}),(0,a.jsx)(t.RangeControl,{label:(0,n.__)("Min Height","blockons"),value:m,onChange:o=>H({mbMinHeight:void 0===o?50:parseInt(o)}),min:50,max:500}),(0,a.jsx)(t.ToggleControl,{label:(0,n.__)("Show Sub Text","blockons"),checked:T,onChange:o=>{H({showSubText:o})}}),(0,a.jsx)(t.ToggleControl,{label:(0,n.__)("Add an Icon","blockons"),checked:u,onChange:o=>{H({hasIcon:o})},help:(0,n.__)("Change the icon by clicking on the Icon within the editor","blockons")}),u&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.ToggleControl,{label:(0,n.__)("Add a custom Icon","blockons"),checked:x,onChange:o=>{H({customIcon:o})}}),x&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.TextControl,{label:"Custom Icon Name",value:v,onChange:o=>{H({customIconName:o})},help:(0,n.__)("Add your own custom icon by adding the Font Awesome icon name","blockons")}),(0,a.jsx)("div",{className:"helplink fixmargin",children:(0,a.jsx)("a",{href:"https://blockons.com/documentation/adding-a-custom-font-awesome-icon-to-the-block/",target:"_blank",children:(0,n.__)("Read More")})})]}),(0,a.jsx)(t.SelectControl,{label:(0,n.__)("Icon Position","blockons"),value:C,options:[{label:(0,n.__)("Before Title","blockons"),value:"one"},{label:(0,n.__)("After Title","blockons"),value:"two"},{label:(0,n.__)("Button Left","blockons"),value:"three"},{label:(0,n.__)("Button Right","blockons"),value:"four"}],onChange:o=>H({iconPosition:void 0===o?"one":o}),__nextHasNoMarginBottom:!0}),(0,a.jsx)(t.RangeControl,{label:(0,n.__)("Icon Size","blockons"),value:f,onChange:o=>H({iconSize:void 0===o?16:parseInt(o)}),min:10,max:62}),(0,a.jsx)(t.RangeControl,{label:(0,n.__)("Icon Spacing","blockons"),value:j,onChange:o=>H({iconSpacing:void 0===o?8:parseInt(o)}),min:0,max:200})]})]}),(0,a.jsxs)(t.PanelBody,{title:(0,n.__)("Marketing Button Design","blockons"),initialOpen:!1,children:[(0,a.jsx)(t.RangeControl,{label:(0,n.__)("Button Roundness","blockons"),value:y,onChange:o=>H({bRadius:void 0===o?3:parseInt(o)}),min:0,max:200}),(0,a.jsx)(t.RangeControl,{label:(0,n.__)("Vertical Padding","blockons"),value:P,onChange:o=>H({vertPad:void 0===o?15:parseInt(o)}),min:0,max:240}),(0,a.jsx)(t.RangeControl,{label:(0,n.__)("Horizontal Padding","blockons"),value:I,onChange:o=>H({horizPad:void 0===o?18:parseInt(o)}),min:0,max:240}),(0,a.jsx)(r,{label:(0,n.__)("Background Color","blockons"),value:z,onChange:o=>{H({bgColor:void 0===o?"#FFF":o})},paletteColors:s}),"one"===p&&(0,a.jsx)(r,{label:(0,n.__)("Border Color","blockons"),value:R,onChange:o=>{H({borderColor:void 0===o?"#a223a1":o})},paletteColors:s}),(0,a.jsx)(r,{label:(0,n.__)("Icon Color","blockons"),value:B,onChange:o=>{H({iconColor:void 0===o?"#a223a1":o})},paletteColors:s}),(0,a.jsx)(r,{label:(0,n.__)("Title Color","blockons"),value:M,onChange:o=>{H({titleColor:void 0===o?"#000":o})},paletteColors:s}),(0,a.jsx)(r,{label:(0,n.__)("Text Color","blockons"),value:O,onChange:o=>{H({textColor:void 0===o?"#000":o})},paletteColors:s})]})]}),(0,a.jsxs)(l.BlockControls,{children:[(0,a.jsx)(l.AlignmentToolbar,{value:b,onChange:o=>{H({alignment:void 0===o?"none":o})}}),(0,a.jsx)(l.BlockAlignmentToolbar,{value:g,controls:["left","center","right"],onChange:o=>{H({buttonAlign:void 0===o?"left":o})}})]}),(0,a.jsx)("div",{className:"blockons-marketing-button-block",children:(0,a.jsxs)("a",{className:"blockons-marketing-button",style:{paddingLeft:I,paddingRight:u?I+4:I,paddingTop:P,paddingBottom:P,minWidth:h,minHeight:m,borderRadius:y,backgroundColor:z,borderColor:R},rel:"noopener",children:[u&&"three"===C&&(0,a.jsx)(L,{}),(0,a.jsxs)("div",{className:"blockons-marketing-button-inner",children:[(0,a.jsxs)("div",{className:"blockons-marketing-button-title-wrap",children:[u&&"one"===C&&(0,a.jsx)(L,{}),(0,a.jsx)(l.RichText,{tagName:"div",placeholder:(0,n.__)("Button Title","blockons"),keepPlaceholderOnFocus:!0,value:S,className:"blockons-marketing-button-title",onChange:o=>H({title:o}),allowedFormats:d,multiline:!1,style:{color:M,fontSize:A}}),u&&"two"===C&&(0,a.jsx)(L,{})]}),T&&(0,a.jsx)("div",{className:"blockons-marketing-button-text-wrap",children:(0,a.jsx)(l.RichText,{tagName:"p",placeholder:(0,n.__)("Some extra text","blockons"),keepPlaceholderOnFocus:!0,value:N,className:"blockons-marketing-button-text",onChange:o=>H({subText:o}),allowedFormats:d,style:{color:O,fontSize:F}})})]}),u&&"four"===C&&(0,a.jsx)(L,{})]})})]})},save:({attributes:o})=>{const e=l.useBlockProps.save({className:`align-${o.alignment} ${o.buttonAlign}-align design-${o.layout} icon-pos-${o.iconPosition}`});function n(){return(0,a.jsx)("div",{className:"blockons-mb-icon",style:{..."one"===o.iconPosition||"three"===o.iconPosition?{marginRight:o.iconSpacing}:{marginLeft:o.iconSpacing},color:o.iconColor},children:(0,a.jsx)(i,{icon:o.customIcon&&o.customIconName?o.customIconName:o.theIcon,iconSize:o.iconSize})})}return(0,a.jsx)("div",{...e,children:(0,a.jsx)("div",{className:"blockons-marketing-button-block",children:(0,a.jsxs)("a",{...o.linkTo?{href:o.linkTo}:"",...o.linkTarget?{target:"_blank"}:"",className:"blockons-marketing-button",style:{paddingLeft:o.horizPad,paddingRight:o.hasIcon?o.horizPad+4:o.horizPad,paddingTop:o.vertPad,paddingBottom:o.vertPad,minWidth:o.mbMinWidth,minHeight:o.mbMinHeight,borderRadius:o.bRadius,backgroundColor:o.bgColor,borderColor:o.borderColor},rel:"noopener",children:[o.hasIcon&&"three"===o.iconPosition&&(0,a.jsx)(n,{}),(0,a.jsxs)("div",{className:"blockons-marketing-button-inner",children:[(0,a.jsxs)("div",{className:"blockons-marketing-button-title-wrap",children:[o.hasIcon&&"one"===o.iconPosition&&(0,a.jsx)(n,{}),(0,a.jsx)(l.RichText.Content,{tagName:"div",value:o.title,className:"blockons-marketing-button-title",style:{color:o.titleColor,fontSize:o.titleSize}}),o.hasIcon&&"two"===o.iconPosition&&(0,a.jsx)(n,{})]}),o.showSubText&&(0,a.jsx)("div",{className:"blockons-marketing-button-text-wrap",children:(0,a.jsx)(l.RichText.Content,{tagName:"p",value:o.subText,className:"blockons-marketing-button-text",style:{color:o.textColor,fontSize:o.textSize}})})]}),o.hasIcon&&"four"===o.iconPosition&&(0,a.jsx)(n,{})]})})})}})}},n={};function l(o){var t=n[o];if(void 0!==t)return t.exports;var a=n[o]={exports:{}};return e[o](a,a.exports,l),a.exports}l.m=e,o=[],l.O=(e,n,t,a)=>{if(!n){var i=1/0;for(d=0;d<o.length;d++){n=o[d][0],t=o[d][1],a=o[d][2];for(var r=!0,s=0;s<n.length;s++)(!1&a||i>=a)&&Object.keys(l.O).every((o=>l.O[o](n[s])))?n.splice(s--,1):(r=!1,a<i&&(i=a));if(r){o.splice(d--,1);var c=t();void 0!==c&&(e=c)}}return e}a=a||0;for(var d=o.length;d>0&&o[d-1][2]>a;d--)o[d]=o[d-1];o[d]=[n,t,a]},l.o=(o,e)=>Object.prototype.hasOwnProperty.call(o,e),(()=>{var o={35:0,779:0};l.O.j=e=>0===o[e];var e=(e,n)=>{var t,a,i=n[0],r=n[1],s=n[2],c=0;if(i.some((e=>0!==o[e]))){for(t in r)l.o(r,t)&&(l.m[t]=r[t]);if(s)var d=s(l)}for(e&&e(n);c<i.length;c++)a=i[c],l.o(o,a)&&o[a]&&o[a][0](),o[a]=0;return l.O(d)},n=self.webpackChunkblockons=self.webpackChunkblockons||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var t=l.O(void 0,[779],(()=>l(8467)));t=l.O(t)})();