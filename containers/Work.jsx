import React from "react";
import "../assets/css/styles.css";
import WorkList from "@/components/work/WorkList"
export const Work = () => {
  return (
    <div>
      <section class="work section" id="work">
        <h2 class="section-title">Work </h2>
        <div>
            <WorkList/>
        </div>
      </section>
    </div>
  );
};
