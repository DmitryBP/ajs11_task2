import Person from './Person.js';

export default class Team {
  teamMembers = [];

  index = 0;

  add(teamMember) {
    if (teamMember instanceof Person) {
      this.teamMembers.push(teamMember);
    } else throw new Error('Неверный формат');
  }

  [Symbol.iterator]() {
    const { teamMembers } = this;
    let { index } = this;
    return {
      next() {
        if (index < teamMembers.length) {
          return {
            value: teamMembers[index++],
            done: false,
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}
