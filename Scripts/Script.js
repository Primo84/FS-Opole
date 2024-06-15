
let MenuVisible = false;


/*

               Top Menu  Events


*/

function MenuMouseEnt()
{
   $('div.MainMenuButton span').css("background-color", "rgb(179, 115, 31)");
}

function MenuMouseLeave()
{
    $('div.MainMenuButton span').css("background-color", "rgb(243, 241, 235)");
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

    if(ItemText=='Cennik')
    {
        window.location.href = "Diner.html";
    }

    if(ItemText == 'Kontakt')
    {


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


        MenuVisible = true;

    }
    else
    {
        $('table.MainMenuTable').css({'left' : '110%', 'top' : '-110%'});

        $('span.MainMenuButt3').show();

        $('span.MainMenuButt1').css("top", "0px");

        $('span.MainMenuButt2').css("transform", "rotate(0deg)");


        $('span.MainMenuButt1').css("transform",  "rotate(0deg)");

        MenuVisible = false;

    }

}
function onload()
{
    const el = $('#motto');
    $('#motto').fadeIn(4000);
}
