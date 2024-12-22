// components/HeroSearch.js
import React, { useState } from "react";
import "./Header.css";

function HeroSearch() {
  return (
    <section className="hero-search">
      <div className="hero-content">
        <h1>Chào mừng đến với hệ thống đặt phòng họp</h1>
        <p>Chọn quận, ngày và số người để tìm phòng phù hợp nhất cho bạn</p>
        <button className="search">Tìm phòng ngay</button>
      </div>
    </section>
  );
}

export default HeroSearch;
