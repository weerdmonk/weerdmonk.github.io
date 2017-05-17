
window.onload = function() {
  show_menu_text(null, 'home_text');
}

function hide_menu_text()
{
  var texts_to_hide = document.getElementsByClassName('menu_text');
  var idx;

  for (i = 0; i < texts_to_hide.length; i++)
  {
    texts_to_hide[i].style.display = 'none';
  }
}

function show_menu_text(menu_item, text_item_show)
{
  if (menu_item != null)
  {
    hide_menu_text();
  }

  var text_to_show = document.getElementById(text_item_show);
  text_to_show.style.display = 'block';
}

