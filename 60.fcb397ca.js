"use strict";(self.webpackChunkads_ui=self.webpackChunkads_ui||[]).push([[60],{49060:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var o=n(75418),i=n.n(o),a=n(70655),r=n(99922),s=n(7332),c=n(74515),d=n(48533),f=n(21745),g=n(10258),u=n.n(g),l=function(e){var t=e.content,n=e.onChange,o="";return o="string"==typeof t.data?t.data:JSON.stringify(t.data,null,4),i().createElement(u(),{className:"text-editor",defaultLanguage:"json",defaultValue:o,onChange:n,height:"100%",options:{automaticLayout:!0}})},p=n(59823),m=n(78788),y=function(e){var t=e.content,n=e.onChange,a=e.className,r=i().createRef(),s=(0,p.useConfig)();(0,o.useEffect)((function(){var e=function(e){if(e.data&&"apicurio_onChange"===e.data.type){var o=e.data.data.content;"object"==typeof o?t.contentType===c.b.APPLICATION_YAML?(console.info("[OpenApiEditor] New content is 'object', converting to YAML string"),o=(0,m.vo)(o)):(console.info("[OpenApiEditor] New content is 'object', converting to JSON string"),o=(0,m.LQ)(o)):"string"==typeof o&&t.contentType===c.b.APPLICATION_YAML&&(console.info("[OpenApiEditor] Converting from JSON string to YAML string."),o=(0,m.vo)((0,m.Mo)(o))),n(o)}};return window.addEventListener("message",e,!1),function(){window.removeEventListener("message",e,!1)}}),[]);return i().createElement("iframe",{id:"openapi-editor-frame",ref:r,className:a||"editor-openapi-flex-container",onLoad:function(){var e;"object"==typeof t.data?(console.info("[OpenApiEditor] Loading editor data from 'object' - converting to JSON string."),e=(0,m.LQ)(t.data)):"string"==typeof t.data&&t.contentType===c.b.APPLICATION_YAML?(console.info("[OpenApiEditor] Loading editor data from 'string' - converting from YAML to JSON."),e=(0,m.LQ)((0,m.x1)(t.data))):(console.info("[OpenApiEditor] Loading editor data from 'string' without content conversion."),e=t.data);var n={type:"apicurio-editingInfo",data:{content:{type:"OPENAPI",value:e},features:{allowCustomValidations:!1,allowImports:!1}}};r.current.contentWindow.postMessage(n,"*")},src:s.ads.editorsBasePath})},v=function(e){var t=e.content,n=e.onChange,o="";o="string"==typeof t.data?t.data:JSON.stringify(t.data,null,4);return i().createElement(u(),{beforeMount:function(e){e.languages.register({id:"protobuf"}),e.languages.setMonarchTokensProvider("protobuf",{keywords:["import","option","message","package","service","optional","rpc","returns","return","true","false","required"],typeKeywords:["double","float","int32","int64","uint32","uint64","sint32","sint64","fixed32","fixed64","sfixed32","sfixed64","bool","string","bytes"],operators:["=",">","<","!","~","?",":","==","<=",">=","!=","&&","||","++","--","+","-","*","/","&","|","^","%","<<",">>",">>>","+=","-=","*=","/=","&=","|=","^=","%=","<<=",">>=",">>>="],symbols:/[=><!~?:&|+\-*\/^%]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[[/[a-z_$][\w$]*/,{cases:{"@typeKeywords":"typeKeyword","@keywords":"keyword","@default":"identifier"}}],[/[A-Z][\w$]*/,"type.identifier"],{include:"@whitespace"},[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,{cases:{"@operators":"operator","@default":""}}],[/@\s*[a-zA-Z_$][\w$]*/,{token:"annotation",log:"annotation token: $0"}],[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float"],[/0[xX][0-9a-fA-F]+/,"number.hex"],[/\d+/,"number"],[/[;,.]/,"delimiter"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/"/,{token:"string.quote",bracket:"@open",next:"@string"}],[/'[^\\']'/,"string"],[/(')(@escapes)(')/,["string","string.escape","string"]],[/'/,"string.invalid"]],comment:[[/[^\/*]+/,"comment"],[/\/\*/,"comment","@push"],["\\*/","comment","@pop"],[/[\/*]/,"comment"]],string:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,{token:"string.quote",bracket:"@close",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,"white"],[/\/\*/,"comment","@comment"],[/\/\/.*$/,"comment"]]}}),e.editor.defineTheme("protobuf",{base:"vs",inherit:!0,rules:[{token:"keyword",foreground:"DB2121"},{token:"typeKeyword",foreground:"F84842",fontStyle:"italic"},{token:"identifier",foreground:"0C5ED7",fontStyle:"bold"},{token:"type.identifier",foreground:"00CA8C",fontStyle:"bold"},{token:"comment",foreground:"7A7A7A"},{token:"number",foreground:"000000",fontStyle:"italic"},{token:"string",fontStyle:"italic"}]})},className:"text-editor",defaultLanguage:"protobuf",defaultValue:o,onChange:n,height:"100%",options:{automaticLayout:!0}})},A=n(60891),b=function(e){var t=e.content,n=e.onChange,a=e.className,r=i().createRef(),s=(0,p.useConfig)();(0,o.useEffect)((function(){var e=function(e){if(e.data&&"apicurio_onChange"===e.data.type){var o=e.data.data.content;"object"==typeof o?t.contentType===c.b.APPLICATION_YAML?(console.info("[AsyncApiEditor] New content is 'object', converting to YAML string"),o=(0,m.vo)(o)):(console.info("[AsyncApiEditor] New content is 'object', converting to JSON string"),o=(0,m.LQ)(o)):"string"==typeof o&&t.contentType===c.b.APPLICATION_YAML&&(console.info("[AsyncApiEditor] Converting from JSON string to YAML string."),o=(0,m.vo)((0,m.Mo)(o))),n(o)}};return window.addEventListener("message",e,!1),function(){window.removeEventListener("message",e,!1)}}),[]);return i().createElement("iframe",{id:"asyncapi-editor-frame",ref:r,className:a||"editor-asyncapi-flex-container",onLoad:function(){var e;"object"==typeof t.data?(console.info("[AsyncApiEditor] Loading editor data from 'object' - converting to JSON string."),e=(0,m.LQ)(t.data)):"string"==typeof t.data&&t.contentType===c.b.APPLICATION_YAML?(console.info("[AsyncApiEditor] Loading editor data from 'string' - converting from YAML to JSON."),e=(0,m.LQ)((0,m.x1)(t.data))):(console.info("[AsyncApiEditor] Loading editor data from 'string' without content conversion."),e=t.data);var n={type:"apicurio-editingInfo",data:{content:{type:"ASYNCAPI",value:e},features:{allowCustomValidations:!1,allowImports:!1}}};r.current.contentWindow.postMessage(n,"*")},src:s.ads.editorsBasePath})},h=function(e){var t=e.params,n=(0,o.useState)(!0),g=n[0],u=n[1],p=(0,o.useState)(),m=p[0],h=p[1],E=(0,o.useState)(),L=E[0],w=E[1],C=(0,o.useState)(),N=C[0],P=C[1],O=(0,o.useState)(!1),S=O[0],k=O[1],I=(0,s.Pq)(),M=(0,A.H)();(0,o.useEffect)((function(){u(!0);var e=t.designId;I.getDesign(e).then((function(e){h(e)})).catch((function(t){console.error("[EditorPage] Failed to get design with id ".concat(e,": "),t)}))}),[t]),(0,o.useEffect)((function(){var e=t.designId;I.getDesignContent(e).then((function(e){w(e),u(!1),k(!1),P(e.data)})).catch((function(t){console.error("[EditorPage] Failed to get design content with id ".concat(e,": "),t)}))}),[m]);var x=function(e){P(e),k(!0)},T=i().createElement(l,{content:L,onChange:x}),Y=i().createElement(v,{content:L,onChange:x}),_=i().createElement(y,{content:L,onChange:x}),j=i().createElement(b,{content:L,onChange:x});return i().createElement(d.tr,{condition:g},i().createElement(r.PageSection,{variant:r.PageSectionVariants.light,id:"section-context"},i().createElement(f.rU,{design:m,dirty:S,onSave:function(){I.updateDesignContent((0,a.pi)((0,a.pi)({},L),{data:N})).then((function(){h((0,a.pi)((0,a.pi)({},m),{modifiedOn:new Date}))})).catch((function(e){console.error("[EditorPage] Failed to save design content: ",e)}))},onCancel:function(){M.navigateTo("/")}})),i().createElement(r.PageSection,{variant:r.PageSectionVariants.light,id:"section-editor"},i().createElement("div",{className:"editor-parent"},(null==m?void 0:m.type)===c.R.OPENAPI?_:(null==m?void 0:m.type)===c.R.ASYNCAPI?j:(null==m?void 0:m.type)===c.R.PROTOBUF?Y:T)))};const E=function(e){var t=e.params;return i().createElement(h,{params:t})}}}]);
