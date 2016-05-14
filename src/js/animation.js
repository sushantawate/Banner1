function init() {

        $('copy1', 1, {delay:0,opacity:1,x:-293, ease:"easeOutSine"});
        $('copy2', 1, {delay:0,opacity:1,x:307, ease:"easeOutSine"});
        $('copy1', .8, {delay:2,opacity:0,x:-293, ease:"easeOutSine"});
        $('copy2', .8, {delay:2,opacity:0,x:307, ease:"easeOutSine"});
        setTimeout(frameTwo,2800)
}

function frameTwo(){
        $('copy3', 1, {delay:0,opacity:1,x:-292, ease:"easeOutSine"});
        $('copy3_1', 1, {delay:0,opacity:1,x:-292, ease:"easeOutSine"});
        $('copy4', 1, {delay:0,opacity:1,x:308, ease:"easeOutSine"});


        $('copy3', .8, {delay:2,opacity:0,x:-292, ease:"easeOutSine"});
        $('copy3_1', .8, {delay:2,opacity:0,x:-292, ease:"easeOutSine"});
        $('copy4', .8, {delay:2,opacity:0,x:308, ease:"easeOutSine"});

setTimeout(frameThree,2800)
}

function frameThree() {

        $('copy5', 1, {delay:0,opacity:1,x:-289, ease:"easeOutSine"});
        $('copy6', 1, {delay:0,opacity:1,x:308, ease:"easeOutSine"});
        $('copy5', .8, {delay:2,opacity:0,x:-289, ease:"easeOutSine"});
        $('copy6', .8, {delay:2,opacity:0,x:308, ease:"easeOutSine"});
        setTimeout(frameFour,2800)
}

function frameFour(){
        $('copy7', 1, {delay:0,opacity:1,x:-289, ease:"easeOutSine"});
        $('copy7_1', 1, {delay:0,opacity:1,x:-292, ease:"easeOutSine"});
        $('copy8', 1, {delay:0,opacity:1,x:308, ease:"easeOutSine"});


        $('copy7', .8, {delay:2,opacity:0,x:-292, ease:"easeOutSine"});
        $('copy7_1', .8, {delay:2,opacity:0,x:-292, ease:"easeOutSine"});
        $('copy8', .8, {delay:2,opacity:0,x:308, ease:"easeOutSine"});

setTimeout(frameFive,2800)
}

function frameFive(){

       $('copy9', 1, {delay:0.2,opacity:1, ease:"easeOutSine"});
       $('copy9', 1, {delay:2,opacity:0, ease:"easeOutSine"});

setTimeout(lastFrame,3000)

    }

    function lastFrame(){

       $('copy10', 1, {delay:0.2,opacity:1, ease:"easeOutSine"});
       $('cta', 1, {delay:0.2,opacity:1, ease:"easeOutSine"});
   }