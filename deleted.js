   var req = new XMLHttpRequest();

   req.onreadystatechange = function()
   {
     if (req.readyState == 4 && req.status == 200 )
   {
     reponse_obj = JSON.parse(req.responseText);
     for (var i = 0; i < reponse_obj.rows.length; i++) {
     var row = reponse_obj.rows[i];
     console.log(row.id);
     var req3 = new XMLHttpRequest();
     req3.open("POST", "https://appsecpatientportal.eclinicalweb.com/portal_trunk/jsp/jspnew/messages.jsp?box=2&msgid="+row.id+"&nact=1", true);
     req3.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     req3.send();
     }
      alert("All Messages Deleted");
   }
};

     req.open("GET", "https://appsecpatientportal.eclinicalweb.com/portal_trunk/jsp/jspnew/messageJson.jsp?uid=9135&type=0&tab=4&rows=50&page=1");
     req.send();
