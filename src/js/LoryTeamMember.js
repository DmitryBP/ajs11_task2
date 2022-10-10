export default class LoryTeamMember {
  startDriving = 18;
  constructor(name, driveCategory, yearsOfExperianse) {
    this.name = name;
    this.driveCategory = driveCategory;
    this.yearsOfExperianse = yearsOfExperianse;
  }
  get teamMembersAge() {
    return `${this.name}у ${this.yearsOfExperianse + this.startDriving} года!`;
  }
}

