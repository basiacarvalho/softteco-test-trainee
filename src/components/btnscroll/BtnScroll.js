import './BtnScroll.css';
import IconScroll  from '../iconscroll/IconScroll';

function BtnScroll() {
  return (
    <a className="scroll-to-top hidden" href="#top">
      <IconScroll/>
    </a>
  );
}

export default BtnScroll;
