$(function() {
    var raw_template = $('#events-template').html();
    var template = Handlebars.compile(raw_template);
    var placeHolder = $("#events-thursday-list");
    $.get("assets/data/events_thursday.json", function(datas, status, xhr) {
        var html = template(datas);
        placeHolder.append(html);
    });
});

$(function() {
    var raw_template = $('#events-template').html();
    var template = Handlebars.compile(raw_template);
    var placeHolder = $("#events-friday-list");
    $.get("assets/data/events_friday.json", function(datas, status, xhr) {
        var html = template(datas);
        placeHolder.append(html);
    });
});

$(function() {
    var raw_template = $('#events-template').html();
    var template = Handlebars.compile(raw_template);
    var placeHolder = $("#events-saturday-list");
    $.get("assets/data/events_saturday.json", function(datas, status, xhr) {
        var html = template(datas);
        placeHolder.append(html);
    });
});

$(function() {
    var raw_template = $('#events-template').html();
    var template = Handlebars.compile(raw_template);
    var placeHolder = $("#events-sunday-list");
    $.get("assets/data/events_sunday.json", function(datas, status, xhr) {
        var html = template(datas);
        placeHolder.append(html);
    });
});

$(function() {
    var raw_template = $('#announcement-template').html();
    var template = Handlebars.compile(raw_template);
    var placeHolder = $("#announcement-list");
    $.get("assets/data/announcements.json", function(datas, status, xhr) {
        var html = template(datas);
        placeHolder.append(html);
    });
});

$(function() {
    var raw_template = $('#sponsors-template').html();
    var template = Handlebars.compile(raw_template);
    var placeHolder = $("#sponsors-list");
    $.get("assets/data/sponsors.json", function(datas, status, xhr) {
        var html = template(datas);
        placeHolder.append(html);
    });
});

$(function() {
    var raw_template = $('#faq-template').html();
    var template = Handlebars.compile(raw_template);
    var placeHolder = $("#faq-list");
    $.get("assets/data/faq.json", function(datas, status, xhr) {
        var html = template(datas);
        placeHolder.append(html);
    });
});