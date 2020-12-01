(this["webpackJsonpsanity-react"]=this["webpackJsonpsanity-react"]||[]).push([[0],{121:function(e,t,s){"use strict";s.r(t);var l=s(0),c=s(1),r=s.n(c),i=s(39),n=s.n(i),a=(s(48),s(8)),o=s(3),d=s(15),x=s(40),j=s.n(x)()({projectId:"j9fbom8t",dataset:"production",useCdn:!0});function h(){var e=Object(c.useState)(null),t=Object(d.a)(e,2),s=t[0],r=t[1];return Object(c.useEffect)((function(){j.fetch('*[_type == "product"]{\n        slug,\n        model,\n        height,\n        description,\n        mainImage{\n        asset->{\n            _id,\n            url\n          }\n        },\n        layoutImage{\n          asset->{\n            _id,\n            url\n          }\n        }\n      }').then((function(e){return r(e)})).catch(console.error)}),[]),Object(l.jsx)("div",{className:"bg-gray-100 min-h-screen p-12",children:Object(l.jsx)("div",{className:"container mx-auto",children:Object(l.jsx)("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:s&&s.map((function(e,t){return Object(l.jsx)(a.b,{to:"/product/"+e.slug.current,children:Object(l.jsxs)("div",{class:"h-full border-2 border-gray-200 rounded-lg overflow-hidden",children:[Object(l.jsx)("img",{class:"lg:h-48 md:h-36 w-full object-cover object-center",src:e.mainImage.asset.url,alt:"blog"}),Object(l.jsxs)("div",{class:"p-4 flex flex-row",children:[Object(l.jsx)("div",{class:"flex flex-col w-24",children:Object(l.jsx)("img",{class:"w-full object-cover object-center",src:e.layoutImage.asset.url,alt:"layout"})}),Object(l.jsxs)("div",{class:"flex flex-col p-4",children:[Object(l.jsx)("h1",{class:"title-font text-lg font-medium text-gray-900 mb-3",children:e.model}),Object(l.jsx)("p",{class:"leading-relaxed mb-3",children:e.description}),Object(l.jsxs)("div",{class:"flex flex-wrap -m-4 text-center",children:[Object(l.jsxs)("div",{class:"p-4 sm:w-1/4 w-1/2",children:[Object(l.jsx)("h2",{class:"title-font font-medium sm:text-3xl text-2xl text-gray-900",children:e.height}),Object(l.jsx)("p",{class:"leading-relaxed",children:"Height"})]}),Object(l.jsxs)("div",{class:"p-4 sm:w-1/4 w-1/2",children:[Object(l.jsx)("h2",{class:"title-font font-medium sm:text-3xl text-2xl text-gray-900",children:"65ft"}),Object(l.jsx)("p",{class:"leading-relaxed",children:"Capacity"})]})]}),Object(l.jsx)("div",{class:"flex items-center flex-wrap pt-4",children:Object(l.jsxs)("a",{href:"#",class:"text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0",children:["Learn More",Object(l.jsxs)("svg",{class:"w-4 h-4 ml-2",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",children:[Object(l.jsx)("path",{d:"M5 12h14"}),Object(l.jsx)("path",{d:"M12 5l7 7-7 7"})]})]})})]})]})]},t)},e.slug.current)}))})})})}var b=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("section",{class:"text-gray-700 body-font",children:Object(l.jsx)("div",{class:"container px-5 py-24 mx-auto flex flex-wrap",children:Object(l.jsxs)("div",{class:"flex flex-wrap w-full",children:[Object(l.jsxs)("div",{class:"lg:w-2/5 md:w-1/2 md:pr-10 md:py-6",children:[Object(l.jsxs)("div",{class:"flex relative pb-12",children:[Object(l.jsx)("div",{class:"h-full w-10 absolute inset-0 flex items-center justify-center",children:Object(l.jsx)("div",{class:"h-full w-1 bg-gray-200 pointer-events-none"})}),Object(l.jsx)("div",{class:"flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10",children:Object(l.jsx)("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-5 h-5",viewBox:"0 0 24 24",children:Object(l.jsx)("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})})}),Object(l.jsxs)("div",{class:"flex-grow pl-4",children:[Object(l.jsx)("h2",{class:"font-medium title-font text-sm text-gray-900 mb-1 tracking-wider",children:"STEP 1"}),Object(l.jsx)("p",{class:"leading-relaxed",children:"VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal."})]})]}),Object(l.jsxs)("div",{class:"flex relative pb-12",children:[Object(l.jsx)("div",{class:"h-full w-10 absolute inset-0 flex items-center justify-center",children:Object(l.jsx)("div",{class:"h-full w-1 bg-gray-200 pointer-events-none"})}),Object(l.jsx)("div",{class:"flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10",children:Object(l.jsx)("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-5 h-5",viewBox:"0 0 24 24",children:Object(l.jsx)("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})})}),Object(l.jsxs)("div",{class:"flex-grow pl-4",children:[Object(l.jsx)("h2",{class:"font-medium title-font text-sm text-gray-900 mb-1 tracking-wider",children:"STEP 2"}),Object(l.jsx)("p",{class:"leading-relaxed",children:"Vice migas literally kitsch +1 pok pok. Truffaut hot chicken slow-carb health goth, vape typewriter."})]})]}),Object(l.jsxs)("div",{class:"flex relative pb-12",children:[Object(l.jsx)("div",{class:"h-full w-10 absolute inset-0 flex items-center justify-center",children:Object(l.jsx)("div",{class:"h-full w-1 bg-gray-200 pointer-events-none"})}),Object(l.jsx)("div",{class:"flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10",children:Object(l.jsxs)("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-5 h-5",viewBox:"0 0 24 24",children:[Object(l.jsx)("circle",{cx:"12",cy:"5",r:"3"}),Object(l.jsx)("path",{d:"M12 22V8M5 12H2a10 10 0 0020 0h-3"})]})}),Object(l.jsxs)("div",{class:"flex-grow pl-4",children:[Object(l.jsx)("h2",{class:"font-medium title-font text-sm text-gray-900 mb-1 tracking-wider",children:"STEP 3"}),Object(l.jsx)("p",{class:"leading-relaxed",children:"Coloring book nar whal glossier master cleanse umami. Salvia +1 master cleanse blog taiyaki."})]})]}),Object(l.jsxs)("div",{class:"flex relative pb-12",children:[Object(l.jsx)("div",{class:"h-full w-10 absolute inset-0 flex items-center justify-center",children:Object(l.jsx)("div",{class:"h-full w-1 bg-gray-200 pointer-events-none"})}),Object(l.jsx)("div",{class:"flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10",children:Object(l.jsxs)("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-5 h-5",viewBox:"0 0 24 24",children:[Object(l.jsx)("path",{d:"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"}),Object(l.jsx)("circle",{cx:"12",cy:"7",r:"4"})]})}),Object(l.jsxs)("div",{class:"flex-grow pl-4",children:[Object(l.jsx)("h2",{class:"font-medium title-font text-sm text-gray-900 mb-1 tracking-wider",children:"STEP 4"}),Object(l.jsx)("p",{class:"leading-relaxed",children:"VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal."})]})]}),Object(l.jsxs)("div",{class:"flex relative",children:[Object(l.jsx)("div",{class:"flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10",children:Object(l.jsxs)("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-5 h-5",viewBox:"0 0 24 24",children:[Object(l.jsx)("path",{d:"M22 11.08V12a10 10 0 11-5.93-9.14"}),Object(l.jsx)("path",{d:"M22 4L12 14.01l-3-3"})]})}),Object(l.jsxs)("div",{class:"flex-grow pl-4",children:[Object(l.jsx)("h2",{class:"font-medium title-font text-sm text-gray-900 mb-1 tracking-wider",children:"FINISH"}),Object(l.jsx)("p",{class:"leading-relaxed",children:"Pitchfork ugh tattooed scenester echo park gastropub whatever cold-pressed retro."})]})]})]}),Object(l.jsx)("img",{class:"lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12",src:"https://dummyimage.com/1200x500",alt:"step"})]})})})})};function m(){return Object(l.jsx)("h2",{children:"Info"})}var g=s(42),u=s.n(g),f=s(20),O=s.n(f)()(j);function p(e){return O.image(e)}function v(){var e=Object(c.useState)(null),t=Object(d.a)(e,2),s=t[0],r=t[1],i=Object(o.f)().slug;return Object(c.useEffect)((function(){j.fetch('*[slug.current == "'.concat(i,'"]{\n           model,\n           mainImage{\n           asset->{\n              _id,\n              url\n            }\n          },\n          layoutImage{\n            asset->{\n              _id,\n              url\n            }\n          },\n          altImage{\n            asset->{\n              _id,\n              url\n            }\n          },\n          body,\n          height\n       }')).then((function(e){return r(e[0])})).catch(console.error)}),[i]),s?Object(l.jsx)("div",{children:Object(l.jsx)("section",{class:"text-gray-700 body-font overflow-hidden",children:Object(l.jsx)("div",{class:"container px-5 py-24 mx-auto",children:Object(l.jsxs)("div",{class:"lg:w-full mx-auto flex flex-wrap",children:[Object(l.jsxs)("div",{class:"lg:w-5/12 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0",children:[Object(l.jsx)("h2",{class:"text-sm title-font text-gray-500 tracking-widest",children:"MODEL"}),Object(l.jsx)("h1",{class:"text-gray-900 text-3xl title-font font-medium mb-4",children:s.model}),Object(l.jsx)("div",{class:"leading-relaxed mb-4",children:Object(l.jsx)(u.a,{blocks:s.body,projectId:j.clientConfig.projectId,dataset:j.clientConfig.dataset})}),Object(l.jsxs)("div",{class:"flex flex-row",children:[Object(l.jsx)("div",{class:"flex flex-col",children:Object(l.jsx)("img",{className:"pr-6 w-32",src:p(s.layoutImage).url(),alt:"alt"})}),Object(l.jsxs)("div",{class:"flex flex-col flex-grow",children:[Object(l.jsxs)("div",{class:"flex border-t border-gray-300 py-2",children:[Object(l.jsx)("span",{class:"text-gray-500",children:"Height"}),Object(l.jsx)("span",{class:"ml-auto text-gray-900",children:s.height})]}),Object(l.jsxs)("div",{class:"flex border-t border-gray-300 py-2",children:[Object(l.jsx)("span",{class:"text-gray-500",children:"Width"}),Object(l.jsx)("span",{class:"ml-auto text-gray-900",children:"4\u20329\u2033"})]}),Object(l.jsxs)("div",{class:"flex border-t border-gray-300 py-2",children:[Object(l.jsx)("span",{class:"text-gray-500",children:"Length"}),Object(l.jsx)("span",{class:"ml-auto text-gray-900",children:"17\u20328\u2033"})]}),Object(l.jsxs)("div",{class:"flex border-t border-gray-300 py-2",children:[Object(l.jsx)("span",{class:"text-gray-500",children:"Cruising Speed"}),Object(l.jsx)("span",{class:"ml-auto text-gray-900",children:"450 \u2013 490 mph"})]}),Object(l.jsxs)("div",{class:"flex border-t border-b mb-6 border-gray-300 py-2",children:[Object(l.jsx)("span",{class:"text-gray-500",children:"Max Hours"}),Object(l.jsx)("span",{class:"ml-auto text-gray-900",children:"2.5 \u2013 3"})]}),Object(l.jsxs)("div",{class:"flex-wrap pt-4 text-center",children:[Object(l.jsx)("div",{class:"w-full pb-4",children:Object(l.jsxs)("div",{class:"border-2 border-gray-200 px-3 py-4 rounded-lg",children:[Object(l.jsxs)("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"text-indigo-500 w-12 h-12 mb-3 inline-block",viewBox:"0 0 24 24",children:[Object(l.jsx)("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),Object(l.jsx)("circle",{cx:"9",cy:"7",r:"4"}),Object(l.jsx)("path",{d:"M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"})]}),Object(l.jsx)("h2",{class:"title-font font-medium text-3xl text-gray-900",children:"7"}),Object(l.jsx)("p",{class:"leading-relaxed",children:"Seats"})]})}),Object(l.jsx)("div",{class:"w-full",children:Object(l.jsxs)("div",{class:"border-2 border-gray-200 px-3 py-4 rounded-lg",children:[Object(l.jsxs)("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"text-indigo-500 w-12 h-12 mb-3 inline-block",viewBox:"0 0 24 24",children:[Object(l.jsx)("path",{d:"M3 18v-6a9 9 0 0118 0v6"}),Object(l.jsx)("path",{d:"M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"})]}),Object(l.jsx)("h2",{class:"title-font font-medium text-3xl text-gray-900",children:"53ft\xb3"}),Object(l.jsx)("p",{class:"leading-relaxed",children:"Cargo"})]})})]})]})]})]}),Object(l.jsxs)("div",{class:"lg:w-7/12 w-full lg:pl-6 mb-6 lg:mb-0",children:[Object(l.jsx)("img",{className:"w-full lg:h-auto h-64 m-4 object-cover object-center rounded",src:p(s.mainImage).url(),alt:"alt"}),Object(l.jsx)("img",{className:"w-full lg:h-auto h-64 m-4 object-cover object-center rounded",src:p(s.altImage).url(),alt:"alt"})]})]})})})}):Object(l.jsx)("div",{children:"Preparing for Takeoff..."})}var w=function(){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{class:"relative overflow-hidden bg-gray-100",children:[Object(l.jsx)("div",{class:"mx-auto px-5",children:Object(l.jsx)("div",{class:"relative z-10 pb-8  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32",children:Object(l.jsx)("main",{class:"mt-10 ml-12 max-w-7xl px-2 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28",children:Object(l.jsxs)("div",{class:"sm:text-center lg:text-left",children:[Object(l.jsx)("h1",{class:"text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl",children:"Data to enrich your online business"}),Object(l.jsx)("p",{class:"mt-3 text-base text-gray-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0",children:"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."}),Object(l.jsx)("div",{class:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start",children:Object(l.jsx)("div",{class:"mt-3 sm:mt-0",children:Object(l.jsx)("a",{class:"w-full flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium text-gray-100 bg-gray-900 hover:bg-indigo-200 md:py-3 md:text-lg md:px-8",children:"Live demo"})})})]})})})}),Object(l.jsx)("div",{class:"lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2",children:Object(l.jsx)("img",{class:"h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full",src:"https://images.unsplash.com/photo-1432926783853-156c4e213e85?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",alt:""})})]}),Object(l.jsx)("section",{class:"text-gray-700 body-font",children:Object(l.jsxs)("div",{class:"container px-5 py-24 mx-auto",children:[Object(l.jsxs)("div",{class:"flex flex-wrap -m-4",children:[Object(l.jsx)("div",{class:"p-4 md:w-1/3",children:Object(l.jsxs)("div",{class:"h-full border-2 border-gray-200 rounded-lg overflow-hidden",children:[Object(l.jsx)("img",{class:"lg:h-48 md:h-36 w-full object-cover object-center",src:"https://dummyimage.com/720x400",alt:"blog"}),Object(l.jsxs)("div",{class:"p-6",children:[Object(l.jsx)("h2",{class:"tracking-widest text-xs title-font font-medium text-gray-500 mb-1",children:"CATEGORY"}),Object(l.jsx)("h1",{class:"title-font text-lg font-medium text-gray-900 mb-3",children:"The Catalyzer"}),Object(l.jsx)("p",{class:"leading-relaxed mb-3",children:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."}),Object(l.jsxs)("div",{class:"flex items-center flex-wrap ",children:[Object(l.jsxs)("a",{class:"text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0",children:["Learn More",Object(l.jsxs)("svg",{class:"w-4 h-4 ml-2",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",children:[Object(l.jsx)("path",{d:"M5 12h14"}),Object(l.jsx)("path",{d:"M12 5l7 7-7 7"})]})]}),Object(l.jsxs)("span",{class:"text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300",children:[Object(l.jsxs)("svg",{class:"w-4 h-4 mr-1",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",viewBox:"0 0 24 24",children:[Object(l.jsx)("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),Object(l.jsx)("circle",{cx:"12",cy:"12",r:"3"})]}),"1.2K"]}),Object(l.jsxs)("span",{class:"text-gray-600 inline-flex items-center leading-none text-sm",children:[Object(l.jsx)("svg",{class:"w-4 h-4 mr-1",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",viewBox:"0 0 24 24",children:Object(l.jsx)("path",{d:"M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"})}),"6"]})]})]})]})}),Object(l.jsx)("div",{class:"p-4 md:w-1/3",children:Object(l.jsxs)("div",{class:"h-full border-2 border-gray-200 rounded-lg overflow-hidden",children:[Object(l.jsx)("img",{class:"lg:h-48 md:h-36 w-full object-cover object-center",src:"https://dummyimage.com/721x401",alt:"blog"}),Object(l.jsxs)("div",{class:"p-6",children:[Object(l.jsx)("h2",{class:"tracking-widest text-xs title-font font-medium text-gray-500 mb-1",children:"CATEGORY"}),Object(l.jsx)("h1",{class:"title-font text-lg font-medium text-gray-900 mb-3",children:"The 400 Blows"}),Object(l.jsx)("p",{class:"leading-relaxed mb-3",children:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."}),Object(l.jsxs)("div",{class:"flex items-center flex-wrap",children:[Object(l.jsxs)("a",{class:"text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0",children:["Learn More",Object(l.jsxs)("svg",{class:"w-4 h-4 ml-2",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",children:[Object(l.jsx)("path",{d:"M5 12h14"}),Object(l.jsx)("path",{d:"M12 5l7 7-7 7"})]})]}),Object(l.jsxs)("span",{class:"text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300",children:[Object(l.jsxs)("svg",{class:"w-4 h-4 mr-1",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",viewBox:"0 0 24 24",children:[Object(l.jsx)("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),Object(l.jsx)("circle",{cx:"12",cy:"12",r:"3"})]}),"1.2K"]}),Object(l.jsxs)("span",{class:"text-gray-600 inline-flex items-center leading-none text-sm",children:[Object(l.jsx)("svg",{class:"w-4 h-4 mr-1",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",viewBox:"0 0 24 24",children:Object(l.jsx)("path",{d:"M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"})}),"6"]})]})]})]})}),Object(l.jsx)("div",{class:"p-4 md:w-1/3",children:Object(l.jsxs)("div",{class:"h-full border-2 border-gray-200 rounded-lg overflow-hidden",children:[Object(l.jsx)("img",{class:"lg:h-48 md:h-36 w-full object-cover object-center",src:"https://dummyimage.com/722x402",alt:"blog"}),Object(l.jsxs)("div",{class:"p-6",children:[Object(l.jsx)("h2",{class:"tracking-widest text-xs title-font font-medium text-gray-500 mb-1",children:"CATEGORY"}),Object(l.jsx)("h1",{class:"title-font text-lg font-medium text-gray-900 mb-3",children:"Shooting Stars"}),Object(l.jsx)("p",{class:"leading-relaxed mb-3",children:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."}),Object(l.jsxs)("div",{class:"flex items-center flex-wrap ",children:[Object(l.jsxs)("a",{class:"text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0",children:["Learn More",Object(l.jsxs)("svg",{class:"w-4 h-4 ml-2",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",children:[Object(l.jsx)("path",{d:"M5 12h14"}),Object(l.jsx)("path",{d:"M12 5l7 7-7 7"})]})]}),Object(l.jsxs)("span",{class:"text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300",children:[Object(l.jsxs)("svg",{class:"w-4 h-4 mr-1",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",viewBox:"0 0 24 24",children:[Object(l.jsx)("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),Object(l.jsx)("circle",{cx:"12",cy:"12",r:"3"})]}),"1.2K"]}),Object(l.jsxs)("span",{class:"text-gray-600 inline-flex items-center leading-none text-sm",children:[Object(l.jsx)("svg",{class:"w-4 h-4 mr-1",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",viewBox:"0 0 24 24",children:Object(l.jsx)("path",{d:"M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"})}),"6"]})]})]})]})})]}),Object(l.jsxs)("div",{class:"flex flex-wrap -m-4",children:[Object(l.jsx)("div",{class:"p-4 lg:w-1/2 md:w-full",children:Object(l.jsx)("div",{class:"flex p-8 sm:flex-row flex-col",children:Object(l.jsx)("div",{class:"flex-grow",children:Object(l.jsx)("p",{class:"leading-relaxed text-base",children:"Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine."})})})}),Object(l.jsx)("div",{class:"p-4 lg:w-1/2 md:w-full",children:Object(l.jsx)("div",{class:"flex p-8 sm:flex-row flex-col",children:Object(l.jsx)("div",{class:"flex-grow",children:Object(l.jsx)("p",{class:"leading-relaxed text-base",children:"Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine."})})})})]})]})}),Object(l.jsx)("section",{class:"text-gray-500 bg-gray-900 body-font",children:Object(l.jsx)("div",{class:"container px-5 py-24 mx-auto",children:Object(l.jsxs)("div",{class:"xl:w-1/2 lg:w-3/4 w-full mx-auto text-center",children:[Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"inline-block w-8 h-8 text-gray-400 mb-8",viewBox:"0 0 975.036 975.036",children:Object(l.jsx)("path",{d:"M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"})}),Object(l.jsx)("p",{class:"leading-relaxed text-lg",children:"Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar."}),Object(l.jsx)("span",{class:"inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"}),Object(l.jsx)("h2",{class:"text-gray-900 font-medium title-font tracking-wider text-sm",children:"HOLDEN CAULFIELD"}),Object(l.jsx)("p",{class:"text-gray-500",children:"Senior Product Designer"})]})})}),Object(l.jsx)("section",{class:"text-gray-700 body-font",children:Object(l.jsxs)("div",{class:"container px-5 py-24 mx-auto",children:[Object(l.jsxs)("div",{class:"text-center mb-20",children:[Object(l.jsx)("h1",{class:"sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4",children:"Raw Denim Heirloom Man Braid"}),Object(l.jsx)("p",{class:"text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto",children:"Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug."})]}),Object(l.jsxs)("div",{class:"flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2",children:[Object(l.jsx)("div",{class:"p-2 sm:w-1/2 w-full",children:Object(l.jsxs)("div",{class:"bg-gray-200 rounded flex p-4 h-full items-center",children:[Object(l.jsxs)("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",class:"text-indigo-500 w-6 h-6 flex-shrink-0 mr-4",viewBox:"0 0 24 24",children:[Object(l.jsx)("path",{d:"M22 11.08V12a10 10 0 11-5.93-9.14"}),Object(l.jsx)("path",{d:"M22 4L12 14.01l-3-3"})]}),Object(l.jsx)("span",{class:"title-font font-medium",children:"Authentic Cliche Forage"})]})}),Object(l.jsx)("div",{class:"p-2 sm:w-1/2 w-full",children:Object(l.jsxs)("div",{class:"bg-gray-200 rounded flex p-4 h-full items-center",children:[Object(l.jsxs)("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",class:"text-indigo-500 w-6 h-6 flex-shrink-0 mr-4",viewBox:"0 0 24 24",children:[Object(l.jsx)("path",{d:"M22 11.08V12a10 10 0 11-5.93-9.14"}),Object(l.jsx)("path",{d:"M22 4L12 14.01l-3-3"})]}),Object(l.jsx)("span",{class:"title-font font-medium",children:"Kinfolk Chips Snackwave"})]})}),Object(l.jsx)("div",{class:"p-2 sm:w-1/2 w-full",children:Object(l.jsxs)("div",{class:"bg-gray-200 rounded flex p-4 h-full items-center",children:[Object(l.jsxs)("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",class:"text-indigo-500 w-6 h-6 flex-shrink-0 mr-4",viewBox:"0 0 24 24",children:[Object(l.jsx)("path",{d:"M22 11.08V12a10 10 0 11-5.93-9.14"}),Object(l.jsx)("path",{d:"M22 4L12 14.01l-3-3"})]}),Object(l.jsx)("span",{class:"title-font font-medium",children:"Coloring Book Ethical"})]})}),Object(l.jsx)("div",{class:"p-2 sm:w-1/2 w-full",children:Object(l.jsxs)("div",{class:"bg-gray-200 rounded flex p-4 h-full items-center",children:[Object(l.jsxs)("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",class:"text-indigo-500 w-6 h-6 flex-shrink-0 mr-4",viewBox:"0 0 24 24",children:[Object(l.jsx)("path",{d:"M22 11.08V12a10 10 0 11-5.93-9.14"}),Object(l.jsx)("path",{d:"M22 4L12 14.01l-3-3"})]}),Object(l.jsx)("span",{class:"title-font font-medium",children:"Typewriter Polaroid Cray"})]})}),Object(l.jsx)("div",{class:"p-2 sm:w-1/2 w-full",children:Object(l.jsxs)("div",{class:"bg-gray-200 rounded flex p-4 h-full items-center",children:[Object(l.jsxs)("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",class:"text-indigo-500 w-6 h-6 flex-shrink-0 mr-4",viewBox:"0 0 24 24",children:[Object(l.jsx)("path",{d:"M22 11.08V12a10 10 0 11-5.93-9.14"}),Object(l.jsx)("path",{d:"M22 4L12 14.01l-3-3"})]}),Object(l.jsx)("span",{class:"title-font font-medium",children:"Pack Truffaut Blue"})]})}),Object(l.jsx)("div",{class:"p-2 sm:w-1/2 w-full",children:Object(l.jsxs)("div",{class:"bg-gray-200 rounded flex p-4 h-full items-center",children:[Object(l.jsxs)("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",class:"text-indigo-500 w-6 h-6 flex-shrink-0 mr-4",viewBox:"0 0 24 24",children:[Object(l.jsx)("path",{d:"M22 11.08V12a10 10 0 11-5.93-9.14"}),Object(l.jsx)("path",{d:"M22 4L12 14.01l-3-3"})]}),Object(l.jsx)("span",{class:"title-font font-medium",children:"The Catcher In The Rye"})]})})]}),Object(l.jsx)("button",{class:"flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg",children:"Button"})]})}),Object(l.jsx)("section",{class:"text-gray-700 body-font",children:Object(l.jsxs)("div",{class:"container px-5 py-24 mx-auto",children:[Object(l.jsxs)("div",{class:"flex flex-col text-center w-full mb-20",children:[Object(l.jsx)("h1",{class:"sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900",children:"Master Cleanse Reliac Heirloom"}),Object(l.jsx)("p",{class:"lg:w-2/3 mx-auto leading-relaxed text-base",children:"Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag."})]}),Object(l.jsxs)("div",{class:"flex flex-wrap -m-4 text-center",children:[Object(l.jsx)("div",{class:"p-4 md:w-1/4 sm:w-1/2 w-full",children:Object(l.jsxs)("div",{class:"border-2 border-gray-200 px-4 py-6 rounded-lg",children:[Object(l.jsxs)("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"text-indigo-500 w-12 h-12 mb-3 inline-block",viewBox:"0 0 24 24",children:[Object(l.jsx)("path",{d:"M8 17l4 4 4-4m-4-5v9"}),Object(l.jsx)("path",{d:"M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"})]}),Object(l.jsx)("h2",{class:"title-font font-medium text-3xl text-gray-900",children:"2.7K"}),Object(l.jsx)("p",{class:"leading-relaxed",children:"Downloads"})]})}),Object(l.jsx)("div",{class:"p-4 md:w-1/4 sm:w-1/2 w-full",children:Object(l.jsxs)("div",{class:"border-2 border-gray-200 px-4 py-6 rounded-lg",children:[Object(l.jsxs)("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"text-indigo-500 w-12 h-12 mb-3 inline-block",viewBox:"0 0 24 24",children:[Object(l.jsx)("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),Object(l.jsx)("circle",{cx:"9",cy:"7",r:"4"}),Object(l.jsx)("path",{d:"M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"})]}),Object(l.jsx)("h2",{class:"title-font font-medium text-3xl text-gray-900",children:"1.3K"}),Object(l.jsx)("p",{class:"leading-relaxed",children:"Users"})]})}),Object(l.jsx)("div",{class:"p-4 md:w-1/4 sm:w-1/2 w-full",children:Object(l.jsxs)("div",{class:"border-2 border-gray-200 px-4 py-6 rounded-lg",children:[Object(l.jsxs)("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"text-indigo-500 w-12 h-12 mb-3 inline-block",viewBox:"0 0 24 24",children:[Object(l.jsx)("path",{d:"M3 18v-6a9 9 0 0118 0v6"}),Object(l.jsx)("path",{d:"M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"})]}),Object(l.jsx)("h2",{class:"title-font font-medium text-3xl text-gray-900",children:"74"}),Object(l.jsx)("p",{class:"leading-relaxed",children:"Files"})]})}),Object(l.jsx)("div",{class:"p-4 md:w-1/4 sm:w-1/2 w-full",children:Object(l.jsxs)("div",{class:"border-2 border-gray-200 px-4 py-6 rounded-lg",children:[Object(l.jsx)("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"text-indigo-500 w-12 h-12 mb-3 inline-block",viewBox:"0 0 24 24",children:Object(l.jsx)("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),Object(l.jsx)("h2",{class:"title-font font-medium text-3xl text-gray-900",children:"46"}),Object(l.jsx)("p",{class:"leading-relaxed",children:"Places"})]})})]})]})}),Object(l.jsxs)("footer",{class:"text-gray-500 bg-gray-900 body-font",children:[Object(l.jsxs)("div",{class:"container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col",children:[Object(l.jsxs)("div",{class:"w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10",children:[Object(l.jsxs)("a",{class:"flex title-font font-medium items-center md:justify-start justify-center text-white",children:[Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-10 h-10 text-white p-2 bg-indigo-500 rounded-full",viewBox:"0 0 24 24",children:Object(l.jsx)("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})}),Object(l.jsx)("span",{class:"ml-3 text-xl",children:"tailblocks"})]}),Object(l.jsx)("p",{class:"mt-2 text-sm text-gray-700",children:"Air plant banjo lyft occupy retro adaptogen indego"})]}),Object(l.jsxs)("div",{class:"flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first",children:[Object(l.jsxs)("div",{class:"lg:w-1/4 md:w-1/2 w-full px-4",children:[Object(l.jsx)("h2",{class:"title-font font-medium text-white tracking-widest text-sm mb-3",children:"CATEGORIES"}),Object(l.jsxs)("nav",{class:"list-none mb-10",children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{class:"text-gray-600 hover:text-white",children:"First Link"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{class:"text-gray-600 hover:text-white",children:"Second Link"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{class:"text-gray-600 hover:text-white",children:"Third Link"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{class:"text-gray-600 hover:text-white",children:"Fourth Link"})})]})]}),Object(l.jsxs)("div",{class:"lg:w-1/4 md:w-1/2 w-full px-4",children:[Object(l.jsx)("h2",{class:"title-font font-medium text-white tracking-widest text-sm mb-3",children:"CATEGORIES"}),Object(l.jsxs)("nav",{class:"list-none mb-10",children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{class:"text-gray-600 hover:text-white",children:"First Link"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{class:"text-gray-600 hover:text-white",children:"Second Link"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{class:"text-gray-600 hover:text-white",children:"Third Link"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{class:"text-gray-600 hover:text-white",children:"Fourth Link"})})]})]}),Object(l.jsxs)("div",{class:"lg:w-1/4 md:w-1/2 w-full px-4",children:[Object(l.jsx)("h2",{class:"title-font font-medium text-white tracking-widest text-sm mb-3",children:"CATEGORIES"}),Object(l.jsxs)("nav",{class:"list-none mb-10",children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{class:"text-gray-600 hover:text-white",children:"First Link"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{class:"text-gray-600 hover:text-white",children:"Second Link"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{class:"text-gray-600 hover:text-white",children:"Third Link"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{class:"text-gray-600 hover:text-white",children:"Fourth Link"})})]})]}),Object(l.jsxs)("div",{class:"lg:w-1/4 md:w-1/2 w-full px-4",children:[Object(l.jsx)("h2",{class:"title-font font-medium text-white tracking-widest text-sm mb-3",children:"CATEGORIES"}),Object(l.jsxs)("nav",{class:"list-none mb-10",children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{class:"text-gray-600 hover:text-white",children:"First Link"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{class:"text-gray-600 hover:text-white",children:"Second Link"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{class:"text-gray-600 hover:text-white",children:"Third Link"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{class:"text-gray-600 hover:text-white",children:"Fourth Link"})})]})]})]})]}),Object(l.jsx)("div",{class:"bg-gray-800",children:Object(l.jsxs)("div",{class:"container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row",children:[Object(l.jsxs)("p",{class:"text-gray-600 text-sm text-center sm:text-left",children:["\xa9 2020 tailblocks \u2014",Object(l.jsx)("a",{href:"https://twitter.com/knyttneve",class:"text-gray-500 ml-1",rel:"noopener noreferrer",target:"_blank",children:"@knyttneve"})]}),Object(l.jsxs)("span",{class:"inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start",children:[Object(l.jsx)("a",{class:"text-gray-600",children:Object(l.jsx)("svg",{fill:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-5 h-5",viewBox:"0 0 24 24",children:Object(l.jsx)("path",{d:"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"})})}),Object(l.jsx)("a",{class:"ml-3 text-gray-600",children:Object(l.jsx)("svg",{fill:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-5 h-5",viewBox:"0 0 24 24",children:Object(l.jsx)("path",{d:"M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"})})}),Object(l.jsx)("a",{class:"ml-3 text-gray-600",children:Object(l.jsxs)("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-5 h-5",viewBox:"0 0 24 24",children:[Object(l.jsx)("rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"}),Object(l.jsx)("path",{d:"M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"})]})}),Object(l.jsx)("a",{class:"ml-3 text-gray-600",children:Object(l.jsxs)("svg",{fill:"currentColor",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"0",class:"w-5 h-5",viewBox:"0 0 24 24",children:[Object(l.jsx)("path",{stroke:"none",d:"M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"}),Object(l.jsx)("circle",{cx:"4",cy:"4",r:"2",stroke:"none"})]})})]})]})})]})]})};var k=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(a.a,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)("header",{class:"text-gray-700 body-font add-shadow",children:Object(l.jsxs)("div",{class:"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center",children:[Object(l.jsx)(a.b,{to:"/",children:Object(l.jsxs)("div",{class:"flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0",children:[Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-10 h-10 text-white p-2 bg-indigo-500 rounded-full",viewBox:"0 0 24 24",children:Object(l.jsx)("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})}),Object(l.jsx)("span",{class:"ml-3 text-xl",children:"PJS"})]})}),Object(l.jsx)("nav",{class:"md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400\tflex flex-wrap items-center text-base justify-center",children:Object(l.jsxs)("ul",{class:"inline-flex",children:[Object(l.jsx)("li",{class:"p-2",children:Object(l.jsx)(a.b,{to:"/product",children:"Planes"})}),Object(l.jsx)("li",{class:"p-2",children:Object(l.jsx)(a.b,{to:"/about",children:"About"})}),Object(l.jsx)("li",{class:"p-2",children:Object(l.jsx)(a.b,{to:"/info",children:"Info"})})]})}),Object(l.jsxs)("button",{class:"inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0",children:["Button",Object(l.jsx)("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-4 h-4 ml-1",viewBox:"0 0 24 24",children:Object(l.jsx)("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]})}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{component:v,path:"/product/:slug"}),Object(l.jsx)(o.a,{component:h,path:"/product",exact:!0}),Object(l.jsx)(o.a,{component:b,path:"/about"}),Object(l.jsx)(o.a,{component:m,path:"/info"}),Object(l.jsx)(o.a,{component:w,path:"/"})]})]})})})},y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,122)).then((function(t){var s=t.getCLS,l=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),l(e),c(e),r(e),i(e)}))};n.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root")),y()},48:function(e,t,s){}},[[121,1,2]]]);
//# sourceMappingURL=main.dd65d7a8.chunk.js.map