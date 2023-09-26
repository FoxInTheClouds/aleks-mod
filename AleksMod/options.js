function saveOptions(e) {
    e.preventDefault();
    browser.storage.sync.set({
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
    
    let buttonget = browser.storage.sync.get("buttonColorValue");
    buttonget.then(setCurrentChoice, onError);
    let altbuttonget = browser.storage.sync.get("altButtonColorValue");
    altbuttonget.then(setCurrentChoice, onError);
    let headerget = browser.storage.sync.get("headerColorValue");
    headerget.then(setCurrentChoice, onError);
    let fontbuttonget = browser.storage.sync.get("buttonFontColorValue");
    fontbuttonget.then(setCurrentChoice, onError);
    let fontaltbuttonget = browser.storage.sync.get("altButtonFontColorValue");
    fontaltbuttonget.then(setCurrentChoice, onError);
    let carouselButtonColorget = browser.storage.sync.get("carouselButtonColorValue");
    carouselButtonColorget.then(setCurrentChoice, onError);
    let footerColorget = browser.storage.sync.get("footerColorValue");
    footerColorget.then(setCurrentChoice, onError);
    let footerFontColorget = browser.storage.sync.get("footerFontColorValue");
    footerFontColorget.then(setCurrentChoice, onError);
    let carouselColorget = browser.storage.sync.get("carouselColorValue");
    carouselColorget.then(setCurrentChoice, onError);
}
document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);