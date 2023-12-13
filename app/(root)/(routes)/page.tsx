"use client"
import { Header } from "@/components/frontend-main/components/navbar"
import BannerSection from "@/components/frontend-main/components/banner";
import SearchTrackingComponent from "@/components/frontend-main/components/search-by-traffic";
import { BlogPosts } from "@/components/frontend-main/components/blog-posts";
import ChatPlugin from "@/components/frontend-main/components/facebook-chat";

// import { useStoreModal } from "@/hooks/use-store-modal";

const SetupPage = () => {
    // const onOpen = useStoreModal((state) => state.onOpen);
    // const isOpen = useStoreModal((state) => state.isOpen);

    // useEffect(() => {
    //     if (!isOpen) {
    //         onOpen();
    //     }
    // }, [isOpen, onOpen]);

    return (

        <>
            <div className="p-4">
                main page
                <>
                    <Header />
                    <BannerSection />
                    <SearchTrackingComponent />
                    <BlogPosts />
                    <ChatPlugin />
                </>

            </div >
        </>


    )
}

export default SetupPage;
