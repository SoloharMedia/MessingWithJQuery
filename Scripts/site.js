/*================================================<<< Header transitions (Header)===*/
setInterval(headerChangeHor, 7000);
setInterval(headerChangeVert, 7000);
var headerHorCurPos = 400;
var headerVertCurPos = 0;
function headerChangeHor()//<=== Header that switches Horizontally
{
    headerHorCurPos -= 800;
    $("#headerHorSlider").animate({
        "margin-left" : headerHorCurPos
    }, 1000, "swing");
    if(headerHorCurPos == -1200)
    {
        headerHorCurPos = 1200;
    }
}
function headerChangeVert()//<=== Header that switches Vertically
{
    headerVertCurPos -= 300;
    $("#headerVertSlider").animate({
        "margin-bottom" : headerVertCurPos
    }, 1000, "swing");
    if(headerVertCurPos == -600)
    {
        headerVertCurPos = 300;
    }
}
/*================================================<<< Code Typing Background (Port 1)===*/
var snippets = new Array(14);
snippets[0] = "System.out.println('Hello World');System.out.println('Hello World');";
snippets[1] = "document.getElementById(mainContent).css(background, #25483)";
snippets[2] = "var userIdLogin = prompt()Enter Your Desired User Name For Account Purposes";
snippets[3] = "$(#header).animate({bottom : 200, left : 400}, 20000, swing)";
snippets[4] = "$(.blinds).animate({height : 10}, 500, swing);$(#stringBlinds).attr(onclick, openBlinds(););";
snippets[5] = "for(i = 0; i <= 20; i++){document.write(Your name is i)}";
snippets[6] = "<form action=email.php method=post><innput type=text name=FirstName><form>";
snippets[7] = "<rectangle x:name=mainBoard height=400px width=800px strokeThickness=2px />";
snippets[8] = "document.getElementById(greenSpace).setValue(action post)";
snippets[9] = "System.out.println('Hello World');System.out.println('Hello World');";

