import * as React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import Image from 'next/image';

export function BlogPosts(props: any) {
    const blogPostsData = [
        {
            id: 1,
            imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/53d5fc932934b158a5d5fb59b1a253d100c80d70022c1450275aa45010cd2556?apiKey=51bfafa4352f47b3b624fa2aa0dc0ef4&width=1600&height=1200",
            alt: "Blog 1",
            title: "BLOG 1",
            date: "TEST, TEST 10.04.2021 17:23"
        },
        {
            id: 2,
            imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/53d5fc932934b158a5d5fb59b1a253d100c80d70022c1450275aa45010cd2556?apiKey=51bfafa4352f47b3b624fa2aa0dc0ef4&width=1600&height=1200",
            alt: "Blog 2",
            title: "BLOG 2",
            date: "TEST, TEST 10.04.2021 17:23"
        },
        {
            id: 3,
            imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/53d5fc932934b158a5d5fb59b1a253d100c80d70022c1450275aa45010cd2556?apiKey=51bfafa4352f47b3b624fa2aa0dc0ef4&width=1600&height=1200",
            alt: "Blog 2",
            title: "BLOG 2",
            date: "TEST, TEST 10.04.2021 17:23"
        },
        {
            id: 4,
            imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/53d5fc932934b158a5d5fb59b1a253d100c80d70022c1450275aa45010cd2556?apiKey=51bfafa4352f47b3b624fa2aa0dc0ef4&width=1600&height=1200",
            alt: "Blog 2",
            title: "BLOG 2",
            date: "TEST, TEST 10.04.2021 17:23"
        },

        {
            id: 5,
            imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/53d5fc932934b158a5d5fb59b1a253d100c80d70022c1450275aa45010cd2556?apiKey=51bfafa4352f47b3b624fa2aa0dc0ef4&width=1600&height=1200",
            alt: "Blog 2",
            title: "BLOG 2",
            date: "TEST, TEST 10.04.2021 17:23"
        },
        {
            id: 6,
            imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/53d5fc932934b158a5d5fb59b1a253d100c80d70022c1450275aa45010cd2556?apiKey=51bfafa4352f47b3b624fa2aa0dc0ef4&width=1600&height=1200",
            alt: "Blog 2",
            title: "BLOG 2",
            date: "TEST, TEST 10.04.2021 17:23"
        },
        // Add more data for additional blog posts
    ];

    return (
        <div className="flex flex-col items-center mt-8">
            <div className="text-zinc-800 text-3xl font-bold tracking-wide max-w-[682px] max-md:max-w-full">
                LOREM IPSUM DOLAR LOREM IPSUM DOLAR
            </div>
            <div className="flex-1 w-[1200px] h-auto mt-16 max-md:max-w-full max-md:mt-10 flex  items-center">
                <Grid container spacing={6} >
                    {blogPostsData.map((post, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Paper elevation={3} className="p-4">
                                <Image
                                    src={post.imageSrc}
                                    alt={post.alt}
                                    width={1600}
                                    height={1200}
                                    className="aspect-[1.33] object-cover object-center w-full overflow-hidden"
                                />
                                <div className="bg-black text-white p-2">
                                    <Typography variant="h6" className="text-lg font-semibold">
                                        {post.title}
                                    </Typography>
                                    <Typography variant="subtitle2" className="text-xs font-light">
                                        {post.date}
                                    </Typography>
                                </div>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>

    );
}
