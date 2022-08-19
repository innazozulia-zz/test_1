import React from "react";
import "./index.scss";
import { Success } from "./components/Success";
import { Users } from "./components/Users";

function App() {
  const [users, setUsers] = React.useState([]);
  const [invites, setInvites] = React.useState([]);
  const [success, setSuccess] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
        console.log(json.data);
      })
      .catch((err) => {
        alert("Error!");
      })
      .finally(() => setIsLoading(false));
  }, []);

  //search Value on Change

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };
  // check users in invite []
  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };
  // send invite
  const onClickInvites = () => {
    setSuccess(true);
  };
  return (
    <div className="app">
      {success ? (
        <Success count={invites.length} />
      ) : (
        <Users
          items={users}
          isLoading={isLoading}
          invites={invites}
          searchValue={searchValue}
          onChangeSearchValue={onChangeSearchValue}
          onClickInvite={onClickInvite}
          onClickInvites={onClickInvites}
        />
      )}
    </div>
  );
}

export default App;
