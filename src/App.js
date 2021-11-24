import React from 'react';
import questionDB from './data'
import Question from './Question';
import { AiFillTwitterCircle,AiFillFacebook,AiOutlineTwitter} from 'react-icons/ai';

function App() {

  return (
    <main>
      <div className='container'>
        <h3>Frequently Asked Question <br /> <AiFillTwitterCircle /> <AiFillFacebook /> <AiOutlineTwitter /></h3>
        
        <section className='info'>
            {
              questionDB.map(question =>{
                return <Question {...question} key={question.id} />
              })
            }   
        </section>
      </div>
    </main>
  );
}

export default App;
