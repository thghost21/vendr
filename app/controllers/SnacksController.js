import { AppState } from "../AppState.js"

export class SnacksController {
  constructor() {
    console.log('Snacks Controller Working')
    this.drawSnacksCards()
  }

  drawSnacksCards() {
    const snacks = AppState.snacks
    let snackListContent = ''
    snacks.forEach(snack => snackListContent += snack.snacksHTMLTemplate)


    const snackListElem = document.getElementById('snackBar')
    snackListElem.innerHTML = snackListContent

  }

  purchaseSnack(snackName) {
    console.log('Snack Purchased', snackName);


  }


}