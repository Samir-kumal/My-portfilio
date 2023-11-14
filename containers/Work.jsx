import React from "react";
import "../assets/css/styles.css";
import WorkList from "@/components/work/WorkList"
export const Work = () => {
  return (
    <div>
      <section className="work section" id="work">
        <h2 className="section-title">Work </h2>
        <div>
            <WorkList/>
        </div>
      </section>
    </div>
  );
};
