"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[59],{59:function(t,e,r){r.r(e),r.d(e,{default:function(){return p}});var a=r(861),n=r(439),c=r(757),s=r.n(c),i=r(791),u=r(689),o=r(390),f={castList:"Cast_castList__ARoWn",castListItem:"Cast_castListItem__CF66s",castListActorName:"Cast_castListActorName__McyhJ",castListCharacter:"Cast_castListCharacter__ES7-f",castListCharacterTitle:"Cast_castListCharacterTitle__49yG2",castListCharacterName:"Cast_castListCharacterName__s8h-l",castListNoInfo:"Cast_castListNoInfo__r1idc"},l=r(184),p=function(){var t=(0,u.UO)().movieId,e=(0,i.useState)([]),r=(0,n.Z)(e,2),c=r[0],p=r[1],h=(0,i.useState)(null),v=(0,n.Z)(h,2),m=v[0],A=v[1];(0,i.useEffect)((function(){if(t){var e=function(){var t=(0,a.Z)(s().mark((function t(e){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.M1)(e);case 3:r=t.sent,p(r.cast),A(null),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),A(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}();e(t)}}),[t,m]);return(0,l.jsx)("div",{children:(0,l.jsx)("ul",{className:f.castList,children:0!==c.length?c.map((function(t){var e=t.id,r=t.profile_path,a=t.name,n=t.character;return(0,l.jsxs)("li",{className:f.castListItem,children:[(0,l.jsx)("img",{className:f.castImage,src:r?"".concat("http://image.tmdb.org/t/p/").concat("w92/").concat(r):"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAACKBAMAAADVpjBZAAAAG1BMVEXv9e3rZkTu49ftv63u0cLtrZjsm4Prd1nsiW56vvyZAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA3UlEQVRYhe3QzYrCMBSG4Y/8zVyGiO1sA21nHap1HXTOrIPiDcwVeOnTzKgUDahb+Z5FCeGlnByAiIiIiIheXzU5r+7naXLu79Y6PDGJ8m782m6PSkIeRqTaQr5nVjolm+vcxJy/BTfOtANa/OiUb1KDjxru9v/56h124THkPJloZ1ikDVwDW84d9DLkFeXc6yBtWqL+HGd6JO8jjrXEtvDUcMr7hK9zvvLmOMxR3+YmmviXh3XnL8McJKlGzH5b2OV5W5M51f+UqlBDly5Pj3rYILtnciIiIiKiF/MLPA0eNwPUqnwAAAAASUVORK5CYII=",alt:a}),(0,l.jsx)("h5",{className:f.castListActorName,children:a}),(0,l.jsx)("div",{className:f.castListCharacter,children:(0,l.jsxs)("h6",{className:f.castListCharacterTitle,children:["Character:",(0,l.jsx)("p",{className:f.castListCharacterName,children:n})]})})]},e)})):(0,l.jsx)("li",{className:f.castListNoInfo,children:"No information"})})})}},390:function(t,e,r){r.d(e,{M1:function(){return h},Pg:function(){return p},Pt:function(){return l},rj:function(){return f},tx:function(){return v}});var a=r(861),n=r(757),c=r.n(n),s=r(686),i=r.n(s),u="https://api.themoviedb.org/3",o="7dc61a6c44fade8b575440491a92ae90",f=function(){var t=(0,a.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u,"/trending/all/day?api_key=").concat(o));case 2:if((e=t.sent).ok){t.next=6;break}return i().Notify.failure("Service not available"),t.abrupt("return",Promise.reject(new Error("Bad request")));case 6:return t.abrupt("return",e.json());case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=(0,a.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u,"/search/movie?query=").concat(e,"&api_key=").concat(o));case 2:if((r=t.sent).ok){t.next=6;break}return i().Notify.failure("Service not available"),t.abrupt("return",Promise.reject(new Error("Bad request")));case 6:return t.abrupt("return",r.json());case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,a.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u,"/movie/").concat(e,"?api_key=").concat(o));case 2:if((r=t.sent).ok){t.next=6;break}return i().Notify.failure("Service not available"),t.abrupt("return",Promise.reject(new Error("Bad request")));case 6:return t.abrupt("return",r.json());case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,a.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u,"/movie/").concat(e,"/credits?api_key=").concat(o));case 2:if((r=t.sent).ok){t.next=6;break}return i().Notify.failure("Service not available"),t.abrupt("return",Promise.reject(new Error("Bad request")));case 6:return t.abrupt("return",r.json());case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,a.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u,"/movie/").concat(e,"/reviews?api_key=").concat(o));case 2:if((r=t.sent).ok){t.next=6;break}return i().Notify.failure("Service not available"),t.abrupt("return",Promise.reject(new Error("Bad request")));case 6:return t.abrupt("return",r.json());case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=59.bcec773e.chunk.js.map