const getElById = (id) => document.getElementById(id);
  let checkbox = getElById('check-emoji');
  let alphabets = ['A', 'ক','L','খ','Z' ,'গ','X' ,'ঘ','@' ,'ঙ', '#','ৎ','&', 'ঁ','ঠ'];
  let intervalId= null;
  checkbox.addEventListener('change', function() {
    if (intervalId) {
      clearInterval(intervalId)
    }
     if (this.checked) {
       alphabets = ['😁','🪡','🤣','🤡', '😇','🧚🏼‍', '😱','☠️','😅','👾','🐸','😎','😍','🥲','😜','☺️','🫥','🤯','🤡','😤','🤩','🥳','🤪','🥶','👀'];
     } else {
       alphabets = ['A', 'ক','L','খ','Z' ,'গ','X' ,'ঘ','@' ,'ঙ', '#','ৎ','&', 'ঁ','ঠ'];
     }
    init()
  })

  const init = () => {
    let canvas = getElById('canvas');
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    const ctx = canvas.getContext("2d");
    let fontSize = 16;
    let columns = canvas.width / fontSize;
    let drops = [];
    for (let x = 0; x <columns; x++) {
      drops[x] = 1;
    }
    const draw = () => {
      ctx.fillStyle = 'rgba(0,0,0, 0.05)';
      ctx.fillRect(0,0, canvas.width, canvas.height);
      ctx.fillStyle = '#0F0';
      ctx.font = fontSize + 'px monospace';
      for (let i = 0; i < drops.length; i++) {
        let text = alphabets[Math.floor(Math.random() * alphabets.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (Math.random() > 0.975 && drops[i] * fontSize > canvas.height) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }
    intervalId = setInterval(draw, 38)
  }
  init()