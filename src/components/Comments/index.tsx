import { createRef, useEffect } from 'react';

export default function Comments(): JSX.Element {
  const commentBox = createRef<HTMLDivElement>();
  // const utteranceTheme = theme.dark ? 'github-dark' : 'github-light';
  useEffect(() => {
    const scriptEl = document.createElement('script');
    scriptEl.setAttribute('src', 'https://utteranc.es/client.js');
    scriptEl.setAttribute('crossorigin', 'anonymous');
    scriptEl.setAttribute('async', true);
    scriptEl.setAttribute(
      'repo',
      'fernandomarca/ignite-template-reactjs-criando-um-projeto-do-zero'
    );
    scriptEl.setAttribute('issue-term', 'pathname');
    scriptEl.setAttribute('theme', 'github-dark');
    commentBox.current.appendChild(scriptEl);
  }, [commentBox]);
  return (
    <div className="comment-box-wrapper container pt-7">
      <div ref={commentBox} className="comment-box" />
      {/* Above element is where the comments are injected */}
    </div>
  );
}
