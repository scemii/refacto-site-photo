(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return c});var r=a(0),i=a.n(r),s=a(153),n=a(161),l=a.n(n),o=a(152),c="518840097";t.default=function(e){var t=e.data;return i.a.createElement(s.a,null,i.a.createElement(o.a,{title:"Photos Index"}),i.a.createElement("p",null),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"card text-white bg-dark mb-3",style:{width:"18rem"}},i.a.createElement(l.a,{fluid:t.placeholderImage.childImageSharp.fluid,className:"card-img-top",alt:"Card image cap"}),i.a.createElement("div",{className:"card-body"},i.a.createElement("h5",{className:"card-title"},"Sydney Australia"),i.a.createElement("p",{className:"card-text"},"Couples of snapshots done in Sydney during December 2019."),i.a.createElement("a",{href:"/sydney",className:"btn btn-light"},"See pictures.."))),i.a.createElement("div",{className:"card text-white bg-dark mb-3",style:{width:"18rem"}},i.a.createElement(l.a,{fluid:t.placeholderImage2.childImageSharp.fluid,className:"card-img-top",alt:"Card image cap"}),i.a.createElement("div",{className:"card-body"},i.a.createElement("h5",{className:"card-title"},"Paris Grenelle"),i.a.createElement("p",{className:"card-text"},"Snaps of Beaugrenelle disctrict - Paris 15 in winter 2018."),i.a.createElement("a",{href:"/grenelle",className:"btn btn-light"},"See pictures.."))),i.a.createElement("div",{className:"card text-white bg-dark mb-3",style:{width:"18rem"}},i.a.createElement(l.a,{fluid:t.placeholderImage3.childImageSharp.fluid,className:"card-img-top",alt:"Card image cap"}),i.a.createElement("div",{className:"card-body"},i.a.createElement("h5",{className:"card-title"},"Gaming Consoles"),i.a.createElement("p",{className:"card-text"},"Shots of random consoles from my youth done with macro lens: 70-210."),i.a.createElement("a",{href:"/consoles",className:"btn btn-light"},"See pictures..")))))}},151:function(e,t,a){var r;e.exports=(r=a(155))&&r.default||r},152:function(e,t,a){"use strict";var r=a(157),i=a(0),s=a.n(i),n=a(4),l=a.n(n),o=a(160),c=a.n(o);function d(e){var t=e.description,a=e.lang,i=e.meta,n=e.keywords,l=e.title,o=r.data.site,d=t||o.siteMetadata.description;return s.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:l},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:d}].concat(n.length>0?{name:"keywords",content:n.join(", ")}:[]).concat(i)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d},153:function(e,t,a){"use strict";var r=a(154),i=a(0),s=a.n(i),n=a(4),l=a.n(n),o=a(33),c=a.n(o),d=(a(151),s.a.createContext({})),u=function(e){return s.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):s.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func};var p=a(7),f=a.n(p),m=a(156),h=a.n(m),g=function(e){function t(){for(var t,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).state={navbarOpen:!1,css:"collapse navbar-collapse",links:[{id:1,path:"/",text:"home"},{id:2,path:"/photos",text:"pictures"},{id:3,path:"/about",text:"about"},{id:4,path:"/contact",text:"contact"}]},t.navbarHandler=function(){t.state.navbarOpen?t.setState({navbarOpen:!1,css:"collapse navbar-collapse"}):t.setState({navbarOpen:!0,css:"collapse navbar-collapse show"})},t}return f()(t,e),t.prototype.render=function(){return s.a.createElement("nav",{className:"navbar navbar-expand-sm bg-light navbar-light"},s.a.createElement(c.a,{to:"/",className:"navbar-brand",style:{padding:30}},s.a.createElement("img",{style:{margin:0},src:h.a,alt:"logo"})),s.a.createElement("button",{className:"navbar-toggler",type:"button",onClick:this.navbarHandler},s.a.createElement("span",{className:"navbar-toggler-icon"})),s.a.createElement("div",{className:this.state.css},s.a.createElement("ul",{className:"navbar-nav max-auto",style:{display:"auto"}},this.state.links.map(function(e){return s.a.createElement("li",{key:e.id,className:"nav-item"},s.a.createElement(c.a,{to:e.path,className:"nav-link text-capitalize"},e.text))}))))},t}(i.Component),y=(a(158),a(159),function(e){var t=e.children;return s.a.createElement(u,{query:"755544856",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(g,{siteTitle:e.site.siteMetadata.title}),s.a.createElement("div",{style:{margin:"0 auto",maxWidth:1080,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},s.a.createElement("main",null,t)),s.a.createElement("footer",{className:"footer py-3"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-10 mx-auto col-md-6 text-yellow text-center text-capitalize"},s.a.createElement("h5",null," © ",(new Date).getFullYear()))))))},data:r})});y.propTypes={children:l.a.node.isRequired};t.a=y},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Canon A1"}}}}},155:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),i=a.n(r),s=a(4),n=a.n(s),l=a(55),o=a(2),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:n.a.shape({pathname:n.a.string.isRequired}).isRequired},t.default=c},156:function(e,t,a){e.exports=a.p+"static/logo-e45dfa216dc978653074a267d0e7e602.png"},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Canon A1",description:"Welcome to my website exposing analog shots done with Canon A1 / Canon AF1",author:"P.R"}}}}},161:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,s=r(a(7)),n=r(a(35)),l=r(a(75)),o=r(a(74)),c=r(a(0)),d=r(a(4)),u=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},p=Object.create({}),f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return p[a]||!1},m=new WeakMap;var h=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(m.has(e.target)){var t=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),m.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),m.set(e,t)),function(){a.unobserve(e),m.delete(e)}},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",s=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1",d=e.transitionDelay?e.transitionDelay:"0.5s";return"<picture>"+r+"<img "+l+o+a+i+t+n+s+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+d+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,s=e.style,n=e.onLoad,d=e.onError,u=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:i},u,{onLoad:n,onError:d,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))});y.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,s=t.fadeIn,l=f(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var o=!(t.critical&&!t.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:i,fadeIn:s,hasNoScript:o,seenBefore:l},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)((0,n.default)(a))),a.handleRef=a.handleRef.bind((0,n.default)((0,n.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=h(e,function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,p[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,s=void 0===i?{}:i,n=e.imgStyle,l=void 0===n?{}:n,d=e.placeholderStyle,p=void 0===d?{}:d,f=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.Tag,E=e.itemProp,w="boolean"==typeof b?"lightgray":b,S=(0,o.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},l,p),N=(0,o.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},l),x={title:t,alt:this.state.isVisible?"":a,style:S,className:f};if(m){var L=m;return c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(L.srcSet)},c.default.createElement(v,{style:{width:"100%",paddingBottom:100/L.aspectRatio+"%"}}),w&&c.default.createElement(v,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",right:0,left:0}}),L.base64&&c.default.createElement(y,(0,o.default)({src:L.base64},x)),L.tracedSVG&&c.default.createElement(y,(0,o.default)({src:L.tracedSVG},x)),this.state.isVisible&&c.default.createElement("picture",null,L.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),c.default.createElement(y,{alt:a,title:t,sizes:L.sizes,src:L.src,crossOrigin:this.props.crossOrigin,srcSet:L.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t},L))}}))}if(h){var R=h,I=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},s);return"inherit"===s.display&&delete I.display,c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:I,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},w&&c.default.createElement(v,{title:t,style:{backgroundColor:w,width:R.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:R.height}}),R.base64&&c.default.createElement(y,(0,o.default)({src:R.base64},x)),R.tracedSVG&&c.default.createElement(y,(0,o.default)({src:R.tracedSVG},x)),this.state.isVisible&&c.default.createElement("picture",null,R.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),c.default.createElement(y,{alt:a,title:t,width:R.width,height:R.height,sizes:R.sizes,src:R.src,crossOrigin:this.props.crossOrigin,srcSet:R.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t,width:R.width,height:R.height},R))}}))}return null},t}(c.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),E=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});b.propTypes={resolutions:v,sizes:E,fixed:v,fluid:E,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var w=b;t.default=w}}]);
//# sourceMappingURL=component---src-pages-photos-js-f3e44f9161b6beac8086.js.map