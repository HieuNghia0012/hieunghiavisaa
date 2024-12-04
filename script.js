function showLogin() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('registerForm').classList.add('hidden');
}

function showRegister() {
    document.getElementById('registerForm').classList.remove('hidden');
    document.getElementById('loginForm').classList.add('hidden');
}

// Xử lý form đăng nhập
document.getElementById('loginFormElement').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngăn chặn việc load lại trang

    // Lấy giá trị từ form
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Xử lý logic kiểm tra đăng nhập
    if (email === 'test@example.com' && password === 'password123') {
        // Chuyển hướng đến trang sau khi đăng nhập thành công
        window.location.href = 'home.html'; // Trang đích của bạn
    } else {
        alert('Sai email hoặc mật khẩu!');
    }
});

// Xử lý form đăng ký
document.getElementById('registerFormElement').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngăn chặn việc load lại trang

    // Lấy giá trị từ form
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Kiểm tra điều kiện mật khẩu
    if (password === confirmPassword) {
        // Giả sử đăng ký thành công, chuyển hướng sang trang khác
        window.location.href = 'welcome.html'; // Trang đích của bạn
    } else {
        alert('Mật khẩu không khớp!');
    }
});
