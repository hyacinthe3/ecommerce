import React from 'react'
import "./dashboard_styles/dashboardorders.css"
const orders = [
    {
      id: "01",
      date: "2025-02-14",
      customer: "John Doe",
      email: "john@example.com",
      items: "3 Items",
      total: "$120.00",
      status: "Shipped",
      payment: "Paid",
      tracking: "TRK12345"
    },
    {
      id: "02",
      date: "2025-02-13",
      customer: "Jane Smith",
      email: "jane@example.com",
      items: "1 Item",
      total: "$45.00",
      status: "Pending",
      payment: "Unpaid",
      tracking: "-"
    },
    // More orders...
  ];
  
const Dashboardorders = () => {
  return (
    <div className='vieworders'><br /><br /><br /><br /><br />
    <h1 className="dashboard-title">Order Management</h1>
    <div className="orders-container">
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            {/* <th>Customer</th> */}
            <th>Email</th>
            <th>Items</th>
            <th>Total</th>
            <th>Status</th>
            {/* <th>Payment</th>
            <th>Tracking</th> */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="orders-row">
              <td>{order.id}</td>
              <td>{order.date}</td>
              {/* <td>{order.customer}</td> */}
              <td>{order.email}</td>
              <td>{order.items}</td>
              <td>{order.total}</td>
              {/* <td className={order.status === 'Shipped' ? 'status-shipped' : 'status-pending'}>{order.status}</td>
              <td className={order.payment === 'Paid' ? 'payment-paid' : 'payment-unpaid'}>{order.payment}</td> */}
              <td>{order.tracking}</td>
              <td>
                View
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
</div>
  )
}

export default Dashboardorders