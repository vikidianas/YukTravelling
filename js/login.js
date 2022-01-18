init();

function init() {  
    const akun = [
        { 
            email : 'admin@yahoo.com',
            password : 'admin123'
        },
        { 
            email : 'user@yahoo.com',
            password : 'user123'
        },
    ]

    // check local storage data
    if (localStorage.getItem("is_login") === null) {
        // save status login to local storage
        window.localStorage.setItem('is_login', false);
    }
    // save akun to local storage
    window.localStorage.setItem('user', JSON.stringify(akun));
    
    view();
}

function login() {
    $('#exampleModalCenter').modal('hide');
    const email = $('#email').val();
    const password = $('#password').val();
    const user = JSON.parse(window.localStorage.getItem('user'));
    const res = user.find(item => item.email === email);

    if (typeof res!='undefined') {
        if(password==res.password){
            window.localStorage.setItem('is_login', true);
            alert("Login berhasil");
            view();
        }else{
            alert("Password salah");
            $('#password').val('');
        }
    }else{
        alert("Email tidak terdaftar");
        $('#email').val('');
        $('#password').val('');
    }
}

function logout() {
    window.localStorage.setItem('is_login', false);
    alert("Anda berhasil logout");
    view();
}

function view() {
    var is_login = window.localStorage.getItem('is_login');
    if (is_login=='true') {
        $('#login').hide();
        $('#logout').show();
        $('.pesan-t').show();
    }else{
        $('#login').show();
        $('#logout').hide();
        $('.pesan-t').hide();
    }
}