/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { useState } from "react";
import Title from "../GlobalComponents/Title";
import ScheduleNavItem from "./ScheduleNavItem";
import Container from "../GlobalComponents/Container";
import ScheduleCard from "./ScheduleCard";
import ScheduleOneBg from "../../img/scheduleOne.jpg";
import ScheduleTwoBg from "../../img/scheduleTwo.jpg";
import ScheduleThreeBg from "../../img/scheduleThree.jpg";
import ScheduleFourBg from "../../img/scheduleFour.jpg";

const Schedule = () => {
  const [day, setDay] = useState("Monday");

  return (
    <section css={styles} className="schedule" id="pages">
      <Title subtitle="OUR TIMETABLE" title="SCHEDULE PLAN" />
      <div className="scheduleNav">
        <ScheduleNavItem
          day={day}
          setDay={setDay}
          itemName="Sunday"
          itemDate="January 14, 2020"
        />
        <ScheduleNavItem
          day={day}
          setDay={setDay}
          itemName="Monday"
          itemDate="January 15, 2020"
        />
        <ScheduleNavItem
          day={day}
          setDay={setDay}
          itemName="Tuesday"
          itemDate="January 16, 2020"
        />
      </div>
      <Container>
        {day === "Sunday" && (
          <React.Fragment>
            <ScheduleCard
              scheduleImg={ScheduleOneBg}
              scheduleTitle="React Hooks"
              scheduleDesc="by David Roben / Confer Ceo"
            />
            <ScheduleCard
              scheduleImg={ScheduleTwoBg}
              scheduleTitle="Advanced React Hooks"
              scheduleDesc="by Josh Nuar / Confer CTO"
            />
            <ScheduleCard
              scheduleImg={ScheduleThreeBg}
              scheduleTitle="State Managment"
              scheduleDesc="by Donna Rosen / Front End"
            />
            <ScheduleCard
              scheduleImg={ScheduleFourBg}
              scheduleTitle="Advanced State Managment"
              scheduleDesc="by Michael mro / Senior Front End"
            />
          </React.Fragment>
        )}
        {day === "Monday" && (
          <React.Fragment>
            <ScheduleCard
              scheduleImg={ScheduleTwoBg}
              scheduleTitle="Testing Your Hooks"
              scheduleDesc="by Donna Rosen / Front End"
            />
            <ScheduleCard
              scheduleImg={ScheduleThreeBg}
              scheduleTitle="Testing Your State Managment"
              scheduleDesc="by Martha Burke /Senior Front End"
            />
            <ScheduleCard
              scheduleImg={ScheduleFourBg}
              scheduleTitle="Test Your App"
              scheduleDesc="by David Roben"
            />
          </React.Fragment>
        )}
        {day === "Tuesday" && (
          <React.Fragment>
            <ScheduleCard
              scheduleImg={ScheduleOneBg}
              scheduleTitle="React Performance"
              scheduleDesc="by David Roben"
            />
            <ScheduleCard
              scheduleImg={ScheduleFourBg}
              scheduleTitle="Advanced Performance"
              scheduleDesc="by  Josh Nuar"
            />
          </React.Fragment>
        )}
      </Container>
    </section>
  );
};

const styles = css`
  width: 100%;
  background: #151853;
  padding: 100px 0;
  .scheduleNav {
    display: flex;
    justify-content: center;
  }
  .container {
    min-height: 634px;
  }
  @media (max-width: 970px) {
    .scheduleNav {
      padding: 14px 0 0 0;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  @media (max-width: 1168px) {
    .scheduleNav {
      width: 100%;
      max-width: 90%;
      margin: 0 auto;
    }
  }
`;

export default Schedule;
