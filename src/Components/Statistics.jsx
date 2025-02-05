import { useState, useEffect , useRef, useContext } from "react";
import { AppContext } from "./AppContext";


const Statistics = () => {
    const [isVisible, setIsVisible] = useState(false);
    const countRef = useRef(null);
      const { theme } = useContext(AppContext);
    



    useEffect(() => {
        const options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.5, // Trigger when half of the element is visible
        };
    
        const observer = new IntersectionObserver(([entry]) => {
          setIsVisible(entry.isIntersecting);
        }, options);
    
        if (countRef.current) {
          observer.observe(countRef.current);
        }
    
        return () => {
          if (countRef.current) {
            observer.unobserve(countRef.current);
          }
        };
      }, []);

    const useCountAnimation = (isVisible, maxValue, intervalSpeed = 100) => {
        const [count, setCount] = useState(0);
        const throttledUpdate = useRef(null);

        useEffect(() => {


            if (isVisible) {
                throttledUpdate.current = setInterval(() => {
                    setCount(prevCount => {
                        if (prevCount < maxValue) {
                            return prevCount + 1;
                        }
                        clearInterval(throttledUpdate.current);
                        return prevCount;
                    });
                }, intervalSpeed);
            } else {
                clearInterval(throttledUpdate.current);
            }



            return () => clearInterval(throttledUpdate.current);

        }, [isVisible]);
        return count;
    };



    const departmentsCount = useCountAnimation(isVisible, 7, 1000);
    const publicationsCount = useCountAnimation(isVisible, 1611, 0.5);
    const studentsCount = useCountAnimation(isVisible, 911, 2);
    const facultiesCount = useCountAnimation(isVisible, 55, 200);
    const patentsCount = useCountAnimation(isVisible, 18, 800);
    return (
        <div ref={countRef} className={`mt-6 h-[200px] bg-${theme}txtbg rounded-[30px] shadow-lg overflow-hidden px-20 hidden md:block`}>

            <h2 className="text-3xl font-dosis font-bold mx-auto text-center p-4">
                Statistical Data
            </h2>

            <div className="grid grid-cols-5 gap-5 text-center">
                <div>
                    <div>
                        <div className="text-3xl font-dosis">Departments</div>
                        <h1 className="text-3xl font-staatliches">{departmentsCount}</h1>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="text-3xl font-dosis">Publications</div>
                        <h1 className="text-3xl font-staatliches">{publicationsCount}</h1>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="text-3xl font-dosis">Students</div>
                        <h1 className="text-3xl font-staatliches">{studentsCount}</h1>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="text-3xl font-dosis">Faculties</div>
                        <h1 className="text-3xl font-staatliches">{facultiesCount}</h1>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="text-3xl font-dosis">Patents</div>
                        <h1 className="text-3xl font-staatliches">{patentsCount}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistics
