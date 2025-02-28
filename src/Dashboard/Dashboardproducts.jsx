import React from 'react'
import "./dashboard_styles/dashboardproducts.css";
import { RiEdit2Fill } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineReplay } from "react-icons/md";
import p7 from '../assets/p7.jpg'
import p8 from '../assets/p8.jpg'
import p10 from '../assets/p10.jpg'
import b1 from '../assets/b1.jpg'
import b2 from '../assets/b2.jpg'
import b3 from '../assets/b3.jpg'
import b4 from '../assets/b4.jpg'
import b5 from '../assets/b5.jpg'
import b6 from '../assets/b6.jpg'

const Dashboardproducts = () => {
  return (
    <div className='viewproducts'><br /><br /><br /><br />
      <h1 className="dashboard-title">Product List</h1>
      <div className="table-container">
        <table className="product-table">
          <thead className='head'>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock Status</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Admin will populate this data dynamically */}
            <tr>
              <td>1</td>
              <td><img src={p8} alt="" width={70} height={80} /></td>
              <td>Category</td>
              <td>$0.00</td>
              <td className="in-stock">on sell</td>
              <td className='act'>
                <RiEdit2Fill />
              </td>
              <td>
                <RiDeleteBin6Line />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td><img src={b1} alt="" width={70} height={80} /></td>
              <td>Category</td>
              <td>$0.00</td>
              <td className="in-stock">on sell</td>
              <td className='act'>
                <RiEdit2Fill />
              </td>
              <td>
                <RiDeleteBin6Line />
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td><img src={b2} alt="" width={70} height={80} /></td>
              <td>Category</td>
              <td>$0.00</td>
              <td className="in-stock">on sell</td>
              <td className='act'>
                <RiEdit2Fill />
              </td>
              <td>
                <RiDeleteBin6Line />
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td><img src={b3} alt="" width={70} height={80} /></td>
              <td>Category</td>
              <td>$0.00</td>
              <td className="in-stock">on sell</td>
              <td className='act'>
                <RiEdit2Fill />
              </td>
              <td>
                <RiDeleteBin6Line />
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td><img src={b4} alt="" width={70} height={80} /></td>
              <td>Category</td>
              <td>$0.00</td>
              <td className="in-stock">on sell</td>
              <td className='act'>
                <RiEdit2Fill />
              </td>
              <td>
                <RiDeleteBin6Line />
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td><img src={b5} alt="" width={70} height={80} /></td>
              <td>Category</td>
              <td>$0.00</td>
              <td className="in-stock">on sell</td>
              <td className='act'>
                <RiEdit2Fill />
              </td>
              <td>
                <RiDeleteBin6Line />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td><img src={b6} alt="" width={70} height={80} /></td>
              <td>Category</td>
              <td>$0.00</td>
              <td className="in-stock">on sell</td>
              <td className='act'>
                <RiEdit2Fill />
              </td>
              <td>
                <RiDeleteBin6Line />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <img src={p7} alt="" width={70} height={80} />
              </td>
              <td>Category</td>
              <td>$0.00</td>
              <td className="out-of-stock">Out selled</td>
              <td className='act'>
                <RiEdit2Fill />
              </td>
              <td>
                <RiDeleteBin6Line />
              </td>
            </tr>
            {/* More rows can be added dynamically */}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboardproducts