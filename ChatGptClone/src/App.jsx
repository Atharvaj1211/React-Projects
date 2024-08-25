
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import gptImgLogo from './assets/chatgptLogo.svg';
import userIcon from './assets/user-icon.png';


import './App.css'

function App() {
 
  return (
    <>
        <div className="app">
          <div className="sidebar">
              <div className="upperside">
                  <div className="upperSideTop"><img src={gptLogo} alt="logo" className='logo'/><span className='Brand'>YourGPT</span></div>
                  <button className="midBtn"><img src={addBtn} alt="addBtn" className='addBtn' />New Chat</button>
                  
              <div className="upperSideBottom">
                <button className="query"><img src={msgIcon} alt="img" />What is Programming ?</button>
                <button className="query"><img src={msgIcon} alt="img" />What is ChatGPT ?</button>
              </div>
              </div>
            
          <div className="lowerside">
                <div className="listitem"><img src={home} alt="" className='listitemImg'/>Home</div>
                <div className="listitem"><img src={saved} alt="" className='listitemImg'/>Saved</div>
                <div className="listitem"><img src={rocket} alt="" className='listitemImg'/>Upgrade to Pro</div>
          </div>
          
        </div>
         
          <div className="main">
              <div className="chats">
                                <div className="chat">
                                <img src={userIcon} className='chatImg' alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis necessitatibus voluptates officia magni totam, vitae nemo at tempora hic ipsum voluptatum similique vel inventore quia voluptatibus eveniet debitis! Odio temporibus non recusandae doloribus itaque consequatur dolorum rerum laudantium, libero quod impedit iste, tempora et rem accusantium aliquam blanditiis obcaecati expedita!</p>
                                </div>
                  <div className="chat bot">
                  <img src={gptImgLogo} className='chatImg' alt="" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, deleniti harum sint, iure nihil repellendus soluta ea fugit amet possimus a recusandae odio accusamus officia expedita quaerat, neque laborum eos? Perspiciatis ullam facilis similique excepturi reiciendis voluptatibus, esse ad deleniti et dolorum, veritatis quibusdam, eius suscipit voluptatum asperiores expedita praesentium possimus? Blanditiis itaque neque minus consequuntur voluptates possimus amet nobis, velit beatae facilis. Praesentium ullam deleniti consequuntur magni porro ratione possimus veritatis magnam voluptatibus laborum quidem error minus dolore, odio sapiente quis! Eaque odit dignissimos iusto! Soluta eum, ipsa praesentium totam qui facere aut sunt, beatae, ullam magni delectus nulla.</p>
                  </div>
            </div>
            <div className="chatFooter">
                <div className="inp">
                  <input type="text" placeholder='Send a message'/><button className="send"><img src={sendBtn} alt="send" /></button>
                </div>
                <p>This GPT may produce inacurate information about people, or facts.</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default App