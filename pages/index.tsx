import * as MarvelService from '../services/MarvelService'
import homeCss from '../styles/Home.module.css'
import utilsCss from '../styles/utils.module.css'

export default function Home() {
  const data = MarvelService.IronManData();

  function retrieveMarvelUrl() {
    const res = MarvelService.GetMarvelHeroByName("test");

    console.log(res);
  }

  return (
    <>
      <div className={homeCss.home_background_image}></div>
      <div className={utilsCss.app_body}>
        <div className={homeCss.home_title}>Home Page!</div>
        <div className={homeCss.about_app_blob}>
          <div>Getting Started</div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi molestias quo distinctio, eaque voluptatum, laboriosam laborum, cupiditate nesciunt sunt illo libero? Reiciendis, natus? Delectus, voluptatum!</p>
        </div>
        <div className={homeCss.featured_container}>
          <div className={homeCss.featured_item}>
            <div className={homeCss.featured_header}>Featured Hero:</div>
            <i>{data.data.results[0].name}</i>
            <div className={homeCss.featured_card}>
              <img src={`${data.data.results[0].thumbnail.path}.${data.data.results[0].thumbnail.extension}`} />
            </div>
          </div>
          <div className={homeCss.featured_item}>
            <div className={homeCss.featured_header}>Featured Comic: </div>
            <i>{data.data.results[0].comics.items[0].name}</i>
            <div className={homeCss.featured_card}>Comic 1</div>
          </div>
          <div className={homeCss.featured_item}>
            <div className={homeCss.featured_header}>Featured Series:</div>
            <i>{data.data.results[0].series.items[0].name}</i>
            <div className={homeCss.featured_card}>Series 1</div>
          </div>
          <div className={homeCss.featured_item}>
            <div className={homeCss.featured_header}>Featured Event:</div>
            <i>{data.data.results[0].events.items[0].name}</i>
            <div className={homeCss.featured_card}>Event 1</div>
          </div>
        </div>
        <button onClick={() => retrieveMarvelUrl()}>Gumdrop</button>
      </div>
    </>
  );
}
