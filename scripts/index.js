window.onload=function(){
	var ROW=15,
		width=Math.floor((600-ROW)/ROW)+'px',
		sence=document.getElementById('sence'),
		child,el,el2;

	for(var i=0;i<ROW;i++){
		el=document.createElement('div');
		el.style.position='absolute';
		el.style.top=(600/ROW)/2+(600/ROW)*i+'px';
		el.style.width='600px';
		el.style.height='1px';
		el.style.background='white';
		sence.appendChild(el);

		el2=document.createElement('div');
		el2.style.position='absolute';
		el2.style.left=(600/ROW)/2+(600/ROW)*i+'px';
		el2.style.width='1px';
		el2.style.height='600px';
		el2.style.background='white';
		sence.appendChild(el2);
	}

for(var i=0;i<ROW;i++){
	for(var j=0;j<ROW;j++){
		child=document.createElement('div');
		child.setAttribute('class','block');
		child.setAttribute('id',i+'_'+j);
		child.style.width=width;
		child.style.height=width;
		sence.appendChild(child);
	}
}


var blocks=document.getElementsByClassName('block');
	kaiguan=true;
 	dict1={};
	dict2={};
var panduan=function(id,dic){
	var x=Number(id.split('_')[0]);
	var y=Number(id.split('_')[1]);
	var tx,ty;

	var hang=1;
	tx=x;ty=y;
	while(dic[tx+'_'+(ty+1)]){hang++;ty++;}
	tx=x;ty=y;
	while(dic[tx+'_'+(ty-1)]){hang++;ty--;}
	if(hang>=5)return true;

	var lie=1;
	tx=x;ty=y;
	while(dic[(tx+1)+'_'+ty]){lie++;tx++;}
	tx=x;ty=y;
	while(dic[(tx-1)+'_'+ty]){lie++;tx--;}
	if(lie>=5)return true;

	var yx=1;
	tx=x;ty=y;
	while(dic[(tx+1)+'_'+(ty+1)]){yx++;tx++;ty++;}
	tx=x;ty=y;
	while(dic[(tx-1)+'_'+(ty-1)]){yx++;tx--;ty--;}
	if(yx>=5)return true;

	var zx=1;
	tx=x;ty=y;
	while(dic[(tx+1)+'_'+(ty-1)]){zx++;tx++;ty--;}
	tx=x;ty=y;
	while(dic[(tx-1)+'_'+(ty+1)]){zx++;tx--;ty++;}
	if(zx>=5)return true;

	return false;
};

for(var i=0;i<blocks.length;i++){
	blocks[i].onclick=function(){
		if(this.hasAttribute('hasColor')){
			return;
		}
		var id=this.getAttribute('id');
		if(kaiguan){
			this.style.background='white';
			this.style.boxShadow='0 2px 12px black';
			kaiguan=false;
			dict1[id]=true;
			if(panduan(id,dict1)){
				CC.style.display='block';
				re.style.display='block'
			}
		}else{
			this.style.background='black';
			kaiguan=true;
			this.style.boxShadow='0 1px 10px black';
			dict2[id]=true;
			if(panduan(id,dict2)){
				DD.style.display='block';
				rre.style.display='block'
			}
		}
		this.setAttribute('hasColor','true');
	};
}

re.onclick=function(){
	location.reload('index.html');
}
rre.onclick=function(){
	location.reload('index.html');
}













};