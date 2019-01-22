// Global Variables ---------------------- //
var currentQuestion = 0,
	lastQuestion = questions.length - 1;

var local = (!document.location.hostname); // check if local
// --------------------------------------- //
     
    // fadeOut the loader for Berline bot with jQuery

	       // <![CDATA[ 
		$(document).ready(function(){
				$("#chat-container").ready(function(){
		      $(".loader").fadeOut(600); 
		 							$("#chat-container").fadeIn(600);  
		
			     });
		});

   // ]]> 
   
   
   /** 
   Display Menu when JS is enabled in browser
   **/
	       // <![CDATA[ 
		$(document).ready(function(){
				$("#menu").show(); 
						$("div").removeClass("hideMenu");
		});

   // ]]> 
   
   
   /* *********** 
   			Hide() the menu when Berline's image is clicked.
   			Show() the menu when #closeModals clicked.
   ************ */
   			//For BerlineImg1
	       // <![CDATA[ 
		$(document).ready(function(){
		   $("#BerlineImg1").click(function(){
		     $("#menu").hide();   
		    		$("#chat-container").hide();
		    			$("#about-container").hide();
		    	 });
		  $("#closeModal").click(function(){
		     $("#chat-container").show();
		     		$("#about-container").hide();
		 						$("#menu").show();
	     });
		});
   // ]]> 
   					 //For BerlineImg2
	       // <![CDATA[ 
		$(document).ready(function(){
		   $("#BerlineImg2").click(function(){
		     $("#menu").hide();   
		    		$("#chat-container").hide();
		    			$("#about-container").hide();
		    	 });
		  $("#closeModal").click(function(){
		     $("#chat-container").show();
		     		$("#about-container").hide();
		 						$("#menu").show();
	     });
		});
   // ]]> 
   
      
   
        // hide and show the menu for Berline bot with jQuery
	       // <![CDATA[ 
		$(document).ready(function(){
		   $("#chat").click(function(){
		     $("#about-container").hide();   
		    		$("#chat-container").show();
		    			$("#closeNav").hide();
		 						$("#openNav").show();
		    	 });
		  $("#about").click(function(){
		    $("#chat-container").hide();
		 				$("#about-container").show();
		 					$("#about-container").removeClass("displayOff");
		 						$("#closeNav").hide();
		 							$("#openNav").show();
	     });
		});


   // ]]> 
    
        // hide and show the Navigation for Berline bot with jQuery
	       // <![CDATA[ 
		$(document).ready(function(){
		   $("#openNav").click(function(){
		     $("#openNav").hide();   
		    		$("#closeNav").show();
		    		 	$("#chat-container").hide();
		     				$("#about-container").hide();
		    					$("#closeNav").removeClass("displayOff");
		    	 });
		  $("#closeNav").click(function(){
		     $("#closeNav").hide();
		 					$("#openNav").show();
		 						$("#chat-container").show();
		     				$("#about-container").show();
		     					$("#about-container").addClass("displayOff");

	     });
		});
			
					function openNav() {
	 document.getElementById("mySidenav").style.width = "100%";
	}
	function closeNav() {
	 document.getElementById("mySidenav").style.width = "0";
	}
	
   // ]]> 
   
   
 //Greetings Start
 
 
		$(document).ready(function(){
		
		/* ========Get userName through promp()====================
		var userName = prompt("What is your name?");
		while(userName == null || userName == "") 
		{
		userName = prompt("What is your name?")
		}
		=============================== */
		

	//	window.onload=function greet(){
		var greet;
		var date = new Date();
		var sec = date.getSeconds();
		var min = date.getMinutes();
		var hour = date.getHours();
		
		
		if(hour===5 || hour===6 || hour===7 || hour===8 || hour===9 || hour===10 || hour===11)
		{
		    
		    greet='<div class="line"><div class="message message-left animated bubbleLeft fadeIn">Hi. Good morning </div></div>' ;
		   // pr(greet);
		
		}
		
		
		else if(hour===12)
		{
		    
		    greet='<div class="line"><div class="message message-left animated bubbleLeft fadeIn">Hi. Good noon </div></div>' ;
		   // pr(greet);
		
		}
		
				else if(hour===13 || hour===14 || hour===15 || hour===16 || hour===17)
		{
		    
		    greet='<div class="line"><div class="message message-left animated bubbleLeft fadeIn">Hi. Good afternoon </div></div>' ;
		   // pr(greet);
		
		}
		
				else if(hour===18 || hour===19 ||  hour===20 || hour===21 || hour===22 || hour===23 || hour===0 || hour===1 || hour===2 || hour===3 || hour===4)
		{
		    
		    greet='<div class="line"><div class="message message-left animated bubbleLeft fadeIn">Hi. Good evening </div></div>' ;
		   // pr(greet);
		
		}
						
		$("document").ready(function(){
		     $("#welcomeMsg").html(greet);
		 						$("#welcomeMsg").fadeIn(600);   
			     });
			
		});
		
	
 
 // *************Greetings End ************* //


		// *********** Fullscreen Mode Start ************ //
					$(document).ready(function(){
            $(".openFullScreen").click(function() {
                $("body").fullscreen();
$(".closeFullScreen").show();
$("a").removeClass("hideScreen");
$(".openFullScreen").hide(); 
            });
            $(".closeFullScreen").click(function() {
                $.fullscreen.exit();
                $(".openFullScreen").show();
                $(".closeFullScreen").hide();
                $("body").fullscreen().css("background-color", "#ffffff");
            });
        });
        
    // ****************FullScreen Mode Stop **********//
    
    
    					$(document).ready(function(){
					// *************** Get the modal ********** //
var modal = document.getElementById('myModal');

//Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById('BerlineImg1');
var modalImg = document.getElementById("BerlineModal");
var captionText = document.getElementById("caption");
img1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
   /* captionText.innerHTML = this.alt; 
    Sets caption text as alt of Image. In this case; I'm Berline bot.
   Uncomment caption CSS if you are going tuse this! */
    captionText.innerHTML = '<div class="line"><div class="message message-left animated bubbleLeft fadeIn">Hi. I\'m Berline </div></div> <div class="line"><div class="message message-left animated bubbleLeft fadeIn">Please click on <span class="highlight">×</span> above to continue your chat. </div></div>'; // Sets caption text
}


// Get the image and insert it inside the modal - use its "alt" text as a caption
var img2 = document.getElementById('BerlineImg2');
var modalImg = document.getElementById("BerlineModal");
var captionText = document.getElementById("caption");
img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    modalImg.alt = this.alt;
   /* captionText.innerHTML = this.alt; 
    Sets caption text as alt of Image. In this case; I'm Berline bot.
   Uncomment caption CSS if you are going tuse this! */
    captionText.innerHTML = '<div class="line"><div class="message message-left animated bubbleLeft fadeIn">Hi. I\'m Berline. </div></div> <div class="line"><div class="message message-left animated bubbleLeft fadeIn">Please click on <span class="highlight">×</span> above to continue your chat. </div></div>'; // Sets caption text
    }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
				});
				
				
				// ********** Chat Settings Start ********//
    
