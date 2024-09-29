const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getJobs = async (req, res) => {
  try {
    const jobs = await prisma.job.findMany();
    res.status(200).json({ jobs });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.addJob = async (req, res) => {
  const { job_title, company, description, location } = req.body;

  try {
    const newJob = await prisma.job.create({
      data: { job_title, company, description, location }
    });

    res.status(201).json({
      message: 'Job created successfully',
      job: newJob
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
