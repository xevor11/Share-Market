const Message = require('../models/message');

// GET all messages
exports.getMessages = async (req, res, next) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (error) {
    next(error);
  }
};

// GET a single message by ID
exports.getMessageById = async (req, res, next) => {
  try {
    const message = await Message.findById(req.params.id);
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }
    res.status(200).json(message);
  } catch (error) {
    next(error);
  }
};

// CREATE a new message
exports.createMessage = async (req, res, next) => {
  try {
    const message = new Message({
      title: req.body.title,
      body: req.body.body,
      sender: req.user.id,
      receiver: req.body.receiver,
    });
    await message.save();
    res.status(201).json(message);
  } catch (error) {
    next(error);
  }
};

// UPDATE a message by ID
exports.updateMessage = async (req, res, next) => {
  try {
    const message = await Message.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }
    res.status(200).json(message);
  } catch (error) {
    next(error);
  }
};

// DELETE a message by ID
exports.deleteMessage = async (req, res, next) => {
  try {
    const message = await Message.findByIdAndDelete(req.params.id);
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }
    res.status(200).json({ message: 'Message deleted successfully' });
  } catch (error) {
    next(error);
  }
};
