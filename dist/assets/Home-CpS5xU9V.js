import{r as a,j as e,l as p}from"./index-CVZd0tnK.js";import{k as f}from"./breedsArray-p8S6TItM.js";const j=()=>{const s=Math.floor(Math.random()*f.length-1);return f[s]},g=j(),b=(s,t)=>{const[c,r]=a.useState({}),[l,i]=a.useState(!0),[u,x]=a.useState(null);return a.useEffect(()=>{fetch(`https://dog.ceo/api/breed/${s}/images/random/${t}`).then(n=>n.json()).then(n=>r(n)).catch(n=>x(n)).finally(()=>i(!1))},[s,t]),{data:c,loading:l,error:u}},N="/assets/dog-computer-Dvfz7eER.gif",v=({size:s})=>e.jsx("div",{children:e.jsx("img",{className:`max-w-${s}`,src:N,alt:"this is fine meme gif"})}),k=({size:s})=>e.jsxs("div",{children:[" ",e.jsx("img",{className:`max-w-${s}`,src:p,alt:"loader dog gif"})]}),y=(s,t=800)=>{const[c,r]=a.useState(s);return a.useEffect(()=>{const l=setTimeout(()=>{r(s)},t);return()=>{clearTimeout(l)}},[s,t]),{debouncedValue:c}},w=({dog:s})=>e.jsx("div",{children:e.jsx("img",{className:"h-auto max-w-full rounded-lg",src:s,alt:"dog image"})}),m=({option:s,onClick:t})=>e.jsx("span",{onClick:t,className:"bg-myOrange px-6 py-1 rounded-md font-bold text-slate-600 hover:bg-opacity-70 hover:cursor-pointer",children:s}),B=()=>{var h;const[s,t]=a.useState(g),[c,r]=a.useState("4"),{debouncedValue:l}=y(s),{data:i,loading:u,error:x}=b(l,c),n=o=>{t(o.target.value!==""?o.target.value.toLowerCase():g)},d=o=>{switch(o.target.innerText){case"1":r("1");break;case"4":r("4");break;case"8":r("8");break;case"All":r("50");break;default:return}};return e.jsxs("div",{className:"bg-gradient-to-tr from-myWhite via-myViolet to-myBlue max-w-full min-h-screen flex flex-col gap-20 justify-between items-center p-4",children:[e.jsx("h1",{className:"text-center text-4xl font-serif font-semibold italic mt-20",children:"EDog Images Searcher"}),e.jsxs("div",{className:"flex flex-col gap-2 justify-center items-center",children:[e.jsx("label",{className:"text-xl underline font-semibold text-slate-800",htmlFor:"search",children:"Breed:"}),e.jsx("input",{className:"p-3 rounded-md placeholder:italic outline-none border-0",placeholder:"ex: greyhound",onChange:n,name:"search"})]}),e.jsxs("div",{className:"outline p-3 outline-2 rounded-md outline-slate-600 grid place-items-center gap-4",children:[e.jsx("span",{className:"font-semibold text-slate-700 underline text-lg",children:"Number of images"}),e.jsxs("div",{className:"flex flex-wrap justify-center items-center gap-4",children:[e.jsx(m,{option:"1",onClick:d}),e.jsx(m,{option:"4",onClick:d}),e.jsx(m,{option:"8",onClick:d}),e.jsx(m,{option:"All",onClick:d})]})]}),e.jsxs("div",{className:"gird place-items-center",children:[e.jsx("h2",{className:"text-center my-4 uppercase font-semibold text-xl",children:s===""?g:s}),x&&e.jsx(v,{size:"48"}),u&&e.jsx(k,{size:"48"}),e.jsx("div",{className:"grid gap-4",children:e.jsx("div",{className:"w-full place-items-center grid gap-4",children:i&&((h=i.message)==null?void 0:h.map(o=>e.jsx(w,{dog:o},o)))})})]})]})};export{B as default};