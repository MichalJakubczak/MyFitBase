import React, { useState } from 'react'; 
import Wrapper from '../assets/wrappers/DashboardFormPage';
import '../assets/css/BMI.css';
  
function BMI() { 
    const [heightValue, setHeightValue] = useState(''); 
    const [weightValue, setWeightValue] = useState(''); 
    const [bmiValue, setBmiValue] = useState(''); 
    const [bmiMessage, setBmiMessage] = useState(''); 
  
    const calculateBmi = () => { 
        if (heightValue && weightValue) { 
            const heightInMeters = heightValue / 100; 
            const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2); 
            setBmiValue(bmi); 
  
            let message = ''; 
            if (bmi < 18.5) { 
                message = 'Masz niedowagę'; 
            } else if (bmi >= 18.5 && bmi < 25) { 
                message = 'Twoja waga jest w normie'; 
            } else if (bmi >= 25 && bmi < 30) { 
                message = 'Masz nadwagę'; 
            } else { 
                message = 'Jesteś otyły'; 
            } 
            setBmiMessage(message); 
        } else { 
            setBmiValue(''); 
            setBmiMessage(''); 
        } 
    }; 
  
    return <Wrapper> 
        <div className="container"> 
            <div className="input-container"> 
                <label htmlFor="height">Podaj swój wzrost (cm):</label> 
                <input 
                    type="number"
                    id="height"
                    value={heightValue} 
                    onChange={(e) => setHeightValue(e.target.value)} 
                /> 
            </div> 
            <div className="input-container"> 
                <label htmlFor="weight">Podaj swoją wagę (kg):</label> 
                <input 
                    type="number"
                    id="weight"
                    value={weightValue} 
                    onChange={(e) => setWeightValue(e.target.value)} 
                /> 
            </div> 
            <button className="calculate-btn" onClick={calculateBmi}> 
                Oblicz BMI 
            </button> 
            {bmiValue && bmiMessage && ( 
                <div className="result"> 
                    <p> 
                        Twoje BMI: <span className="bmi-value">{bmiValue}</span> 
                    </p> 
                    <p> 
                        Wynik: <span className="bmi-message">{bmiMessage}</span> 
                    </p> 
                </div> 
            )} 
        </div> 
     
    </Wrapper>
} 
  
export default BMI;