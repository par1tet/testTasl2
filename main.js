const mainCat = document.querySelector('#main_cat')
const loadInput = document.querySelector('#loadcat_input')
const loadButton = document.querySelector('#loadcat_button')
const lastFive = document.querySelector('.main__lastfive')

let lastFiveArr = [];

function handlerClick(e){
    const code = +loadInput.value
    
    lastFive.innerHTML === '' ?  lastFive.innerHTML = 'Последние 5 кодов ошибок, которые вы загружали: ' : null

    mainCat.setAttribute('src', `https://http.cat/images/${code}.jpg`)
    if((code >= 100 || code < 550) && code !== NaN){
        if(lastFiveArr.length !== 5){// :)
            lastFive.innerHTML === 'Последние 5 кодов ошибок, которые вы загружали: ' ?
            lastFive.innerHTML += `${code}`
            :
            lastFive.innerHTML += `, ${code}`
            lastFiveArr.push(code)
        }else{
            lastFiveArr.shift()
            lastFiveArr.push(code)
            lastFive.innerHTML = `Последние 5 кодов ошибок, которые вы загружали: ${lastFiveArr.join(', ')}`
        }
    }

    loadInput.value = ''
}

loadButton.addEventListener('click', handlerClick)
// я заебался пляяяя