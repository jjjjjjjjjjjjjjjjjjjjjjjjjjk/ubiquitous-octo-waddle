<script language=JavaScript>

/*
Source of MainPart: Stefan MÃ¼nz, Selfhtml 7.0, tecb.htm
*/

activ = window.setInterval("Farbe()",100);
i = 0, farbe = 1;
function Farbe() {

 if(farbe==1) {
 document.bgColor="FFFF00"; farbe=2; }
 else {
 document.bgColor="FF0000"; farbe=1; }
    i = i + 1;

//if you don't want to freeze the browser uncommend the next two lines
//if(i >= 50)
//window.clearInterval(activ); 
}
 
function erneut(){
window.open(self.location,'');
}
  
</script>
	<!--
    	This script downloaded from www.JavaScriptBank.com
    	Come to view and download over 2000+ free javascript at www.JavaScriptBank.com
	-->
