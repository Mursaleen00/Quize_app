var Quize_data = [
    {
        // 1
        question: "What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "High Tech Markup Language",
        c: "Home Tool Markup Language",
        d: "Hyperlink and Text Markup Language",
        correct: "a"
    },
    {
        // 2
        question: "Which tag is used to define the title of an HTML document?",
        a: "title",
        b: "head",
        c: "meta",
        d: "h1 /h1",
        correct: "a"
    },
    {
        // 3
        question: "What is the correct HTML tag for inserting a line break?",
        a: "br",
        b: "lb",
        c: "break",
        d: " ln /ln",
        correct: "a"
    },
    {
        // 4
        question: "Which HTML element is used to specify a footer for a document or section?",
        a: "footer",
        b: "section",
        c: "div",
        d: "nav",
        correct: "a"
    },
    {
        // 5
        question: "Which CSS property is used to change the background color of an element?",
        a: "background-color",
        b: "color",
        c: "text-color",
        d: "bg-color",
        correct: "a"
    },
    {
        // 6
        question: "What is the correct CSS syntax to select an element by its ID?",
        a: "#elementID",
        b: ".elementID",
        c: "elementID",
        d: "$elementID",
        correct: "a"
    },
    {
        // 7
        question: "Which CSS property is used to control the spacing between lines of text?",
        a: "line-height",
        b: "text-spacing",
        c: "letter-spacing",
        d: "line-spacing",
        correct: "a"
    },
    {
        // 8
        question: "What is JavaScript primarily used for?",
        a: "Adding interactivity to web pages",
        b: "Styling web pages",
        c: "Defining the structure of web pages",
        d: "Storing data on web servers",
        correct: "a"
    },
    {
        // 9
        question: "What does CSS stand for?",
        a: "Cascading Style Sheet",
        b: "Computer Style Sheet",
        c: "Creative Style Sheet",
        d: "Colorful Style Sheet",
        correct: "a"
    },
    {
        // 10
        question: "Which keyword is used to declare a variable in JavaScript?",
        a: "var",
        b: "let",
        c: "const",
        d: "int",
        correct: "a"
    },
    {
        // 11
        question: "What is the correct syntax for a function declaration in JavaScript?",
        a: "function myFunction() {}",
        b: "function = myFunction() {}",
        c: "myFunction() {}",
        d: "myFunction = function() {}",
        correct: "a"
    },
    {// 12
        question: "What is the result of the following JavaScript expression: '10' + 5?",
        a: "105",
        b: "15",
        c: "15",
        d: "NaN",
        correct: "a"
    },
    {
        // 13
        question: "Which HTML element is used to create a checkbox?",
        a: "checkbox /checkbox",
        b: "input type='checkbox' /input",
        c: "check",
        d: "input type='check'",
        correct: "a"
    },
    {
        // 14
        question: "Which attribute is used to specify the maximum number of characters allowed in an input field?",
        a: "maxlength",
        b: "maxchars",
        c: "size",
        d: "limit",
        correct: "a"
    },
    {
        // 15
        question: "Which CSS property is used to specify the width of an element's border?",
        a: "border-width",
        b: "border-style",
        c: "border-color",
        d: "border-size",
        correct: "a"
    },
    {
        // 16
        question: "What is the correct order of the CSS box model properties?",
        a: "margin, padding, border, content",
        b: "content, padding, margin, border",
        c: "border, padding, margin, content",
        d: "content, margin, border, padding",
        correct: "a"
    },
    {
        // 17
        question: "How do you call a function named 'myFunction' in JavaScript?",
        a: "call myFunction()",
        b: "myFunction.call()",
        c: "myFunction()",
        d: "function myFunction()",
        correct: "a"
    },
    {
        // 18
        question: "Which method is used to add an event listener to an element in JavaScript?",
        a: "addEventListener()",
        b: "attachEvent()",
        c: "addEvent()",
        d: "bindEvent()",
        correct: "a"
    },
    {
        // 19
        question: "What is the purpose of the 'return' statement in a JavaScript function?",
        a: "To stop the execution of the function",
        b: "To define the function's parameters",
        c: "To return a value from the function",
        d: "To declare local variables within the function",
        correct: "a"
    },
    {
        // 20
        question: "Which event is triggered when a user clicks on an HTML element?",
        a: "onclick",
        b: "onmouseover",
        c: "onkeydown",
        d: "onsubmit",
        correct: "a"
    },

];

var quiz = document.getElementById('quiz');
var answerEls = document.querySelectorAll(".answer");
var questionEls = document.getElementById('question');
var question_num = document.getElementById('question_num');
var a_text = document.getElementById('a_text');
var b_text = document.getElementById('b_text');
var c_text = document.getElementById('c_text');
var d_text = document.getElementById('d_text');
var submitbtn = document.getElementById('submit');

var currentquize = 0;
var score = 0;

loadQuize()

function loadQuize() {
    deselestAnsawers()

    const currentQuizeData = Quize_data[currentquize];

    questionEls.innerHTML = currentQuizeData.question
    question_num.innerHTML = currentquize + 1 + " / 20"
    a_text.innerHTML = currentQuizeData.a;
    b_text.innerHTML = currentQuizeData.b;
    c_text.innerHTML = currentQuizeData.c;
    d_text.innerHTML = currentQuizeData.d;
};

function deselestAnsawers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    var answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitbtn.addEventListener('click', () => {
    var answer = getSelected()
    if (answer) {
        if (answer === Quize_data[currentquize].correct) {
            score++
        }
        currentquize++
        if (currentquize < Quize_data.length) {
            loadQuize()
        } else {


            if (Math.round(score / currentquize * 100) < 70) {

                quiz.innerHTML = `<h2> You Answer ${score} / 20 Questions correctly <br> <br> 
                You Get ${Math.round(score / currentquize * 100)}% / 100% Sorry You Are Fail </h2>
                <button onclick="location.reload()">Reload</button>`

            }
            else if(Math.round(score / currentquize * 100) >= 70) {
                quiz.innerHTML = `<h2> You Answer ${score} / 20 Questions correctly <br> <br> 
                You Get ${Math.round(score / currentquize * 100)}% / 100%  Congratulations You Are a Success </h2>
                <button onclick="location.reload()">Reload</button>`
            }


        }
    }
})




