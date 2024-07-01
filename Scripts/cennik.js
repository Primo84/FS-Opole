
let MenuVisible = false;

let spanElements = [];          //Sprzątanie jednorazowe

let divElements = [];           //Sprzątanie jednorazowe

let SelectedDiv = 0;            //Sprzątanie jednorazowe



let spanElements_1 = [];          //Sprzątanie cykliczne

let divElements_1 = [];           //Sprzątanie cykliczne

let SelectedDiv_1 = 0;            //Sprzątanie cykliczne


let spanElements_2 = [];          //Sprzątanie po remontach

let divElements_2 = [];           //Sprzątanie po remontach

let SelectedDiv_2 = 0;            //Sprzątanie po remontach


/*

               Scrolling window to contact


*/


function ScrollWindow(SY)
{
    let prevSY;

    if(window.scrollY < SY)
    {
        prevSY=window.scrollY;

        if(SY - window.scrollY > 200)
            window.scrollBy(0,200);
        else 
            window.scrollBy(0,SY-window.scrollY);

          //if(window.scrollY < SY && window.scrollY != prevSY)
            if(window.scrollY != prevSY)
                TimeWindowScroll = setTimeout(ScrollWindow, 50, Y);

    }
   
}


/*

               Top Menu  Events


*/

function MenuMouseEnt()
{
   $('div.MainMenuButton span').css("background-color", "rgb(179, 115, 31)");
}

function MenuMouseLeave()
{
    $('div.MainMenuButton span').css("background-color", "rgb(106, 78, 78)");
}

function MenuItemMouseEnt(Item)
{

   $(Item).css("color", "rgb(179, 115, 31)");
}

function MenuItemMouseLeave(Item)
{
    $(Item).css("color", "rgb(243, 241, 235)");
}


function MenuItemMouseClick(ItemText)
{
    let El;
    let h;
    let i;

    if(ItemText == 'Kontakt')
    {

        El=document.getElementById("footer");

        h = parseInt($('#footer').css('height').slice(0,-2),10); 


        Y = El.offsetTop + h;

        ScrollWindow(Y);

    }
    else if(ItemText=='HomePage')
    {
        window.location.href = "index.html";
    }
    else if(ItemText=='Galery')
    {
        window.location.href = "Galery.html";
    }

}


function ShowHideMenu()
{
    let trans ="";
    let y = 0;
    let h = "";

    trans = $('div.MainMenuButton').css("height");

    h = parseInt(trans.slice(0,-2),10);

    y = h * 0.14;

    trans=""

    trans = $('span.MainMenuButt1').css("height");

    h = parseFloat(trans.slice(0,-2));

    y  += h;

    trans = "translate(0px,-" + y.toFixed(2) + "px)";

    if(MenuVisible == false)
    {
        $('table.MainMenuTable').css({'left' : '0px', 'top' : '0px'});

        $('span.MainMenuButt3').hide();

         $('span.MainMenuButt1').css("top", y.toString() + "px");

        $('span.MainMenuButt2').css("transform", "rotate(45deg)");


        $('span.MainMenuButt1').css("transform",  "rotate(-45deg) ");

        $('#Tel').css('z-index', '1');


        MenuVisible = true;

    }
    else
    {
        $('table.MainMenuTable').css({'left' : '110%', 'top' : '-110%'});

        $('span.MainMenuButt3').show();

        $('span.MainMenuButt1').css("top", "0px");

        $('span.MainMenuButt2').css("transform", "rotate(0deg)");


        $('span.MainMenuButt1').css("transform",  "rotate(0deg)");

        $('#Tel').css('z-index', '2');

        MenuVisible = false;

    }

}

/*

               Cennik - mieszkania standardowe span functions


*/



function SpanMouseEnter(id)
{

    if(id < 3)
    {

        $(divElements[id]).find('span').css("color", "yellow");

    }
    else if(id <6)
    {
        id -= 3;
        $(divElements_1[id]).find('span').css("color", "yellow");

    }
    else
    {
        id -= 6;
        $(divElements_2[id]).find('span').css("color", "yellow");

    }

}


function SpanMouseLeave(id)
{

    if(id < 3)
        {
    
            $(divElements[id]).find('span').css("color", "rgb(26, 37, 124)");
    
        }
        else if(id < 6)
        {
            id -= 3;
            $(divElements_1[id]).find('span').css("color", "rgb(26, 37, 124)");
    
        }
        else
        {
            id -= 6;
            $(divElements_2[id]).find('span').css("color", "rgb(26, 37, 124)");

        }

}

function SpanClick(id)
{
    if(id < 3)
    {
        if(id < Ceny_1.length && spanElements.length == 4)
        {
            $(divElements[SelectedDiv]).css("background-color", "white");

            $(divElements[id]).css("background-color", "rgb(23, 222, 156)");

            $(divElements[id]).find('span').css("color", "rgb(26, 37, 124)");

            SelectedDiv = id;

            spanElements.forEach((spanEl, indeks)=>{
                $(spanEl).html(Ceny_1[id][indeks]);
            })

        }
    }
    else if (id < 6)
    {

        id -= 3;
        
        if(id < Ceny_2.length && spanElements_1.length == 4)
            {
                $(divElements_1[SelectedDiv_1]).css("background-color", "white");
    
                $(divElements_1[id]).css("background-color", "rgb(23, 222, 156)");

                $(divElements_1[id]).find('span').css("color", "rgb(26, 37, 124)");
    
                SelectedDiv_1 = id;
    
                spanElements_1.forEach((spanEl, indeks)=>{
                    $(spanEl).html(Ceny_2[id][indeks]);
                })
    
            }

    }
    else
    {
        id -= 6;

        if(id < Ceny_3.length && spanElements_2.length == 4)
            {
                $(divElements_2[SelectedDiv_2]).css("background-color", "white");
    
                $(divElements_2[id]).css("background-color", "rgb(23, 222, 156)");

                $(divElements_2[id]).find('span').css("color", "rgb(26, 37, 124)");
    
                SelectedDiv_2 = id;
    
                spanElements_2.forEach((spanEl, indeks)=>{
                    $(spanEl).html(Ceny_3[id][indeks]);
                })
    
            }

    }
}

$(document).ready(()=>{

    let el;

    $('#Text_1 img').animate({
        "opacity" : "0.8"
    },5000, "linear");

    //Domy Standardowe


    el = $("span.Ceny_1_param_1");

    $(el).each((indeks)=>{
        spanElements.push(el[indeks]);
    })

    el = $("div.Cennik_1_Button");

    $(el).each((indeks)=>{
        divElements.push(el[indeks]);
    })

     //Mieszkania Standardowe

    el = $("span.Ceny_2_param_1");

    $(el).each((indeks)=>{
        spanElements_1.push(el[indeks]);
    })

    el = $("div.Cennik_2_Button");

    $(el).each((indeks)=>{
        divElements_1.push(el[indeks]);
    })

    //Biura

    el = $("span.Ceny_3_param_1");

    $(el).each((indeks)=>{
        spanElements_2.push(el[indeks]);
    })

    el = $("div.Cennik_3_Button");

    $(el).each((indeks)=>{
        divElements_2.push(el[indeks]);
    })

    $('#Text_1 span').animate({
        "opacity" : "1"
    },5000, "linear");

})

