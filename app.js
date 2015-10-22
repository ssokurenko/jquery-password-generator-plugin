var password;

// Entry point for the demo
$(document).ready(

    function(){
      $('.btn').click(
        function(){
          // generatinng the password
          password = eval($(this).html()) || '';

          // displaying the value
          $('#generated-password').html(password);

        }
      );
    }
);