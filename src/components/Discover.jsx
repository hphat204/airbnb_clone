import React from "react";
import Card from "./Card";
import "../scss/Discover.css";
import sheep from "../img/sheep.jpg";
import ipad from "../img/ipad.jpg";
import ladyholdguitar from "../img/ladyholdguitar.jpg";
function Discover() {
  console.log(sheep);
  const cardsObject = [
    {
      img: `${sheep}`,
      title: "Trải nghiệm",
      des: "Tìm các hoạt động khó quên gần bạn.",
    },
    {
      img: `${ipad}`,
      title: "Trải nghiệm trực tuyến",
      des: "Các hoạt động tương tác, truyền trực tiếp dưới sự dẫn dắt của Người tổ chức.",
    },
    {
      img: `${ladyholdguitar}`,
      title: "Bộ sưu tập nổi bật: Phiêu du",
      des: " Du lịch tại nhà với Trải nghiệm trực tuyến.",
    },
  ];
  return (
    <div className="discoverContainer">
      <h1>Khám phá những điều nên trải nghiệm</h1>
      <div className="cardContainer">
        {cardsObject.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Discover;
