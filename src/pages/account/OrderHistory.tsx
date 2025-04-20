import AccountNav from '../../components/AccountNav';
import { orders } from '../../data/ordersData';
import '../../styles/OrderHistory.css';

const OrderHistory = () => {
  return (
    <div className="order-container">
      <AccountNav />
      <h1>Historial de órdenes</h1>
      <p>Bienvenido a tu historial de órdenes.</p>

      <div className="order-table-container">
        <table className="order-table">
          <thead className="order-thead">
            <tr>
              <th className="order-th">ORDEN ID</th>
              <th className="order-th">ESTADO</th>
              <th className="order-th">FECHA</th>
              <th className="order-th">TOTAL</th>
              <th className="order-th">ACCION</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
                <td className="order-td order-id">{order.id}</td>
                <td
                  className="order-td order-status"
                  style={{ color: order.statusColor }}
                >
                  {order.status}
                </td>
                <td className="order-td">{order.date}</td>
                <td className="order-td">{order.total}</td>
                <td className="order-td">
                  <a href="#" className="order-link">
                    Ver Detalles →
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="order-pagination">
        {['←', '01', '02', '03', '04', '05', '06', '→'].map((item, idx) => (
          <button
            key={idx}
            className={`order-page-button ${item === '02' ? 'active' : ''}`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
