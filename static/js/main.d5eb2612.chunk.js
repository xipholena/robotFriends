(this.webpackJsonpreact_redux_part_1=this.webpackJsonpreact_redux_part_1||[]).push([[0],{25:function(e,t,r){},28:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r(3),c=r.n(o),a=r(6),s=r(9),i=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,29)).then((function(t){var r=t.getCLS,n=t.getFID,o=t.getFCP,c=t.getLCP,a=t.getTTFB;r(e),n(e),o(e),c(e),a(e)}))},l=r(13),h=r(14),u=(r(25),r(26),r(4)),b=r(5),d=r(8),j=r(7),g=r(1),p=function(e){var t=e.name,r=e.email,n=e.id;return Object(g.jsxs)("div",{className:"tc bg-black light-green ma3 pa3 br3 ba dib b--purple shadow-5 grow",children:[Object(g.jsx)("img",{src:"https://robohash.org/".concat(n,'?200x250" alt="robots'),alt:"robot"}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{children:t}),Object(g.jsx)("p",{className:"ma0",children:r})]})]})},O=function(e){var t=e.robots;return Object(g.jsx)("ul",{children:Object(g.jsx)("li",{children:t.map((function(e){return Object(g.jsx)(p,{name:e.name,email:e.email,id:e.id},e.id)}))})})},f=function(e){e.searchField;var t=e.searchChange;return Object(g.jsx)("div",{children:Object(g.jsx)("input",{className:"pa3 ma3 br3 ba dib b--purple",type:"search",placeholder:"Enter the robot name",onChange:t})})},m=function(e){var t=e.children;return Object(g.jsx)("div",{style:{overflowY:"scroll",border:"5px solid",height:"100vh"},children:t})},v=r(15),x=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(e){var n;return Object(u.a)(this,r),(n=t.call(this,e)).logComponentStackToMyService=function(e){console.log(n.state.logErrors),n.setState({logErrors:[].concat(Object(v.a)(n.state.logErrors),[e.toString()])},(function(){return console.log("err",n.state.logErrors[0])}))},n.state={hasError:!1,logErrors:[]},n}return Object(b.a)(r,[{key:"componentDidCatch",value:function(e,t){console.log(t.componentStack),this.logComponentStackToMyService(t.componentStack)}},{key:"render",value:function(){return this.state.hasError?Object(g.jsx)("h1",{className:"light-green",children:"Ooops! Something went wrong..."}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),r}(n.Component),y="CHANGE_SEARCH_FIELD",S="REQUEST_ROBOTS_PENDING",E="REQUEST_ROBOTS_SUCCESS",C="REQUEST_ROBOTS_FAILED",R=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(b.a)(r,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,r=e.onSearchChange,n=e.robots,o=e.isPending,c=e.error,a=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o?Object(g.jsx)("h1",{className:"f1 light-green",children:"Loading robots..."}):c?Object(g.jsx)("h1",{className:"f1 light-green",children:"Something went wrong..."}):Object(g.jsxs)("div",{className:"tc",children:[Object(g.jsx)("h1",{className:"f1 light-green",children:"RoboFriends"}),Object(g.jsx)(f,{searchChange:r}),Object(g.jsx)(m,{children:Object(g.jsx)(x,{children:Object(g.jsx)(O,{robots:a})})})]})}}]),r}(n.Component),F=Object(a.b)((function(e){return{searchField:e.searchRobots.searchField||"",robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e((r=t.target.value,{type:y,payload:r}));var r},onRequestRobots:function(){return e((function(e){e({type:S}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:E,payload:t})})).catch((function(t){return e({type:C,payload:t})}))}))}}}))(R),_=r(2),w={seachField:""},k={isPending:!1,robots:[],error:""},N=Object(l.createLogger)(),P=Object(s.b)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case y:return Object(_.a)(Object(_.a)({},e),{},{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case S:return Object(_.a)(Object(_.a)({},e),{},{isPending:!0});case E:return Object(_.a)(Object(_.a)({},e),{},{isPending:!1,robots:t.payload});case C:return Object(_.a)(Object(_.a)({},e),{},{isPending:!1,error:t.payload});default:return e}}}),T=Object(s.c)(P,Object(s.a)(h.a,N));c.a.render(Object(g.jsx)(a.a,{store:T,children:Object(g.jsx)(F,{})}),document.getElementById("root")),i()}},[[28,1,2]]]);
//# sourceMappingURL=main.d5eb2612.chunk.js.map