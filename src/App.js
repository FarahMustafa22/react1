import logo from './logo.svg';
import './App.css';
import './Car';
import Car from './Car';
import image1 from './Hyundai_Ioniq_6.jpg'
import image2 from './Range_Rover_Evoque_R-Dynamic_.jpg'
import image3 from './Mercedes-Benz.jpg'
import image4 from './OIP.jpeg'
/* render()
{           
  always updates function
}
*/
function App() { //always update --> return --<html content
  return (
    <div className="container">
    <div className='container1'>
      <Car image={image1} brand="Hyundai" color="White"  desc="The Hyundai Ioniq 6 is a battery electric mid-size fastback sedan produced by Hyundai Motor Company. It is the second vehicle marketed under the electric car-focused Ioniq sub-brand, and the fourth model developed on the Hyundai Electric Global Modular Platform (E-GMP). The vehicle was first sold in South Korea in late 2022, with deliveries in the United States beginning in March 2023."/> 
      <Car image={image2} brand="Land Rover" color="White"  desc="The Land Rover Range Rover Evoque, also known as the Range Rover Evoque, is a subcompact luxury crossover SUV developed and produced by Jaguar Land Rover under their Land Rover marque. The original Evoque was a development of the Land Rover LRX concept vehicle, which was unveiled at the North American International Auto Show in January 2008."/> 
    </div>
    <div className='container2'>
    <Car image={image3} brand="Mercedes" color="Silver"  desc="The Mercedes-Benz G-Class, colloquially known as the G-Wagen(as an abbreviation of Geländewagen) is a four-wheel drive automobile manufactured by Magna Steyr (formerly Steyr-Daimler-Puch) in Austria and sold by Mercedes-Benz. Originally developed as a military off-roader, later more luxurious models were added to the line. In certain markets, it was sold under the Puch name as Puch G until 2000."/> 
    <Car image={image4} brand="Mercedes" color="Black"  desc="The Mercedes-Benz CLA class is a series of luxury compact executive cars manufactured by Mercedes-Benz since 2013. The first generation was a four-door sedan based on the platform of the W176 A-Class and W246 B-Class compact cars, marketed as a four-door coupé.In 2015, Mercedes-Benz expanded the CLA family to include the Shooting Brake, a station wagon configuration."/> 
      
    </div>  
    </div>
  );
}

export default App;
