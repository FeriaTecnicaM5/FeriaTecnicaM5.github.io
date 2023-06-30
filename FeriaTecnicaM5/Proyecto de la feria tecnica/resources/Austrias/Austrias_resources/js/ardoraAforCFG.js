//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=260; timeIni=260; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=3;
var score=0; scoreMax=10; scoreInc=1; scoreDec=0;
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡BIEN HECHO LO LOGRASTE!"; messageTime="SE ACABO EL TIEMPO"; messageError="¡Uy! vuelve a intentarlo"; messageErrorG="¡Uy! vuelve a intentarlo"; messageAttempts="LO SIENTO YA NO TIENES INTENTOS"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QXVzdHJpYXM="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["Q0FSTE9TIEk=","RkVMSVBFIElJ","SlVBTkEgSQ==","TVVFUlRFIERFTCBQUklOQ0lQRSBIRVJFREVSTyBDQVJMT1M=","QUxFTUFOSUEgWSBFU1BBw5FB","RkVSQlJFUk8=","R0FOVEU=","RkVSTkFORE8gRUwgQ0FUw5NMSUNP","TUFYSU1JTElBTk8gSQ==","VkFMTEFET0xJRA=="];imaW=["0_Carlos_I.PNG","0_fELIPE_ii.PNG","0_la_loca.jpg","0_5f15f1b83ef7a.jpeg","0_12953_Carlos-I-de-Espan__a-y-V-de-Alemania.jpg","0_35c07970d0abe6d87131e8d6fbbac555.jpg","0_Captura.PNG","0_fernando-el-catolico-muerte.jpg","0_maximiliano-i.jpg","0_valladolid-spain1.jpg"];queW=["Era I en España y V en Alemania","Tambien era llamado \"el prudente\"","Tambien conocido como \"la loca\" y legitima reina de España","Era uno de los problemas internos del reinado de Felipe II","Que paises reino Carlos I","En que mes nacio Carlos I en España y V en Alemania","Donde nacio Carlos I de España y V en Alemani","Abuelo materno de Carlos I","Abuelro paterno de Calos I","Lugar de nacimiento de Felipe II"];var wordsL=[8,9,7,35,17,8,5,20,13,10];var altW=["","","","","","","","","",""];
var auW=["","","","","","","","","",""];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ "; wordsG=[];var wordsGL=[]; indexG=0; actMaxWidth=550; indexWord=0; totalWord=0;
var alterW=[];var imageW=[];questionW=[];audioW=[];profG=0; dirMedia="Austrias_resources/media/"; textBNext="";
