// This file was generated by lezer-generator. You probably shouldn't edit it.
import {LRParser, LocalTokenGroup} from "@lezer/lr"
import {specializeKeyword, extendKeyword} from "./tokens"
export const parser = LRParser.deserialize({
  version: 14,
  states: "=WQYQPOOOOQO'#Dz'#DzQYQPOOO!dQPO'#EVOOQO'#ES'#ESO!xQPO'#DWO#QQPO'#DPO#YQPO'#DyOOQO'#EZ'#EZO#eQPO'#D_OOQO'#E['#E[O$RQPO'#D`OOQO'#E]'#E]O$YQPO'#DaOOQO'#E^'#E^O$aQPO'#DcOOQO'#E_'#E_O$hQPO'#DdOOQO'#E`'#E`O$oQPO'#DeOOQO'#Db'#DbOOQO'#Ea'#EaO$vQPO'#DfOOQO'#Eb'#EbO%fQPO'#DgOOQO'#Ed'#EdO%mQPO'#DhOOQO'#Ef'#EfO&VQPO'#DiOOQO'#Em'#EmO&^QPO'#DtOOQO'#En'#EnO&iQPO'#DuOOQO'#Ep'#EpO&tQPO'#DvOOQO'#Es'#EsO&|QPO'#DwOOQO'#Et'#EtO'UQPO'#DxOOQO'#DO'#DOQ!_QPO'#D{Q']QPOOOOQO-E7x-E7xOOQO'#D|'#D|O(dQPO,59mOOQO'#EO'#EOO)WQPO,59kOOQO'#DT'#DTO(rQPO,59kOOQO-E8Q-E8QO)_QPO,59rO*xQPO,59kO#pQPO,59kOOQO'#EV'#EVOOQO-E8T-E8TOOQO-E8X-E8XO+wQPO'#DUO,qOSO'#EzO,yOQO'#FOOOQO'#DV'#DVO-RQPO'#EYOOQO'#DU'#DUOOQO'#EY'#EYO-vQPO,59zOOQO-E8Y-E8YO.QQPO,59{OOQO-E8Z-E8ZOOQO,59{,59{O.fQPO,59}OOQO-E8[-E8[OOQO,59},59}O.zQPO,5:OOOQO-E8]-E8]OOQO,5:O,5:OO/`QPO,5:POOQO-E8^-E8^OOQO,5:P,5:PO/tQPO,5:QOOQO-E8_-E8_OOQO,5:Q,5:QO0YQPO,5:ROOQO-E8`-E8`O0kQPO,5:SOOQO-E8b-E8bO0|QPO'#DlO1qQPO'#DUOOQO-E8d-E8dOOQO'#Dj'#DjO2iQPO,5:TOOQO-E8k-E8kOOQO-E8l-E8lO2wQPO,5:aOOQO-E8n-E8nO2|QPO,5:bOOQO-E8q-E8qO3RQPO,5:cO3^QPO,5:dOOQO-E8r-E8rO3hQPO,5:gOOQO-E7y-E7yOOQO-E7z-E7zOOQO'#D}'#D}O4uQPO1G/XOOQO1G/X1G/XO6cQPO'#DUOOQO-E7|-E7|O6mQPO'#EPO7bQPO1G/cOOQO'#EP'#EPO8YQPO1G/VO8dQPO1G/cOOQO'#EX'#EXO8lQPO1G/dOOQO'#ET'#ETO8sQPO1G/^OOOO'#EQ'#EQO8zOSO,5;fOOQO,5;f,5;fOOOO'#ER'#ERO9SOQO,5;jOOQO,5;j,5;jOOQO'#DZ'#DZOOQO'#D['#D[O%TQPO,5;oO%TQPO,5;oOOQO-E8W-E8WOOQO'#Ec'#EcO9[QPO1G/mOOQO'#Ee'#EeO9dQPO1G/nO9lQPO,5:WO9sQPO,5:WOOQO'#Dn'#DnO%TQPO,5:XOOQO'#Dp'#DpOOQO'#Dq'#DqO9sQPO,5:ZOOQO'#Eh'#EhO9zQPO,5:^OOQO'#Ei'#EiO:SQPO,5:_O:[QPO,5:VOOQO'#Ek'#EkO:dQPO'#EjOOQO'#El'#ElO:kQPO'#EjO:rQPO1G/oOOQO'#Eo'#EoO;QQPO1G/{O;]QPO1G/|O8sQPO1G/}OOQO-E7{-E7{O;hQPO'#EWO;pQPO7+$}OOQO-E7}-E7}OOQO-E8V-E8VO;{QPO7+%OOOQO-E8R-E8RO<VQPO'#FSOOQO'#FS'#FSO=pQPO'#DXOOQO7+$x7+$xOOOO-E8O-E8OOOQO1G1Q1G1QOOOO-E8P-E8POOQO1G1U1G1UOOQO1G1Z1G1ZO?ZQPO1G1ZOOQO-E8a-E8aOOQO7+%X7+%XOOQO-E8c-E8cOOQO7+%Y7+%YO@qQPO1G/rO%TQPO1G/rOA]QPO1G/sOAwQPO1G/uO%TQPO1G/uOOQO-E8f-E8fOOQO1G/x1G/xOOQO-E8g-E8gOOQO1G/y1G/yOOQO'#Eg'#EgOBcQPO1G/qOOQO-E8i-E8iOOQO,5;U,5;UOOQO-E8j-E8jOOQO-E8h-E8hOOQO-E8m-E8mOOQO'#Eq'#EqOBtQPO7+%hOOQO7+%h7+%hOOQO7+%i7+%iOCPQPO,5:rOOQO,5:r,5:rOOQO-E8U-E8UO#pQPO'#EUOC_QPO,59sODxQPO7+%^OEdQPO7+%aOOQO-E8e-E8eOOQO-E8o-E8oOFOQPO<<ISOOQO,5:p,5:pOOQO-E8S-E8SOOQO'#Er'#ErOFTQPOAN>nOOQO'#DX'#DXOOQO-E8p-E8pOOQOG24YG24YPOQO,59s,59sO8sQPO1G/^OF`QPO,59rOFgQPO'#DWO%TQPO,5;oO%TQPO,5;oOFoQPO1G1Z",
  stateData: "Fy~OpOS#kOS~OSkOUmOYsO[YO]^O^`O_bO`eOa[ObgOdiOfWOioOkqOnSOouOtRO#lPO~OQ{OX}O#m!POt!yX#i!yX#l!yX~OnSOt!SO~OX}O#m!PO~Ot!VO#i!mX#l!mX~OfWO#i!RX#l!RX~OnSOt!YOv!_O#o!ZO#s![O~O[YO~P#pOa[O~P#pO]^O~P#pO^`O~P#pO_bO~P#pO`eO#i!YX#l!YX~P#pOnSOt!_Ov!_O#o!ZO#s![O~ObgO~P%TOdiO~P%TOnSOt!wOv!_O#o!ZO#s![O~OSkO~P%tOUmO#i!hX#l!hX~OioOt!}Ov!}O~OkqOt#PO~OYsOt#RO~OouO~P#pOSkOUmOYsO[YO]^O^`O_bO`eOa[ObgOdiOfWOioOkqOnSOouOtRO~OQ{OR#XOt#ZOv#ZO~OP#cOnSOt#[Ov#_O#o!ZO#s![O~OX}O~P(rOZ#eO#iza#lzanzatzavza#oza#sza#xza#yza#zza#{zaezaczaXzagzahza#mza#|za#}za$OzaVzaWza~OX}O~P#pOQ{OnxXtxXvxX#ixX#lxX#oxX#sxX#xxX#yxX#zxX#{xX~O|xXexXcxXXxXgxXhxX#mxX#|xX#}xX$OxXVxXWxX~P+PO#p#gO#q#iO~O#t#jO#u#lO~O#x#mO#y#mO#z#nO#{#nOn!|Xt!|Xv!|X#i!|X#l!|X#o!|X#s!|X~O#i!Sa#l!Sa~P#pO#x#mO#y#mO#z#nO#{#nO#i!Ta#l!Ta~O#x#mO#y#mO#z#nO#{#nO#i!Va#l!Va~O#x#mO#y#mO#z#nO#{#nO#i!Wa#l!Wa~O#x#mO#y#mO#z#nO#{#nO#i!Xa#l!Xa~O#x#mO#y#mO#z#nO#{#nO#i!Ya#l!Ya~Oe#rO#x#mO#y#mO#z#nO#{#nO~Oc#tO#x#mO#y#mO#z#nO#{#nO~OX}Og#}Oh$PO#m!PO#x#mO#y#mO#z#nO#{#nO#|#xO#}#zO$O#{O~OX}OXxXgxXhxX#mxX#xxX#yxX#zxX#{xX#|xX#}xX$OxX~OV$SOW$UO#i!]a#l!]a~Oj$XO~Og#}O~OZ#eO#i!ka#l!ka~O#i!la#l!la~P#pO#lPOS!oaU!oaY!oa[!oa]!oa^!oa_!oa`!oaa!oab!oad!oaf!oai!oak!oan!oao!oat!oa#i!oa~OR#XOXui#muinuituivui#iui#lui#oui#sui|ui#xui#yui#zui#{uieuicuiguihui#|ui#}ui$OuiVuiWui~Ot!yX|!yX~P+PO#x#mO#y#mO#z#nO#{#nOn!sXt!sXv!sX#i!sX#l!sX#o!sX#s!sX~O|$^OnxXtxXvxX#ixX#lxX#oxX#sxX#xxX#yxX#zxX#{xX~O#isi#lsi~P#pOt!VO|$^O~OP#cO~P#pOZ#eO~P#pO#p#gO#q$iO~O#t#jO#u$kO~Oe#rOt$oO~Oc#tOt$qO~OX}O~P%TO#m!PO~P%TOg#}Ot$xO~Oh$POt$zO~OT${OX}O~OV$SO~P%tOW$UO~P%tOV$SOW$UO#i!]i#l!]i~Oj$XO#i!ii#l!ii~Og#}Om%SOt%UO~Ot!VOv%XO~O|$^O#i!Pq#l!Pq~O#i!Qq#l!Qq~P#pO#x#mO#y#mO#z#nO#{#nO|#vX#i#vX#l#vXn#vXt#vXv#vX#o#vX#s#vXe#vXc#vXX#vXg#vXh#vX#m#vX#|#vX#}#vX$O#vXV#vXW#vX~O|%ZO#i{X#l{Xn{Xt{Xv{X#o{X#s{X#x{X#y{X#z{X#{{Xe{Xc{XX{Xg{Xh{X#m{X#|{X#}{X$O{XV{XW{X~O#x#mO#y#mO#z#nO#{#nOn#wit#wiv#wi#i#wi#l#wi#o#wi#s#wie#wic#wiX#wig#wih#wi#m#wi#|#wi#}#wi$O#wiV#wiW#wi~O#x#mO#y#mO#z#nO#{#nOV!`iW!`i#i!`i#l!`i~O#x#mO#y#mO#z#nO#{#nOV!aiW!ai#i!ai#l!ai~O#x#mO#y#mO#z#nO#{#nOV!ciW!ci#i!ci#l!ci~OT${OV!_iW!_i#i!_i#l!_i~Om%SOt%aOv%aO~Ot!VO|!za#i!za#l!za~O|%ZO#i{a#l{an{at{av{a#o{a#s{a#x{a#y{a#z{a#{{ae{ac{aX{ag{ah{a#m{a#|{a#}{a$O{aV{aW{a~O#x#mO#y#mO#z#nO#{#nOV!`qW!`q#i!`q#l!`q~O#x#mO#y#mO#z#nO#{#nOV!cqW!cq#i!cq#l!cq~Ol%dO~Ol%dOt%hOv%hO~O|za~P)_OnSOt%kO~O|#wi~P?ZOvt~",
  goto: "3a#xPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP#y$OP$TP%O%_&z'q(mP(t)[$O$O$O$O$O$O)r)r)r$O$O$O$O)w*O*O*O*T*O*W*W*O*O$O$O$O$O$O$O*Z*e*l*t*z+^+g+m+s,s-R-X-j-q-x.W.`.h.p.x/Q/Y/b/j/p/x0O0W0^0h0n0t0{1S1[1d1j1r1x2O2WPPPPP2`PPP2`PPP3V&zVxOQyVwOQyUUOQy[!`Zv!a#S#d$bQ!e]Q!h_Q!kaQ!ncQ!qfY#`!O!Q!T!U#aX$e#f$[%Z%jQ!QRQ!UUQ#w!vQ$s#wR$v#|[!^Zv!a#S#d$bQ!c]Q!f_Q!iaQ!lcQ!ofQ!rhQ!tjU!vl$T$VY#^!O!Q!T!U#aW$d#f$[%Z%jS$l#o%mQ$m#pS$r#v#wQ$t#yQ$u#|Q%]$sQ%^$vR%o%n!i!_Z]_acfhjlv!O!Q!T!U!a#S#a#d#f#o#p#v#w#y#|$T$V$[$b$s$v%Z%j%m%nUwOQy!i!_Z]_acfhjlv!O!Q!T!U!a#S#a#d#f#o#p#v#w#y#|$T$V$[$b$s$v%Z%j%m%nS$g#f%jR%V$[p#o!^!c!f!i!l!o!r!t!v#^$m$r$t$u%]%^T%m$d%op#p!^!c!f!i!l!o!r!t!v#^$m$r$t$u%]%^T%n$d%oVdOQyQ!zlT%O$T$VV!yl$T$VR#y!vR#|!vQQOSzQ#UR#UxSyOQR#VyU|R!Y#[R#W|Q#Y|R$]#YQ!ORQ!TUW#]!O!T#v$RQ#v!vR$R!wW#a!O!Q!T!UR$`#aQ#h!ZR$h#hQ#k![R$j#k!bTOQZ]_acfhjlvy!O!Q!T!U!a#S#a#d#o#p#v#w#y#|$T$V$b$s$vS!RT%l]%l#f$[%Z%j%m%nQ#f!SQ$[#RU$c#f$[%jR%j%kQ%[$fR%c%[UVOQyU!WV#b%WS#b!O!QR%W$^S$_#_#bR%Y$_S#d!O!QR$a#dQ!aZQ#SvU#q!a#S$bR$b#dUXOQyR!XXUZOQyR!bZU]OQyR!d]U_OQyR!g_UaOQyR!jaUcOQyR!mcUfOQyR!pfUhOQyR!shQ#s!rR$n#sUjOQyR!ujQ#u!tR$p#uUlOQyR!xlQ$|$RR%_$|Q$O!vQ$Z#PT$w$O$ZQ$Q!vR$y$QQ$W!zR%Q$WS$T!z$WR$}$TS$V!z$WR%P$VUnOQyR!{nUpOQyR!|pQ$Y!}R%R$YUrOQyR#OrQ%T$ZR%`%TQ%e%aR%g%eUtOQyR#QtUvOQyR#Tv!i!]Z]_acfhjlv!O!Q!T!U!a#S#a#d#f#o#p#v#w#y#|$T$V$[$b$s$v%Z%j%m%nS$f#f$[Q%b%ZR%f%j",
  nodeNames: "⚠ ask at random if pressed else and or is define with print forward turn color sleep play add from remove to_list clear in not_in repeat times for to range call return Comment Program Command Assign Text ListAccess Number Op Expression String Call Arguments Comma Op Op AssignList Ask Clear Print Play Turtle Forward Turn Color Sleep Add Remove If Condition PressedCheck EqualityCheck NotEqualCheck Op ComparisonCheck Op Op InListCheck NotInListCheck Else Repeat For Define Return ErrorInvalid",
  maxTerm: 138,
  nodeProps: [
    ["group", 52,"turtle"]
  ],
  skippedNodes: [0,32],
  repeatNodeCount: 41,
  tokenData: "1e~R!`OY%TYZ&XZp%Tpq&^qr&crs&nst&stw%Twx'[xz%Tz{'a{|'f|}'k}!O'p!O!P%T!P!Q'u!Q!R'z!R!S'z!S!T'z!T!U'z!U!V'z!V!W'z!W!X'z!X!Y'z!Y!Z'z!Z!['z![!^%T!^!_1U!_!`1Z!`!a1`!a#Q%T#RBn%TBnBo'kBoDf%TDfDg'zDgDh'zDhDi'zDiDj'zDjDk'zDkDl'zDlDm'zDmDn'zDnDo'zDoDp'zDpGl%TGlGm'zGmGn'zGnGo'zGoGp'zGpGq'zGqGr'zGrGs'zGsGt'zGtGu'zGuGv'zGv&FV%T&FV&FW'k&FW;'S%T;'S;=`&R<%l?Hb%T?Hb?Hc'k?HcO%T~%Y]t~OY%TZp%Ttw%Txz%T!O!P%T!Q!^%T!a#Q%T#RBn%TBo&FV%T&FW;'S%T;'S;=`&R<%l?Hb%T?HcO%T~&UP;=`<%l%T~&^O#l~~&cO#k~~&fP!_!`&i~&nO#|~~&sO#o~~&xSp~OY&sZ;'S&s;'S;=`'U<%lO&s~'XP;=`<%l&s~'aO#s~~'fO#x~~'kO#z~~'pO|~~'uO#{~~'zO#y~~(R}v~t~OY%TZp%Ttw%Txz%T!O!P+O!Q!R'z!R!S'z!S!T'z!T!U'z!U!V'z!V!W'z!W!X'z!X!Y'z!Y!Z'z!Z!['z![!^%T!a#Q%T#RBn%TBoDf%TDfDg'zDgDh'zDhDi'zDiDj'zDjDk'zDkDl'zDlDm'zDmDn'zDnDo'zDoDp'zDpGl%TGlGm'zGmGn'zGnGo'zGoGp'zGpGq'zGqGr'zGrGs'zGsGt'zGtGu'zGuGv'zGv&FV%T&FW;'S%T;'S;=`&R<%l?Hb%T?HcO%T~+T}t~OY%TZp%Ttw%Txz%T!O!P%T!Q!R.Q!R!S.Q!S!T.Q!T!U.Q!U!V.Q!V!W.Q!W!X.Q!X!Y.Q!Y!Z.Q!Z![.Q![!^%T!a#Q%T#RBn%TBoDf%TDfDg.QDgDh.QDhDi.QDiDj.QDjDk.QDkDl.QDlDm.QDmDn.QDnDo.QDoDp.QDpGl%TGlGm.QGmGn.QGnGo.QGoGp.QGpGq.QGqGr.QGrGs.QGsGt.QGtGu.QGuGv.QGv&FV%T&FW;'S%T;'S;=`&R<%l?Hb%T?HcO%T~.X}v~t~OY%TZp%Ttw%Txz%T!O!P%T!Q!R.Q!R!S.Q!S!T.Q!T!U.Q!U!V.Q!V!W.Q!W!X.Q!X!Y.Q!Y!Z.Q!Z![.Q![!^%T!a#Q%T#RBn%TBoDf%TDfDg.QDgDh.QDhDi.QDiDj.QDjDk.QDkDl.QDlDm.QDmDn.QDnDo.QDoDp.QDpGl%TGlGm.QGmGn.QGnGo.QGoGp.QGpGq.QGqGr.QGrGs.QGsGt.QGtGu.QGuGv.QGv&FV%T&FW;'S%T;'S;=`&R<%l?Hb%T?HcO%T~1ZO$O~~1`O#m~~1eO#}~",
  tokenizers: [2, new LocalTokenGroup("_~RQYZXwxX~^O#u~~", 14, 128), new LocalTokenGroup("_~RQYZXrsX~^O#q~~", 14, 124)],
  topRules: {"Program":[0,33]},
  dynamicPrecedences: {"75":-10},
  specialized: [{term: 36, get: (value: any, stack: any) => (specializeKeyword(value, stack) << 1), external: specializeKeyword},{term: 36, get: (value: any, stack: any) => (extendKeyword(value, stack) << 1) | 1, external: extendKeyword, extend: true}],
  tokenPrec: 1740
})
