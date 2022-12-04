"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[987],{3779:function(a,t,n){n(2791);t.Z=n.p+"static/media/transactionSprite.39e4ce06c63f00d03dae5b603deee49f.svg"},9987:function(a,t,n){n.r(t),n.d(t,{default:function(){return ta}});var e=n(2982),r=n(885),c=n(2791),o=n(9434),s=n(3868),i=n(9831),d=n(1951),l=n(9085),u=(n(5462),n(5607)),m=n(8880),_=n(9104),f=n(5705),h=n(9513),p=n.n(h),x=n(2142),b=n(1724),g=(n(8639),"ModalAddTransaction_backdrop__ymdOV"),T="ModalAddTransaction_modal__1EjiE",v="ModalAddTransaction_modalForm__1AhiV",D="ModalAddTransaction_closeBtn__z5wiv",j="ModalAddTransaction_modalTitle__zFsOy",N="ModalAddTransaction_typeWrapper__jMIyE",y="ModalAddTransaction_typeCheckbox__R8knk",I="ModalAddTransaction_customCheckbox__scFT+",M="ModalAddTransaction_inactive__2gLBf",C="ModalAddTransaction_income__jBYnS ModalAddTransaction_inactive__2gLBf",E="ModalAddTransaction_expense__mBCZm ModalAddTransaction_inactive__2gLBf",A="ModalAddTransaction_typeLabel__wjjkG",w="ModalAddTransaction_amountAndDate__WlFAo",R="ModalAddTransaction_amountInput__da7mf ModalAddTransaction_amountAndDateInputs__haQrw",Z="ModalAddTransaction_customDateInput__RLVr2 ModalAddTransaction_amountAndDateInputs__haQrw",k="ModalAddTransaction_calendarIcon__dS0Ci",B="ModalAddTransaction_commentInput__W3qu2",S="ModalAddTransaction_btnWrapper__Z-Xf3",H="ModalAddTransaction_addBtn__lmge2",O="ModalAddTransaction_cancelBtn__9MJd8 ModalAddTransaction_addBtn__lmge2",q="ModalAddTransaction_chevron__MtGRK",F="ModalAddTransaction_chevronTurn__NqZRj ModalAddTransaction_chevron__MtGRK",L="ModalAddTransaction_validatoinError__Ik09z",z=n(3779),P=n(184),X=(0,c.forwardRef)((function(a,t){var n=a.value,e=a.onClick;return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("input",{value:n,className:Z,onClick:e,onChange:e,ref:t,required:!0}),(0,P.jsx)("svg",{className:k,width:18,height:20,onClick:e,children:(0,P.jsx)("use",{href:z.Z+"#icon-calendar"})})]})})),G=n(1413),K=n(5930),W=function(a){var t=a.selectProps;return(0,P.jsx)("div",{className:t.menuIsOpen?F:q})},J={control:function(){return{display:"flex",alignItems:"center",border:"none",borderRadius:"0",borderBottom:"1px solid #E0E0E0",padding:"8px",marginBottom:"40px",outline:"none",fontSize:"18px",lineHeight:"1.5",paddingLeft:"20px",":hover":{backgroundColor:"#ff659614"}}},placeholder:function(a){return(0,G.Z)((0,G.Z)({},a),{},{color:"#BDBDBD"})},option:function(a,t){var n=t.isFocused;return(0,G.Z)((0,G.Z)({},a),{},{backgroundColor:n&&"#fff",fontWeight:n&&"700",color:n&&"#FF6596",padding:"14px 0 17px"})},menu:function(a){return(0,G.Z)((0,G.Z)({},a),{},{fontSize:"18px",width:"100%",lineHeight:1.5,paddingLeft:"20px",backgroundColor:"#FFFFFFB2",backdropFilter:"blur(25px)",boxShadow:"0px 6px 15px rgba(0, 0, 0, 0.1)",borderRadius:"20px"})}};function V(a){var t=a.setCategoryId,n=(0,o.v9)(_.us).filter((function(a){return"EXPENSE"===a.type})).map((function(a){return{value:a.id,label:a.name}}));return(0,P.jsx)(K.ZP,{options:n,onChange:function(a){return t(a.value)},placeholder:"Select a category",styles:J,unstyled:!0,components:{DropdownIndicator:W},required:!0})}var Q=n(4164);function Y(a){var t=a.editModalOpen,n=a.setEditModalOpen,e=a.transactionID,s=(0,c.useState)(new Date),i=(0,r.Z)(s,2),d=i[0],l=i[1],u=(0,c.useState)(""),h=(0,r.Z)(u,2),Z=h[0],k=h[1],q=(0,o.v9)(_.ig),F=(0,o.I0)(),z=q.find((function(a){return a.id===e}));(0,c.useEffect)((function(){F((0,m.CP)())}),[F]);var G=(0,c.useCallback)((function(){F((0,x.$)()),n(!1),F((0,m.f1)())}),[F,n]);(0,c.useEffect)((function(){var a=function(a){"Escape"===a.code&&G()};return document.addEventListener("keydown",a),function(){return document.removeEventListener("keydown",a)}}),[F,G]);var K=(0,f.TA)({initialValues:{type:!t||"EXPENSE"===z.type,amount:t?Math.abs(z.amount):"",comment:t?z.comment:""},validationSchema:b.Ry({type:b.Xg(),amount:b.Rx().required("*Required"),comment:b.Z_().max(40,"40 characters max")}),onSubmit:function(a){var n=a.type,r=a.amount,c=a.comment,o={transactionDate:d,comment:c,categoryId:n?Z:"063f1132-ba5d-42b4-951d-44011ca46262",amount:n?-1*Number(r):Number(r),type:n?"EXPENSE":"INCOME"};F(t?(0,m.vF)({transactionID:e,newTransaction:o}):(0,m.dT)(o)),G()}}),W=K.handleChange,J=K.handleSubmit,Y=K.values,$=K.errors,U=K.touched;return(0,Q.createPortal)((0,P.jsx)("div",{className:g,onClick:function(a){a.target===a.currentTarget&&G()},children:(0,P.jsxs)("div",{className:T,children:[(0,P.jsx)("button",{className:D,onClick:G,type:"button","aria-label":"close button"}),(0,P.jsxs)("form",{className:v,onSubmit:J,children:[(0,P.jsx)("h2",{className:j,children:t?"Edit Transaction":"Add transaction"}),(0,P.jsxs)("div",{className:N,children:[(0,P.jsx)("div",{className:Y.type?M:C,children:"Income"}),(0,P.jsxs)("label",{className:A,children:[(0,P.jsx)("input",{className:y,name:"type",type:"checkbox",checked:Y.type,onChange:W}),(0,P.jsx)("div",{className:I})]}),(0,P.jsx)("div",{className:Y.type?E:M,children:"Expense"})]}),Y.type&&(0,P.jsx)(V,{setCategoryId:k}),U.categoryId&&$.categoryId?(0,P.jsx)("div",{className:L,children:$.categoryId}):null,(0,P.jsxs)("div",{className:w,children:[(0,P.jsx)("input",{className:R,name:"amount",type:"number",placeholder:"0.00",value:Y.amount,onChange:W,required:!0}),U.amount&&$.amount?(0,P.jsx)("div",{className:L,children:$.amount}):null,(0,P.jsx)(p(),{selected:d,dateFormat:"dd.MM.yyyy",calendarStartDay:1,onChange:l,customInput:(0,P.jsx)(X,{})})]}),(0,P.jsx)("textarea",{className:B,name:"comment",type:"text",placeholder:"Comment",value:Y.comment,onChange:W}),U.comment&&$.comment?(0,P.jsx)("div",{className:L,children:$.comment}):null,(0,P.jsxs)("div",{className:S,children:[(0,P.jsx)("button",{className:H,type:"submit",children:t?"Edit":"Add"}),(0,P.jsx)("button",{className:O,type:"button",onClick:G,children:"Cancel"})]})]})]})}),document.querySelector("#modal-root"))}var $={transactions:"Transactions_transactions__mCk1h",transactionsTable:"Transactions_transactionsTable__ryrv4",tableHeaderData:"Transactions_tableHeaderData__evLZH",tableHeaderDataRight:"Transactions_tableHeaderDataRight__qy5Mh Transactions_tableHeaderData__evLZH",tableBody:"Transactions_tableBody__S5mEd",tableData:"Transactions_tableData__ZjqIe",firstTableData:"Transactions_firstTableData__CXGrZ",lastTableData:"Transactions_lastTableData__1fwGS",tableDataRight:"Transactions_tableDataRight__JGRaS Transactions_tableData__ZjqIe",tableDataIncome:"Transactions_tableDataIncome__qmyKL Transactions_tableDataRight__JGRaS Transactions_tableData__ZjqIe",tableDataExpense:"Transactions_tableDataExpense__QrjbT Transactions_tableDataRight__JGRaS Transactions_tableData__ZjqIe",editBtn:"Transactions_editBtn__IwqXK",editBtnIcon:"Transactions_editBtnIcon__2onRL",mobTransaction:"Transactions_mobTransaction__AAP2W",transactionRowIncome:"Transactions_transactionRowIncome__JaK0H",transactionRowExpense:"Transactions_transactionRowExpense__ocPci Transactions_transactionRowIncome__JaK0H",transactionHeader:"Transactions_transactionHeader__cAcKw",transactionData:"Transactions_transactionData__hOzec",transactionDataIncome:"Transactions_transactionDataIncome__q22X4 Transactions_transactionData__hOzec",transactionDataExpense:"Transactions_transactionDataExpense__XWmD1 Transactions_transactionData__hOzec"},U=n(4360),aa="";var ta=function(){var a,t=(0,c.useState)(!1),n=(0,r.Z)(t,2),f=n[0],h=n[1],p=(0,c.useState)([]),b=(0,r.Z)(p,2),g=b[0],T=b[1],v=(0,o.v9)(_.Yh),D=(0,o.v9)(_.us),j=(0,o.v9)(_.ig),N=(0,o.v9)(_.zh),y=(0,o.I0)(),I=(0,c.useState)(!1),M=(0,r.Z)(I,2),C=M[0],E=M[1];function A(a){var t="incr"===a.currentTarget.dataset.flag;if("Sum"===(null===a||void 0===a?void 0:a.target.textContent)){if(t)return T((function(a){return(0,e.Z)(a).sort((function(a,t){return Math.abs(t.amount)-Math.abs(a.amount)}))})),void(a.currentTarget.dataset.flag="decr");T((function(a){return(0,e.Z)(a).sort((function(a,t){return Math.abs(a.amount)-Math.abs(t.amount)}))})),a.currentTarget.dataset.flag="incr"}if("Date"===(null===a||void 0===a?void 0:a.target.textContent)){if(t)return T((function(a){return(0,e.Z)(a).sort((function(a,t){return(0,s.Z)((0,i.default)(t.transactionDate),(0,i.default)(a.transactionDate))}))})),void(a.currentTarget.dataset.flag="decr");T((function(a){return(0,e.Z)(a).sort((function(a,t){return(0,s.Z)((0,i.default)(a.transactionDate),(0,i.default)(t.transactionDate))}))})),a.currentTarget.dataset.flag="incr"}if("Type"===(null===a||void 0===a?void 0:a.target.textContent)){if(t)return T((function(a){return(0,e.Z)(a).sort((function(a,t){return t.type.localeCompare(a.type)}))})),void(a.currentTarget.dataset.flag="decr");T((function(a){return(0,e.Z)(a).sort((function(a,t){return a.type.localeCompare(t.type)}))})),a.currentTarget.dataset.flag="incr"}if("Category"===(null===a||void 0===a?void 0:a.target.textContent)){if(t)return T((function(a){return(0,e.Z)(a).sort((function(a,t){var n,e;return null===(n=D.find((function(a){return a.id===t.categoryId})))||void 0===n?void 0:n.name.localeCompare(null===(e=D.find((function(t){return t.id===a.categoryId})))||void 0===e?void 0:e.name)}))})),void(a.currentTarget.dataset.flag="decr");T((function(a){return(0,e.Z)(a).sort((function(a,t){var n,e;return null===(n=D.find((function(t){return t.id===a.categoryId})))||void 0===n?void 0:n.name.localeCompare(null===(e=D.find((function(a){return a.id===t.categoryId})))||void 0===e?void 0:e.name)}))})),a.currentTarget.dataset.flag="incr"}if("Balance"===(null===a||void 0===a?void 0:a.target.textContent)){if(t)return T((function(a){return(0,e.Z)(a).sort((function(a,t){return t.balanceAfter-a.balanceAfter}))})),void(a.currentTarget.dataset.flag="decr");T((function(a){return(0,e.Z)(a).sort((function(a,t){return a.balanceAfter-t.balanceAfter}))})),a.currentTarget.dataset.flag="incr"}}return window.matchMedia("(max-width: 767px)").addEventListener("change",(function(a){a.matches?E(!0):E(!1)})),(0,c.useEffect)((function(){y((0,m.CP)()),T((0,e.Z)(j).reverse().sort((function(a,t){return(0,s.Z)((0,i.default)(a.transactionDate),(0,i.default)(t.transactionDate))})))}),[y,j]),N&&l.Am.error(N),C&&(a=v,document.body.style.overflow=a?"hidden":"visible"),(0,P.jsxs)("section",{className:$.transactions,children:[(0,P.jsx)(u.Z,{queries:U.w,children:function(a){return a.mobile||a.response?(0,P.jsx)("ul",{children:g.map((function(a){var t,n=a.id,e=a.transactionDate,r=a.type,c=a.categoryId,o=a.comment,s=a.amount,l=a.balanceAfter;return(0,P.jsxs)("li",{className:$.mobTransaction,children:[(0,P.jsxs)("div",{className:"INCOME"===r?$.transactionRowIncome:$.transactionRowExpense,children:[(0,P.jsx)("p",{className:$.transactionHeader,children:"Date"}),(0,P.jsx)("p",{className:$.transactionData,children:(0,d.default)((0,i.default)(e),"dd.MM.yyyy")})]}),(0,P.jsxs)("div",{className:"INCOME"===r?$.transactionRowIncome:$.transactionRowExpense,children:[(0,P.jsx)("p",{className:$.transactionHeader,children:"Type"}),(0,P.jsx)("p",{className:$.transactionData,children:"INCOME"===r?"+":"-"})]}),(0,P.jsxs)("div",{className:"INCOME"===r?$.transactionRowIncome:$.transactionRowExpense,children:[(0,P.jsx)("p",{className:$.transactionHeader,children:"Category"}),(0,P.jsx)("p",{className:$.transactionData,children:null===(t=D.find((function(a){return a.id===c})))||void 0===t?void 0:t.name})]}),(0,P.jsxs)("div",{className:"INCOME"===r?$.transactionRowIncome:$.transactionRowExpense,children:[(0,P.jsx)("p",{className:$.transactionHeader,children:"Comment"}),(0,P.jsx)("p",{className:$.transactionData,children:o})]}),(0,P.jsxs)("div",{className:"INCOME"===r?$.transactionRowIncome:$.transactionRowExpense,children:[(0,P.jsx)("p",{className:$.transactionHeader,children:"Sum"}),(0,P.jsx)("p",{className:"INCOME"===r?$.transactionDataIncome:$.transactionDataExpense,children:Math.abs(s)})]}),(0,P.jsxs)("div",{className:"INCOME"===r?$.transactionRowIncome:$.transactionRowExpense,children:[(0,P.jsx)("p",{className:$.transactionHeader,children:"Balance"}),(0,P.jsx)("p",{className:$.transactionData,children:l})]})]},n)}))}):(0,P.jsxs)("table",{className:$.transactionsTable,children:[(0,P.jsx)("thead",{children:(0,P.jsxs)("tr",{className:$.tableHeaderRow,children:[(0,P.jsx)("th",{className:$.tableHeaderData,onClick:A,"data-flag":"incr",children:"Date"}),(0,P.jsx)("th",{className:$.tableHeaderData,onClick:A,"data-flag":"incr",children:"Type"}),(0,P.jsx)("th",{className:$.tableHeaderData,onClick:function(a){return A(a)},"data-flag":"incr",children:"Category"}),(0,P.jsx)("th",{className:$.tableHeaderData,children:"Comment"}),(0,P.jsx)("th",{className:$.tableHeaderDataRight,"data-flag":"incr",onClick:A,children:"Sum"}),(0,P.jsx)("th",{className:$.tableHeaderDataRight,"data-flag":"incr",onClick:A,children:"Balance"}),(0,P.jsx)("th",{className:$.tableHeaderDataRight,children:"Edit"})]})}),(0,P.jsx)("tbody",{className:$.tableBody,children:g.map((function(a,t,n){var e,r=a.id,c=a.transactionDate,o=a.type,s=a.categoryId,l=a.comment,u=a.amount,_=a.balanceAfter;return(0,P.jsxs)("tr",{children:[(0,P.jsx)("td",{className:"".concat($.tableData," ").concat(0===t?$.firstTableData:""," ").concat(t===n.length-1?$.lastTableData:""),children:(0,d.default)((0,i.default)(c),"dd.MM.yyyy")}),(0,P.jsx)("td",{className:"".concat($.tableData," ").concat(0===t?$.firstTableData:""," ").concat(t===n.length-1?$.lastTableData:""),children:"INCOME"===o?"+":"-"}),(0,P.jsx)("td",{className:"".concat($.tableData," ").concat(0===t?$.firstTableData:""," ").concat(t===n.length-1?$.lastTableData:""),children:null===(e=D.find((function(a){return a.id===s})))||void 0===e?void 0:e.name}),(0,P.jsx)("td",{className:"".concat($.tableData," ").concat(0===t?$.firstTableData:""," ").concat(t===n.length-1?$.lastTableData:""),children:l}),(0,P.jsx)("td",{className:"".concat("INCOME"===o?$.tableDataIncome:$.tableDataExpense," ").concat(0===t?$.firstTableData:""," ").concat(t===n.length-1?$.lastTableData:""),children:Math.abs(u)}),(0,P.jsx)("td",{className:"".concat($.tableDataRight," ").concat(0===t?$.firstTableData:""," ").concat(t===n.length-1?$.lastTableData:""),children:_}),(0,P.jsxs)("td",{className:"".concat($.tableDataRight," ").concat(0===t?$.firstTableData:""," ").concat(t===n.length-1?$.lastTableData:""),children:[(0,P.jsx)("button",{className:$.editBtn,onClick:function(){aa=r,y((0,x.$)()),h(!0)},type:"button",children:(0,P.jsx)("svg",{className:$.editBtnIcon,width:15,height:15,children:(0,P.jsx)("use",{href:"".concat(z.Z,"#icon-pencil")})})}),(0,P.jsx)("button",{className:$.editBtn,onClick:function(){return function(a){y((0,m.Ks)(a)),y((0,m.f1)())}(r)},type:"button",children:(0,P.jsx)("svg",{className:$.editBtnIcon,width:15,height:15,children:(0,P.jsx)("use",{href:"".concat(z.Z,"#icon-bin")})})})]})]},r)}))})]})}}),v&&(0,P.jsx)(Y,{editModalOpen:f,setEditModalOpen:h,transactionID:aa}),(0,P.jsx)(l.Ix,{})]})}},9104:function(a,t,n){n.d(t,{Yh:function(){return o},ig:function(){return e},us:function(){return r},zh:function(){return c}});var e=function(a){return a.transactions.transactions},r=function(a){return a.transactions.categories},c=function(a){return a.transactions.error},o=function(a){return a.transactions.isTransactionModalOpen}}}]);
//# sourceMappingURL=987.4c651677.chunk.js.map