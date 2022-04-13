import {useForm} from "react-hook-form";
//import {useState} from "react";

import {carService} from "../../services";
import {joiResolver} from '@hookform/resolvers/joi'
import {carValidator} from "../../validators";
import {useEffect} from "react";

const CarForm = ({setNewCar,carForUpdate}) => {
    const {register, reset, handleSubmit, formState:{errors}, setValue} = useForm({resolver:joiResolver(carValidator),mode:'onTouched'});
   // const [formError, setFormError] = useState({});

    useEffect(()=>{

    },[carForUpdate])
        if(carForUpdate){
            const {model, price, year} = carForUpdate;
            setValue('model',model)
            setValue('price',price)
            setValue('year',year)
        }
    const submit= async (car)=>{
        try {
            const {data} = await carService.create(car);
            setNewCar(data)
            reset()
        }catch (e){
           //setFormError(e.response.data);
        }

    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label> model: <input type="text" {...register('model')}/></label></div>
            {errors.model && <span>{errors.model.message}</span>}
            {/*{formError.model && <span>{formError.model[0]}</span>}*/}
            <div><label>Price: <input type="text"{...register('price', {valueAsNumber:true})}/></label></div>
            {errors.price && <span>{errors.price.message}</span>}
            {/*{formError.price && <span>{formError.price[0]}</span>}*/}
            <div><label>Year: <input type="text"{...register('year', {valueAsNumber:true})}/></label></div>
            {errors.year && <span>{errors.year.message}</span>}
            {/*{formError.year && <span>{formError.year[0]}</span>}*/}
            <button>Add</button>
        </form>
    );
};

export {CarForm}