var distanceCounter = 0;
var lineCounter = 0;
setTimeout(createLine,1000);
var randSnippet = 0;
function createLine()//<=== Creates a Paragraph (places at bottom)
{
    $("#port1").append("<p id='code'></p");
    $("#code").attr("id", "code" + lineCounter);
    $("#code" + lineCounter).css("height", "30px");
    $("#code" + lineCounter).css("width", "100%");
    $("#code" + lineCounter).css("opacity", ".3");
    $("#code" + lineCounter).css("position", "absolute");
    $("#code" + lineCounter).css("bottom", "0");
    $("#code" + lineCounter).css("color", "#CCC");
    setTimeout(typeCode, 50);
    $("#code" + lineCounter).animate({
        bottom : 410
    }, 45000, "linear", function(){removeParagraph();});
    randSnippet = Math.floor((Math.random()*10));         //<=== Chooses a random number for a code snippet
}
var charCounter = 0;
var entireLine = "";
var lengthToMove = 60;
function typeCode()//<=== displays char of string chosen 100 milliseconds after the other until finished with string
{
    if(charCounter <= snippets[randSnippet].length)
    {
        var charToDisplay = snippets[randSnippet].charAt(charCounter);
        entireLine += charToDisplay;
        $("#code" + lineCounter).html(entireLine);
        charCounter++;
        setTimeout(typeCode, 100);
    }
    else
    {
        entireLine = "";
        setTimeout(createLine,100);
        lineCounter++;
        charCounter = 0;
    }
}
function removeParagraph()//<=== Removes Paragraph once out of view
{
    var paragraphToRemove = document.getElementById("port1");
    paragraphToRemove.removeChild(paragraphToRemove.childNodes[0]);
}
/*================================================<<< Fish Leaking Water Clock (Port 2)===*/
var secondsCount = 0;
var minutesCount = 0;
var hoursCount = 0;
setTimeout(moveFish, 100);
setTimeout(setDayMonthYear, 100);
setInterval(moveFish, 23000);
setInterval(startTime, 1000);
setInterval(createWaterDropSeconds, 1000);
function createWaterDropSeconds()//<=====   Creates Drop of Water (Every Second)
{
    $("#dropper3").append("<div id='drop3'></div");
    $("#drop3").css("position", "absolute");
    $("#drop3").css("left", "45px");
    $("#drop3").css("z-index", "10");
    $("#drop3").css("border-radius", "100%");
    $("#drop3").height(16).width(8);
    $("#drop3").css("background", "#13366d").animate(
            {
                top : 215
                
            }, 500,"swing",function(){removeDropSeconds();});
}
function removeDropSeconds()    
{
    $("#drop3").remove();
}
function createWaterDropMinutes()//<=====   Creates Drop of Water (Every Minute)
{
    $("#dropper2").append("<div id='drop2'></div");
    $("#drop2").css("position", "absolute");
    $("#drop2").css("left", "45px");
    $("#drop2").css("z-index", "10");
    $("#drop2").css("border-radius", "100%");
    $("#drop2").height(16).width(8);
    $("#drop2").css("background", "#13366d").animate(
            {
                top : 215
                
            }, 500,"swing",function(){removeDropMinutes();});
}
function removeDropMinutes()
{
    $("#drop2").remove();
}
function createWaterDropHours()//<=====   Creates Drop of Water (Every Hour)
{
    $("#dropper1").append("<div id='drop1'></div");
    $("#drop1").css("position", "absolute");
    $("#drop1").css("left", "45px");
    $("#drop1").css("z-index", "10");
    $("#drop1").css("border-radius", "100%");
    $("#drop1").height(16).width(8);
    $("#drop1").css("background", "#13366d").animate(
            {
                top : 215
                
            }, 500,"swing",function(){removeDropHours();});
            
}
function removeDropHours()
{
    $("#drop1").remove();
}
/*==================================   The Fish   ================================*/
function moveFish()//<=== Animation for fish moving consistantly in background
{
    $("#fish").animate(
        {
            "margin-left" : 10,
            "margin-top" : 0
        }, 4000, "swing", function(){flipFish();}).animate({
            "margin-top" : 30
        }, 6000).animate(
                    {
                        margin:"0 auto 0 350px"
                    }, 4000, "swing", function(){flipFishBack();}).animate({
            "margin-top" : 30
        }, 6000);
}
function flipFish()
{
    $("#fish").css('transform', 'rotate('+ "0" +'deg) scaleX(-1)');
}
function flipFishBack()
{
    $("#fish").css('transform', 'rotate('+ "0" +'deg) scaleX(1)');
}
/*==================================   The Window/Blinds   ================================*/
function openBlinds()//<=== Opens Blinds for a Peak
{
    $(".blinds").css("transform", "rotateX(80deg)");
    $("#stringBlinds").attr("onclick", "reallyOpenBlinds();");
}
function reallyOpenBlinds()//<=== Opens Blinds fully
{
    $(".blinds").css("transform", "rotateX(0deg)");
    $(".blinds").animate({
        height : 1
    }, 500, "swing");
    $("#stringBlinds").attr("onclick", "closeBlinds();");
}
function closeBlinds()
{
    $(".blinds").animate({
        height : 10
    }, 500, "swing");
    $("#stringBlinds").attr("onclick", "openBlinds();");
}
function startTime()//<=== Function that Loads Immidietly, sets The Time for clock
{
    var todayDate = new Date();
    var hours = todayDate.getHours();
    var minutes = todayDate.getMinutes();
    var seconds = todayDate.getSeconds();
    if(hours =>19 || hours <= 5)//<=== Sets either dark sky with moon or light sky with sun
    {
        $("#window").css("background", "#0e0947");
        $("#sun").css("visibility", "collapse");
        $("#moon").css("visibility", "visible");
    }
    if(hours => 6 && hours <= 18)
    {
        $("#window").css("background", "#82c9f2");
        $("#moon").css("visibility", "collapse");
        $("#sun").css("visibility", "visible");
    }
    var theTank3 = document.getElementById("waterInTank3");//<=== Sets Height of Seconds Tank
    var height3 = theTank3.offsetHeight;
    var newHeight3 = seconds * 3;
    theTank3.style.height = newHeight3 + "px";
    
    var theTank2 = document.getElementById("waterInTank2");//<=== Sets Height of Minutes Tank
    var height2 = theTank2.offsetHeight;
    var newHeight2 = minutes * 3;
    theTank2.style.height = newHeight2 + "px";
    
    var theTank1 = document.getElementById("waterInTank1");//<=== Sets Height of Hours Tank
    var height1 = theTank1.offsetHeight;
    var newHeight1 = hours * 3;
    theTank1.style.height = newHeight1 + "px";
        
        if(hours >= 13)//<=== Turns 24 Hour clock into a 12 Hour clock
        {
            hours -=12;
        }
    
    $("#txtSeconds").html(seconds);
    $("#txtMinutes").html(minutes);
    $("#txtHours").html(hours);
    if(seconds == 59)
    {
        createWaterDropMinutes();
    }
    if(minutes == 59 && seconds == 59)
    {
        createWaterDropHours();
    }
}
function setDayMonthYear()
{
    var theDate = new Date();
    var theDay = theDate.getDay();
    getTheDay(theDay);
    var theMonth = theDate.getMonth();
    getTheMonth(theMonth);
    var theYear = theDate.getFullYear();
    var curDay = theDate.getDate();
    $("#year").html(theYear);
    $("#day" + curDay).css("background", "#89210c");
    $("#day" + curDay).css("color", "#FFF");
/*===================     Puts right amount of days on calendar accoring to month / year (default is 31)     =========*/
    if(theMonth == 10 && theYear == 2016)//<===== November 2016
    {
        $("#day31").remove();
    }
    if(theMonth == 1 && theYear == 2017)//<===== Febuary 2017
    {
        $("#day29").remove();
        $("#day30").remove();
        $("#day31").remove();
    }
    if(theMonth == 3 && theYear == 2017)//<===== April 2017
    {
        $("#day31").remove();
    }
    if(theMonth == 5 && theYear == 2017)//<===== June 2017
    {
        $("#day31").remove();
    }
    if(theMonth == 8 && theYear == 2017)//<===== September 2017
    {
        $("#day31").remove();
    }
    if(theMonth == 10 && theYear == 2017)//<===== November 2017
    {
        $("#day31").remove();
    }
    
}
function getTheDay(sel)
{
    switch(sel)
    {
        case 0:
        {
            theDay = "Sunday";
            break;
        }
        case 1:
        {
            theDay = "Monday";
            break;
        }
        case 2:
        {
            theDay = "Tuesday";
            break;
        }
        case 3:
        {
            theDay = "Wednesday";
            break;
        }
        case 4:
        {
            theDay = "Thursday";
            break;
        }
        case 5:
        {
            theDay = "Friday";
            break;
        }
        case 6:
        {
            theDay = "Saturday";
            break;
        }
    }
    $("#day").html(theDay);
}
function getTheMonth(sel)
{
    switch(sel)
    {
        case 0:
        {
            theMonth = "January";
            break;
        }
        case 1:
        {
            theMonth = "Febuary";
            break;
        }
        case 2:
        {
            theMonth = "March";
            break;
        }
        case 3:
        {
            theMonth = "April";
            break;
        }
        case 4:
        {
            theMonth = "May";
            break;
        }
        case 5:
        {
            theMonth = "June";
            break;
        }
        case 6:
        {
            theMonth = "July";
            break;
        }
        case 7:
        {
            theMonth = "August";
            break;
        }
        case 8:
        {
            theMonth = "September";
            break;
        }
        case 9:
        {
            theMonth = "October";
            break;
        }
        case 10:
        {
            theMonth = "November";
            break;
        }
        case 11:
        {
            theMonth = "December";
            break;
        }
    }
    $("#month").html(theMonth);
}
/*================================================<<< Purple Folders/Sections (Port 3)===*/
function changeWidth(sel)//<=== Changes folder size depending on which one you click
{
    switch(sel)
    {
        case 0:
        {
            $("#leftFolder").animate(
            {
                width:"80%"
            }, 500, "swing");
            $("#midFolder").animate(
            {
                width:"10%"
            }, 500, "swing");
            $("#rightFolder").animate(
            {
                width:"10%"
            }, 500, "swing");
            $(".computerWhole").fadeIn(2000).css("display", "block");
            $(".screenshotImages").css("display", "none");
            document.getElementById("screenshotCover").setAttribute("style", "visibility:collapse;");
            break;
        }
        case 1:
        {
            $("#leftFolder").animate(
            {
                width:"10%"
            }, 500, "swing");
            $("#midFolder").animate(
            {
                width:"80%"
            }, 500, "swing");
            $("#rightFolder").animate(
            {
                width:"10%"
            }, 500, "swing");
            $(".computerWhole").css("display", "none");
            $(".screenshotImages").fadeIn(2000).css("display", "inline-block");
            break;
        }
        case 2:
        {
            $("#leftFolder").animate(
            {
                width:"10%"
            }, 500, "swing");
            $("#midFolder").animate(
            {
                width:"10%"
            }, 500, "swing");
            $("#rightFolder").animate(
            {
                width:"80%"
            }, 500, "swing");
            $(".computerWhole").css("display", "none");
            $(".screenshotImages").css("display", "none");
            document.getElementById("screenshotCover").setAttribute("style", "visibility:collapse;");
            break;
        }
    }
}
function displayScreenshot(_src)//<=== Displays image in lightbox(Depending whhich one you click on)
{
    document.getElementById("chosenScreenshot").src = _src;
    document.getElementById("screenshotCover").setAttribute("style", "visibility:visible;");
}
function closeScreenshotCover()
{
    document.getElementById("screenshotCover").setAttribute("style", "visibility:collapse;");
}
/*================================================<<< Spinning Profile Picture (Port 4)===*/

