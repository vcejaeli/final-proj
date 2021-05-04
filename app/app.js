

import * as MODEL from "../model/model.js";

function init() {
    $("nav a").click(function(e) {
        let btnID = this.id;
        let contentID = btnID + "Content";

        MODEL.getPageContent(contentID);
    });

    // $("nav-black a").click(function(e) {
    //     let btnID = this.id;
    //     let contentID = btnID + "Content";

    //     MODEL.getPageContent(contentID);
    // });

    //attempted to connect gallery
    // $("div a").click(function(e) {
    //     let btnID = this.id;
    //     let contentID = btnID + "Content";

    //     MODEL.getPageContent(contentID);
    // });
}

    $(document).ready(function() {
        init();
        MODEL.getPageContent(contentID);
    });

    $(document).ready(function(){
        $("nav").click(function(){
          $("nav a").css("color", "#000");
        });
    });

    $(document).ready(function(){
        $("nav").click(function(){
          $("nav span").css("color", "#000");
        });
    });




    //original backup
    /*
function init() {
    $("nav a").click(function(e) {
        let btnID = this.id;
        let contentID = btnID + "Content";

        MODEL.getPageContent(contentID);
    });
}

    $(document).ready(function() {
        init();
        MODEL.getPageContent(contentID);
    });


    */
