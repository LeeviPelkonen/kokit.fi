<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
  $('#paavalikko li:first-child').click(function(evt) {
    evt.preventDefault();
    $('#paavalikko li:not(:first)').slideToggle(400);
  });
</script>
<script>
 var vierivaMenu = function() {
    if ($(window).scrollTop() > 400) {
        // console.log($(window).scrollTop());
        var mainWidth = $('main').width();
        var mainPos = $('main').position();
        //console.log(Number(mainPos.left)+16);
        var leveys = Number(mainWidth)/4+8;
        $('#paavalikko').attr('style', 'position:fixed;  top:0;  left: '+Number(mainPos.left+4)+'px; width: '+leveys+'px;');
        //$('#palkki').attr('style', 'height: 4rem;');
    } else {
            $('#paavalikko').attr('style', 'position:static;');
            //$('#palkki').attr('style', 'height: 4rem;');
    }
 }
  $(window).scroll(vierivaMenu);
  $(window).resize(vierivaMenu);
</script>
