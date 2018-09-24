var slider = document.getElementById('slider');
var close_counter=0;

function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    )
}

var winheight, docheight, trackLength, throttlescroll

function getmeasurements(){
	winheight= window.innerHeight || (document.documentElement || document.body).clientHeight
	docheight = getDocHeight()
	trackLength = docheight - winheight
}

function amountscrolled(){
	var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
	var pctScrolled = Math.floor(scrollTop/trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
	
	if(pctScrolled>=50 && (close_counter==0 || close_counter==2)){
		slider.classList.add('show');
	}
}

function close_slider() {
	slider.classList.remove('show');
	close_counter+=1;
	setTimeout(function(){
		close_counter+=1;
	}, 600000);
}

getmeasurements()

window.addEventListener("resize", function(){
	getmeasurements()
}, false)

window.addEventListener("scroll", function(){
	clearTimeout(throttlescroll)
		throttlescroll = setTimeout(function(){ // throttle code inside scroll to once every 50 milliseconds
		amountscrolled()
	}, 50)
}, false)
