// This file was generated by lezer-generator. You probably shouldn't edit it.
import {LRParser, LocalTokenGroup} from "@lezer/lr"
import {specializeKeyword, extendKeyword} from "./tokens"
export const parser = LRParser.deserialize({
  version: 14,
  states: "=QQYQPOOOOQO'#ER'#ERQYQPOOO!gQPO'#E{OOQO'#EY'#EYO!{QPO'#D^O#TQPO'#DTOOQO'#E`'#E`O#]QPO'#DeOOQO'#Ea'#EaO$VQPO'#DfOOQO'#Eb'#EbO$^QPO'#DgOOQO'#Ec'#EcO$eQPO'#DiOOQO'#Ed'#EdO$lQPO'#DjOOQO'#Ee'#EeO$sQPO'#DkOOQO'#Dh'#DhOOQO'#Ef'#EfO$zQPO'#DlOOQO'#Eg'#EgO%XQPO'#DmOOQO'#Ei'#EiO%`QPO'#DnOOQO'#Ek'#EkO&UQPO'#DoOOQO'#Er'#ErO&]QPO'#DzOOQO'#Es'#EsO&hQPO'#D{OOQO'#Eu'#EuO&sQPO'#D|OOQO'#Ex'#ExO&{QPO'#D}OOQO'#Ey'#EyO'TQPO'#EOOOQO'#Ez'#EzO'[QPO'#EPO'cQPO'#EQOOQO'#DS'#DSQ!bQPO'#ESQ'nQPOOOOQO-E8P-E8POOQO'#DW'#DWO(xQPO,59qOOQO'#EU'#EUO)TQPO,59oOOQO'#DZ'#DZO)bQPO,59oOOQO-E8W-E8WO)lQPO,59xO+cQPO,59oO#hQPO,59oOOQO-E8^-E8^O,bQPO'#D[OOQO'#FT'#FTO-hOSO'#FUO-pOQO'#FYOOQO'#D]'#D]O-xQPO'#E_OOQO'#D['#D[O.yQPO,5:QOOQO-E8_-E8_O/TQPO,5:ROOQO-E8`-E8`O/iQPO,5:TOOQO-E8a-E8aO/}QPO,5:UOOQO-E8b-E8bO0cQPO,5:VOOQO-E8c-E8cO0wQPO,5:WOOQO-E8d-E8dO1]QPO,5:XOOQO-E8e-E8eO1nQPO,5:YOOQO-E8g-E8gO2PQPO'#D[O2WQPO'#DrOOQO-E8i-E8iOOQO'#Dp'#DpO2{QPO,5:ZOOQO-E8p-E8pOOQO-E8q-E8qO3ZQPO,5:gOOQO-E8s-E8sO3`QPO,5:hOOQO-E8v-E8vO3eQPO,5:iO3pQPO,5:jOOQO-E8w-E8wOOQO-E8x-E8xO3zQPO,5:kOOQO'#E{'#E{OOQO-E8y-E8yO4YQPO,5:nOOQO-E8Q-E8QOOQO'#ET'#ETO5jQPO1G/]O5mQPO1G/]OOQO-E8S-E8SO5rQPO'#EVO6sQPO1G/ZO7cQPO1G/iOOQO'#E^'#E^O7pQPO1G/jOOQO'#EZ'#EZO7wQPO1G/dOOOO'#EW'#EWO8OOSO,5;pOOQO,5;p,5;pOOOO'#EX'#EXO8WOQO,5;tOOQO,5;t,5;tOOQO'#Da'#DaOOQO'#Db'#DbO#hQPO,5;xO#hQPO,5;xOOQO-E8]-E8]OOQO'#Eh'#EhO8`QPO1G/sOOQO'#Ej'#EjO8hQPO1G/tO8pQPO,5:]O+cQPO,5:^O8xQPO,5:^OOQO'#Dt'#DtO#hQPO,5:_OOQO'#Dv'#DvOOQO'#Dw'#DwO8xQPO,5:aOOQO'#Em'#EmO9PQPO,5:dOOQO'#En'#EnO9XQPO,5:eOOQO'#Ep'#EpO9aQPO'#EoOOQO'#Eq'#EqO9hQPO'#EoO9oQPO1G/uOOQO'#Et'#EtO9}QPO1G0RO:YQPO1G0SO7wQPO1G0TO:eQPO1G0VOOQO-E8R-E8ROOQO'#DY'#DYOOQO7+$w7+$wOOQO-E8T-E8TOOQO7+%T7+%TO:sQPO7+%TOOQO-E8[-E8[O:{QPO7+%UOOQO-E8X-E8XOOQO7+%O7+%OO<yQPO'#D_OOOO-E8U-E8UOOQO1G1[1G1[OOOO-E8V-E8VOOQO1G1`1G1`OOQO1G1d1G1dO=QQPO1G1dOOQO-E8f-E8fOOQO7+%_7+%_OOQO-E8h-E8hOOQO7+%`7+%`OOQO'#El'#ElO>tQPO1G/wO?VQPO1G/xO#hQPO1G/xO?qQPO1G/yO@]QPO1G/{O#hQPO1G/{OOQO-E8k-E8kOOQO1G0O1G0OOOQO-E8l-E8lOOQO1G0P1G0POOQO-E8n-E8nOOQO,5;Z,5;ZOOQO-E8o-E8oOOQO-E8m-E8mOOQO-E8r-E8rOOQO'#Ev'#EvO@wQPO7+%nOOQO7+%n7+%nOOQO7+%o7+%oOASQPO'#E]O:sQPO<<HoOOQO<<Ho<<HoOA^QPO,59yO#hQPO'#E[OOQO-E8j-E8jOCTQPO7+%dOCoQPO7+%gOOQO-E8t-E8tODZQPO<<IYOOQO,5:w,5:wOOQO-E8Z-E8ZOOQOAN>ZAN>ZOOQO-E8Y-E8YOD`QPO,5:vOOQO'#Ew'#EwOFVQPOAN>tOOQO-E8u-E8uOOQOG24`G24`POQO,59y,59yOFbQPO'#D_O7wQPO1G/dOFiQPO,59xOFpQPO'#D^O#hQPO,5;xO#hQPO,5;xOFxQPO1G1d",
  stateData: "GS~OtOS#rOS~ORjOTlOXvOYrO`XOa]Ob_OcaOddOeZOffOhhOjVOmnOopOrSOstOxRO#sPO~OW!PO#t}O#v!ROx#oX#p#oX#s#oX~OrSOx!UO~OW!PO#v!RO~OjVO#p!XX#s!XX~O[!ZO]!ZO^!ZO_!ZOrSOx!YO{!`O#y![O#}!]O~O`XO~P#hOeZO~P#hOa]O~P#hOb_O~P#hOcaO~P#hOddO#p!`X#s!`X~P#hOffO~P#hOhhO~P#hO[!ZO]!ZO^!ZO_!ZOrSOx!qO{!`O#y![O#}!]O~ORjO~P%gOTlO#p!nX#s!nX~OmnOx!xO{!xO~OopOx!zO~OYrOx!|O~OstO~P#hOXvO~P%gOx#RO#p!tX#s!tX~ORjOTlOXvOYrO`XOa]Ob_OcaOddOeZOffOhhOjVOmnOopOrSOstOxRO~OQ#VOx#XO{#XO~OP#^OW!PO#t}O~P#hOP#^O#t}O~P#hOZ#`O#p!Qa#s!Qa[!Qa]!Qa^!Qa_!Qar!Qax!Qa{!Qa#y!Qa#}!Qa$R!Qa$S!Qa$T!Qa$U!Qai!Qag!QaW!Qak!Qal!Qa#v!Qa$V!Qa$W!Qa$X!QaU!QaV!Qa~OW!PO~P#hO#t}O$R!OX$S!OX$T!OX$U!OXW!OXk!OXl!OX#v!OX$V!OX$W!OX$X!OX~O[!OX]!OX^!OX_!OXr!OXx!OX{!OX#p!OX#s!OX#y!OX#}!OXi!OXg!OX!S!OXU!OXV!OX~P+jO#z#bO#{#dO~O$O#eO$P#gO~O$R#hO$S#hO$T#iO$U#iO[#RX]#RX^#RX_#RXr#RXx#RX{#RX#p#RX#s#RX#y#RX#}#RX~O#p!Ya#s!Ya~P#hO$R#hO$S#hO$T#iO$U#iO#p!Za#s!Za~O$R#hO$S#hO$T#iO$U#iO#p!]a#s!]a~O$R#hO$S#hO$T#iO$U#iO#p!^a#s!^a~O$R#hO$S#hO$T#iO$U#iO#p!_a#s!_a~O$R#hO$S#hO$T#iO$U#iO#p!`a#s!`a~Oi#mO$R#hO$S#hO$T#iO$U#iO~Og#oO$R#hO$S#hO$T#iO$U#iO~OW!PO~P+jOW!POk#yOl#{O#v!RO$R#hO$S#hO$T#iO$U#iO$V#tO$W#vO$X#wO~OU#}OV$PO#p!ca#s!ca~On$SO~Ok#yO~OZ#`O#p!qa#s!qa~O#p!ra#s!ra~P#hOU#}OV$PO#p!sa#s!sa~O#sPOR!vaT!vaX!vaY!va`!vaa!vab!vac!vad!vae!vaf!vah!vaj!vam!vao!var!vas!vax!va#p!va~OQ#VO#u$YO~O$R#hO$S#hO$T#iO$U#iO[!yX]!yX^!yX_!yXr!yXx!yX{!yX#p!yX#s!yX#y!yX#}!yX~O#pwi#swi~P#hO[!ZO]!ZO^!ZO_!ZO#y![O#}!]O~Ox$^O{$^O#u$YO~P6}OP#^O~P#hOZ#`O~P#hO#z#bO#{$eO~O$O#eO$P$gO~Oi#mOx$kO~Og#oOx$mO~OS$nOW!PO~O#v!RO~P#hOk#yOx$vO~Ol#{Ox$xO~OU#}O~P%gOV$PO~P%gOU#}OV$PO#p!ci#s!ci~On$SO#p!oi#s!oi~Ok#yOq%OOx%QO~OU#}OV$PO#p!si#s!si~O!S%SO#u$YO~O#p!Wq#s!Wq~P#hO$R#hO$S#hO$T#iO$U#iO#p!RX#s!RX[!RX]!RX^!RX_!RXr!RXx!RX{!RX#y!RX#}!RXi!RXg!RXW!RXk!RXl!RX#v!RX$V!RX$W!RX$X!RXU!RXV!RX~O!S%WO~P;VO$R#hO$S#hO$T#iO$U#iO[$Qi]$Qi^$Qi_$Qir$Qix$Qi{$Qi#p$Qi#s$Qi#y$Qi#}$Qii$Qig$QiW$Qik$Qil$Qi#v$Qi$V$Qi$W$Qi$X$QiU$QiV$Qi~OS$nOU!eiV!ei#p!ei#s!ei~O$R#hO$S#hO$T#iO$U#iOU!fiV!fi#p!fi#s!fi~O$R#hO$S#hO$T#iO$U#iOU!giV!gi#p!gi#s!gi~O$R#hO$S#hO$T#iO$U#iOU!iiV!ii#p!ii#s!ii~Oq%OOx%]O{%]O~Ox%^O{%^O~P6}O!S%WO#p!Ra#s!Ra[!Ra]!Ra^!Ra_!Rar!Rax!Ra{!Ra#y!Ra#}!Ra$R!Ra$S!Ra$T!Ra$U!Rai!Rag!RaW!Rak!Ral!Ra#v!Ra$V!Ra$W!Ra$X!RaU!RaV!Ra~O$R#hO$S#hO$T#iO$U#iOU!fqV!fq#p!fq#s!fq~O$R#hO$S#hO$T#iO$U#iOU!iqV!iq#p!iq#s!iq~Op%cO~O$R#hO$S#hO$T#iO$U#iO!S#Oa#p#Oa#s#Oa[#Oa]#Oa^#Oa_#Oar#Oax#Oa{#Oa#y#Oa#}#Oai#Oag#OaW#Oak#Oal#Oa#v#Oa$V#Oa$W#Oa$X#OaU#OaV#Oa~Op%cOx%fO{%fO~O!S!RX~P;VO!S!Qa~P)lOrSOx%jO~O!S$Qi~P=QO{x~",
  goto: "4a$RPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP$S$XP$^%ZP%d%q&Q'r(p)mP)t*^$X$X$X$X$X$X*v*v*v$X$X$X$X*{+V+V+V+]+V+`+`+V+V$X$X$X$X$X$X$X+c+m+t+z,^,g,m,s-t.S.Y.`.g.u.}/V/_/g/o/w0P0X0_0g0m0u0{1V1]1g1p1y2R2Z2a2i2o2u2}3V3_PPPPPPP'r3gPPP3gPPP$cVzOQ{VyOQ{UUOQ{!k!`Y[^`begikuw!Q!S!V!W!a!}#[#_#a#j#k#r#s#u#x$O$Q$V$`$q$t%W%i%l%mU!OR!Y!qT#]!Q!SS$Z#W#XQ$]#]Q%U$^R%`%TQ!SRQ!WUQ#s!rQ$q#sR$t#x[!_Yu!a!}#_$`Q!c[Q!e^Q!g`Q!ibQ!keQ!mgQ!oiW!rkw$O$QY#Z!Q!S!V!W#[S$c#a$VS$h#j%lQ$i#kS$p#r#sQ$r#uQ$s#xQ%Y$qQ%Z$tQ%b%WQ%h%iR%n%m!j!`Y[^`begikuw!Q!S!V!W!a!}#[#_#a#j#k#r#s#u#x$O$Q$V$`$q$t%W%i%l%mQ$^#]R%^%SUyOQ{!k!`Y[^`begikuw!Q!S!V!W!a!}#[#_#a#j#k#r#s#u#x$O$Q$V$`$q$t%W%i%l%mS$b#a%iR%R$Vp#j!_!c!e!g!i!k!m!o!r#Z$i$p$r$s%Y%ZX%l$c%b%h%np#k!_!c!e!g!i!k!m!o!r#Z$i$p$r$s%Y%ZX%m$c%b%h%nVcOQ{Q!ukQ#QwT$z$O$QX!tkw$O$QR#u!rR#x!rQQOS|Q#TR#TzS{OQR#U{Q#W!OR$X#WQ!QRQ!VUW#Y!Q!V#q#rQ#q!qR#r!rW#[!Q!S!V!WR$[#[Q#c![R$d#cQ#f!]R$f#f!dTOQY[^`begikuw{!Q!S!V!W!a!}#[#_#j#k#r#s#u#x$O$Q$`$q$tS!TT%k]%k#a$V%W%i%l%mQ#a!UQ$V!|U$a#a$V%iR%i%jQ%V$cR%a%VQ%T$^R%_%TS#_!Q!SR$_#_Q!aYQ!}uU#l!a!}$`R$`#_UWOQ{R!XWUYOQ{R!bYU[OQ{R!d[U^OQ{R!f^U`OQ{R!h`UbOQ{R!jbUeOQ{R!leUgOQ{R!ngQ#n!mR$j#nUiOQ{R!piQ#p!oR$l#pUkOQ{R!skQ$o#qR%X$oQ#z!rQ$U!zT$u#z$UQ#|!rR$w#|Q$R!uQ$W#QT$|$R$WW$O!u#Q$R$WR$y$OW$Q!u#Q$R$WR${$QUmOQ{R!vmUoOQ{R!woQ$T!xR$}$TUqOQ{R!yqQ%P$UR%[%PQ%d%]R%e%dUsOQ{R!{sUuOQ{R#OuUwOQ{R#PwUxOQ{R#Sx!o!^Y[^`begikuw!Q!S!V!W!a!}#[#]#_#a#j#k#r#s#u#x$O$Q$V$`$q$t%S%W%i%l%m",
  nodeNames: "⚠ ask random if pressed else and or is while define with true false True False print forward turn color sleep play add from remove to_list clear in not_in repeat times for to range call return Comment Program Command Assign Text ListAccess Op Number Op Op Expression String Call Arguments Comma Op Op AssignList Ask Clear Print Play Turtle Forward Turn Color Sleep Add Remove If Condition PressedCheck EqualityCheck NotEqualCheck Op ComparisonCheck Op Op InListCheck NotInListCheck Else Repeat For Define Return While ErrorInvalid",
  maxTerm: 147,
  nodeProps: [
    ["group", 58,"turtle"]
  ],
  skippedNodes: [0,36],
  repeatNodeCount: 41,
  tokenData: "2U~R!cOY%^YZ&eZp%^pq&jqr&ors&zst'Ptw%^wx'hxz%^z{'m{|'r|}'w}!O'|!O!P%^!P!Q(R!Q!R(W!R!S(W!S!T(W!T!U(W!U!V(W!V!W(W!W!X(W!X!Y(W!Y!Z(W!Z![(W![!^%^!^!_1k!_!`1p!`!a1u!a!}%^!}#O1z#O#P%^#P#Q2P#QBn%^BnBo'wBoDf%^DfDg(WDgDh(WDhDi(WDiDj(WDjDk(WDkDl(WDlDm(WDmDn(WDnDo(WDoDp(WDpGl%^GlGm(WGmGn(WGnGo(WGoGp(WGpGq(WGqGr(WGrGs(WGsGt(WGtGu(WGuGv(WGv&FV%^&FV&FW'w&FW;'S%^;'S;=`&_<%l?Hb%^?Hb?Hc'w?HcO%^~%c^x~OY%^Zp%^tw%^xz%^!O!P%^!Q!^%^!a!}%^#O#P%^#QBn%^Bo&FV%^&FW;'S%^;'S;=`&_<%l?Hb%^?HcO%^~&bP;=`<%l%^~&jO#s~~&oO#r~~&rP!_!`&u~&zO$V~~'PO#y~~'USt~OY'PZ;'S'P;'S;=`'b<%lO'P~'eP;=`<%l'P~'mO#}~~'rO$R~~'wO$T~~'|O!S~~(RO$U~~(WO$S~~(_!O{~x~OY%^Zp%^tw%^xz%^!O!P+_!Q!R(W!R!S(W!S!T(W!T!U(W!U!V(W!V!W(W!W!X(W!X!Y(W!Y!Z(W!Z![(W![!^%^!a!}%^#O#P%^#QBn%^BoDf%^DfDg(WDgDh(WDhDi(WDiDj(WDjDk(WDkDl(WDlDm(WDmDn(WDnDo(WDoDp(WDpGl%^GlGm(WGmGn(WGnGo(WGoGp(WGpGq(WGqGr(WGrGs(WGsGt(WGtGu(WGuGv(WGv&FV%^&FW;'S%^;'S;=`&_<%l?Hb%^?HcO%^~+d!Ox~OY%^Zp%^tw%^xz%^!O!P%^!Q!R.d!R!S.d!S!T.d!T!U.d!U!V.d!V!W.d!W!X.d!X!Y.d!Y!Z.d!Z![.d![!^%^!a!}%^#O#P%^#QBn%^BoDf%^DfDg.dDgDh.dDhDi.dDiDj.dDjDk.dDkDl.dDlDm.dDmDn.dDnDo.dDoDp.dDpGl%^GlGm.dGmGn.dGnGo.dGoGp.dGpGq.dGqGr.dGrGs.dGsGt.dGtGu.dGuGv.dGv&FV%^&FW;'S%^;'S;=`&_<%l?Hb%^?HcO%^~.k!O{~x~OY%^Zp%^tw%^xz%^!O!P%^!Q!R.d!R!S.d!S!T.d!T!U.d!U!V.d!V!W.d!W!X.d!X!Y.d!Y!Z.d!Z![.d![!^%^!a!}%^#O#P%^#QBn%^BoDf%^DfDg.dDgDh.dDhDi.dDiDj.dDjDk.dDkDl.dDlDm.dDmDn.dDnDo.dDoDp.dDpGl%^GlGm.dGmGn.dGnGo.dGoGp.dGpGq.dGqGr.dGrGs.dGsGt.dGtGu.dGuGv.dGv&FV%^&FW;'S%^;'S;=`&_<%l?Hb%^?HcO%^~1pO$X~~1uO#v~~1zO$W~~2PO#t~~2UO#u~",
  tokenizers: [2, new LocalTokenGroup("_~RQYZXwxX~^O$P~~", 14, 138), new LocalTokenGroup("_~RQYZXrsX~^O#{~~", 14, 134)],
  topRules: {"Program":[0,37]},
  dynamicPrecedences: {"82":-10},
  specialized: [{term: 40, get: (value: any, stack: any) => (specializeKeyword(value, stack) << 1), external: specializeKeyword},{term: 40, get: (value: any, stack: any) => (extendKeyword(value, stack) << 1) | 1, external: extendKeyword, extend: true}],
  tokenPrec: 1749
})
