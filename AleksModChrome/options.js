function saveOptions(e) {
    e.preventDefault();
    chrome.storage.local.set({
      buttonColorValue: document.querySelector("#buttonColor").value,
      headerColorValue: document.querySelector("#headerColor").value,
      altButtonColorValue: document.querySelector("#altButtonColor").value,
      buttonFontColorValue: document.querySelector("#buttonFontColor").value,
      altButtonFontColorValue: document.querySelector("#altButtonFontColor").value,
      carouselButtonColorValue: document.querySelector("#carouselButtonColor").value,
      footerColorValue: document.querySelector("#footerColor").value,
      footerFontColorValue: document.querySelector("#footerFontColor").value,
      carouselColorValue: document.querySelector("#carouselColor").value
    });
}
  
function restoreOptions() {
    function setCurrentChoice(result) {
      if (typeof result.buttonColorValue === "string"){
        document.querySelector("#buttonColor").value = result.buttonColorValue || "#ff0000";
      } else if (typeof result.headerColorValue === "string"){
        document.querySelector("#headerColor").value = result.headerColorValue || "#ff0000";
      } else if (typeof result.altButtonColorValue === "string"){
        document.querySelector("#altButtonColor").value = result.altButtonColorValue || "#ff0000";
      } else if (typeof result.buttonFontColorValue === "string"){
        document.querySelector("#buttonFontColor").value = result.buttonFontColorValue || "#ff0000";
      } else if (typeof result.altButtonFontColorValue === "string"){
        document.querySelector("#altButtonFontColor").value = result.altButtonFontColorValue || "#ff0000";
      } else if (typeof result.carouselButtonColorValue === "string"){
        document.querySelector("#carouselButtonColor").value = result.carouselButtonColorValue || "#ff0000";
      } else if (typeof result.footerColorValue === "string"){
        document.querySelector("#footerColor").value = result.footerColorValue || "#ff0000";
      } else if (typeof result.footerFontColorValue === "string"){
        document.querySelector("#footerFontColor").value = result.footerFontColorValue || "#ff0000";
      } else if (typeof result.carouselColorValue === "string"){
        document.querySelector("#carouselColor").value = result.carouselColorValue || "#ff0000";
      }
    }
  
    function onError(error) {
        console.log(`Error: ${error}`);
    }
    
    let buttonget = chrome.storage.local.get("buttonColorValue");
    buttonget.then(setCurrentChoice, onError);
    let altbuttonget = chrome.storage.local.get("altButtonColorValue");
    altbuttonget.then(setCurrentChoice, onError);
    let headerget = chrome.storage.local.get("headerColorValue");
    headerget.then(setCurrentChoice, onError);
    let fontbuttonget = chrome.storage.local.get("buttonFontColorValue");
    fontbuttonget.then(setCurrentChoice, onError);
    let fontaltbuttonget = chrome.storage.local.get("altButtonFontColorValue");
    fontaltbuttonget.then(setCurrentChoice, onError);
    let carouselButtonColorget = chrome.storage.local.get("carouselButtonColorValue");
    carouselButtonColorget.then(setCurrentChoice, onError);
    let footerColorget = chrome.storage.local.get("footerColorValue");
    footerColorget.then(setCurrentChoice, onError);
    let footerFontColorget = chrome.storage.local.get("footerFontColorValue");
    footerFontColorget.then(setCurrentChoice, onError);
    let carouselColorget = chrome.storage.local.get("carouselColorValue");
    carouselColorget.then(setCurrentChoice, onError);
}
document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);