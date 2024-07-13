'use client'
import Link from "next/link"
import courseData from "../data/music_courses.json"
import { BackgroundGradient } from "./ui/background-gradient.tsxbackground-gradient"

interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
}


function FeaturedCourses() {
const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured)

  return (
    <div className="py-12 bg-gray-900">
        <div>
            <div className="text-center">
                <h2 className="text-base text-teal-600 
                font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold
                 tracking-tight text-white 
                 sm:text-4xl">Learn With the Best</p>
            </div>
        </div>
        <div className="mt-10 mx-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 
            lg:grid-cols-3 gap-8 justify-center">
                {featuredCourses.map((course:Course)=> (
                    <div key={course.id} className="flex justify-center">
                        <BackgroundGradient
                        className="flex flex-col rounded-lg 
                        shadow-lg bg-white dark:bg-zinc-900 
                        overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col 
                                items-center justify-center text-center flex-grow">
                                <p className="text-lg sm:text-xl
                                 text-gray-900 dark:text-white 
                                 mt-4 mb-2 font-bold">{course.title}</p>
                                <p className="text-sm text-gray-600
                                 dark:text-gray-400 mb-4"
                                 >
                                    {course.description}
                                </p>
                                <Link href={`/courses/${course.slug}`}>
                                <button className="bg-gradient-to-r from-blue-600
                                 to-pink-500 hover:from-purple-500 hover:to-teal-500
                                  text-white py-2 px-4 rounded-md shadow-md transition duration-200">
                                    Learn More
                                </button>
                                </Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
        </div>
        <div className="mt-20 text-center">
            <Link href={"/courses"}
            className="inline-block px-4 py-2 rounded-full border border-neutral-600
                 text-neutral-700 bg-gradient-to-r from-[#99EDC3] to-[#FCB0B3]
                 hover:from-purple-500 hover:to-green-300 hover:text-white
                 hover:border-transparent transition duration-200"
            >
            View All courses
            </Link>
        </div>
    </div>
  )
}

export default FeaturedCourses