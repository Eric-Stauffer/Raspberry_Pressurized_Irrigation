(function(g){var window=this;var M5=function(a,b){var c="ytp-miniplayer-button-bottom-right";var d=g.W?{D:"div",Y:["ytp-icon","ytp-icon-expand-watch-page"]}:{D:"svg",P:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},K:[{D:"g",P:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},K:[{D:"g",P:{transform:"translate(-1.000000, -3.000000)"},K:[{D:"polygon",P:{points:"0 0 24 0 24 24 0 24"}},{D:"path",P:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]};var e="Open video page";a.O().ka("kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d=g.W?{D:"div",Y:["ytp-icon","ytp-icon-expand-miniplayer"]}:{D:"svg",P:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},K:[{D:"g",P:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},K:[{D:"g",P:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},K:[{D:"path",P:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Expand");g.V.call(this,{D:"button",Y:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],P:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},K:[d]});this.J=a;this.oa("click",this.onClick,this);this.na("title",g.lO(a,e,"i"));g.Le(this,g.PN(b.rb(),this.element))},N5=function(a){g.V.call(this,{D:"div",
I:"ytp-miniplayer-ui"});this.player=a;this.H=!1;this.G=this.u=this.o=void 0;this.N(a,"minimized",this.WI);this.N(a,"onStateChange",this.zO)},O5=function(a){g.XL.call(this,a);
this.o=new N5(this.player);this.o.hide();g.LL(this.player,this.o.element,4);a.app.H.o&&(this.load(),g.J(a.getRootNode(),"ytp-player-minimized",!0))};
g.r(M5,g.V);M5.prototype.onClick=function(){this.J.sa("onExpandMiniplayer")};g.r(N5,g.V);g.h=N5.prototype;
g.h.show=function(){this.o=new g.un(this.VI,null,this);this.o.start();if(!this.H){this.C=new g.YR(this.player,this);g.A(this,this.C);g.LL(this.player,this.C.element,4);this.C.A=.6;this.Yb=new g.WQ(this.player);g.A(this,this.Yb);this.A=new g.V({D:"div",I:"ytp-miniplayer-scrim"});g.A(this,this.A);this.A.ca(this.element);this.N(this.A.element,"click",this.uB);var a=new g.V({D:"button",Y:["ytp-miniplayer-close-button","ytp-button"],P:{"aria-label":"Close"},K:[g.nN()]});g.A(this,a);a.ca(this.A.element);
this.N(a.element,"click",this.aA);a=new M5(this.player,this);g.A(this,a);a.ca(this.A.element);this.B=new g.V({D:"div",I:"ytp-miniplayer-controls"});g.A(this,this.B);this.B.ca(this.A.element);this.N(this.B.element,"click",this.uB);var b=new g.V({D:"div",I:"ytp-miniplayer-button-container"});g.A(this,b);b.ca(this.B.element);a=new g.V({D:"div",I:"ytp-miniplayer-play-button-container"});g.A(this,a);a.ca(this.B.element);var c=new g.V({D:"div",I:"ytp-miniplayer-button-container"});g.A(this,c);c.ca(this.B.element);
this.R=new g.HO(this.player,this,!1);g.A(this,this.R);this.R.ca(b.element);b=new g.DO(this.player,this);g.A(this,b);b.ca(a.element);this.M=new g.HO(this.player,this,!0);g.A(this,this.M);this.M.ca(c.element);this.G=new g.lQ(this.player,this);g.A(this,this.G);this.G.ca(this.A.element);this.u=new g.TO(this.player,this);g.A(this,this.u);g.LL(this.player,this.u.element,4);this.F=new g.V({D:"div",I:"ytp-miniplayer-buttons"});g.A(this,this.F);g.LL(this.player,this.F.element,4);a=new g.V({D:"button",Y:["ytp-miniplayer-close-button",
"ytp-button"],P:{"aria-label":"Close"},K:[g.nN()]});g.A(this,a);a.ca(this.F.element);this.N(a.element,"click",this.aA);a=new g.V({D:"button",Y:["ytp-miniplayer-replay-button","ytp-button"],P:{"aria-label":"Close"},K:[g.CN()]});g.A(this,a);a.ca(this.F.element);this.N(a.element,"click",this.xM);this.N(this.player,"presentingplayerstatechange",this.XI);this.N(this.player,"appresize",this.cu);this.N(this.player,"fullscreentoggled",this.cu);this.cu();this.H=!0}0!=this.player.getPlayerState()&&g.V.prototype.show.call(this);
this.u.show();this.player.unloadModule("annotations_module")};
g.h.hide=function(){this.o&&(this.o.dispose(),this.o=void 0);g.V.prototype.hide.call(this);this.player.app.H.o||(this.H&&this.u.hide(),this.player.loadModule("annotations_module"))};
g.h.X=function(){this.o&&(this.o.dispose(),this.o=void 0);g.V.prototype.X.call(this)};
g.h.aA=function(){this.player.stopVideo();this.player.sa("onCloseMiniplayer")};
g.h.xM=function(){this.player.playVideo()};
g.h.uB=function(a){if(a.target==this.A.element||a.target==this.B.element)g.O(this.player.O().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.OC(g.rL(this.player))?this.player.pauseVideo():this.player.playVideo():this.player.sa("onExpandMiniplayer")};
g.h.WI=function(){g.J(this.player.getRootNode(),"ytp-player-minimized",this.player.app.H.o)};
g.h.VI=function(){this.u.Xb();this.G.Xb();this.o&&this.o.start()};
g.h.XI=function(a){g.T(a.state,32)&&this.C.hide()};
g.h.cu=function(){g.mP(this.u,0,g.sL(this.player).getPlayerSize().width,!1);this.u.Fv()};
g.h.zO=function(a){this.player.app.H.o&&(0==a?this.hide():this.show())};
g.h.rb=function(){return this.C};
g.h.Mc=function(){return!1};
g.h.fe=function(){return!1};
g.h.sj=function(){return!1};
g.h.jv=function(){};
g.h.Ri=function(){};
g.h.Ul=function(){};
g.h.Gm=function(){return null};
g.h.au=function(){return new g.vh(0,0,0,0)};
g.h.handleGlobalKeyDown=function(){return!1};
g.h.handleGlobalKeyUp=function(){return!1};
g.h.al=function(a,b,c,d,e){var f=0,k=d=0,l=g.Rh(a);if(b){c=g.En(b,"ytp-prev-button")||g.En(b,"ytp-next-button");var m=g.En(b,"ytp-play-button"),n=g.En(b,"ytp-miniplayer-expand-watch-page-button");c?f=k=12:m?(b=g.Oh(b,this.element),k=b.x,f=b.y-12):n&&(k=g.En(b,"ytp-miniplayer-button-top-left"),f=g.Oh(b,this.element),b=g.Rh(b),k?(k=8,f=f.y+40):(k=f.x-l.width+b.width,f=f.y-20))}else k=c-l.width/2,d=25+(e||0);b=g.sL(this.player).getPlayerSize().width;e=f+(e||0);l=g.Td(k,0,b-l.width);e?(a.style.top=e+
"px",a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.h.showControls=function(){};
g.h.du=function(){};
g.h.Ng=function(){};g.r(O5,g.XL);O5.prototype.create=function(){};
O5.prototype.Lf=function(){return!1};
O5.prototype.load=function(){this.player.hideControls();this.o.show()};
O5.prototype.unload=function(){this.player.showControls();this.o.hide()};g.lM.miniplayer=O5;})(_yt_player);
