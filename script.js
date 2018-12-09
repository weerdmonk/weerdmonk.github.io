
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

/*
function httpCallback(text)
{
  var obj = JSON.parse(text);
  var paragraph = document.createElement('p');
  var t = document.createTextNode('some text');
  paragraph.appendChild(t);
  document.body.appendChild(paragraph);
}

function httpGetAsync()
{
    var theUrl = 'https://api.github.com/users/weerdmonk/repos'
    var xmlHttp = new XMLHttpRequest();
    var text;
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            httpCallback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}
*/

function fetch_and_show_repos(response) {
  var meta = response.meta;
  var data = response.data;
  var number_of_repos = response.data.length;
  console.log(data);
	console.log('Number of repos: ' + number_of_repos);
  console.log('Repos are: ');
  console.log();

  var repo_list = document.createElement('ul');
  for (i = 0; i < number_of_repos; i++)
  {
    console.log(response.data[i]);

    if (response.data[i].fork == false)
    {
      var li = document.createElement('li');
      var link = document.createElement('a');
      var text = document.createTextNode(response.data[i].name);
      link.appendChild(text);
      link.setAttribute('href', response.data[i].html_url);
      link.setAttribute('target', '_blank');
      li.appendChild(link);
      repo_list.appendChild(li);
    }
  }

  document.getElementById('repos_text').appendChild(repo_list);
}

var script = document.createElement('script');
script.src = 'https://api.github.com/users/weerdmonk/repos?callback=fetch_and_show_repos';

document.getElementsByTagName('head')[0].appendChild(script);
