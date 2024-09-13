import React from "react";
import { useSelector } from "react-redux";
import { DiCodeigniter } from "react-icons/di";
import { AiOutlinePlus } from "react-icons/ai";
import "./KanbanView.css";
import TaskCard from "../TaskCard/TaskCard";

const KanbanView = () => {
  const { selectedData, user } = useSelector(state => state.SelectDataReducer);

  return (
    selectedData && (
      <div className="dashContainer" style={{ justifyContent: "space-evenly" }}>
        {selectedData.map((elem, index) => (
          <div key={index} className="dashCardContainer">
            <div className="dashCardHeading flex-sb">
              <div className="leftView">
                {!user ? (
                  <DiCodeigniter />
                ) : (
                  <div
                    className="imageContainer relative"
                    style={{ width: "15px", height: "15px", display: 'inline-block' }}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                      }}
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                      alt="profile"
                    />
                  </div>
                )}
                {Object.values(elem)[0].title}
              </div>
              <AiOutlinePlus />
            </div>
            <div className="dashCardContent">
              {Object.values(elem)[0].value.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default KanbanView;
