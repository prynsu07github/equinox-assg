import React from "react";
import TimelineEntry from "./TimelineEntry";

const Timeline = () => {
  const timelineData = [
    {
      date: "11 Oct 23",
      entries: [
        {
          status: "Proposal Sent",
          time: "05:30 PM",
          nextStatus: "Discussion Done",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
          followUp: "11 Oct 23 10:30 AM",
          user: "Bhimkumar Prasad",
        },
        {
          status: "Interested",
          time: "02:30 PM",
          nextStatus: "Discussion Done",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
          followUp: "11 Oct 23 10:30 AM",
          user: "Bhimkumar Prasad",
        },
      ],
    },
    {
      date: "7 Oct 23",
      entries: [
        {
          status: "Proposal Sent",
          time: "05:30 PM",
          nextStatus: "Discussion Done",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
          followUp: "11 Oct 23 10:30 AM",
          user: "Bhimkumar Prasad",
        },
        {
          status: "Interested",
          time: "02:30 PM",
          nextStatus: "Discussion Done",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
          followUp: "11 Oct 23 10:30 AM",
          user: "Bhimkumar Prasad",
        },
      ],
    },
  ];
  return (
    <div>
        <div>
      {timelineData.map((e,idx) => (
        <div key={e.date}>
          <p className="font-semibold text-xl text-center">{e.date}</p>
            <TimelineEntry key={idx} data={e.entries} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default Timeline;
