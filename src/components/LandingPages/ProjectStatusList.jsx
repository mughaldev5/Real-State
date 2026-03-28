import React, { useState, useRef, useEffect} from 'react'
import { FaChartArea } from "react-icons/fa";
import { PiBuildingApartmentDuotone, PiCraneBold } from "react-icons/pi"; 
  import { RiSofaLine } from "react-icons/ri";
import ProjectStatus from './ProjectStatus';

const targets =[
    {
        id:1,
        projectIcons:"/image/blueprint.png",
        countNo:"560+",
        aboutProject:"Total Area Sq"
    },
    {
        id:2,
        projectIcons:"/image/building.png",
        countNo:"197k+",
        aboutProject:"Apartments Sold"
    },
    {
        id:3,
        projectIcons:"/image/excavator.png",
        countNo:"268+",
        aboutProject:"Total Constructions"
    },
    {
        id:4,
        projectIcons:"/image/armchair.png",
        countNo:"340+",
        aboutProject:"Apartio Rooms"
    },
];
const ProjectStatusList = () => {
     const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const getNumber = (value) => {
    let num = value.replace("+", "");

    if (num.includes("k")) {
      num = num.replace("k", "") * 1000;
    }

    return Number(num);
  };

  const cleanTargets = targets.map((item) => getNumber(item.countNo));

  const [counts, setCounts] = useState(
    new Array(targets.length).fill(0)
  );

  // 👇 Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // agar har dafa scroll pe chalana ho
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // 👇 Counter Animation
  useEffect(() => {
    if (!isVisible) return;

    // reset so it runs again on scroll
    setCounts(new Array(targets.length).fill(0));

    const duration = 1000;

    const intervals = cleanTargets.map((target, index) => {
      const steps = 100;
      const increment = Math.ceil(target / steps);
      const intervalTime = duration / steps;

      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];

          if (newCounts[index] >= target) {
            newCounts[index] = target;
            return newCounts;
          }

          newCounts[index] += increment;

          if (newCounts[index] > target) {
            newCounts[index] = target;
          }

          return newCounts;
        });
      }, intervalTime);
    });

    return () => intervals.forEach(clearInterval);
  }, [isVisible]);

  const formatNumber = (num) => {
    if (num >= 1000) return (num / 1000).toFixed(0) + "K+";
    return num + "+";
  };
  return (
    <div ref={sectionRef} className='relative grid overflow-hidden'>
      <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-items-center items-center pt-22 pb-22 lg:gap-20 md:gap-10'>
        {
        targets.map((items,i) =>(
            <ProjectStatus key={i} data={items} count={counts[i]} formatNumber={formatNumber}/>
        ))
      }
      </div>
    </div>
  )
}

export default ProjectStatusList
