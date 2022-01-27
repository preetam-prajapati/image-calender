import React from "react";
import { Button } from "reactstrap";

const DayCard = ({ data }) => {
  return (
    <div className="m-3 mt-4">
      <h6 className={`${data.card_color ? "text-info " : "text-muted"} `}>
        {data.day_of_the_week}
      </h6>
      <h1 className={`${data.card_color ? "text-info " : "text-muted"} `}>
        {data.day_of_the_month}
      </h1>
      <div className={`${data.card_color ? "bg-info text-light " : ""} p-2 hoverEffect`}>
        <h4>{data.card_header}</h4>
        <p>{data.card_body}</p>
        <div className="text-center">
          <Button className="bg-transparent text-primary text-center m-auto d-block">
            Schedule Post
          </Button>
          <div className="m-auto mt-2" style={{ height: "100px" }}>
            {data.card_image && <img src={data.card_image} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayCard;
