export default function Meme() {
  return (
    // make two inputs
    // one for the top text
    // one for the bottom text
    // make a button
    // when the button is clicked,
    // make a new image with the top text and bottom text
    // and display it
    <main>
      <form className="form">
        <input className="form--input" type="text" placeholder="Shut up" />
        <input
          className="form--input"
          type="text"
          placeholder="Take my money"
        />
        <button className="form--button">Get a new meme image 🖼</button>
      </form>
    </main>
  );
}
