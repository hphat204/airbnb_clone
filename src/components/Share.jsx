import React from "react";
import "../scss/Share.css";
import lady from "../img/lady.jpg";
function Share() {
  return (
    <div className="shareContainer">
      <img src={lady} alt="lady" />
      <div className="content">
        <h1>Thử đón tiếp khách</h1>
        <p>kiếm thêm thu nhập và khám phá các cơ hội mới bằng cách chia sẻ nơi ở của bạn</p>
        <button>Tìm hiểu thêm</button>
      </div>
    </div>
  );
}

export default Share;
