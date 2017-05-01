
var $ = require('../../jquery/jquery.js');
var mask = require('../mask/mask.js');
return {
    enlarge: function(opt){
        $(opt).find("li").on("click","img",function () {
            console.log($(this).index());
            if($("#imgBox").length==0){
                $("body").append("<div id='#imgBox'></div>");
                console.log("ghaha");
            }
        });
    }
};
