
function mix() {
        var alcohol1 = [ "gin" ];
        var alcohol2 = [ "vermouth" ];
        var other1 = [ "olive brine" ];
        var other2 = [ "green olives" ];
        var none = []
  		var n = $.merge(alcohol1, $.merge($.merge(alcohol2, $.merge(other1, other2 )), none));
  		document.getElementById("dirty_martini").innerHTML = " = " + n + " ";
    }

var button = document.getElementsByClassName("button")[0];
button.addEventListener("click", Change);

function Change() {
	var container = document.getElementsByClassName("container")[0];
	container.style.display = "block";
	var txtcontainer = document.getElementsByClassName("text-container")[0];
	txtcontainer.style.display = "none";
	var steps = document.getElementsByClassName("steps")[0];
	steps.style.display = "none";
	var arrow = document.getElementsByClassName("arrow")[0];
	arrow.style.display = "none";
	var arrow2 = document.getElementsByClassName("arrow2")[0];
	arrow2.style.display = "none";
	var exit = document.getElementsByClassName("exit")[0];
	exit.style.display = "none";
	var button2 = document.getElementsByClassName("button2")[0];
	button2.style.display = "none";
	var button3 = document.getElementsByClassName("button3")[0];
	button3.style.display = "none";
	var arrow = document.getElementsByClassName("arrow")[0];
	arrow.style.display = "block";
}

var arrow = document.getElementsByClassName("arrow")[0];
arrow.addEventListener("click", Show);

function Show() {
	var text = document.getElementsByClassName("text-container")[0];
	text.style.display = "block";
	var arrow2 = document.getElementsByClassName("arrow2")[0];
	arrow2.style.display = "block";
}

var arrow2 = document.getElementsByClassName("arrow2")[0];
arrow2.addEventListener("click", Show2);

function Show2() {
	var steps = document.getElementsByClassName("steps")[0];
	steps.style.display = "block";
	var arrow = document.getElementsByClassName("arrow")[0];
	arrow.style.display = "none";
	arrow2.style.display = "none";
	var exit = document.getElementsByClassName("exit")[0];
	exit.style.display = "block";
}

var exit = document.getElementsByClassName("exit")[0];
exit.addEventListener("click", Reset);

function Reset() {
	var container = document.getElementsByClassName("container")[0];
	container.style.display = "none";
	var container2 = document.getElementsByClassName("container2")[0];
	container2.style.display = "none";
	var container3 = document.getElementsByClassName("container3")[0];
	container3.style.display = "none";
	var button = document.getElementsByClassName("button")[0];
	button.style.display = "block";
	var button2 = document.getElementsByClassName("button2")[0];
	button2.style.display = "block";
	var button3 = document.getElementsByClassName("button3")[0];
	button3.style.display = "block";
}

function mix2() {
		var alcohol3 = [ "gin" ];
        var alcohol4 = [ "campari" ];
        var alcohol5 = [ "martini rosso" ];
        var other3 = [ "orange peel" ];
        var none = []
  		var n = $.merge(alcohol3, $.merge($.merge(alcohol4, $.merge(alcohol5, other3 )), none));
  		document.getElementById("negroni").innerHTML = " = " + n + " ";
    }

var button2 = document.getElementsByClassName("button2")[0];
button2.addEventListener("click", Change2);

function Change2() {
	var container2 = document.getElementsByClassName("container2")[0];
	container2.style.display = "block";
	var txtcontainer2 = document.getElementsByClassName("text-container2")[0];
	txtcontainer2.style.display = "none";
	var steps2 = document.getElementsByClassName("steps2")[0];
	steps2.style.display = "none";
	var arrow3 = document.getElementsByClassName("arrow3")[0];
	arrow3.style.display = "none";
	var arrow4 = document.getElementsByClassName("arrow4")[0];
	arrow4.style.display = "none";
	var exit2 = document.getElementsByClassName("exit2")[0];
	exit2.style.display = "none";
	var button = document.getElementsByClassName("button")[0];
	button.style.display = "none";
	var button2 = document.getElementsByClassName("button2")[0];
	button2.style.left = "18%";
	var button3 = document.getElementsByClassName("button3")[0];
	button3.style.display = "none";
	var arrow3 = document.getElementsByClassName("arrow3")[0];
	arrow3.style.display = "block";
}

var arrow3 = document.getElementsByClassName("arrow3")[0];
arrow3.addEventListener("click", Show3);

