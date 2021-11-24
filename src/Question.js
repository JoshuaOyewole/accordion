import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({info,title}) => {
  const [readMore, SetreadMore] = useState(false);

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={()=>{SetreadMore(!readMore)}}>
          {readMore ?  <AiOutlineMinus />: <AiOutlinePlus />}
      
        </button>
      </header>
      {readMore && <p>{info}</p>}
      
    </article>
  );
};
// {AiOutlineMinus} {AiOutlinePlus}
export default Question;
