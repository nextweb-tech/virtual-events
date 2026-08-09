$(".navbar-nav > li:first-child > a").addClass("activemenu");
$(".navbar-nav > li > a").hover(function() {
    $(".navbar-nav > li > a").removeClass("activemenu");
});

// 3. Menu icon clicked
var menuIcon = $('#menu-icon');
var navfullMenu = $('#navfull-menu');
menuIcon.on('click', function () {
	menuIcon.toggleClass('menu-visible');
	navfullMenu.toggleClass('menu-visible');
	// reactToMenu.toggleClass('menu-visible');
	return false;
});

//Rate Function
var result = 0;
var rater = document.getElementById('rate');
var stars = Array.from(rater.children);
rater.addEventListener('touchmove',raterEnd);
stars.forEach(function(item){
  item.addEventListener('mousemove', rateStar.bind(null,item,showResult));
  
});



function raterEnd(e){
  e.preventDefault();
  e.stopPropagation();
  var changedTouch = e.changedTouches[0];
  var elem = document.elementFromPoint(changedTouch.clientX, changedTouch.clientY);
  endElem = elem;
  rateStar(elem,showResult);
}


function rateStar(ratedItem,callback){
   if(stars.includes(ratedItem)){
    result = parseInt(ratedItem.dataset.score);
    stars.forEach(function(item){
       var position =parseInt(item.dataset.score);
      if(position===0){
        item.style.color ="#ccc" ;
      }else if(position<= result){
        item.style.color ="gold";
      }else{
        item.style.color ="#ccc";
      }
    });
   }
  callback();
}
function showResult(){
  document.getElementById('result').innerHTML= result;
}