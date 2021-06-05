import React from "react";
import notes from "./notes";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
function App() {
  return (
    <div>
      <Header />
      <Note title={notes[0].title} content={notes[0].content} />
      <Note title={notes[0].title} content={notes[0].content} />
      <Note title={notes[0].title} content={notes[0].content} />
      <Footer />
    </div>
  );
}

export default App;
