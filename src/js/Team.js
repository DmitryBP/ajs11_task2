import Person from './Person.js';

export default class Team {
  teamMembers = [];

  index = 0;

  add(teamMember) {
    if (teamMember instanceof Person) {
      this.teamMembers.push(teamMember);
    } else throw new Error('Неверный формат');
  }

  * [Symbol.iterator]() {
    const { teamMembers } = this;
    let { i } = this;
    for (i = 0; i < teamMembers.length; i++) {
      yield this.teamMembers[i];
    }
  }
}
