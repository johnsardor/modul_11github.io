let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#FFFFFF"
tg.MainButton.color = "#FC3005"


// -----------------------1--------------------------

let item1 = " "
let n_count1 = 0


count1 = document.getElementById("count");
let rbtn1 = document.getElementById("rbtn1");
let abtn1 = document.getElementById("abtn1");

abtn1.addEventListener("click", function () {
    count1.innerText = n_count1 += 1;
    count1.style.display = "inline-block";
    tg.MainButton.setText("Burger");
    tg.MainButton.show();
    item1 = "Burger/3/" + count1.innerText;

});
rbtn1.addEventListener("click", function () {
    if (n_count1 > 0) {
        count1.innerText = n_count1 -= 1;
    }
    count1.style.display = "inline-block";
    item1 = "Burger/12000/" + count1.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});
// ------------------2--------------------

count2 = document.getElementById("count2");
rbtn2 = document.getElementById("rbtn2");
abtn2 = document.getElementById("abtn2");
let item2 = " ";
let n_count2 = 0;
rbtn2.addEventListener("click", function () {
    if (n_count2 > 0) {
        count2.innerText = n_count2 -= 1;
    }

    count2.style.display = "inline-block";
    item2 = "KFC/120000/" + count2.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn2.addEventListener("click", function () {
    count2.innerText = n_count2 += 1;
    count2.style.display = "inline-block";
    item2 = "KFC/120000/" + count2.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

// ------------------3--------------------

count3 = document.getElementById("count3");
rbtn3 = document.getElementById("rbtn3");
abtn3 = document.getElementById("abtn3");
let item3 = " ";
let n_count3 = 0;
rbtn3.addEventListener("click", function () {
    if (n_count3 > 0) {
        count3.innerText = n_count3 -= 1;
    }

    count3.style.display = "inline-block";
    item3 = "Hot dog/12000/" + count3.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn3.addEventListener("click", function () {
    count3.innerText = n_count3 += 1;
    count3.style.display = "inline-block";
    item3 = "Hot dog/12000/" + count3.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

// -------------------4-------------------

count4 = document.getElementById("count4");
rbtn4 = document.getElementById("rbtn4");
abtn4 = document.getElementById("abtn4");
let item4 = " ";
let n_count4 = 0;
rbtn4.addEventListener("click", function () {
    if (n_count4 > 0) {
        count4.innerText = n_count4 -= 1;
    }
    item4 = "Pizza/50000/" + count4.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn4.addEventListener("click", function () {
    count4.innerText = n_count4 += 1;
    count4.style.display = "inline-block";
    item4 = "Pizza/50000/" + count4.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});



count15 = document.getElementById("count15");
rbtn15 = document.getElementById("rbtn15");
abtn15 = document.getElementById("abtn15");
let item15 = " ";
let n_count15 = 0;
rbtn15.addEventListener("click", function () {
    if (n_count15 > 0) {
        count15.innerText = n_count15 -= 1;
    }
    item15 = "Lavash/40000/" + count15.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn15.addEventListener("click", function () {
    count15.innerText = n_count15 += 1;
    count15.style.display = "inline-block";
    item15 = "Lavash/40000/" + count15.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});



count16 = document.getElementById("count16");
rbtn16 = document.getElementById("rbtn16");
abtn16 = document.getElementById("abtn16");
let item16 = " ";
let n_count16 = 0;
rbtn15.addEventListener("click", function () {
    if (n_count16 > 0) {
        count16.innerText = n_count16 -= 1;
    }
    item16 = "Sendvich/14000/" + count16.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn16.addEventListener("click", function () {
    count16.innerText = n_count16 += 1;
    count16.style.display = "inline-block";
    item16 = "Sendvich/14000/" + count16.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

// Kitoblar
count5 = document.getElementById("count5");
rbtn5 = document.getElementById("rbtn5");
abtn5 = document.getElementById("abtn5");
let item5 = " ";
let n_count5 = 0;
rbtn5.addEventListener("click", function () {
    if (n_count5 > 0) {
        count5.innerText = n_count5 -= 1;
    }
    item5 = "Hokimyatni 48 qoidasi/40000/" + count5.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn5.addEventListener("click", function () {
    count5.innerText = n_count5 += 1;
    count5.style.display = "inline-block";
    item5 = "Hokimyatni 48 qoidasi/40000/" + count5.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

count6 = document.getElementById("count6");
rbtn6 = document.getElementById("rbtn6");
abtn6 = document.getElementById("abtn6");
let item6 = " ";
let n_count6 = 0;
rbtn6.addEventListener("click", function () {
    if (n_count6 > 0) {
        count6.innerText = n_count6 -= 1;
    }
    item6 = "Rich dad and poor dad/55000" + count6.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn6.addEventListener("click", function () {
    count6.innerText = n_count6 += 1;
    count6.style.display = "inline-block";
    item6 = "Rich dad and poor dad/55000" + count6.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();

});
count7 = document.getElementById("count7");
rbtn7 = document.getElementById("rbtn7");
abtn7 = document.getElementById("abtn7");
let item7 = " ";
let n_count7 = 0;
rbtn7.addEventListener("click", function () {
    if (n_count7 > 0) {
        count7.innerText = n_count7 -= 1;
    }
    item7 = "Mehrobdan chayon/35000" + count7.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn7.addEventListener("click", function () {
    count7.innerText = n_count7 += 1;
    count7.style.display = "inline-block";
    item7 = "Mehrobdan chayon/35000/" + count7.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

count8 = document.getElementById("count8");
rbtn8 = document.getElementById("rbtn8");
abtn8 = document.getElementById("abtn8");
let item8 = " ";
let n_count8 = 0;
rbtn8.addEventListener("click", function () {
    if (n_count8 > 0) {
        count8.innerText = n_count8 -= 1;
    }
    item8 = "Molxona/40000" + count8.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn8.addEventListener("click", function () {
    count8.innerText = n_count8 += 1;
    count8.style.display = "inline-block";
    item8 = "Molxona/40000/" + count8.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


count9 = document.getElementById("count9");
rbtn9 = document.getElementById("rbtn9");
abtn9 = document.getElementById("abtn9");
let item9 = " ";
let n_count9 = 0;
rbtn9.addEventListener("click", function () {
    if (n_count9 > 0) {
        count9.innerText = n_count9 -= 1;
    }
    item9 = "Utkan kunlar/40000" + count9.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn9.addEventListener("click", function () {
    count9.innerText = n_count9 += 1;
    count9.style.display = "inline-block";
    item9 = "Utkan kunlar/40000/" + count9.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

count10 = document.getElementById("count10");
rbtn10 = document.getElementById("rbtn10");
abtn10 = document.getElementById("abtn10");
let item10 = " ";
let n_count10 = 0;
rbtn10.addEventListener("click", function () {
    if (n_count10 > 0) {
        count10.innerText = n_count10 -= 1;
    }
    item10 = "Tom Sawyer/120000/" + count10.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn10.addEventListener("click", function () {
    count10.innerText = n_count10 += 1;
    count10.style.display = "inline-block";
    item10 = "Tom Sawyer/120000/" + count10.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();

});

// Ichimliklar
count31 = document.getElementById("count31");
rbtn31 = document.getElementById("rbtn31");
abtn31 = document.getElementById("abtn31");
let item31 = " ";
let n_count31 = 0;
rbtn31.addEventListener("click", function () {
    if (n_count31 > 0) {
        count31.innerText = n_count31 -= 1;
    }
    item31 = "Cola/40000/" + count31.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn31.addEventListener("click", function () {
    count31.innerText = n_count31 += 1;
    count31.style.display = "inline-block";
    item31 = "Cola/40000/" + count31.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


count32 = document.getElementById("count32");
rbtn32 = document.getElementById("rbtn32");
abtn32 = document.getElementById("abtn32");
let item32 = " ";
let n_count32 = 0;
rbtn32.addEventListener("click", function () {
    if (n_count32 > 0) {
        count32.innerText = n_count32 -= 1;
    }
    item32 = "Cola/40000/" + count31.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn32.addEventListener("click", function () {
    count32.innerText = n_count32 += 1;
    count32.style.display = "inline-block";
    item32 = "Cola/40000/" + count32.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


count33 = document.getElementById("count33");
rbtn33 = document.getElementById("rbtn33");
abtn33 = document.getElementById("abtn33");
let item33 = " ";
let n_count33 = 0;
rbtn33.addEventListener("click", function () {
    if (n_count33 > 0) {
        count33.innerText = n_count33 -= 1;
    }
    item33 = "Ocard/500000/" + count33.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn33.addEventListener("click", function () {
    count33.innerText = n_count33 += 1;
    count33.style.display = "inline-block";
    item33 = "Ocard/500000/" + count33.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

count34 = document.getElementById("count34");
rbtn34 = document.getElementById("rbtn34");
abtn31 = document.getElementById("abtn34");
let item34 = " ";
let n_count34 = 0;
rbtn34.addEventListener("click", function () {
    if (n_count34 > 0) {
        count34.innerText = n_count34 -= 1;
    }
    item34 = "Dena/13000/" + count34.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn34.addEventListener("click", function () {
    count34.innerText = n_count34 += 1;
    count34.style.display = "inline-block";
    item34 = "Dena/13000/" + count34.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

Telegram.WebApp.onEvent("mainButtonClicked", function () {
    data = item1 + "|" + item2 + "|" + item3 + "|" + item4 + "|" + item15 + "|" + item16 + "|" + item5 + "|"
        + item6 + "|" + item7 + "|" + item8 + "|" + item9 + "|"  + item10 + "|" + item31 + "|" + item32 + "|" + item33 + "|" + item34
    tg.sendData(data);
});



