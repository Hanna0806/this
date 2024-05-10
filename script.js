'use strict'
const answers = ['1', "2", "3"]
answers.sort(() => Math.random() - 0.5)

const cards = [{
        input: document.querySelector('.input1'),
        btn: document.querySelector('.btn1'),
        imgGoodCat: document.querySelector('.good-cat1'),
        imgAngryCat: document.querySelector('.angry-cat1'),
    },
    {
        input: document.querySelector('.input2'),
        btn: document.querySelector('.btn2'),
        imgGoodCat: document.querySelector('.good-cat2'),
        imgAngryCat: document.querySelector('.angry-cat2'),
    },
    {
        input: document.querySelector('.input3'),
        btn: document.querySelector('.btn3'),
        imgGoodCat: document.querySelector('.good-cat3'),
        imgAngryCat: document.querySelector('.angry-cat3'),
    },
]
// console.log(cards[0].imgGoodCat);
// console.log(cards[0].imgAngryCat);

// let count = 0

const handlerCheckAnswer = function(index) {
    if (this.input.value === answers[index]) {
        this.input.disabled = true
        this.btn.disabled = true
        this.imgGoodCat.style.display='block'
        // count++
        // if (count === 3) {
        //     // alert('Вы ответили правильно')
        //     // window.location.href = 'https://google.com'
        //     this.imgGoodCat.style.display='block'
        // }
    } else {
        this.input.value = ''
        // alert('Ответ неверный, попробуйте угадать 1, 2 или 3')
        this.imgAngryCat.style.display='block'
    }
}


cards
    .forEach((card, index) => {
        card.btn.addEventListener('click', handlerCheckAnswer.bind(card, index))
    })