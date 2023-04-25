let string = "Partez a la decouverte des mysteres du plus celebre seigneur du temps au musee docteur who fictif de lievin. Au milieu de la plus belle collection fictive de france, vous voyagerez a travers le temps et l’espace pour decouvrir le docteur comme vous ne l’avez jamais vu. en famille ou entre amis, plongez vous dans cet univers de science fiction incroyable. Rendez vous a l’angle du boulevard des daleks et la rue des cybermens, juste apres l’ange pleureur."; /* type your text here */
let array = string.split("");
let timer;

function frameLooper () {
	if (array.length > 0) { 
		var t = array.shift();
		document.getElementById("text").innerHTML += t ;
		if (t == ".") {
			document.getElementById("text").innerHTML += "<br> <br>";
		}
	} else {
		clearTimeout(timer);
			}
	loopTimer = setTimeout('frameLooper()',30); /* change 70 for speed */

}
frameLooper();