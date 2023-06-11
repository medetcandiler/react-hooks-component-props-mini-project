import React, { useState } from "react";

function Article({ title, preview, date = "January 1, 1970", minute }) {
  // const [time, setTime ] = useState(0);
  console.log(minute);

  const decideCoffeAmount = () => {
    let neededCoffe;
    let emojiesArr = [];
    if (minute < 30) {
      neededCoffe = Math.ceil(minute / 5);
      for (let i = 0; i < neededCoffe; i++) {
        emojiesArr.push("☕️");
      }
      return emojiesArr;
    } else if (minute > 30) {
      neededCoffe = Math.ceil(minute / 10);
      for (let i = 0; i < neededCoffe; i++) {
        emojiesArr.push("🍱");
      }
      return emojiesArr;
    }
    return emojiesArr;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} 
      </small>
      <small>• {decideCoffeAmount()}</small>
      <small style={{marginLeft:'5px'}}>{minute} min read</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
