class Cash {
  constructor() {
    this.name = 'Cash';
    this.pic = new Image().src = 'img/cash.jpg';
    this.bio = 'While Cash loves his outside time, he mainly prefers being bundled up warmly so he can nap the day away. Please tell him he is a good boy!';
    this.status = false;
  }
}

class Momo {
  constructor() {
    this.name = 'Guillermo';
    this.pic = new Image().src = 'img/momo.jpg';
    this.bio = 'Guillermo is a little crazer cat. He bounces with the energy of 10 devils. Watch out!! He is zooming right behind you!';
    this.status = false;
  }
}

class Chomp {
  constructor() {
    this.name = 'Chomper';
    this.pic = new Image().src = 'img/chomp.jpg';
    this.bio = 'Chomper screams like a siren at 3 in the morning.';
    this.status = false;
  }
}

class Taco {
  constructor() {
    this.name = 'Taco';
    this.pic = new Image().src = 'img/taco.jpg';
    this.bio = 'R.I.P. our little angel. Taco was the best cat in the world. She is missed every day.';
    this.status = false;
  }
}

const curProName = document.getElementById('currentPetName');
const curProPic = document.getElementById('currentProfilePic');
const curProBio = document.getElementById('currentProfileBio');

const cashProfile = document.getElementById('cashProfile');
const momoProfile = document.getElementById('momoProfile');
const chompProfile = document.getElementById('chompProfile');
const tacoProfile = document.getElementById('tacoProfile');

let curPet = new Cash();
// const cashPro = new Cash();
// const momoPro = new Momo();
// const chompPro = new Chomp();
// const tacoPro = new Taco();

window.addEventListener('click', function(e) {
  console.log(e.target);
})

    curProName.innerHTML = `<h1>${curPet.name}</h1>`;
    curProPic.innerHTML = `<img src="${curPet.pic}" width="300" height="300">`;
    curProBio.innerHTML = `<p>${curPet.bio}</p>`;