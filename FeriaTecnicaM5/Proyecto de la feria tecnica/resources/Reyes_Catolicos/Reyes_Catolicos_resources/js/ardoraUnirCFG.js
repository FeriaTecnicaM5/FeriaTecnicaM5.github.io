//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=150; timeIni=150; timeBon=0;
var successes=0; successesMax=7; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#EDD574"; colorButton="#91962F"; colorText="#000000"; colorSele="#CBB6D6";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="!!Felicidades¡¡"; messageTime="Se te acabo el tiempo."; messageError="Sos re malo."; messageErrorG="Sos re malo."; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="UmV5ZXNfQ2F0b2xpY29z"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["TG9zIFJleWVzIENhdMOzbGljb3MgZXMgZWwgdMOtdHVsbyBjb24gZWwgcXVlIHNlIGNvbm9jZSBoaXN0w7NyaWNhbWVudGUgYQ==", "TGEgUmVpbmEgSXNhYmVsIEkgZGUgQ2FzdGlsbGEgIHkgcmV5IEZlcm5hbmRvIElJIGRlIEFyYWfDs24="],["U2VzIGxlcyBjb25vY2UgcG9yIGVsIHRpdHVsbyBkZSBSZXllcyBDYXRvbGljb3Mgb3RvcmdhZG8gcG9y", "UGFwYSBBbGVqYW5kcm8gVkku"],["SXNhYmVsIGVyYSBsYSBoaWphIGRl", "SnVhbiBJSSBkZSBDYXN0aWxsYQ=="],["SnVhbiBJSSBkZSBBcmFnw7NuIGVzIGVsIHBhcMOhIGRl", "RmVybmFuZG8gSUk="],["QSBsYSBtdWVydGUgZGUgSnVhbiBJSSBkZSBDYXN0aWxsYSAsIHF1aWVuIHN1Y2VkZSBhbCB0cm9ubyBxdWUgYSBsYSB2ZXogZXMgaGVybWFubyBkZSBJc2FiZWw=", "RW5yaXF1ZSBJVg=="],["QSBxdWUgc2UgcmVmaXJlIGFsIFRyYXRhZG8gZGUgVG9yZGVzaWxsYXM=", "bG8gY29uc3RpdHV5ZW4gbGFzIGNhcGl0dWxhY2lvbmVzIGVudHJlIGxvcyBSZXllcyBDYXTDs2xpY29zIHkgZWwgUmV5IEp1YW4gSUkgZGUgUG9ydHVnYWwgcG9yIGxhcyBxdWUgc2UgZXN0YWJsZWNlIHVuYSBudWV2YSBsw61uZWEgZGUgZGVtYXJjYWNpw7NuIGVudHJlIGFtYmFzIGNvcm9uYXMsIGEgdHJhemFyIGRlIHBvbG8gYSBwb2xvLCBhIDM3MCBsZWd1YXMgYWwgb2VzdGUgZGUgbGFzIGlzbGFzIGRlIENhYm8gVmVyZGUu"],["RXMgbm9tYnJhZG8gaGVyZWRlcm8gYWwgdHJvbm8gZGUgQXJhZ8OzbiBhIGxhIG11ZXJ0ZSBkZSBzdSBoZXJtYW5vIENhcmxvcyBkZSBWaWFuYSBlbiAxNDYxIFN1YmUgYWwgdHJvbm8gZW4gMTQ3OQ==", "RmVybmFuZG8gZWwgQ2F0w7NsaWNv"]];
var c=[[70,58],[60,18],[21,19],[31,11],[92,10],[41,240],[111,20]];
var con1=["Los Reyes Católicos es el título con el que se conoce históricamente a","Ses les conoce por el titulo de Reyes Catolicos otorgado por","Isabel era la hija de","Juan II de Aragón es el papá de","A la muerte de Juan II de Castilla , quien sucede al trono que a la vez es hermano de Isabel","A que se refire al Tratado de Tordesillas","Es nombrado heredero al trono de Aragón a la muerte de su hermano Carlos de Viana en 1461 Sube al trono en 1479"];
var con2=["Papa Alejandro VI.","Juan II de Castilla","La Reina Isabel I de Castilla  y rey Fernando II de Aragón","Fernando el Católico","Enrique IV","lo constituyen las capitulaciones entre los Reyes Católicos y el Rey Juan II de Portugal por las que se establece una nueva línea de demarcación entre ambas coronas, a trazar de polo a polo, a 370 leguas al oeste de las islas de Cabo Verde.","Fernando II"];
var sel1=""; join1=[]; join2=[];
