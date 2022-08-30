import React, { useState, useEffect } from "react";
import { ReactAgenda } from "react-agenda";
import Modal from "react-bootstrap/Modal";
import "react-agenda/build/styles.css";
import "react-datetime/css/react-datetime.css";
import { connect } from "react-redux";
import { getAllEvent, deleteEvent } from "../../api/eventApi";
import { loadEvent } from "../../actions/event/eventActions";
import styled from "styled-components";
import AddEvent from "./AddEvent";
import EditEvent from "./EditEvent";
import AddRecurentEvent from "./AddRecurentEvent";
import { buildI18n } from "../../i18n/index";

require("moment/locale/fr.js");
var colors = {
  1: "rgba(102, 195, 131 , 1)",
  public: "rgba(102, 195, 131 , 1)",
  private: "rgba(242, 177, 52, 1)",
  "color-3": "rgba(235, 85, 59, 1)",
};
var now = new Date();

const MainContainer = styled.body`
  background-color: transparent;
`;

const Title = styled.p`
  color: white;
  font-size: 22px;
`;

const Text = styled.div`
  color: white;
  font-size: 18px;
  font-size: 18px;
`;

const ThemeButtonContainer = styled.div`
  margin-top: 5px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Theme = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  margin: 5px;
  background-color: ${(props) => props.backgroundColor};
  border-color: black;
  border-radius: 5px;
  border-width: 1px;
`;

const Warroom = (props) => {
  const [showHelp, setShowHelp] = useState(false);
  const [recurentEventPopUp, setRecurrentEventPopUp] = useState(false);
  const [eventPopUp, setEventPopUp] = useState(false);
  const [editeventPopUp, setEditeventPopUp] = useState(false);
  const [selectedDate, setSelectedate] = useState();
  const [selectedEvent, setselectedEvent] = useState([]);
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState([]);
  const [cellHeight, setCellHeight] = useState(30);
  const [showModal, setShowModal] = useState(false);
  const [locale, setLocale] = useState("fr");
  const [rowsPerHour, setRowsPerHour] = useState(2);
  const [numberOfDays, setNumberOfDays] = useState(7);
  const [startDate, setStartDate] = useState(new Date());

  const handleRangeSelection = (item) => {};

  const i18n = buildI18n(props.lang.value);

  const handleRemoveItem = (items, removeItem) => {
    deleteEvent(removeItem.id).then((res) => {
      if (res.status === 200) {
        getAllEvent(props.user.subuser[props.user.current_subuser].id).then(
          (res) => {
            props.loadEvent(res.result);
          }
        );
      }
    });
  };

  const addNewEvent = (items, newItem) => {
    setSelectedate(items);
    setSelected(items);
    setEventPopUp(true);
    setShowModal(true);
  };

  const editEvent = (items, newItem) => {
    setEditeventPopUp(true);
    setShowModal(true);
    let event = props.agenda.event.filter((item) => item.id === items.id)[0];
    setselectedEvent(event);
  };
  useEffect(() => {
    if (props && props.theme && props.theme.allTheme) {
      for (let i = 0; i < props.theme.allTheme.length; i++) {
        colors[props.theme.allTheme[i].id] = props.theme.allTheme[i].color;
      }
    }
  }, []);

  useEffect(() => {
    if (props.user.isLogged && props.agenda.event.length == 0) {
      getAllEvent(props.user.subuser[props.user.current_subuser].id).then(
        (res) => {
          props.loadEvent(res.result);
        }
      );
    }
  }, [props.user]);

  useEffect(() => {
    let newData = [];
    props.agenda.event.map((item) => {
      let newItem = {
        id: item.id,
        _id: item.id,
        name: item.title,
        startDateTime: new Date(item.date),
        endDateTime: new Date(
          new Date(item.date).setTime(
            new Date(item.date).getTime() + item.duration * 60000
          )
        ),
        classes: item.theme_id,
      };
      newData.push(newItem);
    });
    setItems(newData);
  }, [props.agenda]);
  return (
    <MainContainer>
      <div>
        <div>
          <Title
            onClick={() => {
              setShowHelp(true);
            }}
          >
            {i18n.t(
              "application.QG",
              "Comment fonctionne le quartier général ?"
            )}
          </Title>

          <ThemeButtonContainer>
            {props &&
              props.theme &&
              props.theme.allTheme &&
              props.theme.allTheme.map((item) => {
                return (
                  <Theme backgroundColor={item.color} key={item.id}>
                    <Text>{item.name}</Text>
                  </Theme>
                );
              })}
          </ThemeButtonContainer>
        </div>
        <div
          style={{
            backgroundColor: "red",
            padding: 5,
            borderRadius: 12,
            width: "fit-content",
            right: 10,
            top: 50,
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.preventDefault();
            setRecurrentEventPopUp(true);
            setShowModal(true);
          }}
        >
          <Text style={{ color: "white", margin: "7px" }}>
            {" "}
            {i18n.t("application.Programmer", "Programmer")}
          </Text>
        </div>

        {/* {showHelp && <Help setShowHelp={setShowHelp} />} */}
      </div>
      <div>
        {props.user.subuser && (
          <Text>
            {i18n.t("home.bonjour")}
            {props.user.subuser[props.user.current_subuser].name}
          </Text>
        )}
        <Text
          style={{
            fontSize: "14px",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={() => {
            props.history.push("/change-account");
          }}
        >
          {i18n.t("home.change")}
        </Text>
        <Modal
          show={showModal}
          onHide={() => {
            setEventPopUp(false);
            setEditeventPopUp(false);
            setRecurrentEventPopUp(false);
            setShowModal(false);
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {recurentEventPopUp
                ? i18n.t("component.recurrent")
                : eventPopUp
                ? i18n.t("component.Nouveau rituel")
                : i18n.t("component.Modifier un rituel")}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {eventPopUp && (
              <>
                <AddEvent
                  theme={props.theme}
                  date={selectedDate}
                  user={props.user}
                  setEventPopUp={setEventPopUp}
                  setShowModal={setShowModal}
                  loadEvent={props.loadEvent}
                />
              </>
            )}
            {recurentEventPopUp && (
              <>
                <AddRecurentEvent
                  theme={props.theme}
                  date={selectedDate}
                  user={props.user}
                  setEventPopUp={setRecurrentEventPopUp}
                  setShowModal={setShowModal}
                  loadEvent={props.loadEvent}
                />
              </>
            )}
            {editeventPopUp && (
              <EditEvent
                theme={props.theme}
                date={selectedDate}
                user={props.user}
                setEventPopUp={setEditeventPopUp}
                setShowModal={setShowModal}
                loadEvent={props.loadEvent}
                event={selectedEvent}
              />
            )}
          </Modal.Body>
        </Modal>
        <div style={{ backgroundColor: "white" }}>
          <ReactAgenda
            minDate={now}
            maxDate={new Date(now.getFullYear(), now.getMonth() + 3)}
            disablePrevButton={false}
            startDate={startDate}
            cellHeight={cellHeight}
            locale={locale}
            items={items}
            numberOfDays={numberOfDays}
            rowsPerHour={rowsPerHour}
            itemColors={colors}
            autoScale={false}
            fixedHeader={true}
            onItemEdit={editEvent}
            onCellSelect={addNewEvent}
            onRangeSelection={handleRangeSelection}
            onItemRemove={handleRemoveItem}
          />
        </div>
      </div>
    </MainContainer>
  );
};

const mapDispatchToProps = {
  loadEvent,
};

const mapStateToProps = (store) => {
  return {
    user: store.user,
    agenda: store.agenda,
    theme: store.theme,
    lang: store.lang,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Warroom);
