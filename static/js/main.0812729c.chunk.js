(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{36:function(e,t,a){e.exports=a(64)},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(28),c=a.n(r),m=a(32),o=a(2),s=a(29),i=a(30),u=a(35),p=a(34),E=a(31),h=a.n(E),d=function(){return h.a.get("https://randomuser.me/api/?results=30&nat=us")};a(9);var f=function(e){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s6 offset-s3 z-depth-3",id:"search"},l.a.createElement("input",{value:e.search,onChange:e.handleInputChange,name:"employee",lost:"employees",className:"form-control form-control-sm ml-3 w-75",type:"text",placeholder:"Search employee's name here..."}))))},v=a(11),y=a(12);var g=function(e){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 m10 l10 offset-l1"},l.a.createElement("table",{className:"centered striped z-depth-3"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"No."),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Image"),l.a.createElement("th",null,l.a.createElement(v.a,{icon:y.c})," Phone Number"),l.a.createElement("th",null,l.a.createElement(v.a,{icon:y.b})," Email"),l.a.createElement("th",null,l.a.createElement(v.a,{icon:y.a})," DOB"))),l.a.createElement("tbody",null,e.employee.map((function(e,t){return l.a.createElement("tr",{key:e.dob.date},l.a.createElement("th",{scope:"row"},t+1),l.a.createElement("td",null,e.name.first," ",e.name.last),l.a.createElement("td",null,l.a.createElement("img",{src:e.picture.thumbnail,alt:"emp's img"})),l.a.createElement("td",null,e.phone," "),l.a.createElement("td",null,l.a.createElement("a",{href:"mailto:"+e.email,target:"__blank"},e.email)),l.a.createElement("td",null,function(e){var t=e.split("-"),a=t[0];return[t[1],t[2].split("T")[0],a].join("-")}(e.dob.date)))}))))))};var N=function(){return l.a.createElement("footer",{className:"footer"},"\xa9 Copyright Employee Directory : Atima Bennett 2020")},b=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={search:[],employees:[],result:[],error:"",filteredEmp:[],isActive:!1},e.compareFnc=function(e,t){var a=e.name.first.toUpperCase(),n=t.name.first.toUpperCase(),l=0;return a>n?l=1:a<n&&(l=-1),l},e.handleInputChange=function(t){e.setState({search:t.target.value}),t.target.value?e.setState({isActive:!0}):e.setState({isActive:!1});var a=e.state.employees.filter((function(t){return-1!==(t.name.first+t.name.last+t.email+t.phone).indexOf(e.state.search)}));console.log(a),console.log(e.state.filteredEmp),e.setState({filteredEmp:a})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;d().then((function(t){e.setState({employees:t.data.results.sort(e.compareFnc)}),console.log(t)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h4",null,"Welcome to our company's employee directory!"),l.a.createElement(f,{handleInputChange:this.handleInputChange,employee:this.state.employees}),this.state.isActive?l.a.createElement(g,{employee:this.state.filteredEmp}):l.a.createElement(g,{employee:this.state.employees}),l.a.createElement(N,null))}}]),a}(n.Component),C=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 m12 l12"},l.a.createElement("h1",{className:"z-depth-3"},"EMPLOYEE DIRECTORY"))))};var w=function(e){return l.a.createElement("main",{className:"wrapper"},e.children)};var O=function(){return l.a.createElement(m.a,null,l.a.createElement("div",null,l.a.createElement(C,null),l.a.createElement(w,null,l.a.createElement(o.a,{exact:!0,path:"/",component:b}),l.a.createElement(N,null))))};a(63);c.a.render(l.a.createElement(O,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.0812729c.chunk.js.map