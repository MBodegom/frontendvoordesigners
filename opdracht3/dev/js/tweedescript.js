//var darkModeKnop = document.querySelector('button:nth-of-type(2)');
//var header = document.querySelector('header');
//var titels = document.querySelector('h1');
//var titels1 = document.querySelector('h4:nth-of-type(1)');
//var titels2 = document.querySelector('h4:nth-of-type(2)');
//var titels3 = document.querySelector('h4:nth-of-type(3)');
//var sectionBackground = document.querySelector('section');
//var bodyBackground = document.querySelector('body');
//var paragraaf = document.querySelectorAll('p');
//
//
//
//darkModeKnop.addEventListener('click', function () {
//    titels.classList.toggle('darkmode_heading');
//    titels2.classList.toggle('darkmode_heading');
//    titels3.classList.toggle('darkmode_heading');
//    titels1.classList.toggle('darkmode_heading');
//    sectionBackground.classList.toggle('darkmode_section');
//    bodyBackground.classList.toggle('darkmode_background');
//    paragraaf.classList.toggle('darkmode_p');
//    header.classList.toggle('darkmode_section');
//
//});


var dubbelKolomsKnop = document.querySelector('button:nth-of-type(2)');
var sectionKoloms = document.querySelector('main > section > section');


dubbelKolomsKnop.addEventListener('click', function () {
    sectionKoloms.classList.toggle('gridview');
})

$('input').on('change', function () {
    var v = $(this).val();
    $('article p').css('font-size', v + 'px')
    $('span').html(v);
});

$("button:first-of-type").click(function () {
   $("section > section").show(); 
});


$("section:first-of-type section button:first-of-type").click(function () {
    $("h1, h2, h3, h4").toggleClass("darkmode_heading");
    $("section:first-of-type, article, header").toggleClass("darkmode_section");
    $("body").toggleClass("darkmode_background");
    $("p").toggleClass("darkmode_p");
});

$("section:first-of-type section button:nth-of-type(2)").click(function () {
    $("section:nth-of-type(2)").toggleClass("gridview");
});
