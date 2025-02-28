import React from "react";
import "./dashboard_styles/DashboardView.css";
import Charts from "./Charts";

const DashboardView = () => {
  // Sample data for the dashboard
  const dashboardItems = [
    { id: 1, title: "Users", value: "2,500" },
    { id: 2, title: "Orders", value: "1,200" },
    { id: 3, title: "Revenue", value: "$75K" },
    { id: 4, title: "Products", value: "320" },
    { id: 5, title: "Vendors", value: "85" },
    { id: 6, title: "Reviews", value: "1,430" },
  ];

  return (
    <div className="view"><br /><br /><br />
      <h1>My Dashboard</h1>
      <center>
      <div className="board-container">
        {dashboardItems.map((item) => (
          <div key={item.id} className="board-item">
            <h3>{item.title}</h3>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
      </center><br /><br />
      <div className="board-container">
        <Charts/>
      </div>
    </div>
  );
};

export default DashboardView;
