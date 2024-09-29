const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createTransaction = async (req, res) => {
  const { user_id, product_id, quantity } = req.body;

  try {
    const product = await prisma.product.findUnique({ where: { product_id } });
    if (!product) return res.status(404).json({ message: 'Product not found' });

    const total_amount = product.price * quantity;

    const newTransaction = await prisma.transaction.create({
      data: { user_id, product_id, quantity, total_amount }
    });

    res.status(201).json({
      message: 'Transaction completed successfully',
      transaction: newTransaction
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await prisma.transaction.findMany();
    res.status(200).json({ transactions });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
