import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import DayCard from "./childComponents/DayCard";

const Home = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/a7948741-372c-4554-b58d-ce87a3033e5d")
      .then((res) => {
        console.log(res.data, "14");
        if (res?.data) {
          setState(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {state && (
        <>
          <div
            className="monthBanner"
            style={{ backgroundImage: `url(${state.calendar_banner_url})` }}
          >
            <h1>{state.calendar_banner_text}</h1>
            <div></div>
          </div>
          <Row>
            <Col lg="3" md="4" sm="1">
              <DayCard data={state.days[0]} />
            </Col>
            <Col lg="3" md="4" sm="1">
              <DayCard data={state.days[1]} />
            </Col>
            <Col lg="3" md="4" sm="1">
              <DayCard data={state.days[2]} />
            </Col>
            <Col lg="3" md="4" sm="1">
              <DayCard data={state.days[3]} />
            </Col>
            <Col lg="3" md="4" sm="1">
              <DayCard data={state.days[4]} />
            </Col>
            <Col lg="3" md="4" sm="1">
              <DayCard data={state.days[5]} />
            </Col>
            <Col lg="3" md="4" sm="1">
              <DayCard data={state.days[6]} />
            </Col>
            <Col lg="3" md="4" sm="1">
              <DayCard data={state.days[7]} />
            </Col>
            <Col lg="3" md="4" sm="1">
              <DayCard data={state.days[8]} />
            </Col>
            <Col lg="3" md="4" sm="1">
              <DayCard data={state.days[9]} />
            </Col>
            <Col lg="3" md="4" sm="1">
              <DayCard data={state.days[10]} />
            </Col>
            <Col lg="3" md="4" sm="1">
              <DayCard data={state.days[11]} />
            </Col>
            <Col lg="3" md="4" sm="1">
              <DayCard data={state.days[12]} />
            </Col>
            <Col lg="3" md="4" sm="1">
              <DayCard data={state.days[13]} />
            </Col>
            <Col lg="3" md="4" sm="1">
              <DayCard data={state.days[14]} />
            </Col>
            <Col lg="3" md="4" sm="1">
              <DayCard data={state.days[15]} />
            </Col>
            <Col lg="3" md="4" sm="1">
              <DayCard data={state.days[16]} />
            </Col>
            <Col lg="3" md="4" sm="1">
              <DayCard data={state.days[17]} />
            </Col>
            <Col lg="3" md="4" sm="1">
              <DayCard data={state.days[18]} />
            </Col>
            <Col lg="3" md="4" sm="1">
              <DayCard data={state.days[19]} />
            </Col>
            <Col lg="3" md="4" sm="1">
              <DayCard data={state.days[20]} />
            </Col>
            <Col lg="3" md="4" sm="1">
              <DayCard data={state.days[21]} />
            </Col>
            <Col lg="3" md="4" sm="1">
              <DayCard data={state.days[22]} />
            </Col>
            <Col lg="3" md="4" sm="1">
              <DayCard data={state.days[23]} />
            </Col>
            <Col lg="3" md="4" sm="1">
              <DayCard data={state.days[24]} />
            </Col>
            <Col lg="3" md="4" sm="1">
              <DayCard data={state.days[25]} />
            </Col>
            <Col lg="3" md="4" sm="1">
              <DayCard data={state.days[26]} />
            </Col>
            <Col lg="3" md="4" sm="1">
              <DayCard data={state.days[27]} />
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default Home;
