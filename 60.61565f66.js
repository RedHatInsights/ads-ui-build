"use strict";(self.webpackChunkads_ui=self.webpackChunkads_ui||[]).push([[60],{49060:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var o=n(70655),i=n(93264),a=n.n(i),r=n(99922),c=n(7332),s=n(74515),d=n(28044),l=n(3813),u=n(10258),f=n.n(u),p=function(e){var t=e.content,n=e.onChange,o="";return o="string"==typeof t.data?t.data:JSON.stringify(t.data,null,4),a().createElement(f(),{className:"text-editor",defaultLanguage:"json",defaultValue:o,onChange:n,options:{automaticLayout:!0,wordWrap:"on"}})},g=n(5854),m=n(78788),y=function(e){var t=e.content,n=e.onChange,o=e.className,r=a().createRef(),c=(0,g.useConfig)();(0,i.useEffect)((function(){var e=function(e){if(e.data&&"apicurio_onChange"===e.data.type){var o=e.data.data.content;"object"==typeof o?t.contentType===s.b.APPLICATION_YAML?(console.info("[OpenApiEditor] New content is 'object', converting to YAML string"),o=(0,m.vo)(o)):(console.info("[OpenApiEditor] New content is 'object', converting to JSON string"),o=(0,m.LQ)(o)):"string"==typeof o&&t.contentType===s.b.APPLICATION_YAML&&(console.info("[OpenApiEditor] Converting from JSON string to YAML string."),o=(0,m.vo)((0,m.Mo)(o))),n(o)}};return window.addEventListener("message",e,!1),function(){window.removeEventListener("message",e,!1)}}),[]);return a().createElement("iframe",{id:"openapi-editor-frame",ref:r,className:o||"editor-openapi-flex-container",onLoad:function(){var e;"object"==typeof t.data?(console.info("[OpenApiEditor] Loading editor data from 'object' - converting to JSON string."),e=(0,m.LQ)(t.data)):"string"==typeof t.data&&t.contentType===s.b.APPLICATION_YAML?(console.info("[OpenApiEditor] Loading editor data from 'string' - converting from YAML to JSON."),e=(0,m.LQ)((0,m.x1)(t.data))):(console.info("[OpenApiEditor] Loading editor data from 'string' without content conversion."),e=t.data);var n={type:"apicurio-editingInfo",data:{content:{type:"OPENAPI",value:e},features:{allowCustomValidations:!1,allowImports:!1}}};r.current.contentWindow.postMessage(n,"*")},src:c.ads.editorsBasePath})},v=function(e){var t=e.content,n=e.onChange,o="";o="string"==typeof t.data?t.data:JSON.stringify(t.data,null,4);return a().createElement(f(),{beforeMount:function(e){e.languages.register({id:"protobuf"}),e.languages.setMonarchTokensProvider("protobuf",{keywords:["import","option","message","package","service","optional","rpc","returns","return","true","false","required"],typeKeywords:["double","float","int32","int64","uint32","uint64","sint32","sint64","fixed32","fixed64","sfixed32","sfixed64","bool","string","bytes"],operators:["=",">","<","!","~","?",":","==","<=",">=","!=","&&","||","++","--","+","-","*","/","&","|","^","%","<<",">>",">>>","+=","-=","*=","/=","&=","|=","^=","%=","<<=",">>=",">>>="],symbols:/[=><!~?:&|+\-*\/^%]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[[/[a-z_$][\w$]*/,{cases:{"@typeKeywords":"typeKeyword","@keywords":"keyword","@default":"identifier"}}],[/[A-Z][\w$]*/,"type.identifier"],{include:"@whitespace"},[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,{cases:{"@operators":"operator","@default":""}}],[/@\s*[a-zA-Z_$][\w$]*/,{token:"annotation",log:"annotation token: $0"}],[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float"],[/0[xX][0-9a-fA-F]+/,"number.hex"],[/\d+/,"number"],[/[;,.]/,"delimiter"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/"/,{token:"string.quote",bracket:"@open",next:"@string"}],[/'[^\\']'/,"string"],[/(')(@escapes)(')/,["string","string.escape","string"]],[/'/,"string.invalid"]],comment:[[/[^\/*]+/,"comment"],[/\/\*/,"comment","@push"],["\\*/","comment","@pop"],[/[\/*]/,"comment"]],string:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,{token:"string.quote",bracket:"@close",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,"white"],[/\/\*/,"comment","@comment"],[/\/\/.*$/,"comment"]]}}),e.editor.defineTheme("protobuf",{base:"vs",inherit:!0,rules:[{token:"keyword",foreground:"DB2121"},{token:"typeKeyword",foreground:"F84842",fontStyle:"italic"},{token:"identifier",foreground:"0C5ED7",fontStyle:"bold"},{token:"type.identifier",foreground:"00CA8C",fontStyle:"bold"},{token:"comment",foreground:"7A7A7A"},{token:"number",foreground:"000000",fontStyle:"italic"},{token:"string",fontStyle:"italic"}]})},className:"text-editor",defaultLanguage:"protobuf",defaultValue:o,onChange:n,height:"100%",options:{automaticLayout:!0}})},E=n(60891),A=function(e){var t=e.content,n=e.onChange,o=e.className,r=a().createRef(),c=(0,g.useConfig)();(0,i.useEffect)((function(){var e=function(e){if(e.data&&"apicurio_onChange"===e.data.type){var o=e.data.data.content;"object"==typeof o?t.contentType===s.b.APPLICATION_YAML?(console.info("[AsyncApiEditor] New content is 'object', converting to YAML string"),o=(0,m.vo)(o)):(console.info("[AsyncApiEditor] New content is 'object', converting to JSON string"),o=(0,m.LQ)(o)):"string"==typeof o&&t.contentType===s.b.APPLICATION_YAML&&(console.info("[AsyncApiEditor] Converting from JSON string to YAML string."),o=(0,m.vo)((0,m.Mo)(o))),n(o)}};return window.addEventListener("message",e,!1),function(){window.removeEventListener("message",e,!1)}}),[]);return a().createElement("iframe",{id:"asyncapi-editor-frame",ref:r,className:o||"editor-asyncapi-flex-container",onLoad:function(){var e;"object"==typeof t.data?(console.info("[AsyncApiEditor] Loading editor data from 'object' - converting to JSON string."),e=(0,m.LQ)(t.data)):"string"==typeof t.data&&t.contentType===s.b.APPLICATION_YAML?(console.info("[AsyncApiEditor] Loading editor data from 'string' - converting from YAML to JSON."),e=(0,m.LQ)((0,m.x1)(t.data))):(console.info("[AsyncApiEditor] Loading editor data from 'string' without content conversion."),e=t.data);var n={type:"apicurio-editingInfo",data:{content:{type:"ASYNCAPI",value:e},features:{allowCustomValidations:!1,allowImports:!1}}};r.current.contentWindow.postMessage(n,"*")},src:c.ads.editorsBasePath})},w=function(e){var t=e.params,n=(0,i.useState)(!0),u=n[0],f=n[1],g=(0,i.useState)(),m=g[0],w=g[1],C=(0,i.useState)(),h=C[0],L=C[1],b=(0,i.useState)(),P=b[0],N=b[1],S=(0,i.useState)(!1),k=S[0],I=S[1],O=(0,i.useState)(),D=O[0],x=O[1],M=(0,i.useState)(),T=M[0],R=M[1],Y=(0,i.useState)(!1),_=Y[0],j=Y[1],F=(0,i.useState)(!1),J=F[0],B=F[1],$=(0,i.useRef)(),z=(0,c.Pq)(),V=(0,c.al)(),Q=(0,E.H)();(0,i.useEffect)((function(){f(!0);var e=t.designId;z.getDesign(e).then((function(e){w(e)})).catch((function(t){console.error("[EditorPage] Failed to get design with id ".concat(e,": "),t)}))}),[t]),(0,i.useEffect)((function(){var e=t.designId;z.getDesignContent(e).then((function(e){L(e),f(!1),I(!1),N(e.data)})).catch((function(t){console.error("[EditorPage] Failed to get design content with id ".concat(e,": "),t)}))}),[m]);var q,K=function(e){N(e),I(!0)},U=a().createElement(p,{content:h,onChange:K}),H=a().createElement(v,{content:h,onChange:K}),W=a().createElement(y,{content:h,onChange:K}),Z=a().createElement(A,{content:h,onChange:K}),G=function(e,t){console.log("".concat(t," has new width of: ").concat(e))},X=function(e,t,n){j(!0),R({registry:e,groupId:t,artifactId:n}),V.createFor(e).testUpdateArtifactContent(t,n,P).then((function(){ee()})).catch((function(e){ee(e)}))},ee=function(e){B(!0),x(e),j(!1)},te=function(){B(!1),j(!1),x(void 0)},ne=function(e){var t;return _?a().createElement(r.Spinner,{className:"spinner"}):e?a().createElement(r.DescriptionList,{isHorizontal:!0},"RuleViolationException"===e.name&&(null===(t=e.causes)||void 0===t?void 0:t.length)>0?e.causes.map((function(e,t){return a().createElement(a().Fragment,{key:"issue-"+t},a().createElement(r.DescriptionListGroup,null,a().createElement(r.DescriptionListTerm,null,"Code"),a().createElement(r.DescriptionListDescription,null,e.description),a().createElement(r.DescriptionListTerm,null,"Context"),a().createElement(r.DescriptionListDescription,null,a().createElement("pre",null,e.context))),a().createElement(r.Divider,null))})):a().createElement(r.CodeBlock,null,a().createElement(r.CodeBlockCode,{id:"code-content"},e.detail))):a().createElement("p",null,"Artifact registration dry-run completed with no issues.")};return a().createElement(d.tr,{condition:u},a().createElement(r.PageSection,{variant:r.PageSectionVariants.light,id:"section-context"},a().createElement(l.rU,{design:m,dirty:k,onSave:function(){z.updateDesignContent((0,o.pi)((0,o.pi)({},h),{data:P})).then((function(){w((0,o.pi)((0,o.pi)({},m),{modifiedOn:new Date}))})).catch((function(e){console.error("[EditorPage] Failed to save design content: ",e)}))},onCancel:function(){Q.navigateTo("/")},isPanelOpen:J,onRegistrationDryRun:X,onExpandDryRunCausesPanel:function(e){return ee(e)},artifactContent:P})),a().createElement(r.PageSection,{variant:r.PageSectionVariants.light,id:"section-editor"},a().createElement(r.Drawer,{isExpanded:J,isInline:!0,position:"right"},a().createElement(r.DrawerContent,{panelContent:(q=D,a().createElement(r.DrawerPanelContent,{isResizable:!0,onResize:G,minSize:"35%",id:"dry-run-issues-panel"},a().createElement(r.DrawerHead,null,a().createElement("h2",{className:"pf-c-title pf-m-2xl",tabIndex:J?0:-1,ref:$},"Registration dry-run issues"),a().createElement(r.DrawerActions,null,a().createElement(r.Button,{variant:"secondary",onClick:function(){return X(null==T?void 0:T.registry,null==T?void 0:T.groupId,null==T?void 0:T.artifactId)}},"Retry"),a().createElement(r.DrawerCloseButton,{onClick:te}))),a().createElement(r.Divider,null),a().createElement(r.DrawerPanelBody,null,ne(q))))},a().createElement("div",{className:"editor-parent"},(null==m?void 0:m.type)===s.R.OPENAPI?W:(null==m?void 0:m.type)===s.R.ASYNCAPI?Z:(null==m?void 0:m.type)===s.R.PROTOBUF?H:U)))))};const C=function(e){return a().createElement(w,(0,o.pi)({},e))}}}]);
//# sourceMappingURL=60.61565f66.js.map