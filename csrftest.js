var req = new XMLHttpRequest();
var req2 = new XMLHttpRequest();
var req3 = new XMLHttpRequest();
var req4 = new XMLHttpRequest();
var req5 = new XMLHttpRequest();

req.onreadystatechange = function()
{
if (req.readyState == 4 && req.status == 200 )
  {
 alert("Deleting Inbox");
 reponse_obj = JSON.parse(req.responseText);
 for (var i = 0; i < reponse_obj.rows.length; i++) {
    var row = reponse_obj.rows[i];
    console.log(row.id);
    req2.open("POST", "https://appsecpatientportal.eclinicalweb.com/portal_trunk/jsp/jspnew/messages.jsp?box=0&msgid="+row.id+"&nact=1", true);
    req2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req2.send();
   }
  }
 };  

req3.onreadystatechange = function()
{
if (req3.readyState == 4 && req3.status == 200 )
  {
 alert("Deleting SentBox");
 reponse_obj = JSON.parse(req3.responseText);
 for (var i = 0; i < reponse_obj.rows.length; i++) {
    var row = reponse_obj.rows[i];
    console.log(row.id);
    req4.open("POST", "https://appsecpatientportal.eclinicalweb.com/portal_trunk/jsp/jspnew/messages.jsp?box=1&msgid="+row.id+"&nact=1", true);
    req4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req4.send();
   }
  }
 }; 

req5.onreadystatechange = function()
{
if (req5.readyState == 4 && req5.status == 200 )
  {
 alert("Deleting DeleteBox");
 reponse_obj = JSON.parse(req5.responseText);
 for (var i = 0; i < reponse_obj.rows.length; i++) {
    var row = reponse_obj.rows[i];
    console.log(row.id);
    req6.open("POST", "https://appsecpatientportal.eclinicalweb.com/portal_trunk/jsp/jspnew/messages.jsp?box=2&msgid="+row.id+"&nact=1", true);
    req6.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req6.send();
   }
  }
 }; 

req.open("GET", "https://appsecpatientportal.eclinicalweb.com/portal_trunk/jsp/jspnew/messageJson.jsp?uid=9135&type=0&tab=2&rows=20&page=1");
req.send();
req3.open("GET", "https://appsecpatientportal.eclinicalweb.com/portal_trunk/jsp/jspnew/messageJson.jsp?uid=9135&type=0&tab=3&rows=20&page=1");
req3.send();
req5.open("GET", "https://appsecpatientportal.eclinicalweb.com/portal_trunk/jsp/jspnew/messageJson.jsp?uid=9135&type=0&tab=4&rows=20&page=1");
req5.send();
