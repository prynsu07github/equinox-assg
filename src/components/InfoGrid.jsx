const InfoGrid = ({ data }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-sm text-gray-700">
    {data.map((item, index) => (
      <div key={index}>
        <p className="text-gray-500 text-xs font-semibold">{item.label}</p>
        <p className={`font-medium ${item.highlight ? 'text-red-600' : ''} font-bold text-l`}>{item.value}</p>
      </div>
    ))}
  </div>
);

export default InfoGrid