const prisma = require('../config/database'); // Make sure this path is correct

// Fetch available courses
exports.getCourses = async (req, res) => {
    try {
        const courses = await prisma.course.findMany(); // Fetch courses from the database
        res.status(200).json({ courses });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Add a new course
exports.addCourse = async (req, res) => {
    const { course_name, description, category } = req.body;

    try {
        const newCourse = await prisma.course.create({
            data: {
                course_name,
                description,
                category,
            },
        });
        res.status(201).json({ message: 'Course created successfully', course: newCourse });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};