function Show3() {
	var text2 = document.getElementsByClassName("text-container2")[0];
	text2.style.display = "block";
	var arrow4 = document.getElementsByClassName("arrow4")[0];
	arrow4.style.display = "block";
}

var arrow4 = document.getElementsByClassName("arrow4")[0];
arrow4.addEventListener("click", Show4);

function Show4() {
	var steps2 = document.getElementsByClassName("steps2")[0];
	steps2.style.display = "block";
	var arrow = document.getElementsByClassName("arrow3")[0];
	arrow3.style.display = "none";
	arrow4.style.display = "none";
	var exit2 = document.getElementsByClassName("exit2")[0];
	exit2.style.display = "block";
}

var exit2 = document.getElementsByClassName("exit2")[0];
exit2.addEventListener("click", Reset2);

function Reset2() {
	var container = document.getElementsByClassName("container")[0];
	container.style.display = "none";
	var container2 = document.getElementsByClassName("container2")[0];
	container2.style.display = "none";
	var container3 = document.getElementsByClassName("container3")[0];
	container3.style.display = "none";
	var button = document.getElementsByClassName("button")[0];
	button.style.display = "block";
	var button2 = document.getElementsByClassName("button2")[0];
	button2.style.left = "42%";
	var button2 = document.getElementsByClassName("button2")[0];
	button2.style.display = "block";
	var button3 = document.getElementsByClassName("button3")[0];
	button3.style.display = "block";
}

function mix3() {
		var alcohol6 = [ "gin" ];
        var alcohol7 = [ "maraschino" ];
        var liquid1 = [ "lemon juice" ];
        var liquid2 = [ "water" ];
        var other4 = [ "maraschino cherry" ]
  		var n = $.merge(alcohol6, $.merge($.merge(alcohol7, $.merge(liquid1, liquid2 )), other4));
  		document.getElementById("aviation").innerHTML = " = " + n + " ";
    }

var button3 = document.getElementsByClassName("button3")[0];
button3.addEventListener("click", Change3);

function Change3() {
	var container3 = document.getElementsByClassName("container3")[0];
	container3.style.display = "block";
	var txtcontainer3 = document.getElementsByClassName("text-container3")[0];
	txtcontainer3.style.display = "none";
	var steps3 = document.getElementsByClassName("steps3")[0];
	steps3.style.display = "none";
	var arrow5 = document.getElementsByClassName("arrow5")[0];
	arrow5.style.display = "none";
	var arrow6 = document.getElementsByClassName("arrow6")[0];
	arrow6.style.display = "none";
	var exit = document.getElementsByClassName("exit")[0];
	exit.style.display = "none";
	var button3 = document.getElementsByClassName("button3")[0];
	button3.style.left = "18%";
	var button = document.getElementsByClassName("button")[0];
	button.style.display = "none";
	var button2 = document.getElementsByClassName("button2")[0];
	button2.style.display = "none";
	var arrow5 = document.getElementsByClassName("arrow5")[0];
	arrow5.style.display = "block";
}

var arrow5 = document.getElementsByClassName("arrow5")[0];
arrow5.addEventListener("click", Show5);

function Show5() {
	var text3 = document.getElementsByClassName("text-container3")[0];
	text3.style.display = "block";
	var arrow6 = document.getElementsByClassName("arrow6")[0];
	arrow6.style.display = "block";
}

var arrow6 = document.getElementsByClassName("arrow6")[0];
arrow6.addEventListener("click", Show6);

function Show6() {
	var steps3 = document.getElementsByClassName("steps3")[0];
	steps3.style.display = "block";
	var arrow5 = document.getElementsByClassName("arrow5")[0];
	arrow5.style.display = "none";
	arrow6.style.display = "none";
	var exit3 = document.getElementsByClassName("exit3")[0];
	exit3.style.display = "block";
}

var exit3 = document.getElementsByClassName("exit3")[0];
exit3.addEventListener("click", Reset3);

function Reset3() {
	var button3 = document.getElementsByClassName("button3")[0];
	button3.style.left = "70%";
	var container = document.getElementsByClassName("container")[0];
	container.style.display = "none";
	var container2 = document.getElementsByClassName("container2")[0];
	container2.style.display = "none";
	var container3 = document.getElementsByClassName("container3")[0];
	container3.style.display = "none";
	var button = document.getElementsByClassName("button")[0];
	button.style.display = "block";
	var button2 = document.getElementsByClassName("button2")[0];
	button2.style.display = "block";
	var button3 = document.getElementsByClassName("button3")[0];
	button3.style.display = "block";
}