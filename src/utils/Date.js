// Hàm định dạng ngày giờ theo chuẩn Việt Nam
export function formatDate(date = new Date()) {
  return date.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
