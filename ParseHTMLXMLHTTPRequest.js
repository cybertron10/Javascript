<script>

var req = new XMLHttpRequest();


req.onreadystatechange = function () {

if (req.readyState == 4 && req.status == 200 )
{
  var htmlPage = req.responseXML;
  
  var address = htmlPage.getElementById("address").innerHTML;
  
  alert(address);
  
  document.getElementById("result").innerHTML = address;
 
}
};

req.open("GET", "/lab/webapp/jfp/18/address", true);
req.responseType = "document";
req.send();

</script>
