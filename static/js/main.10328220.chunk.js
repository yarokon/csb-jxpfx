(this["webpackJsonpfilter-select"]=this["webpackJsonpfilter-select"]||[]).push([[0],{21:function(e,n){},23:function(e){e.exports=JSON.parse('[{"id":1},{"id":2}]')},24:function(e){e.exports=JSON.parse('[{"id":1,"aId":1},{"id":2,"aId":1},{"id":3,"aId":2},{"id":4,"aId":2}]')},25:function(e){e.exports=JSON.parse('[{"id":1,"bId":1},{"id":2,"bId":1},{"id":3,"bId":2},{"id":4,"bId":2},{"id":5,"bId":3},{"id":6,"bId":3},{"id":7,"bId":4},{"id":8,"bId":4}]')},26:function(e){e.exports=JSON.parse('[{"id":1,"cId":1},{"id":2,"cId":1},{"id":3,"cId":2},{"id":4,"cId":2},{"id":5,"cId":3},{"id":6,"cId":3},{"id":7,"cId":4},{"id":8,"cId":4},{"id":9,"cId":5},{"id":10,"cId":5},{"id":11,"cId":6},{"id":12,"cId":6},{"id":13,"cId":7},{"id":14,"cId":7},{"id":15,"cId":8},{"id":16,"cId":8}]')},40:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var i=t(0),r=t(15),a=t.n(r),u=t(7),c=t(6),l=t(27),o=t(5),d=t.n(o),s=t(12),f=t.n(s);function p(e){var n=e.config,t=e.children,r=Object(c.d)(),a=r.values,o=r.setFieldValue,d=Object(i.useMemo)((function(){return n.map((function(e){var n=e.name;return f.a.get(a,n)}))}),[n,a]),s=Object(i.useMemo)((function(){return{names:n.map((function(e){return e.name})),optionsList:n.map((function(e){var n=e.list,t=e.filterBy,i=e.getOption;return n.map((function(e){return Object(u.a)({parentValue:e[t]},i(e))}))})),props:n.map((function(e){return f.a.omit(e,["name","list","getOption","filterBy"])}))}}),[n]),p=s.names,b=s.optionsList,m=s.props,O=Object(i.useMemo)((function(){return b.reduce((function(e,n,t){if(0===t)return[n];var i=d[t-1],r=Array.isArray(i),a=e[t-1].map((function(e){return e.value})),u=n.filter((function(e){return r?i.length?i.includes(e.parentValue):a.includes(e.parentValue):null!==i?i===e.parentValue:a.includes(e.parentValue)}));return[].concat(Object(l.a)(e),[u])}),[])}),[b,d]);return Object(i.useEffect)((function(){d.forEach((function(e,t){var i=Array.isArray(e),r=O[t].map((function(e){return e.value}));if(i){var a=r.filter((function(n){return e.includes(n)}));e.length!==a.length&&o(n[t].name,a)}else{var u=r.includes(e)?e:null;e!==u&&o(n[t].name,u)}}))}),[d,n,O,o]),t(Object(i.useMemo)((function(){return f.a.zipWith(p,O,m,(function(e,n,t){return Object(u.a)({name:e,options:n},t)}))}),[p,O,m]))}p.propTypes={config:d.a.arrayOf(d.a.shape({name:d.a.string.isRequired,list:d.a.array.isRequired,getOption:d.a.func.isRequired,filterBy:d.a.string}).isRequired).isRequired,children:d.a.func.isRequired};var b=Object(i.memo)(p,(function(e,n){return e.config===n.config})),m=t(28),O=t(29),j=t(17),v=t.n(j),I=t(22),h=t(21),g=t.n(h),x=t(2);V.defaultProps={multi:!1,disabled:!1,searchable:!0,getOptionValue:function(e){return e.value}};var y=Object(I.a)((function(e){var n=e.value,t=e.options;return e.multi?t.filter((function(e){return n.includes(e.value)})):t.find((function(e){return e.value===n}))||null}));function V(e){var n=e.name,t=e.value,i=e.options,r=e.onChange,a=e.onBlur,u=e.multi,c=e.disabled,l=e.clearable,o=e.searchable,d=e.placeholder,s=e.getOptionValue;return Object(x.jsx)(v.a,{name:n,value:y({value:t,options:i,multi:u}),onChange:function(e){var n=function(e){var n=e.newValue;switch(e.multi){case!0:return n?n.map((function(e){return e.value})):[];case!1:return n?n.value:null;default:throw new Error("multi is not defined")}}({newValue:e,multi:u});r(n)},onBlur:a,options:i,isMulti:u,isDisabled:c,isClearable:l,isSearchable:o,placeholder:c?"":d,getOptionValue:s,filterOption:Object(j.createFilter)({ignoreAccents:!1}),styles:g.a})}var B=V;var w=function(e){var n=e.name,t=Object(O.a)(e,["name"]),i=Object(c.c)({name:n}),r=Object(m.a)(i,3),a=r[0],l=r[2];return Object(x.jsxs)("label",{children:[Object(x.jsx)("span",{children:n}),Object(x.jsx)(B,Object(u.a)({name:n,value:a.value,onChange:l.setValue,onBlur:function(){return l.setTouched(!0)}},t))]})},A=t(23),M=t(24),S=t(25),q=t(26);t(40);var C=function(){var e=function(e){var n=e.id;return{label:String(n),value:n}},n=Object(i.useMemo)((function(){return[{name:"A",list:A,getOption:e,multi:!1},{name:"B",list:M,getOption:e,filterBy:"aId"},{name:"C",list:S,getOption:e,filterBy:"bId"},{name:"D",list:q,getOption:e,filterBy:"cId"}]}),[]);return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(c.b,{initialValues:{A:null,B:[],C:[],D:[]},children:Object(x.jsx)(c.a,{children:Object(x.jsx)(b,{config:n,children:function(e){return e.map((function(e){return Object(x.jsx)("div",{className:"row",children:Object(x.jsx)(w,Object(u.a)({multi:!0,clearable:!0,searchable:!1},e))},e.name)}))}})})})})},J=document.getElementById("root");a.a.render(Object(x.jsxs)(i.StrictMode,{children:[Object(x.jsx)(C,{}),","]}),J)}},[[41,1,2]]]);
//# sourceMappingURL=main.10328220.chunk.js.map