import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import createNote from "./Note";
import notes from "../notes";





function App() {
    return (
    <div>
        <Header />
        {notes.map(createNote)}
        <Footer />
    </div>
    );
}

export default App;