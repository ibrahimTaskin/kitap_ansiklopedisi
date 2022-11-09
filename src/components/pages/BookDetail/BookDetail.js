import React from "react";
import { useParams } from "react-router-dom";

export const ProjectDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <div className="container section book-detail">
        <div className="card z-depth">
          <div className="card-content">
            <span className="card-title">Book Detail Title-{id} </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              non cupiditate hic eligendi tempora quis odit autem perferendis
              recusandae! Exercitationem dolores animi ea hic alias voluptates
              corporis optio, quaerat incidunt. Unde facere dolores ex, amet
              beatae cupiditate labore fuga voluptate odio iste consectetur,
              quasi placeat. Fuga veritatis ullam minima, accusantium officiis
              dolorum dolorem, aspernatur repellat veniam, nisi ea? Quidem,
              laborum.
            </p>
          </div>
          <div className="card-action teal accent-2 white-text">
            <div>Author</div>
            <div>Date</div>
          </div>
        </div>
      </div>
    </div>
  );
};