function storyController (questions) {
	current = 0;

	createMessage(questions[0].question);
}

// Recursive function that goes through the set of messages it is given
function createMessage (messagesArray, i, response) {

	// i is optional - i is the current message in the array the system is displaying
	i = typeof i !== 'undefined' ? i : 0;

	// response is optional - response is a boolean that refers to whether the set of messages is a response to a question or the question itself
	response = typeof response !== 'undefined' ? response : 0;

	// add this HTML to the front and back of the message for #style
	var htmlWrapperBeginning = "<div class=\"line\"><div class=\"message message-left animated fadeInUp bubbleLeft\">",
		htmlWrapperEnding = "</div></div>";

	// If this message is not the first, use the previous to calculate a delay, otherwise use a number
	var delay = (i > 0) ? calculateDelay(messagesArray[i - 1]) : 1000;
	// delay override - Make first responses quick
	if (!response && questions[currentQuestion].intro && i == 0){
		delay = 50;
	}

	setTimeout(function(){
		// if it's the last message in the series
		if (i >= messagesArray.length) {

			// if it's the last response to an answer
			if (response) {
				currentQuestion++;
				createMessage(questions[currentQuestion].question);
				return 1;
			}
			// If it's the last question before an answer
			else {
				createAnswerField(delay);
				return 1;
			}
		}
		// if it's not the last message, display the next one
		else {

			$('#chat-container').append(htmlWrapperBeginning + messagesArray[i] + htmlWrapperEnding);
			//Special case for chat
			if ($(".active").attr('id') == "chat") {
				smoothScrollBottom();
			}
			i++;
			createMessage(messagesArray, i, response);
		}
	}, delay);
}

