import React from 'react'

const LocationSearchPanel = (props) => {

  console.log(props)
  // sample array for locations

  const locations = [
    "24B, Near Kapoor's Cafe, Sheryians Academy, Chandigarh",
    "20A, Near Malhotra's Cafe, Isotech Academy, Punjab",
    "32C, Near lovely's Sweets, BigBulls Academy, Jalandar",
    "40B, Near Pathania's Cafe, Rajan Academy, Jammu",
  ]


  return (
    <div>
      {/* this is just a sample data */}


    {
      locations.map(function(elem, idx){
        return <div key={idx} onClick={()=>{
          props.setVehiclePanel(true)
          props.setPanelOpen(false)
        }} className='flex gap-4 border-2 border-gray-200 active:border-black py-2 px-3 rounded-xl items-center my-2 justify-start'>
        <h3 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h3>
        <h4 className='font-medium'>{elem}</h4>
    </div>
      })
    }

    </div>
  )
}

export default LocationSearchPanel
