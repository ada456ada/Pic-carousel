window.onload=function(){
	var oP=document.getElementById('p1');
	var oSpan=document.getElementById('span1');
	var oNext=document.getElementById('next');
	var oPrev=document.getElementById('prev');
	var oImg=document.getElementById('img1');
	var oTrue=document.getElementById('true');
	var oP2=document.getElementById('p2');
	var oFalse=document.getElementById('false');
	var oP3=document.getElementById('p3');
	var arr1=["西厢记","前目的地","搏击俱乐部","记忆碎片","京东"];
	var arr2=["pic/0.jpg","pic/1.jpg","pic/2.jpg","pic/3.jpg","pic/jd.jpg"];
	var i=0;
	function kk(){
		oP.innerHTML=i+1+"/"+arr1.length;
		oSpan.innerHTML=arr1[i];
		oImg.src=arr2[i];
	}
	kk();//初始化
	 	oTrue.onclick=function(){
	 		oP2.style.display="block";
	 		oP3.style.display="none";
			oNext.onclick=function(){
				i++;
				if(i==arr1.length)
					i=0;
				kk();
				}
			oPrev.onclick=function(){
				i--;
				if (i==-1)
					i=arr1.length-1;
				kk();
				}
	 	}
	 	oFalse.onclick=function(){
	 		oP3.style.display="block";
	 		oP2.style.display="none";
	 		oNext.onclick=function(){
				i++;
				if(i==arr1.length){
					alert("这已经是最后一页了");
					i--;
				}
				kk();
				}
			oPrev.onclick=function(){
				i--
				if (i==-1){
					alert("已经是第一页了，不能再往前了");
					i++;
				}
				kk();
				}
	 	}
}