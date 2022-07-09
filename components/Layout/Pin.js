import React from "react";

export default function Pin(props) {
    const randNum = Math.ceil(Math.random()*100)
    const width =  220
    const ratio = Math.random()
    const height =  Math.ceil(ratio*300) + 200
    const grid = Math.ceil(ratio*20) + 25
     const img_url = `https://picsum.photos/${width}/${height}?random=${randNum}`
  return (
    <div
      style={{
        ...styles.pin,
        gridRowEnd: `span ${grid}`,
        backgroundImage: `url("${img_url}")`,
        backgroundSize: "cover"
      }}
    >

    </div>
  );
}

const styles = {
  pin: {
    margin: "15px 10px",
    padding: 0,
    borderRadius: "16px",
    backgroundColor: "red",
  }
};
