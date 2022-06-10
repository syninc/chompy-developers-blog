(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[782],{7484:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",a="hour",o="day",u="week",c="month",l="quarter",h="year",d="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},_={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,a=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:u,d:o,D:d,h:a,m:s,s:i,ms:r,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",g={};g[y]=p;var w=function(t){return t instanceof N},b=function t(e,n,r){var i;if(!e)return y;if("string"==typeof e){var s=e.toLowerCase();g[s]&&(i=s),n&&(g[s]=n,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var o=e.name;g[o]=e,i=o}return!r&&i&&(y=i),i||!r&&y},M=function(t,e){if(w(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new N(n)},x=_;x.l=b,x.i=w,x.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var N=function(){function p(t){this.$L=b(t.locale,null,!0),this.parse(t)}var $=p.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(x.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(m);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return x},$.isValid=function(){return!(this.$d.toString()===f)},$.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return M(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<M(t)},$.$g=function(t,e,n){return x.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,e){var n=this,r=!!x.u(e)||e,l=x.p(t),f=function(t,e){var i=x.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(o)},m=function(t,e){return x.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},v=this.$W,p=this.$M,$=this.$D,_="set"+(this.$u?"UTC":"");switch(l){case h:return r?f(1,0):f(31,11);case c:return r?f(1,p):f(0,p+1);case u:var y=this.$locale().weekStart||0,g=(v<y?v+7:v)-y;return f(r?$-g:$+(6-g),p);case o:case d:return m(_+"Hours",0);case a:return m(_+"Minutes",1);case s:return m(_+"Seconds",2);case i:return m(_+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(t,e){var n,u=x.p(t),l="set"+(this.$u?"UTC":""),f=(n={},n[o]=l+"Date",n[d]=l+"Date",n[c]=l+"Month",n[h]=l+"FullYear",n[a]=l+"Hours",n[s]=l+"Minutes",n[i]=l+"Seconds",n[r]=l+"Milliseconds",n)[u],m=u===o?this.$D+(e-this.$W):e;if(u===c||u===h){var v=this.clone().set(d,1);v.$d[f](m),v.init(),this.$d=v.set(d,Math.min(this.$D,v.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[x.p(t)]()},$.add=function(r,l){var d,f=this;r=Number(r);var m=x.p(l),v=function(t){var e=M(f);return x.w(e.date(e.date()+Math.round(t*r)),f)};if(m===c)return this.set(c,this.$M+r);if(m===h)return this.set(h,this.$y+r);if(m===o)return v(1);if(m===u)return v(7);var p=(d={},d[s]=e,d[a]=n,d[i]=t,d)[m]||1,$=this.$d.getTime()+r*p;return x.w($,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=x.z(this),s=this.$H,a=this.$m,o=this.$M,u=n.weekdays,c=n.months,l=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},h=function(t){return x.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:x.s(o+1,2,"0"),MMM:l(n.monthsShort,o,c,3),MMMM:l(c,o),D:this.$D,DD:x.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,u,2),ddd:l(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:x.s(s,2,"0"),h:h(1),hh:h(2),a:d(s,a,!0),A:d(s,a,!1),m:String(a),mm:x.s(a,2,"0"),s:String(this.$s),ss:x.s(this.$s,2,"0"),SSS:x.s(this.$ms,3,"0"),Z:i};return r.replace(v,(function(t,e){return e||m[t]||i.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(r,d,f){var m,v=x.p(d),p=M(r),$=(p.utcOffset()-this.utcOffset())*e,_=this-p,y=x.m(this,p);return y=(m={},m[h]=y/12,m[c]=y,m[l]=y/3,m[u]=(_-$)/6048e5,m[o]=(_-$)/864e5,m[a]=_/n,m[s]=_/e,m[i]=_/t,m)[v]||_,f?y:x.a(y)},$.daysInMonth=function(){return this.endOf(c).$D},$.$locale=function(){return g[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=b(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return x.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},p}(),j=N.prototype;return M.prototype=j,[["$ms",r],["$s",i],["$m",s],["$H",a],["$W",o],["$M",c],["$y",h],["$D",d]].forEach((function(t){j[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,N,M),t.$i=!0),M},M.locale=b,M.isDayjs=w,M.unix=function(t){return M(1e3*t)},M.en=g[y],M.Ls=g,M.p={},M}()},4110:function(t){t.exports=function(){"use strict";return function(t,e,n){t=t||{};var r=e.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function s(t,e,n,i){return r.fromToBase(t,e,n,i)}n.en.relativeTime=i,r.fromToBase=function(e,r,s,a,o){for(var u,c,l,h=s.$locale().relativeTime||i,d=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],f=d.length,m=0;m<f;m+=1){var v=d[m];v.d&&(u=a?n(e).diff(s,v.d,!0):s.diff(e,v.d,!0));var p=(t.rounding||Math.round)(Math.abs(u));if(l=u>0,p<=v.r||!v.r){p<=1&&m>0&&(v=d[m-1]);var $=h[v.l];o&&(p=o(""+p)),c="string"==typeof $?$.replace("%d",p):$(p,r,v.l,l);break}}if(r)return c;var _=l?h.future:h.past;return"function"==typeof _?_(c):_.replace("%s",c)},r.to=function(t,e){return s(t,e,this,!0)},r.from=function(t,e){return s(t,e,this)};var a=function(t){return t.$u?n.utc():n()};r.toNow=function(t){return this.to(a(this),t)},r.fromNow=function(t){return this.from(a(this),t)}}}()},718:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/members/[id]",function(){return n(1466)}])},46:function(t,e,n){"use strict";n.d(e,{p:function(){return d}});var r=n(5893),i=n(7294),s=n(1664),a=n(7484),o=n.n(a),u=n(4110),c=n.n(u),l=n(4790);o().extend(c());var h=function(t){var e=t.item,n=e.authorId,i=e.title,a=e.isoDate,u=e.link,c=e.dateMiliSeconds,h=(0,l.n4)(n);if(!h)return null;var d=new URL(u),f=d.hostname,m=d.origin;return(0,r.jsxs)("article",{className:"post-link",children:[(0,r.jsx)(s.default,{href:(0,l.gb)(h.id),passHref:!0,children:(0,r.jsxs)("a",{className:"post-link__author",children:[(0,r.jsx)("img",{src:h.avatarSrc,className:"post-link__author-img",width:35,height:35,alt:h.name}),(0,r.jsxs)("div",{className:"post-link__author-name",children:[(0,r.jsx)("div",{className:"post-link__author-name",children:h.name}),(0,r.jsx)("time",{dateTime:a,className:"post-link__date",children:o()(a).fromNow()})]})]})}),(0,r.jsxs)("a",{href:u,className:"post-link__main-link",children:[(0,r.jsx)("h2",{className:"post-link__title",children:i}),f&&(0,r.jsxs)("div",{className:"post-link__site",children:[(0,r.jsx)("img",{src:(0,l.s6)(m),width:14,height:14,className:"post-link__site-favicon",alt:f}),f]})]}),c&&c>Date.now()-2592e5&&(0,r.jsx)("div",{className:"post-link__new-label",children:"NEW"})]})},d=function(t){var e,n=(0,i.useState)(32),s=n[0],a=n[1],o=(null===(e=t.items)||void 0===e?void 0:e.length)||0,u=o-s>0;return o?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"post-list",children:t.items.slice(0,s).map((function(t,e){return(0,r.jsx)(h,{item:t},"post-item-".concat(e))}))}),u&&(0,r.jsx)("div",{className:"post-list-load",children:(0,r.jsx)("button",{onClick:function(){return a(s+32)},className:"post-list-load__button",children:"LOAD MORE"})})]}):(0,r.jsx)("div",{className:"post-list-empty",children:"No posts yet"})}},1466:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return l}});var r=n(5893),i=n(9583),s=n(8193),a=n(46),o=n(1775),u=n(7713),c=n(4790),l=!0;e.default=function(t){var e=t.member,n=e.id,l=e.name,h=e.bio,d=e.avatarSrc,f=e.twitterUsername,m=e.githubUsername,v=e.websiteUrl;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.T,{title:l,path:(0,c.gb)(n)}),(0,r.jsx)("section",{className:"member",children:(0,r.jsxs)(o.v,{children:[(0,r.jsxs)("header",{className:"member-header",children:[(0,r.jsx)("div",{className:"member-header__avatar",children:(0,r.jsx)("img",{src:d,alt:l,width:100,height:100,className:"member-header__avatar-img"})}),(0,r.jsx)("h1",{className:"member-header__name",children:l}),(0,r.jsx)("p",{className:"member-header__bio",children:h}),(0,r.jsxs)("div",{className:"member-header__links",children:[f&&(0,r.jsx)("a",{href:"https://twitter.com/".concat(f),className:"member-header__link",children:(0,r.jsx)(i.fWC,{className:"member-header__link-icon","aria-label":"Follow @".concat(f," on Twitter")})}),m&&(0,r.jsx)("a",{href:"https://github.com/".concat(m),className:"member-header__link",children:(0,r.jsx)(i.hJX,{className:"member-header__link-icon","aria-label":"@".concat(m," on GitHub")})}),v&&(0,r.jsx)("a",{href:v,className:"member-header__link",children:(0,r.jsx)(s.uFt,{className:"member-header__link-icon","aria-label":"Link to website"})})]})]}),(0,r.jsx)("div",{className:"member-posts-container",children:(0,r.jsx)(a.p,{items:t.postItems})})]})})]})}},8357:function(t,e,n){"use strict";n.d(e,{w_:function(){return c}});var r=n(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=r.createContext&&r.createContext(i),a=function(){return a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},a.apply(this,arguments)},o=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n};function u(t){return t&&t.map((function(t,e){return r.createElement(t.tag,a({key:e},t.attr),u(t.child))}))}function c(t){return function(e){return r.createElement(l,a({attr:a({},t.attr)},e),u(t.child))}}function l(t){var e=function(e){var n,i=t.attr,s=t.size,u=t.title,c=o(t,["attr","size","title"]),l=s||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,i,c,{className:n,style:a(a({color:t.color||e.color},e.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),t.children)};return void 0!==s?r.createElement(s.Consumer,null,(function(t){return e(t)})):e(i)}}},function(t){t.O(0,[445,617,737,774,888,179],(function(){return e=718,t(t.s=e);var e}));var e=t.O();_N_E=e}]);