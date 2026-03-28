document.addEventListener("DOMContentLoaded", () => {
  const tsToggle = document.getElementById("tsToggle");
  const tsMenu = document.getElementById("tsMenu");
  const body = document.getElementById("app-body");
  const themeButtons = document.querySelectorAll(".ts-buttons button");

  // Xử lý bật/tắt (Toggle) Menu Đổi Style Giao Diện
  if (tsToggle && tsMenu) {
    tsToggle.addEventListener("click", () => {
      tsMenu.classList.toggle("active");
    });
  }

  // Logic Đổi Style Động (Dynamic Theme Switching) bằng CSS Variables Mapping
  if (themeButtons.length > 0) {
    themeButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        // 1. Quản lý trạng thái "Active" của các nút
        themeButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        
        // 2. Lấy tên Class Theme (ví dụ: theme-luxury)
        const themeClass = btn.getAttribute("data-theme");
        
        // 3. Ghi đè Class duy nhất vào the <body>
        // Hệ thống CSS Var sẽ nhận diện sự thay đổi và Render lại lập tức toàn bộ màu, typo, radius
        body.className = themeClass; 
        
      });
    });
  }

  // Nhấn ra ngoài để Đóng Menu (UX thân thiện)
  document.addEventListener("click", (e) => {
    if (tsMenu && tsToggle && !e.target.closest(".theme-switcher")) {
      tsMenu.classList.remove("active");
    }
  });

  // Hiệu ứng Cuộn Mượt (Smooth Scroll) cho các liên kết Navigation Menu
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      if(this.getAttribute('href') !== "#" && this.getAttribute('href').length > 1) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
});
