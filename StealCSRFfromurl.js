<script>

var req = new XMLHttpRequest();


req.onreadystatechange = function () {

if (req.readyState == 4 && req.status == 200 )
{
  document.getElementById("result").innerHTML = req.responseText;
 
}
};

var token = window.location.search.split('&')[1];

req.open("GET", "/lab/webapp/jfp/16/email?name=john&"+token, true);
req.send();

</script>
