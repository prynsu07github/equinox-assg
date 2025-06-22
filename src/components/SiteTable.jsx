import NavigationTabs from "./NavigationTabs";

const SitesTable = () => {
  const tableHeaders = [
    "Site Name",
    "State",
    "City",
    "Revenue",
    "Total Orders",
    "Last Order",
    "Created At",
  ];

  const tableData = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div>
      <NavigationTabs />
      <div className="border-1 border-gray-300 mt-5">
        <div className="flex gap-15 h-8 items-center px-5">
          {tableHeaders.map((e, i) => (
            <p className="text-gray-500 text-center" key={i}>
              {e}
            </p>
          ))}
        </div>
        <div>
            {
                tableData.map(e => (
                    <div className={`h-8 ${e%2 != 0 ? 'bg-gray-300':`bg-white`}`}></div>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default SitesTable;
