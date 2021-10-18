import React from "react";
import List from "./List";
import "../scss/Contact.css";
function Contact() {
  const listsObject = [
    {
      tittle: "giới thiệu",
      list: [
        "Phương thức hoạt động của Airbnb",
        "Trang tin tức",
        "Airbnb 2021",
        "Nhà đầu tư",
        "Airbnb Plus",
        "Airbnb Luxe",
        "HotelTonight",
        "Airbnb for Work",
        "Nhờ có Host, mọi điều đều có thể",
        "Cơ hội nghề nghiệp",
        "Thư của nhà sáng lập",
      ],
    },
    {
      tittle: "Cộng đồng",
      list: [
        "Sự đa dạng và Cảm giác thân thuộc",
        "Tiện nghi phù hợp với người có nhu cầu đặc biệt",
        "Đối tác liên kết Airbnb",
        "Đón tiếp người tị nạn Afghanistan",
        "Lượt giới thiệu của khách",
        "Airbnb.org",
      ],
    },
    {
      tittle: "Đón tiếp khách",
      list: [
        "Cho thuê nhà",
        "Tổ chức Trải nghiệm trực tuyến",
        "Tổ chức trải nghiệm",
        "Đón tiếp khách có trách nhiệm",
        "Trung tâm tài nguyên",
        "Trung tâm cộng đồng",
      ],
    },
    {
      tittle: "Hỗ trợ",
      list: [
        "Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi",
        "Trung tâm trợ giúp",
        "Các tùy chọn hủy",
        "Hỗ trợ khu dân cư",
        "Tin cậy và an toàn",
      ],
    },
  ];
  return (
    <div className="contactContainer">
      <div className="listContainer">
        {listsObject.map((list, index) => (
          <List key={index} {...list} />
        ))}
      </div>
    </div>
  );
}

export default Contact;
