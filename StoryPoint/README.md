# 📊 Story Point Management System

Hệ thống quản lý điểm ước lượng công việc với giao diện hiện đại và thân thiện.

## ✨ Tính năng

### 🎨 Giao diện hiện đại
- **Thiết kế responsive**: Hoạt động tốt trên mọi thiết bị (desktop, tablet, mobile)
- **Màu sắc sinh động**: Gradient đẹp mắt với các màu chủ đạo tím và xanh dương
- **Animations mượt mà**: Hiệu ứng chuyển động khi hover, click và chuyển tab
- **Dark mode ready**: Sẵn sàng cho chế độ tối (có thể mở rộng)

### 📑 Phân chia theo Tab
- **📋 Công việc yêu cầu**: Các tác vụ Infrastructure và Server được yêu cầu
- **🔄 Tác vụ định kỳ**: Release, testing, review, security checks
- **📦 Tác vụ khác**: Setup môi trường, configuration
- **🐛 Cải tiến & Bug**: Hướng dẫn phân loại theo độ khó và phạm vi
- **🖥️ Server**: API, Database, Batch processing với điểm chi tiết
- **💻 Web Frontend**: Page, UI, API integration, Validation
- **📱 App**: UserData, Personal, API, UI creation
- **☁️ Infrastructure**: AWS, CI/CD, Terraform
- **📐 Thiết kế**: Xác nhận nội dung và thiết kế chi tiết

### 🔍 Tìm kiếm thông minh
- Tìm kiếm realtime trong bảng
- Tự động lọc kết quả khi gõ
- Hỗ trợ tìm kiếm tiếng Nhật

### 🔢 Sắp xếp bảng
- Click vào header để sắp xếp
- Hỗ trợ sắp xếp số và chữ
- Toggle giữa ascending/descending

### ⌨️ Phím tắt
- **Alt + 1-9**: Chuyển nhanh giữa các tab
- Tiết kiệm thời gian điều hướng

### 💾 Lưu trạng thái
- Tự động nhớ tab cuối cùng được chọn
- Không bị mất vị trí khi reload trang

### 🎯 Badge và Tags
- **Độ khó**: Thấp (xanh lá), Trung bình (vàng), Cao (đỏ)
- **Phạm vi**: Thấp, Trung bình, Cao
- **Lĩnh vực**: Infrastructure, Server, Frontend, App
- **Story Points**: Hiển thị nổi bật với gradient

### 📊 Card Layout
- Layout dạng card cho các phần Server, Frontend, App, Infrastructure
- Dễ dàng so sánh và tìm kiếm thông tin
- Hover effect sinh động

## 🚀 Cách sử dụng

### Mở file
Chỉ cần mở file `index.html` trong trình duyệt web:
```bash
open index.html
# hoặc
firefox index.html
# hoặc
chrome index.html
```

### Điều hướng
1. **Chuyển tab**: Click vào các nút tab ở phía trên
2. **Tìm kiếm**: Gõ từ khóa vào ô tìm kiếm (nếu có)
3. **Sắp xếp**: Click vào header của bảng để sắp xếp
4. **Phím tắt**: Dùng Alt + số để chuyển tab nhanh

## 📁 Cấu trúc thư mục

```
StoryPoint/
├── index.html              # File HTML chính
├── resources/
│   ├── style.css          # CSS styling
│   ├── script.js          # JavaScript functionality
│   └── sheet.css          # Old CSS (có thể xóa)
├── シート1.html            # File gốc từ Google Sheets (backup)
└── README.md              # File này
```

## 🎨 Màu sắc chủ đạo

- **Primary**: #4f46e5 (Indigo)
- **Secondary**: #06b6d4 (Cyan)
- **Success**: #10b981 (Green)
- **Warning**: #f59e0b (Amber)
- **Danger**: #ef4444 (Red)

## 📱 Responsive Breakpoints

- **Desktop**: > 768px (Layout đầy đủ)
- **Mobile**: ≤ 768px (Layout single column, tabs vertical)

## 🔧 Tùy chỉnh

### Thay đổi màu sắc
Chỉnh sửa CSS variables trong `resources/style.css`:
```css
:root {
    --primary-color: #4f46e5;
    --secondary-color: #06b6d4;
    /* ... */
}
```

### Thêm tab mới
1. Thêm button trong `.tabs`:
```html
<button class="tab-button" data-tab="new-tab">🆕 Tab mới</button>
```

2. Thêm content tương ứng:
```html
<div id="new-tab" class="tab-content">
    <h2>🆕 Tab mới</h2>
    <!-- Nội dung -->
</div>
```

### Thêm dữ liệu mới
Sao chép cấu trúc bảng hoặc card có sẵn và cập nhật dữ liệu.

## 🖨️ In ấn

Website hỗ trợ in ấn với CSS tối ưu:
- Ẩn navigation tabs
- Hiển thị tất cả nội dung
- Page break tự động
- Format phù hợp với giấy A4

## 🌐 Trình duyệt hỗ trợ

- ✅ Chrome/Edge (Chromium) 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Opera 76+

## 📝 Ghi chú

- File gốc `シート1.html` được giữ lại để backup
- Dữ liệu mẫu đã được lược bớt để dễ demo
- Có thể mở rộng thêm nhiều tính năng như:
  - Export to Excel/CSV
  - Dark mode toggle
  - Custom filters
  - Charts and statistics
  - User authentication

## 🤝 Đóng góp

Để thêm dữ liệu hoặc cải thiện giao diện:
1. Fork/clone repository
2. Chỉnh sửa các file trong thư mục resources/
3. Test trên nhiều trình duyệt
4. Submit pull request

## 📄 License

Free to use và customize cho dự án của bạn.

---

Made with ❤️ by AI Assistant

