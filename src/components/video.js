import React from 'react';
import './bulma.module.scss';

export function Video({title, src}) {
  return (
    <div className="box m-2 has-background-black-ter has-text-light container">
        <img className="image block" src={src}/>
      <p className="block">{title}</p>
    </div>
  );
}
