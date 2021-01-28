
$("submit").click(function (event) {
    event.preventDefault();

    let mail = jQuery("#mail").val();
    let startdate = jQuery("#startdate").val();
    let enddate = jQuery("#enddate").val();
    let querrytext = jQuery("#querrytext").val();

    let data = {
        mail : mail,
        startdate : startdate,
        enddate : enddate,
        querrytext : querrytext,
    };
    //console.log(JSON.stringify(data))

    jQuery.ajax({
        url: "https://igls74yha5.execute-api.eu-central-1.amazonaws.com/v1/post-json",
        type: "POST",
        dataType: "json",
        crossDomain: "true",
        charset: "utf-8",
        contentType: "application/json",
        data: JSON.stringify(data),
        success:function(data) {
            //console.log(data)
            var jsonResult = JSON.stringify(data);
            //console.log(jsonResult)
            $("#results").val(unescape(jsonResult));
            var NewWindow = window.open("_blank","new window");
            NewWindow.document.write(jsonResult);
            NewWindow.close();
        }

    })
});