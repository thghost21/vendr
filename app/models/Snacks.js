
export class Snack {
  constructor(data) {
    this.name = data.snackName
    this.price = data.snackPrice
    this.img = data.snackPic
  }



  get snacksHTMLTemplate() {
    return `
    <div class="card col-3 m-1">
          <img
            src=${this.img}
            class="card-img-top image-fluid imgCard p-2" alt="...">
          <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <p class="card-text">${this.price}</p>
            <div class="text-end">
              <button onclick="app.snacksController.purchaseSnack('${this.name}')" class="btn btn-primary">Buy</button>
            </div>
          </div>
        </div>
    `
  }

}