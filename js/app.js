(function(scs) {
    scs(window.jQuery, window, document);
    }(function($, window, document) {

        // `quizQuestions` is responsible for storing the underlying data
        // that our app needs to keep track of in order to work.
        //quizQuestions should have the question(s), the answer(s), the CORRECT answer with textual feedback 

        const quizQuestions = [
            {
              question: "On average, how many aluminum soda cans are used in the United States each year?",
              answers: {
                a: "5 billion",
                b: "70 billion",
                c: "80 billion", 
                d: "95 billion"
              },
              correctAnswer: "c",
              answerFeedback: "We use over 80 billion aluminum soda cans every year, which are recyclable, can be made into a variety of aluminum products."
            },
            {
              question: "How many gallons of motor gasoline does the average American consume in one year?",
              answers: {
                a: "150 gallons",
                b: "500 gallons",
                c: "610 gallons",
                d: "750 gallons"
              },
              correctAnswer: "b",
              answerFeedback: "The average American consumes approximately 500 gallons of gasoline per year. Carpooling & taking alternate means of transportation can help cut down on gasoline consumption!"
            },
            {
              question: "How long would it take for a glass bottle to decompose in a dump?",
              answers: {
                a: "250 years",
                b: "500 years",
                c: "3000 years",
                d: "4000 years"
              },
              correctAnswer: "d", 
              answerFeedback: "It will take the typical glass bottle 4000 years or more to decompose."
            },
            {
                question: "How much does the average American consume in paper, wood, and other products made from trees each year?",
                answers: {
                  a: "7 trees",
                  b: "9 trees",
                  c: "35 trees",
                  d: "50 trees"
                },
                correctAnswer: "a", 
                answerFeedback: " The average American uses seven trees a year in paper, wood, and other products made from trees. Throughout the United States this amounts to about 2 billion trees per year!"
            },
            {
                question: "What percentage of monetary purchasing goes to packaging materials",
                answers: {
                  a: "$1 for every $10 spent",
                  b: "$1 for every $50 spent",
                  c: "$1 for every $150 spent",
                  d: "$1 for every $500 spent"
                },
                correctAnswer: "a", 
                answerFeedback: "$1 out of every $10 spent at stores is for packaging. Packaging accounts for one-third of our waste by weight or half of our waste by volume."
            }
        ];

        
        function generateItemsString(quizQuestion) {
          console.log("Generating quiz question");

          return `On average, how many aluminum soda cans are used in the United States each year?`;
        }

        

        //Not sure if this function is even needed 
        function renderQuizApp() {
            // this function will be responsible for rendering the quiz app in the DOM
            console.log('`renderQuizApp` ran');
            const quizQuestionString = generateItemsString(quizQuestions);

            // insert that HTML into the DOM
            $('.quiz-screen__question').html(quizQuestionString);
        }

        function startQuizApp() {
            //responsible for when an user clicks a button to start the quiz
            console.log('`startQuizApp` ran');

            //on button click, hide start screen
            //show first question

            $("#start-button").click(function(event) {
              event.preventDefault();
              
              $("#quiz-screen-intro").hide();
              $("#quiz").show();

              /*$("#quiz").show().animate({
                opacity: 1
              }, 500);*/
            });
        }

        function handleQuizQuestions(quizQuestions) {
            //responsible for user answering one question at a time 
            //should not be able to skip questions 

            //how to dynamically put quiz questions and answer choices into div from array
            //console.log(quizQuestions);

            console.log('`handleQuizQuestions` ran');
        }

        function quizAppProgress() {
            //responsible for letting the user know what question they are on
            // i.e. Question: 2/5

            //Need a loop to add +1 and stop at 5 

            console.log('`quizAppProgress` ran');
        }

        function currentQuizScore() {
            //responsible for letting the user know what their CURRENT score is
            //i.e. Score: 2

            currentScore = 0;
            //need to add +1 if question is answered correctly 

            console.log('`currentQuizScore` ran');
        }

        function onUserAnswerSubmission() {
            //responsible for giving textual feedback about their answer. 
            //If incorrect, they should be told the correct answer.
            //user should also be able to move onto the next question

            console.log('`onUserAnswerSubmission` ran');
        }
        
        function overallQuizScore() {
            //responsible for displaying how many questions the user got right 
            //out of total questions asked
            //i.e. You got x out of 5 right! 

            console.log('`overallQuizScore` ran');
        }

        function restartQuizApp() {
            //responsible for when an user wants to start a new quiz
            console.log('`restartQuizApp` ran');
        }

        // this function will be our callback when the page loads.
        function handleQuizApp() {
            renderQuizApp();
            startQuizApp();
            handleQuizQuestions(quizQuestions);
            quizAppProgress();
            currentQuizScore();
            onUserAnswerSubmission();
            overallQuizScore();
            restartQuizApp();
        }

        // when the page loads, call `handleShoppingList`
        $(handleQuizApp);
    })
);