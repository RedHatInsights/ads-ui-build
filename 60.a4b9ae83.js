"use strict";(self.webpackChunkads_ui=self.webpackChunkads_ui||[]).push([[60],{49060:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var o=n(70655),i=n(93264),a=n.n(i),r=n(99922),s=n(7332),c=n(74515),d=n(28044),l=n(16509),u=n(10258),f=n.n(u),p=function(e){return"string"==typeof e.data?e.data:JSON.stringify(e.data,null,4)},g=function(e){return e.contentType===c.b.APPLICATION_YAML?"yaml":e.contentType===c.b.APPLICATION_XML||e.contentType===c.b.TEXT_XML||e.contentType===c.b.APPLICATION_WSDL?"xml":"json"},m=function(e){var t=e.content,n=e.onChange,o=p(t),r=g(t),s=(0,i.useState)(o),c=s[0],d=s[1],l=(0,i.useState)(r),u=l[0],m=l[1];return(0,i.useEffect)((function(){d(p(t)),m(g(t))}),[t]),a().createElement(f(),{className:"text-editor",language:u,value:c,onChange:n,options:{automaticLayout:!0,wordWrap:"on"}})},y=n(5854),A=n(78788),E=function(e){var t=e.content,n=e.onChange,o=e.className,r=a().createRef(),s=(0,y.useConfig)();(0,i.useEffect)((function(){console.info("[OpenApiEditor] URL location of ads-editors: ",s.ads.editorsBasePath);var e=function(e){if(e.data&&"apicurio_onChange"===e.data.type){var o=e.data.data.content;"object"==typeof o?t.contentType===c.b.APPLICATION_YAML?(console.info("[OpenApiEditor] New content is 'object', converting to YAML string"),o=(0,A.vo)(o)):(console.info("[OpenApiEditor] New content is 'object', converting to JSON string"),o=(0,A.LQ)(o)):"string"==typeof o&&t.contentType===c.b.APPLICATION_YAML&&(console.info("[OpenApiEditor] Converting from JSON string to YAML string."),o=(0,A.vo)((0,A.Mo)(o))),n(o)}};return window.addEventListener("message",e,!1),function(){window.removeEventListener("message",e,!1)}}),[]);return a().createElement("iframe",{id:"openapi-editor-frame",ref:r,className:o||"editor-openapi-flex-container",onLoad:function(){var e;"object"==typeof t.data?(console.info("[OpenApiEditor] Loading editor data from 'object' - converting to JSON string."),e=(0,A.LQ)(t.data)):"string"==typeof t.data&&t.contentType===c.b.APPLICATION_YAML?(console.info("[OpenApiEditor] Loading editor data from 'string' - converting from YAML to JSON."),e=(0,A.LQ)((0,A.x1)(t.data))):(console.info("[OpenApiEditor] Loading editor data from 'string' without content conversion."),e=t.data);var n={type:"apicurio-editingInfo",data:{content:{type:"OPENAPI",value:e},features:{allowCustomValidations:!1,allowImports:!1}}};r.current.contentWindow.postMessage(n,"*")},src:s.ads.editorsBasePath})},v=function(e){var t=e.content,n=e.onChange,o=e.className,r=a().createRef(),s=(0,y.useConfig)();(0,i.useEffect)((function(){var e=function(e){if(e.data&&"apicurio_onChange"===e.data.type){var o=e.data.data.content;"object"==typeof o?t.contentType===c.b.APPLICATION_YAML?(console.info("[AsyncApiEditor] New content is 'object', converting to YAML string"),o=(0,A.vo)(o)):(console.info("[AsyncApiEditor] New content is 'object', converting to JSON string"),o=(0,A.LQ)(o)):"string"==typeof o&&t.contentType===c.b.APPLICATION_YAML&&(console.info("[AsyncApiEditor] Converting from JSON string to YAML string."),o=(0,A.vo)((0,A.Mo)(o))),n(o)}};return window.addEventListener("message",e,!1),function(){window.removeEventListener("message",e,!1)}}),[]);return a().createElement("iframe",{id:"asyncapi-editor-frame",ref:r,className:o||"editor-asyncapi-flex-container",onLoad:function(){var e;"object"==typeof t.data?(console.info("[AsyncApiEditor] Loading editor data from 'object' - converting to JSON string."),e=(0,A.LQ)(t.data)):"string"==typeof t.data&&t.contentType===c.b.APPLICATION_YAML?(console.info("[AsyncApiEditor] Loading editor data from 'string' - converting from YAML to JSON."),e=(0,A.LQ)((0,A.x1)(t.data))):(console.info("[AsyncApiEditor] Loading editor data from 'string' without content conversion."),e=t.data);var n={type:"apicurio-editingInfo",data:{content:{type:"ASYNCAPI",value:e},features:{allowCustomValidations:!1,allowImports:!1}}};r.current.contentWindow.postMessage(n,"*")},src:s.ads.editorsBasePath})},L=function(e){var t=e.content,n=e.onChange,o=p(t),r=(0,i.useState)(o),s=r[0],c=r[1];(0,i.useEffect)((function(){c(p(t))}),[t]);return a().createElement(f(),{beforeMount:function(e){e.languages.register({id:"protobuf"}),e.languages.setMonarchTokensProvider("protobuf",{keywords:["import","option","message","package","service","optional","rpc","returns","return","true","false","required"],typeKeywords:["double","float","int32","int64","uint32","uint64","sint32","sint64","fixed32","fixed64","sfixed32","sfixed64","bool","string","bytes"],operators:["=",">","<","!","~","?",":","==","<=",">=","!=","&&","||","++","--","+","-","*","/","&","|","^","%","<<",">>",">>>","+=","-=","*=","/=","&=","|=","^=","%=","<<=",">>=",">>>="],symbols:/[=><!~?:&|+\-*\/^%]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[[/[a-z_$][\w$]*/,{cases:{"@typeKeywords":"typeKeyword","@keywords":"keyword","@default":"identifier"}}],[/[A-Z][\w$]*/,"type.identifier"],{include:"@whitespace"},[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,{cases:{"@operators":"operator","@default":""}}],[/@\s*[a-zA-Z_$][\w$]*/,{token:"annotation",log:"annotation token: $0"}],[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float"],[/0[xX][0-9a-fA-F]+/,"number.hex"],[/\d+/,"number"],[/[;,.]/,"delimiter"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/"/,{token:"string.quote",bracket:"@open",next:"@string"}],[/'[^\\']'/,"string"],[/(')(@escapes)(')/,["string","string.escape","string"]],[/'/,"string.invalid"]],comment:[[/[^\/*]+/,"comment"],[/\/\*/,"comment","@push"],["\\*/","comment","@pop"],[/[\/*]/,"comment"]],string:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,{token:"string.quote",bracket:"@close",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,"white"],[/\/\*/,"comment","@comment"],[/\/\/.*$/,"comment"]]}}),e.editor.defineTheme("protobuf",{base:"vs",inherit:!0,rules:[{token:"keyword",foreground:"DB2121"},{token:"typeKeyword",foreground:"F84842",fontStyle:"italic"},{token:"identifier",foreground:"0C5ED7",fontStyle:"bold"},{token:"type.identifier",foreground:"00CA8C",fontStyle:"bold"},{token:"comment",foreground:"7A7A7A"},{token:"number",foreground:"000000",fontStyle:"italic"},{token:"string",fontStyle:"italic"}]})},className:"text-editor",defaultLanguage:"protobuf",defaultValue:s,onChange:n,height:"100%",options:{automaticLayout:!0}})},C=function(e){var t=e.params,n=(0,i.useState)(!0),u=n[0],f=n[1],p=(0,i.useState)(),g=p[0],C=p[1],w=(0,i.useState)(),h=w[0],b=w[1],P=(0,i.useState)(),N=P[0],I=P[1],S=(0,i.useState)(!1),O=S[0],k=S[1],D=(0,i.useState)(),T=D[0],x=D[1],M=(0,i.useState)(),R=M[0],_=M[1],Y=(0,i.useState)(!1),F=Y[0],j=Y[1],B=(0,i.useState)(!1),J=B[0],V=B[1],$=(0,i.useState)(!1),z=$[0],Q=$[1],q=(0,i.useRef)(),U=(0,s.Pq)(),K=(0,s.al)(),W=((0,y.useAlert)()||{}).addAlert;(0,i.useEffect)((function(){f(!0);var e=t.designId;U.getDesign(e).then((function(e){C(e)})).catch((function(t){console.error("[EditorPage] Failed to get design with id ".concat(e,": "),t)}))}),[t]),(0,i.useEffect)((function(){console.info("=========> DESIGN CHANGED!");var e=t.designId;U.getDesignContent(e).then((function(e){b(e),f(!1),k(!1),I(e.data)})).catch((function(t){console.error("[EditorPage] Failed to get design content with id ".concat(e,": "),t)}))}),[g]);var X,G=function(e){I(e),k(!0)},H=a().createElement(m,{content:h,onChange:G}),Z=a().createElement(L,{content:h,onChange:G}),ee=a().createElement(E,{content:h,onChange:G}),te=a().createElement(v,{content:h,onChange:G}),ne=function(e,t){console.log("".concat(t," has new width of: ").concat(e))},oe=function(e,t,n){j(!0),_({registry:e,groupId:t,artifactId:n}),K.createFor(e).testUpdateArtifactContent(t,n,N).then((function(){ie()})).catch((function(e){ie(e)}))},ie=function(e){V(!0),x(e),j(!1)},ae=function(){V(!1),j(!1),x(void 0)},re=function(e){var t;return F?a().createElement(r.Spinner,{className:"spinner"}):e?a().createElement(r.DescriptionList,{isHorizontal:!0},"RuleViolationException"===e.name&&(null===(t=e.causes)||void 0===t?void 0:t.length)>0?e.causes.map((function(e,t){return a().createElement(a().Fragment,{key:"issue-"+t},a().createElement(r.DescriptionListGroup,null,a().createElement(r.DescriptionListTerm,null,"Code"),a().createElement(r.DescriptionListDescription,null,e.description),a().createElement(r.DescriptionListTerm,null,"Context"),a().createElement(r.DescriptionListDescription,null,a().createElement("pre",null,e.context))),a().createElement(r.Divider,null))})):a().createElement(r.CodeBlock,null,a().createElement(r.CodeBlockCode,{id:"code-content"},e.detail))):a().createElement("p",null,"Artifact registration dry-run completed with no issues.")};return a().createElement(d.tr,{condition:u},a().createElement(r.PageSection,{variant:r.PageSectionVariants.light,id:"section-context"},a().createElement(l.rU,{design:g,dirty:O,onSave:function(){U.updateDesignContent((0,o.pi)((0,o.pi)({},h),{data:N})).then((function(){g&&(g.modifiedOn=new Date,C(g),k(!1)),W({title:"Design '".concat(null==g?void 0:g.name,"' successfully saved."),variant:y.AlertVariant.success,dataTestId:"toast-design-saved"})})).catch((function(e){console.error("[EditorPage] Failed to save design content: ",e)}))},onFormat:function(){console.info("[EditorPage] Formatting content.");var e=(0,A.Nq)(N,(null==h?void 0:h.contentType)||c.b.APPLICATION_JSON);console.info("[EditorPage] New content is: ",e),b((0,o.pi)((0,o.pi)({},h),{data:e})),I(e)},onRename:function(){return Q(!0)},isPanelOpen:J,onRegistrationDryRun:oe,onExpandDryRunCausesPanel:function(e){return ie(e)},artifactContent:N}),a().createElement(l.tt,{design:g,isOpen:z,onRename:function(e){U.renameDesign(null==g?void 0:g.id,e.name,e.summary).then((function(){g&&(g.name=e.name,g.summary=e.summary),Q(!1),W({title:"Design '".concat(e.name,"' successfully renamed."),variant:y.AlertVariant.success,dataTestId:"toast-design-renamed"})})).catch((function(e){}))},onCancel:function(){return Q(!1)}})),a().createElement(r.PageSection,{variant:r.PageSectionVariants.light,id:"section-editor"},a().createElement(r.Drawer,{isExpanded:J,isInline:!0,position:"right"},a().createElement(r.DrawerContent,{panelContent:(X=T,a().createElement(r.DrawerPanelContent,{isResizable:!0,onResize:ne,minSize:"35%",id:"dry-run-issues-panel"},a().createElement(r.DrawerHead,null,a().createElement("h2",{className:"pf-c-title pf-m-2xl",tabIndex:J?0:-1,ref:q},"Registration dry-run issues"),a().createElement(r.DrawerActions,null,a().createElement(r.Button,{variant:"secondary",onClick:function(){return oe(null==R?void 0:R.registry,null==R?void 0:R.groupId,null==R?void 0:R.artifactId)}},"Retry"),a().createElement(r.DrawerCloseButton,{onClick:ae}))),a().createElement(r.Divider,null),a().createElement(r.DrawerPanelBody,null,re(X))))},a().createElement("div",{className:"editor-parent"},(null==g?void 0:g.type)===c.R.OPENAPI?ee:(null==g?void 0:g.type)===c.R.ASYNCAPI?te:(null==g?void 0:g.type)===c.R.PROTOBUF?Z:H)))))};const w=function(e){return a().createElement(C,(0,o.pi)({},e))}}}]);
//# sourceMappingURL=60.a4b9ae83.js.map