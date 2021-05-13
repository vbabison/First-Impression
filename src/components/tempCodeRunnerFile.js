import React from 'react';
import "./Survey.css";


function Survey() {
  return (
    <div>
      <div>
        <body>
          <div class="rate">
            <input type="radio" id="star5" name="rate" value="5" />
            <label for="star5" title="text">5 stars</label>
            <input type="radio" id="star4" name="rate" value="4" />
            <label for="star4" title="text">4 stars</label>
            <input type="radio" id="star3" name="rate" value="3" />
            <label for="star3" title="text">3 stars</label>
            <input type="radio" id="star2" name="rate" value="2" />
            <label for="star2" title="text">2 stars</label>
            <input type="radio" id="star1" name="rate" value="1" />
            <label for="star1" title="text">1 star</label>
          </div>
        </body>
      </div>
      <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Feedback"></textarea>
      <button>Skip</button>
      <button>Add friend</button>
    </div>
  )
}

export default Survey;