"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[6717],{3851:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=t(4848),i=t(8453);const s={sidebar_position:7,title:"\ud83e\uddd9 Type Conversions",description:"Converting between different FHE types"},r="Converting Between Types",c={id:"devdocs/Writing Smart Contracts/Converting-between-Types",title:"\ud83e\uddd9 Type Conversions",description:"Converting between different FHE types",source:"@site/docs/devdocs/Writing Smart Contracts/Converting-between-Types.md",sourceDirName:"devdocs/Writing Smart Contracts",slug:"/devdocs/Writing Smart Contracts/Converting-between-Types",permalink:"/docs/devdocs/Writing Smart Contracts/Converting-between-Types",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/tree/main/docs/devdocs/Writing Smart Contracts/Converting-between-Types.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"\ud83e\uddd9 Type Conversions",description:"Converting between different FHE types"},sidebar:"docsSidebar",previous:{title:"\ud83d\udd75\ufe0f Permissions",permalink:"/docs/devdocs/Writing Smart Contracts/Permissions"},next:{title:"\ud83e\udeb5 Console.log",permalink:"/docs/devdocs/Writing Smart Contracts/Debug-Logging"}},a={},l=[{value:"Using Conversion Functions",id:"using-conversion-functions",level:2},{value:"Conversion Functions",id:"conversion-functions",level:3},{value:"Tips for Users",id:"tips-for-users",level:4}];function d(n){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"converting-between-types",children:"Converting Between Types"}),"\n",(0,o.jsxs)(e.p,{children:["As a user of ",(0,o.jsx)(e.code,{children:"FHE.sol"}),", you'll often need to convert between various encrypted types or from plaintext to encrypted form within your contracts. This documentation illustrates how you can leverage the type conversion functions provided in ",(0,o.jsx)(e.code,{children:"FHE.sol"})," to manipulate encrypted data effectively."]}),"\n",(0,o.jsx)(e.h2,{id:"using-conversion-functions",children:"Using Conversion Functions"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.strong,{children:"Converting Encrypted to Other Encrypted Types:"})}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"Suppose you have a voting contract and you want to convert an encrypted boolean vote to an encrypted integer before tallying."}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Contract Example:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-Javascript",children:"contract Voting { \n    function convertVote(ebool encryptedVote) public {\n        // Convert the encrypted boolean vote to an encrypted 32-bit integer\n        euint32 encryptedVoteInt = encryptedVote.toU32();\n        // Further processing with encryptedVoteInt\n    }\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.ol,{start:"2",children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.strong,{children:"Converting from Plaintext to Encrypted Type:"})}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"If you're initializing an encrypted counter in a contract, you might start with a plaintext value that needs to be encrypted."}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Contract Example:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-Javascript",children:"contract Counter {\n    euint32 private encryptedCount;\n\n    function initializeCount(uint256 initialCount) public {\n        // Convert a plaintext count to an encrypted count\n        encryptedCount = FHE.asEuint32(initialCount);\n    }\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsx)(e.p,{children:"Note that when converting from plaintext to encrypted, the value is still exposed in plaintext to the contract and on the public blockchain.\nThis pattern should only be used when the plaintext data is not sensitive and can be exposed publicly."}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"conversion-functions",children:"Conversion Functions"}),"\n",(0,o.jsx)(e.h4,{id:"tips-for-users",children:"Tips for Users"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"Understand the Types:"})," Know the types you are working with and the implications of converting between them. Ensure the conversion is logical and secure."]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"Monitor Gas Usage:"})," Be aware of the gas costs associated with type conversions, especially if they occur within functions that are called frequently."]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"Test Thoroughly:"})," Always test your contracts with various scenarios to ensure that type conversions are behaving as expected."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["As a user of ",(0,o.jsx)(e.code,{children:"FHE.sol"}),", understanding and utilizing type conversions is essential for manipulating encrypted data within your smart contracts. By following the examples and best practices provided, you can ensure your contracts are efficient, secure, and functional. Remember to test thoroughly and consider the implications of each conversion to maintain the integrity and reliability of your contract's operations."]})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>c});var o=t(6540);const i={},s=o.createContext(i);function r(n){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),o.createElement(s.Provider,{value:e},n.children)}}}]);