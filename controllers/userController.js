const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a new user
exports.createUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
        role,
      },
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).send(users);
    // res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single user by ID
exports.getUserById = async (req, res) => {
  const { user_id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { user_id: parseInt(user_id) },
    });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a user by ID
exports.updateUser = async (req, res) => {
  const { user_id } = req.params;
  const { name, email, password, role } = req.body;
  try {
    const updatedUser = await prisma.user.update({
      where: { user_id: parseInt(user_id) },
      data: { name, email, password, role },
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
  const { user_id } = req.params;
  try {
    await prisma.user.delete({
      where: { user_id: parseInt(user_id) },
    });
    res.status(204).send("User Deleted Successfully");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