function spinProfile()
{
    $("#portPicture").css('transform', 'rotateY('+ "2880" +'deg) scaleX(1)');
    layIcon1();
}
function layIcon1()//Facebook Icon
{
    $("#port4").append("<a href='https://www.facebook.com/johnathon.hardy.9' target='_blank'><div id='icon1'></div></a");
    $("#icon1").mouseover(function()
    {
        placeContactInfo(0);
    });
    $("#icon1").height(70).width(70);
    $("#icon1").css("border", "3px solid #CCC");
    $("#icon1").css("border-radius", "100%");
    $("#icon1").css("position", "absolute");
    $("#icon1").css("margin", "0 auto");
    $("#icon1").css("left", "450px");
    $("#icon1").css("top", "100px");
    $("#icon1").animate({
        left : 350,
        top : 300
    }, 500, "swing", function(){layIcon2();});
}
function layIcon2()//Linkdin Icon
{
    $("#port4").append("<a href='https://ca.linkedin.com/in/johnathon-hardy-731281126' target='_blank'><div id='icon2'></div></a");
    $("#icon2").mouseover(function()
    {
        placeContactInfo(1);
    });
    $("#icon2").height(70).width(70);
    $("#icon2").css("border", "3px solid #CCC");
    $("#icon2").css("border-radius", "100%");
    $("#icon2").css("position", "absolute");
    $("#icon2").css("margin", "0 auto");
    $("#icon2").css("left", "450px");
    $("#icon2").css("top", "100px");
    $("#icon2").animate({
        left : 466,
        top : 300
    }, 500, "swing", function(){layIcon3();});
}
function layIcon3()//Twitter Icon
{
    $("#port4").append("<a href='https://twitter.com/SoloharStudios' target='_blank'><div id='icon3'></div><a/");
    $("#icon3").mouseover(function()
    {
        placeContactInfo(2);
    });
    $("#icon3").height(70).width(70);
    $("#icon3").css("border", "3px solid #CCC");
    $("#icon3").css("border-radius", "100%");
    $("#icon3").css("position", "absolute");
    $("#icon3").css("margin", "0 auto");
    $("#icon3").css("left", "450px");
    $("#icon3").css("top", "100px");
    $("#icon3").animate({
        left : 582,
        top : 300
    }, 500, "swing", function(){layIcon4();});
}
function layIcon4()//GitHub Icon
{
    $("#port4").append("<a href='https://github.com/Solohar' target='_blank'><div id='icon4'></div></a");
    $("#icon4").mouseover(function()
    {
        placeContactInfo(3);
    });
    $("#icon4").height(70).width(70);
    $("#icon4").css("border", "3px solid #CCC");
    $("#icon4").css("border-radius", "100%");
    $("#icon4").css("position", "absolute");
    $("#icon4").css("margin", "0 auto");
    $("#icon4").css("left", "450px");
    $("#icon4").css("top", "100px");
    $("#icon4").animate({
        left : 698,
        top : 300
    }, 500, "swing", function(){layIcon5();});
}
function layIcon5()//Code Pen Icon
{
    $("#port4").append("<a href='http://codepen.io/Solohar/' target='_blank'><div id='icon5'></div><a/");
    $("#icon5").mouseover(function()
    {
        placeContactInfo(4);
    });
    $("#icon5").mouseout(function()
    {
        removeContactInfo();
    });
    $("#icon5").height(70).width(70);
    $("#icon5").css("border", "3px solid #CCC");
    $("#icon5").css("border-radius", "100%");
    $("#icon5").css("position", "absolute");
    $("#icon5").css("margin", "0 auto");
    $("#icon5").css("left", "450px");
    $("#icon5").css("top", "100px");
    $("#icon5").animate({
        left : 814,
        top : 300
    }, 500, "swing", function(){layIcon6();});
}
function layIcon6()//E-Mail Icon
{
    $("#port4").append("<div id='icon6'></div");
    $("#icon6").mouseover(function()
    {
        placeContactInfo(5);
    });
    $("#icon6").height(70).width(70);
    $("#icon6").css("border", "3px solid #CCC");
    $("#icon6").css("border-radius", "100%");
    $("#icon6").css("position", "absolute");
    $("#icon6").css("margin", "0 auto");
    $("#icon6").css("left", "450px");
    $("#icon6").css("top", "100px");
    $("#icon6").animate({
        left : 930,
        top : 300
    }, 500, "swing", function(){layIcon7();});
}
function layIcon7()//Phone Icon
{
    $("#port4").append("<div id='icon7'></div");
    $("#icon7").mouseover(function()
    {
        placeContactInfo(6);
    });
    $("#icon7").height(70).width(70);
    $("#icon7").css("border", "3px solid #CCC");
    $("#icon7").css("border-radius", "100%");
    $("#icon7").css("position", "absolute");
    $("#icon7").css("margin", "0 auto");
    $("#icon7").css("left", "450px");
    $("#icon7").css("top", "100px");
    $("#icon7").animate({
        left : 1050,
        top : 300
    }, 500, "swing", function(){movePortPic();});
}
function movePortPic()//<=== Moves portfolio Pic, after Icons are created / creates content Box
{
    $("#portPicture").attr("onclick", "");
    $("#portPicture").animate({
        left : 50
    });
    $("#port4").append("<div id='contactViewBoxContainer'></div");
    $("#contactViewBoxContainer").css("position", "absolute");
    $("#contactViewBoxContainer").css("top", "50px");
    $("#contactViewBoxContainer").css("right", "-1000px");
    $("#contactViewBoxContainer").css("height", "auto");
    $("#contactViewBoxContainer").css("width", "700px");

    $("#contactViewBoxContainer").append("<div id='contactViewBoxRoll'></div");
    $("#contactViewBoxRoll").height(30).width(700);
    $("#contactViewBoxRoll").css("background", "linear-gradient(#c9cfd8, #3a3b3d)");
    $("#contactViewBoxRoll").css("border-radius", "10px");
    $("#contactViewBoxRoll").css("border", "1px solid #CCC");

    $("#contactViewBoxContainer").append("<div id='contactViewBoxContent'></div");
    $("#contactViewBoxContent").css("height", "5px");
    $("#contactViewBoxContent").css("width", "670px");
    $("#contactViewBoxContent").css("margin", "0 auto");
    $("#contactViewBoxContent").css("text-align", "center");
    $("#contactViewBoxContent").css("background", "linear-gradient(#3a3b3d 10%, #c9cfd8)");
    $("#contactViewBoxContent").css("border-bottom-left-radius", "10px");
    $("#contactViewBoxContent").css("border-bottom-right-radius", "10px");
    setTimeout(moveContentBox, 800);
}
function moveContentBox()
{
    $("#contactViewBoxContainer").animate({
        right : 90
    }, 800, "swing", function(){resizeContentHeight();});
}
function resizeContentHeight()
{
    $("#contactViewBoxContent").animate({
        height : 170
    }, 800, "swing");
    $("#contactViewBoxContent").append("<img id='contactImage' src=''></image");
    $("#contactImage").height(150).width(600);
    $("#contactImage").css("margin", "0 auto");
    $("#contactImage").css("border", "1px solid #CCC");
    $("#contactViewBoxContent").css("padding-top", "10px");
}
function placeContactInfo(sel)//<=== Places Content(Depending on which one you hover)
{
    switch(sel)
    {
        case 0: //<=== Facebook
        {
            $("#phoneNumber").remove();
            $("#contactForm").remove();
            $("#contactImage").remove();
            $("#contactViewBoxContent").append("<img id='contactImage' src=''></image");
            $("#contactImage").height(150).width(600);
            $("#contactImage").css("margin", "0 auto");
            $("#contactImage").css("border", "1px solid #CCC");
            $("#contactViewBoxContent").css("padding-top", "10px");
            $("#contactImage").attr("src", "Images/facebookBackground.png");
            break;
        }
        case 1: //<=== Linkdin
        {
            $("#phoneNumber").remove();
            $("#contactForm").remove();
            $("#contactImage").remove();
            $("#contactViewBoxContent").append("<img id='contactImage' src=''></image");
            $("#contactImage").height(150).width(600);
            $("#contactImage").css("margin", "0 auto");
            $("#contactImage").css("border", "1px solid #CCC");
            $("#contactViewBoxContent").css("padding-top", "10px");
            $("#contactImage").attr("src", "Images/linkdinBackground.jpg");
            break;
        }
        case 2: //<=== Twitter
        {
            $("#phoneNumber").remove();
            $("#contactForm").remove();
            $("#contactImage").remove();
            $("#contactViewBoxContent").append("<img id='contactImage' src=''></image");
            $("#contactImage").height(150).width(600);
            $("#contactImage").css("margin", "0 auto");
            $("#contactImage").css("border", "1px solid #CCC");
            $("#contactViewBoxContent").css("padding-top", "10px");
            $("#contactImage").attr("src", "Images/twitterBackground.png");
            break;
        }
        case 3: //<=== GitHub
        {
            $("#phoneNumber").remove();
            $("#contactForm").remove();
            $("#contactImage").remove();
            $("#contactViewBoxContent").append("<img id='contactImage' src=''></image");
            $("#contactImage").height(150).width(600);
            $("#contactImage").css("margin", "0 auto");
            $("#contactImage").css("border", "1px solid #CCC");
            $("#contactViewBoxContent").css("padding-top", "10px");
            $("#contactImage").attr("src", "Images/githubBackground.png");
            break;
        }
        case 4: //<=== CodePen
        {
            $("#phoneNumber").remove();
            $("#contactForm").remove();
            $("#contactImage").remove();
            $("#contactViewBoxContent").append("<img id='contactImage' src=''></image");
            $("#contactImage").height(150).width(600);
            $("#contactImage").css("margin", "0 auto");
            $("#contactImage").css("border", "1px solid #CCC");
            $("#contactViewBoxContent").css("padding-top", "10px");
            $("#contactImage").attr("src", "Images/codepenBackground.png");
            break;
        }
        case 5://<=== Email
        {
            $("#phoneNumber").remove();
            $("#contactForm").remove();
            $("#contactImage").remove();
            $("#contactViewBoxContent").append("<form name='email' action='mailto:soloharstudios@gmail.com'></form");
            $("#contactForm").height(160).width(650);
            $("#contactForm").css("background", "#222");
            $("#contactForm").css("margin", "0 auto");
            $("#contactForm").css("border-radius", "5px");
            $("#contactForm").css("overflow", "auto");
            $("#contactForm").append("E-mail:<input id='usersEmail' type='text' name='mail' size='70'>");
            $("#usersEmail").css("margin", "7px 0");
            $("#contactForm").append("<br>Talk To Me:<br><textarea id='emailBox' type='text' rows='8' cols='60'>");
            $("#emailBox").css("overflow", "scroll");
            $("#emailBox").css("margin", "10px");
            $("#contactForm").append("<br><input id='btnSubmit' type='submit' value='Send'>");
            $("#btnSubmit").css("margin", "5px auto 0 auto");
            break;
        }
        case 6://<=== Phone
        {
            $("#phoneNumber").remove();
            $("#contactForm").remove();
            $("#contactImage").remove();
            $("#contactViewBoxContent").append("<h3 id='phoneNumber'>1 - 519 - 555 - 5555");
            $("#phoneNumber").css("margin", "50px auto 0 auto");
            $("#phoneNumber").css("color", "#000");
            $("#phoneNumber").css("font-size", "1.6em");
            break;
        }
    }
}
/*================================================<<< GameOver Screen (Port 5)===*/

