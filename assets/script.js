$(function() {
    var raw_template = $('#events-template').html();
    var template = Handlebars.compile(raw_template);
    var placeHolder = $("#events-list");
    $.get("assets/data.json", function(datas, status, xhr) {
        var html = template(datas);
        placeHolder.append(html);
    });
});