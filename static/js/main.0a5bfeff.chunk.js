(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,,,,,,,,function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Jagatai Khan","number":"6556-083-12"},{"id":"id-2","name":"Lion el Jonson","number":"6556-464-07"},{"id":"id-3","name":"Rogal Dorn","number":"6555-701-13"},{"id":"id-4","name":"Robaut Guilliman","number":"6556-111-12"}]')},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(8),r=n.n(s),i=(n(14),n(2)),o=n(3),l=n(5),u=n(4),b=(n(15),n(7)),m=(n(16),n(22)),d=n(0),h=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:"",id:""},t.handleChange=function(e){var n,a=e.target,c=a.name,s=a.value;t.setState((n={},Object(b.a)(n,c,s),Object(b.a)(n,"id",Object(m.a)()),n))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("form",{className:"submit__form",onSubmit:this.handleSubmit,children:[Object(d.jsxs)("label",{className:"form__label",children:[Object(d.jsx)("h3",{children:"Name"}),Object(d.jsx)("input",{className:"form__input",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange})]}),Object(d.jsxs)("label",{className:"form__label",children:[Object(d.jsx)("h3",{children:"Number"}),Object(d.jsx)("input",{className:"form__input",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange})]}),Object(d.jsx)("button",{className:"form__button",type:"submit",children:"Add contact"})]})}}]),n}(a.Component);n(18);function j(t){var e=t.value,n=t.onInput;return Object(d.jsxs)("label",{children:[Object(d.jsx)("h3",{children:"Find contact by name"}),Object(d.jsx)("input",{className:"filter__input",type:"text",value:e,onChange:n})]})}n(19);function f(t){var e=t.contacts,n=t.handleDeleteContact;return Object(d.jsx)("ul",{className:"contacts__list",children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(d.jsxs)("li",{className:"contacts__item",children:[Object(d.jsx)("p",{className:"contacts__name",children:a}),Object(d.jsx)("p",{children:c}),Object(d.jsx)("button",{className:"delete__btn",onClick:function(){return n(e)},children:"Delete contact"})]},e)}))})}var p=n(9),O=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={contacts:p,filter:""},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleFormSubmit=function(e){var n=t.state.contacts;void 0===n.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))?t.setState({contacts:n.concat(e)}):alert("".concat(e.name," is alredy in the contacts list"))},t.changeFilter=function(e){t.setState({filter:e.target.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter;return Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsxs)("section",{className:"section",children:[Object(d.jsx)("h1",{children:"Phonebook"}),Object(d.jsx)(h,{onSubmit:this.handleFormSubmit})]}),Object(d.jsxs)("section",{className:"section",children:[Object(d.jsx)("h2",{children:"Contacts"}),Object(d.jsx)(j,{value:t,onInput:this.changeFilter}),Object(d.jsx)(f,{contacts:this.getVisibleContacts(),handleDeleteContact:this.deleteContact})]})]})}}]),n}(a.Component);r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.0a5bfeff.chunk.js.map