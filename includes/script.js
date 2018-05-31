
window.onload = function() {

    console.log("In onLoad Func");


    var name = document.getElementById("nameBox").onclick = function () {enableName()};

    var pass = document.getElementById("passBox").onclick = function () {enablePass()};

    var mail = document.getElementById("mailBox").onclick = function () {enablEmail()};

    var web = document.getElementById("webBox").onclick = function () {enableWeb()};
    
    var addr = document.getElementById("addrBox").onclick = function () {enableAddr()};
    
    var range = document.getElementById("rangeBox").onclick = function () {enableRange()};

    var phone = document.getElementById("phoneBox").onclick = function () {enablePhone()};

    var number = document.getElementById("numberBox").onclick = function () {enableNumber()};

    var checkBox = document.getElementById("checkBox").onclick = function () {enableCheck()};

    var radio = document.getElementById("radioBox").onclick = function () {enableRadio()};

    var list = document.getElementById("listBox").onclick = function () {enableList()};

    var alert = document.getElementById("validBtn");
    alert.onclick = function () {validAddr()};

    var dim = document.getElementById("formControlRange");
    dim.onchange = function() {lightOpacity()};

    var onLamp = document.getElementById("radio1");
    onLamp.addEventListener("click", function() {onOff(onLamp)});
    var offLamp = document.getElementById("radio2");
    offLamp.addEventListener("click", function() {onOff(offLamp)});

};

    /*****Functions*****/

    function lightOpacity() {
        var dimmerVal = document.getElementById("formControlRange").value;
        var lightImg = document.getElementById("lightImg");
        lightImg.style.opacity = (dimmerVal / 10);
        console.log("Change Dimmer");
    }

    

    function onOff(v) {
        var lamp = document.getElementById("lampImg");
        if (v.value == "On") {
            lamp.style.opacity = ".8";
            console.log("On Lamp");
        }
        else {
            lamp.style.opacity = "0";
            console.log("Off Lamp");
        }
    }

    function enableName() {
        document.getElementById("example-name-input").disabled = false;
        document.getElementById("example-name-input").style.background = "#fff";

        console.log("Name Enabled");
    }

    function enablePass() {
        document.getElementById("example-password-input").disabled = false;
        document.getElementById("example-password-input").style.background = "#fff";
        
        console.log("Pass Enabled");
    }

    function enablEmail() {
        document.getElementById("example-email-input").disabled = false;
        document.getElementById("example-email-input").style.background = "#fff";
        console.log("Mail Enabled");
    }

    function enableWeb() {
        document.getElementById("example-url-input").disabled = false;
        document.getElementById("example-url-input").style.background = "#fff";
        console.log("Mail Enabled");
    }

    function enableAddr() {
        document.getElementById("example-text-input").disabled = false;
        document.getElementById("example-text-input").style.background = "#fff";
        console.log("Addr Enabled");
    }

    function enableRange() {
        document.getElementById("formControlRange").disabled = false;
        console.log("Range Enabled");
    }

    function enablePhone() {
        document.getElementById("example-tel-input").disabled = false;
        document.getElementById("example-tel-input").style.background = "#fff";
        console.log("Phone Enabled");
    }

    function enableNumber() {
        document.getElementById("example-number-input").disabled = false;
        document.getElementById("example-number-input").style.background = "#fff";
        console.log("Number Enabled");
    }

    function enableCheck() {
        document.getElementById("check1").disabled = false;
        document.getElementById("check2").disabled = false;
        document.getElementById("check3").disabled = false;
        console.log("CheckBox Enabled");
    }

    function enableRadio() {
        document.getElementById("radio1").disabled = false;
        document.getElementById("radio2").disabled = false;
        console.log("Radio Enabled");
    }

    function enableList() {
        document.getElementById("sel1").disabled = false;
        document.getElementById("sel1").style.background = "#fff";
        console.log("List Enabled");
    }

    function validAddr() {
        var addrArray = ["Fifth Av", "Rothschild", "Ha Yarkon", "Begin"];
        var addrField = document.getElementById("example-text-input").value;

        for (i=0; i<4; i++) {
            if (addrField == addrArray[i]) {
                var boxMessage = document.getElementById("boxAlert");
                message.innerHTML = "Good Choise!";
                message.style.color = "green";
                console.log("Match")
                return true;
            }
        }    
        console.log("No Match")
        var errorMessage = document.getElementById("message");
        errorMessage.innerHTML = "Bad Boy! The address need to be one of those addresses: fifth Av, Rothschild, Ha Yarkon or Begin";
        errorMessage.style.color = "red";
         return false;
    }

    function beforeSub() {

        console.log("1")
        var nameField = document.forms["myForm"]["fullName"].disabled;
        var passowrdField = document.forms["myForm"]["pass"].disabled;
        var mailFeild = document.forms["myForm"]["mail"].disabled;
        var webFeild = document.forms["myForm"]["website"].disabled;
        var phoneFeild = document.forms["myForm"]["phone"].disabled;
        var addressFeild = document.forms["myForm"]["address"].disabled;
        var dimmerFeild = document.forms["myForm"]["temper"].disabled;
        var numberFeild = document.forms["myForm"]["coffee"].disabled;
        var interestsFeild = document.forms["myForm"]["interests[]"].disabled;
        var onOffFeild = document.forms["myForm"]["gender"].disabled;
        var weatherFeild = document.forms["myForm"]["age"].disabled;

        if (nameField || passowrdField || mailFeild || webFeild || phoneFeild || addressFeild || dimmerFeild || numberFeild || interestsFeild || onOffFeild || weatherFeild) {
            console.log("2")
            var errorMessage = document.getElementById("message");
            errorMessage.innerHTML = "You must fill all fields before submit.";
            message.style.color = "red";
            return false;
        }
        console.log("3")
        var nameField = document.forms["myForm"]["fullName"].value;
        var passowrdField = document.forms["myForm"]["pass"].value;
        var mailFeild = document.forms["myForm"]["mail"].value;
        var webFeild = document.forms["myForm"]["website"].value;
        var phoneFeild = document.forms["myForm"]["phone"].value;
        var addressFeild = document.forms["myForm"]["address"].value;
        var dimmerFeild = document.forms["myForm"]["temper"].value;
        var numberFeild = document.forms["myForm"]["coffee"].value;
        var interestsFeild = document.forms["myForm"]["interests[]"].value;
        var onOffFeild = document.forms["myForm"]["gender"].value;
        var weatherFeild = document.forms["myForm"]["age"].value;

        if (validAddr() == false) {
            var errorMessage = document.getElementById("message");
            errorMessage.innerHTML = "Bad Boy! The address need to be one of those addresses: fifth Av, Rothschild, Ha Yarkon or Begin";
            message.style.color = "red";
            return false;
        }

        else {
            if (nameField == "" || passowrdField == "" || mailFeild == "" || webFeild == "" || phoneFeild == "" || addressFeild == "") {
                
                console.log(nameField);
                var errorMessage = document.getElementById("message");
                errorMessage.innerHTML = "You did not filled all fields!";
                message.style.color = "red";
                return false;
            }
       
            else {
                console.log(addressFeild);
                console.log("5")
                
                return true;
            }
        }
    }