var result;
var check = false;
var pChoise;
var betResult;
var balance = 500000;
var getValue;
//Gieo xúc xắc
function random() {
    let a = Math.floor(1 + Math.random() * 6);
    let b = Math.floor(1 + Math.random() * 6);
    let c = Math.floor(1 + Math.random() * 6);
    let sum = a + b + c;
    check = true;
    if (sum >= 10) {
        result = 'Tài';
    }
    else {
        result= 'Xỉu';
    }
    if (a == 1) {
        document.getElementById('ss1').setAttribute('src', 'img/1.png');
    }
    if (a == 2) {
        document.getElementById('ss1').setAttribute('src', 'img/2.png');
    }
    if (a == 3) {
        document.getElementById('ss1').setAttribute('src', 'img/3.png');
    }
    if (a == 4) {
        document.getElementById('ss1').setAttribute('src', 'img/4.png');
    }
    if (a == 5) {
        document.getElementById('ss1').setAttribute('src', 'img/5.png');
    }
    if (a == 6) {
        document.getElementById('ss1').setAttribute('src', 'img/6.png');
    }
    //b
    if (b == 1) {
        document.getElementById('ss2').setAttribute('src', 'img/1.png');
    }
    if (b == 2) {
        document.getElementById('ss2').setAttribute('src', 'img/2.png');
    }
    if (b == 3) {
        document.getElementById('ss2').setAttribute('src', 'img/3.png');
    }
    if (b == 4) {
        document.getElementById('ss2').setAttribute('src', 'img/4.png');
    }
    if (b == 5) {
        document.getElementById('ss2').setAttribute('src', 'img/5.png');
    }
    if (b == 6) {
        document.getElementById('ss2').setAttribute('src', 'img/6.png');
    }
    //c
    if (c == 1) {
        document.getElementById('ss3').setAttribute('src', 'img/1.png');
    }
    if (c == 2) {
        document.getElementById('ss3').setAttribute('src', 'img/2.png');
    }
    if (c == 3) {
        document.getElementById('ss3').setAttribute('src', 'img/3.png');
    }
    if (c == 4) {
        document.getElementById('ss3').setAttribute('src', 'img/4.png');
    }
    if (c == 5) {
        document.getElementById('ss3').setAttribute('src', 'img/5.png');
    }
    if (c == 6) {
        document.getElementById('ss3').setAttribute('src', 'img/6.png');
    }
    console.log(result);
    document.getElementById('gieo').setAttribute('onclick','alert("Vui lòng Chọn phiên mới")');
    document.getElementById('showresult').innerHTML = '';
}



//Lựa chọn của người chơi



function playerChoise(choise) {
    pChoise = choise;
    var soDu = document.getElementById('so-du');
    if (checkBet == true) {
        if (check == true) {
            if (pChoise == result) {
            let a = document.getElementsByClassName('dish')[0];
            a.style.display = 'none';
            betResult = document.getElementById('showresult').innerHTML = 'Thắng';
            let b = document.getElementsByClassName('choise');
            for(let i = 0 ; i < b.length ; i++)
            {
                b[i].setAttribute('onclick','checkRound()');
            }
        }
        else{
            let a = document.getElementsByClassName('dish')[0];
            a.style.display = 'none';
            betResult = document.getElementById('showresult').innerHTML = 'Thua';
            let b = document.getElementsByClassName('choise');
            for(let i = 0 ; i < b.length ; i++)
            {
                b[i].setAttribute('onclick','checkRound()');
            }
        }
        if (betResult == 'Thắng') {
            balance+=getValue;
            console.log(balance);
            soDu.innerHTML = balance;
        }
        else if(betResult == 'Thua'){
            balance -= getValue;
            console.log(balance);
            soDu.innerHTML = balance;     
        }
        if (balance == 0) {
            alert('Bạn thua');
            location.reload();
        } 
        console.log(betResult);
        }
        else alert('bạn chưa gieo xúc xắc');
    }else alert('bạn chưa đặt cược');
}
var checkBet = false;
//Đặt cược
function betValue(index) {
    console.log(index);
    checkBet = true;
    let bet = [50000,100000,200000,300000,400000,500000];
    if (bet[index] > balance) {
        alert('Tiền cược lớn hơn số dư')
    }
    else
    {
        if (check == true) {
            getValue = bet[index];
            console.log(getValue);
            let betBTN = document.getElementsByClassName('bet');
            for(let i = 0 ; i< betBTN.length;i++)
            {
                betBTN[i].setAttribute('onclick','alert("Vui Lòng bắt đầu phiên mới")');
            }
        }
        else alert('Gieo xúc sắc rồi mới cược');    
    }
    }

function checkRound() {
    alert('Vui lòng chọn phiên mới để tiếp tục chơi');
}
function newRound() {
    check = false;
    let a = document.getElementsByClassName('dish')[0];
    a.style.display = 'block';
    document.getElementById('gieo').setAttribute('onclick','random()');
    let re = document.getElementsByClassName('choise');
    for(let i = 0 ; i < re.length ; i++)
    {
        if (i == 0) {
            re[0].setAttribute('onclick',"playerChoise('Tài')")
        }
        if (i == 1) {
            re[1].setAttribute('onclick',"playerChoise('Xỉu')")
        }
    }
    let betBTN = document.getElementsByClassName('bet');
    for(let i = 0 ; i<= betBTN.length;i++)
    {
        if (i == 0) {
            betBTN[0].setAttribute('onclick',"betValue(0)");
        }
        if (i == 1) {
            betBTN[1].setAttribute('onclick',"betValue(1)");
        }
        if (i == 2) {
            betBTN[2].setAttribute('onclick',"betValue(2)");
        }
        if (i == 3) {
            betBTN[3].setAttribute('onclick',"betValue(3)");
        }
        if (i == 4) {
            betBTN[4].setAttribute('onclick',"betValue(4)");
        }
        if (i == 5) {
            betBTN[5].setAttribute('onclick',"betValue(5)");
        }
    }
    checkBet = true;
    document.getElementById('showresult').innerHTML = '';
}
