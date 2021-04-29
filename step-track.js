$(document).ready(function() {

    setInterval(function() {

        let previousValue = parseFloat(sessionStorage.getItem('step'));
        let currentValue = parseFloat($('.token').last().text());

        sessionStorage.setItem('step', currentValue + '');

        if (previousValue && previousValue < currentValue) {

                let tokens = currentValue - previousValue;
                console.log('STEP: Tokens per Minute = ' + tokens.toFixed(2));
                localStorage.setItem('lastMessage', 'STEP: Tokens per Minute = ' + tokens.toFixed(2))
    

        }


    }, 1000)

})
