$(document).ready(function () {
    var url = 'http://node-express-env.eba-gmkgnjkq.ap-southeast-2.elasticbeanstalk.com'
    $('#login').click(function () {
        $.post("/login",{
            email:$('#loginFormEmail').val(),
            pass:$('#loginFormPassword').val()},function(data){
            console.log(data)
            if(data[0]==='success') {
                if (confirm(data[0]))
                    window.location.href = '/';
            }else {
                confirm(data[0]);
            }
        });
    });
});


//
// function login() {
//
//     var username = $('#loginFormEmail').val();
//     var password = $('#loginFormPassword').val();
//
//
//     $.ajax({
//         url: 'login',
//         type: 'POST',
//         data: data,
//         success: function(data, status) {
//             if (status == 'success') {
//                 location.href = 'home';
//             }
//         },
//         error: function(data, status, e) {
//             if (status == 'error') {
//                 location.href = ''
//             }
//         }
//
//     });
//
//     // $.ajax({
//     //     url: 'login',
//     //     type: 'POST',
//     //     data: data,
//
//     //     success:function(data, status) {
//     //         console.log(data)
//     //         var para = '';
//     //         let div = $("#login2")
//
//     //         if (username.localeCompare(data[0].Name) && password.localeCompare(data[0].id)) {
//     //             para = '<p>(good)</p>'
//     //         } else {
//     //             para = '<p>sorry wrong</p>'
//     //         }
//     //         div.empty()
//     //         div.append(para)
//     //         console.log(div)
//     //     }
//     // })
//
// }
