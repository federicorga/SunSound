import './CardStar.css'

function CardStar({text="texto"}) {
  return (
    <div className="property-1-variant-2">
    <div className="group-1">
      <div className="ellipse-1" />
      <div className="ellipse-9" />
      <div className="ellipse-3" />
      <div className="ellipse-10" />
      <div className="ellipse-6" />
      <div className="ellipse-11" />
      <div className="ellipse-17" />
      <div className="ellipse-21" />
      <div className="ellipse-2" />
      <div className="ellipse-12" />
      <div className="ellipse-7" />
      <div className="ellipse-13" />
      <div className="ellipse-19" />
      <div className="ellipse-22" />
      <div className="ellipse-8" />
      <div className="ellipse-14" />
      <div className="ellipse-20" />
      <div className="ellipse-23" />
    </div>
    <img className="rectangle-4 " src="/rectangle-4@2x.png" />
    <div className="escucha">{text}</div>
  </div>
  
  );
}

export default CardStar;
