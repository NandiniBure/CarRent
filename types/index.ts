import {MouseEventHandler} from "react"

export interface CustomButtonProps{
     title:string;
     containerStyles?:string;
     handleClick?:MouseEventHandler<HTMLButtonElement>;
     btnType?:"button" | "submit";
     textStyles?:string;
     rightIcon?:string;
     isDisabled?:boolean;

}



export interface SearchMenufacturerProps{
     Menufacturer:string;
     setMenufacturer:(Menufacturer:string)=> void;
}


export interface CarProps{
     city_mpg:number;
     class:string;
     combination_mpg:number;
     cylinders:number;
     displacement:number;
     drive:string;
     fuel_type:string;
     highway_mpg:number;
     make:string;
     model:string
     transmission:string
     year:number;
}


export interface FilterProps{
     Menufacturer:string;
    year:number;
    fuel:string;
    limit:number;
    model:string
}

export interface OptionsProps{
     title:string;
     value:string;
}

export interface CustomFiltersProps{
     title:string;
     options:OptionsProps[];
}

export interface Showmoreprops{
     pageNumber:number,
     isNext:boolean
   }

   export interface HomeProps {
     searchParams: FilterProps;
   }
   