import {carService} from "../../services";

const Car = ({car, setCarForUpdate}) => {
    const deleteCar = async ()=>{
        await carService.deleteById(id)
    }
    const {id, model, price, year}= car
    return (
        <div>
                <div>id: {id}</div>
                <div>model:{model}</div>
                <div>price: {price}</div>
                <div>year: {year}</div>
                <br/>
                <button onClick={()=>deleteCar()}>delete</button>
                <button onClick={()=>setCarForUpdate(car)}>update</button>
        </div>
    );
};

export  {Car};