(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(6),s=n.n(o),c=n(1),l=n(2),i=n(4),u=n(3),b=(n(13),n(7)),p=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={goods:t.props.goods,isReversed:!1,sortedBy:""},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.sortAlphabetically=function(){t.setState({sortedBy:"alphabetically"})},t.reset=function(){t.setState({isReversed:!1,sortedBy:""})},t.sortByLength=function(){t.setState({sortedBy:"length"})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.goods,n=t.isReversed,a=t.sortedBy,o=Object(b.a)(e);return o.sort((function(t,e){switch(a){case"alphabetically":return t.localeCompare(e);case"length":return t.length-e.length;default:return 0}})),n&&o.reverse(),r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,o.map((function(t){return r.a.createElement("li",{key:t},t)}))),r.a.createElement("button",{type:"button",onClick:this.reverse},"Reverse"),r.a.createElement("button",{type:"button",onClick:this.sortAlphabetically},"Sort alphabetically"),r.a.createElement("button",{type:"button",onClick:this.reset},"Reset"),r.a.createElement("button",{type:"button",onClick:this.sortByLength},"Sort by length"))}}]),n}(r.a.Component),y=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={visability:!1},t.start=function(){t.setState((function(t){return{visability:!t.visability}}))},t}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("button",{type:"button",onClick:this.start},"Start"),this.state.visability&&r.a.createElement(p,{goods:y}))}}]),n}(r.a.Component);s.a.render(r.a.createElement(h,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.c20ccb02.chunk.js.map