var number=Math.floor(Math.random()*6)+1;  

var diceNumber="images/dice"+number+".png";

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", diceNumber);



number2=Math.floor(Math.random()*6)+1;  
var diceNumber2="images/dice"+number2+".png";

var image2=document.querySelectorAll('img')[1];

image2.setAttribute("src", diceNumber2);

if (number>number2)
{
    document.querySelector("h2").innerHTML="Player1 won";
}

else if(number<number2)
{
    document.querySelector('h2').innerHTML="Player2 won "
}

else{
    document.querySelector("h2").innerHTML="Draw"
}
