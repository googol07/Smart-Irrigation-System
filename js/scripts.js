$(document).ready(function () {
    $("#mycarousel").carousel({ interval: 500 });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children('span').hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children('span').removeClass('fa-pause');
            $("#carouselButton").children('span').addClass('fa-play');
        }
        else {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children('span').removeClass('fa-play');
            $("#carouselButton").children('span').addClass('fa-pause');
        }
    });

    $('#triggerLoginModal').click(function () {
        $('#loginModal').modal();
    });

    $('#dismissLoginModal1').click(function () {
        $('#loginModal').modal('hide');
    });

    $('#dismissLoginModal2').click(function () {
        $('#loginModal').modal('hide');
    });

    $('#triggerFormModal').click(function () {
        $('#formModal').modal();
    });

    $('#dismissFormModal1').click(function () {
        $('#formModal').modal('hide');
    });

    $('#dismissFormModal2').click(function () {
        $('#formModal').modal('hide');
    });
});