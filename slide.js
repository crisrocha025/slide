/! function ($) {var e =! 0; $. flexslider = function (t, a) {var n = $ (t); n.vars = $. extend ({}, $. flexslider.defaults, a); var i = n.vars.namespace, s = window.navigator && window.navigator.msPointerEnabled && window.MSGesture, r = ("ontouchstart" na janela || s || window.DocumentTouch && document instanceof DocumentTouch) && n.vars.touch, o = "clique na conexão MSPointerUp sensível ao toque", l = "", c, d = "vertical" === n.vars.direction, u = n.vars.reverse, v = n.vars.itemWidth> 0, p = " fade "=== n.vars.animation, m =" "! == n.vars.asNavFor, f = {}; $. data (t," flexslider ", n), f = {init: function () {n.animating =! 1, n.currentSlide = parseInt (n.vars.startAt? n.vars.startAt: 0,10), isNaN (n.currentSlide) && (n.currentSlide = 0), n.animatingTo = n.currentSlide, n.atEnd = 0 === n.currentSlide || n.currentSlide === n.Último, n.containerSelector = n.vars.selector.substr (0, n.vars.selector.search ("")), n.slides = $ (n.vars.selector, n), n.container = $ (n.containerSelector, n), n.conta = n.slides.length, n.syncExists = $ (n.vars.sync) .length> 0, "slide" === n.vars.animation && (n.vars.animation = "swing"), n.prop = d? "top": "marginLeft", n.args = {}, n.manualPause =! 1, n.stopped =! 1, n.started =! 1, n.startTimeout = null, n.transitions =! n.vars.video &&! p && n.vars.useCSS && function () {var e = document.createElement ("div"), t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"]; for (var a in t) if (void 0! == e.style [t [a]]) retorna n.pfx = t [a] .replace ("Perspective", ""). toLowerCase (), n. prop = "-" + n.pfx + "- transformação",! 0; return! 1} (), n.sureAnimationEnd = "", ""! == n.vars.controlsContainer && (n.controlsContainer = $ (n.vars.controlsContainer) .length> 0 && $ (n.vars.controlsContainer)), ""! == n.vars .manualControls && (n.manualControls = $ (n.vars.manualControls) .length> 0 && $ (n.vars.manualControls)), ""! == n.vars.customDirectionNav && (n.customDirectionNav = 2 === $ ( n.vars.customDirectionNav) .length && $ (n.vars.customDirectionNav)), n.vars.randomize && (n.slides.sort (function () {retornar Math.round (Math.random ()) -. 5}) , n.container.empty (). append (n.slides)), n.doMath (), n.setup ("init"), n.vars.controlNav && f.controlNav.setup (), n.vars.directionNav && f. directionNav.setup (), n.vars.keyboard && (1 === $ (n.containerSelector) .length || n.vars.multipleKeyboard) && $ (document) .bind ("keyup ", função (e) {var t = e.keyCode; if (! n.animating && (39 === t || 37 === t)) {var a = 39 === t? n.getTarget ( "próximo"): 37 === t? n.getTarget ("anterior") :! 1; n.flexAnimate (a, n.vars.pauseOnAction)}}), n.vars.mousewheel && n.bind ("mousewheel" , função (e, t, a, i) {e.preventDefault (); var s = 0> t? n.getTarget ("próximo"): n.getTarget ("anterior"); n.flexAnimate (s, n .vars.pauseOnAction)}), n.vars.pausePlay && f.pausePlay.setup (), n.vars.slideshow && n.vars.pauseInvisible && f.pauseInvisible.init (), n.vars.slideshow && (n.vars.pauseOnHover function () {n.manualPlay || n.manualPause || n.pause ()}, function () {n.manualPause || n.manualPlay || n.parou || n.play ()}), n. vars.pauseInvisible && f.pauseInvisible.isHidden () || (n.vars.initDelay> 0? n.startTimeout = setTimeout (n.play, n.vars.initDelay): n.play ())), m &&f.asNav.setup (), r && n.vars.touch && f.touch (), (! p || p && n.vars.smoothHeight) && $ (window) .bind ("redimensionar a orientação - mudar o foco", f .resize), n.find ("img"). attr ("arrastável", "false"), setTimeout (function () {n.vars.start (n)}, 200)}, asNav: {setup: function () {n.asNav =! 0, n.animatingTo = Math.floor (n.currentSlide / n.move), n.currentItem = n.currentSlide, n.slides.removeClass (i + "slide ativo"). eq (n.currentItem) .addClass (i + "slide ativo"), s? (slider = t._sider = n, n.slides.each (function () {var e = this; e._gesture = new MSGesture, e._gesture .target = e, e.addEventListener ("MSPointerDown", função (e) {e.preventDefault (), e.currentTarget._gesture && e.currentTarget._gesture.addPointer (e.pointerId)} ,! 1), e.addEventListener ( "MSGestureTap", função (e) {e.preventDefault ();var t = $ (this), a = t.index (); $ (n.vars.asNavFor) .data ("flexslider"). animação || t.hasClass ("active") || (n.direction = n.currentItem <a? "next": "prev", n.flexAnimate (a, n.vars.pauseOnAction,! 1,! 0,! 0))})})): n.slides.on (o, função (e) {e.preventDefault (); var t = $ (this), a = t.index (), s = t.offset (). left - $ (n) .scrollLeft (); 0> = s && t .hasClass (i + "slide ativo")? n.flexAnimate (n.getTarget ("prev") ,! 0): $ (n.vars.asNavFor) .data ("flexslider"). animando || t.hasClass (i + "slide ativo") || (n.direction = n.currentItem <a? "next": "prev", n.flexAnimate (a, n.vars.pauseOnAction,! 1,! 0,! 0) )})}}, controlNav: {setup: function () {n.manualControls? f.controlNav.setupManual (): f.controlNav.setupPaging ()}, setupPaging: function () {var e = "miniaturas" == = n.vars.controlNav? "control-thumbs ":" control-paging ", t = 1, a, s; if (n.controlNavScaffold = $ ('<ol class ="' + i + "control-nav" + i + e + '"> </ ol> '), n.pagingCount> 1) para (var r = 0; r <n.pagingCount; r ++) {if (s = n.slides.eq (r), void 0 === s.attr (" data-thumb-alt ") && s.attr (" data-thumb-alt "," "), altText =" "! == s.attr (" data-thumb-alt ")? altText = 'alt ="' + s.attr ("data-thumb-alt") + '"':" ", a =" miniaturas "=== n.vars.controlNav? '<img src ="' + s.attr ("data- thumb ") + '"' + altText + "/>": '<a href="#">' + t + "</a>", "miniaturas" === n.vars.controlNav &&! 0 === n .vars.thumbCaptions) {var c = s.attr ("data-thumbcaption"); ""!== c && void 0! == c && (a + = '<span class = "' + i + 'caption">' + c + "</span>")} n.controlNavScaffold.append ("<li>" + a + "< / li> "), t ++} n.controlsContainer? $ (n.controlsContainer) .append (n.controlNavScaffold): n.append (n.controlNavScaffold), f.controlNav.set (), f.controlNav.active () , n.controlNavScaffold.delegate ("a, img", o, função (e) {if (e.preventDefault (), "" === l || l === e.type) {var t = $ ( this), a = n.controlNav.index (t); t.hasClass (i + "active") || (n.direction = a> n.currentSlide? "next": "prev", n.flexAnimate (a, n.vars.pauseOnAction))} "" === l && (l = e.type), f.setToClearWatchedEvent ()})}, setupManual: function () {n.controlNav = n.manualControls, f.controlNav.active (), n.controlNav.bind (o, function (e) {if (e.preventDefault (), ""=== l || l === e.type) {var t = $ (this), a = n.controlNav.index (t); t.hasClass (i + "ativo") || (a> n. currentSlide? n.direction = "próximo": n.direction = "anterior", n.flexAnimate (a, n.vars.pauseOnAction))} "" === l && (l = e.type), f.setToClearWatchedEvent ( )})}, defina: function () {var e = "miniaturas" === n.vars.controlNav? "img": "a"; n.controlNav = $ ("." + i + "control-nav li "+ e, n.controlsContainer? n.controlsContainer: n)}, ativo: function () {n.controlNav.removeClass (i +" ativo "). eq (n.animatingTo) .addClass (i +" ativo ")}, update: function (e, t) {n.pagingCount> 1 && "add" === e? n.controlNavScaffold.append ($ ('<li> <a href="#">' + n.count + "</ a> </li> ")): 1 === n.pagingCount? n.controlNavScaffold.find (" li "). remove (): n.controlNav.eq (t) .closest ("li"). remove (), f.controlNav.set (), n.pagingCount> 1 && n.pagingCount! == n.controlNav.length? n.update (t, e) : f.controlNav.active ()}}, directionNav: {setup: function () {var e = $ ('<ul class = "' + i + 'direction-nav"> <li class = "' + i + 'nav -prev "> <a class="'+i+'prev" href="#"> '+ n.vars.prevText +' </a> </li> <li class =" '+ i +' nav-next " > <a class="'+i+'next" href="#"> '+ n.vars.nextText + "</a> </li> </ul>"); n.customDirectionNav? n.directionNav = n .customDirectionNav: n.controlsContainer? ($ (n.controlsContainer) .append (e), n.directionNav = $ ("." + i + "direção-nav li a", n.controlsContainer)) :( n.append ( e), n.directionNav = $ ("."+ i + "direção-nav li a", n)), f.directionNav.update (), n.directionNav.bind (o, função (e) {e.preventDefault (); var t; ("" === l || l === e.type) && (t = $ (this) .hasClass (i + "next")? n.getTarget ("next"): n.getTarget ("prev"), n.flexAnimate ( t, n.vars.pauseOnAction)), "" === l && (l = e.type), f.setToClearWatchedEvent ()})}, update: function () {var e = i + "disabled"; 1 == = n.pagingCount? n.directionNav.addClass (e) .attr ("tabindex", "- 1"): n.vars.animationLoop? n.directionNav.removeClass (e) .removeAttr ("tabindex"): 0 = == n.animatingTo? n.directionNav.removeClass (e) .filter ("." + i + "prev"). addClass (e) .attr ("tabindex", "- 1"): n.animatingTo === n.last? n.directionNav.removeClass (e) .filter ("." + i + "next"). addClass (e) .attr ("tabindex","-1"): n.directionNav.removeClass (e) .removeAttr ("tabindex")}}, pausePlay: {setup: function () {var e = $ ('<div class = "' + i + 'pauseplay" > <a href="#"> </a> </div> '); n.controlsContainer? (n.controlsContainer.append (e), n.pausePlay = $ ("." + i + "pauseplay a", n.controlsContainer)) :( n.append (e), n.pausePlay = $ ("." + i + "pauseplay a", n)), f.pausePlay.update (n.vars.slideshow? i + "pause" : i + "play"), n.pausePlay.bind (o, função (e) {e.preventDefault (), ("" === l || l === e.type) && ($ (this). hasClass (i + "pausa")? (n.manualPause =! 0, n.manualPlay =! 1, n.pause ()) :( n.manualPause =! 1, n.manualPlay =! 0, n.play () )), "" === l && (l = e.type), f.setToClearWatchedEvent ()})}, update: function (e) {"play" === e? n.pausePlay.removeClass (i + "pausa"). addClass (i + "play"). html (n.vars.playText): n.pausePlay.removeClass (i + "play"). addClass (i + "pause"). html (n.vars .pauseText)}}, toque em: function () {function e (e) {e.stopPropagation (), n.animating? e.preventDefault () :( n.pause (), t._gesture.addPointer (e.pointerId ), T = 0, c = d? Nh: nw, f = Número (nova data), l = v && u && n.animatingTo === n.Último? 0: v && u.n.limit- (n.itemW + n.vars .itemMargin) * n.move * n.animatingTo: v && n.currentSlide === n.último? n.limit: v? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide: u? (n.last-n.currentSlide + n.cloneOffset) * c: (n.currentSlide + n.cloneOffset) * c)} função a (e) {e.stopPropagation (); var a = e.target._slider; Se (a) {var n = -e.translationX, i = -e.translationY; retornar T + = d? i: n, m = T, x = d? Math.abs (T) <Math.abs (-n ): Math.abs (T) <Math.abs (-i), e.detail === e.MSGESTURE_FLAG_INERTIA? Void setImmediate (function () {t._gesture.stop ()}): void ((! X || Number (new Date) -f> 500) && (e.preventDefault () ,! p && a.transitions && (a .vars.animationLoop || (m = T / (0 === a.currentSlide && 0> T || a.currentSlide === a.last && T> 0? Math.abs (T) / c + 2: 1)), a.setProps (l + m, "setTouch"))))}} função i (e) {e.stopPropagation (); var t = e.target._slider; if (t) {if (t.animatingTo == = t.currentSlide &&! x && null! == m) {var a = u? -m: m, n = a> 0? t.getTarget ("próximo"): t.getTarget ("anterior"); t.canAdvance ( n) && (Número (nova data) -f <550 && Math.abs (a)> 50 || Math.abs (a)> c / 2)? t.flexAnimate (n, t.vars.pauseOnAction): p || t.flexAnimate (t.currentSlide, t.vars.pauseOnAction,! 0)} r = nulo, o = nulo, m = nulo, m = nulo, l = nulo, T = 0}} var r, o, l, c, m, f, g, h, S, x =! 1, y = 0, b = 0, T = 0; s? (t.style.msTouchAction = "nenhum", t._gesture = novo MSGesture, t._gesture.target = t, t.addEventListener ("MSPointerDown", e,! 1), t._slider = n, t.addEventListener ("MSGestureChange", a,! 1), t.addEventListener ("MSGestureEnd", i,! 1)) :( g = função (e) {n.animando? E.preventDefault () :( window.navigator.msPointerEnabled || 1 === e.touches.length) && ( n.pause (), c = d? nh: nw, f = Número (nova data), y = e.toca [0] .pageX, b = e.toca [0] .pageY, l = v && u && n.animatingTo = == n.last? 0: v && u? n.limit- (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo: v && n.currentSlide === n.last? n.limit: v? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide: u? (n.último-n.currentSlide + n.cloneOffset) * c: (n.currentSlide + n.cloneOffset) * c, r = d? b: y, o = d? y: b, t.addEventListener ("touchmove", h,! 1), t.addEventListener ("touchend", S,! 1))}, h = function ( e) {y = e.toca [0] .páginaX, b = e.toca [0].Você pode usar o seguinte método para calcular o valor de x no gráfico: x = 0; x = 0; x = 0; x = 0; || Número (nova Data) -f> t) && (e.preventDefault () ,! p && n.transitions && (n.vars.animationLoop || (m / = 0 === n.currentSlide && 0> m || n.currentSlide === n.último && m> 0? Math.abs (m) / c + 2: 1), n.setProps (l + m, "setTouch")))}, S = função (e) {if (t. removeEventListener ("touchmove", h,! 1), n.animatingTo === n.currentSlide &&! x && null! == m) {var a = u? -m: m, i = a> 0? n.getTarget (" próximo "): n.getTarget (" anterior "); n.canAdvance (i) && (Número (nova data) -f <550 && Math.abs (a)> 50 || Math.abs (a)> c / 2) ? n.flexAnimate (i, n.vars.pauseOnAction): p || n.flexAnimate (n.currentSlide, n.vars.pauseOnAction,! 0)} t.removeEventListener ("touchend", S,! 1), r = nulo, o = nulo, m = nulo, l = nulo}, t.addEventListener ("touchstart ", g,! 1))}, redimensionar: function () {! n.animating && n.is (": visible ") && (v || n.doMath (), p? f.smoothHeight (): v? (n.slides.width (n.computedW), n.update (n.pagingCount), n.setProps ()): d? (n.viewport.height (nh), n.setProps (nh, "setTotal") ) :( n.vars.smoothHeight && f.smoothHeight (), n.newSlides.width (n.computedW), n.setProps (n.computedW, "setTotal")))}, smoothHeight: function (e) {if (! d || p) {var t = p? n: n.viewport; e? t.animate ({height: n.slides.eq (n.animatingTo) .height ()}, e): t.height (n .slides.eq (n.animatingTo) .height ())}}, sync: function (e) {var t = $ (n.vars.sync) .data ("flexslider"), a = n.animatingTo; switch (e) {case "animate": t.flexAnimate (a, n.vars.pauseOnAction,! 1,! 0); break; case "play": t.playing || t.asNav || t.play () ; break; case "pause": t.pause ()}}, uniqueID: function (e) {return e.filter ("[id] "). add (e.find (" [id] "))). each (function () {var e = $ (this); e.attr (" id ", e.attr (" id ") + "_ clone")}), e}, pauseInvisible: {visProp: null, init: function () {var e = f.pauseInvisible.getHiddenProp (); se (e) {var t = e.replace (/ [H | h] idden /, "") + "mudança de visibilidade"; document.addEventListener (t, função () {f.pauseInvisible.isHidden ()? n.startTimeout? clearTimeout (n.startTimeout): n.pause (): n .started? n.play (): n.vars.initDelay> 0? setTimeout (n.play, n.vars.initDelay): n.play ()})}}, isHidden: function () {var e = f .pauseInvisible.getHiddenProp (); retorna e? document [e] :! 1}, getHiddenProp: function () {var e = ["webkit", "moz", "ms", "o"]; if ("hidden "no documento) retorna" oculto "; para (var t = 0; t <comprimento.de; t ++) if (e [t] +" Oculto "no documento) retorna e [t] +" Oculto ";return null}}, setToClearWatchedEvent: function () {clearTimeout (c), c = setTimeout (function () {l = ""}, 3e3)}}, n.flexAnimate = function (e, t, a, s, o ) {if (n.vars.animationLoop || e === n.currentSlide || (n.direction = e> n.currentSlide? "next": "anterior"), m && 1 === n.pagingCount && (n. direction = n.currentItem <e? "next": "prev") ,! n.animating && (n.canAdvance (e, o) || a) && n.is (": visible")) {if (m && s) { var l = $ (n.vars.asNavFor) .data ("flexslider"); if (n.atEnd = 0 === e || e === n.conta-1, l.flexAnimate (e,! 0 ,! 1,! 0, o), n.direction = n.currentItem <e? "Next": "prev", l.direction = n.direction, Math.ceil ((e + 1) /n.visible) -1 === n.currentSlide || 0 === e) return n.currentItem = e, n.slides.removeClass (i + "slide ativo"). Eq (e) .addClass (i + "slide ativo" ) ,! 1; n.currentItem = e, n.slides.removeClass (i + "slide ativo"). eq (e) .addClass (i + "slide ativo"), e = Math.floor (e / n.visible)} if (n.animating =! 0, n .animatingTo = e, t && n.pause (), n.vars.before (n), n.syncExists &&! o && f.sync ("animate"), n.vars.controlNav && f.controlNav.active (), v || n. slides.removeClass (i + "slide ativo"). eq (e) .addClass (i + "slide ativo"), n.atEnd = 0 === e || e === n.Último, n.vars. directionNav && f.directionNav.update (), e === n.last && (n.vars.end (n), n.vars.animationLoop || n.pause ()), p) r? (n.slides.eq ( n.currentSlide) .css ({opacidade: 0, zIndex: 1}), n.slides.eq (e) .css ({opacidade: 1, zIndex: 2}), n.wrapup (c)) :( n .slides.eq (n.currentSlide) .css ({zIndex: 1}). animar ({opacidade: 0}, n.vars.animationSpeed, n.vars.easing), n.slides.eq (e) .css ({zIndex: 2}). animate ({opacidade: 1}, n.vars.animationSpeed, n.vars.easing, n.wrapup));else {var c = d? n.slides.filter (": first"). height (): n.computadoW, g, h, S; v? (g = n.vars.itemMargin, S = (n.itemW + g) * n.move * n.animatingTo, h = S> n.limite && 1! == n.visível? n.limite: S): h = 0 === n.currentSlide && e === n.count-1 && n .vars.animationLoop && "next"! == n.direction? u? (n.count + n.cloneOffset) * c: 0: n.currentSlide === n.last && 0 === e && n.vars.animationLoop && "prev" ! == n.direction? u? 0: (n.conta + 1) * c: u? (n.conta-1-e + n.cloneOffset) * c: (e + n.cloneOffset) * c, n .setProps (h, "", n.vars.animationSpeed), n.transitions? (n.vars.animationLoop && n.atEnd || (n.animating =! 1, n.currentSlide = n.animatingTo), n.container. unbind ("transição da webkitTransitionEnd"), n.container.bind ("transição da webkitTransitionEnd", função () {clearTimeout (n.ensureAnimationEnd), n.wrapup (c)}), clearTimeout (n.allowAnimationEnd), n.ensureAnimationEnd = setTimeout (function () {n.wrapup (c)}, n.vars.animationSpeed ​​+ 100)): n.container.animate (n.args, n.vars.animationSpeed, n.vars .easing, function () {n.wrapup (c)})} n.vars.smoothHeight && f.smoothHeight (n.vars.animationSpeed)}}, n.wrapup = função (e) {p || v || (0 === n.currentSlide && n.animatingTo === n.last && n.vars.animationLoop? n.setProps (e, "jumpEnd"): n.currentSlide === n.last && 0 === n.animatingTo && n.vars.animationLoop && n. setProps (e, "jumpStart")), n.animating =! 1, n.currentSlide = n.animatingTo, n.vars.after (n)}, n.animateSlides = function () {! n.animating && e && n.flexAnimate ( n.getTarget ("próximo"))}, n.pause = function () {clearInterval (n.animatedSlides), n.animatedSlides = nulo, n.playing =! 1, n.vars.pausePlay && f.pausePlay.update (" reproduzir "), n.syncExists && f.sync ("pausa")}, n.play = function () {n.playing && clearInterval (n.animatedSlides), n.animatedSlides = n.animatedSlides || setInterval (n.animateSlides, n.vars.slideshowSpeed), n.play .started = n.playing =! 0, n.vars.pausePlay && f.pausePlay.update ("pause"), n.syncExists && f.sync ("play")}, n.stop = function () {n.pause () , n.stopped =! 0}, n.canAdvance = function (e, t) {var a = m? n.pagingCount-1: n.last; return t?! 0: m && n.currentItem === n.count -1 && 0 === e && "prev" === n.direction?! 0: m && 0 === n.currentItem && e === n.pagingCount-1 && "next"! == n.direction?! 1: e! = = n.currentSlide || m? n.vars.animationLoop?! 0: n.atEnd && 0 === n.currentSlide && e === a && "next"! == n.direction?! 1: n.atEnd && n.currentSlide == = a && 0 === e && "próximo "=== n.direction?! 1:! 0:! 1}, n.getTarget = função (e) {retornar n.direction = e," próximo "=== e? n.currentSlide === n .last? 0: n.currentSlide + 1: 0 === n.currentSlide? n.last: n.currentSlide-1}, n.setProps = function (e, t, a) {var i = function () { var a = e? e: (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo, i = function () {if (v) retorna "setTouch" === t? e: u && n. animatingTo === n.último? 0: u? n.limit- (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo: n.animatingTo === n.último? n.limit: a; switch (t) {case "setTotal": retorna u? (n.count-1-n.currentSlide + n.cloneOffset) * e: (n.currentSlide + n.cloneOffset) * e; case "setTouch": return u? e: e; case "jumpEnd": return u? e: n.count * e; case "jumpStart": return u? n.count * e: e; padrao: return e}} (); return- 1 * i + "px"} (); n.transições && (i = d? "Translate3d (0," + i + ", 0)": "translate3d ("+ i +", 0,0) ", a = nulo 0! == a? a / 1e3 +" s ":" 0s ", n.container.css (" - "+ n.pfx +" - transição- duration ", a), n.container.css (" transição-duração ", a)), n.args [n.prop] = i, (n.transitions || void 0 === a) && n.container. css (n.args), n.container.css ("transformação", i)}, n.setup = function (e) {if (p) n.slides.css ({width: "100%", "float ":" esquerda ", marginRight:" - 100% ", posição:" relativa "})," init "=== e&& (r? n.slides.css ({opacidade: 0, exibição:" bloco ", webkitTransition : "opacidade" + n.vars.animationSpeed ​​/ 1e3 + "facilidade", zIndex: 1}). eq (n.currentSlide) .css ({opacidade: 1, zIndex: 2}): 0 == n.vars. fadeFirstSlide? n.slides.css ({opacidade: 0, exibição: "bloco", zIndex: 1}). eq (n.currentSlide) .css ({zIndex: 2}). css ({opacidade: 1}): n.slides.css ({opacidade: 0, exibição: "bloco", zIndex: 1}). eq (n.currentSlide) .css ({zIndex: 2}). animate ({opacidade: 1}, n.vars.animationSpeed, n .vars.easing)), n.vars.smoothHeight && f.smoothHeight (); else {var t, a; "init" === e && (n.viewport = $ ('<div class = "' + i + 'viewport" > </div> ') .css ({estouro: "oculto", posição: "relativo"}). appendTo (n) .append (n.container), n.cloneCount = 0, n.cloneOffset = 0, u && (a = $. makeArray (n.slides) .reverse (), n.slides = $ (a), n.container.empty (). append (n.slides))), n.vars.animationLoop &&! v && ( n.cloneCount = 2, n.cloneOffset = 1, "init"! == e && n.container.find (".clone"). remove (), n.container.append (f.uniqueID (n.slides.first ( ) .clone (). addClass ("clone")). attr ("aria-hidden", "true")). prefpend (f.uniqueID (n.slides.last (). clone (). addClass ("clone")). attr ("aria-hidden", "true"))), n.newSlides = $ (n.vars.selector, n), t = u? n.count-1-n.currentSlide + n.cloneOffset: n.currentSlide + n.cloneOffset, d &&! v? (n.container.height (200 * (n.count + n.cloneCount) + "%"). css ("posição", "absoluto"). largura ("100%"), setTimeout (função () {n.newSlides.css ({display: "block"}), n.doMath (), n.viewport. height (nh), n.setProps (t * nh, "init")}, "init" === e? 100: 0)) :( n.container.width (200 * (n.count + n.cloneCount ) + "%"), n.setProps (t * n.computedW, "init"), setTimeout (função () {n.doMath (), n.newSlides.css ({width: n.computedW, marginRight: n .computedM, "float": "left", display: "block"}), n.vars.smoothHeight && f.smoothHeight ()}, "init" === e? 100: 0))} v || n.slides .removeClass (i + "slide ativo"). eq (n.currentSlide) .addClass (i + "slide ativo"), n.vars.init (n)}, n.doMath = function () {var e = n. slides.first (), t = n.vars.itemMargin, a = n.vars.minItems, i = n.vars.maxItems; nw = void 0 === n.viewport? n.width (): n.viewport .width (), nh = e.height (), n.boxPadding = e.outerWidth () - e.width (), v? (n.itemT = n.vars.itemWidth + t, n.itemM = t, n.minW = a? a * n.itemT: nw, n.maxW = i? i * n.itemT-t: nw, n.itemW = n.minW> nw? (nw-t * (a-1) ) /a:n.maxW <nw? (nw-t * (i-1)) / i: n.vars.itemWidth> nw? nw: n.vars.itemWidth, n.visible = Math.floor (nw / n.itemW), n.move = n.vars.move> 0 && n.vars.move <n.visível? n.vars.move: n.visível, n.pagingCount = Math.ceil ((n.conta-n. visível) /n.move+1), n.último = n.pagingCount-1, n.limit = 1 === n.pagingCount? 0: n.vars.itemWidth> nw? n.itemW * (n.count -1) + t * (n.contagem-1) :( n.itemW + t) * n.contagem-nw-t) :( n.itemW = nw, n.itemM = t, n.pagingCount = n.count, n.last = n.count-1), n.computedW = n.itemW-n.boxPadding, n.computedM = n.itemM}, n.update = function (e, t) {n .doMath (), v || (e <n.currentSlide? n.currentSlide + = 1: e <= n.currentSlide && 0! == e && (n.currentSlide- = 1), n.animatingTo = n.currentSlide), n .vars.controlNav &&! n.manualControls && ("add" === t &&! v || n.pagingCount> n.controlNav.length? f.controlNav.update ("add") :( "remove" === t &&! v || n.pagingCount <n.controlNav.length) && (v && n.currentSlide> n.last && (n.currentSlide- = 1, n.animatingTo- = 1), f.controlNav.update ("remover", n. último))), n.vars.directionNav && f.directionNav.update ()}, n.addSlide = função (e, t) {var a = $ (e); n.count + = 1, n.last = n.count -1, d && void 0! == t? N.slides.eq (n.count-t) .after (a): n.container.prepend (a): void 0! == t? N.slides.eq (t) .before (a): n.container.append (a), n.update (t, "add"), n.slides = $ (n.vars.selector + ": not (.clone)", n), n.setup (), n.vars.added (n)}, n.removeSlide = função (e) {var t = isNaN (e)? n.slides.index ($ (e)): e; n.count- = 1, n.last = n.count-1, isNaN (e)? $ (e, n.slides) .remove (): d && u? n.slides.eq (n.last) .remove ( ): n.slides.eq (e) .remove (), n.doMath (), n.update (t, "remove"), n.slides = $ (n.vars.selector + ": não (.clone) ", n), n.setup (), n.vars.removed (n)}, f.init ()}, $ (window) .blur (função (t) {e =! 1}). focus (function (t) {e =! 0}), $. flexslider.defaults = {namespace: "flex -", seletor: ". slides> li", animação: "fade", flexibilização: "swing", direção: "horizontal ", reverse:! 1, animationLoop:! 0, smoothHeight:! 1, startAt: 0, apresentação de slides:! 0, apresentação de slidesSpeed: 7e3, animationSpeed: 600, initDelay: 0, randomize:! 1, fadeFirstSlide:! 0,thumbCaptions:! 1, pauseOnAction:! 0, pauseOnHover:! 1, pauseInvisible:! 0, useCSS:! 0, touch:! 0, video:! 1, controlNav:! 0, directionNav:! 0, prevText: "Anterior" , nextText: "Next", teclado:! 0, multipleKeyboard:! 1, roda do mouse:! 1, pausePlay:! 1, pauseText: "Pause", playText: "Play", controlsContainer: "", manualControls: "", customDirectionNav : "", sync: "", asNavFor: "", itemWidth: 0, itemMargin: 0, minItems: 1, maxItems: 0, move: 0, allowOneSlide:! 0, start: function () {}, before: function () {}, depois de: function () {}, final: function () {}, adicionado: function () {}, removido: function () {}, init: function () {}}, $. fn. flexslider = function (e) {if (void 0 === e && (e = {}), "objeto" == tipo de e) retorna this.each (function () {var t = $ (this), a = e .selector? e.selector: ". slides> li", n = t.find (a); 1 === comprimento n && e.allowOneSlide ===! 0 || 0 === n.length? (n.fadeIn (400), e.start && e.start (t)): void 0 === t.data ("flexslider") && new $. flexslider (this, e)}); var t = $ (this) .data ("flexslider"); switch (e) {case "play": t.play (); break; case "pause": t.pause (); break; case "stop": t.stop (); break; case "next": t.flexAnimate (t.getTarget ("next") ,! 0); break; case "prev": case "anterior ": t.flexAnimate (t.getTarget (" anterior ") ,! 0); quebra; padrão:" número "== tipo de e && t.flexAnimate (e,! 0)}}} (jQuery);stop (); break; case "next": t.flexAnimate (t.getTarget ("next") ,! 0); break; case "anterior": case "anterior": t.flexAnimate (t.getTarget ("anterior ") ,! 0); break; default:" number "== tipo de e && t.flexAnimate (e,! 0)}}} (jQuery);stop (); break; case "next": t.flexAnimate (t.getTarget ("next") ,! 0); break; case "anterior": case "anterior": t.flexAnimate (t.getTarget ("anterior ") ,! 0); break; default:" number "== tipo de e && t.flexAnimate (e,! 0)}}} (jQuery);
