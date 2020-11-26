$(document).ready(function(){
    $indata = document.baseURI.split('?data=')[1];
    $jsondata = JSON.stringify($indata);
    $("#resulttext").val($jsondata);
});