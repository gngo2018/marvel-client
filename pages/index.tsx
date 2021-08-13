import homeCss from '../styles/Home.module.css'
import utilsCss from '../styles/utils.module.css'

export default function Home() {
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
          <div>
            <div className={homeCss.featured_header}>Featured Hero</div>
            <div className={homeCss.featured_card}>Hero 1</div>
          </div>
          <div>
            <div className={homeCss.featured_header}>Featured Series</div>
            <div className={homeCss.featured_card}>Series 1</div>
          </div>
          <div>
            <div className={homeCss.featured_header}>Featured Event</div>
            <div className={homeCss.featured_card}>Event 1</div>
          </div>
        </div>
      </div>
    </>
  );
}
