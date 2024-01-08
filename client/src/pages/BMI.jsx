import React, { useState } from 'react'; 
import Wrapper from '../assets/wrappers/DashboardFormPage';
import '../assets/css/BMI.css';


function BMI() { 
    const [heightValue, setHeightValue] = useState(''); 
    const [weightValue, setWeightValue] = useState(''); 
    const [ageValue, setAgeValue] = useState('');
    const [gender, setGender] = useState(''); 
    const [cpm, setcpm] = useState(''); 
    const [bmiValue, setBmiValue] = useState(''); 
    const [bmrValue, setBmrValue] = useState('');
    const [bmrValueLow, setBmrValueLow] = useState('');
    const [bmrValueHigh, setBmrValueHigh] = useState('');

    const [bmiMessage, setBmiMessage] = useState(''); 


    const calculateBmi = () => { 
        let ppm;
        if(cpm == "verylow"){
            ppm = 1.2;
        }else if(cpm == "low"){
            ppm = 1.25;
        }else if(cpm == "average"){
            ppm = 1.75;

        }else if(cpm == "sport"){
            ppm = 2;
        }
        let bmr;
        
        if((gender == "male") && (heightValue && weightValue && ppm )){
             bmr = (66 +(13.7*weightValue)+(5*heightValue)-(6.8*ageValue)).toFixed(0);
             bmr = bmr*ppm;
        }else if((gender == "female") && (heightValue && weightValue )){
             bmr = (655 +(9.6*weightValue)+(1.8*heightValue)-(4.7*ageValue)).toFixed(0);
             bmr = bmr*ppm;

        }
        if(bmr){
            setBmrValue(Math.round((bmr)));
            setBmrValueLow(Math.round((bmr-(bmr*0.15))));
            setBmrValueHigh(Math.round((bmr+(bmr*0.15))));

        }
            
        if (heightValue && weightValue && gender) { 
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
            } else if(bmi >= 30 && gender == "male"){ 
                message = 'Jesteś otyły'; 
            } else if(bmi >= 30 && gender == "female"){ 
                message = 'Jesteś otyła'; 
            } 
            setBmiMessage(message); 
        } else { 
            setBmiValue(''); 
            setBmiMessage(''); 
        } 

        
    }; 

    

       

    return <Wrapper> 
        <div>
                <label htmlFor="gender">Płeć:</label>
                <select 
                    id="gender" 
                    value={gender} 
                    onChange={(e) => setGender(e.target.value)}
                >
                    <option value="">Wybierz płeć</option>
                    <option value="male">Mężczyzna</option>
                    <option value="female">Kobieta</option>
                </select>
            </div>

            <div>
                <label htmlFor="cpm">Współczynnik aktywności fizycznej:</label>
                <select 
                    id="cpm" 
                    value={cpm} 
                    onChange={(e) => setcpm(e.target.value)}
                >
                    <option value="verylow">siedzący tryb życia</option>
                    <option value="low">niska aktywność</option>
                    <option value="average">aktywny tryb życia</option>
                    <option value="sport">sportowiec</option>
                </select>
            </div>
            
        
           
        
            
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

            <div className="input-container"> 
                <label htmlFor="age">Podaj swój wiek:</label> 
                <input 
                    type="number"
                    id="age"
                    value={ageValue} 
                    onChange={(e) => setAgeValue(e.target.value)} 
                /> 
            </div> 
            <button className="calculate-btn" onClick={calculateBmi}> 
                Oblicz BMI i BMR
            </button> 
            {bmiValue && bmiMessage && gender && ( 
                <div className="result"> 
                    <p> 
                        Twoje BMI: <span className="bmi-value">{bmiValue}</span> 
                    </p> 
                    <p> 
                        Wynik: <span className="bmi-message">{bmiMessage}</span> 
                    </p> 
                    <p> 
                        Twoje zapotrzebowanie kaloryczne, aby utrzymać wagę to: <span className="bmr-value">{bmrValue} kcal</span> 
                    </p> 
                    <p> 
                        Twoje zapotrzebowanie kaloryczne, aby zmiejszyć wagę to: <span className="bmr-value">{bmrValueLow} kcal</span> 
                    </p> 
                    <p> 
                        Twoje zapotrzebowanie kaloryczne, aby zwiększyć wagę to: <span className="bmr-value">{bmrValueHigh} kcal</span> 
                    </p> 
                </div> 
            )} 
        </div> 
     
    </Wrapper>

            };
export default BMI;