(function(){"use strict";var e={7758:function(e,t,i){var a=i(5130),n=i(6768);const s={class:"display"};function o(e,t,i,a,o,r){const l=(0,n.g2)("TopNav"),c=(0,n.g2)("BotNav"),d=(0,n.g2)("IconSidebar"),u=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(l),(0,n.bF)(c),(0,n.bF)(d),(0,n.Lk)("div",s,[(0,n.bF)(u)])],64)}const r={id:"nav",class:"fr"},l={class:"navline fr"},c={class:"link"},d={class:"link"},u={class:"link"},v={class:"navburger"};function g(e,t,i,s,o,g){return(0,n.uX)(),(0,n.CE)("div",r,[(0,n.Lk)("div",l,[t[5]||(t[5]=(0,n.Lk)("div",{class:"n-line"},null,-1)),(0,n.bF)(a.eB,{name:"link"},{default:(0,n.k6)((()=>[(0,n.bo)((0,n.Lk)("div",c,t[2]||(t[2]=[(0,n.Lk)("a",{href:"#/#about"},"ABT",-1)]),512),[[a.aG,s.isNavToggled]])])),_:1}),t[6]||(t[6]=(0,n.Lk)("div",{class:"n-line"},null,-1)),(0,n.bF)(a.eB,{name:"link"},{default:(0,n.k6)((()=>[(0,n.bo)((0,n.Lk)("div",d,t[3]||(t[3]=[(0,n.Lk)("a",{href:"#/experience"},"EXP",-1)]),512),[[a.aG,s.isNavToggled]])])),_:1}),t[7]||(t[7]=(0,n.Lk)("div",{class:"n-line"},null,-1)),(0,n.bF)(a.eB,{name:"link"},{default:(0,n.k6)((()=>[(0,n.bo)((0,n.Lk)("div",u,t[4]||(t[4]=[(0,n.Lk)("a",{href:"#/contact"},"CON",-1)]),512),[[a.aG,s.isNavToggled]])])),_:1}),t[8]||(t[8]=(0,n.Lk)("div",{class:"n-line"},null,-1))]),(0,n.Lk)("div",v,[(0,n.bF)(a.eB,{name:"nav"},{default:(0,n.k6)((()=>[s.isNavToggled?((0,n.uX)(),(0,n.CE)("div",{key:0,class:"hamburger",onClick:t[0]||(t[0]=(...e)=>s.toggle&&s.toggle(...e))},"X")):((0,n.uX)(),(0,n.CE)("div",{key:1,class:"hamburger",onClick:t[1]||(t[1]=(...e)=>s.toggle&&s.toggle(...e))},t[9]||(t[9]=[(0,n.Lk)("div",{class:"h-line"},null,-1),(0,n.Lk)("div",{class:"h-line"},null,-1),(0,n.Lk)("div",{class:"h-line"},null,-1)])))])),_:1})])])}var p=i(782),m={name:"TopNav",setup(){const e=(0,p.Pj)(),t=(0,n.EW)((()=>e.state.isNavToggled)),i=()=>{e.dispatch("toggleNav",t),console.log("toggle ",t.value)};return{isNavToggled:t,toggle:i}}},b=i(1241);const h=(0,b.A)(m,[["render",g],["__scopeId","data-v-5307d000"]]);var f=h,k=i(4232);const L={id:"nav",class:"fr"},y={class:"circ-group fr"};function w(e,t,i,a,s,o){return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("div",L,[(0,n.Lk)("div",{class:(0,k.C4)(["n-line",e.bg])},null,2)]),(0,n.Lk)("div",y,[(0,n.Lk)("div",{class:"circ",onClick:t[0]||(t[0]=e=>a.toggle(0))}),(0,n.Lk)("div",{class:"circ",onClick:t[1]||(t[1]=e=>a.toggle(1))}),(0,n.Lk)("div",{class:"circ",onClick:t[2]||(t[2]=e=>a.toggle(2))}),(0,n.Lk)("div",{class:"circ",onClick:t[3]||(t[3]=e=>a.toggle(3))})])],64)}var E={name:"BotNav",setup(){const e=(0,p.Pj)(),t=(0,n.EW)((()=>e.state.subNav)),i=t=>{console.log("circles ",t),e.dispatch("toggleSubNav",t)};return{currentColor:t,toggle:i}}};const A=(0,b.A)(E,[["render",w],["__scopeId","data-v-89f00cfc"]]);var I=A;const C={class:"fc"},S={href:"/#/#home"},N=["src"],T={href:"https://www.linkedin.com/in/ninielle/"},P=["src"],F={href:"https://github.com/elleinin"},M=["src"],D={href:"https://www.behance.net/ninielle"},_=["src"],O={href:"https://www.instagram.com/nyx.nielle/"},x=["src"];function G(e,t,i,a,s,o){return(0,n.uX)(),(0,n.CE)("div",C,[(0,n.Lk)("a",S,[(0,n.Lk)("img",{src:a.HomeSVG},null,8,N)]),(0,n.Lk)("a",T,[(0,n.Lk)("img",{src:a.LinkedinSVG},null,8,P)]),(0,n.Lk)("a",F,[(0,n.Lk)("img",{src:a.GithubSVG},null,8,M)]),(0,n.Lk)("a",D,[(0,n.Lk)("img",{src:a.BehanceSVG},null,8,_)]),(0,n.Lk)("a",O,[(0,n.Lk)("img",{src:a.InstagramSVG},null,8,x)])])}var W=i.p+"img/icons8-home.3ad8efd8.svg",R=i.p+"img/icons8-linkedin.dd34e283.svg",V=i.p+"img/icons8-github.85df3f1a.svg",j=i.p+"img/icons8-behance.fcde723d.svg",X=i.p+"img/icons8-instagram-old.3f92a5cf.svg",H={name:"IconSidebar",setup(){return{HomeSVG:W,LinkedinSVG:R,GithubSVG:V,BehanceSVG:j,InstagramSVG:X}}};const B=(0,b.A)(H,[["render",G],["__scopeId","data-v-0466889a"]]);var U=B,K={setup(){const e=(0,p.Pj)(),t=(0,n.EW)((()=>e.state.subNav));return{currentColor:t}},components:{TopNav:f,BotNav:I,IconSidebar:U}};const q=(0,b.A)(K,[["render",o]]);var Q=q,z=i(1387);const Y={class:"row2"},J={class:"nielle"},Z={class:"row2"},$={class:"img ink"};function ee(e,t,i,a,s,o){const r=(0,n.g2)("AssetCircles"),l=(0,n.g2)("AssetLines"),c=(0,n.g2)("AboutView");return(0,n.uX)(),(0,n.CE)(n.FK,null,[t[0]||(t[0]=(0,n.Lk)("div",{class:"img asset polaris"},null,-1)),(0,n.bF)(r,{bg:a.bg},null,8,["bg"]),(0,n.Lk)("div",{id:"home",class:(0,k.C4)(["fc",a.bg])},[(0,n.Lk)("div",Y,[(0,n.Lk)("div",J,(0,k.v_)(a.strings.nielle),1)]),(0,n.Lk)("div",Z,[(0,n.Lk)("div",$,(0,k.v_)(a.strings.subtitle),1)])],2),(0,n.bF)(l,{class:"double"}),(0,n.bF)(c,{navColor:a.currentColor},null,8,["navColor"])],64)}const te={nielle:"NIELLE",ninielle:{title:"NINIELLE",body:"Hi, there! I'm Ninielle, or just Nielle.\n\n    I am a SOFTWARE DEVELOPER by profession, with a passion for multimedia arts. I've spent my first few professional years in corporate, working as a full-stack engineer and keeping illustration, graphic design, and interaction design, among other arts, on the side as a hobby. Nowadays I've been exploring to put passion and profession together. \n    \n    I believe technology has the potential to be a medium for creativity and the arts-- connecting and sharing stories of all kinds. Through UX, interaction design, and other multimedia arts, I hope to explore the creativity in Software Development for solutions both technical and communicative.\n    \n    Welcome to my website / portfolio / playground made with VueJS.\n    I hope you enjoy what you see despite this project being currently:"},software:{title:"SOFTWARE\nDEVELOPER",body:"Full Stack Software Engineer with specialty in MERN and MEVN stacks and a passion for Frontend Development and Interaction design.\n    \n    STACKS: MERN | MEVN | Python Stacks\n\n    TOP-3: JavaScript | TypeScript | Python\n    \n    EXPERIENCE WITH:\n    DATABASE: MongoDB | Postgres | MySQL | Django\n    DEVOPS: Gitlab | Docker\n    AWS: EC2 | S3 Bucket | DynamoDB\n    DATA ANALYTICS TOOLS: Firebase | Clevertap | Google Analytics\n    ",subtitle:"FULL-STACK / FRONTEND"},multimedia:{title:"MULTIMEDIA\nARTIST",body:"Soon enough, this page will be full of my work and interaction design experiments. But for now, it's still in the making. In the meantime you may check other socials by clicking their icons on the right, or visit my old, outdated, static-html-scss-vanilla-javascript portfolio at...",subtitle:"elleinin.github.io/portfolio"},subtitle:"UNDER CONSTRUCTION",fname:"Niña Gabrielle A. Pascual",lipsum1:"Lorem ipsum dolor sit amet.",lipsum2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus vel sapien sit amet tincidunt. In dignissim vitae ipsum eget ullamcorper. Ut aliquam consequat erat a eleifend. Nulla ornare ipsum a est ultricies, quis aliquet lectus imperdiet. Pellentesque egestas, tortor a faucibus malesuada, felis enim tristique augue, ac posuere risus sem nec velit. Morbi ut interdum lectus. Mauris a ultricies nulla, sit amet dapibus lacus. Mauris hendrerit mattis tellus, a facilisis magna porta eu. In molestie porta sem, nec sodales dui. Aenean interdum magna et lorem porta, ut vulputate felis accumsan. Nullam ullamcorper libero non enim vehicula, eget dictum mauris pulvinar."};var ie=te;function ae(e,t,i,s,o,r){const l=(0,n.g2)("SidebarScroll");return(0,n.uX)(),(0,n.CE)("div",{id:"about",class:(0,k.C4)(s.data.bg)},[(0,n.bF)(l),(0,n.bF)(a.eB,null,{default:(0,n.k6)((()=>[((0,n.uX)(),(0,n.Wv)((0,n.$y)(s.data.aboutComponent),{title:s.data.title,body:s.data.body,sub:s.data.sub,bg:s.data.bg},null,8,["title","body","sub","bg"]))])),_:1})],2)}const ne={class:"fc"},se={class:"title"},oe={class:"title"},re={class:"title"},le={class:"title"},ce={class:"title"},de={class:"subtitle"};function ue(e,t,i,a,s,o){return(0,n.uX)(),(0,n.CE)("div",ne,[(0,n.Lk)("div",se,(0,k.v_)(a.strings.nielle),1),(0,n.Lk)("div",oe,(0,k.v_)(a.strings.nielle),1),(0,n.Lk)("div",re,(0,k.v_)(a.strings.nielle),1),(0,n.Lk)("div",le,(0,k.v_)(a.strings.nielle),1),(0,n.Lk)("div",ce,(0,k.v_)(a.strings.nielle),1),(0,n.Lk)("div",de,(0,k.v_)(a.strings.fname),1)])}var ve={name:"AboutNielle",setup(){return{strings:ie}}};const ge=(0,b.A)(ve,[["render",ue],["__scopeId","data-v-2b52a0ac"]]);var pe=ge;const me={class:"fc"},be={class:"title"},he={class:"subtitle"};function fe(e,t,i,a,s,o){return(0,n.uX)(),(0,n.CE)("div",me,[(0,n.Lk)("div",be,(0,k.v_)(a.props.title),1),(0,n.Lk)("div",{class:(0,k.C4)(["body",a.props.bg])},(0,k.v_)(a.props.body),3),(0,n.Lk)("div",he,(0,k.v_)(a.props.sub),1)])}var ke={name:"AboutContent",props:["title","body","sub","bg"],setup(e){return{props:e}}};const Le=(0,b.A)(ke,[["render",fe],["__scopeId","data-v-2ad2a25c"]]);var ye=Le;const we={class:"cont"},Ee={class:"sc"},Ae={href:"#/#home"},Ie=["src"];function Ce(e,t,i,a,s,o){return(0,n.uX)(),(0,n.CE)("div",we,[t[0]||(t[0]=(0,n.Lk)("div",{class:"arrow-u"},null,-1)),t[1]||(t[1]=(0,n.Lk)("div",{class:"up"},null,-1)),(0,n.Lk)("div",Ee,[(0,n.Lk)("a",Ae,[(0,n.Lk)("img",{src:a.NielleSVG},null,8,Ie)])]),t[2]||(t[2]=(0,n.Lk)("div",{class:"down"},null,-1))])}var Se=i.p+"img/NielleSVG3.35042664.svg",Ne={name:"SidebarScroll",setup(){return{NielleSVG:Se,InstagramSVG:X}}};const Te=(0,b.A)(Ne,[["render",Ce],["__scopeId","data-v-302b7948"]]);var Pe=Te,Fe={name:"AboutView",props:["navColor"],setup(e){const t=(0,n.EW)((()=>{switch(e.navColor){case 1:return{title:ie.software.title,body:ie.software.body,sub:ie.software.subtitle,bg:"blue",aboutComponent:ye};case 2:return{title:ie.multimedia.title,body:ie.multimedia.body,sub:ie.multimedia.subtitle,bg:"pink",aboutComponent:ye};case 3:return{title:ie.nielle,body:ie.lipsum2,sub:ie.subtitle,bg:"orange",aboutComponent:pe};default:return{title:ie.ninielle.title,body:ie.ninielle.body,sub:ie.subtitle,bg:"galaxy",aboutComponent:ye}}}));return{strings:ie,AboutNielle:pe,AboutContent:ye,data:t}},components:{SidebarScroll:Pe}};const Me=(0,b.A)(Fe,[["render",ae],["__scopeId","data-v-7dc25364"]]);var De=Me;const _e={class:"fc asset circles"};function Oe(e,t,i,a,s,o){return(0,n.uX)(),(0,n.CE)("div",_e,[(0,n.Lk)("div",{class:(0,k.C4)(["asset circ",a.props.bg])},null,2),(0,n.Lk)("div",{class:(0,k.C4)(["asset circ",a.props.bg])},null,2),(0,n.Lk)("div",{class:(0,k.C4)(["asset circ",a.props.bg])},null,2),(0,n.Lk)("div",{class:(0,k.C4)(["asset circ",a.props.bg])},null,2)])}var xe={name:"AssetCircles",props:["bg"],setup(e){return{props:e}}};const Ge=(0,b.A)(xe,[["render",Oe],["__scopeId","data-v-5388d5d4"]]);var We=Ge;const Re={class:"fr asset lines"};function Ve(e,t,i,a,s,o){return(0,n.uX)(),(0,n.CE)("div",Re,t[0]||(t[0]=[(0,n.Fv)('<div class="line" data-v-3d4ef256></div><div class="line" data-v-3d4ef256></div><div class="line" data-v-3d4ef256></div><div class="line" data-v-3d4ef256></div><div class="line" data-v-3d4ef256></div><div class="line" data-v-3d4ef256></div><div class="line" data-v-3d4ef256></div><div class="line" data-v-3d4ef256></div><div class="line" data-v-3d4ef256></div><div class="line" data-v-3d4ef256></div><div class="line" data-v-3d4ef256></div><div class="line" data-v-3d4ef256></div><div class="line" data-v-3d4ef256></div><div class="line" data-v-3d4ef256></div><div class="line" data-v-3d4ef256></div>',15)]))}var je={name:"AssetLines"};const Xe=(0,b.A)(je,[["render",Ve],["__scopeId","data-v-3d4ef256"]]);var He=Xe,Be={name:"NielleView",setup(){const e=(0,p.Pj)(),t=(0,n.EW)((()=>e.state.subNav)),i=(0,n.EW)((()=>{switch(t.value){case 1:return"blue";case 2:return"pink";case 3:return"orange";default:return"main"}}));return{currentColor:t,bg:i,strings:ie}},components:{AboutView:De,AssetCircles:We,AssetLines:He}};const Ue=(0,b.A)(Be,[["render",ee],["__scopeId","data-v-1db1c46a"]]);var Ke=Ue;function qe(e,t,i,a,s,o){const r=(0,n.g2)("AssetCircles"),l=(0,n.g2)("ContentQuarters");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(r,{bg:a.bg},null,8,["bg"]),t[0]||(t[0]=(0,n.Lk)("div",{class:"circ sun"},null,-1)),(0,n.bF)(l,{nav:a.currentColor},null,8,["nav"]),t[1]||(t[1]=(0,n.Lk)("div",{class:"img asset polaris"},null,-1))],64)}var Qe=i.p+"img/work-pmya1.4a04b713.jpg",ze=i.p+"img/work-pmya2.83faef42.jpg",Ye=i.p+"img/work-pmya3.e07f94f4.jpg",Je=i.p+"img/work-mis.75c5c0cc.png",Ze=i.p+"img/work-navi1.586f9c7d.png",$e=i.p+"img/work-navi2.005c6a06.png",et=i.p+"img/work-navi3.c18589f3.png",tt=i.p+"img/work-NAVI.ca3fe000.png",it=i.p+"img/work-mm1.64ca0fa7.png",at=i.p+"img/work-mm2.7f8cbf83.png",nt=i.p+"img/work-mm3.6638ad77.png",st=i.p+"img/work-mm4.8f7eabe0.png",ot=i.p+"img/work-mm5.5a71b2fd.png",rt=i.p+"img/work-mm6.24aac80e.png",lt=i.p+"img/work-mm7.e37a8481.png",ct=i.p+"img/work-mm8.f33b9dd0.png",dt=i.p+"img/MAPS1.a575b1c5.png",ut=i.p+"img/MAPS2.06968f25.png",vt=i.p+"img/MAPS3.6b31ae33.png",gt=i.p+"img/MAPS4.58362fbd.png",pt=i.p+"img/MAPS5.3b123e4a.png",mt=i.p+"img/MAPS6.155eadf5.png",bt=i.p+"img/MAPS7.d7b2ad99.png",ht=i.p+"img/MAPS8.305b0d94.png";const ft={class:"grid-4"},kt={key:0,class:"samples fr"},Lt={class:"col2 fc"},yt={key:0,class:"sample ft"};function wt(e,t,i,a,s,o){const r=(0,n.g2)("QuartContent");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("div",ft,[((0,n.uX)(),(0,n.CE)(n.FK,null,(0,n.pI)(4,(e=>(0,n.bF)(r,{key:e,qtr:e,navi:a.navi},null,8,["qtr","navi"]))),64))]),a.show?((0,n.uX)(),(0,n.CE)("div",kt,[t[3]||(t[3]=(0,n.Lk)("div",{class:"col2 fc"},[(0,n.Lk)("div",{class:"sample fc"},[(0,n.Lk)("div",{class:"row3 r1 blue"},[(0,n.Lk)("h2",null,"EXP HIGHLIGHT: Cadetship Program"),(0,n.Lk)("p",null,[(0,n.eW)(" Underwent a 6-month intensive training program featuring bootcamp-style engineering classes and rotationary immersions under the various teams within the Office of the CTO. These provided me with hands-on experience with product R&D and DevOps philosophies through specialized engineering projects including: "),(0,n.Lk)("br"),(0,n.eW)(" * Data Analysis Report on Anti-Fraud Detection "),(0,n.Lk)("br"),(0,n.eW)(" * API Microservice Product Pitch and Development "),(0,n.Lk)("br"),(0,n.eW)(" * Miniapp-Superapp Ecosystem Recreation ")])]),(0,n.Lk)("div",{class:"row3"},[(0,n.Lk)("h2",null,"MAYA PHILIPPINES, Inc."),(0,n.Lk)("p",null,"Financial Technology Unicorn. Philippines' #1 Online Bank."),(0,n.Lk)("h3",null,"2021 - 2022: Cadet Engineer"),(0,n.Lk)("p",null,"6-month intensive training program"),(0,n.Lk)("h3",null,"2022 - 2024: Software Engineer"),(0,n.Lk)("p",null,"Designation: Product Engineering, Bills Payment Solutions")]),(0,n.Lk)("div",{class:"row3 r2 pink"},[(0,n.Lk)("div",{class:"fr"},[(0,n.Lk)("img",{class:"imgr",src:Qe}),(0,n.Lk)("img",{class:"imgr",src:ze}),(0,n.Lk)("img",{class:"imgr",src:Ye})])])]),(0,n.Lk)("div",{class:"sample fr"},[(0,n.Lk)("div",{class:"col3 r4 blue fc"},[(0,n.Lk)("h2",null,"B.S. Management Information Systems"),(0,n.Lk)("p",null,"Ateneo de Manila University 2016-2021"),(0,n.Lk)("h3",null,"MIS141 & 151"),(0,n.Lk)("p",null," Designed an Inventory Management System and business case as a thesis project aimed to support a partner company "),(0,n.Lk)("h3",null,"MIS121 & 122"),(0,n.Lk)("p",null," Designed an Order Management System with a database and web portal ordering system to aid the sales of a partner business "),(0,n.Lk)("h3",null,"CS 179.14A&B"),(0,n.Lk)("p",null," Developed various simple games for my interactive media spec, including an Asteroid Shooter game as my final. ")]),(0,n.Lk)("div",{class:"col3 fc"},[(0,n.Lk)("h2",null,"Extra-Curriculars"),(0,n.Lk)("br"),(0,n.Lk)("h3",null,"AMP . Ateneo Musicians' Pool"),(0,n.Lk)("p",null,[(0,n.eW)(" Music production, appreciation, and development school organization. "),(0,n.Lk)("br"),(0,n.Lk)("br"),(0,n.Lk)("b",null,"OFFICER POSITIONS:"),(0,n.Lk)("br"),(0,n.eW)(" ~ VP for Finance 2019 - 2020 "),(0,n.Lk)("br"),(0,n.eW)(" ~ Design Dept Head 2018 - 2019 "),(0,n.Lk)("br"),(0,n.eW)(" ~ Production Deputy 2017 - 2028 ")]),(0,n.Lk)("h3",null,"MISA . Management Information Systems Association"),(0,n.Lk)("p",null,[(0,n.eW)(" Home organization of BS MIS Students"),(0,n.Lk)("br"),(0,n.eW)(" HIGHLIGHT: Art Director to multiple projects ")]),(0,n.Lk)("h3",null,"LFC . Loyola Film Circle"),(0,n.Lk)("p",null,[(0,n.eW)(" Film & Video production school org."),(0,n.Lk)("br"),(0,n.eW)(" HIGHLIGHT: Set Design for Freshman Orientation Film ")])]),(0,n.Lk)("div",{class:"col3 r4 pink fc"},[(0,n.eW)(" Sample MIS Work - Web Design: "),(0,n.Lk)("img",{class:"imgc",src:Je})])]),(0,n.Lk)("div",{class:"sample fc"},[(0,n.Lk)("div",{class:"row3"},[(0,n.eW)(" Navi individuals "),(0,n.Lk)("div",{class:"fr"},[(0,n.Lk)("img",{class:"imgr",src:Ze}),(0,n.Lk)("img",{class:"imgr",src:$e}),(0,n.Lk)("img",{class:"imgr",src:et})])]),(0,n.Lk)("div",{class:"row3 imgn"},[(0,n.Lk)("img",{src:tt})]),(0,n.Lk)("div",{class:"row3"},[(0,n.eW)(" Midnight Miniatures "),(0,n.Lk)("div",{class:"fr"},[(0,n.Lk)("img",{class:"imgr",src:it}),(0,n.Lk)("img",{class:"imgr",src:at}),(0,n.Lk)("img",{class:"imgr",src:nt}),(0,n.Lk)("img",{class:"imgr",src:st}),(0,n.Lk)("img",{class:"imgr",src:ot}),(0,n.Lk)("img",{class:"imgr",src:rt}),(0,n.Lk)("img",{class:"imgr",src:lt}),(0,n.Lk)("img",{class:"imgr",src:ct})])])]),(0,n.Lk)("div",{class:"sample fr"},[(0,n.Lk)("div",{class:"col3 r5 blue fc"},[(0,n.Lk)("iframe",{src:"https://elleinin.github.io/portfolio/redirect.html",title:"2021 Online Portfolio Easter Egg",height:"500",width:"280"})]),(0,n.Lk)("div",{class:"col3 r6 pink"},[(0,n.eW)(" Sample Work: Music Appreciation Publications "),(0,n.Lk)("div",{class:"fr imgm"},[(0,n.Lk)("img",{src:dt}),(0,n.Lk)("img",{src:ut}),(0,n.Lk)("img",{src:vt}),(0,n.Lk)("img",{src:gt}),(0,n.Lk)("img",{src:pt}),(0,n.Lk)("img",{src:mt}),(0,n.Lk)("img",{src:bt}),(0,n.Lk)("img",{src:ht})])])]),(0,n.Lk)("div",{class:"sample fc"},[(0,n.Lk)("div",{class:"row3"},[(0,n.Lk)("iframe",{src:"https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FAMPluggedPH%2Fvideos%2F2379349145449597%2F&show_text=false&width=560&t=0",height:"100%",style:{border:"none",overflow:"hidden"},scrolling:"no",frameborder:"0",allowfullscreen:"true",allow:"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"})]),(0,n.Lk)("div",{class:"row3 amp"},[(0,n.Lk)("h3",null,"ATENEO MUSICIANS POOL"),(0,n.Lk)("p",null," Most of my time outside academics was spent at a School organization called Ateneo Musicians’ Pool, whose mission was to give platform for the exposure and development of local music acts. "),(0,n.Lk)("h3",null,"AMPLUGGED"),(0,n.Lk)("p",null," Due to low budget and heavy project workload, this music video initiative was a dying project when I first participated in it as a design volunteer in my freshman year. Come Sophomore year, I decided to keep the project alive and head it myself. ")]),(0,n.Lk)("div",{class:"row3"},[(0,n.Lk)("iframe",{height:"100%",src:"https://www.youtube.com/embed/mFKZ4ftuad4?si=C5e9qxgVH2kbOHA6",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""})])])],-1)),(0,n.Lk)("div",Lt,[t[1]||(t[1]=(0,n.Fv)('<div class="sample ft" data-v-be9b4670><div class="worktitle" data-v-be9b4670> SOFTWARE <br data-v-be9b4670> ENGINEERING </div><div class="body" data-v-be9b4670> Upon graduating, I entered the FinTech industry as a Software Developer bright-eyed about researching and developing solutions to make financial services more accessible to the average Filipino. I have been lucky to have been trained with and exposed to various tech stacks such as MERN/MEVN, mobile dev with Swift and Kotlin, and Data Science with Python. I aim to maximise my skillset to explore feasible design solutions, how to navigate implementation obstacles, and how to make these solutions serve the underprivileged. </div></div><div class="sample ft" data-v-be9b4670><div class="worktitle" data-v-be9b4670> PRODUCT DESIGN <br data-v-be9b4670> &amp; DIRECTION </div><div class="body" data-v-be9b4670> With a Degrree in M.I.S., my skillset revolves around creating solutions by examining and designing systems. My time at ADMU was spent contributing my Product knowledge in group projects while my extra-curriculars were for indulging in the arts and stepping up for leadership positions at passion-focused projects. I was officer to my organization’s executive board, spearhead to a series of music videos providing platform to local artists, and nourished the growth of my peers. </div></div>',2)),a.show?((0,n.uX)(),(0,n.CE)("div",yt,t[0]||(t[0]=[(0,n.Lk)("div",{class:"worktitle"},[(0,n.eW)(" NAVIGATING "),(0,n.Lk)("br"),(0,n.eW)(" MY ART ")],-1),(0,n.Lk)("div",{class:"subtitle"}," INDIVIDUAL CHARM THAT EXPANDS AND NTERCONNECTS FOR LARGER-THAN-ITSELF THINK PIECES ",-1),(0,n.Lk)("div",{class:"body"}," As a Software Engineer, you hear the “Iterative Approach” all over Agile Tech Teams as Project Management jargon, but it holds value for a reason. My way of building upon meaningful design takes working through a concept over and over, seeing what works and what could be improved, and putting these features together into a larger coherent system. Each iteration is beautiful and complete, yet gains power in its continuous expanse. ",-1)]))):(0,n.Q3)("",!0),t[2]||(t[2]=(0,n.Fv)('<div class="sample ft" data-v-be9b4670><div class="worktitle" data-v-be9b4670> PERSONALITY <br data-v-be9b4670> &amp; PERSPECTIVE </div><div class="subtitle" data-v-be9b4670>GAMIFICATION OF THE MUNDANE</div><div class="body" data-v-be9b4670> A Filipino is a Fun-Loving Maximalist. All it takes is to make the most of the simple and mundane. </div><div class="subtitle" data-v-be9b4670>UTILIZING PERSPECTIVE</div><div class="body" data-v-be9b4670> By interconnecting spaces, a piece can feel larger or more complex than it really is, especially when perspective is involved. This tends to be a common theme among my art pieces. I love the vastness of things, and play around with concepts that maximise expand visual perception. </div></div><div class="sample ft" data-v-be9b4670><div class="worktitle" data-v-be9b4670>HIGHLIGHT:</div><div class="subtitle" data-v-be9b4670>AMPLUGGED: LEADERSHIP &amp; LEGACY</div><div class="body" data-v-be9b4670> This project grew on to be bigger than myself in spite of being at risk of discontinuation. I am proud to say all my 4 freshman members moved on to becoming officers within the org, with 2 becoming the next heads to this project. To add, during my time as Finance head, I was able to score a university-funded financial grant for this project, highlighting it as an avenue to tackle social struggles through music and art that reaches way beyond the university and its inner circles. The project continues to thrive today at: fb.com/AMPlugged &amp; youtube.com/@AMPlugged </div></div>',2))])])):(0,n.Q3)("",!0)],64)}const Et={key:0,class:"description",style:{color:"white",padding:"15vh 10px"}},At={class:"header"},It={class:"description"},Ct={class:"info"},St={class:"title"},Nt={class:"body"};function Tt(e,t,i,s,o,r){return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("div",{class:"quart base",style:(0,k.Tr)(s.align)},[s.four?((0,n.uX)(),(0,n.CE)("div",Et," DISCLAIMER: This page is still under construction and is best viewed on desktop. ")):(0,n.Q3)("",!0)],4),(0,n.bF)(a.eB,null,{default:(0,n.k6)((()=>[s.show?((0,n.uX)(),(0,n.CE)("div",{key:0,class:(0,k.C4)(["quart content",s.data.bg]),style:(0,k.Tr)(s.align)},[(0,n.Lk)("div",At,(0,k.v_)(s.data.header),1),(0,n.Lk)("div",It,(0,k.v_)(s.data.desc),1),(0,n.Lk)("div",Ct,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(s.data.contents,(e=>((0,n.uX)(),(0,n.CE)("div",{key:e.id},[(0,n.Lk)("div",St,(0,k.v_)(e.title),1),(0,n.Lk)("div",{class:(0,k.C4)(["subtitle",s.data.accent])},(0,k.v_)(e.sub),3),(0,n.Lk)("div",Nt,(0,k.v_)(e.body),1)])))),128))])],6)):(0,n.Q3)("",!0)])),_:1})],64)}var Pt={name:"QuartContent",props:["qtr","navi"],setup(e){const t=(0,n.EW)((()=>4==e.qtr)),i=(0,n.EW)((()=>{switch(e.qtr){case 2:return{top:0,left:"50vw",textAlign:"right"};case 3:return{top:"50vh",left:0,textAlign:"left"};case 4:return{top:"50vh",left:"50vw",textAlign:"right"};default:return{top:0,left:0,textAlign:"left"}}})),a=(0,n.EW)((()=>e.qtr==e.navi)),s=(0,n.EW)((()=>{switch(e.navi){case 1:return{bg:"base",accent:"a-orange",header:"EXPERIENCE",desc:"Creating impactful solutions while doing my own explorations of technology and art in expanding interconnectivity and perspective. \n \nClick on the Navigation Circles on the bottom bar for more if you haven't yet."};case 2:return{bg:"blue",accent:"a-pink",header:"PROFESSIONAL CAREER",desc:"Full-stack development solutions with product and frontend expertise.",contents:[{title:"Data Management & Analytics Developer",sub:"Pfizer (Nov 2024 - Present)",body:"Data engineering solutions to streamline clinical data analysis"},{title:"Mid Full Stack Software Engineer",sub:"Sprout Solutions (Apr 2024 - Aug 2024)",body:"Frontend expertise, UX discussions and discovery, and full-stack cross-functional support to deliver AI solutions"},{title:"Software Engineer",sub:"Maya Philippines, Inc. (Aug 2021 - Mar 2024)",body:"Delivery of enhancements and solutions to Maya's Pay Bills feature on their mobile app and internal biller products"}]};case 3:return{bg:"pink",accent:"a-blue",header:"MULTIMEDIA ARTIST",desc:"Maximalism, dreaminess, and utilizing multiple perspectives for enhanced experience.",contents:[{title:"Information Design",sub:"Publication Design, Product Design, Data Visualization"},{title:"Interaction Design",sub:"Interface Design, User Experience, Game Development"},{title:"Traditional Arts",sub:"Illustration, Set Design, Clay-Sculpting"}]};case 4:return{bg:"orange",accent:"a-black",header:"PORTFOLIO",desc:"Most of my professional work with Software Development are confidential and owned by my employers. Still, you may view my personal codes and explorations over at",contents:[{title:"GITHUB - Software Development",sub:"https://github.com/elleinin"},{title:"BEHANCE - Multimedia Arts",sub:"https://www.behance.net/ninielle"},{title:"LINKEDIN - Professional Experience",sub:"https://www.linkedin.com/in/ninielle/"}]};default:return{bg:"base",accent:"a-orange",header:"EXPERIENCE",desc:"Creating impactful solutions while doing my own explorations of technology and art in expanding interconnectivity and perspective. \n \nClick on the Navigation Circles on the bottom bar for more if you haven't yet."}}}));return{four:t,align:i,data:s,show:a,props:e}}};const Ft=(0,b.A)(Pt,[["render",Tt],["__scopeId","data-v-7c713a6f"]]);var Mt=Ft,Dt={name:"ContentQuarters",props:["nav"],setup(e){const t=(0,n.EW)((()=>e.nav+1)),i=(0,n.EW)((()=>3==e.nav));return{navi:t,show:i}},components:{QuartContent:Mt}};const _t=(0,b.A)(Dt,[["render",wt],["__scopeId","data-v-be9b4670"]]);var Ot=_t,xt={name:"ExperienceView",setup(){const e=(0,p.Pj)(),t=(0,n.EW)((()=>e.state.subNav)),i=(0,n.EW)((()=>{switch(t.value){case 1:return"blue";case 2:return"pink";case 3:return"orange";default:return"main"}}));return{currentColor:t,bg:i}},components:{AssetCircles:We,ContentQuarters:Ot}};const Gt=(0,b.A)(xt,[["render",qe],["__scopeId","data-v-7351fb24"]]);var Wt=Gt;const Rt={class:"col3"},Vt={class:"cont"},jt={class:"left"},Xt={class:"col3"},Ht={class:"cont"},Bt={class:"right"};function Ut(e,t,i,a,s,o){const r=(0,n.g2)("AssetLines"),l=(0,n.g2)("AssetCircles");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("div",{id:"contact",class:(0,k.C4)(["fr",a.bg])},[(0,n.Lk)("div",Rt,[(0,n.Lk)("div",Vt,[(0,n.bF)(r,{class:"aleft"}),(0,n.Lk)("div",jt,[(0,n.bF)(l,{bg:a.bg},null,8,["bg"])])])]),t[0]||(t[0]=(0,n.Lk)("div",{class:"col3"},null,-1)),(0,n.Lk)("div",Xt,[(0,n.Lk)("div",Ht,[(0,n.Lk)("div",Bt,[(0,n.bF)(l,{bg:a.bg},null,8,["bg"])]),(0,n.bF)(r,{class:"aright"})])])],2),t[1]||(t[1]=(0,n.Fv)('<div class="icon img" data-v-a61dc716></div><div class="content" data-v-a61dc716><h1 data-v-a61dc716>NIELLE</h1><h2 data-v-a61dc716>Niña Gabrielle A. Pascual</h2><h3 data-v-a61dc716>CONTACT ME</h3><p data-v-a61dc716>WORK: ninielle.ap@gmail.com <br data-v-a61dc716>ART: elleinin@gmail.com</p><h3 data-v-a61dc716>FIND ME</h3><p data-v-a61dc716> At the next local music gig, art alley, fixated over my next craft-hobby, or wherever my software engineer career might take me next. Currently based in the Philippines. </p><h3 data-v-a61dc716>Thank you for viewing!</h3><p data-v-a61dc716> If you haven&#39;t yet, you can also click the icons over at the right bar to check out my LinkedIn, GitHub, Behance, and other socials. The circles at the bottom bar may also show fun stuff from time to time. </p></div>',2))],64)}var Kt=i.p+"img/NielleSVG2.26115051.svg",qt={name:"ContactView",setup(){const e=(0,p.Pj)(),t=(0,n.EW)((()=>e.state.subNav)),i=(0,n.EW)((()=>{switch(t.value){case 1:return"blue";case 2:return"pink";case 3:return"orange";default:return"main"}}));return{currentColor:t,bg:i,NielleSVG:Kt}},components:{AssetCircles:We,AssetLines:He}};const Qt=(0,b.A)(qt,[["render",Ut],["__scopeId","data-v-a61dc716"]]);var zt=Qt;const Yt=[{path:"/",name:"home",component:Ke,meta:{transition:"fade"}},{path:"/experience",name:"experience",component:Wt,meta:{transition:"fade"}},{path:"/contact",name:"contact",component:zt,meta:{transition:"fade"}}],Jt=(0,z.aE)({history:(0,z.Bt)(),routes:Yt,scrollBehavior(e){return e.hash?{el:e.hash,behavior:"smooth"}:{top:0,left:0,behavior:"smooth"}}});var Zt=Jt,$t=(0,p.y$)({state:{isNavToggled:!1,navTitle:"",subNav:0},getters:{stateNav:e=>e.isNavToggled,navTitle:e=>e.navTitle,subNav:e=>e.subNav},mutations:{updateNav(e,t){e.isNavToggled=t},updateSubNav(e,t){e.subNav=t}},actions:{toggleNav(e,t){console.log("toggleNav ",t.value);const i=!t.value;e.commit("updateNav",i)},toggleSubNav(e,t){console.log("toggleSubNav ",t,this.state.subNav),e.commit("updateSubNav",t)}},modules:{}});(0,a.Ef)(Q).use($t).use(Zt).mount("#app")}},t={};function i(a){var n=t[a];if(void 0!==n)return n.exports;var s=t[a]={exports:{}};return e[a].call(s.exports,s,s.exports,i),s.exports}i.m=e,function(){var e=[];i.O=function(t,a,n,s){if(!a){var o=1/0;for(d=0;d<e.length;d++){a=e[d][0],n=e[d][1],s=e[d][2];for(var r=!0,l=0;l<a.length;l++)(!1&s||o>=s)&&Object.keys(i.O).every((function(e){return i.O[e](a[l])}))?a.splice(l--,1):(r=!1,s<o&&(o=s));if(r){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[a,n,s]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.p="/"}(),function(){var e={524:0};i.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,s,o=a[0],r=a[1],l=a[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(n in r)i.o(r,n)&&(i.m[n]=r[n]);if(l)var d=l(i)}for(t&&t(a);c<o.length;c++)s=o[c],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(d)},a=self["webpackChunkNIELLE"]=self["webpackChunkNIELLE"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=i.O(void 0,[504],(function(){return i(7758)}));a=i.O(a)})();
//# sourceMappingURL=app.f6d8754c.js.map