"use client"
import React, { useState, FormEvent } from 'react';
import styles from "./page.module.scss";
import Textfield from '@/.components/ui/Textfield';
import Button from '@/.components/ui/Button';
const Page = () => {
    const [courseResponse, setCourseResponse] = useState();
    const [videoResponse, setVideoResponse] = useState();
    const courseSubmitHandler = async (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        const course = {
            name: formData.get("name"),
            courseId: Number(formData.get("courseId")),
            description: formData.get("description"),
            thumbnail: formData.get("thumbnail"),
            popularity: Number(formData.get("popularity")),
            lessons: Number(formData.get("lessons")),
        }
        const res = await fetch("/api/courses/add", { method: "POST", body: JSON.stringify(course) });
        setCourseResponse(await res.json());
    }
    const videoSubmitHandler = async (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        const video = {
            courseId: Number(formData.get("courseId")),
            title: formData.get("title"),
            link: formData.get("link"),
            thumbnail: formData.get("thumbnail"),
            duration: Number(formData.get("duration")),
        }
        const res = await fetch("/api/videos/add", { method: "POST", body: JSON.stringify(video) });
        setVideoResponse(await res.json());
    }


    return (
        <div className={styles.root}>
            <h1>Admin Dashboard</h1>
            <div className={styles.formsContainer} >
                <form className={styles.formOne} onSubmit={courseSubmitHandler}>
                    <h3>Add New Course</h3>
                    <Textfield title='name' name='name' />
                    <Textfield title='description' name='description' />
                    <Textfield title='thumbnail' name='thumbnail' />
                    <Textfield title='popularity' name='popularity' />
                    <Textfield title='lessons' name='lessons' />
                    <Button title='Submit' />
                    {courseResponse && <p>{JSON.stringify(courseResponse)}</p>}
                </form>
                <form className={styles.formTwo} onSubmit={videoSubmitHandler}>
                    <h3>Add New Video</h3>
                    <Textfield title='courseId' name='courseId' />
                    <Textfield title='title' name='title' />
                    <Textfield title='link' name='link' />
                    <Textfield title='thumbnail' name='thumbnail' />
                    <Textfield title='duration' name='duration' />
                    <Button title='Submit' />
                    {videoResponse && <p>{JSON.stringify(videoResponse)}</p>}

                </form>
            </div>
        </div>
    );
}

export default Page;
