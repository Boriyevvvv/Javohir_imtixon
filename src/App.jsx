import { useState } from 'react';
import './App.css';
import { MdOutlineMenuOpen } from "react-icons/md";
import { RiContactsBookFill } from "react-icons/ri";
function App() {
  const [laguage, setlaguage] = useState("UZ")
  const [kun, setkun] = useState(false)
  return (
    <div className="App">
      <header>


        <li className='Xisobot'>{laguage === "uz" ? "Xisobot" : "Rebot"}</li>
        <li>7.8.2024</li>
        <div className='kun_tun'>
          <button className='btnm' onClick={() => setkun(false)}>kun</button>
          <button className='btnm' onClick={() => setkun(true)}>tun</button>
          <div className={kun === true ? "box" : "row"}>
            <div className='card'>
              <div className='card1'>
                <h3 className='tex'>{laguage === "uz" ? "Jami o'quvchilar soni" : "Total number of students"}</h3>
                <h1 className='number'>255ta</h1>
                <img src="" alt="" />
              </div>
              <div className='card2'>
                <h3 className='tex'>{laguage === "uz" ? " o'quvchilar soni" : " number of students"}</h3>
                <h1 className='number'>10ta</h1>
              </div>
              <div className='card3'>
                <h3 className='tex'>{laguage === "uz" ? "shu oy tark etganlar" : " who left this month"}</h3>
                <h1 className='number'>60ta</h1>
              </div>
              <div className='card4'>
                <h3 className='tex'>{laguage === "uz" ? "Jami guruhlar soni" : "Total number of groups"}</h3>
                <h1 className='number'>26ta</h1>
              </div>
            </div>
          </div>
        </div>
        <div className='laguage'>
          <button className='uz' onClick={() => setlaguage("uz")}>uz</button>
          <button className='uz' onClick={() => setlaguage("eng")}>eng</button>
          <p className='text'>{laguage === "uz" ? "salom" : "hello"}</p>
        </div>

      </header>
      <main>
        <MdOutlineMenuOpen className='icons' />
        <h2 className='ter'>{laguage === "uz" ? "Crem Panel" : "Krem Panel"}</h2>
        <RiContactsBookFill className='icons1' />
        <hr className='hr' />
       <div className='lorem'>
          <p className='p1'>{laguage === "uz" ? "Xisobot" : "Rebot"}</p>
          <p className='p2'>{laguage === "uz" ? "O'quvchilar" : "Students"}</p>
          <p className='p3'>{laguage === "uz" ? "Guruhlar" : "Grops"}</p>
          <p className='p4'>{laguage === "uz" ? "Tulovlar" : "fees"}</p>
          <p className='p5'> {laguage === "uz" ? "Davomat" : "attendance"}</p>
          <p className='p6'>{laguage === "uz" ? "Murojat" : "appeal"}</p>
       </div>
      </main>

    </div>
  );
}

export default App;
