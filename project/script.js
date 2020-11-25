$(document).ready(function() {

    function ajaxCallRequest(f_method, f_url, f_data) {
        $("#dataSent").val(unescape(f_data));
        var f_contentType = 'application/json';
        $.ajax({
            url: f_url,
            type: f_method,
            contentType: f_contentType,
            dataType: 'json',
            data: f_data,
            onsuccess: function(data) {
                var jsonResult = JSON.stringify(data);
                $("#results").val(unescape(jsonResult));
                var NewWindow = window.open("_blank","new window");
                NewWindow.document.write(jsonResult);
            }
        });
    }

    $("#submitbutton").click(function(event) {
        event.preventDefault();
        var form = $('#form');
        var method = form.attr('method');
        var url = 'https://igls74yha5.execute-api.eu-central-1.amazonaws.com/v1/post-json';
        var jsonData = {};
        $.each($(form).serializeArray(), function() {
            jsonData[this.name] = this.value;
        });
        var data = JSON.stringify(jsonData);
        console.log(data);
        ajaxCallRequest(method, url, data);
    });
});

