import React from 'react';
import "./User.css";

function User() {
  return (
    <div>
        <img src="./images/peaky.jpeg" class="peaky" />
        <div class="user-profile">
          <h1 class="user-name">Bobby</h1>
          <p class="rating">Rating</p>
          <p class="connected">Connections</p>
          <p class="online">Online</p>
        </div>
        <button class="call-button">Call</button>
    </div>
  )
}

export default User;