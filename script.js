
var texts_to_hide, menu_items;

window.onload = function() {
  texts_to_hide = document.getElementsByClassName('menu_text');
  menu_items = document.getElementsByClassName('menu_item');

  show_menu_text(menu_items[0], 'home_text', false);
}

function hide_menu_text()
{
  var idx;

  for (i = 0; i < texts_to_hide.length; i++)
  {
    texts_to_hide[i].style.display = 'none';
    menu_items[i].classList.remove('menu_item_active');
  }
}

function show_menu_text(menu_item, text_item_show, hide_menu_texts = true)
{
  if (hide_menu_texts == true)
  {
    hide_menu_text();
  }

  if (menu_item != null)
  {
    menu_item.classList.add('menu_item_active');
  }

  var text_to_show = document.getElementById(text_item_show);
  text_to_show.style.display = 'block';
}

