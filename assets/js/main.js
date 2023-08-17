function relogio() {
  function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    let milliseconds = data.getMilliseconds();
    return data.toLocaleTimeString('pt-BR', {
      hours12: 'false',
      timeZone: 'UTC',
      milliseconds: 'true'
    });
  }

  const relogio = document.querySelector('.relogio');

  let segundos = 0;
  let timer;

  function iniciarRelogio() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = criaHoraDosSegundos(segundos)
    }, 1000);
  }

  document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('resetar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      relogio.innerHTML = criaHoraDosSegundos(0);
      segundos = 0;
    };
    if (el.classList.contains('iniciar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      iniciarRelogio();
    }
    if (el.classList.contains('pausar')) {
      relogio.classList.add('pausado')
      clearInterval(timer)
    }

  })
}
relogio()





/*
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const resetar = document.querySelector('.resetar');
iniciar.addEventListener('click', function (event) {
  relogio.classList.remove('pausado')
  clearInterval(timer)
  iniciarRelogio()
});


pausar.addEventListener('click', function (event) {
  relogio.classList.add('pausado')
  clearInterval(timer)
});
resetar.addEventListener('click', function (event) {
  relogio.classList.remove('pausado')
  clearInterval(timer)
  relogio.innerHTML = criaHoraDosSegundos(0)
  segundos = 0
}); */


