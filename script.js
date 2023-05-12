
  function animate(id) {
  var node = document.getElementById(id).childNodes[0];
  var text = node.data;
  
  setInterval(function () {
    text = text.substring(1) + text[0];
  node.data = text;
  }, 130); 
 }
  window.addEventListener('load', function (e) {animate('marqueeline'); }, false);



  fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('data-container');
    data.forEach(item => {
      const div = document.createElement('div');
      div.innerHTML = `<h2>${item.title}</h2>`;
      container.appendChild(div);
    });
  });


