import { wrap, header } from './page.css';

const Stamp = () => {
  return (
    <div className={wrap}>
      <header className={header}>전화번호 뒷자리를 눌러주세요.</header>
    </div>
  );
};

export default Stamp;
