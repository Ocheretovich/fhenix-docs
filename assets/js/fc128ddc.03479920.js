"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[3164],{9504:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>r});var n=i(4848),l=i(8453);const o={},s="\ud83c\udfa7 Fhenix Remix Plugin",c={id:"devdocs/Tools and Utilities/Fhenix-Remix-Plugin",title:"\ud83c\udfa7 Fhenix Remix Plugin",description:"Fhenix created a plugin to ease the interaction with the contracts.",source:"@site/docs/devdocs/Tools and Utilities/Fhenix-Remix-Plugin.md",sourceDirName:"devdocs/Tools and Utilities",slug:"/devdocs/Tools and Utilities/Fhenix-Remix-Plugin",permalink:"/docs/devdocs/Tools and Utilities/Fhenix-Remix-Plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/tree/main/docs/devdocs/Tools and Utilities/Fhenix-Remix-Plugin.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"\ud83d\udc77 Fhenix Hardhat Plugin",permalink:"/docs/devdocs/Tools and Utilities/Fhenix-Hardhat-Plugin"}},d={},r=[{value:"Adding the Plugin",id:"adding-the-plugin",level:4},{value:"Key Features",id:"key-features",level:4},{value:"Using the Plugin",id:"using-the-plugin",level:4},{value:"Additional Tools",id:"additional-tools",level:4}];function a(e){const t={br:"br",code:"code",h1:"h1",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"-fhenix-remix-plugin",children:"\ud83c\udfa7 Fhenix Remix Plugin"}),"\n",(0,n.jsx)(t.p,{children:"Fhenix created a plugin to ease the interaction with the contracts."}),"\n",(0,n.jsx)(t.h4,{id:"adding-the-plugin",children:"Adding the Plugin"}),"\n",(0,n.jsxs)(t.p,{children:["In order to add the plugin you can simply click on the ",(0,n.jsx)(t.code,{children:"Plugin Manager"})," button in remix (left bottom side), then click on the ",(0,n.jsx)(t.code,{children:"Connect to a Local Plugin"})," link.\nSet the ",(0,n.jsx)(t.code,{children:"Plugin Name"})," value to be ",(0,n.jsx)(t.code,{children:"Fhenix"})," and the ",(0,n.jsx)(t.code,{children:"URL"})," value to be ",(0,n.jsx)(t.code,{children:"https://remix-plugin.fhenix.zone"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(6995).A+"",width:"649",height:"629"})}),"\n",(0,n.jsx)(t.h4,{id:"key-features",children:"Key Features"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Interact with the contract - On contract interaction you should use the values that were encrypted by the plugin for encrypted inputs. For contracts that are returning an output of a sealOutput function, the plugin will already generate a public address and it will decrypt the output for you."}),"\n",(0,n.jsx)(t.li,{children:"Encrypt numbers"}),"\n",(0,n.jsx)(t.li,{children:"Show permit information of a contract (to manually interact with it)"}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"using-the-plugin",children:"Using the Plugin"}),"\n",(0,n.jsxs)(t.p,{children:["After deploying a contract (the plugin is only aware of contracts that are deployed while it is active), MetaMask will request that you sign a message. This message is a permit that allowing you to interact with the contract from the plugin.",(0,n.jsx)(t.br,{}),"\n","After the message is signed, the contract will be saved to the list."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(8677).A+"",width:"745",height:"759"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Select the contract you wish to interact with."}),"\n",(0,n.jsx)(t.li,{children:"Remove the selected contract from the list"}),"\n",(0,n.jsx)(t.li,{children:"Click to encrypt a number - If the field has a defined type (inEuint8, inEuint16, or inEuint32), it will automatically encrypt it correctly. If the field is of a generic bytes type, you will be prompted to select the required encryption."}),"\n",(0,n.jsx)(t.li,{children:'Autofilled "permission" type - The field detects the unique type and fills it for you based on the created permit.'}),"\n",(0,n.jsx)(t.li,{children:'Autofilled "publicKey" - If a publicKey field is detected, it will be auto-filled with the public key from the permit.'}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"additional-tools",children:"Additional Tools"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(5560).A+"",width:"717",height:"517"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Switch to the Fhenix network or add it to MetaMask if it is not already present."}),"\n",(0,n.jsx)(t.li,{children:"Select the desired encryption type."}),"\n",(0,n.jsx)(t.li,{children:"Select the contract to display permit information."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},6995:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/install-plugin-47eb4e73f88dddf8e028b9b75d004c50.webp"},8677:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/interact-info-1-3a86cbd164733c96571fea0fcfdff800.webp"},5560:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/tools-info-30f9e0bfaa4d83068c7530edb2c256f6.webp"},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>c});var n=i(6540);const l={},o=n.createContext(l);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);