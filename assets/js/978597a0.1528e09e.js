"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[7245],{4834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var i=n(5893),s=n(1151);const r={},o="\ud83e\udef7 Permits & Access Control",a={id:"devdocs/Encryption and Privacy/Permits-Access-Control",title:"\ud83e\udef7 Permits & Access Control",description:"In a Fully Homomorphic Encryption (FHE) context, data stored in the contract's storage is encrypted.",source:"@site/docs/devdocs/Encryption and Privacy/Permits-Access-Control.md",sourceDirName:"devdocs/Encryption and Privacy",slug:"/devdocs/Encryption and Privacy/Permits-Access-Control",permalink:"/docs/devdocs/Encryption and Privacy/Permits-Access-Control",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/tree/main/docs/devdocs/Encryption and Privacy/Permits-Access-Control.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Catching Errors",permalink:"/docs/devdocs/FhenixJS/Catching Errors"},next:{title:"\ud83e\udd2b Privacy Pitfalls",permalink:"/docs/devdocs/Encryption and Privacy/Privacy-Web3"}},c={},h=[{value:"Permits",id:"permits",level:2},{value:"What is a Permit?",id:"what-is-a-permit",level:4},{value:"How to Generate a Permit",id:"how-to-generate-a-permit",level:4},{value:"What is a Permission?",id:"what-is-a-permission",level:4},{value:"How to Generate a Permission",id:"how-to-generate-a-permission",level:4},{value:"Using a Permission",id:"using-a-permission",level:4}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"-permits--access-control",children:"\ud83e\udef7 Permits & Access Control"}),"\n",(0,i.jsxs)(t.p,{children:["In a Fully Homomorphic Encryption (FHE) context, data stored in the contract's storage is encrypted.\nTherefore, granting selective access to data becomes an essential part of access control.\nThis is done via the ",(0,i.jsx)(t.code,{children:"sealoutput"})," function, which seals the data in a manner that only the intended\nrecipient can decrypt and view it (or the ",(0,i.jsx)(t.code,{children:"decrypt"})," function, for less sensitive data). This approach ensures that\nencrypted data remains confidential and only accessible to authorized users."]}),"\n",(0,i.jsx)(t.p,{children:"Usually, Solidity contracts will expose their data using view functions.\nHowever, in the context of permissioned data this is challenging since view functions do not come\nwith any kind of mechanism to allow the contract to cryptographically verify that the caller is who he says he is -\nin the case of transactions this is done by verifying the signature on the data."}),"\n",(0,i.jsx)(t.p,{children:"This means that we have to create mechanisms that enable the contract to determine who can access the data and who can't."}),"\n",(0,i.jsx)(t.h2,{id:"permits",children:"Permits"}),"\n",(0,i.jsx)(t.p,{children:"Permits are a mechanism that allows the contract to cryptographically verify that the caller is who he says he is."}),"\n",(0,i.jsx)(t.p,{children:"Simply, they are a signed message that contains the caller's public key, which the contract can then use to verify that the caller is who he says he is."}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h1,{id:"permits--access-control-eip-712",children:"Permits & Access Control (EIP-712)"}),"\n",(0,i.jsx)(t.p,{children:"Out-of-the-box, Fhenix Solidity libraries come with a basic access control scheme. This helps contracts perform a basic check for ownership of an account."}),"\n",(0,i.jsx)(t.p,{children:"This makes it easy for contracts to add authentication & authorization to specific view functions, without having to reinvent the wheel every time."}),"\n",(0,i.jsx)(t.p,{children:"This page will cover how access permits and permissions that are created and used in fhenix.js."}),"\n",(0,i.jsx)(t.h4,{id:"what-is-a-permit",children:"What is a Permit?"}),"\n",(0,i.jsx)(t.p,{children:"In the context of Fhenix and blockchain, a permit refers to a signed JSON object that follows the EIP-712 standard. This permit contains the necessary information, including a public key, that allows data re-sealing in a smart contract environment. The inclusion of this public key into the permit enables a secure process of data re-sealing within a smart contract once the JSON object is signed by the user."}),"\n",(0,i.jsx)(t.h4,{id:"how-to-generate-a-permit",children:"How to Generate a Permit"}),"\n",(0,i.jsxs)(t.p,{children:["Permits are generated using the ",(0,i.jsx)(t.code,{children:"getPermit"})," method. This method requires the following parameter:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"contractAddress"})," (required, string): The address of the contract."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"provider"})," (required): Note that if you want to unseal data using your wallet's encryption key you can't use \"JsonRpcProvider\" you will need to use a provider that can sign."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"const permit = await getPermit(contractAddress);\n"})}),"\n",(0,i.jsx)(t.h4,{id:"what-is-a-permission",children:"What is a Permission?"}),"\n",(0,i.jsxs)(t.p,{children:["In the context of Fhenix, a permission is the part of a permit that supplies the proof that the caller is who he says he is. A permission contains the signature and the corresponding public key. In order to see how to verify a permission in your solidity contract please refer to our ",(0,i.jsx)(t.a,{href:"/docs/devdocs/Solidity%20API/Permissioned",children:"Permissioned"}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"how-to-generate-a-permission",children:"How to Generate a Permission"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"const permission = client.extractPermitPermissions(permit);\n"})}),"\n",(0,i.jsx)(t.h4,{id:"using-a-permission",children:"Using a Permission"}),"\n",(0,i.jsx)(t.p,{children:'Once generated, you can use the permission and send it to the contract. You can also unseal the outputs of "sealoutput" assuming it was sealed using your permission.'}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'import { BrowserProvider } from "ethers";\nimport { FhenixClient, getPermit } from "fhenixjs";\n\nconst provider = new BrowserProvider(window.ethereum);\nconst client = new FhenixClient({ provider });\nconst permit = await getPermit(contractAddress, provider);\nconst permission = client.extractPemitPermissions(permit);\nclient.storePermit(permit); // Stores a permit for a specific contract address.\nconst response = await contract.connect(owner).getValue(permission); // Calling "getValue" which is a view function in "contract"\nconst plaintext = await client.unseal(contractAddress, response);\n'})})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var i=n(7294);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);