// Garden Gnome Software - Skin
// Pano2VR pro 4.1.0/3405MS
// Filename: simplex krpano strelka no info 2019 experiment.ggsk
// Generated Сб 25. май 14:28:56 2019

function pano2vrSkin(player,base) {
	var me=this;
	var flag=false;
	var nodeMarker=new Array();
	var activeNodeMarker=new Array();
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=new Array();
	this.elementMouseOver=new Array();
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	for(i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
			domTransition=prefixes[i] + 'Transition';
			domTransform=prefixes[i] + 'Transform';
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=new Array();
		stack.push(startElement);
		while(stack.length>0) {
			e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		return 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=new Array();
		var stack=new Array();
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		this._controller=document.createElement('div');
		this._controller.ggId='controller';
		this._controller.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._controller.ggVisible=true;
		this._controller.className='ggskin ggskin_container';
		this._controller.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-142 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-65 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -142px;';
		hs+='top:  -65px;';
		hs+='width: 286px;';
		hs+='height: 50px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._controller.setAttribute('style',hs);
		this._up=document.createElement('div');
		this._up.ggId='up';
		this._up.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._up.ggVisible=true;
		this._up.className='ggskin ggskin_svg';
		hs ='position:absolute;';
		hs+='left: 25px;';
		hs+='top:  -5px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._up.setAttribute('style',hs);
		this._up__img=document.createElement('img');
		this._up__img.setAttribute('src',basePath + 'images/up.svg');
		this._up__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._up__img['ondragstart']=function() { return false; };
		this._up.appendChild(this._up__img);
		this._up.onmouseover=function () {
			me._up__img.src=basePath + 'images/up__o.svg';
		}
		this._up.onmouseout=function () {
			me._up__img.src=basePath + 'images/up.svg';
			me.elementMouseDown['up']=false;
		}
		this._up.onmousedown=function () {
			me.elementMouseDown['up']=true;
		}
		this._up.onmouseup=function () {
			me.elementMouseDown['up']=false;
		}
		this._up.ontouchend=function () {
			me.elementMouseDown['up']=false;
		}
		this._controller.appendChild(this._up);
		this._down=document.createElement('div');
		this._down.ggId='down';
		this._down.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._down.ggVisible=true;
		this._down.className='ggskin ggskin_svg';
		hs ='position:absolute;';
		hs+='left: 25px;';
		hs+='top:  25px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._down.setAttribute('style',hs);
		this._down__img=document.createElement('img');
		this._down__img.setAttribute('src',basePath + 'images/down.svg');
		this._down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._down__img['ondragstart']=function() { return false; };
		this._down.appendChild(this._down__img);
		this._down.onmouseover=function () {
			me._down__img.src=basePath + 'images/down__o.svg';
		}
		this._down.onmouseout=function () {
			me._down__img.src=basePath + 'images/down.svg';
			me.elementMouseDown['down']=false;
		}
		this._down.onmousedown=function () {
			me.elementMouseDown['down']=true;
		}
		this._down.onmouseup=function () {
			me.elementMouseDown['down']=false;
		}
		this._down.ontouchend=function () {
			me.elementMouseDown['down']=false;
		}
		this._controller.appendChild(this._down);
		this._left=document.createElement('div');
		this._left.ggId='left';
		this._left.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._left.ggVisible=true;
		this._left.className='ggskin ggskin_svg';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._left.setAttribute('style',hs);
		this._left__img=document.createElement('img');
		this._left__img.setAttribute('src',basePath + 'images/left.svg');
		this._left__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._left__img['ondragstart']=function() { return false; };
		this._left.appendChild(this._left__img);
		this._left.onmouseover=function () {
			me._left__img.src=basePath + 'images/left__o.svg';
		}
		this._left.onmouseout=function () {
			me._left__img.src=basePath + 'images/left.svg';
			me.elementMouseDown['left']=false;
		}
		this._left.onmousedown=function () {
			me.elementMouseDown['left']=true;
		}
		this._left.onmouseup=function () {
			me.elementMouseDown['left']=false;
		}
		this._left.ontouchend=function () {
			me.elementMouseDown['left']=false;
		}
		this._controller.appendChild(this._left);
		this._right=document.createElement('div');
		this._right.ggId='right';
		this._right.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._right.ggVisible=true;
		this._right.className='ggskin ggskin_svg';
		hs ='position:absolute;';
		hs+='left: 50px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._right.setAttribute('style',hs);
		this._right__img=document.createElement('img');
		this._right__img.setAttribute('src',basePath + 'images/right.svg');
		this._right__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._right__img['ondragstart']=function() { return false; };
		this._right.appendChild(this._right__img);
		this._right.onmouseover=function () {
			me._right__img.src=basePath + 'images/right__o.svg';
		}
		this._right.onmouseout=function () {
			me._right__img.src=basePath + 'images/right.svg';
			me.elementMouseDown['right']=false;
		}
		this._right.onmousedown=function () {
			me.elementMouseDown['right']=true;
		}
		this._right.onmouseup=function () {
			me.elementMouseDown['right']=false;
		}
		this._right.ontouchend=function () {
			me.elementMouseDown['right']=false;
		}
		this._controller.appendChild(this._right);
		this._zoomin=document.createElement('div');
		this._zoomin.ggId='zoomin';
		this._zoomin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomin.ggVisible=true;
		this._zoomin.className='ggskin ggskin_svg';
		hs ='position:absolute;';
		hs+='left: 90px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._zoomin.setAttribute('style',hs);
		this._zoomin__img=document.createElement('img');
		this._zoomin__img.setAttribute('src',basePath + 'images/zoomin.svg');
		this._zoomin__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._zoomin__img['ondragstart']=function() { return false; };
		this._zoomin.appendChild(this._zoomin__img);
		this._zoomin.onmouseover=function () {
			me._tt_zoomin.style[domTransition]='none';
			me._tt_zoomin.style.visibility='inherit';
			me._tt_zoomin.ggVisible=true;
			me._zoomin__img.src=basePath + 'images/zoomin__o.svg';
		}
		this._zoomin.onmouseout=function () {
			me._tt_zoomin.style[domTransition]='none';
			me._tt_zoomin.style.visibility='hidden';
			me._tt_zoomin.ggVisible=false;
			me._zoomin__img.src=basePath + 'images/zoomin.svg';
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.onmousedown=function () {
			me.elementMouseDown['zoomin']=true;
		}
		this._zoomin.onmouseup=function () {
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.ontouchend=function () {
			me.elementMouseDown['zoomin']=false;
		}
		this._tt_zoomin=document.createElement('div');
		this._tt_zoomin.ggId='tt_zoomin';
		this._tt_zoomin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zoomin.ggVisible=false;
		this._tt_zoomin.className='ggskin ggskin_text';
		hs ='position:absolute;';
		hs+='left: -55px;';
		hs+='top:  36px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_zoomin.setAttribute('style',hs);
		this._tt_zoomin.innerHTML="Zoom In";
		this._tt_zoomin_white=document.createElement('div');
		this._tt_zoomin_white.ggId='tt_zoomin_white';
		this._tt_zoomin_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zoomin_white.ggVisible=true;
		this._tt_zoomin_white.className='ggskin ggskin_text';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_zoomin_white.setAttribute('style',hs);
		this._tt_zoomin_white.innerHTML="Zoom In";
		this._tt_zoomin.appendChild(this._tt_zoomin_white);
		this._zoomin.appendChild(this._tt_zoomin);
		this._controller.appendChild(this._zoomin);
		this._zoomout=document.createElement('div');
		this._zoomout.ggId='zoomout';
		this._zoomout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomout.ggVisible=true;
		this._zoomout.className='ggskin ggskin_svg';
		hs ='position:absolute;';
		hs+='left: 120px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._zoomout.setAttribute('style',hs);
		this._zoomout__img=document.createElement('img');
		this._zoomout__img.setAttribute('src',basePath + 'images/zoomout.svg');
		this._zoomout__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._zoomout__img['ondragstart']=function() { return false; };
		this._zoomout.appendChild(this._zoomout__img);
		this._zoomout.onmouseover=function () {
			me._tt_zoomout.style[domTransition]='none';
			me._tt_zoomout.style.visibility='inherit';
			me._tt_zoomout.ggVisible=true;
			me._zoomout__img.src=basePath + 'images/zoomout__o.svg';
		}
		this._zoomout.onmouseout=function () {
			me._tt_zoomout.style[domTransition]='none';
			me._tt_zoomout.style.visibility='hidden';
			me._tt_zoomout.ggVisible=false;
			me._zoomout__img.src=basePath + 'images/zoomout.svg';
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.onmousedown=function () {
			me.elementMouseDown['zoomout']=true;
		}
		this._zoomout.onmouseup=function () {
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.ontouchend=function () {
			me.elementMouseDown['zoomout']=false;
		}
		this._tt_zoomout=document.createElement('div');
		this._tt_zoomout.ggId='tt_zoomout';
		this._tt_zoomout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zoomout.ggVisible=false;
		this._tt_zoomout.className='ggskin ggskin_text';
		hs ='position:absolute;';
		hs+='left: -55px;';
		hs+='top:  36px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_zoomout.setAttribute('style',hs);
		this._tt_zoomout.innerHTML="Zoom Out";
		this._tt_zoomout_white=document.createElement('div');
		this._tt_zoomout_white.ggId='tt_zoomout_white';
		this._tt_zoomout_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zoomout_white.ggVisible=true;
		this._tt_zoomout_white.className='ggskin ggskin_text';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_zoomout_white.setAttribute('style',hs);
		this._tt_zoomout_white.innerHTML="Zoom Out";
		this._tt_zoomout.appendChild(this._tt_zoomout_white);
		this._zoomout.appendChild(this._tt_zoomout);
		this._controller.appendChild(this._zoomout);
		this._autorotate=document.createElement('div');
		this._autorotate.ggId='autorotate';
		this._autorotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._autorotate.ggVisible=true;
		this._autorotate.className='ggskin ggskin_svg';
		hs ='position:absolute;';
		hs+='left: 160px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._autorotate.setAttribute('style',hs);
		this._autorotate__img=document.createElement('img');
		this._autorotate__img.setAttribute('src',basePath + 'images/autorotate.svg');
		this._autorotate__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._autorotate__img['ondragstart']=function() { return false; };
		this._autorotate.appendChild(this._autorotate__img);
		this._autorotate.onclick=function () {
			me.player.toggleAutorotate();
		}
		this._autorotate.onmouseover=function () {
			me._tt_autorotate.style[domTransition]='none';
			me._tt_autorotate.style.visibility='inherit';
			me._tt_autorotate.ggVisible=true;
			me._autorotate__img.src=basePath + 'images/autorotate__o.svg';
		}
		this._autorotate.onmouseout=function () {
			me._tt_autorotate.style[domTransition]='none';
			me._tt_autorotate.style.visibility='hidden';
			me._tt_autorotate.ggVisible=false;
			me._autorotate__img.src=basePath + 'images/autorotate.svg';
		}
		this._tt_autorotate=document.createElement('div');
		this._tt_autorotate.ggId='tt_autorotate';
		this._tt_autorotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_autorotate.ggVisible=false;
		this._tt_autorotate.className='ggskin ggskin_text';
		hs ='position:absolute;';
		hs+='left: -65px;';
		hs+='top:  36px;';
		hs+='width: 170px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_autorotate.setAttribute('style',hs);
		this._tt_autorotate.innerHTML="Start\/Stop Autorotation";
		this._tt_autorotate_white=document.createElement('div');
		this._tt_autorotate_white.ggId='tt_autorotate_white';
		this._tt_autorotate_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_autorotate_white.ggVisible=true;
		this._tt_autorotate_white.className='ggskin ggskin_text';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 170px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_autorotate_white.setAttribute('style',hs);
		this._tt_autorotate_white.innerHTML="Start\/Stop Autorotation";
		this._tt_autorotate.appendChild(this._tt_autorotate_white);
		this._autorotate.appendChild(this._tt_autorotate);
		this._controller.appendChild(this._autorotate);
		this._movemode=document.createElement('div');
		this._movemode.ggId='movemode';
		this._movemode.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._movemode.ggVisible=true;
		this._movemode.className='ggskin ggskin_svg';
		hs ='position:absolute;';
		hs+='left: 190px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._movemode.setAttribute('style',hs);
		this._movemode__img=document.createElement('img');
		this._movemode__img.setAttribute('src',basePath + 'images/movemode.svg');
		this._movemode__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._movemode__img['ondragstart']=function() { return false; };
		this._movemode.appendChild(this._movemode__img);
		this._movemode.onclick=function () {
			me.player.changeViewMode(2);
		}
		this._movemode.onmouseover=function () {
			me._tt_movemode.style[domTransition]='none';
			me._tt_movemode.style.visibility='inherit';
			me._tt_movemode.ggVisible=true;
			me._movemode__img.src=basePath + 'images/movemode__o.svg';
		}
		this._movemode.onmouseout=function () {
			me._tt_movemode.style[domTransition]='none';
			me._tt_movemode.style.visibility='hidden';
			me._tt_movemode.ggVisible=false;
			me._movemode__img.src=basePath + 'images/movemode.svg';
		}
		this._tt_movemode=document.createElement('div');
		this._tt_movemode.ggId='tt_movemode';
		this._tt_movemode.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_movemode.ggVisible=false;
		this._tt_movemode.className='ggskin ggskin_text';
		hs ='position:absolute;';
		hs+='left: -65px;';
		hs+='top:  36px;';
		hs+='width: 170px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_movemode.setAttribute('style',hs);
		this._tt_movemode.innerHTML="Change Control Mode";
		this._tt_movemode_white=document.createElement('div');
		this._tt_movemode_white.ggId='tt_movemode_white';
		this._tt_movemode_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_movemode_white.ggVisible=true;
		this._tt_movemode_white.className='ggskin ggskin_text';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 170px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_movemode_white.setAttribute('style',hs);
		this._tt_movemode_white.innerHTML="Change Control Mode";
		this._tt_movemode.appendChild(this._tt_movemode_white);
		this._movemode.appendChild(this._tt_movemode);
		this._controller.appendChild(this._movemode);
		this._fullscreen=document.createElement('div');
		this._fullscreen.ggId='fullscreen';
		this._fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreen.ggVisible=true;
		this._fullscreen.className='ggskin ggskin_svg';
		hs ='position:absolute;';
		hs+='left: 221px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._fullscreen.setAttribute('style',hs);
		this._fullscreen__img=document.createElement('img');
		this._fullscreen__img.setAttribute('src',basePath + 'images/fullscreen.svg');
		this._fullscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._fullscreen__img['ondragstart']=function() { return false; };
		this._fullscreen.appendChild(this._fullscreen__img);
		this._fullscreen.onclick=function () {
			me.player.toggleFullscreen();
		}
		this._fullscreen.onmouseover=function () {
			me._tt_fullscreen.style[domTransition]='none';
			me._tt_fullscreen.style.visibility='inherit';
			me._tt_fullscreen.ggVisible=true;
			me._fullscreen__img.src=basePath + 'images/fullscreen__o.svg';
		}
		this._fullscreen.onmouseout=function () {
			me._tt_fullscreen.style[domTransition]='none';
			me._tt_fullscreen.style.visibility='hidden';
			me._tt_fullscreen.ggVisible=false;
			me._fullscreen__img.src=basePath + 'images/fullscreen.svg';
		}
		this._tt_fullscreen=document.createElement('div');
		this._tt_fullscreen.ggId='tt_fullscreen';
		this._tt_fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen.ggVisible=false;
		this._tt_fullscreen.className='ggskin ggskin_text';
		hs ='position:absolute;';
		hs+='left: -55px;';
		hs+='top:  36px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen.setAttribute('style',hs);
		this._tt_fullscreen.innerHTML="Fullscreen";
		this._tt_fullscreen_white=document.createElement('div');
		this._tt_fullscreen_white.ggId='tt_fullscreen_white';
		this._tt_fullscreen_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen_white.ggVisible=true;
		this._tt_fullscreen_white.className='ggskin ggskin_text';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen_white.setAttribute('style',hs);
		this._tt_fullscreen_white.innerHTML="Fullscreen";
		this._tt_fullscreen.appendChild(this._tt_fullscreen_white);
		this._fullscreen.appendChild(this._tt_fullscreen);
		this._controller.appendChild(this._fullscreen);
		this.divSkin.appendChild(this._controller);
		this._loading=document.createElement('div');
		this._loading.ggId='loading';
		this._loading.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading.ggVisible=true;
		this._loading.className='ggskin ggskin_container';
		this._loading.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-105 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-30 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -105px;';
		hs+='top:  -30px;';
		hs+='width: 210px;';
		hs+='height: 60px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._loading.setAttribute('style',hs);
		this._loading.onclick=function () {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this._loadingbg=document.createElement('div');
		this._loadingbg.ggId='loadingbg';
		this._loadingbg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbg.ggVisible=true;
		this._loadingbg.className='ggskin ggskin_rectangle';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 210px;';
		hs+='height: 60px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='background: #000000;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		this._loadingbg.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbg);
		this._loadingbrd=document.createElement('div');
		this._loadingbrd.ggId='loadingbrd';
		this._loadingbrd.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbrd.ggVisible=true;
		this._loadingbrd.className='ggskin ggskin_rectangle';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 208px;';
		hs+='height: 58px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		this._loadingbrd.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbrd);
		this._loadingtext=document.createElement('div');
		this._loadingtext.ggId='loadingtext';
		this._loadingtext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingtext.ggVisible=true;
		this._loadingtext.className='ggskin ggskin_text';
		hs ='position:absolute;';
		hs+='left: 16px;';
		hs+='top:  12px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._loadingtext.setAttribute('style',hs);
		this._loadingtext.ggUpdateText=function() {
			var hs="Loading... "+(me.player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.innerHTML=hs;
			}
		}
		this._loadingtext.ggUpdateText();
		this._loading.appendChild(this._loadingtext);
		this._loadingbar=document.createElement('div');
		this._loadingbar.ggId='loadingbar';
		this._loadingbar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbar.ggVisible=true;
		this._loadingbar.className='ggskin ggskin_rectangle';
		hs ='position:absolute;';
		hs+='left: 15px;';
		hs+='top:  35px;';
		hs+='width: 181px;';
		hs+='height: 12px;';
		hs+=cssPrefix + 'transform-origin: 0% 50%;';
		hs+='visibility: inherit;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #808080;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		this._loadingbar.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbar);
		this.divSkin.appendChild(this._loading);
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this.divSkin.ggReLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='inherit';
			me._loading.ggVisible=true;
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		var newMarker=new Array();
		var i,j;
		var tags=me.player.userdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if (nodeMarker[i].ggMarkerNodeId==id) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		if (me.elementMouseDown['up']) {
			me.player.changeTilt(1,true);
		}
		if (me.elementMouseDown['down']) {
			me.player.changeTilt(-1,true);
		}
		if (me.elementMouseDown['left']) {
			me.player.changePan(1,true);
		}
		if (me.elementMouseDown['right']) {
			me.player.changePan(-1,true);
		}
		if (me.elementMouseDown['zoomin']) {
			me.player.changeFovLog(-1,true);
		}
		if (me.elementMouseDown['zoomout']) {
			me.player.changeFovLog(1,true);
		}
		this._loadingtext.ggUpdateText();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		this.elementMouseDown=new Array();
		this.elementMouseOver=new Array();
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position:absolute; left:0px;top:0px;visibility: inherit;');
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		if (hotspot.skinid=='hs2') {
			this.__div=document.createElement('div');
			this.__div.ggId='hs2';
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			hs ='position:absolute;';
			hs+='left: 340px;';
			hs+='top:  18px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.__div.style[domTransition]='none';
				me.skin.__div.style.visibility='inherit';
				me.skin.__div.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
		} else
		if (hotspot.skinid=='hotspot') {
			this.__div=document.createElement('div');
			this.__div.ggId='hotspot';
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			hs ='position:absolute;';
			hs+='left: 66px;';
			hs+='top:  47px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._hstext0.style[domTransition]='none';
				me._hstext0.style.visibility='inherit';
				me._hstext0.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._hstext0.style[domTransition]='none';
				me._hstext0.style.visibility='hidden';
				me._hstext0.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__405=document.createElement('div');
			this.__405.ggId='\u041a\u043d\u043e\u043f\u043a\u0430 40';
			this.__405.ggParameter={ rx:0,ry:0,a:0,sx:0.4,sy:0.5 };
			this.__405.ggVisible=true;
			this.__405.className='ggskin ggskin_button';
			hs ='position:absolute;';
			hs+='left: -64px;';
			hs+='top:  -26px;';
			hs+='width: 128px;';
			hs+='height: 112px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this.__405.ggParameter) + ';';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this.__405.setAttribute('style',hs);
			this.__405__img=document.createElement('img');
			this.__405__img.setAttribute('src',basePath + 'images/_405.png');
			this.__405__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this.__405__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this.__405__img);
			this.__405.appendChild(this.__405__img);
			this.__div.appendChild(this.__405);
			this._hstext0=document.createElement('div');
			this._hstext0.ggId='hstext';
			this._hstext0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext0.ggVisible=false;
			this._hstext0.className='ggskin ggskin_text';
			this._hstext0.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.style.left=(-52 + (101-this.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -52px;';
			hs+='top:  74px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.705882);';
			hs+='border: 1px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._hstext0.setAttribute('style',hs);
			this._hstext0.innerHTML=me.hotspot.title;
			this.__div.appendChild(this._hstext0);
		} else
		if (hotspot.skinid=='hotspot1') {
			this.__div=document.createElement('div');
			this.__div.ggId='hotspot1';
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			hs ='position:absolute;';
			hs+='left: 443px;';
			hs+='top:  42px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._hstext.style[domTransition]='none';
				me._hstext.style.visibility='inherit';
				me._hstext.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._hstext.style[domTransition]='none';
				me._hstext.style.visibility='hidden';
				me._hstext.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__404=document.createElement('div');
			this.__404.ggId='\u041a\u043d\u043e\u043f\u043a\u0430 40';
			this.__404.ggParameter={ rx:0,ry:0,a:-60,sx:0.4,sy:0.5 };
			this.__404.ggVisible=true;
			this.__404.className='ggskin ggskin_button';
			hs ='position:absolute;';
			hs+='left: -64px;';
			hs+='top:  -25px;';
			hs+='width: 128px;';
			hs+='height: 112px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this.__404.ggParameter) + ';';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this.__404.setAttribute('style',hs);
			this.__404__img=document.createElement('img');
			this.__404__img.setAttribute('src',basePath + 'images/_404.png');
			this.__404__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this.__404__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this.__404__img);
			this.__404.appendChild(this.__404__img);
			this.__div.appendChild(this.__404);
			this._hstext=document.createElement('div');
			this._hstext.ggId='hstext';
			this._hstext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext.ggVisible=false;
			this._hstext.className='ggskin ggskin_text';
			this._hstext.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.style.left=(-52 + (101-this.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -52px;';
			hs+='top:  74px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.705882);';
			hs+='border: 1px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._hstext.setAttribute('style',hs);
			this._hstext.innerHTML=me.hotspot.title;
			this.__div.appendChild(this._hstext);
		} else
		if (hotspot.skinid=='hs_no_title') {
			this.__div=document.createElement('div');
			this.__div.ggId='hs_no_title';
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			hs ='position:absolute;';
			hs+='left: 200px;';
			hs+='top:  47px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin._hstext0.style[domTransition]='none';
				me.skin._hstext0.style.visibility='inherit';
				me.skin._hstext0.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin._hstext0.style[domTransition]='none';
				me.skin._hstext0.style.visibility='hidden';
				me.skin._hstext0.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__403=document.createElement('div');
			this.__403.ggId='\u041a\u043d\u043e\u043f\u043a\u0430 40';
			this.__403.ggParameter={ rx:0,ry:0,a:0,sx:0.4,sy:0.5 };
			this.__403.ggVisible=true;
			this.__403.className='ggskin ggskin_button';
			hs ='position:absolute;';
			hs+='left: -64px;';
			hs+='top:  -26px;';
			hs+='width: 128px;';
			hs+='height: 112px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this.__403.ggParameter) + ';';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this.__403.setAttribute('style',hs);
			this.__403__img=document.createElement('img');
			this.__403__img.setAttribute('src',basePath + 'images/_403.png');
			this.__403__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this.__403__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this.__403__img);
			this.__403.appendChild(this.__403__img);
			this.__div.appendChild(this.__403);
		} else
		if (hotspot.skinid=='hs_photo_1') {
			this.__div=document.createElement('div');
			this.__div.ggId='hs_photo_1';
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			hs ='position:absolute;';
			hs+='left: 70px;';
			hs+='top:  166px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				flag=(me._pic1.style.visibility=='hidden');
				me._pic1.style[domTransition]='none';
				me._pic1.style.visibility=flag?'inherit':'hidden';
				me._pic1.ggVisible=flag;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__382=document.createElement('div');
			this.__382.ggId='\u041a\u043d\u043e\u043f\u043a\u0430 38';
			this.__382.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
			this.__382.ggVisible=true;
			this.__382.className='ggskin ggskin_button';
			hs ='position:absolute;';
			hs+='left: -24px;';
			hs+='top:  -8px;';
			hs+='width: 100px;';
			hs+='height: 100px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this.__382.ggParameter) + ';';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this.__382.setAttribute('style',hs);
			this.__382__img=document.createElement('img');
			this.__382__img.setAttribute('src',basePath + 'images/_382.png');
			this.__382__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this.__382__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this.__382__img);
			this.__382.appendChild(this.__382__img);
			this.__382.onmouseover=function () {
				me._text1.style[domTransition]='none';
				me._text1.style.visibility='inherit';
				me._text1.ggVisible=true;
			}
			this.__382.onmouseout=function () {
				me._text1.style[domTransition]='none';
				me._text1.style.visibility='hidden';
				me._text1.ggVisible=false;
			}
			this._text1=document.createElement('div');
			this._text1.ggId='text1';
			this._text1.ggParameter={ rx:0,ry:0,a:0,sx:2,sy:2 };
			this._text1.ggVisible=false;
			this._text1.className='ggskin ggskin_text';
			this._text1.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.style.left=(1 + (101-this.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: 1px;';
			hs+='top:  105px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+=cssPrefix + 'transform-origin: 50% 0%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text1.ggParameter) + ';';
			hs+='visibility: hidden;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.705882);';
			hs+='border: 1px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._text1.setAttribute('style',hs);
			this._text1.innerHTML=me.hotspot.title;
			this.__382.appendChild(this._text1);
			this.__div.appendChild(this.__382);
			this._pic1=document.createElement('div');
			this._pic1.ggId='pic1';
			this._pic1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pic1.ggVisible=false;
			this._pic1.className='ggskin ggskin_image';
			hs ='position:absolute;';
			hs+='left: 22px;';
			hs+='top:  -164px;';
			hs+='width: 409px;';
			hs+='height: 600px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._pic1.setAttribute('style',hs);
			this._pic1__img=document.createElement('img');
			this._pic1__img.setAttribute('src',basePath + 'images/pic1.jpg');
			this._pic1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._pic1__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._pic1__img);
			this._pic1.appendChild(this._pic1__img);
			this.__402=document.createElement('div');
			this.__402.ggId='\u041a\u043d\u043e\u043f\u043a\u0430 40';
			this.__402.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
			this.__402.ggVisible=false;
			this.__402.className='ggskin ggskin_button';
			hs ='position:absolute;';
			hs+='left: 1px;';
			hs+='top:  1px;';
			hs+='width: 100px;';
			hs+='height: 100px;';
			hs+=cssPrefix + 'transform-origin: 0% 0%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this.__402.ggParameter) + ';';
			hs+='visibility: hidden;';
			hs+='cursor: pointer;';
			this.__402.setAttribute('style',hs);
			this.__402__img=document.createElement('img');
			this.__402__img.setAttribute('src',basePath + 'images/_402.png');
			this.__402__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this.__402__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this.__402__img);
			this.__402.appendChild(this.__402__img);
			this.__402.onclick=function () {
				flag=(me._pic1.style.visibility=='hidden');
				me._pic1.style[domTransition]='none';
				me._pic1.style.visibility=flag?'inherit':'hidden';
				me._pic1.ggVisible=flag;
			}
			this._pic1.appendChild(this.__402);
			this.__div.appendChild(this._pic1);
		} else
		if (hotspot.skinid=='hs_photo_2') {
			this.__div=document.createElement('div');
			this.__div.ggId='hs_photo_2';
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			hs ='position:absolute;';
			hs+='left: 70px;';
			hs+='top:  166px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				flag=(me._pic2.style.visibility=='hidden');
				me._pic2.style[domTransition]='none';
				me._pic2.style.visibility=flag?'inherit':'hidden';
				me._pic2.ggVisible=flag;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__381=document.createElement('div');
			this.__381.ggId='\u041a\u043d\u043e\u043f\u043a\u0430 38';
			this.__381.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
			this.__381.ggVisible=true;
			this.__381.className='ggskin ggskin_button';
			hs ='position:absolute;';
			hs+='left: -24px;';
			hs+='top:  -8px;';
			hs+='width: 100px;';
			hs+='height: 100px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this.__381.ggParameter) + ';';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this.__381.setAttribute('style',hs);
			this.__381__img=document.createElement('img');
			this.__381__img.setAttribute('src',basePath + 'images/_381.png');
			this.__381__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this.__381__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this.__381__img);
			this.__381.appendChild(this.__381__img);
			this.__381.onmouseover=function () {
				me._text2.style[domTransition]='none';
				me._text2.style.visibility='inherit';
				me._text2.ggVisible=true;
			}
			this.__381.onmouseout=function () {
				me._text2.style[domTransition]='none';
				me._text2.style.visibility='hidden';
				me._text2.ggVisible=false;
			}
			this._text2=document.createElement('div');
			this._text2.ggId='text2';
			this._text2.ggParameter={ rx:0,ry:0,a:0,sx:2,sy:2 };
			this._text2.ggVisible=false;
			this._text2.className='ggskin ggskin_text';
			this._text2.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.style.left=(1 + (101-this.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: 1px;';
			hs+='top:  105px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+=cssPrefix + 'transform-origin: 50% 0%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text2.ggParameter) + ';';
			hs+='visibility: hidden;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.705882);';
			hs+='border: 1px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._text2.setAttribute('style',hs);
			this._text2.innerHTML=me.hotspot.title;
			this.__381.appendChild(this._text2);
			this.__div.appendChild(this.__381);
			this._pic2=document.createElement('div');
			this._pic2.ggId='pic2';
			this._pic2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pic2.ggVisible=false;
			this._pic2.className='ggskin ggskin_image';
			hs ='position:absolute;';
			hs+='left: 22px;';
			hs+='top:  -164px;';
			hs+='width: 800px;';
			hs+='height: 533px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._pic2.setAttribute('style',hs);
			this._pic2__img=document.createElement('img');
			this._pic2__img.setAttribute('src',basePath + 'images/pic2.jpg');
			this._pic2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._pic2__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._pic2__img);
			this._pic2.appendChild(this._pic2__img);
			this.__401=document.createElement('div');
			this.__401.ggId='\u041a\u043d\u043e\u043f\u043a\u0430 40';
			this.__401.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
			this.__401.ggVisible=false;
			this.__401.className='ggskin ggskin_button';
			hs ='position:absolute;';
			hs+='left: 1px;';
			hs+='top:  1px;';
			hs+='width: 100px;';
			hs+='height: 100px;';
			hs+=cssPrefix + 'transform-origin: 0% 0%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this.__401.ggParameter) + ';';
			hs+='visibility: hidden;';
			hs+='cursor: pointer;';
			this.__401.setAttribute('style',hs);
			this.__401__img=document.createElement('img');
			this.__401__img.setAttribute('src',basePath + 'images/_401.png');
			this.__401__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this.__401__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this.__401__img);
			this.__401.appendChild(this.__401__img);
			this.__401.onclick=function () {
				flag=(me._pic2.style.visibility=='hidden');
				me._pic2.style[domTransition]='none';
				me._pic2.style.visibility=flag?'inherit':'hidden';
				me._pic2.ggVisible=flag;
			}
			this._pic2.appendChild(this.__401);
			this.__div.appendChild(this._pic2);
		} else
		if (hotspot.skinid=='hs_photo_3') {
			this.__div=document.createElement('div');
			this.__div.ggId='hs_photo_3';
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			hs ='position:absolute;';
			hs+='left: 70px;';
			hs+='top:  166px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				flag=(me._pic3.style.visibility=='hidden');
				me._pic3.style[domTransition]='none';
				me._pic3.style.visibility=flag?'inherit':'hidden';
				me._pic3.ggVisible=flag;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__380=document.createElement('div');
			this.__380.ggId='\u041a\u043d\u043e\u043f\u043a\u0430 38';
			this.__380.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
			this.__380.ggVisible=true;
			this.__380.className='ggskin ggskin_button';
			hs ='position:absolute;';
			hs+='left: -24px;';
			hs+='top:  -8px;';
			hs+='width: 100px;';
			hs+='height: 100px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this.__380.ggParameter) + ';';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this.__380.setAttribute('style',hs);
			this.__380__img=document.createElement('img');
			this.__380__img.setAttribute('src',basePath + 'images/_380.png');
			this.__380__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this.__380__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this.__380__img);
			this.__380.appendChild(this.__380__img);
			this.__380.onmouseover=function () {
				me._text3.style[domTransition]='none';
				me._text3.style.visibility='inherit';
				me._text3.ggVisible=true;
			}
			this.__380.onmouseout=function () {
				me._text3.style[domTransition]='none';
				me._text3.style.visibility='hidden';
				me._text3.ggVisible=false;
			}
			this._text3=document.createElement('div');
			this._text3.ggId='text3';
			this._text3.ggParameter={ rx:0,ry:0,a:0,sx:2,sy:2 };
			this._text3.ggVisible=false;
			this._text3.className='ggskin ggskin_text';
			this._text3.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.style.left=(1 + (101-this.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: 1px;';
			hs+='top:  105px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+=cssPrefix + 'transform-origin: 50% 0%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text3.ggParameter) + ';';
			hs+='visibility: hidden;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.705882);';
			hs+='border: 1px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._text3.setAttribute('style',hs);
			this._text3.innerHTML=me.hotspot.title;
			this.__380.appendChild(this._text3);
			this.__div.appendChild(this.__380);
			this._pic3=document.createElement('div');
			this._pic3.ggId='pic3';
			this._pic3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pic3.ggVisible=false;
			this._pic3.className='ggskin ggskin_image';
			hs ='position:absolute;';
			hs+='left: 22px;';
			hs+='top:  -306px;';
			hs+='width: 494px;';
			hs+='height: 680px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._pic3.setAttribute('style',hs);
			this._pic3__img=document.createElement('img');
			this._pic3__img.setAttribute('src',basePath + 'images/pic3.jpg');
			this._pic3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._pic3__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._pic3__img);
			this._pic3.appendChild(this._pic3__img);
			this.__400=document.createElement('div');
			this.__400.ggId='\u041a\u043d\u043e\u043f\u043a\u0430 40';
			this.__400.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
			this.__400.ggVisible=false;
			this.__400.className='ggskin ggskin_button';
			hs ='position:absolute;';
			hs+='left: 1px;';
			hs+='top:  1px;';
			hs+='width: 100px;';
			hs+='height: 100px;';
			hs+=cssPrefix + 'transform-origin: 0% 0%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this.__400.ggParameter) + ';';
			hs+='visibility: hidden;';
			hs+='cursor: pointer;';
			this.__400.setAttribute('style',hs);
			this.__400__img=document.createElement('img');
			this.__400__img.setAttribute('src',basePath + 'images/_400.png');
			this.__400__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this.__400__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this.__400__img);
			this.__400.appendChild(this.__400__img);
			this.__400.onclick=function () {
				me._pic3.style[domTransition]='none';
				me._pic3.style.visibility='hidden';
				me._pic3.ggVisible=false;
			}
			this._pic3.appendChild(this.__400);
			this.__div.appendChild(this._pic3);
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId='hs_photo_4';
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			hs ='position:absolute;';
			hs+='left: 70px;';
			hs+='top:  166px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				flag=(me._pic4.style.visibility=='hidden');
				me._pic4.style[domTransition]='none';
				me._pic4.style.visibility=flag?'inherit':'hidden';
				me._pic4.ggVisible=flag;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__38=document.createElement('div');
			this.__38.ggId='\u041a\u043d\u043e\u043f\u043a\u0430 38';
			this.__38.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
			this.__38.ggVisible=true;
			this.__38.className='ggskin ggskin_button';
			hs ='position:absolute;';
			hs+='left: -24px;';
			hs+='top:  -8px;';
			hs+='width: 100px;';
			hs+='height: 100px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this.__38.ggParameter) + ';';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this.__38.setAttribute('style',hs);
			this.__38__img=document.createElement('img');
			this.__38__img.setAttribute('src',basePath + 'images/_38.png');
			this.__38__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this.__38__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this.__38__img);
			this.__38.appendChild(this.__38__img);
			this.__38.onmouseover=function () {
				me._text4.style[domTransition]='none';
				me._text4.style.visibility='inherit';
				me._text4.ggVisible=true;
			}
			this.__38.onmouseout=function () {
				me._text4.style[domTransition]='none';
				me._text4.style.visibility='hidden';
				me._text4.ggVisible=false;
			}
			this._text4=document.createElement('div');
			this._text4.ggId='text4';
			this._text4.ggParameter={ rx:0,ry:0,a:0,sx:2,sy:2 };
			this._text4.ggVisible=false;
			this._text4.className='ggskin ggskin_text';
			this._text4.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.style.left=(1 + (101-this.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: 1px;';
			hs+='top:  105px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+=cssPrefix + 'transform-origin: 50% 0%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._text4.ggParameter) + ';';
			hs+='visibility: hidden;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.705882);';
			hs+='border: 1px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._text4.setAttribute('style',hs);
			this._text4.innerHTML=me.hotspot.title;
			this.__38.appendChild(this._text4);
			this.__div.appendChild(this.__38);
			this._pic4=document.createElement('div');
			this._pic4.ggId='pic4';
			this._pic4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pic4.ggVisible=false;
			this._pic4.className='ggskin ggskin_image';
			hs ='position:absolute;';
			hs+='left: 22px;';
			hs+='top:  -164px;';
			hs+='width: 455px;';
			hs+='height: 338px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._pic4.setAttribute('style',hs);
			this._pic4__img=document.createElement('img');
			this._pic4__img.setAttribute('src',basePath + 'images/pic4.jpg');
			this._pic4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._pic4__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._pic4__img);
			this._pic4.appendChild(this._pic4__img);
			this.__40=document.createElement('div');
			this.__40.ggId='\u041a\u043d\u043e\u043f\u043a\u0430 40';
			this.__40.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
			this.__40.ggVisible=false;
			this.__40.className='ggskin ggskin_button';
			hs ='position:absolute;';
			hs+='left: 1px;';
			hs+='top:  1px;';
			hs+='width: 100px;';
			hs+='height: 100px;';
			hs+=cssPrefix + 'transform-origin: 0% 0%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this.__40.ggParameter) + ';';
			hs+='visibility: hidden;';
			hs+='cursor: pointer;';
			this.__40.setAttribute('style',hs);
			this.__40__img=document.createElement('img');
			this.__40__img.setAttribute('src',basePath + 'images/_40.png');
			this.__40__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this.__40__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this.__40__img);
			this.__40.appendChild(this.__40__img);
			this.__40.onclick=function () {
				flag=(me._pic4.style.visibility=='hidden');
				me._pic4.style[domTransition]='none';
				me._pic4.style.visibility=flag?'inherit':'hidden';
				me._pic4.ggVisible=flag;
			}
			this._pic4.appendChild(this.__40);
			this.__div.appendChild(this._pic4);
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};