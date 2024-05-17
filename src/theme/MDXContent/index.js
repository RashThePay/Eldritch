import React from 'react';
import MDXContent from '@theme-original/MDXContent';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import dictionary from "../../../dictionary.json";

export default function MDXContentWrapper(props) {
  function dice(content) {
    const regex = new RegExp("([۰-۹]+)*\s?تاس([۰-۹]+)( ?[\-\+] ?[۰-۹]+)+?", 'g');
    return content.replace(regex, (match) => {
      const re = /[۰۱۲۳۴۵۶۷۸۹]/g;
      const to = "0123456789";

      function replacer(chr) {
        return to.charAt(re.source.indexOf(chr) - 1);
      }

      return `<dice name='${match.replace(re, replacer).replace('تاس', 'd')}'>${match}</dice>`;
    })
  }
  if (ExecutionEnvironment.canUseDOM) {
    function func() {
      if (document.querySelector('tag')) return false;
      for (const a of document.querySelector('.markdown').querySelectorAll('a')) {
        a.outerHTML = `<tag name=${a.title}>${a.innerText}</tag>`;
      }
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
