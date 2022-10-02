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
            <p>Pipelines</p>
            <div className="piplines" style={{backgroundColor: "grey"}}>
                <a class="waves-effect waves-light btn" style={{left: "30%", width: "40%", display: "block", marginBottom: "10px", backgroundColor: "#003865"}}>Upload Your Data</a>
                <a class="waves-effect waves-light btn" style={{left: "30%", width: "40%", display: "block", marginBottom: "10px", backgroundColor: "#003865"}}>Select Preprocesing Methods</a>
                <a class="waves-effect waves-light btn" style={{left: "30%", width: "40%", display: "block", marginBottom: "10px", backgroundColor: "#003865"}}>Select Model</a>
                <a class="waves-effect waves-light btn" style={{left: "30%", width: "40%", display: "block", marginBottom: "10px", backgroundColor: "#003865"}}>Select Evaluation Methods</a>
                <a class="waves-effect waves-light btn" style={{left: "30%", width: "40%", display: "block", marginBottom: "10px", backgroundColor: "#003865"}}>View Results</a>
            </div>        
            
        </div>
        <div className="pipelines" style={{width: "50%"}}>

        </div>
    </div>
  );
  
  export default Resources;