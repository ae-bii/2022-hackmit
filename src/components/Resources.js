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
                <h2 style={{textAlign: "center", fontSize: "2em", left: "50%", marginBottom: "50px"}}>Pipelines</h2>
            </div>
            <div className="piplines" style={{textAlign: "left", backgroundColor: "grey"}}>
                <a href="/" class="waves-effect waves-light btn" style={{width: "220px", display: "block", marginBottom: "30px", backgroundColor: "#003865", fontSize: "1.2rem", height: "50px", textAlign: "center"}}>
                    <p style={{marginBottom: "0", marginTop: "7px"}}>Upload Your Data</p>
                </a>
                <a href="/" class="waves-effect waves-light btn" style={{width: "220px", display: "block", marginBottom: "30px", backgroundColor: "#003865", fontSize: "1.2rem", height: "50px", textAlign: "center"}}>
                    <p style={{marginBottom: "0", marginTop: "7px"}}>Select Preprocessing Methods</p>
                </a>
                <a href="/" class="waves-effect waves-light btn" style={{width: "220px", display: "block", marginBottom: "30px", backgroundColor: "#003865", fontSize: "1.2rem", height: "50px", textAlign: "center"}}>
                    <p style={{marginBottom: "0", marginTop: "7px"}}>Select Model</p>
                </a>
                <a href="/" class="waves-effect waves-light btn" style={{width: "220px", display: "block", marginBottom: "30px", backgroundColor: "#003865", fontSize: "1.2rem", height: "50px", textAlign: "center"}}>
                    <p style={{marginBottom: "0", marginTop: "7px"}}>Select Evaluation Methods</p>
                </a>
                <a href="/" class="waves-effect waves-light btn" style={{width: "220px", display: "block", marginBottom: "30px", backgroundColor: "#003865", fontSize: "1.2rem", height: "50px", textAlign: "center"}}>
                    <p style={{marginBottom: "0", marginTop: "7px"}}>View Results</p>
                </a>
            </div>        
            
        </div>
        <div className="pipelines" style={{width: "50%"}}>

        </div>
    </div>
  );
  
  export default Resources;