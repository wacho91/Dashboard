import Orders from "../../Components/Orders/Orders"
import Statistics from "../../Components/Statistics/Statistics"
import { cardsData, groupNumber } from "../../Data/Index"


const Dashboard = () => {
  return <div>
    {/* left side */}
    <div>
        <div>
            <div>
                <span>Dashboard</span>
                <div>
                    <select>
                        <option value="">1 week</option>
                        <option value="">1 month</option>
                        <option value="">1 year</option>
                    </select>
                </div>
            </div>
            <div>
                {
                    cardsData.map((card, index) => (
                        <div key={index}>
                            <div>
                                <span>{card.title}</span>
                                <span>+{card.change}</span>
                            </div>

                            <div>
                                <span>$</span>
                                <span>{groupNumber(card.amount)}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        <Statistics />
    </div>
        <Orders />
  </div>
}

export default Dashboard
