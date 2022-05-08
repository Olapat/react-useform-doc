(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1521:function(e,n,r){"use strict";var t=r(7294),s=r(5634),a=r.n(s),o=r(5893),i=function(e){var n=e.children,r=e.autoPadding,s=e.autoPaddingX,i=e.autoPaddingY,l=t.useMemo((function(){var e=a().card;return r&&(e+=" "+a().padding),s&&(e+=" "+a().paddingX),i&&(e+=" "+a().paddingY),e}),[r,s,i]);return(0,o.jsx)("div",{className:l,children:n})};n.Z=t.memo(i)},1857:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return me}});var t=r(9008),s=r(7294),a=r(5660),o=r.n(a),i=r(1521),l=r(1731),d=r(5893),c=function(){var e=o().highlight("\r\n  import React, { useCallback } from 'react'\n  import { useForm, Form } from '@olapat/react-useform'\n\n  const Basic = () => {\n    const form = useForm({\n      initialValues: {\n        username: '',\n        password: '',\n        repassword: ''\n      },\n      rules: {\n        username: {\n          required: true\n        },\n        password: {\n          required: true,\n          isAllowed: {\n            func: (value) => /^(?=.*d)(?=.*([a-z]|[\u0e01-\u0e59]))(?=.*[A-Z])(?=.*[a-zA-Z\u0e01-\u0e59]).{8,}/.test(value),\n            msg: 'Password is not format'\n          }\n        },\n        repassword: {\n          required: true,\n          isAllowed: {\n            func: (value, values) => value === values.password,\n            msg: 'Password is not match'\n          }\n        }\n      }\n    })\n\n    const { values, handlerChange, errors } = form\n\n    const handlerSubmit = useCallback((values) => {\n      console.table(values);\n    }, [])\n\n    return (\n      <Form form={form} handlerSubmit={handlerSubmit}>\n        <fieldset>\n          <legend>Username</legend>\n          <input\n            type='text'\n            name='username'\n            onChange={handlerChange}\n            value={values.username}\n          />\n          <br />\n          <span>{errors.username}</span>\n        </fieldset>\n        <fieldset>\n          <legend>Password</legend>\n          <input\n            type='password'\n            name='password'\n            onChange={handlerChange}\n            value={values.password}\n          />\n          <br />\n          <span>{errors.password}</span>\n        </fieldset>\n        <fieldset>\n          <legend>Confirm Password</legend>\n          <input\n            type='password'\n            name='repassword'\n            onChange={handlerChange}\n            value={values.repassword}\n          />\n          <br />\n          <span>{errors.repassword}</span>\n        </fieldset>\n        <button type='submit'>\n          Submit\n        </button>\n      </Form>\n    )\n  }\n  ",o().languages.javascript,"javascript"),n=(0,l.c)({initialValues:{username:"",password:"",repassword:""},rules:{username:{required:!0},password:{required:!0,isAllowed:{func:function(e){return/^(?=.*\d)(?=.*([a-z]|[\u0e01-\u0e59]))(?=.*[A-Z])(?=.*[a-zA-Z\u0e01-\u0e59]).{8,}/.test(e)},msg:"Password is not format"}},repassword:{required:!0,isAllowed:{func:function(e,n){return e===n.password},msg:"Password is not match"}}}}),r=n.values,t=n.handlerChange,a=n.errors,c=(0,s.useCallback)((function(e){console.table(e)}),[]);return(0,d.jsxs)("div",{children:[(0,d.jsx)(i.Z,{autoPadding:!0,children:(0,d.jsxs)(l.l,{form:n,handlerSubmit:c,children:[(0,d.jsxs)("fieldset",{children:[(0,d.jsx)("legend",{children:"Username"}),(0,d.jsx)("input",{type:"text",name:"username",onChange:t,value:r.username}),(0,d.jsx)("br",{}),(0,d.jsx)("span",{children:a.username})]}),(0,d.jsxs)("fieldset",{children:[(0,d.jsx)("legend",{children:"Password"}),(0,d.jsx)("input",{type:"password",name:"password",onChange:t,value:r.password}),(0,d.jsx)("br",{}),(0,d.jsx)("span",{children:a.password})]}),(0,d.jsxs)("fieldset",{children:[(0,d.jsx)("legend",{children:"Confirm Password"}),(0,d.jsx)("input",{type:"password",name:"repassword",onChange:t,value:r.repassword}),(0,d.jsx)("br",{}),(0,d.jsx)("span",{children:a.repassword})]}),(0,d.jsx)("button",{type:"submit",children:"Submit"})]})}),(0,d.jsx)("pre",{className:"prism",children:(0,d.jsx)("code",{className:"language-js",dangerouslySetInnerHTML:{__html:e}})})]})},u=r(1048),p=r(2793),h=(r(5697),r(6010)),m=r(7463);var g=s.createContext(),x=r(6122),f=r(8658),j=r(1420),v=r(1271);function b(e){return(0,j.Z)("MuiTable",e)}(0,v.Z)("MuiTable",["root","stickyHeader"]);const w=["className","component","padding","size","stickyHeader"],Z=(0,f.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:r}=e;return[n.root,r.stickyHeader&&n.stickyHeader]}})((({theme:e,ownerState:n})=>(0,p.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,p.Z)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},n.stickyHeader&&{borderCollapse:"separate"}))),y="table";var C=s.forwardRef((function(e,n){const r=(0,x.Z)({props:e,name:"MuiTable"}),{className:t,component:a=y,padding:o="normal",size:i="medium",stickyHeader:l=!1}=r,c=(0,u.Z)(r,w),f=(0,p.Z)({},r,{component:a,padding:o,size:i,stickyHeader:l}),j=(e=>{const{classes:n,stickyHeader:r}=e,t={root:["root",r&&"stickyHeader"]};return(0,m.Z)(t,b,n)})(f),v=s.useMemo((()=>({padding:o,size:i,stickyHeader:l})),[o,i,l]);return(0,d.jsx)(g.Provider,{value:v,children:(0,d.jsx)(Z,(0,p.Z)({as:a,role:a===y?null:"table",ref:n,className:(0,h.Z)(j.root,t),ownerState:f},c))})}));var F=s.createContext();function k(e){return(0,j.Z)("MuiTableBody",e)}(0,v.Z)("MuiTableBody",["root"]);const P=["className","component"],R=(0,f.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,n)=>n.root})({display:"table-row-group"}),N={variant:"body"},T="tbody";var M=s.forwardRef((function(e,n){const r=(0,x.Z)({props:e,name:"MuiTableBody"}),{className:t,component:s=T}=r,a=(0,u.Z)(r,P),o=(0,p.Z)({},r,{component:s}),i=(e=>{const{classes:n}=e;return(0,m.Z)({root:["root"]},k,n)})(o);return(0,d.jsx)(F.Provider,{value:N,children:(0,d.jsx)(R,(0,p.Z)({className:(0,h.Z)(i.root,t),as:s,ref:n,role:s===T?null:"rowgroup",ownerState:o},a))})})),S=r(1796),_=r(8216);function H(e){return(0,j.Z)("MuiTableCell",e)}var z=(0,v.Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]);const O=["align","className","component","padding","scope","size","sortDirection","variant"],A=(0,f.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:r}=e;return[n.root,n[r.variant],n[`size${(0,_.Z)(r.size)}`],"normal"!==r.padding&&n[`padding${(0,_.Z)(r.padding)}`],"inherit"!==r.align&&n[`align${(0,_.Z)(r.align)}`],r.stickyHeader&&n.stickyHeader]}})((({theme:e,ownerState:n})=>(0,p.Z)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:`1px solid\n    ${"light"===e.palette.mode?(0,S.$n)((0,S.Fq)(e.palette.divider,1),.88):(0,S._j)((0,S.Fq)(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},"head"===n.variant&&{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},"body"===n.variant&&{color:e.palette.text.primary},"footer"===n.variant&&{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},"small"===n.size&&{padding:"6px 16px",[`&.${z.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},"checkbox"===n.padding&&{width:48,padding:"0 0 0 4px"},"none"===n.padding&&{padding:0},"left"===n.align&&{textAlign:"left"},"center"===n.align&&{textAlign:"center"},"right"===n.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===n.align&&{textAlign:"justify"},n.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:e.palette.background.default})));var D=s.forwardRef((function(e,n){const r=(0,x.Z)({props:e,name:"MuiTableCell"}),{align:t="inherit",className:a,component:o,padding:i,scope:l,size:c,sortDirection:f,variant:j}=r,v=(0,u.Z)(r,O),b=s.useContext(g),w=s.useContext(F),Z=w&&"head"===w.variant;let y;y=o||(Z?"th":"td");let C=l;!C&&Z&&(C="col");const k=j||w&&w.variant,P=(0,p.Z)({},r,{align:t,component:y,padding:i||(b&&b.padding?b.padding:"normal"),size:c||(b&&b.size?b.size:"medium"),sortDirection:f,stickyHeader:"head"===k&&b&&b.stickyHeader,variant:k}),R=(e=>{const{classes:n,variant:r,align:t,padding:s,size:a,stickyHeader:o}=e,i={root:["root",r,o&&"stickyHeader","inherit"!==t&&`align${(0,_.Z)(t)}`,"normal"!==s&&`padding${(0,_.Z)(s)}`,`size${(0,_.Z)(a)}`]};return(0,m.Z)(i,H,n)})(P);let N=null;return f&&(N="asc"===f?"ascending":"descending"),(0,d.jsx)(A,(0,p.Z)({as:y,ref:n,className:(0,h.Z)(R.root,a),"aria-sort":N,scope:C,ownerState:P},v))}));function q(e){return(0,j.Z)("MuiTableContainer",e)}(0,v.Z)("MuiTableContainer",["root"]);const E=["className","component"],$=(0,f.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,n)=>n.root})({width:"100%",overflowX:"auto"});var V=s.forwardRef((function(e,n){const r=(0,x.Z)({props:e,name:"MuiTableContainer"}),{className:t,component:s="div"}=r,a=(0,u.Z)(r,E),o=(0,p.Z)({},r,{component:s}),i=(e=>{const{classes:n}=e;return(0,m.Z)({root:["root"]},q,n)})(o);return(0,d.jsx)($,(0,p.Z)({ref:n,as:s,className:(0,h.Z)(i.root,t),ownerState:o},a))}));function B(e){return(0,j.Z)("MuiTableHead",e)}(0,v.Z)("MuiTableHead",["root"]);const W=["className","component"],X=(0,f.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,n)=>n.root})({display:"table-header-group"}),L={variant:"head"},U="thead";var Y=s.forwardRef((function(e,n){const r=(0,x.Z)({props:e,name:"MuiTableHead"}),{className:t,component:s=U}=r,a=(0,u.Z)(r,W),o=(0,p.Z)({},r,{component:s}),i=(e=>{const{classes:n}=e;return(0,m.Z)({root:["root"]},B,n)})(o);return(0,d.jsx)(F.Provider,{value:L,children:(0,d.jsx)(X,(0,p.Z)({as:s,className:(0,h.Z)(i.root,t),ref:n,role:s===U?null:"rowgroup",ownerState:o},a))})}));function I(e){return(0,j.Z)("MuiTableRow",e)}var G=(0,v.Z)("MuiTableRow",["root","selected","hover","head","footer"]);const J=["className","component","hover","selected"],K=(0,f.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:r}=e;return[n.root,r.head&&n.head,r.footer&&n.footer]}})((({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${G.hover}:hover`]:{backgroundColor:e.palette.action.hover},[`&.${G.selected}`]:{backgroundColor:(0,S.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:(0,S.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}}))),Q="tr";var ee=s.forwardRef((function(e,n){const r=(0,x.Z)({props:e,name:"MuiTableRow"}),{className:t,component:a=Q,hover:o=!1,selected:i=!1}=r,l=(0,u.Z)(r,J),c=s.useContext(F),g=(0,p.Z)({},r,{component:a,hover:o,selected:i,head:c&&"head"===c.variant,footer:c&&"footer"===c.variant}),f=(e=>{const{classes:n,selected:r,hover:t,head:s,footer:a}=e,o={root:["root",r&&"selected",t&&"hover",s&&"head",a&&"footer"]};return(0,m.Z)(o,I,n)})(g);return(0,d.jsx)(K,(0,p.Z)({as:a,ref:n,className:(0,h.Z)(f.root,t),role:a===Q?null:"row",ownerState:g},l))})),ne=r(6501);function re(e,n,r,t){return{props:e,options:n,defaultProps:r,description:t}}var te=[re("func","Function: (value, values) => boolean","null","Function is checking value"),re("msg","String","{}","message on value not allowed")],se=function(e){return(0,d.jsx)(V,{component:ne.Z,children:(0,d.jsxs)(C,{sx:{minWidth:650},"aria-label":"simple table",children:[(0,d.jsx)(Y,{children:(0,d.jsxs)(ee,{children:[(0,d.jsx)(D,{children:"Props"}),(0,d.jsx)(D,{align:"left",children:"Options"}),(0,d.jsx)(D,{align:"left",children:"Default"}),(0,d.jsx)(D,{align:"left",children:"Description"})]})}),(0,d.jsx)(M,{children:te.map((function(e){return(0,d.jsxs)(ee,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,d.jsx)(D,{component:"th",scope:"row",children:e.props}),(0,d.jsx)(D,{align:"left",children:e.options}),(0,d.jsx)(D,{align:"left",children:e.defaultProps}),(0,d.jsx)(D,{align:"left",children:e.description})]},e.props)}))})]})})};function ae(e,n,r,t){return{props:e,options:n,defaultProps:r,description:t}}var oe=[ae("initialValues","Object: {nameField: value}","{}","Default Values Form"),ae("rules",(0,d.jsxs)(d.Fragment,{children:["Object: ",(0,d.jsx)("a",{href:"#props-rules",className:"text-black",children:"Rules"})]}),"{}","Default Rules Form"),ae("blackList",(0,d.jsx)(d.Fragment,{children:"String[]"}),"[]","Field names is set to disabled"),ae("whiteList",(0,d.jsx)(d.Fragment,{children:"String[]"}),"[]","Field names is set to enabled"),ae("onValuesUpdate",(0,d.jsx)(d.Fragment,{children:"Function[]"}),"null","Callback on values form updated")],ie=function(e){return(0,d.jsx)(V,{component:ne.Z,children:(0,d.jsxs)(C,{sx:{minWidth:650},"aria-label":"simple table",children:[(0,d.jsx)(Y,{children:(0,d.jsxs)(ee,{children:[(0,d.jsx)(D,{children:"Props"}),(0,d.jsx)(D,{align:"left",children:"Options"}),(0,d.jsx)(D,{align:"left",children:"Default"}),(0,d.jsx)(D,{align:"left",children:"Description"})]})}),(0,d.jsx)(M,{children:oe.map((function(e){return(0,d.jsxs)(ee,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,d.jsx)(D,{component:"th",scope:"row",children:e.props}),(0,d.jsx)(D,{align:"left",children:e.options}),(0,d.jsx)(D,{align:"left",children:e.defaultProps}),(0,d.jsx)(D,{align:"left",children:e.description})]},e.props)}))})]})})};function le(e,n,r,t){return{props:e,options:n,defaultProps:r,description:t}}var de=[le("required","boolean | string","{}","rule set field is required"),le("isAllowed",(0,d.jsxs)(d.Fragment,{children:["Object: ",(0,d.jsx)("a",{href:"#props-isallowed",className:"text-black",children:"IsAllowed"})]}),"null","rule set field is allowed value")],ce=function(e){return(0,d.jsx)(V,{component:ne.Z,children:(0,d.jsxs)(C,{sx:{minWidth:650},"aria-label":"simple table",children:[(0,d.jsx)(Y,{children:(0,d.jsxs)(ee,{children:[(0,d.jsx)(D,{children:"Props"}),(0,d.jsx)(D,{align:"left",children:"Options"}),(0,d.jsx)(D,{align:"left",children:"Default"}),(0,d.jsx)(D,{align:"left",children:"Description"})]})}),(0,d.jsx)(M,{children:de.map((function(e){return(0,d.jsxs)(ee,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,d.jsx)(D,{component:"th",scope:"row",children:e.props}),(0,d.jsx)(D,{align:"left",children:e.options}),(0,d.jsx)(D,{align:"left",children:e.defaultProps}),(0,d.jsx)(D,{align:"left",children:e.description})]},e.props)}))})]})})};function ue(e,n,r,t){return{props:e,options:n,defaultProps:r,description:t}}var pe=[ue("values","Object","{}","Values form"),ue("handlerChange","Function","(event: ReactChangeEvent | string (name), value: any) => void",(0,d.jsxs)(d.Fragment,{children:["Function to change values; handlerChange(event) ",(0,d.jsx)("br",{})," handlerChange(name, value)"]})),ue("errors","Object","{}","Errors form"),ue("submitting","boolean","false","is Form submitting"),ue("setValues","Function","(values: Object | (prevValues: Object) => NewValuesForm) => void","Function to set values form"),ue("setRules","Function","(rules: Object | (prevRules: Object) => NewRulesForm) => void","Function to set rules form"),ue("setErrors","Function","(errors: Object | (prevErrors: Object) => NewErrorsForm) => void","Function to set errors form"),ue("handlerReset","Function","(newValues: Object) => void",(0,d.jsx)(d.Fragment,{children:"Function to reset values"}))],he=function(){return(0,d.jsx)(V,{component:ne.Z,children:(0,d.jsxs)(C,{sx:{minWidth:650},"aria-label":"simple table",children:[(0,d.jsx)(Y,{children:(0,d.jsxs)(ee,{children:[(0,d.jsx)(D,{children:"Props"}),(0,d.jsx)(D,{align:"left",children:"Options"}),(0,d.jsx)(D,{align:"left",children:"Default"}),(0,d.jsx)(D,{align:"left",children:"Description"})]})}),(0,d.jsx)(M,{children:pe.map((function(e){return(0,d.jsxs)(ee,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,d.jsx)(D,{component:"th",scope:"row",children:e.props}),(0,d.jsx)(D,{align:"left",children:e.options}),(0,d.jsx)(D,{align:"left",children:e.defaultProps}),(0,d.jsx)(D,{align:"left",children:e.description})]},e.props)}))})]})})},me=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.default,{children:(0,d.jsx)("title",{children:"React-useForm"})}),(0,d.jsxs)("main",{children:[(0,d.jsx)("h1",{children:"Welcome"}),(0,d.jsx)("p",{children:"Document react hook useForm Olapat"}),(0,d.jsx)("h3",{children:"Example"}),(0,d.jsxs)("section",{id:"exp-basic",children:[(0,d.jsx)("h4",{children:"Basic"}),(0,d.jsx)(c,{})]}),(0,d.jsx)("h3",{children:"Props"}),(0,d.jsxs)("section",{id:"props",children:[(0,d.jsx)("h4",{children:"useForm"}),(0,d.jsx)(ie,{})]}),(0,d.jsxs)("section",{id:"properties",children:[(0,d.jsx)("h4",{children:"Properties UseForm"}),(0,d.jsx)(he,{})]}),(0,d.jsxs)("section",{id:"props-rules",children:[(0,d.jsx)("h4",{children:"Rule"}),(0,d.jsx)(ce,{})]}),(0,d.jsxs)("section",{id:"props-isallowed",children:[(0,d.jsx)("h4",{children:"Rule is Allowed"}),(0,d.jsx)(se,{})]})]})]})}},5301:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(1857)}])},5634:function(e){e.exports={card:"Card_card__1foxG",padding:"Card_padding__1qSg1",paddingX:"Card_paddingX__1THvS",paddingY:"Card_paddingY__vidDt"}}},function(e){e.O(0,[774,224,731,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);