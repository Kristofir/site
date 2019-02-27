

$(document).ready(function() {
  $('body').addClass('container-loaded');
});

/*
  Looks through important post section names, checks if they have an anchor, and then appends an anchor link
*/
$("h2").each(function() {
  if(this.id.length > 1) {
    var anchorurl = document.URL.replace(/#.*$/, "") + "#" + this.id;
    $(this).append( $("<a class='anchor' href='" + anchorurl + "'><i data-feather='link-2'></i></a>") );
    feather.replace({class: 'glyph', 'width': 20, 'height': 20, 'stroke-width': 2 });
  }
  console.log("ID gen'd for " + this.id);
});



function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(".post-content")