var footballClicked = false;
var letterGClicked = false;
var letterAClicked = false;
var letterMClicked = false;
var letterEClicked = false;
var letterOClicked = false;
var letterVClicked = false;
var secondLetterEClicked = false;
var letterRClicked = false;
var reset = false;
function throwFootball(sel) //<=== Throws Football at whatever Letter You Clicked
{
    if(footballClicked == false)
    {
    switch(sel)
    {
        case 0: //<=== Letter "G"
        {
            var footballSpinTimer = setInterval(spinFootball, 200);
            $("#football").animate({
                top : 200,
                left : 300
            }, 1000, "swing", function(){stopSpin(footballSpinTimer, sel);});
            footballClicked = true;
            letterGClicked = true;
            reset = false;
            break;
        }
        case 1: //<=== Letter "A"
        {
            var footballSpinTimer = setInterval(spinFootball, 200);
            $("#football").animate({
                top : 200,
                left : 360
            }, 1000, "swing", function(){stopSpin(footballSpinTimer, sel);});
            footballClicked = true;
            letterAClicked = true;
            reset = false;
            break;
        }
        case 2: //<=== Letter "M"
        {
            var footballSpinTimer = setInterval(spinFootball, 200);
            $("#football").animate({
                top : 200,
                left : 420
            }, 1000, "swing", function(){stopSpin(footballSpinTimer, sel);});
            footballClicked = true;
            letterMClicked = true;
            reset = false;
            break;
        }
        case 3: //<=== Letter "E"
        {
            var footballSpinTimer = setInterval(spinFootball, 200);
            $("#football").animate({
                top : 200,
                left : 490
            }, 1000, "swing", function(){stopSpin(footballSpinTimer, sel);});
            footballClicked = true;
            letterEClicked = true;
            reset = false;
            break;
        }
        case 4: //<=== Letter "O"
        {
            var footballSpinTimer = setInterval(spinFootball, 200);
            $("#football").animate({
                top : 200,
                left : 550
            }, 1000, "swing", function(){stopSpin(footballSpinTimer, sel);});
            footballClicked = true;
            letterOClicked = true;
            reset = false;
            break;
        }
        case 5: //<=== Letter "V"
        {
            var footballSpinTimer = setInterval(spinFootball, 200);
            $("#football").animate({
                top : 200,
                left : 610
            }, 1000, "swing", function(){stopSpin(footballSpinTimer, sel);});
            footballClicked = true;
            letterVClicked = true;
            reset = false;
            break;
        }
        case 6: //<=== Second Letter "E"
        {
            var footballSpinTimer = setInterval(spinFootball, 200);
            $("#football").animate({
                top : 200,
                left : 660
            }, 1000, "swing", function(){stopSpin(footballSpinTimer, sel);});
            footballClicked = true;
            secondLetterEClicked = true;
            reset = false;
            break;
        }
        case 7: //<=== Letter "R"
        {
            var footballSpinTimer = setInterval(spinFootball, 200);
            $("#football").animate({
                top : 200,
                left : 720
            }, 1000, "swing", function(){stopSpin(footballSpinTimer, sel);});
            footballClicked = true;
            letterRClicked = true;
            reset = false;
            break;
        }
    }
    }                                                            
}
function spinFootball()
{
    $("#footballGrip").animate({
        "margin-top" : 40
    }, 200, "swing").animate({
        "margin-top" : 0
    },0, "linear");
}
function stopSpin(footballSpinTimer, sel)
{
    setTimeout(function() {
    letterBreaking(sel);
}, 200);
    clearInterval(footballSpinTimer);
    $("#football").css("transform", "rotate(-1730deg)");
    $("#football").animate({
        top : 100,
        left : 180
    }, 1000, "swing").animate({
        top:340,
        left:150
    }, 800, "swing").animate({
        top : 300,
        left : -100
    }, 700, "swing", function(){returnFootball();});
}
function returnFootball()//<=== Returns Football to Origional Position
{
    $("#football").css("transform", "rotate(0deg)");
    setTimeout(footBallClickable, 1500);
}
function letterBreaking(sel)//<=== Breaks Letter Depending On What One You Click
{
    switch(sel)
    {
        case 0: //<=== Letter "G"
        {
            $("#letterG").css("transform-origin", "bottom");
            $("#letterG").css("text-shadow", "none");
            $("#letterG").css("transform", "rotate(180deg)");
            setTimeout(function() {dropLetter(sel);}, 1000)
            break;
        }
        case 1: //<=== Letter "A"
        {
            $("#letterA").css("transform-origin", "bottom");
            $("#letterA").css("text-shadow", "none");
            $("#letterA").css("transform", "rotate(180deg)");
            setTimeout(function() {dropLetter(sel);}, 1000)
            break;
        }
        case 2: //<=== Letter "M"
        {
            $("#letterM").css("transform-origin", "bottom");
            $("#letterM").css("text-shadow", "none");
            $("#letterM").css("transform", "rotate(180deg)");
            setTimeout(function() {dropLetter(sel);}, 1000)
            break;
        }
        case 3: //<=== Letter "E"
        {
            $("#letterE").css("transform-origin", "bottom");
            $("#letterE").css("text-shadow", "none");
            $("#letterE").css("transform", "rotate(180deg)");
            setTimeout(function() {dropLetter(sel);}, 1000)
            break;
        }
        case 4: //<=== Letter "O"
        {
            $("#letterO").css("transform-origin", "bottom");
            $("#letterO").css("text-shadow", "none");
            $("#letterO").css("transform", "rotate(180deg)");
            setTimeout(function() {dropLetter(sel);}, 1000)
            break;
        }
        case 5: //<=== Letter "V"
        {
            $("#letterV").css("transform-origin", "bottom");
            $("#letterV").css("text-shadow", "none");
            $("#letterV").css("transform", "rotate(180deg)");
            setTimeout(function() {dropLetter(sel);}, 1000)
            break;
        }
        case 6: //<=== Second Letter "E"
        {
            $("#secondLetterE").css("transform-origin", "bottom");
            $("#secondLetterE").css("text-shadow", "none");
            $("#secondLetterE").css("transform", "rotate(180deg)");
            setTimeout(function() {dropLetter(sel);}, 1000)
            break;
        }
        case 7: //<=== Letter "R"
        {
            $("#letterR").css("transform-origin", "bottom");
            $("#letterR").css("text-shadow", "none");
            $("#letterR").css("transform", "rotate(180deg)");
            setTimeout(function() {dropLetter(sel);}, 1000)
            break;
        }
    }
}
function footBallClickable()//<=== Makes user wait til Football is Returned Before being able to click again
{
    footballClicked = false;
    reset = true;
}
function dropLetter(sel)//<=== Drops Letter Depending on which one is hit with Football
{
    switch(sel)
    {
        case 0: //<=== Letter "G"
        {
            setTimeout(function() {removeLetter(sel);}, 700)
            $("#letterG").animate({
                top : 300
            }, 500, "swing");
            break;
        }
        case 1: //<=== Letter "A"
        {
            setTimeout(function() {removeLetter(sel);}, 700)
            $("#letterA").animate({
                top : 300
            }, 500, "swing");
            break;
        }
        case 2: //<=== Letter "M"
        {
            setTimeout(function() {removeLetter(sel);}, 700)
            $("#letterM").animate({
                top : 300
            }, 500, "swing");
            break;
        }
        case 3: //<=== Letter "E"
        {
            setTimeout(function() {removeLetter(sel);}, 700)
            $("#letterE").animate({
                top : 300
            }, 500, "swing");
            break;
        }
        case 4: //<=== Letter "O"
        {
            setTimeout(function() {removeLetter(sel);}, 700)
            $("#letterO").animate({
                top : 300
            }, 500, "swing");
            break;
        }
        case 5: //<=== Letter "V"
        {
            setTimeout(function() {removeLetter(sel);}, 700)
            $("#letterV").animate({
                top : 300
            }, 500, "swing");
            break;
        }
        case 6: //<=== Second Letter "E"
        {
            setTimeout(function() {removeLetter(sel);}, 700)
            $("#secondLetterE").animate({
                top : 300
            }, 500, "swing");
            break;
        }
        case 7: //<=== Letter "R"
        {
            setTimeout(function() {removeLetter(sel);}, 700)
            $("#letterR").animate({
                top : 300
            }, 500, "swing");
            break;
        }
    }
}
function removeLetter(sel)
{
    switch(sel)
    {
        case 0:
        {
            $("#letterG").remove();
            break;
        }
        case 1:
        {
            $("#letterA").remove();
            break;
        }
        case 2:
        {
            $("#letterM").remove();
            break;
        }
        case 3:
        {
            $("#letterE").remove();
            break;
        }
        case 4:
        {
            $("#letterO").remove();
            break;
        }
        case 5:
        {
            $("#letterV").remove();
            break;
        }
        case 6:
        {
            $("#secondLetterE").remove();
            break;
        }
        case 7:
        {
            $("#letterR").remove();
            break;
        }
    }
}
function resetTheLetters()//<=== Resets Letters Upon Click Of Botton (Only letters that were destroyed)
{
    if(reset == true)
    {
        if(letterGClicked == true)
        {
            setTimeout(createG, 2000);
            $("#replaceLetterG").animate({
                top : -50
            }, 2000, "swing").animate({
                top : -300
            }, 2000, "swing");
            letterGClicked = false;
            reset = false;
        }
        if(letterAClicked == true)
        {
            setTimeout(createA, 2000);
            $("#replaceLetterA").animate({
                top : -50
            }, 2000, "swing").animate({
                top : -300
            }, 2000, "swing");
            letterAClicked = false;
            reset = false;
        }
        if(letterMClicked == true)
        {
            setTimeout(createM, 2000);
            $("#replaceLetterM").animate({
                top : -50
            }, 2000, "swing").animate({
                top : -300
            }, 2000, "swing");
            letterMClicked = false;
            reset = false;
        }
        if(letterEClicked == true)
        {
            setTimeout(createE, 2000);
            $("#replaceLetterE").animate({
                top : -50
            }, 2000, "swing").animate({
                top : -300
            }, 2000, "swing");
            letterEClicked = false;
            reset = false;
        }
        if(letterOClicked == true)
        {
            setTimeout(createO, 2000);
            $("#replaceLetterO").animate({
                top : -50
            }, 2000, "swing").animate({
                top : -300
            }, 2000, "swing");
            letterOClicked = false;
            reset = false;
        }
        if(letterVClicked == true)
        {
            setTimeout(createV, 2000);
            $("#replaceLetterV").animate({
                top : -50
            }, 2000, "swing").animate({
                top : -300
            }, 2000, "swing");
            letterVClicked = false;
            reset = false;
        }
        if(secondLetterEClicked == true)
        {
            setTimeout(createSecondE, 2000);
            $("#replaceSecondLetterE").animate({
                top : -50
            }, 2000, "swing").animate({
                top : -300
            }, 2000, "swing");
            secondLetterEClicked = false;
            reset = false;
        }
        if(letterRClicked == true)
        {
            setTimeout(createR, 2000);
            $("#replaceLetterR").animate({
                top : -50
            }, 2000, "swing").animate({
                top : -300
            }, 2000, "swing");
            letterRClicked = false;
            reset = false;
        }
    }
}
function createG()//<=== Actually Replaces Letters that were Previously Destroyed
{
    $("#port5").append("<h1 id='letterG'>G</h1>");
    $("#letterG").css("position", "absolute");
    $("#letterG").css("top", "140px");
    $("#letterG").css("left", "350px");
    $("#letterG").css("transition", ".5s transform");
    $("#letterG").attr("onclick", "throwFootball(0);");
}
function createA()
{
    $("#port5").append("<h1 id='letterA'>A</h1>");
    $("#letterA").css("position", "absolute");
    $("#letterA").css("top", "140px");
    $("#letterA").css("left", "410px");
    $("#letterA").css("transition", ".5s transform");
    $("#letterA").attr("onclick", "throwFootball(1);");
}
function createM()
{
    $("#port5").append("<h1 id='letterM'>M</h1>");
    $("#letterM").css("position", "absolute");
    $("#letterM").css("top", "140px");
    $("#letterM").css("left", "470px");
    $("#letterM").css("transition", ".5s transform");
    $("#letterM").attr("onclick", "throwFootball(2);");
}
function createE()
{
    $("#port5").append("<h1 id='letterE'>E</h1>");
    $("#letterE").css("position", "absolute");
    $("#letterE").css("top", "140px");
    $("#letterE").css("left", "540px");
    $("#letterE").css("transition", ".5s transform");
    $("#letterE").attr("onclick", "throwFootball(3);");
}
function createO()
{
    $("#port5").append("<h1 id='letterO'>O</h1>");
    $("#letterO").css("position", "absolute");
    $("#letterO").css("top", "140px");
    $("#letterO").css("left", "600px");
    $("#letterO").css("transition", ".5s transform");
    $("#letterO").attr("onclick", "throwFootball(4);");
}
function createV()
{
    $("#port5").append("<h1 id='letterV'>V</h1>");
    $("#letterV").css("position", "absolute");
    $("#letterV").css("top", "140px");
    $("#letterV").css("left", "660px");
    $("#letterV").css("transition", ".5s transform");
    $("#letterV").attr("onclick", "throwFootball(5);");
}
function createSecondE()
{
    $("#port5").append("<h1 id='secondLetterE'>E</h1>");
    $("#secondLetterE").css("position", "absolute");
    $("#secondLetterE").css("top", "140px");
    $("#secondLetterE").css("left", "720px");
    $("#secondLetterE").css("transition", ".5s transform");
    $("#secondLetterE").attr("onclick", "throwFootball(6);");
}
function createR()
{
    $("#port5").append("<h1 id='letterR'>R</h1>");
    $("#letterR").css("position", "absolute");
    $("#letterR").css("top", "140px");
    $("#letterR").css("left", "780px");
    $("#letterR").css("transition", ".5s transform");
    $("#letterR").attr("onclick", "throwFootball(7);");
}