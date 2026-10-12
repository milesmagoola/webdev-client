export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
      </div>
      <div id="wd-ai-dimension" className="wd-ai-dimension">
        This is a long sentence that is much longer than the declared 120px by
        60px box, so the fixed size is obvious because the text overflows it.
      </div>
      <div className="wd-dimension-portrait wd-bg-color-yellow">short</div>
      <div className="wd-dimension-portrait wd-bg-color-yellow">long long long long long long long 
        long long long long long long long 
        long long long long long long long 
        long long long long long long long
        long long long long long long long 
        long long long long long long long!!!
      </div>
    </div>
  );
}