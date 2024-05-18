import React, { useState } from 'react';
import MDXContent from '@theme-original/MDXContent';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import findMatch from "./lingoe.js"
import searchindex from "../../../searchindex.json"
export default function MDXContentWrapper(props) {
  const [jargon, setJargon] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 })
  
  if (ExecutionEnvironment.canUseDOM) {
    function getText(){
      let text = window.getSelection().toString();
      if (text.length > 32) return false;
      return text;
    }
    function jargonMe(e) {
      let text = getText();
      let j = (text) && findMatch(text);
      if (j) {
        setJargon(j);
        setPosition({ x: e.pageX, y: e.pageY })
      } else if (text.includes('تاس')) {
        setJargon(dice(text))
        setPosition({ x: e.pageX, y: e.pageY })
      } else {
        setJargon(false);
        //setPosition({ x: 0, y: 0 })
      }
    }
    function expand(){
    let q = findMatch(getText(), true)
    let index = searchindex.filter((a)=> (a.title.includes(q)))[0]
    window.location = index.url
    }
    return (
      <div onMouseUp={(e) => { jargonMe(e) }}>
        <MDXContent {...props} />
        <span
          style={{ top: (position.y + 15) + "px", left: (position.x - (jargon.length * 5)) + "px", opacity: (jargon ? 1 : 0) }}
          className='jargon'
          onMouseDown={()=>expand()}
          >{jargon}</span>
      </div>

    );
  }
  else return <MDXContent {...props} />

}
function dice(content) {
  const regex = new RegExp("([۰-۹]+)*\s?تاس([۰-۹]+)( ?[\-\+] ?[۰-۹]+)+?", 'g');
  return content.replace(regex, (match) => {
    const re = /[۰۱۲۳۴۵۶۷۸۹]/g;
    const to = "0123456789";

    function replacer(chr) {
      return to.charAt(re.source.indexOf(chr) - 1);
    }

    return match.replace(re, replacer).replace('تاس', 'd');
  })
}