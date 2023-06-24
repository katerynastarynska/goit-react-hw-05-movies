"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[878],{708:function(e,r,t){t.r(r),t.d(r,{default:function(){return d}});var n=t(861),a=t(439),c=t(757),u=t.n(c),i=t(686),A=t.n(i),o=t(791),s=t(689),f=t(87),v=t(390),l=t(673),p=t(184),d=function(){var e,r,t=(0,s.UO)().movieId,c=(0,o.useState)(""),i=(0,a.Z)(c,2),d=i[0],x=i[1],h=(0,o.useState)(null),b=(0,a.Z)(h,2),m=b[0],j=b[1],w=(0,s.TH)(),k=(0,o.useRef)(null!==(e=null===(r=w.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/movies");(0,o.useEffect)((function(){if(t){var e=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,v.Pg)(r);case 3:if(t=e.sent){e.next=8;break}return x(""),A().Notify.failure("Results not found"),e.abrupt("return");case 8:x(t),j(null),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),j(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(r){return e.apply(this,arguments)}}();e(t)}}),[t,m]);var y=d.title,W=d.poster_path,V=d.genres,q=d.overview,Z=d.homepage;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h2",{children:y}),(0,p.jsx)(f.rU,{to:k.current,children:"Back to movies"}),(0,p.jsx)("img",{src:W?"".concat("http://image.tmdb.org/t/p/").concat("w300/").concat(W):"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAHCBAMAAACnHem0AAAAG1BMVEXv9e3rZkTu49ftrZju0cLsm4Ptv63rd1nsiW5DY+DXAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAET0lEQVR4nO3YTVPbRgCHcUW2bB29xVQ+yoRAjxDPkBxtw9Aeq0LqHO2S0hwRpOWKpmHox+6+SNZKqK0iG5zpPL+DR7bWq7+kfZMcBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+T/bmm05QxY3ntcpdhE8ao8z/tl65ePykMcqig3rlnjdWZ1Cz4PPGGn5Ts+Bs/JQxypL5cx6trnaw6QSV6vbDZza82nSCSoc/Fr+7J2G2uTMNnSq7+udlud2T6fK/O3mhqdPMy9fq0+723rXzMhbBa3OMNyLbNB7GpsihCA4cNxLiJ/XrcSKEuNERO3Lz99BXl9+dCTGwav4CEzUyuML6xe93xM0oCfRBfhNno5mY53v1Cfj9/cEo2XbkZ6TKeSK4H70Xn1RVyeDoItnq9uT2YTC6kKUaxyoMpn5/8Yeq/k7tEGrwX2w9inU7dtrxVM6jbiLvv3euzuGV6s7dgdx0o5mM5QVjx+xvGKtlHdfxt/SF2u+rverDaYtxKVag/rW4V/3XGojVbB+ps3FaQsZaXKvNbqNOrmN59l99oatrqaufmJlykXdUE0vf1hf6Ulpji+w4rgj1ZtLLGmy77rRW8Eo1Wb9fiLWsLhtlrTM2sQamoIpgXenJndNJm9Kit2wZcdgklz6sPSOaY+pu4KWHbOVnbGLp3z0doZO3aTn6ZSGHveUtOJyvJ1ZancivojU3mVi6iIlgdRcZK8siY2WVLhq1+cex0iyxbD3Z72mLWcbq57HSttO+ePcuKVytFz2zKW/tWmOFqnIrzL/F+iiH09v4anntFnfO8HpH22CsffFzaGbWtIHLsWIoUo3n22JPtGJlNf5HLDfW85MqbgYrXzbG4dbImDeNVRy3vvxqpb1ExfKETLgXX69jVVIc5fNYdZu8bEnKRAaZ3IrbB7Ety2dNvrl2cU5cxuqmm9ZUXhkrmut9ajJIwuP390fqLLp2y2iktIJYxsqG0055OC3FSsZ6XyRj5SW9VVa8bqg+03rLsbJh1C9PPpWxXNXn8oG39jNeFT1VF1anViwnfQMwyZtJ9U3UM7qvYkWf86LzVWMNreZpx5ro7m6/n6hu8rrTRYdXKlvw1/3ZL+q7GStWiWW3AztWK1CBvrdWmJWxuqrAD9t6SDh+iIVZSntmVbvbPJb9nGjHkuveo9O3wrrFlbHa4ubyrThYjlS7b/TiSP755HTWaNVsYtlvRgqx1EOE+GyVr558vpOlzu0BNMoeMURw3iRW6p/fQZxejmv8f69UKl04nlx+CJuHWrE3V2g1e+B5JGq8WKvUWVOsNb+FWFesNb9KWttZtsdrqkhbrLyqWauWeV/Rsh54vwae+HMa7vwaf9p0kJKPevluXt58TeST2dmHTYcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAA38D8aei5j1OVeoAAAAASUVORK5CYII=",alt:""}),(0,p.jsx)("h3",{children:"Genres:"}),V&&V.map((function(e){return(0,p.jsx)("li",{children:e.name},e.id)})),(0,p.jsx)("h3",{children:"Overview:"}),(0,p.jsx)("p",{children:q}),(0,p.jsx)("a",{href:Z,children:Z}),(0,p.jsx)("h3",{children:"Additional information:"}),(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)(f.rU,{to:"cast",children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(f.rU,{to:"reviews",children:"Reviews"})})]}),(0,p.jsx)(o.Suspense,{fallback:(0,p.jsx)(l.Z,{}),children:(0,p.jsx)(s.j3,{})})]})}},390:function(e,r,t){t.d(r,{M1:function(){return l},Pg:function(){return v},Pt:function(){return f},rj:function(){return s},tx:function(){return p}});var n=t(861),a=t(757),c=t.n(a),u=t(686),i=t.n(u),A="https://api.themoviedb.org/3",o="7dc61a6c44fade8b575440491a92ae90",s=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(A,"/trending/all/day?api_key=").concat(o));case 2:if((r=e.sent).ok){e.next=6;break}return i().Notify.failure("Service not available"),e.abrupt("return",Promise.reject(new Error("Bad request")));case 6:return e.abrupt("return",r.json());case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(A,"/search/movie?query=").concat(r,"&api_key=").concat(o));case 2:if((t=e.sent).ok){e.next=6;break}return i().Notify.failure("Service not available"),e.abrupt("return",Promise.reject(new Error("Bad request")));case 6:return e.abrupt("return",t.json());case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(A,"/movie/").concat(r,"?api_key=").concat(o));case 2:if((t=e.sent).ok){e.next=6;break}return i().Notify.failure("Service not available"),e.abrupt("return",Promise.reject(new Error("Bad request")));case 6:return e.abrupt("return",t.json());case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(A,"/movie/").concat(r,"/credits?api_key=").concat(o));case 2:if((t=e.sent).ok){e.next=6;break}return i().Notify.failure("Service not available"),e.abrupt("return",Promise.reject(new Error("Bad request")));case 6:return e.abrupt("return",t.json());case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(A,"/movie/").concat(r,"/reviews?api_key=").concat(o));case 2:if((t=e.sent).ok){e.next=6;break}return i().Notify.failure("Service not available"),e.abrupt("return",Promise.reject(new Error("Bad request")));case 6:return e.abrupt("return",t.json());case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=878.02f1dd9c.chunk.js.map