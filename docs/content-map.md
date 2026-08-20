# Content map — VNR202 / Bước ngoặt 1930

Nguồn nội dung của bản dựng là `VNR202_Noi_dung_chinh_Web_Presentation_1930.docx`. Chỉ dẫn trong prompt định hướng sản phẩm, không được coi là dữ kiện lịch sử.

| Scene | Mục tiêu | Claim chính | Nguồn trong backbone | Tương tác |
|---|---|---|---|---|
| 01 — Câu hỏi | Đặt vấn đề | 1930 là kết quả của một quá trình hội tụ | Khung đề tài, DOCX | CTA, progress rail |
| 02 — Khủng hoảng | Hiểu yêu nước chưa phải điều kiện đủ | Thiếu đường lối, tổ chức, phương pháp | GT được DOCX dẫn, tr.19–22 | Chọn ba lỗ hổng |
| 03 — Xã hội thuộc địa | Thấy điều kiện xã hội tạo nhu cầu thay đổi | Cai trị thuộc địa làm biến đổi cơ cấu xã hội | GT được DOCX dẫn, tr.16–19 | Sơ đồ nhân quả |
| 04 — Chuẩn bị | Thấy vai trò Nguyễn Ái Quốc như một quá trình | Tìm đường → lý luận → cán bộ → tổ chức | GT được DOCX dẫn, tr.22–26 | Timeline khám phá |
| 05 — Nghịch lý 1929 | Hiểu vì sao nhiều tổ chức vẫn chưa đủ | Ba tổ chức cùng khuynh hướng nhưng phân tán | GT được DOCX dẫn, tr.26–28 | Hợp nhất ba node |
| 06 — Hội nghị | Nắm chronology và vai trò chủ trì | 6/1–7/2; 3/2 là ngày kỷ niệm; 24/2 hoàn tất | GT được DOCX dẫn, tr.28–29 | Timeline, năm đề xuất |
| 07 — Cương lĩnh | Phân biệt đúng thành phần | Chánh cương + Sách lược = Cương lĩnh đầu tiên | GT được DOCX dẫn, tr.29–31 | Phương trình văn kiện |
| 08 — Bước ngoặt | Trả lời câu hỏi đề tài | Đường lối, tổ chức, lực lượng/phương pháp hội tụ | GT được DOCX dẫn, tr.31–32 | Before/after, quiz |

## Kiến trúc

- `src/data.js`: sự kiện, nguồn, nội dung Cương lĩnh, quiz.
- `src/main.js`: scenes, source drawer, learning modes, routing và keyboard controls.
- `src/styles.css`: design system, responsive, accessibility và reduced motion.
- `/sources`: source verification matrix phía client.

PDF giáo trình gốc đã được bổ sung và các claim chính ở PDF trang 16–32 đã được đối chiếu trực tiếp. `VRN202-Group4.docx` vẫn chưa có; framework riêng của nhóm tiếp tục được phân loại là “Phân tích của Nhóm 4”.
