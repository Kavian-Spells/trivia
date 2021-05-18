class APIController {
    constructor(url) {
        this.url = url
    }

    getData() {
        return axios(this.url) // fetch data using axios
    }
}

class UIController extends APIController {
    constructor(url) {
        super(url)
    }

    async questions() {
        // waits for the promise to resolve
        // async & await means that you are dealing with a promise
            const questions = await this.getData().then((response) => {
                return response.data;
            })  
       
        this.renderQuestions(questions.results) // an array from the api
    }

    renderQuestions(questions) {
        //place something on the interface
        
        const questionList = questions.map((question) => {
            return`
            <div>${question.question}</div>
            `; // objects
        })
        $('#content').html(questionList)
    }
}

$('#start').click(function () {
    // Object
    new UIController('https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple').questions();
  })

$(document).ready(() => {
    console.log('jQuery is ready to go!');
});

const $container = $('<div></div>');

// const $startButton = $('<button></button>', {
//     text: 'Start Game'
// })

// $(document.body).append($startButton);
//     $startButton.on('click', event => {
//         console.log('You clicked!');
// });

$('button').click(function () {
    if ($(this).text() == 'Show') {
        $('h1').show();
    } else if ($(this).text() == 'Hide') {
        $('h1').hide();
    }
  })