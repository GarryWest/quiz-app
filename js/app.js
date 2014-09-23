$(document).ready(function(){

	// Answer Object
	function Answer(answerText,answerCorrect,answerImage,imageDescription){
		this.answerText = answerText;
		this.answerCorrect = answerCorrect;
		this.answerImage = answerImage;
		this.imageDescription = imageDescription;
	};

	// Question objet, contains an array of answers
	function Question(questionText,answerArray){
		this.questionText = questionText;
		this.answerArray = answerArray;
	};

	// Quiz object, contains an array of questions
	function Quiz(){
		this.questionArray = [];
		this.answerDisplayed = true;
		this.selectedAnswer = "";
		this.selectedListItem = "";
		this.currentQuestion = -1;
		var currentImage = "";
		var currentDescription = "";
		var correctAnswer = "";
		var correctAnswers = 0;
		this.numQuestions = 0;

		this.addQuestion = function(question){
			this.questionArray.push(question);
			this.numQuestions ++;
		};
		// Display the question and answers
		this.displayQuestion = function(){
			this.currentQuestion++;
				var arrayItem = this.questionArray[this.currentQuestion];
				console.log(arrayItem);
				// Display the current question
				var questionText = "Question " + (this.currentQuestion+1) + " of " + this.numQuestions + ": " + arrayItem.questionText;
				$(".question").text(questionText);
				var questionAnswer = arrayItem.answerArray;
				// Display answers
				$(".list-group-item").remove();
				for (j=0;j<questionAnswer.length;j++){
					var answer = questionAnswer[j];
   					var my_item = $('<li class="list-group-item"><input type="checkbox" class="checkbox-answer">' + answer.answerText + '</li>');
   					$(".list-group").append(my_item);
   					if (answer.answerCorrect){
   						correctAnswer = answer.answerText;
   						currentImage = answer.answerImage;
   						currentDescription = answer.imageDescription;
   					};
					console.log(answer);
				};
				$(".btn").text("Submit Answer");
				this.answerDisplayed = false;
		};

		// Display the correct answer
		this.displayAnswer = function(){
			// Disable checkboxes
			$(".checkbox-answer").attr("disabled", "disabled");

			if (this.selectedAnswer == correctAnswer) {
				currentDescription = "You are Correct! "+currentDescription;
				correctAnswers ++;
				this.selectedListItem.addClass('list-group-item-success');
			} else {
				currentDescription = "Wrong answer! You should have picked "+correctAnswer+". "+currentDescription;
				this.selectedListItem.addClass('list-group-item-danger');
			};
			$(".image").attr('src',currentImage);
			$(".banner").text(currentDescription);
			if (quiz.currentQuestion+1 >= quiz.numQuestions){
				$(".question").text('Quiz Complete! Click the button for your score.');
				$(".btn").text("Get Score");
			} else {
				$(".question").text("Click the button for the next question.");
				$(".btn").text("Next Question");
			};
			this.answerDisplayed = true;
			this.selectedAnswer = "";
		};

		// Display the score
		this.displayScore = function() {
			$(".image").attr('src','images/bird-motif.gif');
			var txt = "Congratulations, you scored "+correctAnswers+" out of "+this.numQuestions+" correctly!";
			var rank = "";
			var percent = (correctAnswers / this.numQuestions)*100;
			if (percent == 100) {
				rank = " Perfect Score!!";
			} else {
				if (percent >= 80) {
					rank = " Rank: Seasoned Birder!!";
				} else {
					if (percent >= 50){
						rank = " Rank: Backyard Amateur";
					} else {
						rank = " Rank: Strictly Bush-League";
					};
				};
			};
			txt = txt + rank;
			$(".banner").text(txt);
			$(".answer-div").remove();
			$(".question").text("");
		};
	};

	var a=0;
	var b=1;
	var c=2;
	var d=3;

	var randomize = function(){
		// randomize a,b,c,d - to move the answers around
		var numArray = [0,1,2,3,0,1,2]
		var testNum = Math.floor((Math.random() * 4));
		a = numArray[testNum];
		b = numArray[testNum+1];
		c = numArray[testNum+2];
		d = numArray[testNum+3];
	};

	var quiz = new Quiz();
	
	// Populate quiz data - To be done from file/database when I learn how :)
	var answerArray = [];
	randomize(a,b,c,d);
	answerArray[a] = new Answer(" Ostrich",true,"images/ostrich.gif","A flightless bird, the ostrich can run rapidly with its wings outstretched.");
	answerArray[b] = new Answer(" Starling",false,"","");
	answerArray[c] = new Answer(" Sparrow",false,"","");
	answerArray[d] = new Answer(" Snipe",false,"","");

	var question = new Question("Which bird below is not native to Europe?",answerArray);
	quiz.addQuestion(question);

	var answerArray = [];
	randomize(a,b,c,d);
	answerArray[a] = new Answer(' Turkey',true,'images/turkey.gif','Franklin stated, "I am on this account not displeased that the Figure is not known as a Bald Eagle, but looks more like a Turkey. For in Truth the Turkey is in Comparison a much more respectable Bird, and withal a true original Native of America."');
	answerArray[b] = new Answer(" Ostrich",false,"","");
	answerArray[c] = new Answer(" Pigeon",false,"","");
	answerArray[d] = new Answer(" Bald Eagle",false,"","");

	var question = new Question("This bird was Benjamin Franklin's first choice for national bird:",answerArray);
	quiz.addQuestion(question);

	var answerArray = [];
	randomize(a,b,c,d);
	answerArray[a] = new Answer(' Dodo',true,'images/dodo.gif','Mauritius was the home of the now extinct dodo bird. The last bird was killed in 1681.');
	answerArray[b] = new Answer(" Cardinal",false,"","");
	answerArray[c] = new Answer(" Catbird",false,"","");
	answerArray[d] = new Answer(" Cooper's Hawk",false,"","");

	var question = new Question("Which of these birds is extinct?",answerArray);
	quiz.addQuestion(question);

	var answerArray = [];
	randomize(a,b,c,d);
	answerArray[a] = new Answer(' Flying Fish',true,'images/flying-fish.gif','The Flying Fish is enabled to fly by having fins which approach in extent the wings of a bird');
	answerArray[b] = new Answer(" Canary",false,"","");
	answerArray[c] = new Answer(" Catbird",false,"","");
	answerArray[d] = new Answer(" Penguin",false,"","");

	var question = new Question("Which of these is not actually a bird?",answerArray);
	quiz.addQuestion(question);

	var answerArray = [];
	randomize(a,b,c,d);
	answerArray[a] = new Answer(' Grouse',true,'images/grouse.gif','After the turkey, the grouse is the largest game bird in the U.S.');
	answerArray[b] = new Answer(" Pheasant",false,"","");
	answerArray[c] = new Answer(" Quail",false,"","");
	answerArray[d] = new Answer(" Partridge",false,"","");

	var question = new Question("After the turkey, which of these is the second largest game bird in the U.S.?",answerArray);
	quiz.addQuestion(question);

	var answerArray = [];
	randomize(a,b,c,d);
	answerArray[a] = new Answer(' Rhea',true,'images/rhea.gif','A flightless bird, the rhea is closely related to the ostrich');
	answerArray[b] = new Answer(" Sparrow",false,"","");
	answerArray[c] = new Answer(" Mongoose",false,"","");
	answerArray[d] = new Answer(" Great Horned Owl",false,"","");

	var question = new Question("Which of these is related to the ostrich?",answerArray);
	quiz.addQuestion(question);

	var answerArray = [];
	randomize(a,b,c,d);
	answerArray[a] = new Answer(' Humming Bird',true,'images/hummingbird.gif','The calliope hummingbird is the smallest bird species in North America and measures just 3 inches long. The bee hummingbird is the smallest species and measures 2.25 inches long.');
	answerArray[b] = new Answer(" Wren",false,"","");
	answerArray[c] = new Answer(" Nuthatch",false,"","");
	answerArray[d] = new Answer(" Indigo Bunting",false,"","");

	var question = new Question("Which is the smallest bird in the world?",answerArray);
	quiz.addQuestion(question);

	var answerArray = [];
	randomize(a,b,c,d);
	answerArray[a] = new Answer(' Peregrine Falcon',true,'images/peregrine-falcon.gif','The peregrine is renowned for its speed, reaching over 322 km/h (200 mph) during its characteristic hunting stoop (high speed dive), making it the fastest member of the animal kingdom');
	answerArray[b] = new Answer(" Red-tailed Falcon",false,"","");
	answerArray[c] = new Answer(" Nuthatch",false,"","");
	answerArray[d] = new Answer(" Indigo Bunting",false,"","");

	var question = new Question("Which is the fastest bird in the world?",answerArray);
	quiz.addQuestion(question);

	var answerArray = [];
	randomize(a,b,c,d);
	answerArray[a] = new Answer(' House Sparrow',true,'images/house-sparrow.gif','The house sparrow is a small bird, nowadays common in all continents (except Antarctica).  House Sparrows originate in Middle East but spread or have been introduced to other parts of the world.');
	answerArray[b] = new Answer(" Blue Jay",false,"","");
	answerArray[c] = new Answer(" Cardinal",false,"","");
	answerArray[d] = new Answer(" Robin",false,"","");

	var question = new Question("Which is the most common bird?",answerArray);
	quiz.addQuestion(question);

	var answerArray = [];
	randomize(a,b,c,d);
	answerArray[a] = new Answer(' Wandering Albatross',true,'images/wandering-albatross.gif','Although the largest confirmed report was around 12 feet, there have been accounts of Wandering Albatross wingspans as large as 17 feet across. Such long wings enable these birds to glide effortlessly over the ocean for hours at a time without flapping its wings.');
	answerArray[b] = new Answer(" Black Vulture",false,"","");
	answerArray[c] = new Answer(" Turkey Vulture",false,"","");
	answerArray[d] = new Answer(" California Condor",false,"","");

	var question = new Question("Which bird has the longest wing-span?",answerArray);
	quiz.addQuestion(question);

	// Begin Quiz
	quiz.displayQuestion();

	/*Display next question or answer or score*/
  	$(".btn").click (function(){
  		if (quiz.answerDisplayed) {
	  			if (quiz.currentQuestion+1 >= quiz.numQuestions){
  					quiz.displayScore();
  				} else {
	    			quiz.displayQuestion();
	    			$(".btn").attr("disabled", true);
	    		};
	    } else {
	    	quiz.displayAnswer();
	    };
  	});

	/*Handle the checkboxes */
  	$(document).on('click', ".checkbox-answer", function(){
    	$(".checkbox-answer").not(this).attr("checked", false);
    	var txt = $(this).parent().text();
    	quiz.selectedAnswer = txt;
    	quiz.selectedListItem = $(this).parent();
		$(".btn").attr("disabled", false);
	});


});