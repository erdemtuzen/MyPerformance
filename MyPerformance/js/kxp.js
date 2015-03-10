setTimeout("CallButton()", 0)
function CallButton() {
    $(".Lang").click();
}

function selectLang(lang) {
    sessionStorage.setItem("applang", lang);
    getLang(sessionStorage.getItem("applang"));
}

function getLang(str) {
    var path = "";
    var URL = location.href;
    if (str == null) {
        str = "tr";
    }
    if (URL.indexOf("/html/") != -1) {
        var path = "../";
    }
    lxmlhttp = new XMLHttpRequest();
    lxmlhttp.open("GET", path + "languages/" + str + ".xml", false);
    lxmlhttp.send();
    lxmlDoc = lxmlhttp.responseXML;



    var x = lxmlDoc.getElementsByTagName("language");
    for (i = 0; i < x.length; i++) {

     if (URL.indexOf("/html/customer") != -1) {
         document.getElementById('pagetitle').innerHTML = x[i].getElementsByTagName("pagetitle")[0].childNodes[0].nodeValue;
            document.getElementById('consumeracqusition').innerHTML = x[i].getElementsByTagName("consumeracqusition")[0].childNodes[0].nodeValue;
            document.getElementById('customer-acq-title').innerHTML = x[i].getElementsByTagName("customer-acq-title")[0].childNodes[0].nodeValue;
            document.getElementById('linelabel1').innerHTML = x[i].getElementsByTagName("linelabel1")[0].childNodes[0].nodeValue;
            document.getElementById('linelabel2').innerHTML = x[i].getElementsByTagName("linelabel2")[0].childNodes[0].nodeValue;
            document.getElementById('linelabel3').innerHTML = x[i].getElementsByTagName("linelabel3")[0].childNodes[0].nodeValue;
            document.getElementById('linelabel4').innerHTML = x[i].getElementsByTagName("linelabel4")[0].childNodes[0].nodeValue;
            document.getElementById('last4month').innerHTML = x[i].getElementsByTagName("last4month")[0].childNodes[0].nodeValue;
            document.getElementById('May').innerHTML = x[i].getElementsByTagName("May")[0].childNodes[0].nodeValue;
            document.getElementById('Mar').innerHTML = x[i].getElementsByTagName("Mar")[0].childNodes[0].nodeValue;
            document.getElementById('Apr').innerHTML = x[i].getElementsByTagName("Apr")[0].childNodes[0].nodeValue;
            document.getElementById('Feb').innerHTML = x[i].getElementsByTagName("Feb")[0].childNodes[0].nodeValue;
        }
        else if (URL.indexOf("/html/retail") != -1) {
            document.getElementById('pagetitle').innerHTML = x[i].getElementsByTagName("pagetitle")[0].childNodes[0].nodeValue;
            document.getElementById('pagetitleretail').innerHTML = x[i].getElementsByTagName("retail-loans-title")[0].childNodes[0].nodeValue;
            document.getElementById('linelabel1').innerHTML = x[i].getElementsByTagName("linelabel1")[0].childNodes[0].nodeValue;
            document.getElementById('linelabel2').innerHTML = x[i].getElementsByTagName("linelabel2")[0].childNodes[0].nodeValue;
            document.getElementById('linelabel3').innerHTML = x[i].getElementsByTagName("linelabel3")[0].childNodes[0].nodeValue;
            document.getElementById('linelabel4').innerHTML = x[i].getElementsByTagName("linelabel4")[0].childNodes[0].nodeValue;
            document.getElementById('last4month').innerHTML = x[i].getElementsByTagName("last4month")[0].childNodes[0].nodeValue;
            document.getElementById('May').innerHTML = x[i].getElementsByTagName("May")[0].childNodes[0].nodeValue;
            document.getElementById('Mar').innerHTML = x[i].getElementsByTagName("Mar")[0].childNodes[0].nodeValue;
            document.getElementById('Apr').innerHTML = x[i].getElementsByTagName("Apr")[0].childNodes[0].nodeValue;
            document.getElementById('Feb').innerHTML = x[i].getElementsByTagName("Feb")[0].childNodes[0].nodeValue;
        }
        else if (URL.indexOf("/html/deposit") != -1) {
            document.getElementById('pagetitle').innerHTML = x[i].getElementsByTagName("pagetitle")[0].childNodes[0].nodeValue;
            document.getElementById('pagetitledeposit').innerHTML = x[i].getElementsByTagName("deposit-title")[0].childNodes[0].nodeValue;
            document.getElementById('linelabel1').innerHTML = x[i].getElementsByTagName("linelabel1")[0].childNodes[0].nodeValue;
            document.getElementById('linelabel2').innerHTML = x[i].getElementsByTagName("linelabel2")[0].childNodes[0].nodeValue;
            document.getElementById('linelabel3').innerHTML = x[i].getElementsByTagName("linelabel3")[0].childNodes[0].nodeValue;
            document.getElementById('linelabel4').innerHTML = x[i].getElementsByTagName("linelabel4")[0].childNodes[0].nodeValue;
            document.getElementById('last4month').innerHTML = x[i].getElementsByTagName("last4month")[0].childNodes[0].nodeValue;
            document.getElementById('May').innerHTML = x[i].getElementsByTagName("May")[0].childNodes[0].nodeValue;
            document.getElementById('Mar').innerHTML = x[i].getElementsByTagName("Mar")[0].childNodes[0].nodeValue;
            document.getElementById('Apr').innerHTML = x[i].getElementsByTagName("Apr")[0].childNodes[0].nodeValue;
            document.getElementById('Feb').innerHTML = x[i].getElementsByTagName("Feb")[0].childNodes[0].nodeValue;
        }
        else {
          
            document.getElementById('hello').innerHTML = x[i].getElementsByTagName("hello")[0].childNodes[0].nodeValue;
            document.getElementById('customer-acq-title').innerHTML = x[i].getElementsByTagName("customer-acq-title")[0].childNodes[0].nodeValue;
            document.getElementById('retail-loans-title').innerHTML = x[i].getElementsByTagName("retail-loans-title")[0].childNodes[0].nodeValue;
            document.getElementById('deposit-title').innerHTML = x[i].getElementsByTagName("deposit-title")[0].childNodes[0].nodeValue;
            document.getElementById('Quota').innerHTML = x[i].getElementsByTagName("Quota")[0].childNodes[0].nodeValue;
            document.getElementById('AveragePerformance').innerHTML = x[i].getElementsByTagName("AveragePerformance")[0].childNodes[0].nodeValue;
            document.getElementById('Overview').innerHTML = x[i].getElementsByTagName("Overview")[0].childNodes[0].nodeValue;
            document.getElementById('pagetitle').innerHTML = x[i].getElementsByTagName("pagetitle")[0].childNodes[0].nodeValue;
        }

    }

}
setTimeout("TileNotification()", 0)

