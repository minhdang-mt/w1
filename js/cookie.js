function setAccountCookies(username, fullname) {
    Cookies.set('username', username, { expires: 7 }); // Cookie sẽ hết hạn sau 7 ngày
    Cookies.set('fullname', fullname, { expires: 7 });
}

// Gọi hàm với thông tin tài khoản
// setAccountCookies('MinhDang', '@dnguyenminh');
function getAccountFromCookies() {
    const username = Cookies.get('username');
    const fullname = Cookies.get('fullname');
    
    if (username && fullname) {
        document.querySelector('.account-menu__username').textContent = username;
        document.querySelector('.account-menu__fullname').textContent = fullname;
    }
}

// Gọi hàm để đọc thông tin khi trang được tải
getAccountFromCookies();
function clearAccountCookies() {
    Cookies.remove('username');
    Cookies.remove('fullname');
}
function updateAccountCookies(username, fullname) {
    setAccountCookies(username, fullname);
}

setAccountCookies('DangNguyen', '@dangminh'); 