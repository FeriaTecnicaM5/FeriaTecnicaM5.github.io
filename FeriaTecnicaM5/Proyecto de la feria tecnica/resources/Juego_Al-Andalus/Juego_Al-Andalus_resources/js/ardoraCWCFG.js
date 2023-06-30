//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=240; timeIni=240; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=40;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=false;
var startTime; var tiAudio=false;
var colorBack="#C0C0C0"; colorButton="#80FF00"; colorText="#000000"; colorSele="#00FF80";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Vamossss, terminaste "; messageTime=""; messageError="Hmmmmm, como que falla algo no? Intenta de nuevo."; messageErrorG="Hmmmmm, como que falla algo no? Intenta de nuevo."; messageAttempts="40"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#008080";borderError="#FF0000"; borderAttempts="#008080";
var wordsGame="SnVlZ29fQWwtQW5kYWx1cw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","SQ==","Og==","Og==","Og==","Og==","Qw=="],["Og==","QQ==","TA==","QQ==","Tg==","RA==","QQ==","TA==","VQ==","Uw==","Og==","Og==","Og==","Og==","QQ=="],["Og==","RA==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","TA==","Og==","Og==","Og==","Og==","Uw=="],["Og==","Qg==","Og==","Rw==","Ug==","QQ==","Tg==","QQ==","RA==","QQ==","Og==","Og==","Og==","Og==","VA=="],["Og==","QQ==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","TQ==","Og==","Og==","Og==","Og==","SQ=="],["Og==","TA==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","TA=="],["Og==","Ug==","Og==","TQ==","Tw==","Wg==","QQ==","Ug==","QQ==","Qg==","RQ==","Uw==","Og==","Og==","TA=="],["Og==","QQ==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Sg==","Og==","QQ=="],["Og==","SA==","Og==","Og==","Og==","QQ==","Og==","Og==","Og==","Og==","Og==","Og==","VQ==","Og==","Og=="],["Og==","TQ==","Og==","Og==","Og==","Ug==","Og==","Og==","Og==","Og==","Og==","Og==","RA==","Og==","Og=="],["Qw==","QQ==","TA==","SQ==","Rg==","QQ==","Og==","TQ==","VQ==","TA==","QQ==","RA==","SQ==","RQ==","Uw=="],["Og==","Tg==","Og==","Og==","Og==","Qg==","Og==","Og==","Og==","Og==","Og==","Og==","Tw==","Og==","Og=="],["Og==","Og==","Og==","Og==","Qg==","RQ==","Ug==","RQ==","Qg==","RQ==","Ug==","RQ==","Uw==","Og==","Og=="],["Og==","Og==","Og==","Og==","Og==","Uw==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og=="],["Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og=="]];
var x1=[2,4,4,1,8,5,10,15,2,13,6];
var y1=[2,4,7,11,11,13,1,1,2,8,9];
var x2=[10,10,12,6,15,13,10,15,2,13,6];
var y2=[2,4,7,11,11,13,5,8,12,13,14];
var imaCW=["","","","","","","","","","",""];
var audioCW=["","","","","","","","","","",""];
var defCW=["Luego de la caida de los Visigodos reino el","Lugar donde personas provenientes de Al-Andalus llegaron luego de su fragmentacion","Cristianos que no quisieron haceptar el religion y pagan impuesto","Lider supremo","Cristianos que haceptaron el islam","Son militares","Religion establesida por Mahoma","Reino vesino al de aragon el cual termino con el Al-Andalus","Pimer califa de Al-Andalus","Son aquellos que no quisieron seguir el islam pero pagan impusto por ello","En esa sociedad eran los nobles"];
var altCW=["","","","","","","","","","",""];
var colNum=15;
var rowNum=15;
