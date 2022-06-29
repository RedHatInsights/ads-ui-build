"use strict";(self.webpackChunkads_ui=self.webpackChunkads_ui||[]).push([[886],{88886:(e,n,t)=>{t.r(n),t.d(n,{default:()=>h});var o=t(70655),i=t(93264),a=t.n(i),r=t(99922),c=t(49662),l=t(74515),s=t(39785),u=t(87841),d=t(7642),f=t(92690),m=t(78788),g=t(68199),E=t(60891),p=function(e){e.preventDefault(),e.returnValue=""},v=function(e){var n=e.params,t=(0,i.useState)(!0),v=t[0],h=t[1],D=(0,i.useState)(),C=D[0],w=D[1],S=(0,i.useState)(),y=S[0],P=S[1],R=(0,i.useState)(),I=R[0],F=R[1],N=(0,i.useState)(!1),O=N[0],T=N[1],b=(0,i.useState)(),L=b[0],k=b[1],x=(0,i.useState)(),A=x[0],B=x[1],q=(0,i.useState)(!1),z=q[0],H=q[1],V=(0,i.useState)(!1),U=V[0],_=V[1],J=(0,i.useState)(!1),Y=J[0],j=J[1],G=(0,i.useState)(!1),K=G[0],Q=G[1],X=(0,i.useState)(!1),M=X[0],W=X[1],Z=(0,i.useRef)(),$=(0,c.Pq)(),ee=(0,c.al)(),ne=(0,c.PB)(),te=(0,E.H)(),oe=(0,c.qy)();(0,i.useEffect)((function(){return function(){window.removeEventListener("beforeunload",p)}}),[]),(0,i.useEffect)((function(){h(!0);var e=n.designId;$.getDesign(e).then((function(e){w(e)})).catch((function(n){console.error("[EditorPage] Failed to get design with id ".concat(e,": "),n)}))}),[n]),(0,i.useEffect)((function(){O?window.addEventListener("beforeunload",p):window.removeEventListener("beforeunload",p)}),[O]),(0,i.useEffect)((function(){var e=n.designId;$.getDesignContent(e).then((function(e){P(e),h(!1),T(!1),F(e.data)})).catch((function(n){console.error("[EditorPage] Failed to get design content with id ".concat(e,": "),n)}))}),[C]);var ie,ae=function(e){F(e),T(!0)},re=function(){if(C&&y){var e="".concat((0,m.E2)(C.name),".").concat((0,m.Ft)(C,y)),n=(0,m.EC)(C,y),t="object"==typeof I?JSON.stringify(I,null,4):I;ne.downloadToFS(C,t,n,e)}},ce=a().createElement(d.H4,{content:y,onChange:ae}),le=a().createElement(d.Xq,{content:y,onChange:ae}),se=a().createElement(d.Nf,{content:y,onChange:ae}),ue=a().createElement(f.K,{content:y,onChange:ae}),de=function(e,n){console.log("".concat(n," has new width of: ").concat(e))},fe=function(e,n,t){H(!0),me(),B({registry:e,groupId:n,artifactId:t}),ee.createFor(e).testUpdateArtifactContent(n,t,I).then((function(){})).catch((function(e){me(e)}))},me=function(e){_(!0),k(e),H(!1)},ge=function(){_(!1),H(!1),k(void 0)},Ee=function(e){var n;return z?a().createElement(r.Spinner,{className:"spinner"}):e?a().createElement(r.DescriptionList,{isHorizontal:!0},"RuleViolationException"===e.name&&(null===(n=e.causes)||void 0===n?void 0:n.length)>0?e.causes.map((function(e,n){return a().createElement(a().Fragment,{key:"issue-".concat(n)},a().createElement(r.DescriptionListGroup,null,a().createElement(r.DescriptionListTerm,null,"Code"),a().createElement(r.DescriptionListDescription,null,e.description),a().createElement(r.DescriptionListTerm,null,"Context"),a().createElement(r.DescriptionListDescription,null,a().createElement("pre",null,e.context))),a().createElement(r.Divider,null))})):a().createElement(r.CodeBlock,null,a().createElement(r.CodeBlockCode,{id:"code-content"},e.detail))):a().createElement("p",null,"Registry Test completed with no issues.")};return a().createElement(s.tr,{condition:v},a().createElement(r.PageSection,{variant:r.PageSectionVariants.light,id:"section-context"},a().createElement(u.rU,{design:C,dirty:O,onSave:function(){$.updateDesignContent((0,o.pi)((0,o.pi)({},y),{data:I})).then((function(){C&&(C.modifiedOn=new Date,w(C),T(!1)),oe.designSaved(C)})).catch((function(e){console.error("[EditorPage] Failed to save design content: ",e)}))},onFormat:function(){console.info("[EditorPage] Formatting content.");var e=(0,m.Nq)(I,(null==y?void 0:y.contentType)||l.b.APPLICATION_JSON);console.info("[EditorPage] New content is: ",e),P((0,o.pi)((0,o.pi)({},y),{data:e})),F(e)},onDelete:function(){W(!0)},onDownload:re,onRename:function(){return j(!0)},isPanelOpen:U,onRegistrationTestRegistry:fe,onCompareContent:function(){Q(!0)},onExpandTestRegistryCausesPanel:function(e){return me(e)},artifactContent:I})),a().createElement(r.PageSection,{variant:r.PageSectionVariants.light,id:"section-editor"},a().createElement(r.Drawer,{isExpanded:U,isInline:!0,position:"right"},a().createElement(r.DrawerContent,{panelContent:(ie=L,a().createElement(r.DrawerPanelContent,{isResizable:!0,onResize:de,minSize:"35%",id:"test-registry-issues-panel"},a().createElement(r.DrawerHead,null,a().createElement("h2",{className:"pf-c-title pf-m-2xl",tabIndex:U?0:-1,ref:Z},"Test Registration issues"),a().createElement(r.DrawerActions,null,a().createElement(r.Button,{variant:"secondary",onClick:function(){return fe(null==A?void 0:A.registry,null==A?void 0:A.groupId,null==A?void 0:A.artifactId)}},"Retry"),a().createElement(r.DrawerCloseButton,{onClick:ge}))),a().createElement(r.Divider,null),a().createElement(r.DrawerPanelBody,null,Ee(ie))))},a().createElement("div",{className:"editor-parent"},(null==C?void 0:C.type)===l.R.OPENAPI?se:(null==C?void 0:C.type)===l.R.ASYNCAPI?ue:(null==C?void 0:C.type)===l.R.PROTOBUF?le:ce)))),a().createElement(u.h5,{isOpen:K,onClose:function(){Q(!1)},before:null==y?void 0:y.data,after:I}),a().createElement(u.tt,{design:C,isOpen:Y,onRename:function(e){$.renameDesign(null==C?void 0:C.id,e.name,e.summary).then((function(){C&&(C.name=e.name,C.summary=e.summary),j(!1),oe.designRenamed(e)})).catch((function(e){}))},onCancel:function(){return j(!1)}}),a().createElement(u.Qt,{design:C,isOpen:M,onDelete:function(e){$.deleteDesign(e.id).then((function(){oe.designDeleted(e),te.navigateTo("/")})).catch((function(n){console.error("[Editor] Design delete failed: ",n),oe.designDeleteFailed(e,n)})),W(!1)},onDownload:re,onCancel:function(){return W(!1)}}),a().createElement(g.Prompt,{when:O,message:"You have unsaved changes.  Do you really want to leave?"}))};const h=function(e){return a().createElement(v,(0,o.pi)({},e))}}}]);
//# sourceMappingURL=886.91abc139.js.map