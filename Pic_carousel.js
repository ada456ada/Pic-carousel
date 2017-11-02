$(function(){
	let oP=$('#p1')[0],
 		oSpan=$('#span1')[0],
 		oNext=$('#next')[0],
 		oPrev=$('#prev')[0],
 		oImg=$('#img1')[0],
 		oP2=$('#p2')[0],
 		aA=$('#aA')[0],
		arr1=["西厢记","前目的地","搏击俱乐部","记忆碎片","京东"],
		arr2=["pic/0.jpg","pic/1.jpg","pic/2.jpg","pic/3.jpg","pic/jd.jpg"],
		oDiv2=$('#div2')[0],
		i=0,
		vm=new Vue({
			el:'#div2',
			data:{
				message:'循环播放'
			}
		}),
		chioce1={
			oNext(){
				if(++i==arr1.length){
					i=0;
				}
				kk();
				},
			oPrev(){
				if (--i==-1){
					i=arr1.length-1;
				}
				kk();
				}
		},
		chioce2={
			oNext(){
				if(++i==arr1.length){
					alert("这已经是最后一页了");
					i--;
				}
				kk();
				},
			oPrev(){
				if (--i==-1){
					alert("已经是第一页了，不能再往前了");
					i++;
				}	
				kk();
				}
		},
		kk=()=>{
			oP.innerHTML=i+1;
			oP.innerHTML+="/";
			oP.innerHTML+=arr1.length;
			oSpan.innerHTML=arr1[i];
			oImg.src=arr2[i];
		};
	kk();//初始化
	oDiv2.addEventListener('click',function(e){
		vm.message=(e.target.value=='循环播放')?'循环播放':'顺序播放';
	});
	aA.addEventListener('click',function(e){
		let word=(vm.message=='循环播放')?true:false,
			aoch=(e.target.id==='next')?true:false;
		if(word){
			if(aoch){
				chioce1.oNext();
			}else{
				chioce1.oPrev();
			}			
		}else{
			if(aoch){
				chioce2.oNext();
			}else{
				chioce2.oPrev();
			}
		}
		});	
	$(document).on('keyup',function(e){
		let keyCode = e.keyCode;
		if(keyCode == 37){ // 上一篇
			if(++i==arr1.length){
				i=0;
			}
			kk();
		}
		if(keyCode == 39){ // 下一篇
			if (--i==-1){
				i=arr1.length-1;
			}
			kk();
		}
	});
});
	