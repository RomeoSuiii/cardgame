let coins = 0;

function renderCollection(){
  const container = document.getElementById("collectionCards");
  container.innerHTML = "";

  collection.forEach(c=>{
    const div = document.createElement("div");
    div.className = "card";
    div.innerText = c;
    container.appendChild(div);
  });
}

/* MEMORY GAME */
function startMemory(){
  const board = document.getElementById("memoryBoard");
  board.innerHTML = "";

  let gameCards = shuffle([...collection, ...collection]).slice(0,16);
  let first = null;

  gameCards.forEach(card=>{
    const div = document.createElement("div");
    div.className = "memoryCard";
    div.innerText = "?";

    div.onclick = ()=>{
      div.innerText = card;

      if(!first){
        first = {card, div};
      } else {
        if(first.card === card){
          coins += 10;
          coinsEl.innerText = "Coins: " + coins;
        } else {
          setTimeout(()=>{
            div.innerText="?";
            first.div.innerText="?";
          },500);
        }
        first = null;
      }
    };

    board.appendChild(div);
  });
}

/* PROFILE IMAGE */
document.getElementById("uploadPic").addEventListener("change", function(e){
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = function(){
    document.getElementById("profilePic").src = reader.result;
  }
  reader.readAsDataURL(file);
});

function shuffle(arr){
  return arr.sort(()=>Math.random()-0.5);
}
