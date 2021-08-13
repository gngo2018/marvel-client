import homeCss from '../styles/Home.module.css'

export default function Home(){
  return(
    <div className={homeCss.home_container}>
      <div className={homeCss.home_title}>Home Page!</div>
    </div>
  );
}
