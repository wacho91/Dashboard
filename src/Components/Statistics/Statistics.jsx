
import { BsArrowUpShort } from "react-icons/bs"
import { groupNumber } from "../../Data/Index"

const Statistics = () => {
  return (
    <div>
        <span>Overview Statistics</span>
        <div>
            <div>
                <div>
                    <BsArrowUpShort />
                </div>

                <div>
                    <span>Top item this month</span><span>Office comps</span>
                </div>
            </div>

            <div>
                <span>Items</span><span>${groupNumber(455)}</span>
            </div>

            <div>
                <span>Profit</span><span>${groupNumber(370000)}</span>
            </div>

            <div>
                <span>Daily Average</span><span>${groupNumber(2000)}</span>
            </div>
        </div>
    </div>
  )
}

export default Statistics
