(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(2),c=n(12),a=n.n(c),l=(n(24),n(25),n(13)),i=n(14),o=n(18),h=n(17);var u=function(){return Object(r.jsxs)("div",{className:"container-fluid py-3 text-white",style:{backgroundColor:"#03002e"},children:[Object(r.jsx)("h2",{className:"text-center",children:"Employee Directory"}),Object(r.jsx)("p",{className:"lead text-center",children:"Click on controls to filter by heading or use the search box to narrow your results"})]})};var d=function(e){return Object(r.jsx)("div",{className:"d-flex justify-content-center my-2 shadow p-3 mb-5 bg-white rounded",children:Object(r.jsx)("form",{onSubmit:e.handleFormSubmit,children:Object(r.jsx)("input",{type:"text",id:"search",placeholder:"search",name:"search",onChange:e.handleInputChange,value:e.search})})})},j=n(15),b=n.n(j);var m=function(e){return Object(r.jsx)("tbody",{children:e.result.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:Object(r.jsx)("img",{alt:e.name.first,src:e.picture.thumbnail})}),Object(r.jsxs)("td",{children:[e.name.first," ",e.name.last," "]}),Object(r.jsx)("td",{children:e.cell}),Object(r.jsx)("td",{children:e.email}),Object(r.jsx)("td",{children:b()(e.dob.date).format("MM/DD/YYYY")})]},e.login.salt)}))})};var f=function(e){return Object(r.jsx)("thead",{className:"bg-dark text-white",children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{scope:"col",children:"Image"}),Object(r.jsx)("th",{scope:"col",children:Object(r.jsx)("button",{onClick:e.handleSort,className:"btn btn-dark",children:"Name \u2195"})}),Object(r.jsx)("th",{scope:"col",children:"Phone"}),Object(r.jsx)("th",{scope:"col",children:"Email"}),Object(r.jsx)("th",{scope:"col",children:"DOB"})]})})};var p=function(e){return Object(r.jsxs)("table",{className:"table  mx-3 px-3",children:[Object(r.jsx)(f,{handleSort:e.handleSort}),Object(r.jsx)(m,{result:e.result})]})},x=n(16),O=n.n(x),y=function(){return O.a.get("https://randomuser.me/api/?results=75&nat=us,dk,fr,gb")},g=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={results:[],search:"",isCliked:!1},e.searchEmployees=function(){y().then((function(t){return e.setState({results:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){e.setState({search:t.target.value}),e.handleFilter()},e.handleFilter=function(){var t=e.state.results.filter((function(t){return-1!==t.name.first.indexOf(e.state.search)||-1!==t.name.last.indexOf(e.state.search)}));e.setState({results:t})},e.handleFormSubmit=function(t){t.preventDefault(),e.handleFilter(),e.setState({search:""})},e.handleSort=function(){var t=e.state.results;e.state.isCliked?(t.sort((function(e,t){return e.name.first.toUpperCase()>t.name.first.toUpperCase()?-1:1})),e.setState({results:t,isCliked:!1})):(t.sort((function(e,t){return e.name.first.toUpperCase()>t.name.first.toUpperCase()?1:-1})),e.setState({results:t,isCliked:!0}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.searchEmployees()}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(u,{}),Object(r.jsx)(d,{search:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}),Object(r.jsx)(p,{handleSort:this.handleSort,result:this.state.results})]})}}]),n}(s.Component);var v=function(){return Object(r.jsx)(g,{})};n(44);a.a.render(Object(r.jsx)(v,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.f1aae97e.chunk.js.map