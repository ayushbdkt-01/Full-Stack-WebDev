import { use, useState } from "react";

export default function LikeButton() {
    let [isLiked, setIsLiked]=useState(false);
    let [count, setCount]=useState(0);
    console.log("Component re-rendered");
    console.log("isLiked", isLiked);
    let toggleLike = () => {
        setIsLiked(!isLiked);
        setCount(count+1);
    }

  return (
    <div>
        <p onClick={toggleLike}>
            {isLiked ? "Clicked" : "Unclicked"}
            <br />
            Count={count};
        </p>
    </div>
  );
}