// This file was generated by lezer-generator. You probably shouldn't edit it.
import {LRParser, LocalTokenGroup} from "@lezer/lr"
import {specializeKeyword, extendKeyword} from "./tokens"
export const parser = LRParser.deserialize({
  version: 14,
  states: ":^QYQPOOOOQO'#Dr'#DrQYQPOOO!dQPO'#D}OOQO'#Dz'#DzO!xQPO'#DUO#QQPO'#C}O#YQPO'#DqOOQO'#ER'#ERO#eQPO'#D]OOQO'#ES'#ESO$RQPO'#D^OOQO'#ET'#ETO$YQPO'#D_OOQO'#EU'#EUO$aQPO'#DaOOQO'#EV'#EVO$hQPO'#DbOOQO'#EW'#EWO$oQPO'#DcOOQO'#D`'#D`OOQO'#EX'#EXO$vQPO'#DdOOQO'#EY'#EYO%fQPO'#DeOOQO'#E['#E[O%mQPO'#DfOOQO'#E^'#E^O%tQPO'#DgOOQO'#Eb'#EbO&VQPO'#DlOOQO'#Ec'#EcO&bQPO'#DmOOQO'#Ee'#EeO&mQPO'#DnOOQO'#Eh'#EhO&uQPO'#DoOOQO'#Ei'#EiO&}QPO'#DpOOQO'#C|'#C|Q!_QPO'#DsQ'UQPOOOOQO-E7p-E7pOOQO'#Dt'#DtO(]QPO,59kOOQO'#Dv'#DvO)PQPO,59iOOQO'#DR'#DRO(kQPO,59iOOQO-E7x-E7xO)WQPO,59pO*UQPO,59iO#pQPO,59iOOQO'#D}'#D}OOQO-E7{-E7{OOQO-E8P-E8PO+TQPO'#DSO+bOSO'#EoO+jOQO'#EsOOQO'#DT'#DTO+rQPO'#EQOOQO'#DS'#DSOOQO'#EQ'#EQO,gQPO,59xOOQO-E8Q-E8QO,qQPO,59yOOQO-E8R-E8ROOQO,59y,59yO-VQPO,59{OOQO-E8S-E8SOOQO,59{,59{O-kQPO,59|OOQO-E8T-E8TOOQO,59|,59|O.PQPO,59}OOQO-E8U-E8UOOQO,59},59}O.eQPO,5:OOOQO-E8V-E8VOOQO,5:O,5:OO.yQPO,5:POOQO-E8W-E8WO/[QPO,5:QOOQO-E8Y-E8YOOQO-E8[-E8[O/mQPO'#DiOOQO'#Dh'#DhOOQO,5:R,5:ROOQO-E8`-E8`OOQO-E8a-E8aO/{QPO,5:XOOQO-E8c-E8cO0QQPO,5:YOOQO-E8f-E8fO0VQPO,5:ZO0bQPO,5:[OOQO-E8g-E8gO0lQPO,5:_OOQO-E7q-E7qOOQO-E7r-E7rOOQO'#Du'#DuO1yQPO1G/VOOQO1G/V1G/VO3QQPO'#DSOOQO-E7t-E7tO3[QPO'#DwO4PQPO1G/aOOQO'#Dw'#DwO4wQPO1G/TO5RQPO1G/aOOQO'#EP'#EPO5ZQPO1G/bOOQO'#D{'#D{O5bQPO1G/[OOOO'#Dx'#DxO5iOSO,5;ZOOQO,5;Z,5;ZOOOO'#Dy'#DyO5qOQO,5;_OOQO,5;_,5;_OOQO'#DX'#DXOOQO'#DY'#DYO%TQPO,5;dO%TQPO,5;dOOQO-E8O-E8OOOQO'#EZ'#EZO5yQPO1G/kOOQO'#E]'#E]O6RQPO1G/lO6ZQPO,5:TO6eQPO,5:TOOQO'#E`'#E`O6lQPO,5:UOOQO'#Ea'#EaO6tQPO,5:VOOQO'#Ed'#EdO6|QPO1G/sO7XQPO1G/tO5bQPO1G/uOOQO-E7s-E7sO7dQPO'#EOO7lQPO7+${OOQO-E7u-E7uOOQO-E7}-E7}O7wQPO7+$|OOQO-E7y-E7yO8RQPO'#EwOOQO'#Ew'#EwO9PQPO'#DVOOQO7+$v7+$vOOOO-E7v-E7vOOQO1G0u1G0uOOOO-E7w-E7wOOQO1G0y1G0yOOQO1G1O1G1OO9}QPO1G1OOOQO-E8X-E8XOOQO7+%V7+%VOOQO-E8Z-E8ZOOQO7+%W7+%WO:xQPO1G/oOOQO'#E_'#E_O;^QPO1G/oOOQO-E8^-E8^OOQO1G/p1G/pOOQO-E8_-E8_OOQO1G/q1G/qOOQO-E8b-E8bOOQO'#Ef'#EfO;iQPO7+%`OOQO7+%`7+%`OOQO7+%a7+%aO;tQPO,5:jOOQO,5:j,5:jOOQO-E7|-E7|O#pQPO'#D|O<SQPO,59qOOQO-E8]-E8]OOQO-E8d-E8dO=QQPO<<HzOOQO,5:h,5:hOOQO-E7z-E7zOOQO'#Eg'#EgO=VQPOAN>fOOQO'#DV'#DVOOQO-E8e-E8eOOQOG24QG24QPOQO,59q,59qO5bQPO1G/[O=bQPO,59pO=iQPO'#DUO%TQPO,5;dO%TQPO,5;dO=qQPO1G1O",
  stateData: "={~OnOS#`OS~OSkOUmOVSOXYOY^OZ`O[bO]eO^[O`gObiOdWOgoOiqOlsOmuOrRO#aPO~OQ{O_}O#b!POr!qX#^!qX#a!qX~OVSOr!SO~O_}O#b!PO~Or!VO#^!eX#a!eX~OdWO#^!PX#a!PX~OVSOr!YOt!_O#d!ZO#h![O~OXYO~P#pO^[O~P#pOY^O~P#pOZ`O~P#pO[bO~P#pO]eO#^!WX#a!WX~P#pOVSOr!_Ot!_O#d!ZO#h![O~O`gO~P%TObiO~P%TOSkOr!wOt!wO#d!ZO#h![O~OUmO#^!`X#a!`X~OgoOr!|Ot!|O~OiqOr#OO~OlsOr#QO~OmuO~P#pOSkOUmOVSOXYOY^OZ`O[bO]eO^[O`gObiOdWOgoOiqOlsOmuOrRO~OQ{OR#WOr#YOt#YO~OP#bOVSOr#ZOt#^O#d!ZO#h![O~O_}O~P(kOW#dO#^xa#axaVxarxatxa#dxa#hxa#mxa#nxa#oxa#pxacxaaxa~O_}O~P#pOQ{OVvXrvXtvX#^vX#avX#dvX#hvX#mvX#nvX#ovX#pvX~OzvXcvXavX~P*]O#e#fO#f#hO~O#i#iO#j#kO~O#m#lO#n#lO#o#mO#p#mOV!tXr!tXt!tX#^!tX#a!tX#d!tX#h!tX~O#^!Qa#a!Qa~P#pO#m#lO#n#lO#o#mO#p#mO#^!Ra#a!Ra~O#m#lO#n#lO#o#mO#p#mO#^!Ta#a!Ta~O#m#lO#n#lO#o#mO#p#mO#^!Ua#a!Ua~O#m#lO#n#lO#o#mO#p#mO#^!Va#a!Va~O#m#lO#n#lO#o#mO#p#mO#^!Wa#a!Wa~Oc#qO#m#lO#n#lO#o#mO#p#mO~Oa#sO#m#lO#n#lO#o#mO#p#mO~O_}Oe#wOf#yO#b!PO~Oh#{O~Oe#wO~OW#dO#^!ca#a!ca~O#^!da#a!da~P#pO#aPOS!gaU!gaV!gaX!gaY!gaZ!ga[!ga]!ga^!ga`!gab!gad!gag!gai!gal!gam!gar!ga#^!ga~OR#WO_si#bsiVsirsitsi#^si#asi#dsi#hsizsi#msi#nsi#osi#psicsiasi~Or!qXz!qX~P*]O#m#lO#n#lO#o#mO#p#mOV!kXr!kXt!kX#^!kX#a!kX#d!kX#h!kX~Oz$QOVvXrvXtvX#^vX#avX#dvX#hvX#mvX#nvX#ovX#pvX~O#^qi#aqi~P#pOr!VOz$QO~OP#bO~P#pOW#dO~P#pO#e#fO#f$]O~O#i#iO#j$_O~Oc#qOr$cO~Oa#sOr$eO~OT$gO_}O~P%TOT$gO~P%TOe#wOr$jO~Of#yOr$lO~Oh#{O#^!ai#a!ai~Oe#wOk$nOr$pO~Or!VOt$sO~Oz$QO#^}q#a}q~O#^!Oq#a!Oq~P#pO#m#lO#n#lO#o#mO#p#mOz#kX#^#kX#a#kXV#kXr#kXt#kX#d#kX#h#kXc#kXa#kX~Oz$uO#^yX#ayXVyXryXtyX#dyX#hyX#myX#nyX#oyX#pyXcyXayX~O#m#lO#n#lO#o#mO#p#mOV#lir#lit#li#^#li#a#li#d#li#h#lic#lia#li~O#m#lO#n#lO#o#mO#p#mO#^!]i#a!]i~OT$gO#^!]i#a!]i~Ok$nOr$yOt$yO~Or!VOz!ra#^!ra#a!ra~Oz$uO#^ya#ayaVyaryatya#dya#hya#mya#nya#oya#pyacyaaya~Oj$|O~Oj$|Or%QOt%QO~Ozxa~P)WOVSOr%TO~Oz#li~P9}Otr~",
  goto: "1U#mPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP#n#sP#xP$s$|&W&y'nP'u(W#s#s#s#s#s#s(i(i(i#s#s#s#s(n(q(q(q#s#s#s#s#s#s(t)O)V)_)e)s)|*S*Y+R+a+g+x,P,W,f,n,v-O-W-`-h-p-x.O.W.^.f.m.w.}/V/_/e/m/s/y0RPPPPP0ZPPP0ZPPP0z'OVxOQyVwOQyUUOQy[!`Zv!a#R#c$UQ!e]Q!h_Q!kaQ!ncQ!qfY#_!O!Q!T!U#`X$X#e$O$u%SQ!QRQ!UUR#v!w[!^Zv!a#R#c$UQ!c]Q!f_Q!iaQ!lcQ!ofQ!rhQ!tjY#]!O!Q!T!U#`W$W#e$O$u%SS$`#n%VQ$a#oS$f#u#vR%X%W!Y!_Z]_acfhjv!O!Q!T!U!a#R#`#c#e#n#o#u#v$O$U$u%S%V%WR!wlUwOQy!Z!_Z]_acfhjv!O!Q!T!U!a#R#`#c#e#n#o#u#v$O$U$u%S%V%WS$Z#e%SR$q$Of#n!^!c!f!i!l!o!r!t#]$a$fT%V$W%Xf#o!^!c!f!i!l!o!r!t#]$a$fT%W$W%XVdOQyR!ylR!xlQQOSzQ#TR#TxSyOQR#UyU|R!Y#ZR#V|Q#X|R$P#XQ!ORQ!TUU#[!O!T#uR#u!wW#`!O!Q!T!UR$S#`Q#g!ZR$[#gQ#j![R$^#j!STOQZ]_acfhjvy!O!Q!T!U!a#R#`#c#n#o#u#v$US!RT%U]%U#e$O$u%S%V%WQ#e!SQ$O#QU$V#e$O%SR%S%TQ$v$YR${$vUVOQyU!WV#a$rS#a!O!QR$r$QS$R#^#aR$t$RS#c!O!QR$T#cQ!aZQ#RvU#p!a#R$UR$U#cUXOQyR!XXUZOQyR!bZU]OQyR!d]U_OQyR!g_UaOQyR!jaUcOQyR!mcUfOQyR!pfUhOQyR!shQ#r!rR$b#rUjOQyR!ujQ#t!tR$d#tUlOQyR!vlS$h#u#vR$w$hQ#x!wQ#}#OT$i#x#}Q#z!wR$k#zUnOQyR!znUpOQyR!{pQ#|!|R$m#|UrOQyR!}rQ$o#}R$x$oQ$}$yR%P$}UtOQyR#PtUvOQyR#Sv!]!]Z]_acfhjlv!O!Q!T!U!a#R#`#c#e#n#o#u#v$O$U$u%S%V%WS$Y#e$OQ$z$uR%O%S",
  nodeNames: "⚠ ask at random if pressed else call with print forward turn color sleep play is add from remove to_list clear in not_in repeat times for to range define return Comment Program Command Assign Text ListAccess Number Op Expression String Call Arguments Comma Op Op AssignList Ask Clear Print Play Turtle Forward Turn Color Sleep Add Remove If Condition EqualityCheck InListCheck NotInListCheck Else Repeat For Define Return ErrorInvalid",
  maxTerm: 124,
  nodeProps: [
    ["group", 50,"turtle"]
  ],
  skippedNodes: [0,30],
  repeatNodeCount: 38,
  tokenData: "1U~R!^OY$}YZ&UZp$}pq&Zqr$}rs&`st&etw$}wx&|xz$}z{'R{|'W|}']}!O'b!O!P$}!P!Q'g!Q!R'l!R!S'l!S!T'l!T!U'l!U!V'l!V!W'l!W!X'l!X!Y'l!Y!Z'l!Z!['l![!_$}!_!`1P!`#Q$}#RBn$}BnBo']BoDf$}DfDg'lDgDh'lDhDi'lDiDj'lDjDk'lDkDl'lDlDm'lDmDn'lDnDo'lDoDp'lDpGl$}GlGm'lGmGn'lGnGo'lGoGp'lGpGq'lGqGr'lGrGs'lGsGt'lGtGu'lGuGv'lGv&FV$}&FV&FW']&FW;'S$};'S;=`&O<%l?Hb$}?Hb?Hc']?HcO$}~%S^r~OY$}Zp$}qr$}tw$}xz$}!O!P$}!Q!_$}!`#Q$}#RBn$}Bo&FV$}&FW;'S$};'S;=`&O<%l?Hb$}?HcO$}~&RP;=`<%l$}~&ZO#a~~&`O#`~~&eO#d~~&jSn~OY&eZ;'S&e;'S;=`&v<%lO&e~&yP;=`<%l&e~'RO#h~~'WO#m~~']O#o~~'bOz~~'gO#p~~'lO#n~~'s!Ot~r~OY$}Zp$}qr$}tw$}xz$}!O!P*s!Q!R'l!R!S'l!S!T'l!T!U'l!U!V'l!V!W'l!W!X'l!X!Y'l!Y!Z'l!Z!['l![!_$}!`#Q$}#RBn$}BoDf$}DfDg'lDgDh'lDhDi'lDiDj'lDjDk'lDkDl'lDlDm'lDmDn'lDnDo'lDoDp'lDpGl$}GlGm'lGmGn'lGnGo'lGoGp'lGpGq'lGqGr'lGrGs'lGsGt'lGtGu'lGuGv'lGv&FV$}&FW;'S$};'S;=`&O<%l?Hb$}?HcO$}~*x!Or~OY$}Zp$}qr$}tw$}xz$}!O!P$}!Q!R-x!R!S-x!S!T-x!T!U-x!U!V-x!V!W-x!W!X-x!X!Y-x!Y!Z-x!Z![-x![!_$}!`#Q$}#RBn$}BoDf$}DfDg-xDgDh-xDhDi-xDiDj-xDjDk-xDkDl-xDlDm-xDmDn-xDnDo-xDoDp-xDpGl$}GlGm-xGmGn-xGnGo-xGoGp-xGpGq-xGqGr-xGrGs-xGsGt-xGtGu-xGuGv-xGv&FV$}&FW;'S$};'S;=`&O<%l?Hb$}?HcO$}~.P!Ot~r~OY$}Zp$}qr$}tw$}xz$}!O!P$}!Q!R-x!R!S-x!S!T-x!T!U-x!U!V-x!V!W-x!W!X-x!X!Y-x!Y!Z-x!Z![-x![!_$}!`#Q$}#RBn$}BoDf$}DfDg-xDgDh-xDhDi-xDiDj-xDjDk-xDkDl-xDlDm-xDmDn-xDnDo-xDoDp-xDpGl$}GlGm-xGmGn-xGnGo-xGoGp-xGpGq-xGqGr-xGrGs-xGsGt-xGtGu-xGuGv-xGv&FV$}&FW;'S$};'S;=`&O<%l?Hb$}?HcO$}~1UO#b~",
  tokenizers: [2, new LocalTokenGroup("_~RQYZXwxX~^O#j~~", 14, 117), new LocalTokenGroup("_~RQYZXrsX~^O#f~~", 14, 113)],
  topRules: {"Program":[0,31]},
  dynamicPrecedences: {"67":-10},
  specialized: [{term: 34, get: (value: any, stack: any) => (specializeKeyword(value, stack) << 1), external: specializeKeyword},{term: 34, get: (value: any, stack: any) => (extendKeyword(value, stack) << 1) | 1, external: extendKeyword, extend: true}],
  tokenPrec: 1328
})
