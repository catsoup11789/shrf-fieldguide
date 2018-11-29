$(function() {
    var raw_template = $('#events-thursday-template').html();
    var template = Handlebars.compile(raw_template);
    var placeHolder = $("#events-thursday-list");
    $.get("assets/data.json", function(datas, status, xhr) {
        var html = template(datas);
        placeHolder.append(html);
    });
});

$(function() {
    var raw_template = $('#events-friday-template').html();
    var template = Handlebars.compile(raw_template);
    var placeHolder = $("#events-friday-list");
    $.get("assets/data.json", function(datas, status, xhr) {
        var html = template(datas);
        placeHolder.append(html);
    });
});

$(function() {
    var raw_template = $('#events-saturday-template').html();
    var template = Handlebars.compile(raw_template);
    var placeHolder = $("#events-saturday-list");
    $.get("assets/data.json", function(datas, status, xhr) {
        var html = template(datas);
        placeHolder.append(html);
    });
});

$(function() {
    var raw_template = $('#events-sunday-template').html();
    var template = Handlebars.compile(raw_template);
    var placeHolder = $("#events-sunday-list");
    $.get("assets/data.json", function(datas, status, xhr) {
        var html = template(datas);
        placeHolder.append(html);
    });
});

$(function() {
    var raw_template = $('#announcement-template').html();
    var template = Handlebars.compile(raw_template);
    var placeHolder = $("#announcement-list");
    $.get("assets/data.json", function(datas, status, xhr) {
        var html = template(datas);
        placeHolder.append(html);
    });
});

$(function() {
    var raw_template = $('#sponsors-template').html();
    var template = Handlebars.compile(raw_template);
    var placeHolder = $("#sponsors-list");
    $.get("assets/data.json", function(datas, status, xhr) {
        var html = template(datas);
        placeHolder.append(html);
    });
});

$(function() {
    var raw_template = $('#faq-template').html();
    var template = Handlebars.compile(raw_template);
    var placeHolder = $("#faq-list");
    $.get("assets/data.json", function(datas, status, xhr) {
        var html = template(datas);
        placeHolder.append(html);
    });
});


Handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});