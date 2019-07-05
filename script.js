var selectedCity;
var row_items = [];
var myArray = [];
var secondArray=[];
$("#formDiv").on("click", "#submitBtn", function () {

    var ad = $("#Ad").val()
    var soyad = $("#soyAd").val()
    var email = $("#email").val()


    if (ad == "" || soyad == "" || email == "" || selectedCity == undefined) {
        return;
    }
    $("#valueDiv").show()

    var row = "<tr> <td>" + ad
        + "</td> <td>" + soyad
        + "</td> <td>" + email
        + "</td> <td>" + selectedCity
        + "</td> <td><button class='deletebtn' type='button'>Delete</button></td></tr>"

    row_items.push(row);


    localStorage.setItem("items", row_items);





    $("#tableBody").append(row)
    $("#Ad").val("")
    $("#soyAd").val("")
    $("#email").val("")


})

$("#selectCity").change(function () {
    selectedCity = $(this).children("option:selected").val();
});

var getItems = localStorage.getItem("items")
myArray = getItems.split(",")
for (e of myArray) {
    console.log(e)
    $("#tableBody").append(e)
}

$(".deletebtn").click(function () {
    var parent = $(this).parent().parent();
    parent.remove();
var myElement = myArray.find(removable)
    function removable() {
        return parent.html;
    }
    alert("2")
    
    secondArray= myArray.filter(function (item) {
        return item !== myElement
    })

localStorage.clear()
    localStorage.setItem("items", secondArray)
    localStorage.getItem("items")
  

})

