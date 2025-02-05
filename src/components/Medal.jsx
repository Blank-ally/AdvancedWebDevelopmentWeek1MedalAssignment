import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Medal(props) {
  
  return (

 <div>
    {props.name} medals :   <button  onClick={() => props.onAdd(props.countryId,props.name)} className="btn btn-primary m-2">+ </button> {props.count} <button  disabled={!props.count> 0} onClick={() => props.onDecrement(props.countryId,props.name)} className="btn btn-primary m-2">- </button>
</div> 


  );

}


