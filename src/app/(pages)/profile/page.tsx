"use client";
import { UserType } from "@/app/models/custom-types";
import React, { useEffect, useState } from "react";

const ProfilePage = () => {
  const [user, setUser] = useState<UserType | null>(null);

  const fetchUserProfile = async () => {
    const response = await fetch(`/api/users?userId=1`);
    if (!response.ok) {
      console.log(" Fetch Response Error");
    }
    if (response.ok) {
      const result = (await response.json()) as UserType;
      setUser(result);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      {user && (
        <div>
          {" "}
          <p>{user.name}</p>
          <p>{user.company.name}</p>
          <p>{user.website}</p>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
