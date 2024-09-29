const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.addProduct = async (req, res) => {
  const { product_name, price, stock_quantity } = req.body;

  try {
    const newProduct = await prisma.product.create({
      data: { product_name, price, stock_quantity }
    });

    res.status(201).json({
      message: 'Product added successfully',
      product: newProduct
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
