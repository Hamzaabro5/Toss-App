console.log(`Hello World`);


const h2 = document.querySelector(`h2`);


function toss(clickedbtn) {
    const random = Math.random()*2;
    const num = Math.ceil(random);
    // console.log(clickedbtn , num);


    if (num == 1 && clickedbtn == `head`) {
        // console.log(`Head Win`);
        h2.innerHTML = `You Won The Toss ---!`
    }else if (num == 2 && clickedbtn == `head`) {
        // console.log(`Head Lose`);
        h2.innerHTML = `You Lose The Toss---!`
    }else if (num == 2 && clickedbtn == `tail`) {
        // console.log(`Tail win`);
        h2.innerHTML = `You Won The Toss --!`
    }else if (num == 1 && clickedbtn == `tail`) {
        // console.log(`Tail lose`);
        h2.innerHTML = `You Lose The Toss---!`
}




    
}