// Entry point for the demo
$(document).ready(
    function(){
        prompt('Generated password is:', $.passGen({'length' : 8, 'numeric' : true, 'lowercase' : true, 'uppercase' : true}));
    }
);