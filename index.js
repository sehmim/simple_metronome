let x = 750;
let start = true;
let task;

const click = () =>{
	if (start) {
		$("#circle").css({
			"animation-name" : "colorChange",
			"animation-duration" : (x/1000) +"s",
			"animation-direction" : "alternate",
			"animation-iteration-count" : "infinite"
			})
		task = setInterval(function() {$('audio')[0].play();}, x);
		start = false;
		$("#buttonStart").text(" STOP "); 
	}
	else{
		$("#circle").css(
			"animation", ""
		);
		clearInterval(task);
		start = true;
		$("#buttonStart").text(" START "); 
	}

} 

const timeSignChange = () => {
	$("#34").click(()=>{
		$("#displayTime").text("3/4")
		x = x * .75;
		click();
		
	})
	$("#44").click(()=>{
		x = x / .75;
		$("#displayTime").text("4/4")
		click();
	})
}

//// ALL FUNCTIONAL METHODS COME HERE

$("#buttonStart").click(()=>{
		click(); 
		timeSignChange();
	});



// Have all drop down tempos initialized in a var to loop thorugh it 
const allTempoINIT =(id)=>{
		$(id).click(()=>{
		x = $(id).attr('at');
		$("#displayTempo").text($(id).html());
		click();
		timeSignChange();
	})
}

for (var i =0 ; i <=11 ; i++) {
	allTempoINIT("#tempo" + [i]);
}

/////////////

$("#displayTempo").text("80");
$("#displayTime").text("4/4");





// $( "#clickme" ).click(function() {
//   $( "#book" ).slideDown( "slow", function() {
//     // Animation complete.
//   });
// });




