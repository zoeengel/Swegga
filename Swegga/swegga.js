function femaleprice(x,y){
    amount = parseFloat(document.getElementById("quantity_1").value);
    //price = parseFloat(document.getElementById("fprice").value);
    var answer = document.getElementById("ftotal");
    answer.value= Math.round(150.95*amount*100)/100 ;
    amount1 = parseFloat(document.getElementById("quantity_2").value);
    //price = parseFloat(document.getElementById("fprice").value);
    var answer1 = document.getElementById("mtotal");
    answer1.value= Math.round(180.95*amount1*100)/100 ;
    x = parseFloat(document.getElementById("ftotal").value);
    y = parseFloat(document.getElementById("mtotal").value);
    var answer = document.getElementById("total");
    answer.value= x + y ;
}