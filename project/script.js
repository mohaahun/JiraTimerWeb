$("submit").click(function (event) {
    event.preventDefault();

    let mail = jQuery("#mail").val();
    let startdate = jQuery("#startdate").val();
    let enddate = jQuery("#enddate").val();
    let querrytext = jQuery("#querrytext").val();

    let data = {
        mail: mail,
        startdate: startdate,
        enddate: enddate,
        querrytext: querrytext,
    };

    jQuery.ajax({
        url: "https://igls74yha5.execute-api.eu-central-1.amazonaws.com/v1/post-json",
        type: "POST",
        dataType: "json",
        crossDomain: "true",
        charset: "utf-8",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
            let jsonResult = JSON.stringify(data);
            $("#results").val(unescape(jsonResult));
            let NewWindow = window.open("_blank", "new window");
            NewWindow.document.write(jsonResult);
            NewWindow.close();
        }

    })
});