export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <img
        id="wd-teslabot"
        src="/images/duck.png"
        height="200px"
        alt="A robot duck from Deltarune"
      />
      <br />
      <img
        id="wd-ai-image"
        width="200px"
        alt="NASA image of a celestial object"
        src="https://images-assets.nasa.gov/image/PIA12235/PIA12235~orig.jpg"
      />
    </div>
  );
}