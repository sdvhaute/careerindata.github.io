// Start Dark/Light mode slides

const slider = document.querySelector('.slider');
const outer = document.querySelector('.outer-box');
const inner = document.querySelector('.inner-circle');

const body = document.querySelector('body');
const nav = document.querySelector('nav');
const contentReverses = document.querySelectorAll('.content-block');

slider.addEventListener('click', function () {
    body.classList.toggle('dark');

    contentReverses.forEach((contentReverse) => {
        contentReverse.classList.toggle('dark-reversed');
        contentReverse.classList.toggle('light-reversed');
    })


    if (body.classList.contains('dark')) {
        inner.style.left = '37px';
        nav.style.color = 'var(--bgcolor1)';
        nav.style.backgroundColor = 'var(--colortext)';
        nav.style.borderColor = 'var(--bgcolor1)';
    } else {
        inner.style.left = '15px';
        nav.style.color = 'var(--colortext)';
        nav.style.backgroundColor = 'var(--bgcolor1)';
        nav.style.borderColor = 'var(--colortext)';
    }

})


// Thank you message after email submission 
const homeCards = document.querySelectorAll('.home-card');
const joinButton = document.querySelector('.submitbox');

joinButton.addEventListener('click', () => {
    homeCards.forEach(card => {
        card.classList.toggle('active');
    })

})

// Close homecard popup message
const closeButtons = document.querySelectorAll('.closebutton');

closeButtons.forEach((closeButton) => {
    closeButton.addEventListener('click', () => {
        homeCards.forEach(card => {
            card.classList.remove('active');
        })

    })
})


// Content Block open/close Small screen

const contentBlocks = document.querySelectorAll('.content-block');
const innerContentBlocks = document.querySelectorAll('.inner-content-block');
const buttonSources = document.querySelectorAll('.button-source');

buttonSources.forEach((buttonSource, index) => {
    buttonSource.addEventListener('click', () => {
        // contentBlocks.forEach((contentBlock) => {
        //     innerContentBlocks.forEach((innerContentBlock) => {
        //         contentBlock.classList.remove('content-active');
        //         innerContentBlock.classList.remove('inner-content-active');
        //     })
        // })
        contentBlocks[index].classList.toggle('content-active');
        innerContentBlocks[index].classList.toggle('inner-content-active');
    })
})


//Source Cards 
const sourceBlocks = document.querySelectorAll('.source-block');
const sourceBlockScores = document.querySelectorAll('.source-block-score');
const sourceBlockWhats = document.querySelectorAll('.source-block-what');
const sourceBlockWhys = document.querySelectorAll('.source-block-why');

const plusIcons = document.querySelectorAll('.plus-icon');

plusIcons.forEach((plusIcon, index) => {
    plusIcon.addEventListener('click', () => {


        sourceBlocks.forEach((sourceBlock, index2) => {
            if (index2 !== index) {
                // sourceBlock.classList.toggle('hidden');
            } else {
                if (sourceBlocks[index].classList.contains('closed')) {
                    // sourceBlocks[index].style.height = 'fit-content';
                    // sourceBlocks[index].style.width = 'fit-content';
                    sourceBlocks[index].style.maxWidth = '300px';
                    sourceBlocks[index].style.maxHeight = '800px';
                    sourceBlocks[index].classList.remove('closed');
                } else {
                    sourceBlocks[index].style.maxHeight = '200px';
                    sourceBlocks[index].style.maxWidth = '200px';
                    sourceBlocks[index].classList.add('closed');
                }
                sourceBlockScores[index].classList.toggle('hidden');
                sourceBlockWhats[index].classList.toggle('hidden');
                sourceBlockWhys[index].classList.toggle('hidden');

            }
        })

    })


})



// Source Cards turning around
// const cardrows = document.querySelectorAll('.review-row');
// const cardcols = document.querySelectorAll('.review-col');
// const col1 = document.querySelectorAll('.col-1');
// const col2 = document.querySelectorAll('.col-2');
// const col3 = document.querySelectorAll('.col-3');
// const col4 = document.querySelectorAll('.col-4');
// const plusIcons = document.querySelectorAll('.plus-icon');

// plusIcons.forEach((plus, i) => {
//     plus.addEventListener('click', function () {
//         plus.parentNode.children[0].classList.toggle('active');
//         plus.parentNode.children[1].classList.toggle('active');
//         plus.parentNode.children[2].classList.toggle('active');
//         plus.parentNode.children[3].classList.toggle('active');
//         plus.parentNode.children[3].classList.toggle('turn-back');
//         plus.classList.toggle('rotate');
//         plus.parentNode.classList.toggle('turn');
//         plus.parentNode.classList.toggle('dark');

//     })
// })

const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
