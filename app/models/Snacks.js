
export class Snack {
  constructor(snackName, snackPrice, snackPic) {
    this.name = snackName
    this.price = snackPrice
    this.img = snackPic
  }



  get snacksHTMLTemplate() {
    return `
    <div class="card col-3 m-1">
          <img
            src="https://images.unsplash.com/photo-1626697556651-67ebdcb8cbd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNob2NvbGF0ZSUyMGJhcnxlbnwwfHwwfHx8Mg%3D%3D"
            class="card-img-top image-fluid p-2" alt="...">
          <div class="card-body">
            <h5 class="card-title">Candy Bar</h5>
            <p class="card-text">$1.00</p>
            <div class="text-end">
              <button class="btn btn-primary">Buy</button>
            </div>
          </div>
        </div>
    `
  }

}