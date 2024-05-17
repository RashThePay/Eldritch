import React from 'react';
import MDXContent from '@theme-original/MDXContent';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import dictionary from "../../../dictionary.json";

export default function MDXContentWrapper(props) {
  function dict(dictionary, content) {
    const patterns = [];
    for (const key in dictionary) {
      patterns.push(`(${key})`);
      patterns.push(`(${key.replace(' ','‌های ')})`);
      patterns.push(`(${key.replace(' ','ی ')})`);
      patterns.push(`(${key.replace('‌','')})`);
    }
    const regex = new RegExp(patterns.join('|'), 'gi');
    return content.replace(regex, (match) => {
      const key = match.replace('‌ی ', ' ').replace('‌های ', ' ');
      return (`<tag name="${dictionary[key]}">${match}</tag>`)
    }
    );
  }
  function dice(content){
    const regex = new RegExp("([۰-۹]+)*\s?تاس([۰-۹]+)( ?[\-\+] ?[۰-۹]+)+?", 'g');
    return content.replace(regex, (match) => {
      const re = /[۰۱۲۳۴۵۶۷۸۹]/g;
    const to = "0123456789";

    function replacer(chr) {
        return to.charAt(re.source.indexOf(chr) - 1);
    }

    return `<dice name='${match.replace(re, replacer).replace('تاس','d')}'>${match}</dice>`;
    })
  }
  if (ExecutionEnvironment.canUseDOM) {
    function func() {
      var html = document.querySelector('.markdown').innerHTML;
      html = dict(dictionary, html);
      html = dice(html);
      document.querySelector('.markdown').innerHTML = html;
      document.querySelectorAll('dice').forEach((element) => element.addEventListener('click',()=>alert(2)))
    }
    return (
      <>
        <script>
          {document.querySelector('article') && func()}
        </script>
        <MDXContent {...props} />
      </>
    );
  }
  else return <MDXContent {...props} />

}
