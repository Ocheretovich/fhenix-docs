"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[87],{1414:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=t(5893),i=t(1151);const r={},a="\ud83d\udc77 Hardhat",s={id:"devdocs/Setting Up Your Environment/Hardhat",title:"\ud83d\udc77 Hardhat",description:"Prerequisites",source:"@site/docs/devdocs/Setting Up Your Environment/Hardhat.md",sourceDirName:"devdocs/Setting Up Your Environment",slug:"/devdocs/Setting Up Your Environment/Hardhat",permalink:"/fhenix-docs/docs/devdocs/Setting Up Your Environment/Hardhat",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/main/docs/devdocs/Setting Up Your Environment/Hardhat.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Gitpod",permalink:"/fhenix-docs/docs/devdocs/Setting Up Your Environment/Gitpod"},next:{title:"\ud83c\udfa7 Remix",permalink:"/fhenix-docs/docs/devdocs/Setting Up Your Environment/Remix"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Clone Hardhat Template",id:"clone-hardhat-template",level:2},{value:"Start LocalFhenix",id:"start-localfhenix",level:3},{value:"Faucet",id:"faucet",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"-hardhat",children:"\ud83d\udc77 Hardhat"}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.docker.com/",children:"Docker"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://pnpm.io/installation",children:"pnpm"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"LocalFhenix is a complete Fhenix local testnet and ecosystem containerized with Docker. It simplifies the way contract developers test their contracts in a sandbox before they deploy them on a testnet or mainnet - similar to Ganache, or other local network environments."}),"\n",(0,o.jsx)(n.p,{children:"LocalFhenix comes preconfigured with opinionated, sensible (hopefully) defaults for standard testing environments."}),"\n",(0,o.jsx)(n.h2,{id:"clone-hardhat-template",children:"Clone Hardhat Template"}),"\n",(0,o.jsxs)(n.p,{children:['We provide a hardhat template available that comes "batteries included", with everything you need to hit the ground running. The template is ',(0,o.jsx)(n.a,{href:"https://github.com/fhenixprotocol/hardhat-template",children:"available here"}),". You can create a new repository, or clone it locally:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"git clone https://github.com/fhenixprotocol/hardhat-template\n"})}),"\n",(0,o.jsx)(n.p,{children:"You'll also probably want to set an .env file with your mnemonics:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"cp .env.example .env\n"})}),"\n",(0,o.jsx)(n.h3,{id:"start-localfhenix",children:"Start LocalFhenix"}),"\n",(0,o.jsx)(n.p,{children:"Start the local dev environment in a separate tab using:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"docker run [-d] -p 8547:8547 -p 3000:3000 -it ghcr.io/fhenixprotocol/nitro/localfhenix:latest\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can choose if you want to use the ",(0,o.jsx)(n.code,{children:"-d"})," for detached run or not"]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"In this example port 8547 will be exposed as the JSON-RPC port, and port 3000 is used for fauct."})}),"\n",(0,o.jsxs)(n.p,{children:["You've now officially created a local Fhenix testnet with chain-id ",(0,o.jsx)(n.code,{children:"412346"}),". \ud83c\udf89"]}),"\n",(0,o.jsx)(n.h3,{id:"faucet",children:"Faucet"}),"\n",(0,o.jsx)(n.p,{children:"To start developing on LocalFhenix, we'll need to send some FHE to a new address. For this, we can use the built-in faucet."}),"\n",(0,o.jsx)(n.p,{children:"You can use it by accessing the following url:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"http://localhost:3000/faucet?address={YOUR_WALLET_ADDRESS}\n"})}),"\n",(0,o.jsx)(n.p,{children:"You can also use curl:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'curl "http://localhost:3000/faucet?address={YOUR_WALLET_ADDRESS}"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var o=t(7294);const i={},r=o.createContext(i);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);