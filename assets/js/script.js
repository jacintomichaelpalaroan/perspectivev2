
// variable initialization
let row=0, header, instructions, ChA, ChB, ChC, modal, bgImg, hint, ans, choice="";
// array of questions resources
const tableData= [
	["SEEING COLORS","Looks like you are seeing colors. How can you make them disappear?",	"Stare", "Close eyes",	"Cross eyes", "The answer you are looking for rhyms with claire.", "A"],
			
	["BLACK POLKA DOTS","Dots, dots everywhere. How many black dots are there?","30","3","0","It's a score you want to avoid in an exam","C"],
			
	["IT'S WAVY IN HERE","Is the image really moving?","Yes","No"," I'm just drunk","It is a word","B"],
			
	["HOCUS FOCUS","Dots you can't see all at the same time. But, how many are they?","21","15","10","It is an odd number","A"],
			
	["EINSTEIN'S A SHE!","Who is the secret identity of the genius?","Marie Curie","Manilyn Monroe","Mocha Uson","She is dead and famous","B"],
];
//functions	
// function to set the questions or text per level
const renderGame=()=>{
	header=tableData[row][0];
	instructions=tableData[row][1];
	ChA=tableData[row][2];
	ChB=tableData[row][3];
	ChC=tableData[row][4];
	hint=tableData[row][5];
	ans=tableData[row][6];
	$("#header").html(header);
	$("#instructions").html(instructions);
	$("#A").html(ChA);
	$("#B").html(ChB);
	$("#C").html(ChC);
	$("#hint").html(hint);
}

// function to set the images per game question or level
const renderImage=()=>{
	if(row==0){
		$("#illusion").attr("src", "./assets/img/oi_1r.jpg");
		$('#questionbox').css("background-image", "url('./assets/img/oi_1r.jpg')");
	}else if(row==1){
		$("#illusion").attr("src", "./assets/img/oi_2r.jpg");
		$('#questionbox').css("background-image", "url('./assets/img/oi_2r.jpg')");
	}else if(row==2){
		$("#illusion").attr("src", "./assets/img/oi_3.gif");
		$('#questionbox').css("background-image", "url('./assets/img/oi_3.gif')");
	}else if(row==3){
		$("#illusion").attr("src", "./assets/img/oi_4r.jpg");
		$('#questionbox').css("background-image", "url('./assets/img/oi_4r.jpg')");
	}else if(row==4){
		$("#illusion").attr("src", "./assets/img/oi_5.jpg");
		$('#questionbox').css("background-image", "url('./assets/img/oi_5.jpg')");
	}
}
// hides or displays an item function
const toggleShow=()=>{
	if (document.getElementById('hint').style.display=="block"){
		document.getElementById('hint').style.display="none";		
	} else {
		document.getElementById('hint').style.display="block";	
	}
}
//function that hides an item
const hideItem=()=>{
	if (document.getElementById('hint').style.display=="block"){
		document.getElementById('hint').style.display="none";
	}
}
//adds the desired contents on the interface on click if the gamer. 
const gameDecision=()=>{
	if (((row+1)<(tableData.length))&&(choice==ans)) {
		row++;
		renderGame();
		renderImage();
		hideItem();
	}else if(((row+1)>=(tableData.length))&&(choice==ans)){
		$("#background").css("display","none");
		$('#body').css("background-image", "url('./assets/img/bg_5.jpg')");
		$("#message").html("Congratulations!")
		$("#message2").html("Game Completed!")
		$("#message3").html("Try Again")
		$("#start_end").show();

	}
}

// displays intro message then hides it and shows game area
$("#start_end").click(function(){
	if(row==0){
	$(this).hide();
	$("#background").css("display","block");
	$("#background").css("background-size","cover");
	renderGame();
	renderImage();
	} 
});

//makes proceeds or not proceeds to the next question per click on choices 
$("#ChA,#A").click(function(){
	choice="A";
	gameDecision();	
});

$("#ChB,#B").click(function(){
	choice="B";
	gameDecision();
});
			
$("#ChC,#C").click(function(){
	choice="C";
	gameDecision();
});

//toggles hint
$("#hintTitleText,#hintBtn").click(function(){
	toggleShow();	
});
//restarts the game on click on message3
$("#message3").click(function(){
	row=0;
	$("#start_end").hide();
	$("#background").css("display","block");
	$("#background").css("background-size","cover");
	$('#body').css("background-image", "url('./assets/img/bg_2.jpg')");
	renderGame();
	renderImage();
});			



