(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,a,t){e.exports={profile:"Profile_profile__30Uqa",description:"Profile_description__2uLAh",avatar:"Profile_avatar__2mIrb",name:"Profile_name__2NteE",tag:"Profile_tag__29tIm",location:"Profile_location__2FWWe",stats:"Profile_stats__z_2V3",label:"Profile_label__2CI03",quantity:"Profile_quantity__lFP7U"}},function(e,a,t){e.exports={pricingItem:"PricingItem_pricingItem___2LUQ",icon:"PricingItem_icon__19c7g",label:"PricingItem_label__2Rb3C",capacity:"PricingItem_capacity__PvvO0",description:"PricingItem_description__J_9yE",price:"PricingItem_price__2M_TW",button:"PricingItem_button__no3EY"}},function(e,a,t){e.exports={statsSection:"Stats_statsSection__1NIot",title:"Stats_title__2kn77",statList:"Stats_statList__1i6Gf",item:"Stats_item__xtBug",label:"Stats_label__3muUO",percentage:"Stats_percentage__2KrTA"}},function(e,a,t){e.exports={transactionHistory:"TransactionHistory_transactionHistory__c2F-e",tHead:"TransactionHistory_tHead__1U71t",tRow:"TransactionHistory_tRow__K6enz"}},,,function(e,a,t){e.exports={pricingPlan:"PricingPlan_pricingPlan__2t8OB"}},function(e){e.exports=[{id:"1e0700a2-5183-4291-85cc-2065a036a683",type:"invoice",amount:"964.82",currency:"LRD"},{id:"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b",type:"payment",amount:"686.50",currency:"WST"},{id:"44dca67a-8e5a-4798-bf8e-b15efd4e1abd",type:"invoice",amount:"828.62",currency:"UGX"},{id:"ea8ed3dc-2b68-4a53-905a-53ecb0adef33",type:"withdrawal",amount:"527.80",currency:"ALL"},{id:"ea76146a-0b00-4b80-bc02-a8c822176712",type:"withdrawal",amount:"371.43",currency:"MUR"},{id:"63ca02f9-d637-46b5-9237-f3b24425e029",type:"payment",amount:"862.44",currency:"AUD"},{id:"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34",type:"withdrawal",amount:"907.00",currency:"GEL"},{id:"6013bad0-750c-4691-8bc2-d8f2b43969c4",type:"withdrawal",amount:"352.52",currency:"UGX"},{id:"252c7be4-8b06-4fa7-8d42-61fb835b70d5",type:"payment",amount:"388.98",currency:"TOP"},{id:"4eaab41b-b967-40ac-82ed-85fc66f646f1",type:"deposit",amount:"103.10",currency:"BWP"},{id:"9648a350-8469-42d5-8bf3-18090de5fe67",type:"withdrawal",amount:"322.32",currency:"MRO"},{id:"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc",type:"invoice",amount:"14.79",currency:"PYG"},{id:"43ef232c-80e9-4d6f-b48a-b22405620de3",type:"payment",amount:"904.86",currency:"CHF"},{id:"5161682e-e620-4019-ab0a-24ceb10fbd20",type:"withdrawal",amount:"307.08",currency:"NOK"},{id:"7b119d71-42e6-4c42-a141-6818b07bb9ff",type:"invoice",amount:"275.07",currency:"AWG"},{id:"a4f65722-65c4-4c28-b1f4-b8ed988bb205",type:"deposit",amount:"213.10",currency:"STD"},{id:"c6e5784b-0ca3-48d6-86e5-b5128af5a523",type:"invoice",amount:"116.11",currency:"CUP CUC"},{id:"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd",type:"invoice",amount:"878.67",currency:"HKD"},{id:"a4a98b0e-b22c-438b-9f83-de2df52110c8",type:"invoice",amount:"725.03",currency:"UYU UYI"},{id:"b39bfa7a-0166-4c47-94d6-87d20590f746",type:"payment",amount:"405.45",currency:"MDL"}]},function(e){e.exports=[{label:"Bronze",icon:"https://raw.githubusercontent.com/goitacademy/react-homework/master/homework-01/pricing-plan/assets/bronze-icon.png",capacity:"2TB",price:39,description:"Praesent blandit laoreet nibh. Vivamus quis mi. Vestibulum eu odio. Ut tincidunt tincidunt erat. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam."},{label:"Silver",icon:"https://raw.githubusercontent.com/goitacademy/react-homework/master/homework-01/pricing-plan/assets/silver-icon.png",capacity:"20TB",price:99,description:"Praesent blandit laoreet nibh. Vivamus quis mi. Vestibulum eu odio. Ut tincidunt tincidunt erat. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam."},{label:"Gold",icon:"https://raw.githubusercontent.com/goitacademy/react-homework/master/homework-01/pricing-plan/assets/gold-icon.png",capacity:"400TB",price:499,description:"Praesent blandit laoreet nibh. Vivamus quis mi. Vestibulum eu odio. Ut tincidunt tincidunt erat. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam."}]},function(e,a,t){e.exports=t(16)},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(6),r=t.n(i),l=t(1),s=t.n(l),o=function(e){var a=e.name,t=e.tag,n=e.location,i=e.avatar,r=e.stats;return c.a.createElement("div",{className:s.a.profile},c.a.createElement("div",{className:s.a.description},c.a.createElement("img",{src:i,alt:"user avatar",className:s.a.avatar}),c.a.createElement("p",{className:s.a.name},a),c.a.createElement("p",{className:s.a.tag},t),c.a.createElement("p",{className:s.a.location},n)),c.a.createElement("ul",{className:s.a.stats},c.a.createElement("li",null,c.a.createElement("span",{className:s.a.label},"Followers"),c.a.createElement("span",{className:s.a.quantity},r.followers)),c.a.createElement("li",null,c.a.createElement("span",{className:s.a.label},"Views"),c.a.createElement("span",{className:s.a.quantity},r.views)),c.a.createElement("li",null,c.a.createElement("span",{className:s.a.label},"Likes"),c.a.createElement("span",{className:s.a.quantity},r.likes))))};o.defaultProps={tag:"Add tag",location:"Add location",stats:{followers:0,views:0,likes:0}};var m=o,u=t(3),d=t.n(u),p=function(){var e=Math.floor(256*Math.random()),a=Math.floor(256*Math.random()),t=Math.floor(256*Math.random());return"#".concat(e.toString(16)).concat(a.toString(16)).concat(t.toString(16))},b=function(e){var a=e.title,t=e.stats;return c.a.createElement("section",{className:d.a.statsSection},a.length>0&&c.a.createElement("h2",{className:d.a.title},a),c.a.createElement("ul",{className:d.a.statList},t.map(function(e){return c.a.createElement("li",{key:e.id,className:d.a.item,style:{backgroundColor:p()}},c.a.createElement("span",{className:d.a.label},e.label),c.a.createElement("span",{className:d.a.percentage}," ",e.percentage))})))};b.defaultProps={title:""};var _=b,f=t(4),y=t.n(f),g=function(e){var a=e.items;return c.a.createElement("table",{className:y.a.transactionHistory},c.a.createElement("thead",null,c.a.createElement("tr",{className:y.a.tHead},c.a.createElement("th",null,"Type"),c.a.createElement("th",null,"Amount"),c.a.createElement("th",null,"Currency"))),c.a.createElement("tbody",null,a.map(function(e){return c.a.createElement("tr",{key:e.id,className:y.a.tRow},c.a.createElement("td",null,e.type),c.a.createElement("td",null,e.currency),c.a.createElement("td",null,e.amount))})))},E=t(7),h=t.n(E),w=t(2),v=t.n(w),N=function(e){var a="";switch(e.label){case"Bronze":a="#dd7c4b";break;case"Silver":a="#c0c0c0";break;case"Gold":a="#dda431";break;default:a=""}return a},P=function(e){var a=e.icon,t=e.label,n=e.capacity,i=e.description,r=e.price;return c.a.createElement("div",{className:v.a.pricingItem},c.a.createElement("div",{className:v.a.icon},c.a.createElement("img",{src:a,alt:"item icon"})),c.a.createElement("h2",{className:v.a.label,style:{color:N({label:t})}},t),c.a.createElement("p",{className:v.a.capacity},n),c.a.createElement("p",{className:v.a.description},i),c.a.createElement("p",{className:v.a.price},"$",r,"/MO"),c.a.createElement("button",{type:"button",className:v.a.button,style:{backgroundColor:N({label:t})}},"Get Started"))},k=function(e){var a=e.items;return c.a.createElement("ul",{className:h.a.pricingPlan},a.map(function(e){return c.a.createElement("li",{key:e.label,className:"item"},c.a.createElement(P,e))}))},S=t(8),U=t(9),I={name:"Jacques Gluke",tag:"@jgluke",location:"Ocho Rios, Jamaica",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",stats:{followers:5603,views:4827,likes:1308}},T=[{id:"id-1",label:".docx",percentage:22},{id:"id-2",label:".pdf",percentage:4},{id:"id-3",label:".mp3",percentage:17},{id:"id-4",label:".psd",percentage:47},{id:"id-5",label:".pdf",percentage:10}],H=function(){return c.a.createElement("div",null,c.a.createElement(m,I),c.a.createElement(_,{title:"Upload stats",stats:T}),c.a.createElement(k,{items:U}),",",c.a.createElement(g,{items:S}))};r.a.render(c.a.createElement(H,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.944b8773.chunk.js.map