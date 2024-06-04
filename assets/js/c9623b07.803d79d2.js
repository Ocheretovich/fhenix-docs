"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[5343],{6628:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=t(4848),a=t(8453);const s={sidebar_position:900,title:"\ud83d\udcaf Useful Tips",description:"Tidbits of wisdom for working with FHE"},o=void 0,r={id:"devdocs/Writing Smart Contracts/Useful-Tips",title:"\ud83d\udcaf Useful Tips",description:"Tidbits of wisdom for working with FHE",source:"@site/docs/devdocs/Writing Smart Contracts/Useful-Tips.md",sourceDirName:"devdocs/Writing Smart Contracts",slug:"/devdocs/Writing Smart Contracts/Useful-Tips",permalink:"/docs/devdocs/Writing Smart Contracts/Useful-Tips",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/tree/main/docs/devdocs/Writing Smart Contracts/Useful-Tips.md",tags:[],version:"current",sidebarPosition:900,frontMatter:{sidebar_position:900,title:"\ud83d\udcaf Useful Tips",description:"Tidbits of wisdom for working with FHE"},sidebar:"docsSidebar",previous:{title:"\ud83e\uddd1\u200d\u2695\ufe0f Types and Operations",permalink:"/docs/devdocs/Writing Smart Contracts/Types-and-Operators"},next:{title:"\ud83d\udd25 Gas and Benchmarks",permalink:"/docs/devdocs/Writing Smart Contracts/Gas-and-Benchmarks"}},d={},l=[{value:"Trivial Encryption",id:"trivial-encryption",level:2},{value:"Default Value of a Euint",id:"default-value-of-a-euint",level:2},{value:"Re-encrypting a Value",id:"re-encrypting-a-value",level:2},{value:"FHE.req()",id:"fhereq",level:2},{value:"FHE.decrypt()",id:"fhedecrypt",level:2},{value:"Performance and Gas Usage",id:"performance-and-gas-usage",level:2},{value:"Randomness",id:"randomness",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"trivial-encryption",children:"Trivial Encryption"}),"\n",(0,i.jsxs)(n.p,{children:["When we are using ",(0,i.jsx)(n.code,{children:"FHE.asEuint*(PLAINTEXT_NUMBER)"})," we are actually using a trivial encryption of our FHE scheme. Unlike normal FHE encryption trivial encryption is a deterministic encryption. The meaning is that if you will do it twice you will still get the same result"]}),"\n",(0,i.jsx)(n.h2,{id:"default-value-of-a-euint",children:"Default Value of a Euint"}),"\n",(0,i.jsxs)(n.p,{children:["When having a ",(0,i.jsx)(n.code,{children:"euint*"})," variable uninitialized it will be considered as 0. Every FHE function that will receive an uninitialized euint* will assume it is ",(0,i.jsx)(n.code,{children:"FHE.asEuint*(0)"}),".\nYou can assume now that ",(0,i.jsx)(n.code,{children:"FHE.asEuint*(0)"}),"is used quite often - Luckily we realized this and decided to have the values of",(0,i.jsx)(n.code,{children:"FHE.asEuint*(0)"}),"pre-calculated on node initialization so when you use",(0,i.jsx)(n.code,{children:"FHE.asEuint\\*(0)"})," we will just return those values."]}),"\n",(0,i.jsx)(n.h2,{id:"re-encrypting-a-value",children:"Re-encrypting a Value"}),"\n",(0,i.jsx)(n.p,{children:"To explain this tip we will use an example. Let's assume we want to develop a confidential voting and let's say we have 4 candidates.\nAssuming that on each vote we increase (cryptographically with FHE.add) the tally, one can just monitor the key in the DB that represents this specific tally and once the key was changes he will know who we voted for.\nAn ideal solution for this issue is to change all keys no matter who we voted for, but how?!"}),"\n",(0,i.jsx)(n.p,{children:"In order to understand how we will first need to understand that FHE encryption is a non-deterministic encryption means that encrypting (non-trivial encryption) a number twice will result with 2 different encrypted outputs."}),"\n",(0,i.jsx)(n.p,{children:"Now that we know that, we can add 0 (cryptographically with FHE.add) to all of those tallies that shouldn't be changed and they will be changed in the DB!"}),"\n",(0,i.jsx)(n.h2,{id:"fhereq",children:"FHE.req()"}),"\n",(0,i.jsxs)(n.p,{children:["All the operations are supported both in TXs and in Queries. That being said we strongly advise to think twice before you use those operations inside a TX. ",(0,i.jsx)(n.code,{children:"FHE.req"})," is actually exposing the value of your encrypted data. Assuming we will send the transaction and monitor the gas usage we can probably identify whether the ",(0,i.jsx)(n.code,{children:"FHE.req"})," condition met or not and understand a lot about what the encrypted values represent.\nExample:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"function f(euint8 a, euint8 b) public {\n    FHE.req(a.eq(b));\n    // Do some heavy logic\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In this case, if ",(0,i.jsx)(n.code,{children:"a"})," and ",(0,i.jsx)(n.code,{children:"b"})," won't be equal it will fail immediately and take less gas than the case when ",(0,i.jsx)(n.code,{children:"a"})," and ",(0,i.jsx)(n.code,{children:"b"})," are equal which means that one who checks the gas can easily know the equality of ",(0,i.jsx)(n.code,{children:"a"})," and ",(0,i.jsx)(n.code,{children:"b"})," it won't leak their values but it will leak confidential data.\nThe rule of thumb that we are suggesting is to use ",(0,i.jsx)(n.code,{children:"FHE.req"})," only in ",(0,i.jsx)(n.code,{children:"view"})," functions while the logic of ",(0,i.jsx)(n.code,{children:"FHE.req"})," in txs can be implemented using ",(0,i.jsx)(n.code,{children:"FHE.select"})]}),"\n",(0,i.jsx)(n.h2,{id:"fhedecrypt",children:"FHE.decrypt()"}),"\n",(0,i.jsxs)(n.p,{children:["Generally speaking, the idea of Fhenix and having FHE in place is the ability to have your values encrypted throughout the whole lifetime of the data (since you can operate on encrypted data). When using ",(0,i.jsx)(n.code,{children:"FHE.decrypt"})," you should always consider the following:\na. On mainnet (and future testnet versions) the decryption process will be done on a threshold network and the operation might not be fully deterministic (network issues for example)\nb. Assuming malicious node runner have DMA (direct memory access) or any other way to read the process' memory he can see what is the decrypted value while it is being executed and use MEV techniques."]}),"\n",(0,i.jsx)(n.p,{children:"We recommended a rule of thumb to when to decrypt:\na. In view functions\nb. In TXs when you are 100% confident that the data is not confidential anymore (For example in poker game when the transaction is a roundup transaction so you can reveal the cards without being afraid of data leakage)"}),"\n",(0,i.jsx)(n.h2,{id:"performance-and-gas-usage",children:"Performance and Gas Usage"}),"\n",(0,i.jsx)(n.p,{children:"Currently, we support many FHE operations. Some of them might take a lot of time to compute, some good examples are: Div (5 seconds for euint32), Mul, Rem, and the time will grow depends on the value types you are using."}),"\n",(0,i.jsxs)(n.p,{children:["When writing FHE code we encourage you to use the operations wisely and choose what operation should be used.\nExample: Instead of ",(0,i.jsx)(n.code,{children:"ENCRYPTED_UINT_32 * FHE.asEuint32(2)"})," you can use ",(0,i.jsx)(n.code,{children:"FHE.shl(ENCRYPTED_UINT_32, FHE.asEuint32(1))"})," in some cases ",(0,i.jsx)(n.code,{children:"FHE.div(ENCRYPTED_UINT_32, FHE.asEuint32(2))"})," can be replaced by ",(0,i.jsx)(n.code,{children:"FHE.shr(ENCRYPTED_UINT_32, FHE.asEuint32(1))"})]}),"\n",(0,i.jsxs)(n.p,{children:["For more detailed benchmarks please refer to: ",(0,i.jsx)(n.a,{href:"./Gas-and-Benchmarks",children:"Gas-and-Benchmarks"})]}),"\n",(0,i.jsx)(n.h2,{id:"randomness",children:"Randomness"}),"\n",(0,i.jsx)(n.p,{children:"Confidentiality is a crucial step in order to achieve on-chain randomness. Fhenix, as a chain that implements confidentiality, is a great space to implement and use on-chain random numbers and this is part of our roadmap.\nWe know that there are some #BUIDLers that are planning to implement dapps that leverage both confidentiality and random numbers so until we will have on-chain true random, we are suggesting to use the following implementation as a MOCKUP."}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsx)(n.p,{children:"PLEASE NOTE THAT THIS RANDOM NUMBER IS VERY PREDICTABLE AND SHOULD NOT BE USED IN PRODUCTION."})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-solidity",children:"library RandomMock {\n    function getFakeRandom() internal returns (uint256) {\n        uint blockNumber = block.number;\n        uint256 blockHash = uint256(blockhash(blockNumber));\n\n        return blockHash;\n    }\n\n    function getFakeRandomU8() public view returns (euint8) {\n        uint8 blockHash = uint8(getFakeRandom());\n        return FHE.asEuint8(blockHash);\n    }\n\n    function getFakeRandomU16() public view returns (euint16) {\n        uint16 blockHash = uint16(getFakeRandom());\n        return FHE.asEuint16(blockHash);\n    }\n\n    function getFakeRandomU32() public view returns (euint32) {\n        uint32 blockHash = uint32(getFakeRandom());\n        return FHE.asEuint32(blockHash);\n    }\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var i=t(6540);const a={},s=i.createContext(a);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);