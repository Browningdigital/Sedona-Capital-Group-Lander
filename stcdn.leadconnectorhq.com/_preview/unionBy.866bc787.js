import{s as S,S as w,a as A,b as R,c as g,d as v,l as y,i as I,e as B,f as C}from"./last.a941d252.js";import{h as l}from"./_Uint8Array.b464729d.js";function E(){}var F=1/0,L=l&&1/S(new l([,-0]))[1]==F?function(s){return new l(s)}:E;const N=L;var T=200;function Y(s,n,t){var u=-1,f=A,c=s.length,h=!0,a=[],e=a;if(t)h=!1,f=R;else if(c>=T){var o=n?null:N(s);if(o)return S(o);h=!1,f=g,e=new w}else e=n?[]:a;n:for(;++u<c;){var i=s[u],r=n?n(i):i;if(i=t||i!==0?i:0,h&&r===r){for(var b=e.length;b--;)if(e[b]===r)continue n;n&&e.push(r),a.push(i)}else f(e,r,t)||(e!==a&&e.push(r),a.push(i))}return a}var _=v(function(s){var n=y(s);return I(n)&&(n=void 0),Y(C(s,1,I,!0),B(n))});const j=_;export{j as u};
