import{N as x,u as v,aa as l,r as _,ab as O,ac as q,ad as H,b as M,W as N,ae as D,C as k,E as b,U as B,af as E}from"./ByR1r3-N.js";const I=s=>s==="defer"||s===!1;function F(...s){var h;const r=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(r);let[t,f,e={}]=s;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof f!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const a=v(),P=f,w=()=>l.value,C=()=>a.isHydrating?a.payload.data[t]:a.static.data[t];e.server=e.server??!0,e.default=e.default??w,e.getCachedData=e.getCachedData??C,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0,e.deep=e.deep??l.deep,e.dedupe=e.dedupe??"cancel";const g=e.getCachedData(t,a),m=g!=null;if(!a._asyncData[t]||!e.immediate){(h=a.payload._errors)[t]??(h[t]=l.errorValue);const o=e.deep?_:O;a._asyncData[t]={data:o(m?g:e.default()),pending:_(!m),error:q(a.payload._errors,t),status:_("idle"),_default:e.default}}const n={...a._asyncData[t]};delete n._default,n.refresh=n.execute=(o={})=>{if(a._asyncDataPromises[t]){if(I(o.dedupe??e.dedupe))return a._asyncDataPromises[t];a._asyncDataPromises[t].cancelled=!0}if(o._initial||a.isHydrating&&o._initial!==!1){const c=o._initial?g:e.getCachedData(t,a);if(c!=null)return Promise.resolve(c)}n.pending.value=!0,n.status.value="pending";const d=new Promise((c,i)=>{try{c(P(a))}catch(u){i(u)}}).then(async c=>{if(d.cancelled)return a._asyncDataPromises[t];let i=c;e.transform&&(i=await e.transform(c)),e.pick&&(i=T(i,e.pick)),a.payload.data[t]=i,n.data.value=i,n.error.value=l.errorValue,n.status.value="success"}).catch(c=>{if(d.cancelled)return a._asyncDataPromises[t];n.error.value=k(c),n.data.value=b(e.default()),n.status.value="error"}).finally(()=>{d.cancelled||(n.pending.value=!1,delete a._asyncDataPromises[t])});return a._asyncDataPromises[t]=d,a._asyncDataPromises[t]},n.clear=()=>R(a,t);const y=()=>n.refresh({_initial:!0}),p=e.server!==!1&&a.payload.serverRendered;{const o=B();if(o&&p&&e.immediate&&!o.sp&&(o.sp=[]),o&&!o._nuxtOnBeforeMountCbs){o._nuxtOnBeforeMountCbs=[];const i=o._nuxtOnBeforeMountCbs;H(()=>{i.forEach(u=>{u()}),i.splice(0,i.length)}),M(()=>i.splice(0,i.length))}p&&a.isHydrating&&(n.error.value||g!=null)?(n.pending.value=!1,n.status.value=n.error.value?"error":"success"):o&&(a.payload.serverRendered&&a.isHydrating||e.lazy)&&e.immediate?o._nuxtOnBeforeMountCbs.push(y):e.immediate&&y();const d=E();if(e.watch){const i=N(e.watch,()=>n.refresh());d&&D(i)}const c=a.hook("app:data:refresh",async i=>{(!i||i.includes(t))&&await n.refresh()});d&&D(c)}const j=Promise.resolve(a._asyncDataPromises[t]).then(()=>n);return Object.assign(j,n),j}async function G(s){await new Promise(t=>x(t)),await v().hooks.callHookParallel("app:data:refresh",void 0)}function R(s,r){r in s.payload.data&&(s.payload.data[r]=void 0),r in s.payload._errors&&(s.payload._errors[r]=l.errorValue),s._asyncData[r]&&(s._asyncData[r].data.value=b(s._asyncData[r]._default()),s._asyncData[r].error.value=l.errorValue,s._asyncData[r].pending.value=!1,s._asyncData[r].status.value="idle"),r in s._asyncDataPromises&&(s._asyncDataPromises[r]&&(s._asyncDataPromises[r].cancelled=!0),s._asyncDataPromises[r]=void 0)}function T(s,r){const t={};for(const f of r)t[f]=s[f];return t}const S={content_en:"v3.3.0--3aATGZzMHn",content_fr:"v3.3.0--W6ZjysakpF",articles_en:"v3.3.0--KiuZ2HIT79",articles_fr:"v3.3.0--nvnLFvPxpL",projects_en:"v3.3.0--JDG0kztZug",projects_fr:"v3.3.0--DlGcjJix0w",stack:"v3.3.0--s7yNu40FC7",faq_en:"v3.3.0--w5UPrDC54R",faq_fr:"v3.3.0--d4NkEAHCQG"},V={content_en:"_content_content_en",content_fr:"_content_content_fr",articles_en:"_content_articles_en",articles_fr:"_content_articles_fr",projects_en:"_content_projects_en",projects_fr:"_content_projects_fr",stack:"_content_stack",faq_en:"_content_faq_en",faq_fr:"_content_faq_fr",info:"_content_info"},Z={content_en:{type:"page",fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json",sitemap:"json",robots:"json",head:"json",schemaOrg:"json",ogImage:"json",date:"string"}},content_fr:{type:"page",fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json",sitemap:"json",robots:"json",head:"json",schemaOrg:"json",ogImage:"json",date:"string"}},articles_en:{type:"page",fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json",sitemap:"json",robots:"json",head:"json",schemaOrg:"json",ogImage:"json",date:"string",image:"string",readingTime:"string",tags:"json"}},articles_fr:{type:"page",fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json",sitemap:"json",robots:"json",head:"json",schemaOrg:"json",ogImage:"json",date:"string",image:"string",readingTime:"string",tags:"json"}},projects_en:{type:"data",fields:{id:"string",stem:"string",extension:"string",meta:"json",name:"string",image:"string",link:"string",release:"string",date:"string",featured:"boolean"}},projects_fr:{type:"data",fields:{id:"string",stem:"string",extension:"string",meta:"json",name:"string",image:"string",link:"string",release:"string",date:"string",featured:"boolean"}},stack:{type:"data",fields:{id:"string",stem:"string",extension:"string",meta:"json",items:"json"}},faq_en:{type:"data",fields:{id:"string",stem:"string",extension:"string",meta:"json",title:"string",subtitle:"string",faqQuestions:"json"}},faq_fr:{type:"data",fields:{id:"string",stem:"string",extension:"string",meta:"json",title:"string",subtitle:"string",faqQuestions:"json"}},info:{type:"data",fields:{}}};export{Z as a,S as c,G as r,V as t,F as u};
