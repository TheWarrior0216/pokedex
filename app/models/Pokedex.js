export class Pokedex {
  constructor(data) {
    this.name = data.name
    this.nickName = data.nickName
    this.img = data.sprites.front_shiny
    this.weight = data.weight
    this.height = data.height
    this.types = data.types.name
  }
  get activePokeTemplate() {
    return `
<div class="container mx-5 text-light">
        <div class="row">
          <div class="col-12 text-center border">
            <div class="row ">
              <div class="col-12 p-5">
                <h1>${this.name}</h1>
              </div>
              <div class="col-12 border-bottom pb-4">
                <img class="alt-image"
                  src="${this.img}"
                  alt="${this.name}">
              </div>
              <div class="col-6 p-3">
                <h3>Height: ${this.height / 10} Meters</h3>
              </div>
              <div class="col-6 p-3">
                <h3>Weight: ${this.weight / 10} KG</h3>
              </div>
              <div class="col-6 p-3">
                <h3>type:</h3>
              </div>
            </div>
          </div>
        </div>
      </div>`
  }
}