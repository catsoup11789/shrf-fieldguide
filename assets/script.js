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
// Set constraints for the video stream
var constraints = { video: { facingMode: "user" }, audio: false };
// Define constants
const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger")
// Access the device camera and stream to cameraView
function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
        track = stream.getTracks()[0];
        cameraView.srcObject = stream;
    })
    .catch(function(error) {
        console.error("Oops. Something is broken.", error);
    });
}
// Take a picture when cameraTrigger is tapped
cameraTrigger.onclick = function() {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.classList.add("taken");
};
// Start the video stream when the window loads
window.addEventListener("load", cameraStart, false);