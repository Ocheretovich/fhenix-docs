"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[9719],{4670:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(5893),i=t(1151),s=t(4866),a=t(5162);const o={sidebar_position:1,description:"Installation of contracts and creating a basic contract"},c="\ud83d\udc24 Getting Started",l={id:"devdocs/Writing Smart Contracts/FHE-sol",title:"\ud83d\udc24 Getting Started",description:"Installation of contracts and creating a basic contract",source:"@site/docs/devdocs/Writing Smart Contracts/FHE-sol.mdx",sourceDirName:"devdocs/Writing Smart Contracts",slug:"/devdocs/Writing Smart Contracts/FHE-sol",permalink:"/docs/devdocs/Writing Smart Contracts/FHE-sol",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/tree/main/docs/devdocs/Writing Smart Contracts/FHE-sol.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Installation of contracts and creating a basic contract"},sidebar:"docsSidebar",previous:{title:"FHE Contracts",permalink:"/docs/category/fhe-contracts"},next:{title:"\ud83d\udc49 Inputs",permalink:"/docs/devdocs/Writing Smart Contracts/User-Inputs"}},d={},u=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Key Concepts and Types",id:"key-concepts-and-types",level:3},{value:"<code>euint</code> - Encrypted Unsigned Integer",id:"euint---encrypted-unsigned-integer",level:3},{value:"<code>inEuint</code> - Input Encrypted Unsigned Integer",id:"ineuint---input-encrypted-unsigned-integer",level:3},{value:"Core Functions of FHE.sol",id:"core-functions-of-fhesol",level:2},{value:"<code>asEuint</code> - Convert to Encrypted Unsigned Integer",id:"aseuint---convert-to-encrypted-unsigned-integer",level:3},{value:"<code>decrypt</code> - Decrypt Encrypted Data",id:"decrypt---decrypt-encrypted-data",level:3},{value:"Arithmetic Operations",id:"arithmetic-operations",level:3},{value:"Comparison Operations",id:"comparison-operations",level:3},{value:"Example Use Cases",id:"example-use-cases",level:2},{value:"Encrypting a Value",id:"encrypting-a-value",level:3},{value:"Decrypting a Value",id:"decrypting-a-value",level:3},{value:"Performing Encrypted Arithmetic",id:"performing-encrypted-arithmetic",level:3},{value:"Conditional Logic with Encrypted Values",id:"conditional-logic-with-encrypted-values",level:3},{value:"Integrating FHE into Smart Contracts",id:"integrating-fhe-into-smart-contracts",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"-getting-started",children:"\ud83d\udc24 Getting Started"}),"\n",(0,r.jsxs)(n.p,{children:["A core component of the Fhenix ecosystem is the ",(0,r.jsx)(n.code,{children:"FHE.sol"})," solidity library."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"FHE.sol"})," is a Solidity library designed to facilitate the use of fully homomorphic encryption within Ethereum smart contracts. FHE enables computations to be performed on encrypted data (ciphertexts) without needing to decrypt them first. The results of such computations, when decrypted, are identical to what would have been obtained if the operations had been performed on the unencrypted data (plaintexts)."]}),"\n",(0,r.jsxs)(n.p,{children:["To find a full list of functions and their descriptions, please refer to the ",(0,r.jsx)(n.a,{href:"/docs/devdocs/Solidity%20API/FHE",children:"FHE.sol documentation"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(n.p,{children:["To get started with ",(0,r.jsx)(n.code,{children:"FHE.sol"}),", you need to install it as a dependency in your Solidity project. You can do this using ",(0,r.jsx)(n.code,{children:"npm"}),", ",(0,r.jsx)(n.code,{children:"yarn"})," or our personal favorite - ",(0,r.jsx)(n.code,{children:"pnpm"}),". Open your terminal and navigate to your project's directory, then run the following:"]}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(a.Z,{value:"npm",label:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install @fhenixprotocol/contracts;\n"})})}),(0,r.jsx)(a.Z,{value:"yarn",label:"yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn install @fhenixprotocol/contracts;\n"})})}),(0,r.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm install @fhenixprotocol/contracts;\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.h3,{id:"key-concepts-and-types",children:"Key Concepts and Types"}),"\n",(0,r.jsxs)(n.h3,{id:"euint---encrypted-unsigned-integer",children:[(0,r.jsx)(n.code,{children:"euint"})," - Encrypted Unsigned Integer"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": Represents an encrypted unsigned integer. This type is used for encrypted variables within smart contracts.\nThe currently supported types are: ",(0,r.jsx)(n.code,{children:"ebool"}),", ",(0,r.jsx)(n.code,{children:"euint8"}),", ",(0,r.jsx)(n.code,{children:"euint16"})," & ",(0,r.jsx)(n.code,{children:"euint32"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage"}),": Store and manipulate encrypted values within smart contracts."]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"ineuint---input-encrypted-unsigned-integer",children:[(0,r.jsx)(n.code,{children:"inEuint"})," - Input Encrypted Unsigned Integer"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": A type used for passing encrypted values as function arguments. It's the format in which encrypted data is input into the smart contract functions that process encrypted values.\nThe currently supported types are ",(0,r.jsx)(n.code,{children:"inEuint8"}),", ",(0,r.jsx)(n.code,{children:"inEuint16"})," & ",(0,r.jsx)(n.code,{children:"inEuint32"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage"}),": Pass typed encrypted values as function arguments."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"core-functions-of-fhesol",children:"Core Functions of FHE.sol"}),"\n",(0,r.jsxs)(n.h3,{id:"aseuint---convert-to-encrypted-unsigned-integer",children:[(0,r.jsx)(n.code,{children:"asEuint"})," - Convert to Encrypted Unsigned Integer"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Purpose"}),": Converts a plaintext number or an ",(0,r.jsx)(n.code,{children:"inEuint"})," encrypted input into an ",(0,r.jsx)(n.code,{children:"euint"})," type."]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"decrypt---decrypt-encrypted-data",children:[(0,r.jsx)(n.code,{children:"decrypt"})," - Decrypt Encrypted Data"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Purpose"}),": Decrypts an ",(0,r.jsx)(n.code,{children:"euint"})," encrypted value back to its plaintext form. If the value should only be revealed to a specific address, the ",(0,r.jsx)(n.code,{children:"sealoutput"})," function should be used instead. Learn more abut sealing ",(0,r.jsx)(n.a,{href:"../Returning-Data.md",children:"here"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"arithmetic-operations",children:"Arithmetic Operations"}),"\n",(0,r.jsxs)(n.p,{children:["FHE.sol supports encrypted arithmetic operations like addition and subtraction. These operations can be performed directly on ",(0,r.jsx)(n.code,{children:"euint"})," types, enabling encrypted computations."]}),"\n",(0,r.jsx)(n.h3,{id:"comparison-operations",children:"Comparison Operations"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Purpose"}),": Perform comparisons between encrypted values (e.g., greater than, less than)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage Example"}),": Make decisions based on encrypted values without revealing their contents."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example-use-cases",children:"Example Use Cases"}),"\n",(0,r.jsx)(n.h3,{id:"encrypting-a-value",children:"Encrypting a Value"}),"\n",(0,r.jsxs)(n.p,{children:["To encrypt a value, convert a plaintext ",(0,r.jsx)(n.code,{children:"uint32"})," into an ",(0,r.jsx)(n.code,{children:"euint32"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"uint32 plaintextValue = 123;\neuint32 encryptedValue = FHE.asEuint32(plaintextValue);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"decrypting-a-value",children:"Decrypting a Value"}),"\n",(0,r.jsx)(n.p,{children:"To decrypt an encrypted value back to plaintext:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"uint32 decryptedValue = FHE.decrypt(encryptedValue);\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Decryption of data should be done with caution. Decrypted data should be handled with care and should not be exposed to unauthorized parties."})}),"\n",(0,r.jsx)(n.h3,{id:"performing-encrypted-arithmetic",children:"Performing Encrypted Arithmetic"}),"\n",(0,r.jsx)(n.p,{children:"You can perform arithmetic operations directly on encrypted values. For example, adding two encrypted values:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"euint32 sum = encryptedValue1 + encryptedValue2;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"conditional-logic-with-encrypted-values",children:"Conditional Logic with Encrypted Values"}),"\n",(0,r.jsx)(n.p,{children:"Use comparison operations to implement logic based on encrypted values:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"euint32 result = FHE.select(encryptedValue1.gt(encryptedValue2), encryptedValue1, encryptedValue2);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This example chooses between ",(0,r.jsx)(n.code,{children:"encryptedValue1"})," and ",(0,r.jsx)(n.code,{children:"encryptedValue2"})," based on their encrypted comparison."]}),"\n",(0,r.jsx)(n.h2,{id:"integrating-fhe-into-smart-contracts",children:"Integrating FHE into Smart Contracts"}),"\n",(0,r.jsxs)(n.p,{children:["When incorporating ",(0,r.jsx)(n.code,{children:"FHE.sol"})," into your smart contracts, consider the following:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Privacy vs. Gas Cost"}),": While FHE provides strong privacy guarantees, it's computationally intensive and can lead to higher gas costs. Balance the need for privacy with the cost implications."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Data Types"}),": Ensure that your use cases are compatible with the data types and operations supported by ",(0,r.jsx)(n.code,{children:"FHE.sol"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Security"}),": Understand the security model of FHE, including its limitations and how it fits into the overall security posture of your application."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>a});t(7294);var r=t(512);const i={tabItem:"tabItem_Ymn6"};var s=t(5893);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,a),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>E});var r=t(7294),i=t(512),s=t(2466),a=t(6550),o=t(469),c=t(1980),l=t(7392),d=t(12);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function y(e){let{queryString:n=!1,groupId:t}=e;const i=(0,a.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=p(e),[a,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[l,u]=y({queryString:t,groupId:i}),[g,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,d.Nk)(t);return[i,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),x=(()=>{const e=l??g;return h({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{x&&c(x)}),[x]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),m(e)}),[u,m,s]),tabValues:s}}var m=t(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(5893);function v(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),i=o[t].value;i!==r&&(l(n),a(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...s,className:(0,i.Z)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:i}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function b(e){const n=g(e);return(0,f.jsxs)("div",{className:(0,i.Z)("tabs-container",x.tabList),children:[(0,f.jsx)(v,{...e,...n}),(0,f.jsx)(j,{...e,...n})]})}function E(e){const n=(0,m.Z)();return(0,f.jsx)(b,{...e,children:u(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var r=t(7294);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);