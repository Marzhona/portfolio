import React from "react";
import MidComponentItem from "./MidComponentItem";
import MidPhone1 from "../../assets/images/ipad.png";
import MidPhone2 from "../../assets/images/behance.png";

const MidComponentParent = () => {
  return (
    <div>
      <div>
        <MidComponentItem
          title="My youtube channel"
          text="I consider my big example to be my YouTube channel, which has gained 4,000 subscribers in 2 years, but I make the most of all my knowledge gained"
          img={MidPhone1}
          reverse
        ></MidComponentItem>
      </div>
      <div>
        <MidComponentItem
          title="Search by room"
          img={MidPhone2}
        ></MidComponentItem>
      </div>
    </div>
  );
};

export default MidComponentParent;
