<script>

var input = document.createElement("h2");

input.innerHTML = "Website is Down!";

document.forms[0].parentNode.appendChild(input);

document.forms[0].parentNode.removeChild(document.forms[0]);
</script>
