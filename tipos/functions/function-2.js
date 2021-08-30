this.name = 'salário';

const getNameArrowFn = () => this.name;

function getname() {
  return this.name;
}

const user = {
  name: 'dimdim',
  getNameArrowFn,
  getname
}

console.log(user.getNameArrowFn());
console.log(user.getname());