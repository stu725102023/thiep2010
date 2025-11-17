// Đợi cho tất cả trang web tải xong
document.addEventListener('DOMContentLoaded', function() {

    // Lấy các phần tử cần thiết
    const biThu = document.getElementById('biThu');
    const biThuWrapper = document.getElementById('bi-thu-wrapper');
    const thiepChinh = document.getElementById('thiepChinh');

    // Thêm sự kiện 'click' cho toàn bộ bì thư
    // (JavaScript này không còn tìm 'thongBaoNhap' nữa)
    biThuWrapper.addEventListener('click', () => {
        
        // Kiểm tra xem bì thư ĐÃ có lớp 'open' chưa
        if (biThu.classList.contains('open')) {
            // --- ĐÂY LÀ LẦN CLICK THỨ HAI ---
            
            // 1. Làm mờ và ẩn phần bì thư
            biThuWrapper.style.opacity = '0';
            biThuWrapper.style.visibility = 'hidden';

            // 2. Hiển thị phần thiệp chính với hiệu ứng zoom
            thiepChinh.classList.add('show');

        } else {
            // --- ĐÂY LÀ LẦN CLICK ĐẦU TIÊN ---
            
            // 1. Thêm lớp 'open' để kích hoạt CSS animation mở nắp
            biThu.classList.add('open');
        }
    });
});