(function(t){function e(e){for(var s,l,i=e[0],o=e[1],c=e[2],u=0,m=[];u<i.length;u++)l=i[u],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&m.push(n[l][0]),n[l]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);d&&d(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,i=1;i<a.length;i++){var o=a[i];0!==n[o]&&(s=!1)}s&&(r.splice(e--,1),t=l(l.s=a[0]))}return t}var s={},n={app:0},r=[];function l(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=s,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(a,s,function(e){return t[e]}.bind(null,s));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var d=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),n=a.n(s);n.a},"3ef2":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=a("f13c"),r=a.n(n),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-col h-screen min-h-screen justify-between",attrs:{id:"app"}},[a("Nav"),a("main",{staticClass:"flex-grow"},[a("Home",{attrs:{id:"home"}}),a("About",{attrs:{id:"about"}}),a("Media",{attrs:{id:"media"}}),a("Principles",{attrs:{id:"principles"}}),a("Contact",{attrs:{id:"contact"}})],1),a("Footer")],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"top-0 select-none bg-purple-900 text-gray-100 lg:flex lg:items-stretch w-full z-20 shadow-lg fixed"},[a("div",{staticClass:"flex flex-no-shrink items-stretch h-12"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#home",expression:"'#home'"}],staticClass:"flex-no-grow flex-no-shrink relative py-2 px-4 md:text-lg leading-normal text-white md:font-extrabold flex items-center truncate",attrs:{href:"#"}},[t._v("Mike Koclęga for Dobson Ward - Knox City")]),a("button",{staticClass:"block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4",on:{click:t.toggleMenu}},[a("svg",{directives:[{name:"show",rawName:"v-show",value:!t.expanded,expression:"!expanded"}],staticClass:"fill-current text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[a("path",{attrs:{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}})]),a("svg",{directives:[{name:"show",rawName:"v-show",value:t.expanded,expression:"expanded"}],staticClass:"fill-current text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[a("path",{attrs:{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"}})])])]),a("div",{staticClass:"lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow border-b-2 border-purple-500 md:border-b-0",class:{hidden:!t.expanded}},[a("div",{staticClass:"lg:flex lg:items-stretch lg:justify-end ml-auto"},[a("nav-link",{attrs:{to:"home",onStart:t.close}},[t._v("Home")]),a("nav-link",{attrs:{to:"about",onStart:t.close}},[t._v("About Me")]),a("nav-link",{attrs:{to:"media",onStart:t.close}},[t._v("Media")]),a("nav-link",{attrs:{to:"principles",onStart:t.close}},[t._v("My Principles")]),a("nav-link",{attrs:{to:"contact",onStart:t.close}},[t._v("Contact")])],1)])])},c=[],d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#"+t.to,onStart:t.onStart},expression:"{ el: `#${to}`, onStart: onStart }"}],staticClass:"flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal flex items-center mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500 font-semibold",attrs:{"exact-active-class":"bg-purple-500",href:"#"}},[t._t("default")],2)},u=[],m={name:"NavLink",props:{to:String,onStart:Function}},p=m,f=a("2877"),x=Object(f["a"])(p,d,u,!1,null,null,null),v=x.exports,b={name:"Nav",components:{NavLink:v},data:function(){return{expanded:!1}},methods:{toggleMenu:function(){this.expanded=!this.expanded},close:function(){this.expanded=!1}}},h=b,g=Object(f["a"])(h,o,c,!1,null,null,null),w=g.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"w-full bottom-0 flex flex-col bg-gray-900 text-gray-500 fixed z-20"},[a("span",{staticClass:"text-lg"},[a("a",{staticClass:"mx-2",attrs:{href:"https://www.linkedin.com/in/mkoclega",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","linkedin"]}})],1),a("a",{staticClass:"mx-2",attrs:{href:"https://www.facebook.com/Mike4Knox",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","facebook"]}})],1),a("a",{staticClass:"mx-2",attrs:{href:"https://www.instagram.com/mike4knox/",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1),a("a",{staticClass:"mx-2",attrs:{href:"https://www.youtube.com/channel/UCJW5qT2Ik2SjQ1_2dDcAo_A",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","youtube"]}})],1)]),a("span",{staticClass:"text-xs md:text-sm"},[t._v("Authorised by Tomas Cifuentes, 2 Francis Cres, Ferntree Gully")])])},_=[],C={},k=Object(f["a"])(C,y,_,!1,null,null,null),E=k.exports,M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"h-screen py-8 md:py-12 purple-grad bg-fixed"},[a("div",{staticClass:"m-auto container h-full max-h-full px-6 flex flex-col md:items-center"},[a("img",{staticClass:"object-contain m-auto md:my-8",staticStyle:{"max-height":"95%"},attrs:{src:"/assets/img/candidate.jpg"}})])])}],S=(a("cccb"),{}),O=Object(f["a"])(S,M,j,!1,null,null,null),F=O.exports,P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container m-auto px-6 p-10 flex flex-col md:h-screen justify-center"},[a("div",{staticClass:"w-full"},[a("h3",{staticClass:"mx-2 my-4 text-left text-gray-600 font-extrabold text-4xl xs:text-5xl md:text-6xl border-b-2 border-purple-300"},[t._v(" About me ")])]),a("div",{staticClass:"w-full text-justify text-gray-700 py-6 px-4 md:text-lg"},[a("p",[t._v("I’m a creative, empathic, analytical and resilient 36-year-old electronic music artist, freelance data engineer, and a former logistics officer in the Army Reserve. Last December I returned home, having lived abroad in Amsterdam and Kuala Lumpur for nine years. These experiences exposed me to unique and diverse lifestyles and perspectives not found in Australia.")]),a("p",{staticClass:"mt-6"},[t._v("My time away from home has instilled profound gratitude for our unique foothills environment and lifestyle, and sense of community found in Ferntree Gully, which has been my family home for 20 years.")]),a("p",{staticClass:"mt-6"},[t._v("I want to listen to the needs of the community with empathy and provide a way forward that supports the community, nurtures the environment and ensures wellbeing.")])])])}],A={},N=Object(f["a"])(A,P,$,!1,null,null,null),G=N.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-fixed object-cover bg-image clip"},[a("div",{staticClass:"container m-auto px-6 py-12 flex flex-wrap"},[t._m(0),a("div",{staticClass:"w-full py-10"},[a("div",{staticClass:"md:flex bg-white rounded-lg p-6 mb-6 shadow-lg"},[a("font-awesome-icon",{staticClass:"text-4xl text-purple-900 mx-auto md:mx-4",attrs:{icon:["fas","users"]}}),t._m(1)],1),a("div",{staticClass:"md:flex bg-white rounded-lg p-6 mb-6 shadow-lg"},[a("div",[a("font-awesome-icon",{staticClass:"text-4xl text-purple-900 mx-auto md:mx-4",attrs:{icon:["fab","pagelines"]}})],1),t._m(2)]),a("div",{staticClass:"md:flex bg-white rounded-lg p-6 mb-6 shadow-lg"},[a("div",[a("font-awesome-icon",{staticClass:"text-4xl text-purple-900 mx-auto md:mx-4",attrs:{icon:["fas","heart"]}})],1),t._m(3)])]),a("div",{staticClass:"w-full text-xs position-bottom-0 text-left text-gray-800 text-opacity-25 break-words"},[t._v("Andrew Amos (https://commons.wikimedia.org/wiki/File:Mt_Dandenong_from_Mooroolbark.jpg), „Mt Dandenong from Mooroolbark“, https://creativecommons.org/licenses/by-sa/3.0/legalcode")])])])},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mx-2 text-left border-b-2 border-purple-300"},[a("h3",{staticClass:"text-gray-600 font-extrabold text-4xl xs:text-5xl md:text-6xl"},[t._v(" My Principles ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center md:text-left"},[a("h2",{staticClass:"text-2xl border-b-2 border-purple-500"},[t._v("Support the Community")]),a("div",{staticClass:"text-gray-700 text-left mt-6"},[a("ul",{staticClass:"list-disc"},[a("li",{staticClass:"py-2"},[a("strong",[t._v("Fully Independent - No political party membership")])]),a("li",{staticClass:"py-2"},[a("strong",[t._v("Freeze rates in FY21/22")]),t._v(" and continue to help the financially vulnerable with fair rate discounts and deferments")]),a("li",{staticClass:"py-2"},[t._v("Town planning and development must "),a("strong",[t._v("respect the communities wishes")]),t._v(", with "),a("strong",[t._v("strict enforcement of the Foothills policy")])]),a("li",{staticClass:"py-2"},[t._v("Create more affordable housing options by making "),a("strong",[t._v("Knox Tiny-house friendly")])]),a("li",{staticClass:"py-2"},[t._v("Increase transparency with "),a("strong",[t._v("increased community engagement")]),t._v(" and adoption of Blockchain governance technology")]),a("li",{staticClass:"py-2"},[t._v("Stimulate the local economy by ensuring "),a("strong",[t._v("council procurement prioritises local small business")]),t._v(" and startups")]),a("li",{staticClass:"py-2"},[a("strong",[t._v("Promote FTG and UFTG towns as the hiking gateways to the Dandenongs")]),t._v(" to boost town activity and reduce carpark congestion at 1000 steps")]),a("li",{staticClass:"py-2"},[t._v("Put our community on the map by "),a("strong",[t._v("creating a thriving arts scene")]),t._v(" with renewed murals, establishing legal walls for street art and financial and logistic support for local artist co-ops")]),a("li",{staticClass:"py-2"},[t._v("Provide "),a("strong",[t._v("financial and logistic support")]),t._v(" for our local community non-for profits and sports clubs")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center md:text-left"},[a("h2",{staticClass:"text-2xl border-b-2 border-purple-500"},[t._v("Nurture the Environment")]),a("div",{staticClass:"text-gray-700 text-left mt-6"},[a("ul",{staticClass:"list-disc"},[a("li",{staticClass:"py-2"},[a("strong",[t._v("Protect the foothills skyline")]),t._v(" and communities connection to the Dandenong's National Park from over-development")]),a("li",{staticClass:"py-2"},[a("strong",[t._v("Protect Lake Knox")]),t._v(" by challenging Development Victoria’s development plans")]),a("li",{staticClass:"py-2"},[t._v("Make Knox a leader in Permaculture adoption by "),a("strong",[t._v("establishing a Permaculture committee")]),t._v(" and creating a Permaculture adoption roadmap in the next council five year plan")]),a("li",{staticClass:"py-2"},[a("strong",[t._v("Rebalance engagement")]),t._v(" between council and environment advocacy groups")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center md:text-left"},[a("h2",{staticClass:"text-2xl border-b-2 border-purple-500"},[t._v("Ensure Wellbeing")]),a("div",{staticClass:"text-gray-700 text-left mt-6"},[a("ul",{staticClass:"list-disc"},[a("li",{staticClass:"py-2"},[t._v("Provide affordable and well resourced health and education services, with a "),a("strong",[t._v("focus on community mental health, youth outreach and high quality care of our elders")])]),a("li",{staticClass:"py-2"},[t._v("Support the use of "),a("strong",[t._v("Churches as temporary winter accommodation")]),t._v(" for the homeless")]),a("li",{staticClass:"py-2"},[t._v("Enable access to public "),a("strong",[t._v("shower facilities for the homeless")])])])])])}],I=(a("f54c"),{}),R=Object(f["a"])(I,T,L,!1,null,null,null),D=R.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container m-auto px-6 p-10 flex flex-col md:h-screen justify-center"},[t._m(0),a("div",{staticClass:"w-full py-10"},[a("div",{staticClass:"w-auto shadow-lg p-6 rounded"},[a("h4",{staticClass:"text-left text-xl text-gray-700 mb-6"},[t._v("Stay connected on Social Media")]),a("div",{staticClass:"flex flex-wrap text-5xl"},[a("a",{staticClass:"w-full flex items-center mx-2",attrs:{href:"https://www.linkedin.com/in/mkoclega",target:"_blank"}},[a("font-awesome-icon",{staticClass:"text-purple-900 ml-1",attrs:{icon:["fab","linkedin"]}}),a("span",{staticClass:"text-base px-4"},[t._v("LinkedIn")])],1),a("a",{staticClass:"w-full flex items-center m-2",attrs:{href:"https://www.facebook.com/Mike4Knox",target:"_blank"}},[a("font-awesome-icon",{staticClass:"text-purple-900",attrs:{icon:["fab","facebook"]}}),a("span",{staticClass:"text-base px-4"},[t._v("Facebook")])],1),a("a",{staticClass:"w-full flex items-center m-2",attrs:{href:"https://www.instagram.com/mike4knox/",target:"_blank"}},[a("font-awesome-icon",{staticClass:"text-purple-900",attrs:{icon:["fab","instagram"]}}),a("span",{staticClass:"text-base px-6"},[t._v("Instagram")])],1),a("a",{staticClass:"w-full flex items-center m-2",attrs:{href:"https://www.youtube.com/channel/UCJW5qT2Ik2SjQ1_2dDcAo_A",target:"_blank"}},[a("font-awesome-icon",{staticClass:"text-purple-900",attrs:{icon:["fab","youtube"]}}),a("span",{staticClass:"text-base px-4"},[t._v("YouTube")])],1)])])]),a("div",{staticClass:"w-full py-10"},[a("div",{staticClass:"w-auto shadow-lg p-6 rounded"},[a("h4",{staticClass:"text-left text-xl text-gray-700 mb-6"},[t._v("Get in touch")]),a("mail-signup-form")],1)])])},z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-full"},[a("h3",{staticClass:"mx-2 text-left border-b-2 border-purple-300 text-gray-600 font-extrabold text-4xl xs:text-5xl md:text-6xl"},[t._v(" Contact ")])])}],V=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"w-full max-w-sm",attrs:{action:"https://mike4knox.us17.list-manage.com/subscribe/post",method:"POST"}},[a("input",{attrs:{type:"hidden",name:"u",value:"aaf884fe9bc4d44c74514fcb3"}}),a("input",{attrs:{type:"hidden",name:"id",value:"f0d4295e4c"}}),a("div",{staticClass:"md:flex md:items-center mb-6"},[a("div",{staticClass:"md:w-1/3"},[a("label",{staticClass:"block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4",attrs:{for:"inline-full-name"}},[t._v(" Email ")])]),a("div",{staticClass:"md:w-2/3"},[a("input",{staticClass:"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",attrs:{id:"MERGE0",name:"MERGE0",type:"email"}})])]),a("div",{staticClass:"md:flex md:items-center mb-6"},[a("div",{staticClass:"md:w-1/3"},[a("label",{staticClass:"block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4",attrs:{for:"inline-password"}},[t._v(" First Name ")])]),a("div",{staticClass:"md:w-2/3"},[a("input",{staticClass:"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",attrs:{id:"MERGE1",name:"MERGE1",type:"text"}})])]),a("div",{staticClass:"md:flex md:items-center mb-6"},[a("div",{staticClass:"md:w-1/3"},[a("label",{staticClass:"block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4",attrs:{for:"inline-password"}},[t._v(" Last Name ")])]),a("div",{staticClass:"md:w-2/3"},[a("input",{staticClass:"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",attrs:{id:"MERGE2",name:"MERGE2",type:"text"}})])]),a("div",{staticClass:"md:flex md:items-center mb-6"},[a("div",{staticClass:"md:w-1/3"},[a("label",{staticClass:"block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4",attrs:{for:"inline-password"}},[t._v(" Your message ")])]),a("div",{staticClass:"md:w-2/3"},[a("textarea",{staticClass:"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",attrs:{rows:"5",id:"MERGE3",name:"MERGE3",type:"text"}})])]),a("div",{staticClass:"md:flex md:items-center"},[a("div",{staticClass:"md:w-1/3"}),a("div",{staticClass:"md:w-2/3"},[a("button",{staticClass:"font-semibold bg-purple-900 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded",attrs:{type:"submit"}},[t._v(" Subscribe ")])])])])}],q={},B=Object(f["a"])(q,V,H,!1,null,null,null),J=B.exports,W={name:"Contact",components:{MailSignupForm:J}},U=W,Y=Object(f["a"])(U,K,z,!1,null,null,null),Q=Y.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container m-auto px-6 p-10 flex flex-col justify-center"},[t._m(0),a("div",{staticClass:"w-full text-justify text-gray-700 py-6 px-4 md:text-lg"},[a("EmbeddedVideo",{attrs:{link:"https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fmeettheknoxcandidates%2Fvideos%2F3122086607913730%2F"}}),a("EmbeddedVideo",{attrs:{link:"https://www.youtube.com/embed/X-g-nBC4lMI"}})],1)])},Z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-full"},[a("h3",{staticClass:"mx-2 my-4 text-left text-gray-600 font-extrabold text-4xl xs:text-5xl md:text-6xl border-b-2 border-purple-300"},[t._v(" Media ")])])}],tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"videowrapper my-6 md:my-12"},[a("iframe",{attrs:{src:t.link,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])},et=[],at={name:"EmbeddedVideo",props:{link:String}},st=at,nt=(a("d1cf"),Object(f["a"])(st,tt,et,!1,null,null,null)),rt=nt.exports,lt={name:"Media",components:{EmbeddedVideo:rt}},it=lt,ot=Object(f["a"])(it,X,Z,!1,null,null,null),ct=ot.exports,dt={name:"App",components:{Nav:w,Footer:E,Home:F,About:G,Principles:D,Contact:Q,Media:ct}},ut=dt,mt=(a("034f"),Object(f["a"])(ut,l,i,!1,null,null,null)),pt=mt.exports,ft=a("ecee"),xt=a("f2d1"),vt=a("c074"),bt=a("ad3d"),ht=function(t){ft["c"].add(xt["b"],vt["a"],vt["b"],xt["d"],xt["c"],xt["a"],xt["e"]),t.component("font-awesome-icon",bt["a"])};a("c898");s["a"].config.productionTip=!1,s["a"].use(r.a),ht(s["a"]),new s["a"]({render:function(t){return t(pt)}}).$mount("#app")},"5ced":function(t,e,a){},"85ec":function(t,e,a){},c898:function(t,e,a){},cccb:function(t,e,a){"use strict";var s=a("5ced"),n=a.n(s);n.a},d1cf:function(t,e,a){"use strict";var s=a("d502"),n=a.n(s);n.a},d502:function(t,e,a){},f54c:function(t,e,a){"use strict";var s=a("3ef2"),n=a.n(s);n.a}});
//# sourceMappingURL=app.82ac383b.js.map