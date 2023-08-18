import Hero from '@/components/Hero'
import Image from 'next/image'
import { CustomFilter } from '@/components'
import SearchBar from '@/components/SearchBar'
import { fetchCars } from '@/utils'
import CarCart from '@/components/CarCart'
import { fuels, yearsOfProduction } from '@/constants'
import { HomeProps } from '@/types'
import {Showmore} from '@/components'
export default async function Home({searchParams}:HomeProps) {
  const allCars=await fetchCars(
   { Menufacturer:searchParams.Menufacturer || "",
    year:searchParams.year || 2022,
    fuel:searchParams.fuel || "",
    limit:searchParams.limit || 10,
    model:searchParams.model || "",}
  )


  const isDataEmpty = !Array.isArray(allCars) || allCars.length <1 || !allCars;

  return (
    <main className="overflow-hidden">
   <Hero/>
   <div className='mt-12 padding-x padding-y max-width'
   id='discover'>
  <div className='home__text-container'>
    <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
    <p>Explore the Cars you might like</p>
  </div>
  <div className='home__filters'>
    <SearchBar/>
    <div className='home__filter-container'>
      <CustomFilter title="fuel" options={fuels}/>
      <CustomFilter title="Year" options={yearsOfProduction}/>
    </div>
  </div>

{
  !isDataEmpty ?  (
   <section>
   <div className='home__cars-wrapper'>
    {allCars?.map((car)=>(
      <CarCart
      car={car}/>
    ))}
   </div>
   
   <Showmore
   pageNumber={(searchParams.limit || 10)/10}

   isNext={(searchParams.limit || 10) > allCars.length}
   />

 </section>) :(
  <div className='home_error-container'>
    <h1 className='text-black text-xl
    font-bold'>Opps,no results</h1>
    <p>{allCars?.message}</p>
  </div>
 )
}

   </div>
    </main>
  )
}
