//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=200; timeIni=200; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=1;
var score=0; scoreMax=10; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="COMENZAR";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#F2DF73"; colorButton="#889B92"; colorText="#000000"; colorSele="#FF9122";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Es correcto!"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="SXNsYW1fZw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["Pregunta 1. Según lo mencionado ¿Cuales son los 3 pilares importantes en el Islam?","Pregunta 2. ¿Las reglas y las obligaciones del Islam estan basadas en?","Pregunta 3: ¿Cuál es el libro sagrado del Islam?","Pregunta 4: ¿Qué alimentos y bebidas prohibide el Islam?","Pregunta 5: ¿Cúal es la principal caracteristica del Islam?","Pregunta 6: ¿La poligamia esta permitida en el Islam?","Pregunta 7: ¿A los jefes politícos y religiosos se les llama Cálifas?","Pregunta 8: ¿El libro sagrado de los múlsumanes es la Biblia?","Pregunta 9: ¿La religión del Islam permite creer en otros dioses que no sean Alá?","Pregunta 10: ¿El coran es el libro sagrado de los mulsumanes, será que este esta compuesto por 114 capitulos?"];
var answers1=["MU5vIGhheSBtw6FzIGRpb3MgcXVlIEFsw6E=","MVNlIGRlYmUgb3JhciA1IHZlY2VzIGFsIGTDrWEsIGVuIGRpcmVjY2nDs24gYSBsYSBNZWNh","MUR1cmFudGUgZWwgbWVzIHNhZ3JhZG8gZGVsIFJhbWFkw6FuLCBsb3MgbXVzdWxtYW5lcyBkZWJlbiBhYnN0ZW5lcnNlICBkZSBhbGd1bmFzIGNvc2Fz","MENvbWVyIGNhcm5lIHRvZGFzIGxhcyBub2NoZXM=","MExvcyBtdWxzdW1hbmVzIHB1ZWRlbiBvcmFyIGEgSmVzdWNyaXN0bw=="];
var answers2=["MUItIEVuIGxvcyBwcmluY2lwaW9zIHkgZW5zZcOxYW56YXMgZGVsIENvcsOhbg==","MEEtIExvcyBkZWJlcmVzIGRlIGxvcyBtw7psc3VtYW5lcw==","MEMtIExvcyBtYW5kYW1pZW50b3MgZGUgbGEgQmlibGlh"];
var answers3=["MUVsIGNvcsOhbg==","ME51ZXZvIFRlc3RhbWVudG8=","MEFudGlndW8gVGVzdGFtZW50bw==","MFNoYXJpYQ=="];
var answers4=["MUxhIGNhcm5lIGRlIGNlcmRv","MUxhcyBiZWJpZGFzIGFsY29ob2xpY2Fz","MVRvZG9zIGFxdWVsbG9zIGFuaW1hbGVzIG5vIHNhY3JpZmljYWRvcw==","MExhIHNvZGEgY29jYSBjb2xh","MExhcyB2ZXJkdXJhcw=="];
var answers5=["MUxhIHN1bWlzacOzbiB0b3RhbCBhIEFsw6E=","MFN1IGZlamVzdG8gbmF2aWRlw7Fv","MExvcyBzYWNyaWZpY2lvcyBkZSBsb3MgYW5pbWFsZXM="];
var answers6=["MVNpLCBlcyBwZXJtaXRpZGE=","ME5vLCBubyBlcyBwZXJtaXRpZGE=","MFRhbHZleg=="];
var answers7=["MVZlcmRhZGVybw==","MEZhbHNv"];
var answers8=["MUZhbHNv","MFZlcmRhZGVybw=="];
var answers9=["MUZhbHNv","MFZlcmRhZGVybw=="];
var answers10=["MVZlcmRhZGVybw==","MEZhbHNv"];
var ans=[answers1,answers2,answers3,answers4,answers5,answers6,answers7,answers8,answers9,answers10];
var err=["¡Intenta Nuevamente!","¡Vuelve a  intentarlo nuevamente!","Oh no, ¡Intentalo otra vez!","¡Intentalo una vez más!","¡Incorrecto!","¡Prueba otra vez!","¡Intenta nuevamente!","¡Vuelve a intentarl otra vez!","¡Intenta nuevamente!","¡Incorrecto!"];
var ima=["yoyoy.jpg","principiosssss.jpg","coran_s_xii_tombuctu.jpg","comida.jpg","caracteristica.jpg","ohno.jpg","zzz.jpg","corann.jpg","religionnn.jpg","coran_s_xii_tombuctu.jpg"];
var mp4=["","","","","","","","","",""];
var ogv=["","","","","","","","","",""];
var alt=["","","","","","","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="Islam_g_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
