/// <reference path="https://code.jquery.com/jquery-1.10.2.js"/>

var Lucian = new lucian();

function lucian() {
    //Private
    var that = this;
    var url = window.location.href;

    //Public
    this.ContentID = null;

    this.Init = function () {
        var array = url.split("#");
        if (array.length > 1) {
            that.ContentID = array[1].toLowerCase();
        } else {
            that.ContentID = "main";
        }
        that.LoadContent();
    }

    this.LoadContent = function (name) {
        if (name == null)
            name = that.ContentID;

        $("#templateWrapper").append($("#temp_" + that.ContentID));
        $("#contentBox").html($("#temp_" + name));
        that.ContentID = name;

        if ($("#contentBox").html().trim() == "") {
            $("#contentBox").html($("#temp_error"));
            that.ContentID = "error";
        }
    }

}