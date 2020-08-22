var req = new XMLHttpRequest();
var req2 = new XMLHttpRequest();
var req3 = new XMLHttpRequest();
var req4 = new XMLHttpRequest();
var req5 = new XMLHttpRequest();
var req6 = new XMLHttpRequest();

req.onreadystatechange = function()
{
if (req.readyState == 4 && req.status == 200 )
  {
 console.log("Deleting Inbox");
 reponse_obj = JSON.parse(req.responseText);
 for (var i = 0; i < reponse_obj.rows.length; i++) {
    var row1 = reponse_obj.rows[i];
    console.log(row1.id);
    req2.open("POST", "https://appsecpatientportal.eclinicalweb.com/portal_trunk/jsp/jspnew/messages.jsp?box=0&msgid="+row1.id+"&nact=1&jqg_jqGridDelete_"+row1.id+"=on, true);
    req2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req2.send();
   }
  }
 };  

req.open("POST", "https://appsecpatientportal.eclinicalweb.com/portal_trunk/jsp/jspnew/messageJson.jsp?uid=9135&type=0&tab=2&_search=false&rows=20&page=1&sidx=&sord=desc");
req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
req.send();

req3.onreadystatechange = function2()
{
if (req3.readyState == 4 && req3.status == 200 )
  {
 console.log("Deleting SentBox");
 reponse_obj = JSON.parse(req3.responseText);
 for (var i = 0; i < reponse_obj.rows.length; i++) {
    var row2 = reponse_obj.rows[i];
    console.log(row2.id);
    req4.open("POST", "https://appsecpatientportal.eclinicalweb.com/portal_trunk/jsp/jspnew/messages.jsp?box=1&msgid="+row2.id+"&nact=1&jqg_jqGridDelete_"+row2.id+"=on", true);
    req4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req4.send();
   }
  }
 }; 

req3.open("POST", "https://appsecpatientportal.eclinicalweb.com/portal_trunk/jsp/jspnew/messageJson.jsp?uid=9135&type=0&tab=3&_search=false&rows=20&page=1&sidx=&sord=desc");
req3.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
req3.send();

req5.onreadystatechange = function3()
{
if (req5.readyState == 4 && req5.status == 200 )
  {
 console.log("Deleting DeleteBox");
 reponse_obj = JSON.parse(req5.responseText);
 for (var i = 0; i < reponse_obj.rows.length; i++) {
    var row3 = reponse_obj.rows[i];
    console.log(row3.id);
    req6.open("POST", "https://appsecpatientportal.eclinicalweb.com/portal_trunk/jsp/jspnew/messages.jsp?box=2&msgid="+row3.id+"&nact=1&jqg_jqGridDelete_"+row3.id+"=on", true);
    req6.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req6.send();
   }
  }
 }; 

req5.open("POST", "https://appsecpatientportal.eclinicalweb.com/portal_trunk/jsp/jspnew/messageJson.jsp?uid=9135&type=0&tab=4&_search=false&rows=20&page=1&sidx=&sord=desc");
req5.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
req5.send();
