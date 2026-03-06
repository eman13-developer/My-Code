import GalaxyBackground from "./galaxybg";

function Testingbg() {
  return (
    <div>
      <GalaxyBackground />

      <h1
        style={{
          color: "white",
          position: "absolute",
          top: "40%",
          left: "40%",
        }}
      >
        Galaxy Background
      </h1>
    </div>
  );
}

export default Testingbg;