(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={profile:"Profile_profile__1PAZL",description:"Profile_description__3KfXh",avatar:"Profile_avatar__1IHYb",name:"Profile_name__1Unpg",tag:"Profile_tag__3pTt9",location:"Profile_location__2yAy0",stats:"Profile_stats__13vKW",label:"Profile_label__GT7UV",quantity:"Profile_quantity__1cWIt"}},function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e,a,t){e.exports={statistics:"Statistics_statistics__2oj2c",title:"Statistics_title__Ddu4a",statList:"Statistics_statList__1wA6E",item:"Statistics_item__2F2kN"}},function(e,a,t){e.exports={friendList:"FriendList_friendList__FM3Pl",friendListItem:"FriendList_friendListItem__2MwLT",status:"FriendList_status__1kW-5"}},,,function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/j04ntoh/128.jpg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mugukamil/128.jpg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg","name":"Poly","isOnline":false,"id":1284}]')},function(e,a,t){e.exports={transactionHistory:"Transactions_transactionHistory__2f_TS"}},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(6),s=t.n(r),i=(t(16),t(1)),l=t.n(i);function o(e){var a=e.name,t=e.tag,n=e.location,r=e.avatar,s=e.stats;return c.a.createElement("div",{className:l.a.profile},c.a.createElement("div",{className:l.a.description},c.a.createElement("img",{src:r,alt:"user avatar",className:l.a.avatar}),c.a.createElement("p",{className:l.a.name},a),c.a.createElement("p",{className:l.a.tag},"@",t),c.a.createElement("p",{className:l.a.location},n)),c.a.createElement("ul",{className:l.a.stats},c.a.createElement("li",null,c.a.createElement("span",{className:l.a.label},"Followers"),c.a.createElement("span",{className:l.a.quantity},s.followers)),c.a.createElement("li",null,c.a.createElement("span",{className:l.a.label},"Views"),c.a.createElement("span",{className:l.a.quantity},s.views)),c.a.createElement("li",null,c.a.createElement("span",{className:l.a.label},"Likes"),c.a.createElement("span",{className:l.a.quantity},s.likes))))}o.defaultProps={avatar:"https://i.pinimg.com/originals/a0/40/66/a04066a2d1fcf25df39c599e093995c8.jpg"};var m=o,d=t(2),u=t(3),p=t.n(u);function f(e){var a=e.title,t=e.stats;return c.a.createElement("section",{className:p.a.statistics},a&&c.a.createElement("h2",{className:p.a.title},a),c.a.createElement("ul",{className:p.a.statList},t.map((function(e){return c.a.createElement("li",{key:e.id,className:p.a.item,style:{backgroundColor:"rgb(".concat(Math.floor(256*Math.random()),", ").concat(Math.floor(256*Math.random()),", ").concat(Math.floor(256*Math.random()),")")}},c.a.createElement("span",{className:"label"},e.label),c.a.createElement("span",{className:"percentage"},e.percentage,"%"))}))))}f.defaultProps={title:"Upload stats"};var b=f,y=t(7),_=t(4),E=t.n(_);function w(e){var a=e.friends;return c.a.createElement("ul",{className:E.a.friendList},a.map((function(e){return c.a.createElement("li",{key:e.id,className:E.a.friendListItem},c.a.createElement("span",{className:E.a.status,style:e.isOnline?{background:"green"}:{background:"red"}}),c.a.createElement("img",{className:"avatar",src:e.avatar,alt:e.name,width:"48"}),c.a.createElement("p",{className:"name"},e.name))})))}w.defaultProps={avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg"};var g=w,v=t(8),h=t(9),N=t.n(h);var L=function(e){var a=e.items;return c.a.createElement("table",{class:N.a.transactionHistory},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Type"),c.a.createElement("th",null,"Amount"),c.a.createElement("th",null,"Currency"))),c.a.createElement("tbody",null,a.map((function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",null,e.type),c.a.createElement("td",null,e.amount),c.a.createElement("td",null,e.currency))}))))},P=t(10);var k=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(m,{name:d.name,tag:d.tag,location:d.location,avatar:d.avatar,stats:d.stats}),c.a.createElement(b,{title:"Upload stats",stats:y}),c.a.createElement(g,{friends:v}),c.a.createElement(L,{items:P}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.63a1a14b.chunk.js.map