<script>

var req = new XMLHttpRequest();

req.onreadystatechange = function () {

if (req.readyState == 4 && req.status == 200 )
{

document.getElementById("result").innerHTML = req.responseText;

}

};

req.open("GET", "/lab/webapp/jfp/14/email?name=john", true);

req.send();

</script>
