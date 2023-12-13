"use client"
import { Header } from "@/components/frontend-main/components/navbar"
import BannerSection from "@/components/frontend-main/components/banner";
import SearchTrackingComponent from "@/components/frontend-main/components/search-by-traffic";
import { BlogPosts } from "@/components/frontend-main/components/blog-posts";

const SetupPage = () => {
    return (

        <>
            <div className="p-4">
                main page
                <>
                    <Header />
                    <BannerSection />
                    <SearchTrackingComponent />
                    <BlogPosts />
                </>

            </div >
        </>


    )
}

export default SetupPage;
