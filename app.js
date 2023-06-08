const quizData = [
    {
        question: "What is the full form of SQL?",
        a:"Structured Query List",
        b:"Structure Query Language",
        c:"Sample Query Language",
        d:"None of these.",
        correct: "b",
    },
    {
        question: "Which of the following is not a valid SQL type?",
        a: "FLOAT",
        b: "NUMERIC",
        c: "DECIMAL",
        d:"CHARACTER",
        correct: "c",
    },
    {
        question: "Which of the following is not a DDL command?",
        a: "TRUNCATE",
        b: "ALTER",
        c: "CREATE",
        d: "UPDATE",
        correct: "d",
    },
    {
        question: "Which of the following are TCL commands?",
        a:"COMMIT and ROLLBACK",
        b:"UPDATE and TRUNCATE",
        c:"SELECT and INSERT",
        d:"GRANT and REVOKE",
        correct: "a",
    },
    {
        question: "SQL Views are also known as",
        a:"Simple tables",
        b:"Virtual tables",
        c:"Complex tables",
        d:"Actual Tables",
        correct: "b",
    },
    {
        question: "How many Primary keys can have in a table?",
         a:"Only 1",
         b:"Only 2",
         c:"Depends on no of Columns",
         d:"Depends on DBA",
        correct: "a",
    },
    {
          question:"Which of the following statement is true?",
           a:"TRUNCATE free the table space while DELETE does not.",
           b:"Both TRUNCATE and DELETE statements free the table's space.",
           c:"Both TRUNCATE and DELETE statement does not free the table's space.",
           d:"DELETE free the table space while TRUNCATE does not.",
        correct: "a",
    },

    {
        question:"Which of the following is also called an INNER JOIN?",
         a:"SELF JOIN",
         b:"EQUI JOIN",
         c:"NON-EQUI JOIN",
         d:"None of the above",
        correct: "b",
    },

    {
        question: "Which command is used to change the definition of a table in SQL?",
         a:"CREATE",
         b:"UPDATE",
         c:"ALTER",
         d:"SELECT",
        correct: "c",
    },
    {
        question:"A sequence in SQL can generate a maximum number:",
         a:"39 digits",
         b:"38 digits",
         c:"40 digits",
         d:"37 digits",
        correct: "b",
    },
    {
        question:"Which of the following is the correct order of a SQL statement?",
         a:"SELECT, GROUP BY, WHERE, HAVING",
         b:"SELECT, WHERE, GROUP BY, HAVING",
         c:"SELECT, HAVING, WHERE, GROUP BY",
         d:"SELECT, WHERE, HAVING, GROUP BY",
        correct: "b",
    },
    {
        question:"Which operator is used to compare the NULL values in SQL?",
         a:"Equal",
         b:"IN",
         c:"IS",
         d:"None of Above",
        correct: "c",
    },
    {
        question: "Which statement is used to get all data from the student table whose name starts with p?",
          a:"SELECT * FROM student WHERE name LIKE '%p%';",
          b:"SELECT * FROM student WHERE name LIKE 'p%';",
          c:"SELECT * FROM student WHERE name LIKE '_p%';",
          d:"SELECT * FROM student WHERE name LIKE '%p';",
        correct: "b",
    },
    {
        question: "Which of the following operator can be used with a multiple-row subquery?",

         a:"=",
         b:"BETWEEN",
         c:"NOT IN",
         d:"<>",
        correct: "c",
    },
    {
        question:"Which datatype can store unstructured data in a column?",
         a:"CHAR",
         b:"RAW",
         c:"NUMERIC",
         d:"VARCHAR",
        correct: "b",
    },
    {
        question:"Which of the following is not Constraint in SQL?",
         a:"Primary Key",
         b:"Not Null",
         c:"Check",
         d:"Union",
        correct: "d",
    },
    {
        question: "Which of the following is not a valid aggregate function?",
         a:"COUNT",
         b:"COMPUTE",
         c:"SUM",
         d:"MAX",
        correct: "b",
    },
    {
        question:"Which data manipulation command is used to combines the records from one or more tables?",
         a:"SELECT",
         b:"PROJECT",
         c:"JOIN",
         d:"PRODUCT",
        correct: "c",
    },
    {
        question:"What operator tests column for absence of data",
         a:"NOT Operator",
         b:"Exists Operator",
         c:"IS NULL Operator",
         d:"None of the above",
        correct: "c",
    },
    {
        question:"If we have not specified ASC or DESC after a SQL ORDER BY clause, the following is used by default",
         a:"DESC",
         b:"ASC",
         c:"There is no default value",
         d:"None of the mentioned",
        correct: "b",
    },


];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})