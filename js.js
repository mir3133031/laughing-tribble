for (let i = 0; i <= 6 ; i++) {
    let bossBox = document.createElement(`div`)
    let boxLch = document.createElement(`div`)


    let boxImg = document.createElement(`div`)
    let img = document.createElement(`div`)


    let boxText = document.createElement(`div`)
    let clothing = document.createElement(`p`)
    let aLotText = document.createElement(`p`)


    let buttonIth = document.createElement(`button`)


    bossBox.classList.add(`bossBox`)
    boxLch.classList.add(`boxLch`)
    boxImg.classList.add(`boxImg`)
    img.classList.add(`div`)
    boxText.classList.add(`boxText`)
    clothing.classList.add(`clothing`)
    aLotText.classList.add(`aLotText`)
    buttonIth.classList.add(`buttonIth`)



    clothing.innerHTML = `MEN’S CLOTHING (120)`
    aLotText.innerHTML = `Your perfect pack for everyday use and walks in the forest. Stash your laptop
    (up to 15 inches) in the padded sleeve, your everyday`

    bossBox.append(boxLch)
    boxLch.append(boxImg, boxText)
    boxImg.append(img)
    boxText.append(clothing, aLotText, buttonIth)
    document.body.append(bossBox)
}