import React from "react";
import { Skeleton } from "./Skeleton";
import { User } from "./User";

export const Users = ({ items, isLoading }) => {
  return (
    <>
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input type="text" placeholder="Find User..." />
      </div>
      {isLoading ? (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className="users-list">
          {items.map((item) => (
            <User
              key={item.id}
              {...item}

              // different record all component
              // id={item.id}
              // first_name={item.first_name}
              // last_name={item.last_name}
              // email={item.email}
              // avatar={item.avatar}
            />
          ))}
        </ul>
      )}
      <button className="send-invite-btn">Send letter</button>
    </>
  );
};
