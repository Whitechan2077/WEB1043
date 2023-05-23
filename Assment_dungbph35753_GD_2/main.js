//bien co ban
let boxes = document.querySelectorAll('.box');
let add = document.querySelectorAll('.cart-btn');

let cartList = [];
let uicart = [];
let amout = [];
let price = [];

let sum = 0;
let cart = document.querySelector('#total-cart');

//silde show auto
let slideIndex = 0;
let silde = ['url(imgs/home-banner-876x400-20230309144446.jpg)', 'url(imgs/homepage_867x400.png)', 'url(imgs/new_867x400_a1-20230323011620.jpg)'];
let banner = document.querySelector('#silde-banner');


function showNextSlide() {
  slideIndex++;
  if (slideIndex > silde.length - 1) {
    slideIndex = 0;
  }
  banner.style.backgroundImage = silde[slideIndex];
}

let intervalId = setInterval(showNextSlide, 5000); 

document.querySelector('#left').addEventListener('click', function (){
  clearInterval(intervalId);
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = silde.length - 1;
  }
  banner.style.backgroundImage = silde[slideIndex];
  intervalId = setInterval(showNextSlide, 5000); 
});

document.querySelector('#right').addEventListener('click', function () {
  clearInterval(intervalId);
  slideIndex++;
  if (slideIndex > silde.length - 1) {
    slideIndex = 0;
  }
  banner.style.backgroundImage = silde[slideIndex];
  intervalId = setInterval(showNextSlide, 5000);
});
//het slide show



//OBJ PRODUCT
function Product(name, price, img) {
    this.name = name;
    this.price = price;
    this.img = img;
}
//login
let user = {
    username:"White2077",
    password:"06122004",
    name:"Bùi Hoàng Dũng",
}
    
// });
//End login
//PUSH đối tượng vào mảng, push giá vào mảng,push số lượng vào mảng

add.forEach(function (item, index) {
    item.addEventListener("click", function () {
        // cart.innerHTML = "";
        let pd = new Product();
        pd.name = boxes[index].childNodes[3].childNodes[1].innerText;
        pd.price = Number(boxes[index].childNodes[3].childNodes[3].getAttribute('price'));
        pd.img = boxes[index].childNodes[1].childNodes[1].getAttribute('src');
        // document.getElementById('total-mout').innerText = `(${cartList.length})`; 
        // Kiểm tra xem sản phẩm có trong giỏ hàng false = index false = -1
        let check = cartList.findIndex(function (item) {
            return item.name == pd.name;
            // console.log(item);
        });
        // console.log(check);
        if (check === -1) {  
            // Nếu chưa có, push mới sản phẩm vào giỏ hàng
            cartList.push(pd);
            amout.push(1);
            price.push(pd.price);
            document.getElementById('total-mout').innerText = `(${cartList.length})`;
            console.log(cartList.length);   
        } else {
            // Nếu đã có, tăng số lượng của sản phẩm đó lên 1
            amout[check]++;
            // console.log(check);
        }

        sumValue();
        // console.log(cartList);
        addToCart();
        addToCart2()
        cumTribute();
    });
});


//Tính tổng tiền và in ra
function sumValue() {
    sum = 0;
    amout.forEach(function (item, index) {
        sum += (item * price[index]);
    })
    let sum1 = sum.toLocaleString('de-DE');
    // console.log(sum);
    document.querySelector('#ThreeSum').innerHTML = sum1 + " VND";
}

//Push ui vào mảng uiCart 
let ui = "";
function addToCart() {
    uicart = [];
    cartList.forEach(function (item, index) {
        ui = `
        <div class="cart-prd">
        <div class="images">
        <img src="${item.img}" alt="" width="50" height="50">
        </div>
        <div class="infor">
        <p class = "name">${item.name}</p>
        <p class = "price">${item.price}</p>
        </div>
        <div>
        </div>
        <p class ="show-mout"> <span class="add">+</span><span class="mout"> </span><span class="del">-</span> </p>
        <button class="del-btn">Xóa</button>
        </div>
        </div> 
        `
        uicart.push(ui);
    });
}

//Hiển thị số lượng ở giỏ hàng

