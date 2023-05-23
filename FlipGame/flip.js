let choices = [];

function random() {
    while (choices.length < 3) {
        let randomChoice = Math.round(Math.random() * 2);
        if (!choices.includes(randomChoice)) {
          choices.push(randomChoice);
        }
      }
      
      let choise1 = choices[0];
      let choise2 = choices[1];
      let choise3 = choices[2];
      let boxs = document.getElementsByClassName('box');
      for(let i = 0 ; i< boxs.length;i++)
      {
        console.log(boxs[choices[i]]);
        // console.log(choices[i]);
      }
    //   console.log(choise1);
    //   console.log(choise2);
    //   console.log(choise3);

}