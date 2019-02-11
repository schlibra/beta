function dh(id){
	home.className="normal";
	home_page.className="normal_page";
	application.className="normal";
	application_page.className="normal_page";
	article.className="normal";
	article_page.className="normal_page";
	other.className="normal";
	other_page.className="normal_page";
	catchus.className="normal";
	catchus_page.className="normal_page";
	document.getElementById(id).className="active";
	document.getElementById(id+"_page").className="active_page";
}
