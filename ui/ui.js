const siteURL = 'texaskissrhinestone.github.io';
const mailAddress = '0ekekddddd@protonmail.com';

function quickBio(){
  document.write('<div><p><img src="ui/images/atglasses.gif" style="pointer-events:none;float:left;padding:0px 9px 0px 0px;"> Web developer &amp; designer. Working full-time. E-mail for collaboration.</p></div><div><p>they/them. <a href="https://lgbtqia.wiki/wiki/Biromantic" target="_blank">birom</a>-<a href="https://lgbtqia.wiki/wiki/Monogamous" target="_blank">monoam</a>. illustrator &amp; okay coder.<br><normal style="color:#00000050;"><a href="https://youtu.be/ckMvj1piK58?si=Hw6t5mdkyaD7gMaK&t=24" target="_blank">donk</a>ey-caiman-badger.</normal></p></div>');
}
function badgeLink(){
  document.write('<div><center><br><a href="https://texaskissrhinestone.github.io/"><img src="https://' + siteURL +'/ui/buttons/button.gif" alt="texas kiss rhinestone: homepage" title="TEXAS KISS RHINESTONE"></a></center><textarea><a href="https://texaskissrhinestone.github.io/"><img src="https://' + siteURL +'/ui/buttons/button.gif" alt="texas kiss rhinestone: homepage" title="TEXAS KISS RHINESTONE"></a></textarea><quiet style="font-size:10px;">Authenticated for badge-represented linkage of TKR. This code allows updates across links.</quiet></div>');
}
function rssBlock(){
  document.write('<h4>Latest Site Update</h4><div class="feedBlock"><script src="https://rss.bloople.net/?url=https%3A%2F%2Ftexaskissrhinestone.github.io%2Frss%2Frss.xml&limit=1&showtitle=false&type=js"></script></div>');
}
function logMap(){
  badgeLink();
  document.write('<div><h4><a href="https://' + siteURL + '/">Landing</a></h4><h4><a href="https://' + siteURL + '/log/update/">Update Log</a> / <a href="https://' + siteURL + '/rss/rss.xml" target="_blank" download>RSS Feed</a></h4><h4><a href="https://' + siteURL + '/log/">Blogposts</a></h4><h4><a href="https://' + siteURL + '/jfashion/">Fashion Blogposts</a></h4><h4><a href="https://' + siteURL + '/luchino_shrine/">Glaciale Undertone</a></h4><h4><a href="https://' + siteURL + '/music/">私の音 My Music</a></h4><h4><a href="https://' + siteURL + '/about">About The Site</a></h4></div><img src="https://' + siteURL + '/ui/images/snail.gif" alt="">');
}

