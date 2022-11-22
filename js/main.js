// Local storage variables
// selected_questionlist_name is a string specifying the question list to load in the question page e.g. L2_Calculus_2021. This is saved when the user clicks a question list on the home page.
// selected_question_number is an integer to keep track of the actively selected question on the quetsion page. This defaults to zero each time a question list is selected.
// all_questions_correct_flag is an array of integers where the index corresponds to a question ID. If the value is 1 the user said they got the question correct, -1 incorrect, and 0 not answered yet.
// subject_selection is an array of strings conatining subject names such as ["L3_Calculus", "L3_Statistics"] so the users homepage only shows these subjects.


// question_img = ID for unrestricted Google Drive share link
// hint_img = ID for unrestricted Google Drive share link
// answer_img = ID for unrestricted Google Drive share link
// video_answer_link = ID for YouTube link
// difficulty = depends on past exam question. Usually Achieved, Merit, or Excellence
// topics = array of topics relevant to the question.
// origin = where the question comes from e.g. NCEA Past Exam - Level 3 - Calculus - 2022 - Question 1ai
// question_ID = ID number of the question = index in array of questionlist

const questionlist = [
      {
        "question_img":"17gClUWxkXarB-dYkfFZo2hTkjW3K6NR3",
        "hint_img":"",
        "answer_img":"1rXeA7vwug3NVZ6aQRsCd6m9jO_Lc_yZ9",
        "video_answer_link":"tgbNymZ7vqY",
        "difficulty":"Achieved",
        "topics":["differentiation","gradient"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2021 - Question 1a",
        "question_ID":0,
      },
      {
        "question_img":"1k0iwj90gxDyp-sxtRAceFTre0oBUw9nK",
        "hint_img":"",
        "answer_img":"14U0MAR94iXnp93S320IJwSKDnD9U2LUm",
        "video_answer_link":"tgbNymZ7vqY",
        "difficulty":"Merit",
        "topics":["differentiation","gradient", "tangent"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2021 - Question 1b",
        "question_ID":1,
      },
      {
        "question_img":"1y5nsWDa7OZhzftkJVG29MMv1W67zoKzc",
        "hint_img":"",
        "answer_img":"1qbvZtevRVRaTDTa_obN9TyzACwOLmJfP",
        "video_answer_link":"tgbNymZ7vqY",
        "difficulty":"Excellence",
        "topics":["differentiation","gradient", "application"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2021 - Question 1c",
        "question_ID":2,
      },
      {
        "question_img":"1jMHTde0xAeG9KHetA30JWuHtyJJqflK5",
        "hint_img":"",
        "answer_img":"1-mGKOC9yvf_lAYSq9-mmJGdMRgBQvMIR",
        "video_answer_link":"tgbNymZ7vqY",
        "difficulty":"Merit",
        "topics":["differentiation","gradient", "sketch"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2021 - Question 2a",
        "question_ID":3,
      },
      {
        "question_img":"1w_Ak61_oWGAVE9vgSyriRaSAUol9EzbN",
        "hint_img":"",
        "answer_img":"1tmhK6Tb3ATwwbpc50VpoapXLauR5ufjJ",
        "video_answer_link":"tgbNymZ7vqY",
        "difficulty":"Merit",
        "topics":["differentiation","gradient"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2021 - Question 2b",
        "question_ID":4,
      },
      {
        "question_img":"1Wm1aNFUIAWqjwKuss04FHRzKxfIL3-_0",
        "hint_img":"",
        "answer_img":"1hfX5JU0mbyB4_2klyapBq2ov6Z9Unk1_",
        "video_answer_link":"tgbNymZ7vqY",
        "difficulty":"Excellence",
        "topics":["integration", "kinematics"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2021 - Question 2c",
        "question_ID":5,
      },
      {
        "question_img":"1qJdg2QNg1UYJPRb64j5r0Ze6PQH30rRj",
        "hint_img":"",
        "answer_img":"1-PcPAq_ozhap73Gv1q8L3_1RiePbxKDy",
        "video_answer_link":"tgbNymZ7vqY",
        "difficulty":"Merit",
        "topics":["integration"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2021 - Question 3a",
        "question_ID":6,
      },
      {
        "question_img":"1EBM98Mw95VSrC9X6w3nREjRZjz-ZFoAY",
        "hint_img":"",
        "answer_img":"1RHzSJQAQPELMzTITC2_LraysmKSCQu4Q",
        "video_answer_link":"tgbNymZ7vqY",
        "difficulty":"Achieved",
        "topics":["integration","kinematics"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2021 - Question 3b",
        "question_ID":7,
      },
      {
        "question_img":"1KAhvUAFDWtdyB_tyZ9lO2I6G4u3mDjDE",
        "hint_img":"",
        "answer_img":"18vsCRNmialZMXBWFF1gMe0QEgwZjKOCl",
        "video_answer_link":"tgbNymZ7vqY",
        "difficulty":"Merit",
        "topics":["integration","sketch"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2021 - Question 3c",
        "question_ID":8,
      },
      {
        "question_img":"1-c4yKJA9oWwmUbTbeUd1EB97Dtsda_bz",
        "hint_img":"",
        "answer_img":"1ImMvqUV0BFIFThVJzby9BHAXSMG9xVyq",
        "video_answer_link":"tgbNymZ7vqY",
        "difficulty":"Excellence",
        "topics":["optimisation", "proof"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2021 - Question 3d",
        "question_ID":9,
      }
  ]



// Question Lists
// Level - Standard 
// Ex. Level 2 Calculus question list
const all_questionlists = {
  "L2_Calculus_2021": [0,1,2,3,4,5,6,7,8,9],
  "L2_Calculus_2020": [0,1,2,3],
  "L2_Calculus_2019": [0,1,2,3],
  "L2_Calculus_2018": [0,1,2,3],
  "L2_Calculus_2017": [0,1,2,3],
  "L2_Calculus_2016": [0,1,2,3],
  "L2_Calculus_2015": [0,1,2,3],
  "L2_Calculus_2014": [0,1,2,3],
  "L2_Calculus_2013": [0,1,2,3],

  "L2_Calculus_Achieved": [0,7],
  "L2_Calculus_Merit": [1,3,4,6,8],
  "L2_Calculus_Excellence": [2,5,9],

  "L2_Calculus_Kinematics": [7,5],
  "L2_Calculus_Optimisation": [9],
  "L2_Calculus_Differentiation": [4,3,2,1,0],
  "L2_Calculus_Gradient": [4,3,2,1,0],
  "L2_Calculus_Tangent": [0,1],
  "L2_Calculus_Integration": [8,7,6,5],
  "L2_Calculus_Sketch": [8,3],

}

var all_questions_correct_flag = [0,0,0,1,1,-1,0,0,-1,0]

// TO DO: store question correct flag in local storage
// let all_questions_correct_flag = new Array(questionlist.length())
// for (var i = 0; i < questionlist.length(); i++) questionlist.length()[i] = 0;


let selected_questionlist = []

onload = (initLoadQuestions)

// on page load, load all questions, navbar, and render question 0
function initLoadQuestions(){
  loadQuestions()
  updateQuestion(0)
}

// Creates question number nav bar with onclick event to update the question for its position in the filtered question list.
function loadQuestions(){
  var selected_questionlist_name = localStorage['selected_questionlist_name'] || 'None';
  selected_questionlist = all_questionlists[selected_questionlist_name] 

  // update navbar heading
  document.getElementById("question_list_title").innerHTML = selected_questionlist_name.replace(new RegExp(/_/g), ' ');

  // update navbar items with html
  question_nav_html = ""
  for (let i = 0; i < selected_questionlist.length; i++) {
    var question_number_colour = ""
    // If question has not been marked as correct or incorrect, no background
    question_number_colour = "\">"

    // If question has been marked as correct, render it green
    if (all_questions_correct_flag[selected_questionlist[i]]==1){
      question_number_colour = "bg-success\">"
    } 
    // If question has been marked as incorrect, render it red
    else if (all_questions_correct_flag[selected_questionlist[i]]==-1) {
      question_number_colour = "border border-secondary\">"
    }


    // Render the active question
    var selected_question_number = localStorage.getItem('selected_question_number')
    var active_class = ""
    if (selected_question_number == i){
      active_class = "active "
    }

    question_nav_html += "<li class=\"nav-item rounded-circle " + active_class + question_number_colour + "<a class=\"nav-link\" onclick=\"updateQuestion(" + i + ")\" href=\"#\">" + i + "</a></li>";

  }      
  document.getElementById("question_nav").innerHTML = question_nav_html
}


// questionID is the index of a question from a given selected question list. Convert it to the question index in master question list then render it.
function updateQuestion(questionID){
  console.log(questionID)
  localStorage.setItem('selected_question_number', questionID);
  let questiondata = questionlist[selected_questionlist[questionID]]
  document.getElementById("question").innerHTML = "<img src=https://drive.google.com/uc?export=view&id=" + questiondata.question_img + " class=\"img-fluid\">"
  document.getElementById("hint").innerHTML = "<img src=https://drive.google.com/uc?export=view&id=" + questiondata.hint_img + " class=\"img-fluid\">"
  document.getElementById("answer").innerHTML = "<img src=https://drive.google.com/uc?export=view&id=" + questiondata.answer_img + " class=\"img-fluid\">"
  document.getElementById("video_solution").innerHTML = "<iframe width=100% height=\"720\"  src=\"https://www.youtube.com/embed/" + questiondata.video_answer_link + "\"></iframe>"
  
  let topicdata = ""
  for (let i = 0; i< questiondata.topics.length; i++){
    topicdata += questiondata.topics[i] + " - "
  }
  document.getElementById("question_details").innerHTML = "<p>Difficulty: " + questiondata.difficulty + "</p><p>Topics: "+ topicdata + "</p><p>Origin: " + questiondata.origin + "</p><p>Question ID: " + questiondata.question_ID + "</p"  
  loadQuestions()

}

// Stores the selected question list in local storage for access by loadQuestions function. 
// This value is selected when the user clicks on a link such as L2 Calculus -> Calculus -> Achieved
// It then loads the question page
function updateQuestionPage(selected_questionlist_name){
  localStorage['selected_questionlist_name'] = selected_questionlist_name; 
  localStorage['selected_question_number'] = 0; 
  window.location="pastexamquestion.html"
}



// When Incorrect or Correct button is pressed the currently selected question is updated in the navbar 
// to either green for correct or grey border for incorrect
function setCurrentQuestionIncorrect(){
  var selected_questionlist_name = localStorage['selected_questionlist_name'] || 'None';
  selected_questionlist = all_questionlists[selected_questionlist_name] 
  all_questions_correct_flag[selected_questionlist[localStorage.getItem('selected_question_number')]]=-1;
  loadQuestions();
}

function setCurrentQuestionCorrect(){
  var selected_questionlist_name = localStorage['selected_questionlist_name'] || 'None';
  selected_questionlist = all_questionlists[selected_questionlist_name] 
  all_questions_correct_flag[selected_questionlist[localStorage.getItem('selected_question_number')]]=1;
  loadQuestions();
}

