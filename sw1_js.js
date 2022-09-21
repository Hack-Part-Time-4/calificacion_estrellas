let card_title = document.querySelectorAll('.card-title');

card_title.forEach(title => {
  title.style.color = 'purple';
});

function calificar(item) {
  //console.log(item);
  
  let cont = parseInt(item.id[4]);

  //console.log(cont);

  for (let i = 0; i < 5; i++) {
    if (i < cont) {
      document.getElementById(`star` + `${i+1}`).style.color = 'orange';
    } else {
      document.getElementById(`star` + `${i+1}`).style.color = 'black';
    }
  };
};