webpackJsonp([0,2],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}n(1);var o=n(5),a=r(o),i=n(157),u=r(i),l=n(158),c=r(l),f=n(396),s=r(f),d=n(443),p=r(d),v=n(444),h=r(v);(0,h["default"])(s["default"],p["default"],"app"),u["default"].render(a["default"].createElement(c["default"],null),document.getElementById("app"))},1:function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.id,r,""]]);n(4)(r,{});r.locals&&(e.exports=r.locals)},2:function(e,t,n){t=e.exports=n(3)(),t.push([e.id,"body{background:#fff8dc;font-family:sans-serif}.lane{display:inline-block;margin:1em;background-color:#efefef;border:1px solid #ccc;border-radius:.5em;min-width:10em;vertical-align:top}.lane-header{overflow:auto;padding:1em;color:#efefef;background-color:#333;border-top-left-radius:.5em;border-top-right-radius:.5em}.lane-name{float:left}.lane-add-note{float:left;margin-right:.5em}.lane-delete{float:right;margin-left:.5em;visibility:hidden}.lane-header:hover .lane-delete{visibility:visible}.add-lane,.lane-add-note button{cursor:pointer;background-color:#fdfdfd;border:1px solid #ccc}.lane-delete button{padding:0;cursor:pointer;color:#fff;background-color:transparent;border:0}.add-note{background-color:#fdfdfd;border:1px solid #ccc}.notes{margin:.5em;padding-left:0;max-width:10em;list-style:none}.note{margin-bottom:.5em;padding:.5em;background-color:#fdfdfd;box-shadow:0 0 .3em .03em rgba(0,0,0,.3)}.note:hover{box-shadow:0 0 .3em .03em rgba(0,0,0,.7);transition:.6s}.note .value{display:inline-block}.note .delete{float:right;padding:0;background-color:#fdfdfd;border:none;cursor:pointer;visibility:hidden}.note:hover .delete{visibility:visible}",""])},3:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},4:function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=p[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(c(r.parts[a],t))}else{for(var i=[],a=0;a<r.parts.length;a++)i.push(c(r.parts[a],t));p[r.id]={id:r.id,refs:1,parts:i}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],a=o[0],i=o[1],u=o[2],l=o[3],c={css:i,media:u,sourceMap:l};n[a]?n[a].parts.push(c):t.push(n[a]={id:a,parts:[c]})}return t}function a(e,t){var n=b(),r=m[m.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),m.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=m.indexOf(e);t>=0&&m.splice(t,1)}function u(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",a(e,t),t}function c(e,t){var n,r,o;if(t.singleton){var a=g++;n=y||(y=u(t)),r=f.bind(null,n,a,!1),o=f.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),r=d.bind(null,n),o=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=u(t),r=s.bind(null,n),o=function(){i(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=O(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function s(e,t){var n=t.css,r=t.media;t.sourceMap;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t){var n=t.css,r=(t.media,t.sourceMap);r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}var p={},v=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=v(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),b=v(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,g=0,m=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var a=[],i=0;i<n.length;i++){var u=n[i],l=p[u.id];l.refs--,a.push(l)}if(e){var c=o(e);r(c,t)}for(var i=0;i<a.length;i++){var l=a[i];if(0===l.refs){for(var f=0;f<l.parts.length;f++)l.parts[f]();delete p[l.id]}}}};var O=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},158:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var u,l,c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(159),s=r(f),d=n(5),p=r(d),v=n(171),h=n(299),b=r(h),y=n(393),g=r(y),m=n(395),O=r(m),_=n(440),E=r(_),k=(u=(0,v.DragDropContext)(b["default"]),u(l=function(e){function t(){return o(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),c(t,[{key:"render",value:function(){return p["default"].createElement("div",null,p["default"].createElement("button",{className:"add-lane",onClick:this.addLane},"+"),p["default"].createElement(s["default"],{stores:[E["default"]],inject:{lanes:function(){return E["default"].getState().lanes||[]}}},p["default"].createElement(g["default"],null)))}},{key:"addLane",value:function(){O["default"].create({name:"New lane"})}}]),t}(p["default"].Component))||l);t["default"]=k},393:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),a=r(o),i=n(394),u=r(i);t["default"]=function(e){var t=e.lanes;return a["default"].createElement("div",{className:"lanes"},t.map(function(e){return a["default"].createElement(u["default"],{className:"lane",key:e.id,lane:e})}))}},394:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l,c,f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(159),d=r(s),p=n(5),v=r(p),h=n(395),b=r(h),y=n(410),g=r(y),m=n(414),O=r(m),_=n(415),E=r(_),k=n(411),j=r(k),w=n(171),P=n(413),S=r(P),M={hover:function(e,t){var n=t.getItem(),r=n.id;e.lane.notes.length||b["default"].attachToLane({laneId:e.lane.id,noteId:r})}},N=(l=(0,w.DropTarget)(S["default"].NOTE,M,function(e){return{connectDropTarget:e.dropTarget()}}),l(c=function(e){function t(){var e,n,r,o;a(this,t);for(var u=arguments.length,l=Array(u),c=0;u>c;c++)l[c]=arguments[c];return n=r=i(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.addNote=function(e){var t=r.props.lane.id,n=O["default"].create({task:"New task"});b["default"].attachToLane({noteId:n.id,laneId:t})},r.deleteNote=function(e,t){t.stopPropagation();var n=r.props.lane.id;b["default"].detachFromLane({laneId:n,noteId:e}),O["default"]["delete"](e)},r.editName=function(e){var t=r.props.lane.id;return e.trim()?void b["default"].update({id:t,name:e,editing:!1}):void b["default"].update({id:t,editing:!1})},r.deleteLane=function(){var e=r.props.lane.id;b["default"]["delete"](e)},r.activateLaneEdit=function(){var e=r.props.lane.id;b["default"].update({id:e,editing:!0})},o=n,i(r,o)}return u(t,e),f(t,[{key:"render",value:function(){var e=this.props,t=e.connectDropTarget,n=e.lane,r=o(e,["connectDropTarget","lane"]);return t(v["default"].createElement("div",r,v["default"].createElement("div",{className:"lane-header",onClick:this.activateLaneEdit},v["default"].createElement("div",{className:"lane-add-note"},v["default"].createElement("button",{onClick:this.addNote},"+")),v["default"].createElement(j["default"],{className:"lane-name",editing:n.editing,value:n.name,onEdit:this.editName}),v["default"].createElement("div",{className:"lane-delete"},v["default"].createElement("button",{onClick:this.deleteLane},"x"))),v["default"].createElement(d["default"],{stores:[E["default"]],inject:{notes:function(){return E["default"].getNotesByIds(n.notes)}}},v["default"].createElement(g["default"],{onValueClick:this.activateNoteEdit,onEdit:this.editNote,onDelete:this.deleteNote}))))}},{key:"editNote",value:function(e,t){return t.trim()?void O["default"].update({id:e,task:t,editing:!1}):void O["default"].update({id:e,editing:!1})}},{key:"activateNoteEdit",value:function(e){O["default"].update({id:e,editing:!0})}}]),t}(v["default"].Component))||c);t["default"]=N},395:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(396),a=r(o);t["default"]=a["default"].generateActions("create","update","delete","attachToLane","detachFromLane","move")},396:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(397),a=r(o),i=new a["default"];t["default"]=i},410:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),a=r(o),i=n(411),u=r(i),l=n(412),c=r(l),f=n(395),s=r(f);t["default"]=function(e){var t=e.notes,n=e.onValueClick,r=e.onEdit,o=e.onDelete;return a["default"].createElement("ul",{className:"notes"},t.map(function(e){return a["default"].createElement(c["default"],{className:"note",id:e.id,key:e.id,editing:e.editing,onMove:s["default"].move},a["default"].createElement(u["default"],{editing:e.editing,value:e.task,onValueClick:n.bind(null,e.id),onEdit:r.bind(null,e.id),onDelete:o.bind(null,e.id)}))}))}},411:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(5),f=r(c),s=function(e){function t(){var e,n,r,o;a(this,t);for(var u=arguments.length,l=Array(u),c=0;u>c;c++)l[c]=arguments[c];return n=r=i(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.renderEdit=function(){return f["default"].createElement("input",{type:"text",ref:function(e){return e?e.selectionStart=r.props.value.length:null},autoFocus:!0,defaultValue:r.props.value,onBlur:r.finishEdit,onKeyPress:r.checkEnter})},r.renderValue=function(){var e=r.props.onDelete;return f["default"].createElement("div",{onClick:r.props.onValueClick},f["default"].createElement("span",{className:"value"},r.props.value),e?r.renderDelete():null)},r.renderDelete=function(){return f["default"].createElement("button",{className:"delete",onClick:r.props.onDelete},"x")},r.checkEnter=function(e){"Enter"===e.key&&r.finishEdit(e)},r.finishEdit=function(e){var t=e.target.value;r.props.onEdit&&r.props.onEdit(t)},o=n,i(r,o)}return u(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=(e.value,e.onEdit,e.onValueClick,e.editing),n=o(e,["value","onEdit","onValueClick","editing"]);return f["default"].createElement("div",n,t?this.renderEdit():this.renderValue())}}]),t}(f["default"].Component);t["default"]=s},412:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l,c,f,s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n(5),v=r(p),h=n(171),b=n(413),y=r(b),g={beginDrag:function(e){return{id:e.id}}},m={hover:function(e,t){var n=e.id,r=t.getItem(),o=r.id;o!==n&&e.onMove({sourceId:o,targetId:n})}},O=(l=(0,h.DragSource)(y["default"].NOTE,g,function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}}),c=(0,h.DropTarget)(y["default"].NOTE,m,function(e){return{connectDropTarget:e.dropTarget()}}),l(f=c(f=function(e){function t(){return a(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),d(t,[{key:"render",value:function(){var e=this.props,t=e.connectDragSource,n=e.connectDropTarget,r=e.isDragging,a=(e.onMove,e.id,e.editing),i=o(e,["connectDragSource","connectDropTarget","isDragging","onMove","id","editing"]),u=a?function(e){return e}:t;return u(n(v["default"].createElement("li",s({style:{opacity:r?0:1}},i),i.children)))}}]),t}(v["default"].Component))||f)||f);t["default"]=O},413:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={NOTE:"note"}},414:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(396),a=r(o);t["default"]=a["default"].generateActions("create","update","delete")},415:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(416),l=r(u),c=n(396),f=r(c),s=n(414),d=r(s),p=function(){function e(){o(this,e),this.bindActions(d["default"]),this.notes=[],this.exportPublicMethods({getNotesByIds:this.getNotesByIds.bind(this)})}return i(e,[{key:"create",value:function(e){var t=this.notes;return e.id=l["default"].v4(),this.setState({notes:t.concat(e)}),e}},{key:"update",value:function(e){var t=this.notes.map(function(t){return t.id===e.id?a({},t,e):t});this.setState({notes:t})}},{key:"delete",value:function(e){this.setState({notes:this.notes.filter(function(t){return t.id!==e})})}},{key:"getNotesByIds",value:function(e){var t=this;return(e||[]).map(function(e){return t.notes.filter(function(t){return t.id===e})}).filter(function(e){return e.length}).map(function(e){return e[0]})}}]),e}();t["default"]=f["default"].createStore(p,"NoteStore")},440:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(416),l=r(u),c=n(441),f=r(c),s=n(396),d=r(s),p=n(395),v=r(p),h=function(){function e(){o(this,e),this.bindActions(v["default"]),this.lanes=[]}return i(e,[{key:"create",value:function(e){var t=this.lanes;e.id=l["default"].v4(),e.notes=e.notes||[],this.setState({lanes:t.concat(e)})}},{key:"update",value:function(e){var t=this.lanes.map(function(t){return t.id===e.id?a({},t,e):t});this.setState({lanes:t})}},{key:"delete",value:function(e){this.setState({lanes:this.lanes.filter(function(t){return t.id!==e})})}},{key:"attachToLane",value:function(e){var t=e.laneId,n=e.noteId,r=this.lanes.map(function(e){return-1!==e.notes.indexOf(n)&&(e.notes=e.notes.filter(function(e){return e!==n})),e.id===t&&e.notes.push(n),e});this.setState({lanes:r})}},{key:"detachFromLane",value:function(e){var t=e.laneId,n=e.noteId,r=this.lanes.map(function(e){return e.id===t&&(e.notes=e.notes.filter(function(e){return e!==n})),e});this.setState({lanes:r})}},{key:"move",value:function(e){var t=e.sourceId,n=e.targetId,r=this.lanes,o=r.filter(function(e){return-1!==e.notes.indexOf(t)})[0],a=r.filter(function(e){return-1!==e.notes.indexOf(n)})[0],i=o.notes.indexOf(t),u=a.notes.indexOf(n);o===a?o.notes=(0,f["default"])(o.notes,{$splice:[[i,1],[u,0,t]]}):(o.notes.splice(i,1),a.notes.splice(u,0,t)),this.setState({lanes:r})}}]),e}();t["default"]=d["default"].createStore(h,"LaneStore")},443:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={get:function(e){try{return JSON.parse(localStorage.getItem(e))}catch(t){return null}},set:function(e,t){localStorage.setItem(e,JSON.stringify(t))}}},444:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e,t,n){var r=(0,a["default"])(e);try{e.bootstrap(t.get(n))}catch(o){console.error("Failed to bootstrap data",o)}r.listen(function(){t.get("debug")||t.set(n,e.takeSnapshot())})};var o=n(445),a=r(o)},445:function(e,t){"use strict";function n(){var e=this;this.dispatcher.register(function(t){var n=Object.keys(e.alt.stores).reduce(function(t,n){return t.push(e.alt.stores[n].dispatchToken),t},[]);e.waitFor(n),e.setState({payload:t}),e.emitChange()})}function r(e){return e.FinalStore?e.FinalStore:e.FinalStore=e.createUnsavedStore(n)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r,e.exports=t["default"]}});