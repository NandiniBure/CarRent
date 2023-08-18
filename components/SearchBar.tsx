"use client"
import { useState } from "react"
import { SearchMenufasturer } from "."
import Image from "next/image"
import { manufacturers } from "@/constants"
import { useRouter } from "next/navigation"
const SearchButton=({otherclasses}:{otherclasses:string})=>(
  <button type="submit"
  className={`-ml-3 z-10 ${otherclasses}`}>
     <Image
       src="/magnifying-glass.svg"
       alt="maginfying class"
       width={40}
       height={40}
       className="object-contain"/>
  </button>
)

const SearchBar = () => {
  const router=useRouter()
    const [Menufacturer,setMenufacturer]=useState('')
    const [model,setModel]=useState('')

    
  const updateSearchParams=(model:string,
    Menufacturer:string)=>
    {
      const searchParams=new URLSearchParams(window.location.search);
      
      if(model){
      searchParams.set('model',model)
      }else{
        searchParams.delete('model')
      }


      if(Menufacturer){
        searchParams.set('manufacturer',Menufacturer)
        }else{
          searchParams.delete('manufacturer')
        }


        const newPathname=`${window.location.pathname}? ${searchParams.toString()}`
        router.push(newPathname)
    }

  const handleSearch=(e:React.FormEvent<HTMLFormElement>)=>{
   e.preventDefault()
   if(Menufacturer === '' && model==='')
   {return alert("please fill search bar")}

   updateSearchParams(model.toLowerCase(),Menufacturer.toLowerCase())
    }
  return (
    <form className='searchbar'
    onSubmit={handleSearch}>
     <div className="searchbar__item">
        <SearchMenufasturer
        Menufacturer={Menufacturer}
        setMenufacturer={setMenufacturer}/>
        <SearchButton
        otherclasses="sm:hidden"/>
        <div className="searchbar__item">
          <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] ml-4"
          alt="model icon"/>
        </div>
        <input
        type="text"
        name='model'
        value={model}
        onChange={(e)=>setModel(e.target.value)}
        placeholder="Tiguan"
        className="searchbar__input"/>
       <SearchButton
       otherclasses="sm:hidden"/>
     </div>
     <SearchButton
     otherclasses="max-sm:hidden"/>
    </form>
  )
}

export default SearchBar