function cumTribute() {
    let mout =  document.querySelectorAll('.mout');
    mout.forEach(function(item,index) { 
        item.innerHTML = amout[index] 
    });
}
//thanh toan
document.querySelector('#purchase').addEventListener("click",function () {
    if (cartList.length == 0) {
        alert('chua them san pham')
    }
    else{
        document.getElementsByClassName('login-form')[0].style.display = "block";
        document.getElementById('sumPurchase').value = sum;

        document.getElementById('shingping').addEventListener('change',function name(params) {
            document.getElementById('sumPurchase').value = sum + Number(document.getElementById('shingping').value);
        });
    }
});
document.getElementById('exit').addEventListener('click',function () {
    document.getElementsByClassName('login-form')[0].style.display = "none";
});
let check1 = false;
let check2 = false;
let check3 = false;
let checkP =false;
let checkC = false;
let checkN = false;
document.getElementById('login-btn').addEventListener('click',function () {
    if (document.getElementById('Adress').value.trim() == "") {
        document.getElementById('check1').innerText ="Không được để trống Quận"
        check1 = false
    }
    else{ check1 = true;
        document.getElementById('check1').innerText =" "
    }

    if (document.getElementById('phoneNum').value == "") {
        document.getElementById('check2').innerText ="Không được để trống Số điện thoại"
        check2 = false
    }
    else {
        check2 = true;
        document.getElementById('check2').innerText =" "
    }

    if (document.getElementById('shingping').value == 0) {
        document.getElementById('check3').innerText ="Vui lòng chọn hình thức ship"
        check3 = false
    }

    else {check3 = true;
        document.getElementById('check3').innerText =" "
    }
    if (document.getElementById('name').value.trim() == "") {
        document.getElementById('checkName').innerText ="Không được để trống tên"
        checkN = false
    }
    else{ checkN = true;
        document.getElementById('checkName').innerText ="";
    }

    if (document.getElementById('Provide').value.trim() == "") {
        document.getElementById('checkHuyen').innerText ="Không được để trống Huyện";
        checkP =false;
    }
    else{ checkP = true;
        document.getElementById('checkHuyen').innerText =" ";
    }
    if (document.getElementById('city').value.trim() == "") {
        document.getElementById('checkCity').innerText ="Không được để trống Thành phố/tỉnh";
        checkC =false;
    }
    else{ checkC = true;
        document.getElementById('checkCity').innerText ="";
    }


    if (check1 == true && check2 ==  true && check3 == true && checkC == true && checkP == true && checkN == true) {
        alert('thanh toan thanh cong');
        price = [];
        uicart = [];
        cartList = [];
        amout = [];
        sumValue();
        cart.innerHTML = "";
        document.getElementById('total-mout').innerText = `(${cartList.length})`;  
        document.getElementsByClassName('login-form')[0].style.display = "none";
        document.getElementById('checkHuyen').innerText =" ";
        document.getElementById('checkCity').innerText ="";
        document.getElementById('checkName').innerText ="";
        document.getElementById('shingping').value == 0;
        document.getElementById('check1').innerText ="";
        document.getElementById('check2').innerText ="";
        document.getElementById('check3').innerText ="";
    }
});
//Hiện sản phẩm ở giỏ

function addToCart2() {
    cart.innerHTML = "";
    uicart.forEach(function (item, index) {
        cart.innerHTML += item;
    });
    //chuc nang btn xoa
    document.querySelectorAll('.del-btn').forEach((item, index) => {
        item.addEventListener('click', function () {
            cartList.splice(index, 1)
            uicart.splice(index, 1)
            amout.splice(index, 1);
            price.splice(index, 1);
            // console.log(index);
            // console.log(cartList);
            sumValue();
            addToCart2();
            cumTribute();
            document.getElementById('total-mout').innerText = `(${cartList.length})`;     
        });

    });
    addAmout();
    dellAmout();
}

//tăng số lượng sản phẩm
function addAmout() {
    document.querySelectorAll('.add').forEach(function (item, index) {
        item.addEventListener("click", function () {
            ++amout[index];
            // console.log(amout);
            cumTribute();
            sumValue();
        });
    })
}


//Giảm số lượng sản phẩm
function dellAmout() {
    document.querySelectorAll('.del').forEach(function (item, index) {
        item.addEventListener("click", function () {

            if (amout[index]>1) {
                --amout[index];
                cumTribute();
                sumValue();
            }
            else {
                cartList.splice(index, 1)
                uicart.splice(index, 1)
                amout.splice(index, 1);
                price.splice(index, 1);
                addToCart2()
                cumTribute();
                sumValue();
                document.getElementById('total-mout').innerText = `(${cartList.length})`;                  
            }
            // console.log(amout);
        })
    })
}


