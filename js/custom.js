// var Heading = document.getElementById('Heading');
// var text = document.getElementById('text');
// var footer = document.getElementById('footer');

// Heading.addEventListener('click', function(){
//     text.style.display ='none';
// })

// footer.addEventListener('click', function(){
//     text.style.display = 'block';
// })

// // jquery ====>

// $('h1').click(function(){
//     $('p').hide();
// });

// $('h4').click(function(){
//     $('p').show();
// });


// hide---show --- toggle==>
$('#btn01').click(function(){
    $('.group1 p').hide();
});

$('#btn02').click(function(){
    $('.group1 p').show();
});

$('#btn03').click(function(){
    $('.group1 p').toggle();
});

// slideUp --- slideDown --- slideToggle ===>
$('#btn04').click(function(){
    $('.group2 p').slideUp();
});


$('#btn05').click(function(){
    $('.group2 p').slideDown();
});


$('#btn06').click(function(){
    $('.group2 p').slideToggle();
});


//fadeOut -- fadeIn -- fadeToggle ==>

$('#btn07').click(function(){
    $('.group3 p').fadeOut();
});

$('#btn08').click(function(){
    $('.group3 p').fadeIn();
});

$('#btn09').click(function(){
    $('.group3 p').fadeToggle();
});

//Addclass -- RemoveClass -- toggleClass ==>

$('#btn10').click(function(){
    $('.group4 .box').addClass('bg');
});

$('#btn11').click(function(){
    $('.group4 .box').removeClass('bg');
});

$('#btn12').click(function(){
    $('.group4 .box').toggleClass('bg');
});





$('#run').click(function(){
    $('.main-box .square').animate({
        top:'0px',
        left: '450px',
    },1500);

    $('.main-box .square').animate({
        top:'450px',
        left: '450px',
    },1500);

    $('.main-box .square').animate({
        top:'450px',
        left: '0px',
    },1500);

    $('.main-box .square').animate({
        top:'0px',
        left: '0px',
    },1500);

    $('.main-box .square').animate({
        top:'450px',
        left: '450px',
    },1500);

    $('.main-box .square').animate({
        top:'0px',
        left: '450px',
    },1500);

    $('.main-box .square').animate({
        top:'450px',
        left: '0px',
    },1500);

    $('.main-box .square').animate({
        top:'225px',
        left: '225px',
    },1500);
});