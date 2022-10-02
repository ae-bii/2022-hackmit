import ModelSlider from "./ModelSlider";
import PaperSlider from "./PaperSlider";

const Resources = () => (
    <div className="container" style={{display: "flex", flexDirection: "row"}}>
        <div className="models_papers" style={{width: "50%"}}>
            <div>
                <h2>
                    Models
                </h2>
                <ModelSlider />
            </div>
            <div>
            <h2>
                Paper
                </h2>
                <PaperSlider />
            </div>
            
        </div>
        <div className="pipelines" style={{width: "50%"}}>

        </div>
    </div>
  );
  
  export default Resources;