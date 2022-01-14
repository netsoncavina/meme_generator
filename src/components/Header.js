import trollFace from "../images/troll-face.png";

export default function Header() {
  return (
    <header className="header">
      {/* <div className="header--logo"> */}
      <img className="header--logo" src={trollFace} alt="troll face" />
      <h2 className="header--title">Meme generator</h2>
      {/* </div> */}
      <h4 className="header--h5">React Course - Project 3</h4>
    </header>
  );
}
