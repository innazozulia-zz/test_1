import React from "react";
import { Skeleton } from "./Skeleton";
import { User } from "./User";

export const Users = ({
  items,
  isLoading,
  invites,
  searchValue,
  onChangeSearchValue,
  onClickInvite,
  onClickInvites,
}) => {
  console.log(searchValue);
  return (
    <>
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input
          value={searchValue}
          onChange={onChangeSearchValue}
          type="text"
          placeholder="Find User..."
        />
      </div>
      {isLoading ? (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className="users-list">
          {items
            .filter((item) => {
              const fullName = (item.first_name + item.last_name).toLowerCase();
              if (
                fullName.includes(searchValue.toLowerCase()) ||
                item.email.toLowerCase().includes(searchValue.toLowerCase())
              ) {
                return true;
              }
            })
            .map((item) => (
              <User
                key={item.id}
                {...item}
                isInvited={invites.includes(item.id)}
                onClickInvite={onClickInvite}

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
      {invites.length > 0 ? (
        <button className="send-invite-btn" onClick={onClickInvites}>
          Send letter
        </button>
      ) : null}
    </>
  );
};
