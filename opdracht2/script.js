var darkModeKnop = document.querySelector('button:first-of-type');
var kopTekst = document.querySelector('h1');
var kopTekst2 = document.querySelector('h2');
var kopTekst3 = document.querySelector('h3');
var sectionBackground = document.querySelector('main > section');
var section2Background = document.querySelector('main > section:nth-of-type(2)');
var bodyBackground = document.querySelector('body');
var paragraaf = document.querySelector('p');

var dubbelKolomsKnop = document.querySelector('button:nth-of-type(2)');
var sectionKoloms = document.querySelector('main > section > section');

darkModeKnop.addEventListener('click', function() {
    kopTekst.classList.toggle('darkmode_heading');
    kopTekst2.classList.toggle('darkmode_heading');
    kopTekst3.classList.toggle('darkmode_heading');
    sectionBackground.classList.toggle('darkmode_section');
    section2Background.classList.toggle('darkmode_section');
    bodyBackground.classList.toggle('darkmode_background');
    paragraaf.classList.toggle('darkmode_p');
});


dubbelKolomsKnop.addEventListener('click', function() {
    sectionKoloms.classList.toggle('gridview');
})


$('input').on('change', function () {
    var v = $(this).val();
    $('p').css('font-size', v + 'px')
    $('span').html(v);
});


