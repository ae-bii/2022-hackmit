import ModelSlider from "./ModelSlider";

const Resources = () => (
    <div className="container" style={{display: "flex", flexDirection: "row"}}>
        <div className="models_papers" style={{width: "50%"}}>
            <ModelSlider />
        </div>
        <div className="pipelines" style={{width: "50%"}}>

        </div>
    </div>
  );
  
  export default Resources;