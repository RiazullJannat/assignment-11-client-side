import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "./common/Loading";
import { toast } from "react-toastify";
import {styles} from '../Styles'

const getUserTutor = async () => {
    const {data} = await  axios.get(`${import.meta.env.VITE_BASE_URL}/count`)
    return data;
}
const Stats = () => {
    const {data:userTutor=[], isLoading, isError, error} = useQuery({
        queryKey:['UserTutor'],
        queryFn:getUserTutor,
    })
    const stats = [
        { value: `${userTutor.tutorCount}+`, label: "Experienced tutors" },
        { value: `${userTutor.totalReviewCount}+`, label: "Total reviews" },
        { value: `${userTutor.totalLanguages}+`, label: "Languages" },
        { value: `${userTutor.count}+`, label: "Our users" },
    ];
    if(isLoading){
        return <Loading></Loading>
    }
    if(isError){
        toast.error(error.message)
    }
    return (
        <div className={`${ styles.sectionGapping}   ${styles.sectionBorder}`}>
            <div>
                <h3 className={`${styles.sectionHeadText}`}>Quick Facts</h3>
                <p className={`${styles.sectionSubText}`}>Key milestones from our journey</p>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {stats.map((stat, index) => (
                    <div key={index} className={`flex flex-col items-center ${styles.animation} ${styles.sectionBorder} py-2`}>
                        <h3 className={`text-4xl font-bold ${styles.primary}`}>{stat.value}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-200">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stats;