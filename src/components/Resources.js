import ModelSlider from "./ModelSlider";
import PaperSlider from "./PaperSlider";
import "./Resources.css";

const Resources = () => (
    <div className="container" style={{display: "flex", flexDirection: "row"}}>
        <div className="models_papers" style={{width: "50%"}}>
            <div>
                <h2 class="models">
                    Models
                </h2>
                <ModelSlider />
            </div>
            <div style={{marginBottom: "15px"}}>
                <h2 class="papers">
                    Paper
                </h2>
                <PaperSlider />
            </div>
        </div>
        <div className="pipelines" style={{textAlign: "left", width: "50%", marginLeft: "20%"}}>
            <div>
                <h2 style={{textAlign: "center", fontSize: "2em", left: "50%"}}>Pipelines</h2>
            </div>
            <div className="piplines" style={{textAlign: "left", backgroundColor: "grey"}}>
                <a href="/" class="waves-effect waves-light btn" style={{width: "200px", display: "block", marginBottom: "30px", backgroundColor: "#003865"}}>Upload Your Data</a>
                <a href="/" class="waves-effect waves-light btn" style={{width: "200px", display: "block", marginBottom: "30px", backgroundColor: "#003865"}}>Select Preprocesing Methods</a>
                <a href="/" class="waves-effect waves-light btn" style={{width: "200px", display: "block", marginBottom: "30px", backgroundColor: "#003865"}}>Select Model</a>
                <a href="/" class="waves-effect waves-light btn" style={{width: "200px", display: "block", marginBottom: "30px", backgroundColor: "#003865"}}>Select Evaluation Methods</a>
                <a href="/" class="waves-effect waves-light btn" style={{width: "200px", display: "block", marginBottom: "30px", backgroundColor: "#003865"}}>View Results</a>
            </div>        
            
        </div>
        <div className="pipelines" style={{width: "50%"}}>

        </div>
    </div>
  );
  
  export default Resources;