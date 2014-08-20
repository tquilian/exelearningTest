// custom extensions for eXelearningPlus
var siteNavigation = document.getElementById ("siteNav");
if (siteNavigation != null) customMenu();
titleImages();

function customMenu()
{
  var anchors = document.getElementsByTagName ("A");
  var mspan;
  for (var i=0; i<anchors.length; i++)
  {
    css = anchors[i].getAttribute("CLASS");
    if (css != null)
    {
      if (css.indexOf ("main-node") != -1) continue;
      mspan = document.createElement("span");
      if (css.indexOf ("current-page-parent") != -1)
      {
	sign = document.createElement("img");
	sign.setAttribute ("src", "Rminus.gif");
      }
      else if (css.indexOf ("daddy") != -1)
      {
	if (css.indexOf ("active") != -1)
	{
	  sign = document.createElement("img");
	  sign.setAttribute ("src", "Rminus.gif");
	}
	else
	{
	  sign = document.createElement("img");
	  sign.setAttribute ("src", "Rplus.gif");
	}
      }
      else continue;
      mspan.appendChild(sign);
      mspan.setAttribute("STYLE", "float:left;");
      anchors[i].parentNode.insertBefore (mspan, anchors[i]);
    }
  }
}
//ktlm commit 1 END


//ktlm commit 2
function titleImages()
{
  images = document.getElementsByTagName ("img");
  for (var i=0; i<images.length; i++)
  {
    //		alert (images[i].width);
    title = images[i].getAttribute("ALT");
    if (title != null)
      if (title != "")
      {
	container = document.createElement ("div");
	images[i].parentNode.insertBefore (container, images[i]);
	container.appendChild (images[i]);
	textContainer = document.createElement ("div");
	text = document.createTextNode (title);
	textContainer.appendChild (text);
	textContainer.setAttribute("style", "width:" + images[i].width + "px");
	container.appendChild (textContainer);
      }
  }
}

//ktlm commit 2 END
