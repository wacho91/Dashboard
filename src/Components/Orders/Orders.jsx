import { groupNumber, ordersData } from "../../Data/Index"

const Orders = () => {
  return (
    <div>
        <div>
            <img src="../../../public/logo.png" alt="logo" />
            <span>Orders today</span>
        </div>

        <div>
            <span>Amount</span>
            <span>$ {groupNumber(4560)}</span>
        </div>

        <div>
            {
                ordersData.map((order, index) => (
                    <div key={index}>
                        <div>
                            <span>{order.name}</span>
                            <span>$ {order.change}</span>
                        </div>
                        <div>
                            <span>{order.type}</span>
                            <span>Items: {order.items}</span>
                        </div>
                    </div>
                ))
            }
        </div>
        <div>
            <span>Split by orders</span>
        </div>
    </div>
  )
}

export default Orders
