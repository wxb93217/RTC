//分享复活
function shareCode(uid){
	var qrcode= $('#divOne').qrcode(getShareUrl(uid));
	var canvas=qrcode.find('canvas').get(0);  
	$('#imgOne').attr('src',canvas.toDataURL('image/jpg'));

	var codeTop=parseInt($('#imgOne').css('top')),//二维码top值
		codeWidth=$('#imgOne').width(),//二维码宽
		codeHeight=$('#imgOne').height(),//二维码高
		haibaoHeight = $('#haibao').height(),//海报高
		haibaoWidth = $('#haibao').width(),//海报宽
		codeLeft=(haibaoWidth-codeWidth)/2,//二维码left值
		logoWidth = $('#qrCodeIco').width(),//二维码logo宽
		logoHieght = $('#qrCodeIco').height(),//二维码logo高
		logoTop = (codeHeight-logoHieght)/2 + codeTop,//二维码logo的top值
		logoLeft = (codeWidth-logoWidth)/2 + codeLeft;//二维码logo的left值

	function hecheng() {
	    draw(function () { document.getElementById('imgBox').innerHTML = '<img src="' + base64[0] + '">'; document.getElementById('imgBox3').innerHTML = '<img src="' + base64[0] + '">'; })
	    setTimeout(function () {
	        alert($('#imgBox').html());
        },500)
	} //图片合成调用方法
	draw();
	function draw() {
	    var timestamp = new Date().getTime();
	    var fir = $("#haibao")[0].src + '?time=timestamp';
	    var sec = $("#imgOne")[0].src;
	    var ico = $("#qrCodeIco")[0].src + '?time=timestamp';
	    var c = document.createElement('canvas'),
	    ctx = c.getContext('2d');
	    c.width=haibaoWidth;
	    c.height=haibaoHeight;
	    ctx.rect(0,0,c.width,c.height);
	    ctx.fillStyle='#fff';
	    ctx.fill();

	    var img = new Image;
	    img.crossOrigin = 'Anonymous'; //解决跨域
	    img.src = fir;
	    img.onload = function () {
	        ctx.drawImage(img, 0, 0, c.width, c.height); //海报图片的x,y,width,height
	        var img2 = new Image;
	        img2.crossOrigin = 'Anonymous'; //解决跨域
	        img2.src = sec;
	        img2.onload = function () {
	            ctx.drawImage(img2, codeLeft, codeTop, codeWidth, codeHeight); //二维码x,y,width,height
	            var img3 = new Image;
	            img3.crossOrigin = 'Anonymous'; //解决跨域
	            img3.src = ico;
	            img3.onload = function () {
	                ctx.drawImage(img3, logoLeft, logoTop, logoWidth, logoHieght); //二维码logo的x,y,width,height
	                var base64 = c.toDataURL('image/jpeg');
	                var shareImage = document.getElementById('shareImage');
	                shareImage.setAttribute('src', base64);
	            }
	        }
	    }
	}
}


//冲顶成功
function SuccessCode(uid){
	var qrcode2= $('#divTwo').qrcode(getShareUrl(uid));
	var canvas2=qrcode2.find('canvas').get(0);  
	$('#imgTwo').attr('src',canvas2.toDataURL('image/jpg'));

	var codeTop2=parseInt($('#imgTwo').css('top')),//二维码top值
		codeWidth2=$('#imgTwo').width(),//二维码宽
		codeHeight2=$('#imgTwo').height(),//二维码高
		haibaoHeight2 = $('#haibao2').height(),//海报高
		haibaoWidth2 = $('#haibao2').width(),//海报宽
		codeLeft2 = (haibaoWidth2-codeWidth2)/2,//二维码left值
		logoWidth2 = $('#qrCodeIco2').width(),//二维码logo宽
		logoHieght2 = $('#qrCodeIco2').height(),//二维码logo高
		logoTop2 = (codeHeight2-logoHieght2)/2 + codeTop2,//二维码logo的top值
		logoLeft2 = (codeWidth2-logoWidth2)/2 + codeLeft2;//二维码logo的left值

	function hecheng2(){draw2(function(){document.getElementById('imgBox2').innerHTML='<img src="'+base642[0]+'">';})}//图片合成调用方法


	var fir2=$("#haibao2")[0].src;
	var sec2=$("#imgTwo")[0].src;
	var ico2=$("#qrCodeIco2")[0].src;
	var data2=[fir2,sec2,ico2],base642=[];
	function draw2(fn){//多图合成方法
	var c=document.createElement('canvas'),
	ctx=c.getContext('2d'),
	len=data2.length;
	c.width=haibaoWidth2;
	c.height=haibaoHeight2;
	ctx.rect(0,0,c.width,c.height);
	ctx.fillStyle='#fff';
	ctx.fill();
	function drawing2(n){
	if(n<len){
	var img=new Image;
	img.crossOrigin = 'Anonymous'; //解决跨域

	img.src=data2[n];
	img.onload=function(){
	if(n==1){
	ctx.drawImage(img,codeLeft2,codeTop2,codeWidth2,codeHeight2);//二维码x,y,width,height
	}
	else if(n==2){
	ctx.drawImage(img,logoLeft2,logoTop2,logoWidth2,logoHieght2);//二维码logo的x,y,width,height
	}
	else{
	ctx.drawImage(img,0,0,c.width,c.height);//海报图片的x,y,width,height
	}

	drawing2(n+1);//递归
	}
	}else{
	//保存生成作品图片
	base642.push(c.toDataURL("image/jpg",1));
	fn();
	}
	}
	drawing2(0);
	}
    hecheng2();
}

function getShareUrl(uid) {
    //var search = getQueryString("search"); //参数
    var search = "679962";
    ////活动页链接
    var rd = "http://www.acadsoc.com.cn/lps/RTC/index.aspx?search=" + search + "&uid=" + uid; 
    return rd;
} 