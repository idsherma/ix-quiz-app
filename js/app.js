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
            correctAnswer: "80 billion",
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
            correctAnswer: "500 gallons",
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
            correctAnswer: "4000 years", 
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
              correctAnswer: "7 trees", 
              answerFeedback: " The average American uses seven trees a year in paper, wood, and other products made from trees. Throughout the United States this amounts to about 2 billion trees per year!"
          },
          {
              question: "What percentage of monetary purchasing goes to packaging materials?",
              answers: {
                a: "$1 for every $10 spent",
                b: "$1 for every $50 spent",
                c: "$1 for every $150 spent",
                d: "$1 for every $500 spent"
              },
              correctAnswer: "$1 for every $10 spent", 
              answerFeedback: "$1 out of every $10 spent at stores is for packaging. Packaging accounts for one-third of our waste by weight or half of our waste by volume."
          }
      ];

      let currentQuestion = 0;
      let numCorrect = 0;
      let totalNumQuestions = quizQuestions.length; 
      
      function generateItemsString() {

        var quizQuestionContent = [];

        quizQuestions.forEach(function (quizQuestion, index) {
 
          quizQuestionContent.push(
            `<form class="form" id="myform">
                <h2 class="quiz-screen__question">${quizQuestion.question}</h2>
                <div class="inputGroup">
                  <input id="${quizQuestion.answers.a}" name="radio" type="radio" value="${quizQuestion.answers.a}"/>
                  <label for="${quizQuestion.answers.a}">${quizQuestion.answers.a}</label>
                </div>
                <div class="inputGroup">
                  <input id="${quizQuestion.answers.b}" name="radio" type="radio" value="${quizQuestion.answers.b}"/>
                  <label for="${quizQuestion.answers.b}">${quizQuestion.answers.b}</label>
                </div>
                <div class="inputGroup">
                  <input id="${quizQuestion.answers.c}" name="radio" type="radio" value="${quizQuestion.answers.c}"/>
                  <label for="${quizQuestion.answers.c}">${quizQuestion.answers.c}</label>
                </div>
                <div class="inputGroup">
                  <input id="${quizQuestion.answers.d}" name="radio" type="radio" value="${quizQuestion.answers.d}"/>
                  <label for="${quizQuestion.answers.d}">${quizQuestion.answers.d}</label>
                </div>
            </form>`
          );
        });
        
        return `${quizQuestionContent[currentQuestion]}`;
      }

      function renderQuizApp() {
          // this function will be responsible for rendering the quiz app in the DOM
          console.log('`renderQuizApp` ran');
          const quizQuestionString = generateItemsString();

          // insert that HTML into the DOM
          $('#quiz__content').html(quizQuestionString);
          //document.getElementById('myform').reset();
          //restartQuizApp();
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

      function quizAppProgress() {
          //responsible for letting the user know what question they are on
          $("#questionNumber").html(currentQuestion+1);
          console.log('`quizAppProgress` ran');
      }

      function onNextClick() {
        $("#next").click(function(event) {
          event.preventDefault();

          $(".quiz__content-wrapper").show();
          $("#quiz-feedback").hide();
          
          currentQuestion+=1; 

          resultScreen();
          quizAppProgress();
          renderQuizApp();
        });
      }

      function resultScreen() {
        if(currentQuestion === totalNumQuestions) {
          //go to result screen
          $("#quiz, #quiz-feedback, .quiz__content-wrapper").hide();
          $("#final-results").show();

          // show number of correct answers out of total
          $(".quiz-screen__results").html(numCorrect + ' out of ' + totalNumQuestions);
          return;
        }
      }

      function onUserAnswerSubmission() {
          //responsible for giving textual feedback about their answer. 
          //If incorrect, they should be told the correct answer.
          //user should also be able to move onto the next question.
          $("#submit").click(function(event) {
            event.preventDefault();

            let userAnswer = $("input:checked").val();
            //console.log(userAnswer);

            if (userAnswer === undefined) {
              alert("Please answer the question!");
              return;
            } else if (userAnswer === quizQuestions[currentQuestion].correctAnswer) {

              $(".quiz-screen__answer-header").html('Correct!');

              //Score will update +1 if answer is correct
              $("#scoreNumber").html(numCorrect+=1);

            } else {
              $(".quiz-screen__answer-header").html('Incorrect!');
            }

            $(".quiz-screen__answer-copy").html(quizQuestions[currentQuestion].answerFeedback);
            $(".quiz__content-wrapper").hide();
            $("#quiz-feedback").show();
          });


          onNextClick();

          console.log('`onUserAnswerSubmission` ran');
      }

      function resetQuiz() {
          numCorrect = 0;
          currentQuestion = 0;
          quizQuestions.length = 0;


          /*might not need this one quiz q's are fixed*/
            $("#questionNumber").html(currentQuestion+1);
            $("#scoreNumber").html(numCorrect);
            $('#quiz__content').html("");
            $(".quiz__content-wrapper").show();

      }

      function restartQuizApp() {
          //responsible for when an user wants to start a new quiz
          console.log('`restartQuizApp` ran');
          $("#restart").click(function(event) {

            event.preventDefault();
            $("#final-results").hide();
            $("#quiz-screen-intro").show();
            resetQuiz();

            //document.getElementById('myform').reset();
          });
      }

      // this function will be our callback when the page loads.
      function initQuiz() {
          renderQuizApp();
          startQuizApp();
          quizAppProgress();
          onUserAnswerSubmission();
          restartQuizApp();
      }

      // when the page loads, call `initQuiz`
      $(initQuiz);
  })
);