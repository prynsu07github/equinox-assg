import { GiHamburgerMenu } from "react-icons/gi";
import InfoGrid from "./InfoGrid";

const CustomerHeader = () => {

  const customerDetails = {
    name: "Burman Hospitality Pvt. Ltd.",
    address: ["Delhi", "Central Delhi", "110002"],
    date: "1 Jul  2022",
    paymentType: "POSTPAID",
    paymentDetails: {
      revenue: "10,00,000",
      paymentReceived: "7,00,000",
      notyetdue: "1,00,000",
      paymentOverdue: [
        {
          name: "A",
          amount: "20,000",
        },
        {
          name: "B",
          amount: "50,000",
        },
        {
          name: "C",
          amount: "50,000",
        },
        {
          name: "D",
          amount: "30,000",
        },
      ],
    },
    infoData: [
      { label: "Lead Category - Source", value: "Others - References" },
      { label: "Lead Category - Lead Source", value: "-" },
      { label: "Last Updated", value: "07 Nov 2023" },
      { label: "Total Outstanding", value: "10,00,000", highlight: true },
      { label: "Last Order Date", value: "10 Dec 2023 03:30 PM" },
    ],
  };

  return (
    <div className="bg-white shadow px-1.5 rounded-sm mb-4 border-1 border-gray-500">
      <div className="flex justify-between border-b-1 border-gray-500">
        <div>
          <h2 className="text-xl font-semibold">{customerDetails.name}</h2>
        <div className="flex gap-2 flex-row items-center pb-3 pt-1">
          <div className="h-full">
            <div className="flex items-center text-sm text-gray-500 gap-2 border-r-2 border-gray-600 max-w-fit pr-2">
              {customerDetails.address.map((e, i) => (
                <span key={i} className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                  {e}
                </span>
              ))}
            </div>
          </div>
          <div className="h-full  border-r-2 border-gray-600 pr-2 flex items-center">
            <p className="text-sm text-gray-400">Created on: 1 Jul 2022</p>
          </div>
          <span className="bg-blue-100 text-blue-600 font-bold rounded-xl px-2 py-1 text-xs">
            POSTPAID
          </span>
        </div>
        </div>
        <div className="flex items-center gap-2">
          <GiHamburgerMenu className="text-blue-400 text-2xl cursor-pointer" />
          <button className="h-10 bg-blue-400 text-white text-xs px-4 rounded-lg font-semibold cursor-pointer">+ Raise Query</button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row  md:items-center py-3 border-b-1 border-gray-500 pb-3 ">
        <div className="flex gap-4 border-r-0 md:border-r-2 border-b-1 md:border-b-0 border-gray-400 pr-5 sm:pr-10 md:pr-30 pb-3 md:pb-0 ">
          <div>
            <p className="font-semibold">
              {customerDetails.paymentDetails.revenue}
            </p>
            <p className="text-gray-300">Total Revenue</p>
          </div>
          <div>
            <p className="font-semibold">
              {customerDetails.paymentDetails.paymentReceived}
            </p>
            <p className="text-green-500">Payment Received</p>
          </div>
          <div>
            <p className="font-semibold">
              {customerDetails.paymentDetails.notyetdue}
            </p>
            <p className="text-blue-400">Not Yet Due</p>
          </div>
        </div>
        <div className="flex">
          <p className="text-red-400 font-semibold px-0 md:px-10 lg:px-30 pr-5 md:pr-0">
            Payment
            <br />
            Overdue
          </p>
          <div className="flex gap-3 sm:gap-5 lg:gap-10 items-center">
            {customerDetails.paymentDetails.paymentOverdue.map((e, i) => {
              return (
                <div key={i}>
                  <p className="text-center font-semibold">{e.amount}</p>
                  <p className="text-center text-red-400 text-sm font-semibold">
                    {e.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-between py-3">
        <InfoGrid data={customerDetails.infoData} />
      </div>
    </div>
  );
};

export default CustomerHeader;