// Creates an answer input bubble
function createAnswerField () {
	var htmlAnswerField = "<div id=\"answer-container\" class=\"line\"><form action=\"#\" onsubmit=\"return false;\"><input required=\"required\" novalidate=\"novalidate\" autocomplete=\"on\" min=\"2\" max=\"40\" formnovalidate=\"formnovalidate\" autofocus=\"autofocus\" type=\"text\" name=\"answer\" id=\"answer\" class=\"message message-right animated fadeInUp\" value=\"\" placeholder=\"Type your response…\"></form><div class=\"clear\"></div></div>";

	if (questions[currentQuestion].ending) {
		return 1;
	}

	$('#chat-container').append(htmlAnswerField);

	$('#answer').keyup(function(event){
	    if(event.keyCode == 13){
	    	var answer = $.trim($('#answer').val());
	    	if (answer != ""){
	    		$('#answer-container').remove();
	        	createAnswerMessage(answer);
	        } else {
	        	$('#answer').removeClass('shake').removeClass('fadeInUp');
	        	$('#answer').addClass('shake');
	        	$('#answer').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	        		$(this).removeClass('shake').removeClass('fadeInUp');
	        	});
	        }
	    }
	});

	$('#answer').focus();

	//Special case for chat
	if ($(".active").attr('id') == "chat") {
		smoothScrollBottom();
	}
}

function createAnswerMessage (answer) {
	var htmlWrapperBeginning = "<div class=\"line\"><div class=\"message message-right animated fadeInUp bubbleRight\">",
		htmlWrapperEnding = "</div></div><div class=\"clear\"></div>";

	$('#chat-container').append(htmlWrapperBeginning + answer + htmlWrapperEnding);

	if (local) {
		console.log(answer);
		console.log(questions[currentQuestion]);
	}


	// --- ANALYTICS --- //
	var dimensions = {
	  question: questions[currentQuestion].name, // Which question is this?
	  answer: answer,
	  created_at: String(Date.now())
	};

	if (!local) {
		// Send the dimensions to Parse along with the 'search' event
		//Parse.Analytics.track('read', dimensions);
	} else {
		//console.log(dimensions);
	}
	// ------------------ //

	createMessage(findResponseForAnswer(answer, questions[currentQuestion].answers), 0, 1);
}

function findResponseForAnswer (answer, possibleAnswers) { //responses
	//for (k = 0; k < numOfElements(possibleAnswers); k++) {
	for (key in possibleAnswers) {
		// console.log(k + " - " + responses[k][0] + " == " + answer);
		if ( answer.toLowerCase().match(key) ) {
			return possibleAnswers[key].replies;
		}
	}
	//console.log("!= " + answer);
	return possibleAnswers["default"].replies; // Default reponse
}

// Calculates the delay based on whatever string you give it
function calculateDelay (string) {
	// 275 words per minute in milliseconds plus a constant
	var delayPerWord = 218;
	var delay = string.split(" ").length * delayPerWord;
	delay = (delay < delayPerWord * 3) ? delay + 400 : delay;
	return delay;
}

function smoothScrollBottom () {
	$('html,body').animate({ scrollTop: $(document).height() }, 1000);
}

// Tabs

function tabHandler () {
	$tab = $('#menu ul li');
	$content = $('.content');
	$defaultTab = $('#chat');
	var animationOver = true;

	$defaultTab.addClass('active');
	$("#"+$defaultTab.attr('data-content')).addClass('activeContent');

	$tab.click(function(){
		// If Active when you click
		if (!$(this).hasClass('active')) {
			animationOver = false;
			var tabContent = "#"+$(this).attr('data-content');

			// Make tab active
			$tab.removeClass('active');
			$(this).addClass('active');

			// Remove old content
			if ($('.activeContent') != $(tabContent)) {
        		$('.activeContent').hide().removeClass('activeContent');
        	}

			// Make content active
			$(tabContent).show().addClass('activeContent');

			//Special case for chat
			if ($(".active").attr('id') == "chat") {
				smoothScrollBottom();
				$(".message").each(function(){
					$(this).removeClass('tada').removeClass('fadeInUp').addClass('fadeIn');
				});
			}

			//Special case for about
			if ($(".active").attr('id') == "about") {
				$('html,body').animate({ scrollTop: 0 }, 0);
			}
		}
	});
}




// })(); END GLOBAL

$(document).ready(function() {
	new storyController(questions);
	new tabHandler();
});
