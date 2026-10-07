import { useState } from "react";
import UserInfo from ".../UserInfo/UserInfo";

export default function UserCard() {
  const [name, setName] = useState("Mohamed");

  return (
    <div>
      <UserInfo name={name} job="Frontend Developer" />

      <button onClick={() => setName("Mojahid")}>Change Name</button>
    </div>
  );
}
