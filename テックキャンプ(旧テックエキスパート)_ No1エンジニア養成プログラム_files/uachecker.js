smnLogicadSfManager.isIosSafari=function(){
var u=window.navigator.userAgent.toLowerCase(),
c=function(s){return-1!=u.indexOf(s)},
d=function(s){return!c(s)},
e=function(s){
	if (!c(s)) {
		return false;
	}
	var v = u.match(/os ([0-9]+)_([0-9]+)_?([0-9]+)?/);
	if (v == null) {
		return true;
	}
	var vf = parseFloat(v[1]+"."+v[2]);
	if (vf >= 13.4) {
		return false;
	}
	return true;
};
return (e("iphone")||e("ipod")||e("ipad"))
&&d("crios")&&d("opera")&&d("opios")&&d("fxios")
&&d("google")&&d("yahoo")&&d("y!j")&&d("bing")
&&d("bot")&&d("crawl")&&d("spider")};