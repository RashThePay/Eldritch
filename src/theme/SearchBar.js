import Link from '@docusaurus/Link';
import index from '../../searchindex.json'
import { useState } from 'react';
import { Redirect } from '@docusaurus/router';
import { Search } from '../components/Logo/UI';

export function Hit({ hit }) {
  if (!index.length) {
    return <Redirect to='/scraper' />
  }
  var title = hit.title;
  if (title != hit.parent) {
    title += "، " + hit.parent;
    return (
      <li tabIndex={0} key={hit.url}>
        <Link href={hit.url} target="_self">
          <small>{title}</small> <br/>
          <strong>{hit.heading}</strong>
        </Link>
      </li>
    );
  } else if (hit.heading != hit.parent) {
    return (
      <li tabIndex={0} key={hit.url}>
        <Link href={hit.url} target="_self">
          <small>{title}</small> <br/>
          <strong>{hit.heading}</strong>
        </Link>
      </li>
    )
  } else {
    return (
      <li tabIndex={0} key={hit.url}>
        <Link href={hit.url} target="_self">
          <strong>{title}</strong>
        </Link>
      </li>
    );
  }
}

export default function App() {
  const [hits, setHits] = useState([])
  const [focus, setFocus] = useState(0)
  const [query, setQuery] = useState('')
  function score(record) {
    var a = matches(record.title, query) * 8;
    var b = matches(record.heading, query) * 4;
    var c = matches(record.content, query) * 2;
    var d = matches(record.url, query) * 1;
    if (record.heading.trim() == query.trim()) return 100
    return a + b + c + d
  }
  function matches(text) {
    var score = 0;
    for (const bit of query.split(' ')) {
      if (text.includes(bit)) {
        score++
      }
    }
    return score;
  }
  function search(q) {
    setQuery(q)
    if (!q.length) return;
    var hits = index.filter((record) => matches(JSON.stringify(record)))
    hits.sort((a, b) => {
      return (score(b) - score(a))
    })
    hits = hits.splice(0, 5)
    setHits(hits);
  }
  async function navigate(e) {
    if ((e.key == 'ArrowDown')) {
      e.preventDefault();
      if (focus < hits.length) setFocus(focus + 1);
      if (focus <= (hits.length - 1)) e.target.closest('.searchbox').getElementsByTagName('li')[focus].getElementsByTagName('a')[0].focus()
    } else if ((e.key == 'ArrowUp')) {
      e.preventDefault();
      if (focus > 0) setFocus(focus - 1);
      if (focus <= (hits.length - 1)) e.target.closest('.searchbox').getElementsByTagName('li')[focus].getElementsByTagName('a')[0].focus()
    }
  return false;

  }
  return (
    <div className='searchbox'
      onKeyDown={e => navigate(e)}>
      <form autoComplete='off'>
        <input name="query"
          placeholder='جستجو'
          defaultValue={query}
          onChange={e => search(e.target.value)}
        >
        </input>
        <span><Search className="maskh search-icon"/></span>
      </form>
      <ul className='hits'>
        {hits.map((hit) => (
          <Hit hit={hit} />
        ))}
      </ul>
    </div>
  );
}
