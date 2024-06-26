export class Pokedex {
  constructor(data) {
    this.name = data.name
    this.nickName = data.nickName
    this.img = data.sprites.front_shiny
    this.weight = data.weight
    this.height = data.height
    this.types = data.types.name
  }
  get pokeTemplate() {
    return `
<button class="btn btn-rounded btn-outline-light">${this.name}</button>`
  }
}