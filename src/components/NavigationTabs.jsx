import React, { useState } from 'react';

const NavigationTabs = () => {

  const tabs = ['Sites', 'Orders', 'VRs', 'Reports', 'Invoices', 'PI'];
  const [activeTab , setActiveTab] = useState("Sites")
  return (
    <div className="flex gap-2">
      {tabs.map(tab => (
        <div className='flex flex-col items-center w-20'>
          <button
          key={tab}
          onClick={()=>setActiveTab(tab)}
          className={`w-full cursor-pointer py-2 px-4 text-sm ${activeTab === tab ? 'text-black font-semibold' : 'text-gray-600'}`}
        >
          {tab}
        </button>
        <span className={`w-7 h-1 rounded-full visible ${activeTab === tab ? 'bg-blue-500' : 'hidden'}`}></span>
        </div>
      ))}
    </div>
  );
};

export default NavigationTabs