import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import axios from "axios";

const CourseCard = ({ course, token, refresh }) => {
    const enrollCourse = async () => {
        try {
            await axios.post(
                "https://skillcraftserver.onrender.com/course/enroll",
                { courseId: course._id },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            alert("Enrolled successfully!");
            refresh(); // refresh courses list or profile
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.mess || "Failed to enroll");
        }
    };

    const alreadyEnrolled = course.enrolledUsers?.includes(
        JSON.parse(localStorage.getItem("user"))?._id
    );

    return (
        <Card sx={{ mb: 2 }}>
            <CardContent>
                <Typography variant="h6">{course.title}</Typography>
                <Typography variant="body2">{course.description}</Typography>
                <Button
                    variant="contained"
                    sx={{ mt: 1 }}
                    onClick={enrollCourse}
                    disabled={alreadyEnrolled}
                >
                    {alreadyEnrolled ? "Enrolled" : "Enroll"}
                </Button>
            </CardContent>
        </Card>
    );
};

export default CourseCard;
