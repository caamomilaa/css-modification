//el scroll vade 100 en100

const rootStyles = document.documentElement.style;

const rgbElement = document.getElementById('rgb-button');
const hexaElement = document.getElementById('hexa-button');

const getRGB = () => {
  const R = Math.floor(Math.random() * 255);
  const G = Math.floor(Math.random() * 255);
  const B = Math.floor(Math.random() * 255);
  rootStyles.setProperty('--background-color', `rgb(${R},${G},${B})`);
};

const getHex = () => {
  const letters = 'ABCDEF0123456789';
  let hex = '';
  for (let i = 0; i < 6; i++) {
    const getRandomCharacter = letters.charAt(
      Math.floor(Math.random() * letters.length)
    );
    hex += getRandomCharacter;
  }
  rootStyles.setProperty('--background-color', `#${hex}`);
};

//tiene que modificarse el width del div rosa, conor,e crezca el div

//si vives a 1000 metros y has recorrido200 metros, cuanto porcentaje llevas?
// height: 400vh;

// Scroll total de la ventana: document.body.scrollHeight
// Alto de la ventana: window.innerHeight
// Cantidad de scroll: window.scrollY

const getScroll = () => {
  //   let result = 0;
  const getResult =
    (window.scrollY * document.body.scrollHeight) / window.innerHeight;
  console.log(getResult);
};

rgbElement.addEventListener('click', getRGB);
hexaElement.addEventListener('click', getHex);
window.addEventListener('scroll', getScroll);
