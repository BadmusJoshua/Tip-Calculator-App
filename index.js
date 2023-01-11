var bill = document.querySelector("#bill");
var numPeople = document.querySelector("#people");
var tip = document.getElementById("tip");
var reset = document.getElementById("reset");
var total = document.getElementById("total");
var tipButtons = document.querySelectorAll(".tip-button");
var bottomErrormsg = document.getElementById("bottom-msg");
var topErrormsg = document.getElementById("top-msg");
var percentageTip = 0;
numPeople.addEventListener("keyup", prompted);
function prompted() {
  if (bill.value == 0 || bill.value == null) {
    topErrormsg.style.opacity = "1";
    bill.style.border = "1px solid red";
    setTimeout(function timer() {
      topErrormsg.style.opacity = "0";
      bill.style.border = "none";
    }, 3000);
  }

  if (bill.value > 0 && numPeople.value > 0) {
    reset.disabled = false;
    reset.style.opacity = "1";
    reset.style.backgroundColor = "hsl(172, 67%, 45%)";
    reset.addEventListener("mouseover", hover);
    function hover() {
      reset.style.backgroundColor = "hsl(185, 41%, 84%)";
    }
    reset.addEventListener("mouseleave", unhover);
    function unhover() {
      reset.style.backgroundColor = "hsl(172, 67%, 45%)";
    }
    tip.innerText =
      "$" + ((bill.value * percentageTip) / numPeople.value).toFixed(2);
    total.innerText =
      "$" +
      (
        (bill.value * percentageTip) / numPeople.value +
        bill.value / numPeople.value
      ).toFixed(2);
  }
  if (
    bill.value == 0 ||
    bill.value == null ||
    numPeople.value == 0 ||
    numPeople.value == null
  ) {
    reset.disabled = true;
  }
  if (numPeople.value == 0 || numPeople.value == null) {
    numPeople.style.border = "1px solid red";
    bottomErrormsg.style.opacity = "1";
    setTimeout(function timer() {
      bottomErrormsg.style.opacity = "0";
      numPeople.style.border = "none";
    }, 3000);
  }
}
bill.addEventListener("keyup", prompting);
function prompting() {
  if (numPeople.value == 0 || numPeople.value == null) {
    bottomErrormsg.style.opacity = "1";
    numPeople.style.border = "1px solid red";
  }
  setTimeout(function timer() {
    bottomErrormsg.style.opacity = "0";
    numPeople.style.border = "none";
  }, 3000);
  if (
    bill.value == 0 ||
    bill.value == null ||
    numPeople.value == 0 ||
    numPeople.value == null
  ) {
    reset.disabled = true;
  }
  if (bill.value == 0 || bill.value == null) {
    bill.style.border = "1px solid red";
    topErrormsg.style.opacity = "1";
  }
  if (bill.value > 0 && numPeople.value > 0) {
    reset.disabled = false;
    reset.style.opacity = "1";
    reset.style.backgroundColor = "hsl(172, 67%, 45%)";
    reset.addEventListener("mouseover", hover);
    function hover() {
      reset.style.backgroundColor = "hsl(185, 41%, 84%)";
    }
    reset.addEventListener("mouseleave", unhover);
    function unhover() {
      reset.style.backgroundColor = "hsl(172, 67%, 45%)";
    }
    tip.innerText =
      "$" + ((bill.value * percentageTip) / numPeople.value).toFixed(2);
    total.innerText =
      "$" +
      (
        (bill.value * percentageTip) / numPeople.value +
        bill.value / numPeople.value
      ).toFixed(2);
  }
}
for (const tipButton of tipButtons) {
  tipButton.addEventListener("click", validating);
  {
    function validating() {
      tipButton.style.backgroundColor = "hsl(172, 77%, 34%)";

      if (bill.value == 0 || bill.value == null) {
        topErrormsg.style.opacity = "1";
        bill.style.border = "1px solid red";
        setTimeout(function timer() {
          topErrormsg.style.opacity = "0";
          bill.style.border = "none";
        }, 3000);
      }
      if (numPeople.value == 0 || numPeople.value == null) {
        numPeople.style.border = "1px solid red";
        bottomErrormsg.style.opacity = "1";
        setTimeout(function timer() {
          bottomErrormsg.style.opacity = "0";
          numPeople.style.border = "none";
        }, 3000);
      }
      if (bill.value > 0 && numPeople.value > 0) {
        reset.disabled = false;
        reset.style.opacity = "1";
        reset.style.backgroundColor = "hsl(172, 67%, 45%)";
        reset.addEventListener("mouseover", hover);
        function hover() {
          reset.style.backgroundColor = "hsl(185, 41%, 84%)";
        }
        reset.addEventListener("mouseleave", unhover);
        function unhover() {
          reset.style.backgroundColor = "hsl(172, 67%, 45%)";
        }
        tip.innerText =
          "$" + ((bill.value * percentageTip) / numPeople.value).toFixed(2);
        total.innerText =
          "$" +
          (
            (bill.value * percentageTip) / numPeople.value +
            bill.value / numPeople.value
          ).toFixed(2);
      }
    }
  }
}
//CALCULATING 5% TIP
var fivePercent = document.getElementById("five");
fivePercent.addEventListener("click", fiveP);
function fiveP() {
  percentageTip = 0.05;
} //CALCULATING 10% TIP
var tenPercent = document.getElementById("ten");
tenPercent.addEventListener("click", tenP);
function tenP() {
  percentageTip = 0.1;
} //CALCULATING 15% TIP
var fifteenPercent = document.getElementById("fifteen");
fifteenPercent.addEventListener("click", fifteenP);
function fifteenP() {
  percentageTip = 0.15;
} //CALCULATING 25% TIP
var twentyfivePercent = document.getElementById("twentyFive");
twentyfivePercent.addEventListener("click", twentyfiveP);
function twentyfiveP() {
  percentageTip = 0.25;
} //CALCULATING 50% TIP
var fiftyPercent = document.getElementById("fifty");
fiftyPercent.addEventListener("click", fiftyP);
function fiftyP() {
  percentageTip = 0.5;
}
//CALCULATING CUSTOM TIP
var custom = document.getElementById("custom");
custom.addEventListener("keyup", customed);
function customed() {
  percentageTip = custom.value / 100;
  // console.log(custom.value / 100);
}
//RESETING VALUES
reset.addEventListener("click", reseted);
function reseted() {
  tip.innerText = "$" + "0.00";
  total.innerText = "$" + "0.00";
  bill.value = "";
  numPeople.value = "";
  custom.value = "";
  reset.style.backgroundColor = " hsl(172, 67%, 45%)";
  reset.style.opacity = "0.3";
  reset.disabled = true;
}