function TileNotification() {
    var Notifications = Windows.UI.Notifications;
    var tileXml = Notifications.TileUpdateManager.getTemplateContent(Notifications.TileTemplateType.tileWideSmallImageAndText02);

    var tileTextAttributes = tileXml.getElementsByTagName("text");
    tileTextAttributes[0].appendChild(tileXml.createTextNode("Müşteri İktisadı"));


    tileTextAttributes[1].appendChild(tileXml.createTextNode("$1,031"));
   
    var tileNotification = new Windows.UI.Notifications.TileNotification(tileXml);
    Notifications.TileUpdateManager.createTileUpdaterForApplication().update(tileNotification);


   

    setTimeout("TileNotification1()", 3000)

}

function TileNotification1() {
    var Notifications = Windows.UI.Notifications;
    var tileXml = Notifications.TileUpdateManager.getTemplateContent(Notifications.TileTemplateType.tileWideSmallImageAndText02);

    var tileTextAttributes = tileXml.getElementsByTagName("text");
    tileTextAttributes[0].appendChild(tileXml.createTextNode("Bireysel Krediler"));


    tileTextAttributes[1].appendChild(tileXml.createTextNode("$3,031"));

    var tileNotification = new Windows.UI.Notifications.TileNotification(tileXml);
    Notifications.TileUpdateManager.createTileUpdaterForApplication().update(tileNotification);


    setTimeout("TileNotification2()", 3000)
}

function TileNotification2() {
    var Notifications = Windows.UI.Notifications;
    var tileXml = Notifications.TileUpdateManager.getTemplateContent(Notifications.TileTemplateType.tileWideSmallImageAndText02);

    var tileTextAttributes = tileXml.getElementsByTagName("text");
    tileTextAttributes[0].appendChild(tileXml.createTextNode("Mevduat"));


    tileTextAttributes[1].appendChild(tileXml.createTextNode("$2,056"));

    var tileNotification = new Windows.UI.Notifications.TileNotification(tileXml);
    Notifications.TileUpdateManager.createTileUpdaterForApplication().update(tileNotification);



    setTimeout("TileNotification()", 3000)
}
function getDateTime() {
    var currentTime = new Date()
    var month = currentTime.getMonth()
    var day = currentTime.getDate()
    var year = currentTime.getFullYear()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    document.write(month + "/" + day + "/" + year + "   " + hours + ":" + minutes + " ")
    if (hours > 11) {
        document.write("PM")
    } else {
        document.write("AM")
    }
}


function getXmls(str) {

    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "data/" + str + ".xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
}

function quickS() {

    quickSelect("Presentation");
    quickSelect("Document");
    quickSelect("Other");
}
function quickSelect(type) {
    var selObj = document.getElementById("myselect");
    var selIndex = selObj.selectedIndex;
    getXmls(selObj.options[selIndex].value);
    item = "<ul>";
    var x = xmlDoc.getElementsByTagName("Item");
    var item;
    for (i = 0; i < x.length; i++) {
        if (x[i].getElementsByTagName("Type")[0].childNodes[0].nodeValue == type) {
            item += "<li><div class=\"listitem\"><a href=\"#\">";
            item += x[i].getElementsByTagName("Title")[0].childNodes[0].nodeValue;
            item += "</a><div style=\"float: left; width: 350px;\"><a href=\"" + x[i].getElementsByTagName("File")[0].childNodes[0].nodeValue + "\"><h1>";
            item += "</h1>";
            item += "<p>Company: ";
            item += x[i].getElementsByTagName("Company")[0].childNodes[0].nodeValue;
            item += "</p></a>";
            item += "</div></div></li>";
        }
    }
    item += "</ul>";

    if (type == "Presentation") {
        document.getElementById('Presentation').innerHTML = item;
    } else if (type == "Document") {
        document.getElementById('Document').innerHTML = item;
    } else if (type == "Other") {
        document.getElementById('Other').innerHTML = item;
    }
}