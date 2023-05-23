let amout = [0, 0, 0, 0, 0, 0];
let sum = [0, 0, 0, 0, 0, 0];
let sum1 = 0;
//  sum1 = sum.reduce((total, current) => total + current, 0);
console.log(sum);
for (let i = 0; i < sum.length; i++) {
  sum1 += sum[i];
}
let cols = document.getElementsByClassName('col');

let selectElement = document.getElementById("ship");
let selectedValue = selectElement.value;



//addd
function addCol(index) {
  let a = document.getElementsByClassName('col-amout')[index];
  amout[index]++;
  a.innerHTML = amout[index];
  for (let i = 0; i < price.length; i++) {
    sum[i] = Number(price[i].getAttribute('gia')) * amout[i];

  }
   sum1 = 0;
  //  sum1 = sum.reduce((total, current) => total + current, 0);
  console.log(sum);
  for (let i = 0; i < sum.length; i++) {
    sum1 += sum[i];
  }
    document.getElementById('sum').innerHTML = sum1 + ' VND';
  }



//xoa

function delCol(index) {
  let a = document.getElementsByClassName('col-amout')[index];
  if (amout[index] > 0) {
    amout[index]--;
    a.innerHTML = amout[index];
  }
  for (let i = 0; i < price.length; i++) {
    sum[i] = Number(price[i].getAttribute('gia')) * amout[i];

  }
  sum1 = 0;
  //  sum1 = sum.reduce((total, current) => total + current, 0);
  console.log(sum);
  for (let i = 0; i < sum.length; i++) {
    sum1 += sum[i];
  }
  document.getElementById('sum').innerHTML = sum1 + ' VND';
}




//tinh tong
function exitPu() {
  let i4 = document.getElementById('cart-i4');
  i4.style.display = "none";
}



function exitAlert() {
  document.getElementById('alert').style.display = "none";
}

function exitBill() {
  document.getElementById('bill').style.display = "none";

}

function exitVali() {
  document.getElementById('validator').style.display = "none";

}


function sumValue(){
  if (sum1 == 0) {
    document.getElementById('alert').style.display = "block";
  }
  else{
  let i4 = document.getElementById('cart-i4');
  i4.style.display = "block";
  document.getElementById('pPrice').innerText = sum1;
  console.log(sum1);
}
}

// function getValue(){
//   let choise = document.getElementById('ship').value;
//   if(choise === 'option1'){
//     console.log(1);
//     return 'option1';
//   }
//   else if(choise === 'option2'){
//     console.log(2);
//     return 'option2';
//   }
//   else if(choise === 'option3'){
//     console.log(3);
//     return 'option3';
//   }
// }

function allPrice() {
  let name = document.getElementById('n').value;
  let adress = document.getElementById('ad').value;
  let i4 = document.getElementById('cart-i4');
  if (name === "" || adress ==="") {
    document.getElementById('validator').style.display = "block";
    // i4.style.display = "none";
  }
  else{
  document.getElementById('bill').style.display = "block";

  i4.style.display = "none";
  let price = document.getElementById('fullPrice');
  let shipSatus = document.getElementById('shipping');


  document.getElementById('fullname').innerText = name;
  document.getElementById('adress').innerText = adress;
  console.log(name);
  console.log(adress);


  let choise = document.getElementById('ship').value;
  if(choise === 'option1'){
    price.innerText = sum1 + 100000;
    shipSatus.innerText = "Giao hỏa tốc";
  }
  else if(choise === 'option2'){
    price.innerText = sum1 + 80000;
    shipSatus.innerText = "Giao hàng nhanh";
  }
  else if(choise === 'option3'){
    price.innerText = sum1 + 20000;
    shipSatus.innerText = "Giao hàng thường";
  }
  }
  
}


/// hover

function hover() {
  // console.log("sads");
  for (let i = 0; i < cols.length; i++) {
    cols[i].addEventListener("mouseenter", function () {
      cols[i].style.transform = "scale(1.05)";
    });

    cols[i].addEventListener("mouseleave", function () {
      cols[i].style.transform = "scale(1.0)";
    });

  }
}



