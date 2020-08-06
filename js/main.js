
$(document).ready(function () {
    $('.burger').click(function (event) {
        $('.burger,.header__block-nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
