import React from 'react'

export const introDuctionData = {
  introPara:
    "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero’s De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:",
};


export default function ParagraphBox(props) {
    const {introPara} = props;
  return (
    <div className="container primary-ff para_wrap">
      <div className="introduction_paragraph">
        <p>{introPara}</p>
      </div>
    </div>
  );
}
