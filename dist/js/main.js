var images=[{src:"images/barleyx1536.jpg",img:null},{src:"images/barley_closeupx1536.jpg",img:null},{src:"images/boatx1536.jpg",img:null},{src:"images/grainx1536.jpg",img:null},{src:"images/hillsx1536.jpg",img:null}],Tolland={imageIndex:0,imageBehind:document.getElementsByClassName("image__behind")[0],imageInfront:document.getElementsByClassName("image__infront")[0],init:function(){Tolland.bindUIActions(),Tolland.preloadImages(),setInterval(Tolland.changeHeader,5e3)},bindUIActions:function(){},preloadImages:function(){images.forEach(function(e){var n=new Image;n.addEventListener("load",function(){e.img=n,Tolland.replaceLowRes()}),n.src=e.src})},replaceLowRes:function(){images[0].img&&(Tolland.imageInfront&&!Tolland.imageIndex&&(Tolland.imageInfront.style.backgroundImage="url('"+images[0].src+"')"),Tolland.imageBehind&&!Tolland.imageIndex&&(Tolland.imageBehind.style.backgroundImage="url('"+images[0].src+"')"))},changeHeader:function(){for(Tolland.imageInfront.addEventListener("transitionend",function(){Tolland.imageInfront.style.backgroundImage="url('"+images[Tolland.imageIndex].src+"')",Tolland.imageInfront.classList.remove("old")});null===images[++Tolland.imageIndex];);Tolland.imageIndex=Tolland.imageIndex%images.length,Tolland.imageBehind.style.backgroundImage="url('"+images[Tolland.imageIndex].src+"')",setTimeout(function(){Tolland.imageInfront.classList.add("old")},450)}};document.addEventListener("DOMContentLoaded",Tolland.init);