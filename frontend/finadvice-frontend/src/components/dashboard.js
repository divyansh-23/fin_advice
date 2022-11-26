import axios from "axios";
import React, {useState, useEffect} from "react";
import { useAuth } from "./auth";
import { API_URL } from "../api_config";

export default function Dashboard (){
    const auth = useAuth();
    const [courses, setCourses] = useState(null);

    useEffect(() => {
        // Update the document title using the browser API
        axios.get(API_URL+`posts`)
        .then(
            res => {
                setCourses(res.data);
            }
        )
        .catch(err => console.log(err))
    });
    return(
        
        <div className="container mx-auto">
            <div className="grid lg:grid-cols-3">
                {courses && courses.map(course => {
                    return(
                        <div className="container mx-auto px-8 mt-8">
                            <div className="max-w-sm rounded overflow-hidden shadow-lg items-stretch h-full">
                                <img className="w-full" src="/static/images/card-top.jpeg" alt="Sunset in the mountains" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{course.title}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        
    );
}