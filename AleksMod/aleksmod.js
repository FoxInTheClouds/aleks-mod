var aleksState = "";
var buttonColor;
var headerColor;
var altButtonColor;
var buttonFontColor;
var altButtonFontColor;
var carouselButtonColor;
var footerColor;
var footerFontColor;
var carouselColor;
var updateShow = true;
// credits: richard maloney 2006
function getTintedColor(color, v) {
    if (color.length >6) { color= color.substring(1,color.length)}
    var rgb = parseInt(color, 16); 
    var r = Math.abs(((rgb >> 16) & 0xFF)+v); if (r>255) r=r-(r-255);
    var g = Math.abs(((rgb >> 8) & 0xFF)+v); if (g>255) g=g-(g-255);
    var b = Math.abs((rgb & 0xFF)+v); if (b>255) b=b-(b-255);
    r = Number(r < 0 || isNaN(r)) ? 0 : ((r > 255) ? 255 : r).toString(16); 
    if (r.length == 1) r = '0' + r;
    g = Number(g < 0 || isNaN(g)) ? 0 : ((g > 255) ? 255 : g).toString(16); 
    if (g.length == 1) g = '0' + g;
    b = Number(b < 0 || isNaN(b)) ? 0 : ((b > 255) ? 255 : b).toString(16); 
    if (b.length == 1) b = '0' + b;
    return "#" + r + g + b;
} 
function changeInterface(){
    var savedbuttonColor = browser.storage.sync.get("buttonColorValue");    
    savedbuttonColor.then(function(result) {
        if (buttonColor != result.buttonColorValue){
            buttonColor = result.buttonColorValue;
            updateShow = true;
        }       
    })
    var savedheaderColor = browser.storage.sync.get("headerColorValue");   
    savedheaderColor.then(function(result) {
        if (headerColor != result.headerColorValue){
            headerColor = result.headerColorValue;    
            updateShow = true;  
        } 
    })
    var savedAltButtonColor = browser.storage.sync.get("altButtonColorValue");   
    savedAltButtonColor.then(function(result) {
        if (altButtonColor != result.altButtonColorValue){
            altButtonColor = result.altButtonColorValue;  
            updateShow = true;  
        } 
    })
    var savedButtonFontColor = browser.storage.sync.get("buttonFontColorValue");   
    savedButtonFontColor.then(function(result) {
        if (buttonFontColor != result.buttonFontColorValue){
            buttonFontColor = result.buttonFontColorValue;  
            updateShow = true;  
        } 
    })
    var savedAltButtonFontColor = browser.storage.sync.get("altButtonFontColorValue");   
    savedAltButtonFontColor.then(function(result) {
        if (altButtonFontColor != result.altButtonFontColorValue){
            altButtonFontColor = result.altButtonFontColorValue;  
            updateShow = true;  
        } 
    })
    var savedCarouselButtonColor = browser.storage.sync.get("carouselButtonColorValue");   
    savedCarouselButtonColor.then(function(result) {
        if (carouselButtonColor != result.carouselButtonColorValue){
            carouselButtonColor = result.carouselButtonColorValue;  
            updateShow = true;  
        } 
    })
    var savedFooterColor = browser.storage.sync.get("footerColorValue");   
    savedFooterColor.then(function(result) {
        if (footerColor != result.footerColorValue){
            footerColor = result.footerColorValue;  
            updateShow = true;  
        } 
    })
    var savedFooterFontColor = browser.storage.sync.get("footerFontColorValue");   
    savedFooterFontColor.then(function(result) {
        if (footerFontColor != result.footerFontColorValue){
            footerFontColor = result.footerFontColorValue;  
            updateShow = true;  
        } 
    })
    var savedcarouselColor = browser.storage.sync.get("carouselColorValue");   
    savedcarouselColor.then(function(result) {
        if (carouselColor != result.carouselColorValue){
            carouselColor = result.carouselColorValue;  
            updateShow = true;  
        } 
    })
    //if (/^#[0-9A-F]{6}$/i.test(buttonColor) == false){
        //var buttonColor = "#ff0000";
    //}
    //console.log(buttonColor);
    $(".tooltiptarget_randomWalk").children().children().filter("div").css("border", "1px solid " + altButtonColor)
    $(".tooltiptarget_randomWalk").children().children().filter("div").css("background-color", altButtonFontColor)

    $(".tooltiptarget_randomWalk").children().children().children().filter("div").css("background-color", buttonColor)
    $(".tooltiptarget_randomWalk").children().children().filter("div").eq(0).css("background-color", footerColor)
    $(".tooltiptarget_randomWalk").children().children().filter("div").eq(0).css("width", "190px")
    $(".tooltiptarget_randomWalk").children().children().filter("div").eq(0).css("height", "9px")
    try{
    if (document.getElementById("smt_bottomnav_button_input_learning").style.display != "none"){ //Chec.ks if its an explantion page
        if (aleksState != "Explanation"){
            updateShow == true;
            aleksState = "Explanation";
        }
    } else if (document.getElementById("smt_bottomnav_button_input_requestExplain").style.display != "none") {
        if (aleksState != "Learn"){
            updateShow == true;
            aleksState = "Learn";
        }
    } else if (document.getElementById("smt_bottomnav_button_input_learningCorrect").style.display != "none") {
        if (aleksState != "Correct"){
            updateShow == true;
            aleksState = "Correct";
        }
    } else if (document.getElementById("smt_bottomnav_button_input_newItem").style.display != "none" && document.getElementById("smt_bottomnav_button_input_returnHomePage").style.display != "none") {
        if (aleksState != "TopicDone"){
            updateShow == true;
            aleksState = "TopicDone";
        }
    } else if (document.getElementById("smt_bottomnav_button_input_startItem").style.display != "none") {
        if (aleksState != "Carousel"){
            updateShow == true;
            aleksState = "Carousel";
        }
    } else {
        if (aleksState != "Unknown"){
            updateShow = true;
            aleksState = "Unknown";
        }
    }
    
    if (aleksState == "Explanation" && updateShow == true){
        document.getElementById("smt_bottomnav_button_input_learning").style.background = buttonColor;
        $("#lessonLeftPanel").children().children().css("fill", headerColor);
        $("#smt_bottomnav_button_input_learning").children().children().css("color", buttonFontColor);
        

        if (document.getElementById("aleksModDownload") == null){
            //$("#smt_bottomnav_button_input_learning").before('<button type="button" style="user-select: none; cursor: pointer; outline: black; outline-offset: 0px; margin: 0px 16px 0px 0px; display: inline-block; background: rgb(251, 72, 196); border: medium none; color: rgb(255,255,255); padding: 1px; vertical-align: middle; border-radius: 25px; position: relative; font-size: 16px; font-family: ProximaNova; font-weight: bold;" class="button--yvx8nb large learning primary" id="aleksModDownload"><div><div class="textContent" style="padding: 7px 12px; font-size: 16px; line-height: 16px;">Download Explanation</div></div></button>');
        }
       
    }
    //Add controlls
    
    
    ///////
    if (aleksState == "Learn" && updateShow == true){
        document.getElementById("smt_bottomnav_button_input_checkAnswer").style.background = buttonColor;
        document.getElementById("smt_bottomnav_button_input_requestExplain").style.background = altButtonColor;
        $("#smt_bottomnav_button_input_checkAnswer").children().children().css("color", buttonFontColor);
        $("#smt_bottomnav_button_input_requestExplain").children().children().css("color", altButtonFontColor);
    }
    if (aleksState == "Correct" && updateShow == true){
        document.getElementById("smt_bottomnav_button_input_learningCorrect").style.background = buttonColor;
        $("#smt_bottomnav_button_input_learningCorrect").children().children().css("color", buttonFontColor);
    }
    if (aleksState == "TopicDone" && updateShow == true){
        document.getElementById("smt_bottomnav_button_input_newItem").style.background = buttonColor;
        document.getElementById("smt_bottomnav_button_input_returnHomePage").style.background = altButtonColor;
        $("#smt_bottomnav_button_input_newItem").children().children().css("color", buttonFontColor);
        $("#smt_bottomnav_button_input_returnHomePage").children().children().css("color", altButtonFontColor);
        document.getElementById("current-main-view").css("background-color", headerColor);
        $("#current-main-view").css("background-color", headerColor);
    }
    if (aleksState == "Carousel" && updateShow == true){
        document.getElementById("smt_bottomnav_button_input_startItem").style.background = buttonColor;
        $("#smt_bottomnav_button_input_startItem").children().children().css("color", buttonFontColor);
        $('table') //The header on the top
            .eq(1)
                .css("background-color", headerColor);  
        $('.tooltiptarget_carousel').children().eq(0).css("background-color", carouselColor)
        $('.tooltiptarget_carousel').css("background-color", carouselColor)
        $('.tooltiptarget_carousel').children().children().css("background-color", carouselColor)
        $(".smt_carousel_arrow").css("opacity", "0.8")

    }
    
    
    if (updateShow == true){
        $('table') //The header on the top
            .eq(0)
                .css("background-color", headerColor);  
        //$('table')
            //.eq(14)
                //.children()
                    //.children()
                        //.children()
                            //.children()
                                //.css();
        $('.tooltiptarget_toggle_carousel').css("background", carouselButtonColor);
        $('.tooltiptarget_toggle_carousel').css("border-color", getTintedColor(carouselButtonColor, -100) + " transparent transparent");
        $('.tooltiptarget_toggle_carousel').children().css("fill", getTintedColor(carouselButtonColor, -50));
        $('div:contains("McGraw Hill LLC. Todos los derechos reservados")').parent().css("background-color", footerColor)
        $('div:contains("McGraw Hill LLC. Todos los derechos reservados")').css("color", footerFontColor)
        $('div:contains("McGraw Hill LLC. Todos los derechos reservados")').siblings().children().css("color", footerFontColor)
        $('div:contains("McGraw Hill LLC. All Rights Reserved.")').parent().css("background-color", footerColor)
        $('div:contains("McGraw Hill LLC. All Rights Reserved.")').css("color", footerFontColor)
        $('div:contains("McGraw Hill LLC. All Rights Reserved.")').siblings().children().css("color", footerFontColor)
        $("#smt_bottomnav_button_input_nextItemAssess").css("background-color", buttonColor);
        $("#smt_bottomnav_button_input_dontKnowAssess").css("background-color", altButtonColor);
        $("#smt_bottomnav_button_input_nextItemAssess").children().children().css("color", buttonFontColor);
        $("#smt_bottomnav_button_input_dontKnowAssess").children().children().css("color", altButtonFontColor);
    }


    } catch(error) {
        console.log(error)
    }

}
setInterval(changeInterface, 1)
