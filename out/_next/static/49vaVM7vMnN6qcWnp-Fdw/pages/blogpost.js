(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"3P0e":function(e,t,i){"use strict";var a=i("0iUn"),n=i("sLSF"),o=i("MI3g"),c=i("a7VT"),s=i("Tit0"),l=i("q1tI"),r=i.n(l),d=(i("xTJh"),i("GkDY"),i("eAqH"),r.a.createElement),h=function(e){function t(e){var i;return Object(a.a)(this,t),(i=Object(o.a)(this,Object(c.a)(t).call(this,e))).items=i.props.items,i}return Object(s.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this.items.name;console.log(document.getElementById(e).offsetTop),window.addEventListener("scroll",(function(t){var i,a,n,o,c,s,l=(c=this.pageYOffset)-document.getElementById(e).offsetTop;for(i=0,o=(n=document.querySelectorAll("[data-type='parallax-"+e+"']")).length;i<o;i++)s="translate3d(0,"+-1*(c+l*(a=n[i]).getAttribute("data-depth"))+"px, 0)",a.style["-webkit-transform"]=s,a.style["-moz-transform"]=s,a.style["-ms-transform"]=s,a.style["-o-transform"]=s,a.style.transform=s}))}},{key:"render",value:function(){var e=this.items.name,t=this.items.background,i=this.items.backgrounddepth,a=this.items.layers.map((function(t){return d("div",{className:"layer "+t.name,"data-depth":t.depth,"data-type":"parallax-"+e,style:{backgroundImage:"url("+t.image+")"}})}));return d("div",null,d("div",{id:this.items.name,style:{minHeight:"100vh"}},d("div",{className:"layer layer-bg","data-depth":i,"data-type":"parallax-"+e,style:{backgroundImage:t}}),a,this.props.children))}}]),t}(l.Component);t.a=h},"3Ssi":function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDEzNjYgNzY4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMzY2IDc2ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6bm9uZTt9DQoJLnN0MXtkaXNwbGF5Om5vbmU7fQ0KCS5zdDJ7ZGlzcGxheTppbmxpbmU7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9DQoJLnN0M3tkaXNwbGF5OmlubGluZTtmaWxsOnVybCgjTmV3X1BhdHRlcm5fMik7fQ0KCS5zdDR7ZGlzcGxheTppbmxpbmU7b3BhY2l0eTowLjU7ZmlsbDojMDAzNDhEO30NCgkuc3Q1e29wYWNpdHk6MC4zMTtmaWxsOiMwMDM0OEQ7fQ0KPC9zdHlsZT4NCjxwYXR0ZXJuICB3aWR0aD0iODAiIGhlaWdodD0iODAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJOZXdfUGF0dGVybl8yIiB2aWV3Qm94PSIwIC04MCA4MCA4MCIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ij4NCgk8Zz4NCgkJPHJlY3QgeT0iLTgwIiBjbGFzcz0ic3QwIiB3aWR0aD0iODAiIGhlaWdodD0iODAiLz4NCgkJPHBhdGggZD0iTTAtODBWMGg4MHYtODBIMHogTTQwLjEyLTMxYy00LjksMC04Ljg4LTMuOTctOC44OC04Ljg4YzAtNC45LDMuOTctOC44OCw4Ljg4LTguODhTNDktNDQuNzgsNDktMzkuODgNCgkJCUM0OS0zNC45Nyw0NS4wMy0zMSw0MC4xMi0zMXoiLz4NCgk8L2c+DQo8L3BhdHRlcm4+DQo8ZyBpZD0iTGF5ZXJfMSIgY2xhc3M9InN0MSI+DQoJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI2ODMiIHkxPSIwIiB4Mj0iNjgzIiB5Mj0iNzY4Ij4NCgkJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzAwMzQ4RCIvPg0KCQk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMDAwMDAwIi8+DQoJPC9saW5lYXJHcmFkaWVudD4NCgk8cmVjdCBjbGFzcz0ic3QyIiB3aWR0aD0iMTM2NiIgaGVpZ2h0PSI3NjgiLz4NCjwvZz4NCjxnIGlkPSJMYXllcl80IiBjbGFzcz0ic3QxIj4NCjwvZz4NCjxnIGlkPSJMYXllcl8yIiBjbGFzcz0ic3QxIj4NCgk8cmVjdCBjbGFzcz0ic3QzIiB3aWR0aD0iMTM2NiIgaGVpZ2h0PSI3NjgiLz4NCjwvZz4NCjxnIGlkPSJMYXllcl8zIiBjbGFzcz0ic3QxIj4NCgk8Y2lyY2xlIGNsYXNzPSJzdDQiIGN4PSI2ODMiIGN5PSIzNjIiIHI9IjE2MiIvPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzUiIGNsYXNzPSJzdDEiPg0KCTxjaXJjbGUgY2xhc3M9InN0NCIgY3g9IjY4MyIgY3k9IjM2MiIgcj0iMTYyIi8+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfNiI+DQoJPGNpcmNsZSBjbGFzcz0ic3Q1IiBjeD0iNjgzIiBjeT0iMjc3IiByPSIxMDciLz4NCjwvZz4NCjwvc3ZnPg0K"},AfU7:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTM2NiAyNDE2Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6bm9uZTt9LmNscy0ye2ZpbGw6dXJsKCNzcGFyc2VfZG90cyk7fTwvc3R5bGU+PHBhdHRlcm4gaWQ9InNwYXJzZV9kb3RzIiBkYXRhLW5hbWU9InNwYXJzZV9kb3RzIiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHZpZXdCb3g9IjAgMCA4MCA4MCI+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iODAiIGhlaWdodD0iODAiLz48cGF0aCBkPSJNMCwwVjgwSDgwVjBaTTQwLjUsNDVBNC41LDQuNSwwLDEsMSw0NSw0MC41LDQuNDksNC40OSwwLDAsMSw0MC41LDQ1WiIvPjwvcGF0dGVybj48L2RlZnM+PHRpdGxlPnNwYXJzZV9kb3RzQXNzZXQgMTwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cmVjdCBjbGFzcz0iY2xzLTIiIHdpZHRoPSIxMzY2IiBoZWlnaHQ9IjI0MTYiLz48L2c+PC9nPjwvc3ZnPg=="},HxXx:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogpost",function(){return i("oedW")}])},oedW:function(e,t,i){"use strict";i.r(t);var a=i("ln6h"),n=i.n(a),o=i("q1tI"),c=i.n(o),s=i("0iUn"),l=i("sLSF"),r=i("MI3g"),d=i("a7VT"),h=i("Tit0"),m=i("ok1R"),I=i("rhny"),u=i("s/m+"),g=i.n(u),b=i("3P0e"),w=c.a.createElement,N=function(e){function t(){return Object(s.a)(this,t),Object(r.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e={name:"blogpost",background:"linear-gradient(rgba(0, 52, 141, 1), rgba(0, 0, 0, 1), rgba(171, 66, 0))",backgrounddepth:"-0.3",layers:[{image:i("AfU7"),depth:"-0.90",name:"layer1"},{image:i("3Ssi"),depth:"-1.2",name:"layer2"},{image:i("3Ssi"),depth:"-1.0",name:"layer3"},{image:i("3Ssi"),depth:"-0.8",name:"layer4"}]},t=w("p",null,"The scientist named the population, after their distinctive horn, Ovid\u2019s Unicorn. These four-horned, silver-white unicorns were previously unknown to science. Now, after almost two centuries, the mystery of what sparked this odd phenomenon is finally solved. Dr. Jorge P\xe9rez, an evolutionary biologist from the University of La Paz, and several companions, were exploring the Andes Mountains when they found a small valley, with no other animals or humans. P\xe9rez noticed that the valley had what appeared to be a natural fountain, surrounded by two peaks of rock and silver snow. P\xe9rez and the others then ventured further into the valley. \u201cBy the time we reached the top of one peak, the water looked blue, with some crystals on top,\u201d said P\xe9rez. P\xe9rez and his friends were astonished to see the unicorn herd. These creatures could be seen from the air without having to move too much to see them \u2013 they were so close they could touch their horns. While examining these bizarre creatures the scientists discovered that the creatures also spoke some fairly regular English. P\xe9rez stated, \u201cWe can see, for example, that they have a common \u2018language,\u2019 something like a dialect or dialectic.\u201d Dr. P\xe9rez believes that the unicorns may have originated in Argentina, where the animals were believed to be descendants of a lost race of people who lived there before the arrival of humans in those parts of South America. While their origins are still unclear, some believe that perhaps the creatures were created when a human and a unicorn met each other in a time before human civilization. According to P\xe9rez, \u201cIn South America, such incidents seem to be quite common.\u201d However, P\xe9rez also pointed out that it is likely that the only way of knowing for sure if unicorns are indeed the descendants of a lost alien race is through DNA. \u201cBut they seem to be able to communicate in English quite well, which I believe is a sign of evolution, or at least a change in social organization,\u201d said the scientist.");return w("div",null,w(b.a,{items:e},w("div",{className:"namecard"},w(m.a,null,w(I.a,{md:8,className:"welcome-title"},w(g.a,{bottom:!0,duration:5e3},w("h1",null,"BLOG")))))),w("div",{className:"standard-container"},t,t,t,t,t,t,t,t,t,t,t))}}]),t}(o.Component),z=c.a.createElement,y=function(e){return z(N,null)};y.getInitialProps=function(e){var t;return n.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.query,i.abrupt("return",{content:t});case 2:case"end":return i.stop()}}))};t.default=y}},[["HxXx",0,1,8]]]);