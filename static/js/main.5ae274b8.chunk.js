(this.webpackJsonprobofreinds=this.webpackJsonprobofreinds||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),c=n(3),a=n.n(c),i=(n(13),n(4)),o=n(5),h=n(7),l=n(6);var b=function(e){var t=e.id,n=e.name,s=e.email;return Object(r.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(r.jsx)("img",{alt:"robot",src:"https://robohash.org/".concat(t,"?200*200")}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:n}),Object(r.jsx)("p",{children:s})]})]})},j=function(e){var t=e.robots.map((function(e,t){return Object(r.jsx)(b,{id:e.id,name:e.name,email:e.email},t)}));return Object(r.jsx)("div",{children:t})},d=function(e){var t=e.searchItems;return Object(r.jsx)("div",{children:Object(r.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"type to search...",onChange:t})})},u=function(e){return Object(r.jsx)("div",{style:{overflowY:"scroll",height:"700px"},children:e.children})},f=(n(14),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).searchItems=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return this.state.robots.length?Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{className:"f1",children:"ROBOFREINDS"}),Object(r.jsx)(d,{searchItems:this.searchItems}),Object(r.jsx)(u,{children:Object(r.jsx)(j,{robots:t})})]}):Object(r.jsx)("h1",{children:"Loading..."})}}]),n}(s.Component));n(15);a.a.render(Object(r.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.5ae274b8.chunk.js.map