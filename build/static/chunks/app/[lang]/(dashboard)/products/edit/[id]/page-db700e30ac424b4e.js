(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8003],{9557:function(){},72141:function(e,i,t){Promise.resolve().then(t.bind(t,64272))},64272:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return $}});var l=t(57437),r=t(33037),s=t(75519),a=t(83719),n=e=>{let{handleDiscardProduct:i,handleEditProduct:t,productData:r}=e;return(0,l.jsxs)("div",{className:"flex flex-wrap sm:items-center justify-between max-sm:flex-col gap-6",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)(a.Z,{variant:"h4",className:"mbe-1",children:"Update"}),(0,l.jsx)(a.Z,{children:"Orders placed across your store"})]}),(0,l.jsxs)("div",{className:"flex flex-wrap max-sm:flex-col gap-4",children:[(0,l.jsx)(s.Z,{variant:"outlined",color:"secondary",onClick:i,children:"Discard"}),(0,l.jsx)(s.Z,{variant:"contained",onClick:t,children:"Edit Product"})]})]})},c=t(14595),d=t(76520),o=t(20248),u=t(55205),x=t(48965),m=t(56800),h=t.n(m),p=t(23705),j=t(42214),g=t(2375),v=t(98041),f=t(38133),Z=t(40804),b=t(32897);t(29641);var y=t(2265);let N=e=>{let{editor:i}=e;return i?(0,l.jsxs)("div",{className:"flex flex-wrap gap-x-3 gap-y-1 pbs-5 pbe-4 pli-5",children:[(0,l.jsx)(Z.Z,{...i.isActive("bold")&&{color:"primary"},variant:"outlined",size:"small",onClick:()=>i.chain().focus().toggleBold().run(),children:(0,l.jsx)("i",{className:h()("ri-bold",{"text-textSecondary":!i.isActive("bold")})})}),(0,l.jsx)(Z.Z,{...i.isActive("underline")&&{color:"primary"},variant:"outlined",size:"small",onClick:()=>i.chain().focus().toggleUnderline().run(),children:(0,l.jsx)("i",{className:h()("ri-underline",{"text-textSecondary":!i.isActive("underline")})})}),(0,l.jsx)(Z.Z,{...i.isActive("italic")&&{color:"primary"},variant:"outlined",size:"small",onClick:()=>i.chain().focus().toggleItalic().run(),children:(0,l.jsx)("i",{className:h()("ri-italic",{"text-textSecondary":!i.isActive("italic")})})}),(0,l.jsx)(Z.Z,{...i.isActive("strike")&&{color:"primary"},variant:"outlined",size:"small",onClick:()=>i.chain().focus().toggleStrike().run(),children:(0,l.jsx)("i",{className:h()("ri-strikethrough",{"text-textSecondary":!i.isActive("strike")})})}),(0,l.jsx)(Z.Z,{...i.isActive({textAlign:"left"})&&{color:"primary"},variant:"outlined",size:"small",onClick:()=>i.chain().focus().setTextAlign("left").run(),children:(0,l.jsx)("i",{className:h()("ri-align-left",{"text-textSecondary":!i.isActive({textAlign:"left"})})})}),(0,l.jsx)(Z.Z,{...i.isActive({textAlign:"center"})&&{color:"primary"},variant:"outlined",size:"small",onClick:()=>i.chain().focus().setTextAlign("center").run(),children:(0,l.jsx)("i",{className:h()("ri-align-center",{"text-textSecondary":!i.isActive({textAlign:"center"})})})}),(0,l.jsx)(Z.Z,{...i.isActive({textAlign:"right"})&&{color:"primary"},variant:"outlined",size:"small",onClick:()=>i.chain().focus().setTextAlign("right").run(),children:(0,l.jsx)("i",{className:h()("ri-align-right",{"text-textSecondary":!i.isActive({textAlign:"right"})})})}),(0,l.jsx)(Z.Z,{...i.isActive({textAlign:"justify"})&&{color:"primary"},variant:"outlined",size:"small",onClick:()=>i.chain().focus().setTextAlign("justify").run(),children:(0,l.jsx)("i",{className:h()("ri-align-justify",{"text-textSecondary":!i.isActive({textAlign:"justify"})})})})]}):null};var P=e=>{let{setTitle:i,title:t,setSNo:s,sNo:n,setDescription:m,description:h,errors:Z,productData:P}=e;(0,y.useEffect)(()=>{if(P){var e,t;i(P.title),s(P.serial_number),m(null===(t=(0,b.ZP)(P.description_html)[0])||void 0===t?void 0:null===(e=t.props)||void 0===e?void 0:e.children[0])}},[P]);let A=(0,p.jE)({extensions:[j.V,v.V.configure({placeholder:"Write something here..."}),f.P.configure({types:["heading","paragraph"]}),g.v],content:h,onUpdate:e=>{let{editor:i}=e;m(i.getHTML())}});return(0,l.jsxs)(d.Z,{children:[(0,l.jsx)(o.Z,{title:"Product Information"}),(0,l.jsxs)(u.Z,{children:[(0,l.jsxs)(r.ZP,{container:!0,spacing:5,className:"mbe-5",children:[(0,l.jsx)(r.ZP,{item:!0,xs:12,children:(0,l.jsx)(x.Z,{fullWidth:!0,label:"Product Name",placeholder:"Enter Product Name",value:t,onChange:e=>i(e.target.value),error:null!=Z&&!!Z.title,helperText:null==Z?void 0:Z.title})}),(0,l.jsx)(r.ZP,{item:!0,xs:12,sm:6,children:(0,l.jsx)(x.Z,{fullWidth:!0,label:"Serial Number",placeholder:"0123-4567",value:n,onChange:e=>s(e.target.value),error:null!=Z&&!!Z.sNo,helperText:null==Z?void 0:Z.sNo})})]}),(0,l.jsx)(a.Z,{className:"mbe-1",children:"Description (Optional)"}),(0,l.jsx)(d.Z,{className:"p-0 border shadow-none",children:(0,l.jsxs)(u.Z,{className:"p-0",children:[(0,l.jsx)(N,{editor:A}),(0,l.jsx)(c.Z,{className:"mli-5"}),(0,l.jsx)(p.kg,{editor:A,className:"bs-[135px] overflow-y-auto flex "})]})})]})]})},A=t(60335),k=t(32184),S=t(7547),_=t(48024),C=t(38746),w=t(31155),I=t(49758),z=t(36933);let D=(0,_.ZP)(z.Z)(e=>{let{theme:i}=e;return{"& .dropzone":{minHeight:"unset",padding:i.spacing(12),[i.breakpoints.down("sm")]:{paddingInline:i.spacing(5)},"&+.MuiList-root .MuiListItem-root .file-name":{fontWeight:i.typography.body1.fontWeight}}}});var E=e=>{let{files:i,setFiles:t,productData:r}=e,[n,c]=(0,y.useState)([]),{getRootProps:x,getInputProps:m}=(0,C.uI)({onDrop:e=>{t(i=>[...i,...e.map(e=>Object.assign(e,{preview:URL.createObjectURL(e)}))])}});(0,y.useEffect)(()=>{(null==r?void 0:r.product_medias)&&t(r.product_medias.map(e=>({media_url:e.media_url,id:e.id,type:"image",name:"image"})))},[r]);let h=e=>e.media_url?(0,l.jsx)("img",{width:38,height:38,alt:e.name,src:e.media_url}):e.type.startsWith("image")?(0,l.jsx)("img",{width:38,height:38,alt:e.name,src:URL.createObjectURL(e)}):(0,l.jsx)("i",{className:"ri-file-text-line"}),p=e=>{t([...i.filter(i=>i.name!==e.name)])},j=i.map(e=>(0,l.jsxs)(S.ZP,{className:"pis-4 plb-3",children:[(0,l.jsxs)("div",{className:"file-details",children:[(0,l.jsx)("div",{className:"file-preview",children:h(e)}),(0,l.jsxs)("div",{children:[(0,l.jsx)(a.Z,{className:"file-name font-medium",color:"text.primary",children:e.name}),(0,l.jsx)(a.Z,{className:"file-size",variant:"body2",children:Math.round(e.size/100)/10>1e3?"".concat((Math.round(e.size/100)/1e4).toFixed(1)," mb"):"".concat((Math.round(e.size/100)/10).toFixed(1)," kb")})]})]}),(0,l.jsx)(A.Z,{onClick:()=>p(e),children:(0,l.jsx)("i",{className:"ri-close-line text-xl"})})]},e.name));return(0,l.jsx)(D,{children:(0,l.jsxs)(d.Z,{children:[(0,l.jsx)(o.Z,{title:"Product Image",action:(0,l.jsx)(a.Z,{component:w.default,color:"primary",className:"font-medium",children:"Add media from URL"}),sx:{"& .MuiCardHeader-action":{alignSelf:"center"}}}),(0,l.jsxs)(u.Z,{children:[(0,l.jsxs)("div",{...x({className:"dropzone"}),children:[(0,l.jsx)("input",{...m()}),(0,l.jsxs)("div",{className:"flex items-center flex-col gap-2 text-center",children:[(0,l.jsx)(I.default,{variant:"rounded",skin:"light",color:"secondary",children:(0,l.jsx)("i",{className:"ri-upload-2-line"})}),(0,l.jsx)(a.Z,{variant:"h4",children:"Drag and Drop Your Image Here."}),(0,l.jsx)(a.Z,{color:"text.disabled",children:"or"}),(0,l.jsx)(s.Z,{variant:"outlined",size:"small",children:"Browse Image"})]})]}),i.length?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(k.Z,{children:j}),(0,l.jsx)("div",{className:"buttons",children:(0,l.jsx)(s.Z,{color:"error",variant:"outlined",onClick:()=>{t([])},children:"Remove All"})})]}):null]})]})})},T=t(28549),U=t(67351),O=t(11656),L=t(19004),B=t(91933),W=t(43808),q=t(44514),M=t(10437),F=e=>{var i;let{status:t,setStatus:r,brandId:s,setBrandId:a,catId:n,setCatId:c,errors:m,productData:h}=e,{data:p}=(0,W.kJ)(q.BD),{data:j}=(0,W.kJ)(q.xH);return(0,y.useEffect)(()=>{h&&(a(h.brand.id),c((null==j?void 0:j.product_categories.find(e=>e.id===h.product_category.id)).id||null))},[h,j]),(0,l.jsxs)(d.Z,{children:[(0,l.jsx)(o.Z,{title:"Organize"}),(0,l.jsx)(u.Z,{children:(0,l.jsxs)("form",{onSubmit:e=>e.preventDefault(),className:"flex flex-col gap-5",children:[s&&(0,l.jsxs)(T.Z,{fullWidth:!0,children:[(0,l.jsx)(U.Z,{children:"Select Product Brand"}),(0,l.jsx)(L.Z,{label:"Select Vendor",value:s,onChange:e=>a(e.target.value),error:null!=m&&!!m.brandId,helperText:null==m?void 0:m.brandId,children:null==p?void 0:null===(i=p.brands)||void 0===i?void 0:i.map((e,i)=>(0,l.jsx)(O.Z,{value:null==e?void 0:e.id,children:null==e?void 0:e.title},i))}),(0,l.jsx)(M.Z,{sx:{color:"red"},children:null==m?void 0:m.brandId})]}),(0,l.jsx)(B.Z,{value:n,onChange:(e,i)=>{c(i.id)},className:"overflow-y-auto h-[40vh]",id:"checkboxes-tags-demo",options:(null==j?void 0:j.product_categories)||[],disableCloseOnSelect:!0,getOptionLabel:e=>(null==e?void 0:e.title)||"",renderOption:(e,i,t)=>{let{selected:l}=t;return(0,y.createElement)("li",{...e,key:i.id},i.title)},renderInput:e=>(0,l.jsx)(x.Z,{...e,label:"Category",placeholder:"select category"})})]})})]})};t(42338);var R=t(1487),H=e=>{let{price:i,setPrice:t,errors:r,productData:s}=e;return(0,y.useEffect)(()=>{s&&t(s.price)},[s]),(0,l.jsxs)(d.Z,{children:[(0,l.jsx)(o.Z,{title:"Pricing"}),(0,l.jsx)(u.Z,{children:(0,l.jsx)(R.Z,{children:(0,l.jsx)(x.Z,{fullWidth:!0,label:"Base Price",placeholder:"Enter Base Price",className:"mbe-5",value:i,onChange:e=>t(e.target.value),error:null!=r&&!!r.price,helperText:null==r?void 0:r.price})})})]})},J=t(23944),V=t(1552),Y=t(47380),G=t(9188),K=t(91326),Q=t(34364),X=t(16463),$=()=>{let{id:e}=(0,X.useParams)(),{setGlobalMsg:i,loading:t,setLoading:s}=(0,G.q)(),[a,c]=(0,y.useState)(),[d,o]=(0,y.useState)(),[u,x]=(0,y.useState)(),[m,h]=(0,y.useState)(),[p,j]=(0,y.useState)(),[g,v]=(0,y.useState)(),[f,Z]=(0,y.useState)(),[b,N]=(0,y.useState)([]),[A]=(0,J.D)(V.J9),[k]=(0,J.D)(V.Sf),{data:S}=(0,W.kJ)(q.yZ,{variables:{id:e}}),_=S.products_by_pk,C=async()=>{s(!0);let e={},t=!1;if(a||(e.title="Title field is required",t=!0),a||(e.title="Title field is required",t=!0),p||(e.price="Price field is required",t=!0),g||(e.sNo="Serial Number field is required",t=!0),u||(e.brandId="Brand field is required",t=!0),m||(e.catId="Category field is required",t=!0),t){Z({...e}),s(!1);return}try{await Promise.all(b.map(async e=>{let i=await k({variables:{content_type:"image",folder:"products"}}),t=await (0,Q.c)(e,i.data.getFileUploadUrl.fileUploadUrl,"image");return{media_type:"image",media_url:t}})),await A({variables:{id:_.id,title:a,description_html:d,brand_id:u,category_id:m,serial_number:g,price:p}}),s(!1),c(""),j(""),o(""),v(""),x(""),h(""),i("✅ Product has been updated")}catch(e){i("❌ Add Product Error"),console.log(e.response)}};return t?(0,l.jsx)(K.Z,{sx:{textAlign:"center"},children:"Loading..."}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r.ZP,{container:!0,spacing:6,children:[(0,l.jsx)(r.ZP,{item:!0,xs:12,children:(0,l.jsx)(n,{handleDiscardProduct:()=>{c(""),o(""),j(0),v(0),h(""),x("")},handleEditProduct:C,productData:_})}),(0,l.jsx)(r.ZP,{item:!0,xs:12,md:8,children:(0,l.jsxs)(r.ZP,{container:!0,spacing:6,children:[(0,l.jsx)(r.ZP,{item:!0,xs:12,children:(0,l.jsx)(P,{setTitle:c,title:a,setSNo:v,sNo:g,setDescription:o,description:d,errors:f,productData:_})}),(0,l.jsx)(r.ZP,{item:!0,xs:12,children:(0,l.jsx)(E,{files:b,setFiles:N,productData:_})})]})}),(0,l.jsx)(r.ZP,{item:!0,xs:12,md:4,children:(0,l.jsxs)(r.ZP,{container:!0,spacing:6,children:[(0,l.jsx)(r.ZP,{item:!0,xs:12,children:(0,l.jsx)(H,{price:p,setPrice:j,errors:f,productData:_})}),(0,l.jsx)(r.ZP,{item:!0,xs:12,children:(0,l.jsx)(F,{brandId:u,setBrandId:x,catId:m,setCatId:h,errors:f,productData:_})})]})})]}),(0,l.jsx)(Y.Z,{})]})}}},function(e){e.O(0,[83,5223,1544,3572,7902,1441,9580,9855,8329,7800,7660,8965,6715,6805,8325,6101,7212,5313,481,7172,7683,3197,3550,3647,1757,3694,3248,4232,6180,2603,4962,2971,7023,1744],function(){return e(e.s=72141)}),_N_E=e.O()}]);