import React from 'react' 


 const ProjectStatus = ({data, count, formatNumber}) => {

   return ( 
    <div className='relative flex flex-col items-center p-6 gap-7 rounded-lg overflow-hidden'>
     
        <div className='text-orange-600'>
          <img className='w-16 h-16' src={data.projectIcons} alt="" />
        </div>
     <div className='flex flex-col items-center gap-4'>
       <h1 className='text-4xl font-bold '>
        {formatNumber(count)}
      </h1>
      <p className='text-gray-800 lg:text-base md:text-xs text-base font-medium'>
        {data.aboutProject}
      </p>
     </div>
      </div>
    
          ) };

 export default ProjectStatus