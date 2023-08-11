$(document).ready(function () {
    let num = 0;
    $('#buy').click((event) => {
        event.preventDefault();

        while (num === 0) {
            $('#check').append(`<i class="fa-solid fa-check"></i>
        `);
            num++;

        }


    })

});

