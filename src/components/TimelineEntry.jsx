const TimelineEntry = ({ data }) => {
  return (
    <div className="bg-white border-1 border-gray-300 rounded-xl p-2 max-w-120">
      {data.map((e, idx) => {
        return (
          <div key={idx} className="flex gap-2">
            <div className="min-w-30">
              <p className="text-right">{e.status}</p>
              <p className="text-sm text-right">{e.time}</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="w-4 h-4 bg-gray-800 rounded-full"></span>
              <span className="w-0.5 flex-1 bg-gray-800"></span>
            </div>

            <div>
              <p className="text-lg">{e.nextStatus}</p>
              <p>{e.description}</p>
              <p>Follow Up : {e.followUp}</p>
              <p className="text-xs text-right font-semibold">-{e.user}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TimelineEntry;
