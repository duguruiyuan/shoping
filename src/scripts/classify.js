import '../../src/sass/index.scss';
var flag=false;
const haederClassify=document.querySelector(".haeder-classify");
const aLi=haederClassify.getElementsByTagName("li");
const integratingRange=document.querySelector(".integrating-range");
const aDd=integratingRange.getElementsByTagName("dd");

const pureIntegral=document.querySelector(".pure-integral");
const aDd1=pureIntegral.getElementsByTagName("dd");
const oneInt=document.getElementById("oneInt");

const mask=document.querySelector(".mask");
const classifyContainer=document.querySelector(".classify-container");
const ifyLi=classifyContainer.getElementsByTagName("li");
const classifyList=document.querySelector(".classify-list");

//选择列表
for(var i=0; i<aLi.length;i++){
	aLi[i].index=i;
	aLi[i].onclick=function(){
		for(var j=0;j<aLi.length;j++){
			aLi[j].className="";
		}
		aLi[this.index].className = "on";
		if(this.index==2 && !flag){
			intShow();
		}else{
			intHide();
		}
		if(this.index==0 && !flag){
			intShow1();
		}else{
			intHide1();
		}
	}
}
//积分区间列表
for(var i=0;i<aDd.length;i++){
	aDd[i].index=i;
	aDd[i].onclick=function(){
		for(var j=0;j<aDd.length;j++){
			aDd[j].className="";
		}
		aDd[this.index].className = "active";
		intHide();
	}
}
//纯积分列表
for(var i=0;i<aDd1.length;i++){
	aDd1[i].index=i;
	aDd1[i].onclick=function(){
		for(var j=0;j<aDd1.length;j++){
			aDd1[j].className="";
		}
		aDd1[this.index].className = "active";
		oneInt.innerHTML=aDd1[this.index].firstChild.innerHTML;
		intHide1();
	}
}
//推荐列表
for(var i=0;i<ifyLi.length;i++){
	ifyLi[i].index=i;
	ifyLi[i].onclick=function(){
		for(var j=0;j<ifyLi.length;j++){
			ifyLi[j].className="";
		}
		ifyLi[this.index].className = "active";
		//这个是多余的是调数据的
		if(this.index==1){
			classifyList.innerHTML="1";
		}else if(this.index==2){
			classifyList.innerHTML="2";
		}else if(this.index==3){
			classifyList.innerHTML="3";
		}else if(this.index==4){
			classifyList.innerHTML="4";
		}
	}
}

//点击覆盖层
mask.onclick=function(){
	 intHide();
	 intHide1();
}
function intShow(){
	integratingRange.className ="integrating-range on";
	mask.style.display="block";
	flag=true;
}
function intHide(){
	integratingRange.className ="integrating-range";
	mask.style.display="none";
	flag=false;
}
function intShow1(){
	pureIntegral.className ="pure-integral on";
	mask.style.display="block";
	flag=true;
}
function intHide1(){
	pureIntegral.className ="pure-integral";
	mask.style.display="none";
	flag=false;
}