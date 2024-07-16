/*! For license information please see cookieconsent-76ba7ccf84597c35e667.js.LICENSE.txt */
(self.webpackChunkpinpoint=self.webpackChunkpinpoint||[]).push([[5441],{6361:function(e,t,n){"use strict";n(49121);document.addEventListener("turbolinks:load",(function(){(function(){var e,t,n;if("?show_cookies_notice=true"===(null===(e=window)||void 0===e||null===(t=e.location)||void 0===t?void 0:t.search))return!1;if("test"===(null===(n=window)||void 0===n?void 0:n.railsEnv))return!0;var o=window.location.pathname;return!!["login","admin","platform","extensions"].includes(o.split("/")[1])})()||function(){var e=window.cookieConsentData,t=window.cookieConsentCustomConfig,n=window.initCookieConsent();if(t)n.run(t);else{var o=e.translations,i=e.customContent,a=[{description:i.explanation}];a.push({title:o.strictly_necessary_cookies,description:o.these_cookies_are_essential,toggle:{value:"necessary",enabled:!0,readonly:!0},cookie_table:[{col1:"_pinpoint_session",col2:"pinpointhq.com",col3:o.as_soon_as_browser_window_is_closed,col4:o.allows_us_to_associate_file_uploads},{col1:"LSW_WEB",col2:window.location.hostname,col3:o.as_soon_as_browser_window_is_closed,col4:o.allows_our_load_balancer},{col1:"LSW_WEB",col2:"app.pinpointhq.com",col3:o.as_soon_as_browser_window_is_closed,col4:o.allows_our_load_balancer},{col1:"cc_cookie",col2:window.location.hostname,col3:o.six_months,col4:o.saves_your_decisions}]}),a.push({title:o.analytics_and_performance_cookies,description:o.these_cookies_remember_the_choices,toggle:{value:"analytics",enabled:!1,readonly:!1},cookie_table:[{col1:"ahoy_visitor",col2:"pinpointhq.com",col3:o.two_years,col4:o.internal_metrics_collector},{col1:"ahoy_visit",col2:"pinpointhq.com",col3:o.four_hours,col4:o.internal_metrics_collector}]}),i.further_information&&a.push({title:o.more_information,description:i.further_information});var c={delay:1,autorun:!0,current_lang:"en",autoclear_cookies:!0,page_scripts:!0,auto_language:null,onFirstAction:function(e,t){},onAccept:function(){if(n.allowedCategory("analytics")){var e=new Event("cookieconsent-analytics");document.dispatchEvent(e)}},onChange:function(e,t){},languages:{en:{consent_modal:{title:o.cookies,description:i.notice,primary_btn:{text:o.accept_all,role:"accept_all"},secondary_btn:{text:o.settings,role:"settings"}},settings_modal:{title:o.cookie_preferences,save_settings_btn:o.save_settings,accept_all_btn:o.accept_all,reject_all_btn:o.reject_all,close_btn_label:o.close,cookie_table_headers:[{col1:o.name},{col2:o.domain},{col3:o.expiration},{col4:o.description}],blocks:a}}}};n.run(c)}setTimeout((function(){var e=n.getConfig("cookie_name");n.validCookie(e)&&n.autoclearCookies(!0)}),1e3)}()}))},49121:function(){!function(){"use strict";var e="initCookieConsent";"function"!==typeof window[e]&&(window[e]=function(e){var t,n,o,i,a,c,r,s,l,d,u,p,f,_,g,h,v,m,b,k,y,C,w,A,x,S,N,T,E,O,L,j,I={mode:"opt-in",current_lang:"en",auto_language:null,autorun:!0,page_scripts:!0,hide_from_bots:!0,cookie_name:"cc_cookie",cookie_expiration:182,cookie_domain:window.location.hostname,cookie_path:"/",cookie_same_site:"Lax",use_rfc_cookie:!1,autoclear_cookies:!0,revision:0,script_selector:"data-cookiecategory"},M={},D={},H=null,q=!0,J=!1,G=!1,U=!1,P=!1,F=!1,B=!0,R=[],K=!1,W=[],z=[],V=[],Q=!1,X=[],Y=[],Z=[],$=[],ee=[],te=document.documentElement,ne=document.getElementById("external-content-body"),oe=document.getElementById("external-content-footer"),ie=function(e){ue("CookieConsent [CONFIG]: received_config_settings ",t=e),"number"===typeof t.cookie_expiration&&(I.cookie_expiration=t.cookie_expiration),"number"===typeof t.cookie_necessary_only_expiration&&(I.cookie_necessary_only_expiration=t.cookie_necessary_only_expiration),"boolean"===typeof t.autorun&&(I.autorun=t.autorun),"string"===typeof t.cookie_domain&&(I.cookie_domain=t.cookie_domain),"string"===typeof t.cookie_same_site&&(I.cookie_same_site=t.cookie_same_site),"string"===typeof t.cookie_path&&(I.cookie_path=t.cookie_path),"string"===typeof t.cookie_name&&(I.cookie_name=t.cookie_name),"function"===typeof t.onAccept&&(s=t.onAccept),"function"===typeof t.onFirstAction&&(d=t.onFirstAction),"function"===typeof t.onChange&&(l=t.onChange),"opt-out"===t.mode&&(I.mode="opt-out"),"number"===typeof t.revision&&(t.revision>-1&&(I.revision=t.revision),F=!0),"boolean"===typeof t.autoclear_cookies&&(I.autoclear_cookies=t.autoclear_cookies),!0===t.use_rfc_cookie&&(I.use_rfc_cookie=!0),!0===t.hide_from_bots&&(Q=navigator&&(navigator.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(navigator.userAgent)||navigator.webdriver)),I.page_scripts=!0===t.page_scripts,"browser"===t.auto_language||!0===t.auto_language?I.auto_language="browser":"document"===t.auto_language&&(I.auto_language="document"),ue("CookieConsent [LANG]: auto_language strategy is '"+I.auto_language+"'"),I.current_lang=_e(t.languages,t.current_lang)},ae=function(e){for(var t="accept-",n=r("c-settings"),o=r(t+"all"),i=r(t+"necessary"),a=r(t+"custom"),c=0;c<n.length;c++)n[c].setAttribute("aria-haspopup","dialog"),Ce(n[c],"click",(function(e){e.preventDefault(),M.showSettings(0)})),Ce(n[c],"keypress",(function(e){"Enter"===e.key&&M.showSettings(0)}));for(c=0;c<o.length;c++)Ce(o[c],"click",(function(e){s(e,"all")})),Ce(o[c],"keypress",(function(e){"Enter"===e.key&&s(e,"all")}));for(c=0;c<a.length;c++)Ce(a[c],"click",(function(e){s(e)})),Ce(a[c],"keypress",(function(e){"Enter"===e.key&&s(e)}));for(c=0;c<i.length;c++)Ce(i[c],"click",(function(e){s(e,[])})),Ce(i[c],"keypress",(function(e){"Enter"===e.key&&s(e,[])}));function r(t){return(e||document).querySelectorAll('a[data-cc="'+t+'"], button[data-cc="'+t+'"]')}function s(e,t){e.preventDefault(),M.accept(t),M.hideSettings(),M.hide()}},ce=function(e,t){return Object.prototype.hasOwnProperty.call(t,e)?e:we(t).length>0?Object.prototype.hasOwnProperty.call(t,I.current_lang)?I.current_lang:we(t)[0]:void 0},re=function(e){if(!0===t.force_consent&&Ae(te,"force--consent"),!h){h=pe("div");var n=pe("div"),o=pe("div");h.id="cm",n.id="c-inr-i",o.id="cm-ov",h.setAttribute("role","dialog"),h.setAttribute("aria-modal","true"),h.setAttribute("aria-hidden","false"),h.setAttribute("aria-labelledby","c-ttl"),h.setAttribute("aria-describedby","c-txt"),ne&&ne.setAttribute("aria-hidden","true"),oe&&oe.setAttribute("aria-hidden","true"),g.appendChild(h),g.appendChild(o),h.style.visibility=o.style.visibility="hidden",o.style.opacity=0}var i=t.languages[e].consent_modal.title;i&&(v||((v=pe("div")).id="c-ttl",v.setAttribute("role","heading"),v.setAttribute("aria-level","2"),n.appendChild(v)),v.innerHTML=i);var a=t.languages[e].consent_modal.description;F&&(a=B?a.replace("{{revision_message}}",""):a.replace("{{revision_message}}",t.languages[e].consent_modal.revision_message||"")),m||((m=pe("div")).id="c-txt",n.appendChild(m)),m.innerHTML=a;var c,r=t.languages[e].consent_modal.primary_btn,s=t.languages[e].consent_modal.secondary_btn;r&&(b||((b=pe("button")).id="c-p-bn",b.className="c-bn","accept_all"===r.role&&(c="all"),Ce(b,"click",(function(){M.hide(),ue("CookieConsent [ACCEPT]: cookie_consent was accepted!"),M.accept(c)}))),b.innerHTML=t.languages[e].consent_modal.primary_btn.text);s&&(k||((k=pe("button")).id="c-s-bn",k.className="c-bn c_link","accept_necessary"===s.role?Ce(k,"click",(function(){M.hide(),M.accept([])})):Ce(k,"click",(function(){M.showSettings(0)}))),k.innerHTML=t.languages[e].consent_modal.secondary_btn.text);var l=t.gui_options;C||((C=pe("div")).id="c-inr",C.appendChild(n)),y||((y=pe("div")).id="c-bns",l&&l.consent_modal&&!0===l.consent_modal.swap_buttons?(s&&y.appendChild(k),r&&y.appendChild(b),y.className="swap"):(r&&y.appendChild(b),s&&y.appendChild(k)),(r||s)&&C.appendChild(y),h.appendChild(C)),J=!0},se=function(e){if(w)(T=pe("div")).id="s-bl";else{w=pe("div");var n=pe("div"),o=pe("div"),i=pe("div");A=pe("div"),x=pe("div");var a=pe("div");S=pe("button");var s=pe("div");N=pe("div");var l=pe("div");w.id="s-cnt",n.id="c-vln",i.id="c-s-in",o.id="cs",x.id="s-ttl",A.id="s-inr",a.id="s-hdr",N.id="s-bl",S.id="s-c-bn",l.id="cs-ov",s.id="s-c-bnc",S.className="c-bn",w.setAttribute("role","dialog"),w.setAttribute("aria-modal","true"),w.setAttribute("aria-hidden","true"),w.setAttribute("aria-labelledby","s-ttl"),x.setAttribute("role","heading"),w.style.visibility=l.style.visibility="hidden",l.style.opacity=0,s.appendChild(S),Ce(n,"keydown",(function(e){27===(e=e||window.event).keyCode&&M.hideSettings(0)}),!0),Ce(S,"click",(function(){M.hideSettings(0)}))}S.setAttribute("aria-label",t.languages[e].settings_modal.close_btn_label||"Close"),r=t.languages[e].settings_modal.blocks,c=t.languages[e].settings_modal.cookie_table_headers;var d=r.length;x.innerHTML=t.languages[e].settings_modal.title;for(var u=0;u<d;++u){var p=r[u].title,f=r[u].description,_=r[u].toggle,h=r[u].cookie_table,v=!0===t.remove_cookie_tables,m=(f||!v&&h)&&"truthy",b=pe("div"),k=pe("div");if(f){var y=pe("div");y.className="p",y.insertAdjacentHTML("beforeend",f)}var C=pe("div");if(C.className="title",b.className="c-bl",k.className="desc","undefined"!==typeof _){var I="c-ac-"+u,H=pe(m?"button":"div"),J=pe("label"),G=pe("input"),U=pe("span"),P=pe("span"),F=pe("span"),B=pe("span");H.className=m?"b-tl exp":"b-tl",J.className="b-tg",G.className="c-tgl",F.className="on-i",B.className="off-i",U.className="c-tg",P.className="t-lb",m&&(H.setAttribute("aria-expanded","false"),H.setAttribute("aria-controls",I)),G.type="checkbox",U.setAttribute("aria-hidden","true");var R=_.value;G.value=R,P.textContent=p,H.insertAdjacentHTML("beforeend",p),C.appendChild(H),U.appendChild(F),U.appendChild(B),q?_.enabled?(G.checked=!0,!T&&Z.push(!0),_.enabled&&!T&&V.push(R)):!T&&Z.push(!1):de(D.categories,R)>-1?(G.checked=!0,!T&&Z.push(!0)):!T&&Z.push(!1),!T&&$.push(R),_.readonly?(G.disabled=!0,Ae(U,"c-ro"),!T&&ee.push(!0)):!T&&ee.push(!1),Ae(k,"b-acc"),Ae(C,"b-bn"),Ae(b,"b-ex"),k.id=I,k.setAttribute("aria-hidden","true"),J.appendChild(G),J.appendChild(U),J.appendChild(P),C.appendChild(J),m&&function(e,t,n){Ce(H,"click",(function(){Se(t,"act")?(xe(t,"act"),n.setAttribute("aria-expanded","false"),e.setAttribute("aria-hidden","true")):(Ae(t,"act"),n.setAttribute("aria-expanded","true"),e.setAttribute("aria-hidden","false"))}),!1)}(k,b,H)}else if(p){var K=pe("div");K.className="b-tl",K.setAttribute("role","heading"),K.setAttribute("aria-level","3"),K.insertAdjacentHTML("beforeend",p),C.appendChild(K)}if(p&&b.appendChild(C),f&&k.appendChild(y),!v&&"undefined"!==typeof h){for(var W=document.createDocumentFragment(),z=0;z<c.length;++z){var Q=pe("th"),X=c[z];if(Q.setAttribute("scope","col"),X){var Y=X&&we(X)[0];Q.textContent=c[z][Y],W.appendChild(Q)}}var te=pe("tr");te.appendChild(W);var ne=pe("thead");ne.appendChild(te);var oe=pe("table");oe.appendChild(ne);for(var ie=document.createDocumentFragment(),ae=0;ae<h.length;ae++){for(var ce=pe("tr"),re=0;re<c.length;++re)if(X=c[re]){Y=we(X)[0];var se=pe("td");se.insertAdjacentHTML("beforeend",h[ae][Y]),se.setAttribute("data-column",X[Y]),ce.appendChild(se)}ie.appendChild(ce)}var le=pe("tbody");le.appendChild(ie),oe.appendChild(le),k.appendChild(oe)}(_&&p||!_&&(p||f))&&(b.appendChild(k),T?T.appendChild(b):N.appendChild(b))}E||((E=pe("div")).id="s-bns"),L||((L=pe("button")).id="s-all-bn",L.className="c-bn",E.appendChild(L),Ce(L,"click",(function(){M.hideSettings(),M.hide(),M.accept("all")}))),L.innerHTML=t.languages[e].settings_modal.accept_all_btn;var ue=t.languages[e].settings_modal.reject_all_btn;if(ue&&(j||((j=pe("button")).id="s-rall-bn",j.className="c-bn",Ce(j,"click",(function(){M.hideSettings(),M.hide(),M.accept([])})),A.className="bns-t",E.appendChild(j)),j.innerHTML=ue),O||((O=pe("button")).id="s-sv-bn",O.className="c-bn",E.appendChild(O),Ce(O,"click",(function(){M.hideSettings(),M.hide(),M.accept()}))),O.innerHTML=t.languages[e].settings_modal.save_settings_btn,T)return A.replaceChild(T,N),void(N=T);a.appendChild(x),a.appendChild(s),A.appendChild(a),A.appendChild(N),A.appendChild(E),i.appendChild(A),o.appendChild(i),n.appendChild(o),w.appendChild(n),g.appendChild(w),g.appendChild(l)};M.updateLanguage=function(e,n){if("string"===typeof e){var o=ce(e,t.languages);return(o!==I.current_lang||!0===n)&&(I.current_lang=o,J&&(re(o),ae(C)),se(o),ue("CookieConsent [LANGUAGE]: curr_lang: '"+o+"'"),!0)}};var le=function(e){var t=r.length,n=-1;K=!1;var o=ke("","all"),i=[I.cookie_domain,"."+I.cookie_domain,""];if("www."===I.cookie_domain.slice(0,4)){var a=I.cookie_domain.substr(4);i.push(a),i.push("."+a)}for(var s=0;s<t;s++){var l=r[s];if(Object.prototype.hasOwnProperty.call(l,"toggle")){var d=de(R,l.toggle.value)>-1;if(!Z[++n]&&Object.prototype.hasOwnProperty.call(l,"cookie_table")&&(e||d)){var u=l.cookie_table,p=we(c[0])[0],f=u.length;"on_disable"===l.toggle.reload&&d&&(K=!0);for(var _=0;_<f;_++){var g=u[_],h=[],v=g[p],m=g.is_regex||!1,b=g.domain||null,k=g.path||!1;if(b&&(i=[b,"."+b,""]),m)for(var y=0;y<o.length;y++)o[y].match(v)&&h.push(o[y]);else{var C=de(o,v);C>-1&&h.push(o[C])}ue("CookieConsent [AUTOCLEAR]: search cookie: '"+v+"', found:",h),h.length>0&&(ye(h,k,i),"on_clear"===l.toggle.reload&&(K=!0))}}}}};M.autoclearCookies=le;var de=function(e,t){return e.indexOf(t)},ue=function(e,t,n){},pe=function(e){var t=document.createElement(e);return"button"===e&&t.setAttribute("type",e),t},fe=function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(e){return(e^(window.crypto||window.msCrypto).getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)}))},_e=function(e,t){return"browser"===I.auto_language?ce(ge(),e):"document"===I.auto_language?ce(document.documentElement.lang,e):"string"===typeof t?I.current_lang=ce(t,e):(ue("CookieConsent [LANG]: setting current_lang = '"+I.current_lang+"'"),I.current_lang)},ge=function(){var e=navigator.language||navigator.browserLanguage;return e.length>2&&(e=e[0]+e[1]),ue("CookieConsent [LANG]: detected_browser_lang = '"+e+"'"),e.toLowerCase()};M.allowedCategory=function(e){if(q&&"opt-in"!==I.mode)t=V;else var t=JSON.parse(ke(I.cookie_name,"one",!0)||"{}").categories||[];return de(t,e)>-1},M.run=function(t){if(document.getElementById("cc_div"))ue("CookieConsent [NOTICE]: cookie consent already attached to body!");else{if(ie(t),Q)return;D=JSON.parse(ke(I.cookie_name,"one",!0)||"{}");var c=void 0!==(i=D.consent_uuid);if((n=D.consent_date)&&(n=new Date(n)),(o=D.last_consent_update)&&(o=new Date(o)),H=void 0!==D.data?D.data:null,F&&D.revision!==I.revision&&(B=!1),J=q=!c||!B||!n||!o||!i,function(){(_=pe("div")).id="cc--main",_.style.position="fixed",_.style.zIndex="1000000",_.innerHTML='\x3c!--[if lt IE 9 ]><div id="cc_div" class="cc_div ie"></div><![endif]--\x3e\x3c!--[if (gt IE 8)|!(IE)]>\x3c!--\x3e<div id="cc_div" class="cc_div"></div>\x3c!--<![endif]--\x3e',g=_.children[0];var t=I.current_lang;J&&re(t),se(t),(e||document.body).appendChild(_)}(),function(){var e=["[href]","button","input","details",'[tabindex="0"]'];function t(t,n){var o=!1,i=!1;try{for(var a,c=t.querySelectorAll(e.join(':not([tabindex="-1"]), ')),r=c.length,s=0;s<r;)a=c[s].getAttribute("data-focus"),i||"1"!==a?"0"===a&&(o=c[s],i||"0"===c[s+1].getAttribute("data-focus")||(i=c[s+1])):i=c[s],s++}catch(l){return t.querySelectorAll(e.join(", "))}n[0]=c[0],n[1]=c[c.length-1],n[2]=o,n[3]=i}t(A,Y),J&&t(h,X)}(),function(e,t){if("object"===typeof e){var n=e.consent_modal,o=e.settings_modal;J&&n&&i(h,["box","bar","cloud"],["top","middle","bottom"],["zoom","slide"],n.layout,n.position,n.transition),!t&&o&&i(w,["bar"],["left","right"],["zoom","slide"],o.layout,o.position,o.transition)}function i(e,t,n,o,i,a,c){if(a=a&&a.split(" ")||[],de(t,i)>-1&&(Ae(e,i),("bar"!==i||"middle"!==a[0])&&de(n,a[0])>-1))for(var r=0;r<a.length;r++)Ae(e,a[r]);de(o,c)>-1&&Ae(e,c)}}(t.gui_options),ae(),I.autorun&&J&&M.show(t.delay||0),setTimeout((function(){Ae(_,"c--anim")}),30),setTimeout((function(){var e,t;e=!1,t=!1,Ce(document,"keydown",(function(n){"Tab"===(n=n||window.event).key&&(a&&(n.shiftKey?document.activeElement===a[0]&&(a[1].focus(),n.preventDefault()):document.activeElement===a[1]&&(a[0].focus(),n.preventDefault()),t||P||(t=!0,!e&&n.preventDefault(),n.shiftKey?a[3]?a[2]?a[2].focus():a[0].focus():a[1].focus():a[3]?a[3].focus():a[0].focus())),!t&&(e=!0))})),document.contains&&Ce(_,"click",(function(e){e=e||window.event,U?A.contains(e.target)?P=!0:(M.hideSettings(0),P=!1):G&&h.contains(e.target)&&(P=!0)}),!0)}),100),q)"opt-out"===I.mode&&(ue("CookieConsent [CONFIG] mode='"+I.mode+"', default enabled categories:",V),he(V)),ue("CookieConsent [NOTICE]: ask for consent!");else{var r="boolean"===typeof D.rfc_cookie;(!r||r&&D.rfc_cookie!==I.use_rfc_cookie)&&(D.rfc_cookie=I.use_rfc_cookie,be(I.cookie_name,JSON.stringify(D))),u=me(ve()),he(),"function"===typeof s&&s(D),ue("CookieConsent [NOTICE]: consent already given!",D)}}},M.showSettings=function(e){setTimeout((function(){Ae(te,"show--settings"),w.setAttribute("aria-hidden","false"),U=!0,ne&&ne.setAttribute("aria-hidden","true"),oe&&oe.setAttribute("aria-hidden","true"),setTimeout((function(){G?f=document.activeElement:p=document.activeElement,0!==Y.length&&(Y[3]?Y[3].focus():Y[0].focus(),a=Y)}),200),ue("CookieConsent [SETTINGS]: show settings_modal")}),e>0?e:0)};var he=function(e){if(I.page_scripts){var t=document.querySelectorAll("script["+I.script_selector+"]"),n=e||D.categories||[];!function e(t,o){if(o<t.length){var i=t[o],a=i.getAttribute(I.script_selector);if(de(n,a)>-1){i.type="text/javascript",i.removeAttribute(I.script_selector);var c=i.getAttribute("data-src");c&&i.removeAttribute("data-src");var r=pe("script");if(r.textContent=i.innerHTML,function(e,t){for(var n=t.attributes,o=n.length,i=0;i<o;i++){var a=n[i].nodeName;e.setAttribute(a,t[a]||t.getAttribute(a))}}(r,i),c?r.src=c:c=i.src,c&&(r.readyState?r.onreadystatechange=function(){"loaded"!==r.readyState&&"complete"!==r.readyState||(r.onreadystatechange=null,e(t,++o))}:r.onload=function(){r.onload=null,e(t,++o)}),i.parentNode.replaceChild(r,i),c)return}e(t,++o)}}(t,0)}};M.set=function(e,t){return"data"===e&&function(e,t){var n=!1;if("update"===t){var o=typeof(H=M.get("data"))===typeof e;if(o&&"object"===typeof H)for(var i in!H&&(H={}),e)H[i]!==e[i]&&(H[i]=e[i],n=!0);else!o&&H||H===e||(H=e,n=!0)}else H=e,n=!0;return n&&(D.data=H,be(I.cookie_name,JSON.stringify(D))),n}(t.value,t.mode)},M.get=function(e,t){return JSON.parse(ke(t||I.cookie_name,"one",!0)||"{}")[e]},M.getConfig=function(e){return I[e]||t[e]};var ve=function(){return W=D.categories||[],z=$.filter((function(e){return-1===de(W,e)})),{accepted:W,rejected:z}},me=function(e){var t="custom",n=ee.filter((function(e){return!0===e})).length;return e.accepted.length===$.length?t="all":e.accepted.length===n&&(t="necessary"),t};M.getUserPreferences=function(){var e=ve();return{accept_type:me(e),accepted_categories:e.accepted,rejected_categories:e.rejected}},M.loadScript=function(e,t,n){var o="function"===typeof t;if(document.querySelector('script[src="'+e+'"]'))o&&t();else{var i=pe("script");if(n&&n.length>0)for(var a=0;a<n.length;++a)n[a]&&i.setAttribute(n[a].name,n[a].value);o&&(i.onload=t),i.src=e,document.head.appendChild(i)}},M.updateScripts=function(){he()},M.show=function(e,t){!0===t&&re(I.current_lang),J&&setTimeout((function(){Ae(te,"show--consent"),h.setAttribute("aria-hidden","false"),G=!0,ne&&ne.setAttribute("aria-hidden","true"),oe&&oe.setAttribute("aria-hidden","true"),setTimeout((function(){p=document.activeElement,a=X}),200),ue("CookieConsent [MODAL]: show consent_modal")}),e>0?e:t?30:0)},M.hide=function(){J&&(xe(te,"show--consent"),h.setAttribute("aria-hidden","true"),G=!1,ne&&ne.setAttribute("aria-hidden","false"),oe&&oe.setAttribute("aria-hidden","false"),setTimeout((function(){p.focus(),a=null}),200),ue("CookieConsent [MODAL]: hide"))},M.hideSettings=function(){xe(te,"show--settings"),U=!1,w.setAttribute("aria-hidden","true"),ne&&ne.setAttribute("aria-hidden","false"),oe&&oe.setAttribute("aria-hidden","false"),setTimeout((function(){G?(f&&f.focus(),a=X):(p&&p.focus(),a=null),P=!1}),200),ue("CookieConsent [SETTINGS]: hide settings_modal")},M.accept=function(e,t){var a=e||void 0,c=t||[],r=[];if(a)if("object"===typeof a&&"number"===typeof a.length)for(var p=0;p<a.length;p++)-1!==de($,a[p])&&r.push(a[p]);else"string"===typeof a&&("all"===a?r=$.slice():-1!==de($,a)&&r.push(a));else r=function(){for(var e=document.querySelectorAll(".c-tgl")||[],t=[],n=0;n<e.length;n++)e[n].checked&&t.push(e[n].value);return t}();if(c.length>=1)for(p=0;p<c.length;p++)r=r.filter((function(e){return e!==c[p]}));for(p=0;p<$.length;p++)!0===ee[p]&&-1===de(r,$[p])&&r.push($[p]);!function(e){R=[];var t=document.querySelectorAll(".c-tgl")||[];if(t.length>0)for(var a=0;a<t.length;a++)-1!==de(e,$[a])?(t[a].checked=!0,Z[a]||(R.push($[a]),Z[a]=!0)):(t[a].checked=!1,Z[a]&&(R.push($[a]),Z[a]=!1));!q&&I.autoclear_cookies&&R.length>0&&le(),n||(n=new Date),i||(i=fe()),D={categories:e,revision:I.revision,data:H,rfc_cookie:I.use_rfc_cookie,consent_date:n.toISOString(),consent_uuid:i},(q||R.length>0)&&(B=!0,o=o?new Date:n,D.last_consent_update=o.toISOString(),u=me(ve()),be(I.cookie_name,JSON.stringify(D)),he()),q&&(I.autoclear_cookies&&le(!0),"function"===typeof d&&d(M.getUserPreferences(),D),"function"===typeof s&&s(D),q=!1,"opt-in"===I.mode)||("function"===typeof l&&R.length>0&&l(D,R),K&&window.location.reload())}(r)},M.eraseCookies=function(e,t,n){var o=[],i=n?[n,"."+n]:[I.cookie_domain,"."+I.cookie_domain];if("object"===typeof e&&e.length>0)for(var a=0;a<e.length;a++)this.validCookie(e[a])&&o.push(e[a]);else this.validCookie(e)&&o.push(e);ye(o,t,i)};var be=function(e,t){var n=I.cookie_expiration;"number"===typeof I.cookie_necessary_only_expiration&&"necessary"===u&&(n=I.cookie_necessary_only_expiration),t=I.use_rfc_cookie?encodeURIComponent(t):t;var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3);var i=e+"="+(t||"")+"; expires="+o.toUTCString()+"; Path="+I.cookie_path+";";i+=" SameSite="+I.cookie_same_site+";",window.location.hostname.indexOf(".")>-1&&(i+=" Domain="+I.cookie_domain+";"),"https:"===window.location.protocol&&(i+=" Secure;"),document.cookie=i,ue("CookieConsent [SET_COOKIE]: cookie '"+e+"'=",JSON.parse(t)),ue("CookieConsent [SET_COOKIE]: '"+e+"' expires after "+n+" day(s)")},ke=function(e,t,n){var o;if("one"===t){if((o=(o=document.cookie.match("(^|;)\\s*"+e+"\\s*=\\s*([^;]+)"))?n?o.pop():e:"")&&e===I.cookie_name){try{o=JSON.parse(o)}catch(c){try{o=JSON.parse(decodeURIComponent(o))}catch(c){o={}}}o=JSON.stringify(o)}}else if("all"===t){var i=document.cookie.split(/;\s*/);o=[];for(var a=0;a<i.length;a++)o.push(i[a].split("=")[0])}return o},ye=function(e,t,n){for(var o=t||"/",i=0;i<e.length;i++){for(var a=0;a<n.length;a++)document.cookie=e[i]+"=; path="+o+(n[a].indexOf(".")>-1?"; domain="+n[a]:"")+"; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";ue("CookieConsent [AUTOCLEAR]: deleting cookie: '"+e[i]+"' path: '"+o+"' domain:",n)}};M.validCookie=function(e){return""!==ke(e,"one",!0)};var Ce=function(e,t,n,o){e.addEventListener(t,n,!0===o&&{passive:!0})},we=function(e){if("object"===typeof e)return Object.keys(e)},Ae=function(e,t){e.classList.add(t)},xe=function(e,t){e.classList.remove(t)},Se=function(e,t){return e.classList.contains(t)};return M})}()}},function(e){var t;t=6361,e(e.s=t)}]);
//# sourceMappingURL=cookieconsent-76ba7ccf84597c35e667.js.map