slider = document.querySelectorAll(".slide")


slider.forEach(home => {
    const categorias = home.querySelectorAll(".categorias")
    const nome = home.querySelector(".titulo").innerHTML.split(" ")[1]

    const slider = home.querySelector(".slider").clientWidth
    const carritel = home.querySelector(".carritel")
    const esquerda = home.querySelector(".esquerda")
    const direita = home.querySelector(".direita")

    const particoes = Math.ceil(carritel.clientWidth/slider)

    for (let index = 1; index <= particoes; index++) {
        home.querySelector(".indexs nav").innerHTML += `
        <li class="index">
            <input type="radio" name="${nome}" id="${nome}-${index}">
            <label for="${nome}-${index}"></label>
        </li>`
    }
    
    let position = 0
    let particao = 1
    home.querySelector(`#${nome}-${particao}`).checked = true

    esquerda.addEventListener("click",function () {
        position +=slider
        if(position > 0){
            position = 0
        }
        particao--
        if(particao < 1){
            particao = 1
        }
        home.querySelector(`#${nome}-${particao}`).checked = true

        carritel.style.transform = `translateX(${position}px)`
    })

    direita.addEventListener("click",function () {
        verificador = position-slider
        if (!(verificador < -carritel.clientWidth)){
            position -=slider
            particao++
            home.querySelector(`#${nome}-${particao}`).checked = true
        }

        carritel.style.transform = `translateX(${position}px)`
    })

    home.querySelectorAll(`[name = ${nome}]`).forEach(index => {
        index.addEventListener("input",function () {
            numero = index.id.split("-")[1]-1
            particao = numero+1

            position = -numero*slider
            carritel.style.transform = `translateX(${-numero*slider}px)`
        })
    });
});
