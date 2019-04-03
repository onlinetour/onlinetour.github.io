// ФУНКЦИЯ КЛИКА НА КНОПКУ LIST
function clickList(){

    var list = document.querySelector(".table");
    var map = document.getElementById("map");
    var plus = document.querySelector(".plus");

    list.style.display = "block";
    map.style.display = "none";
    plus.style.display = "block";

    var block_btn = document.querySelector(".block_btn");

    var bt1 = block_btn.children[2];
    var bt2 = block_btn.children[1];
    var bt3 = block_btn.children[0];

    bt1.style.order = "3";
    bt1.style.marginTop = "0";
    bt2.style.order = "2";
    bt3.style.order = "1";

};

///////////////////////////////////////////////////////////////////

// ФУНКЦИЯ КЛИКА НА КНОПКУ MAP
function clickMap(){

    var map = document.getElementById("map");
    var list = document.querySelector(".table");
    var plus = document.querySelector(".plus");
    map.style.display = "block";
    list.style.display = "none";
    plus.style.display = "none";

    var block_btn = document.querySelector(".block_btn");

    var bt1 = block_btn.children[0];
    var bt2 = block_btn.children[1];
    var bt3 = block_btn.children[2];

    bt1.style.order = "3";
    bt1.style.marginTop = "0";
    bt2.style.order = "2";
    bt3.style.order = "1";

};

///////////////////////////////////////////////////////////////////

let flag = true; //установка флага

// ФУНКЦИЯ КЛИКА НА КНОПКУ ARROW
function clickArrow() {
    var map = document.getElementById("map");
    var list = document.querySelector(".table");
    var plus = document.querySelector(".plus");
    var block_btn = document.querySelector(".block_btn");

        // условина по флагу
        //true
        if (flag){

            map.style.display = "block";
            list.style.display = "none";
            plus.style.display = "none";

            var bt1 = block_btn.children[0];
            var bt2 = block_btn.children[1];
            var bt3 = block_btn.children[2];
            bt1.style.order = "3";
            bt1.style.marginTop = "0";
            bt2.style.order = "2";
            bt3.style.order = "1";

        }
        //false
        else {
            map.style.display = "none";
            list.style.display = "block";
            plus.style.display = "block";

            var bt1 = block_btn.children[2];
            var bt2 = block_btn.children[1];
            var bt3 = block_btn.children[0];
            bt1.style.order = "3";
            bt1.style.marginTop = "0";
            bt2.style.order = "2";
            bt3.style.order = "1";
        }
        flag = !flag; //переключение флага
}

///////////////////////////////////////////////////////////////////

var qq = true;
var mas=[];

//ФУНКЦИЯ СОЗДАНИЯ И МАНИПУЛЯЦИЯ ТАБЛИЦЕЙ
function tableCreate() {

    var tbl = document.getElementById('table');
    var top = 65;
    // CREATE THEAD -> TR + TH
    if (qq){
        //прорисовка шапки таблицы
        var thead = document.createElement('thead');
        thead.id = 'thd';
        for (var i = 0; i < 1; i++) {
            var tr = document.createElement('tr');
            for (var j = 0; j < 3; j++) {
                var th = document.createElement('th');
                tr.appendChild(th)
            }
            thead.appendChild(tr);
        }

        tbl.appendChild(thead);

        //прорисовка первой строки таблицы
        var tbd = document.getElementById('tbd');
        var tr = document.createElement('tr');
        var a = document.createElement('a');

        var theFirstChild = tbd.firstChild;

        for (var i = 0; i < 3; i++) {
            var td = document.createElement('td');
            td.appendChild(a);
            tr.appendChild(td);
        }

        //назначение класов кнопке (add), полям шапки таблицы
        a.className = 'a_plus';
        var th_num = document.querySelectorAll('th')[0];
        th_num.className = 'th_num';
        var th_address = document.querySelectorAll('th')[1];
        th_address.className = 'th_address';
        var th_del = document.querySelectorAll('th')[2];
        th_del.className = 'th_del';

        //заполнение текстом поля шапки таблицы
        document.querySelectorAll('th')[0].innerText = "№";
        document.querySelectorAll('th')[1].innerText = "ADDRESS";

        //строки вставлять в начало таблицы
        tbd.insertBefore(tr, theFirstChild);

        //характерискити неких размеров
        document.querySelectorAll('td')[0].style.width = '40px';
        document.querySelectorAll('td')[2].style.width = '40px';
        document.querySelector('.plus').style.top = `${top}px`;
        document.querySelector('.block_btn').style.flexDirection = 'column';
        document.querySelector('#block_tb').className = 'col-xs-8 col-xs-offset-1 block_tb';
        document.querySelector('#block_btn').className = 'col-xs-2';

        tbl.appendChild(tbd);
    }
    // CREATE TBODY -> TR + TD
    else{
        var  tbd = document.getElementById('tbd');
        var tr = document.createElement('tr');
        var a = document.createElement('a');

        var theFirstChild = tbd.firstChild;

        for (var i = 0; i < 3; i++) {
            var td = document.createElement('td');
            td.appendChild(a);
            tr.appendChild(td);
        }

        //назначение класа кнопке (add)
        a.className = 'a_plus';
        //характерискити неких размеров
        document.querySelectorAll('td')[0].style.width = '40px';
        document.querySelectorAll('td')[2].style.width = '40px';
        var topp = parseInt(document.querySelector('.plus').style.top);
        topp += top;
        document.querySelector('.plus').style.top = `${topp}px`;


        tbd.insertBefore(tr, theFirstChild);
    }
    qq = false;


    // ЗАПОЛНЕНИЕ И ОЧИСТКА ТАБЛИЦЫ
    var a=document.querySelector(".inp_address");
    var td1 = document.querySelectorAll('td')[1];
    var td0 = document.querySelectorAll('td')[0];
    var td_a = document.querySelector('.a_plus');
    console.log(td_a);

    //функция добавления и удаления элементов
    function save(){

        mas.unshift(a.value); // Из инпутов в массив
        console.log(mas);

        td_a.parentElement.onclick = function(m, i) {
            console.log(this, m, i);
            this
                .parentElement
                .parentElement.removeChild(this.parentElement);

            m.splice(i, 1);

            topp = parseInt(document.querySelector('.plus').style.top);
            topp -= top;
            document.querySelector('.plus').style.top = `${topp}px`;
        }.bind(td_a.parentElement, mas, mas.length - 1)


        td1.appendChild(document.createTextNode(a.value));
        td_a.appendChild(document.createTextNode("+"));
        td0.appendChild(document.createTextNode(mas.length));
    }
    save();
}
