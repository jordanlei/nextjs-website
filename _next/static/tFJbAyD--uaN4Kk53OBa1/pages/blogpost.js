(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"3P0e":function(e,t,a){"use strict";var i=a("0iUn"),n=a("sLSF"),o=a("MI3g"),l=a("a7VT"),s=a("Tit0"),r=a("q1tI"),c=a.n(r),h=(a("xTJh"),a("GkDY"),a("eAqH"),c.a.createElement),d=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(l.a)(t).call(this,e))).items=a.props.items,a}return Object(s.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this.items.name;console.log(document.getElementById(e).offsetTop),window.addEventListener("scroll",(function(t){var a,i,n,o,l,s,r=(l=this.pageYOffset)-document.getElementById(e).offsetTop;for(a=0,o=(n=document.querySelectorAll("[data-type='parallax-"+e+"']")).length;a<o;a++)s="translate3d(0,"+-1*(l+r*(i=n[a]).getAttribute("data-depth"))+"px, 0)",i.style["-webkit-transform"]=s,i.style["-moz-transform"]=s,i.style["-ms-transform"]=s,i.style["-o-transform"]=s,i.style.transform=s}))}},{key:"render",value:function(){var e=this.items.name,t=this.items.background,a=this.items.backgrounddepth,i=this.items.layers.map((function(t){return h("div",{className:"layer "+t.name,"data-depth":t.depth,"data-type":"parallax-"+e,style:{backgroundImage:"url("+t.image+")"}})}));return h("div",null,h("div",{id:this.items.name,style:{minHeight:"100vh"}},h("div",{className:"layer layer-bg","data-depth":a,"data-type":"parallax-"+e,style:{backgroundImage:t}}),i,this.props.children))}}]),t}(r.Component);t.a=d},AfU7:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTM2NiAyNDE2Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6bm9uZTt9LmNscy0ye2ZpbGw6dXJsKCNzcGFyc2VfZG90cyk7fTwvc3R5bGU+PHBhdHRlcm4gaWQ9InNwYXJzZV9kb3RzIiBkYXRhLW5hbWU9InNwYXJzZV9kb3RzIiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHZpZXdCb3g9IjAgMCA4MCA4MCI+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iODAiIGhlaWdodD0iODAiLz48cGF0aCBkPSJNMCwwVjgwSDgwVjBaTTQwLjUsNDVBNC41LDQuNSwwLDEsMSw0NSw0MC41LDQuNDksNC40OSwwLDAsMSw0MC41LDQ1WiIvPjwvcGF0dGVybj48L2RlZnM+PHRpdGxlPnNwYXJzZV9kb3RzQXNzZXQgMTwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cmVjdCBjbGFzcz0iY2xzLTIiIHdpZHRoPSIxMzY2IiBoZWlnaHQ9IjI0MTYiLz48L2c+PC9nPjwvc3ZnPg=="},HxXx:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogpost",function(){return a("oedW")}])},YPJC:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDEzNjYgNzY4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMzY2IDc2ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6bm9uZTt9DQoJLnN0MXtkaXNwbGF5Om5vbmU7fQ0KCS5zdDJ7ZGlzcGxheTppbmxpbmU7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9DQoJLnN0M3tkaXNwbGF5OmlubGluZTtmaWxsOnVybCgjU1ZHSURfMl8pO30NCgkuc3Q0e29wYWNpdHk6MC4zMjtmaWxsOiMxRjFDOTE7fQ0KCS5zdDV7ZGlzcGxheTppbmxpbmU7b3BhY2l0eTowLjY7ZmlsbDojMUYxQzkxO30NCjwvc3R5bGU+DQo8cGF0dGVybiAgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0ic3BhcnNlX3g1Rl9kb3RzIiB2aWV3Qm94PSIwIC04MCA4MCA4MCIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ij4NCgk8Zz4NCgkJPHJlY3QgeT0iLTgwIiBjbGFzcz0ic3QwIiB3aWR0aD0iODAiIGhlaWdodD0iODAiLz4NCgkJPHBhdGggZD0iTTAtODBWMGg4MHYtODBIMHogTTQwLjUtMzVjLTIuNDksMC00LjUtMi4wMS00LjUtNC41czIuMDEtNC41LDQuNS00LjVzNC41LDIuMDEsNC41LDQuNVM0Mi45OS0zNSw0MC41LTM1eiIvPg0KCTwvZz4NCjwvcGF0dGVybj4NCjxnIGlkPSJMYXllcl8xIiBjbGFzcz0ic3QxIj4NCgkNCgkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI2ODMiIHkxPSI5LjA5NDk0N2UtMTMiIHgyPSI2ODMiIHkyPSI3NjgiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIC0xIDEzNjYgNzY4KSI+DQoJCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDM0OEQiLz4NCgkJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzAwMDAwMCIvPg0KCTwvbGluZWFyR3JhZGllbnQ+DQoJPHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSIwLDAgMTM2NiwwIDEzNjYsNzY4IDAsNzY4IAkiLz4NCgk8cGF0dGVybiAgaWQ9IlNWR0lEXzJfIiB4bGluazpocmVmPSIjc3BhcnNlX3g1Rl9kb3RzIiBwYXR0ZXJuVHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAwIC02NCkiPg0KCTwvcGF0dGVybj4NCgk8cmVjdCBjbGFzcz0ic3QzIiB3aWR0aD0iMTM2NiIgaGVpZ2h0PSIyNDE2Ii8+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMiI+DQoJPHBhdGggY2xhc3M9InN0NCIgZD0iTTUzMy41LDg2Ljc0djQwMC41MmgzMDBWODYuNzRINTMzLjV6IE03ODkuMDgsNDUzLjNINTc3LjY4VjEyMC41aDIxMS40MVY0NTMuM3oiLz4NCjwvZz4NCjxnIGlkPSJMYXllcl8zIiBjbGFzcz0ic3QxIj4NCgk8cmVjdCB4PSI2MTMuNzYiIHk9IjE2MS41NSIgY2xhc3M9InN0NSIgd2lkdGg9IjEzOS40OCIgaGVpZ2h0PSIyNTAuMTMiLz4NCjwvZz4NCjwvc3ZnPg0K"},aZG6:function(e,t){e.exports="/_next/static/images/waterlilies-monet-1742282e72a4428044287b6411247c04.jpg"},oedW:function(e,t,a){"use strict";a.r(t);var i=a("ln6h"),n=a.n(i),o=a("q1tI"),l=a.n(o),s=a("0iUn"),r=a("sLSF"),c=a("MI3g"),h=a("a7VT"),d=a("Tit0"),u=a("ok1R"),g=a("rhny"),m=a("s/m+"),I=a.n(m),b=a("3P0e"),y=a("9a8N"),w=a("F66N"),p=a("oqc9"),N=l.a.createElement,M=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return N("div",null,N("div",{className:"sidenav web-only",style:{top:"45vh"}},N(y.a,{vertical:!0},N(w.a,null,N(p.Link,{class:"navlink",activeClass:"active",to:"blog-head",href:"",spy:!0,smooth:!0,duration:800}," Top")),N("a",{href:"/blog"},"Back"))),N("div",{className:"sidenav mobile-only",style:{position:"fixed",top:"0",left:"0",width:"100%",backgroundColor:"rgba(0, 0, 0, 0.7)"}},N(y.a,null,N("div",{style:{paddingLeft:"20px",paddingRight:"20px"}},N(w.a,null,N(p.Link,{class:"navlink",activeClass:"active",to:"blog-head",href:"",spy:!0,smooth:!0,duration:800}," Top"))),N("a",{href:"/blog"},"Back"))))}}]),t}(o.Component),z=l.a.createElement,v=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e={name:"blogpost",background:"linear-gradient(rgba(10, 9, 54, 1), rgba(176, 50, 25, 1))",backgrounddepth:"-0.3",layers:[{image:a("AfU7"),depth:"-0.90",name:"layer1"},{image:a("YPJC"),depth:"-0.2",name:"layer2"},{image:a("yH0b"),depth:"-0.3",name:"layer3"},{image:a("yH0b"),depth:"-0.4",name:"layer4"}]},t=z("p",null,"The scientist named the population, after their distinctive horn, Ovid\u2019s Unicorn. These four-horned, silver-white unicorns were previously unknown to science. Now, after almost two centuries, the mystery of what sparked this odd phenomenon is finally solved. Dr. Jorge P\xe9rez, an evolutionary biologist from the University of La Paz, and several companions, were exploring the Andes Mountains when they found a small valley, with no other animals or humans. P\xe9rez noticed that the valley had what appeared to be a natural fountain, surrounded by two peaks of rock and silver snow. P\xe9rez and the others then ventured further into the valley. \u201cBy the time we reached the top of one peak, the water looked blue, with some crystals on top,\u201d said P\xe9rez. P\xe9rez and his friends were astonished to see the unicorn herd. These creatures could be seen from the air without having to move too much to see them \u2013 they were so close they could touch their horns. While examining these bizarre creatures the scientists discovered that the creatures also spoke some fairly regular English. P\xe9rez stated, \u201cWe can see, for example, that they have a common \u2018language,\u2019 something like a dialect or dialectic.\u201d Dr. P\xe9rez believes that the unicorns may have originated in Argentina, where the animals were believed to be descendants of a lost race of people who lived there before the arrival of humans in those parts of South America. While their origins are still unclear, some believe that perhaps the creatures were created when a human and a unicorn met each other in a time before human civilization. According to P\xe9rez, \u201cIn South America, such incidents seem to be quite common.\u201d However, P\xe9rez also pointed out that it is likely that the only way of knowing for sure if unicorns are indeed the descendants of a lost alien race is through DNA. \u201cBut they seem to be able to communicate in English quite well, which I believe is a sign of evolution, or at least a change in social organization,\u201d said the scientist.");return z("div",null,z(M,null),z("section",{id:"blog-head"},z(b.a,{items:e},z("div",{className:"blog-namecard"},z(u.a,null,z(g.a,{md:5,className:"blog-title"},z(I.a,{bottom:!0,duration:5e3},z("h1",null,"How to Engage with Art"),z("h2",null,"A Guide Made for and by an Amateur"),z("h3",null,z("i",null,"Posted by Jordan Lei 12.12.19")))))))),z("div",{className:"blog-container"},z("div",{className:"blog-post",style:{padding:"5%",backgroundColor:"rgba(0, 0, 0, 0.8)"}},z("h3",null,"Two Blackboards and a Bucket"),z("p",null,"How on earth could this be art? You scratch your head as you hear an old man behind you mutter something about degenerates. Okay, so maybe you\u2019re not that angry about the piece, but nevertheless, you\u2019re perplexed, if not a bit upset. ",z("br",null),"You want to engage, but there\u2019s so little to engage with. It\u2019s not like you don\u2019t have any idea what good art looks like. In the Renaissance and Romantic exhibits, you can marvel at the skill and artistry necessary to craft gorgeous life-like pieces. But once Modernism hits, you begin to break into a sweat. ",z("br",null),"Perhaps, like fine wine, art has been left to the elites to enjoy and define what is \u201cgood.\u201d Perhaps it\u2019s a lost cause. Or, perhaps, like the classic children\u2019s fable The Emperor\u2019s New Clothes, we\u2019re all playing along to a cruel joke, waiting for some child to come along and make clear that we\u2019re all delusional. ",z("br",null),"All of these points are valid, and many of them are partially true. But if the goal here is to better understand the artwork we see in museums, our homes, and on our bustling city streets, it might be helpful to keep an open mind and see if we can glean something from art as it exists today.",z("br",null),"The term art has come to encompass so many diverse and exciting fields that it would be impossible to cover it all in an article, so for now let\u2019s focus our attention primarily on visual art, although the concepts we explore here will extend to other forms of art as well.",z("br",null),"In this article, I\u2019m going to introduce three different ways of looking at art. While not all encompassing, they\u2019re a good first step in being able to enjoy, and possibly even engage, with the art world around us.",z("br",null)),z("h3",null,"Art as Representation"),z("p",null,"Ah, something familiar! We\u2019re all well-versed in the concept of art as a representation of visual perception. Take the Mona Lisa, for example. It\u2019s easy to see that the piece is a work of art. The amount of detail and realism in every square inch of the painting is remarkable, to say the least. ",z("br",null),"But perhaps art represents more than meets the eye. As participants and sometimes even instigators of history, art and history are inevitably related. You can\u2019t have one without another. Artists, and the art they produce, are a reflection of the times they lived in. In this way, art tells a story, not only about the narrative which may be present in the canvas, but also the history surrounding it, and the time in which it existed. ",z("br",null),z("div",{style:{width:"300px",padding:"5%",float:"right",fontSize:"15px"}},z("img",{src:a("aZG6"),style:{width:"100%"}}),z("i",null,"Bridge over a Pond of Water Lilies, Claude Monet")),"A great example of this is the Impressionist Movement. If you look at this piece by Monet (often cited as \u201cthe Father of Impressionism\u201d), you might be perplexed. Compared to the art that came before, it seems like art has taken a step back from realism. Some of his pieces are blurry, and almost shimmer, as if your eyes can\u2019t focus on a single part of the painting. How do we appreciate art like this? ",z("br",null),"Here, looking at art as a representation of its historical context can clue us in and fill some gaps. Just before the Impressionist Movement hit its stride, the camera was invented. Artists began to fear that they would no longer be necessary- after all, why pay for an expensive portrait when you could just get a photograph? Impressionists like Monet began to experiment with paint to see how they could depict light, color, and movement in a way that photographs at the time (and indeed, even today) could not. Suddenly, Monet\u2019s paintings of shimmering ponds and hazy evenings doesn\u2019t seem like so much of a mystery anymore. ",z("br",null),"Perhaps you now understand why Monet painted in the style he did, but you don\u2019t like it. Which is totally fine! But if the reason you don\u2019t like his art is solely because it fails to accurately represent real life, I have some bad news for you.",z("br",null)),t,t,t,t,t,t,t,t,t,t,t)))}}]),t}(o.Component),f=l.a.createElement,k=function(e){return f(v,null)};k.getInitialProps=function(e){var t;return n.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.query,a.abrupt("return",{content:t});case 2:case"end":return a.stop()}}))};t.default=k},yH0b:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDEzNjYgNzY4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMzY2IDc2ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6bm9uZTt9DQoJLnN0MXtkaXNwbGF5Om5vbmU7fQ0KCS5zdDJ7ZGlzcGxheTppbmxpbmU7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9DQoJLnN0M3tkaXNwbGF5OmlubGluZTtmaWxsOnVybCgjU1ZHSURfMl8pO30NCgkuc3Q0e2Rpc3BsYXk6aW5saW5lO29wYWNpdHk6MC4zMjtmaWxsOiMxRjFDOTE7fQ0KCS5zdDV7b3BhY2l0eTowLjY7ZmlsbDojMUYxQzkxO30NCjwvc3R5bGU+DQo8cGF0dGVybiAgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0ic3BhcnNlX3g1Rl9kb3RzIiB2aWV3Qm94PSIwIC04MCA4MCA4MCIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ij4NCgk8Zz4NCgkJPHJlY3QgeT0iLTgwIiBjbGFzcz0ic3QwIiB3aWR0aD0iODAiIGhlaWdodD0iODAiLz4NCgkJPHBhdGggZD0iTTAtODBWMGg4MHYtODBIMHogTTQwLjUtMzVjLTIuNDksMC00LjUtMi4wMS00LjUtNC41czIuMDEtNC41LDQuNS00LjVzNC41LDIuMDEsNC41LDQuNVM0Mi45OS0zNSw0MC41LTM1eiIvPg0KCTwvZz4NCjwvcGF0dGVybj4NCjxnIGlkPSJMYXllcl8xIiBjbGFzcz0ic3QxIj4NCgkNCgkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI2ODMiIHkxPSI5LjA5NDk0N2UtMTMiIHgyPSI2ODMiIHkyPSI3NjgiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIC0xIDEzNjYgNzY4KSI+DQoJCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDM0OEQiLz4NCgkJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzAwMDAwMCIvPg0KCTwvbGluZWFyR3JhZGllbnQ+DQoJPHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSIwLDAgMTM2NiwwIDEzNjYsNzY4IDAsNzY4IAkiLz4NCgk8cGF0dGVybiAgaWQ9IlNWR0lEXzJfIiB4bGluazpocmVmPSIjc3BhcnNlX3g1Rl9kb3RzIiBwYXR0ZXJuVHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAwIC02NCkiPg0KCTwvcGF0dGVybj4NCgk8cmVjdCBjbGFzcz0ic3QzIiB3aWR0aD0iMTM2NiIgaGVpZ2h0PSIyNDE2Ii8+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMiIgY2xhc3M9InN0MSI+DQoJPHBhdGggY2xhc3M9InN0NCIgZD0iTTUzMy41LDg2Ljc0djQwMC41MmgzMDBWODYuNzRINTMzLjV6IE03ODkuMDgsNDUzLjNINTc3LjY4VjEyMC41aDIxMS40MVY0NTMuM3oiLz4NCjwvZz4NCjxnIGlkPSJMYXllcl8zIj4NCgk8cmVjdCB4PSI2MTMuNzYiIHk9IjE2MS41NSIgY2xhc3M9InN0NSIgd2lkdGg9IjEzOS40OCIgaGVpZ2h0PSIyNTAuMTMiLz4NCjwvZz4NCjwvc3ZnPg0K"}},[["HxXx",0,1,8]]]);