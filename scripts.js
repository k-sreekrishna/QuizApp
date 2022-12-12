const questions = [
    {
        title: ' In SQL, relations can contain null values, and comparisons with null values are treated as unknown. \
        Suppose all comparisons with a null value are treated as false. Which of the following pairs is not equivalent?',
        options: [
            'x = 5, not (not (x = 5)',
            ' x = 5, x > 4 and x < 6, where x is an integer ',
            'x < 5, not(x = 5)',
            'None of the above'
        ],
        answer: 3,
    },
    {
        title: 'Which of the following are components of Central Processing Unit (CPU) ?',
        options: [
            'Arithmetic logic unit, Mouse',
            'Arithmetic logic unit, Control unit',
            'Arithmetic logic unit, Integrated Circuits',
            'Control Unit, Monitor'
        ],
        answer: 1
    },
    {
        title: "Let r be a root of the equation x**2 + 2x + 6 = 0. Then the value of the expression (r + 2)(r + 3)(r + 4)(r + 5) is ",
        options: [
            '51',
            '-51',
            '126',
            '-126'
        ],
        answer:4
    },
    {
        title: "Which one of the following facilitates transfer of bulk data from hard disk to main memory with the highest throughput?",
        options: [
            'DMA based I/O transfer',
            'Interrupt driven I/O transfer',
            'Polling based I/O transfer',
            'Programmed I/O transfer'
        ],
        answer:1
    },
    {
        title: "12 * 3",
        options: [
            '34',
            '33',
            '36',
            '78'
        ],
        answer:3
    },
    {
        title: "38 + 3",
        options: [
            '40',
            '41',
            '33',
            '32',
        ],
        answer:2
    }
];

function showQuestions() {
    const list = document.getElementsByClassName('app-body')[0];
    const template = document.getElementsByTagName('template')[0];
    for (let i = 0; i < questions.length; i++) {
        const item = template.content.cloneNode(true);
        item.querySelector('.title').innerText = questions[i].title;
        for (let opt = 0; opt < 4; opt++) {
            item.querySelector(`.inp-op${opt + 1}`).setAttribute('name', `q${i + 1}`);
            item.querySelector(`.op${opt + 1}`).innerText = questions[i].options[opt];
        }
        list.append(item);
    }
}
showQuestions();

const button = document.getElementById('submit');
button.addEventListener('click', () => {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
        if (document.getElementsByName(`q${i + 1}`)[questions[i].answer - 1].checked) {
            score++;
        }
    }
    var final = document.getElementById('final-score');
    final.innerHTML += " " + score + "/" + questions.length;
    document.getElementsByClassName('app-body')[0].style.display = 'none';
    button.style.display = "none";
    final.style.display = "block";
});