function loadAsset(){
  var assetPiece;
  function readerUI(){
	document.write('<a href="#'+ "top" +'"><img src="https://'+ siteURL +'/ui/user_int/top.png" alt="top" title="top" style="position:fixed;bottom:0;right:0;"></a>');
  }
  function imageMapHTML(){ document.write('<section id="' + assetPiece + '"><img src="https://' + siteURL + '/ui/layout_pieces/layout_' + assetPiece + '_transparent.gif" alt="" usemap="#' + assetPiece + '_links"></section>');
  }
  switch(siteArea){
	case 1:
	  assetPiece = "top";
	  document.write('<map name="top_links"><area shape="rect" alt="[Home]" coords="389,19,631,89" href="https://'+ siteURL +'" target="_parent"></map><map name="bottom_links"><area shape="rect" alt="[E-Mail Me]" title="[E-mail Me]" coords="43,61,74,88" href="mailto:' + mailAddress + '" target="_parent"><area alt="[Home]" title="[Home]" href="https://'+ siteURL +'" coords="131,49,182,95" shape="rect" target="_parent"><area alt="[Log]" title="[Log]" href="https://' + siteURL + '/log/" coords="240,57,270,85" shape="rect" target="_parent"><area alt="[TOS/International]" title="[TOS/International]" href="https://gristlepod.github.io" coords="84,62,117,88" shape="rect"  target="_blank"><area alt="[My Music]" title="[My Music]" href="https://' + siteURL + '/music/" coords="196,58,227,86" shape="rect" target="_parent"></map><div id="body">');
	  imageMapHTML();
	  document.write('<div class="inContent"><section class="lContainer">');
	break;
	;
	case 2:
	  document.write('</section><section class="rContainer">');
	break;
	case 3:
	  assetPiece = "bottom"
	  document.write('<hr><center><a href="https://' + siteURL + '">home</a> | <a href="https://' + siteURL + '/log/update/">update log</a> | <a href="https://' + siteURL + '/music/">my music</a> | <a href="https://' + siteURL + '/log/">personal log</a> | <a href="https://' + siteURL + '/about">about me</a> | <a href="https://' + siteURL + '/guestbook">guestbook</a><br><a href="https://' + siteURL + '/rss/rss.xml">subscribe to the rss</a></center></section></div><section id="' + assetPiece + '"><img src="https://' + siteURL + '/ui/layout_pieces/layout_' + assetPiece + '_transparent.gif" alt="" usemap="#' + assetPiece + '_links"></section>');
	  readerUI();
	break;
	case 4:
	  assetPiece = "top";
	  document.write('<map name="top_links"><area shape="rect" alt="[Home]" coords="389,19,631,89" href="https://'+ siteURL +'" target="_parent"></map><map name="bottom_links"><area shape="rect" alt="[E-Mail Me]" title="[E-mail Me]" coords="43,61,74,88" href="mailto:' + mailAddress + '" target="_parent"><area alt="[Home]" title="[Home]" href="https://'+ siteURL +'" coords="131,49,182,95" shape="rect" target="_parent"><area alt="[Log]" title="[Log]" href="https://' + siteURL + '/log/" coords="240,57,270,85" shape="rect" target="_parent"><area alt="[TOS/International]" title="[TOS/International]" href="https://gristlepod.github.io" coords="84,62,117,88" shape="rect"  target="_blank"><area alt="[My Music]" title="[My Music]" href="https://' + siteURL + '/music/" coords="196,58,227,86" shape="rect" target="_parent"></map><div id="treeBody">');
	  imageMapHTML();
	  document.write('<div class="inContent"><section class="lContainer"><div class="banner"></div>');
	break;
	;
	case 5:
	  document.write('</section><section class="rContainer">');
	break;
	case 6:
	  assetPiece = "bottom"
	  document.write('</section></div><section id="' + assetPiece + '"><img src="https://' + siteURL + '/ui/layout_pieces/layout_' + assetPiece + '_transparent.gif" alt="" usemap="#' + assetPiece + '_links"></section>');
	  readerUI();
	break;
	case 7:
	  assetPiece = "top";
	  document.write('<map name="top_links"><area shape="rect" alt="[Home]" coords="389,19,631,89" href="https://'+ siteURL +'" target="_parent"></map><map name="bottom_links"><area shape="rect" alt="[E-Mail Me]" title="[E-mail Me]" coords="43,61,74,88" href="mailto:' + mailAddress + '" target="_parent"><area alt="[Home]" title="[Home]" href="https://'+ siteURL +'" coords="131,49,182,95" shape="rect" target="_parent"><area alt="[Log]" title="[Log]" href="https://' + siteURL + '/log/" coords="240,57,270,85" shape="rect" target="_parent"><area alt="[TOS/International]" title="[TOS/International]" href="https://gristlepod.github.io" coords="84,62,117,88" shape="rect"  target="_blank"><area alt="[My Music]" title="[My Music]" href="https://' + siteURL + '/music/" coords="196,58,227,86" shape="rect" target="_parent"></map><div id="singleBody">');
	  imageMapHTML();
	  document.write('<div class="inContent">');
	break;
	case 8:
	  assetPiece = "bottom"
	  document.write('</div><section id="' + assetPiece + '"><img src="https://' + siteURL + '/ui/layout_pieces/layout_' + assetPiece + '_transparent.gif" alt="" usemap="#' + assetPiece + '_links"></section>');
	  readerUI();
	break;
  }
}