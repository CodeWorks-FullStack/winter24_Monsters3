

export class Monster {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.image = data.image
    this.description = data.description
    this.drops = data.drops
    this.capitalistIncentive = data.dlc
    this.commonLocations = data.common_locations
  }

  get Card() {
    return `
      <div class="col-6 col-md-3">
        <div class="card">
          <img class="card-img" src="${this.image}"/>
          <div class="card-body text-center">
          <h4> ${this.name}</h4>
          <p class="text-start">${this.description}</p>
          <div class="text-primary"> ${this.commonLocations} </div>
          </div>
        </div>
      </div>
    `
  }
}
