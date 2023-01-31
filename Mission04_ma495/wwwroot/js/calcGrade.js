﻿$('#btnSend').on('click', function () {
    var num_grade = parseInt($('#a').val()) + parseInt($('#gp').val()) +
        parseInt($('#q').val()) + parseInt($('#me').val()) +
        parseInt($('#fe').val()) + parseInt($('#i').val());

    $('#finalPercentage').text(num_grade + '%');
 
    if (num_grade >= 94) {
        $('#grade').text('A');
    }
    else if (num_grade >= 90) {
        $('#grade').text('A-');
    }
    else if (num_grade >= 87) {
        $('#grade').text('B+');
    }
    else if (num_grade >= 84) {
        $('#grade').text('B');
    }
    else if (num_grade >= 80) {
        $('#grade').text('B-');
    }
    else if (num_grade >= 77) {
        $('#grade').text('C+');
    }
    else if (num_grade >= 74) {
        $('#grade').text('C');
    }
    else if (num_grade >= 70) {
        $('#grade').text('C-');
    }
    else if (num_grade >= 67) {
        $('#grade').text('D+');
    }
    else if (num_grade >= 64) {
        $('#grade').text('D');
    }
    else if (num_grade >= 60) {
        $('#grade').text('D-');
    }
    else {
        $('#grade').text('E');
    }
});

   
