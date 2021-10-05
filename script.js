$(document).ready(function(){
    $('button').click(function(){
     const name = $('#nameid').val();
     alert(name+"Your Avtar ");
     $('.imgchange').attr('src',`https://joeschmoe.io/api/v1/${name}`);
     const b = $('.imgchange');
     console.log(b);
  
    });
   });