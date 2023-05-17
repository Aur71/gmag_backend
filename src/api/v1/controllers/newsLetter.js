const subscribedUser = require('../models/SubscribedUser');

const getSubscribedUsers = async (req, res) => {
  try {
    const subscribedUsers = await subscribedUser.find({});
    res.status(200).send(subscribedUsers);
  } catch (error) {
    res.status(500).send({ error: error['message'] });
  }
};

const subscribeUser = async (req, res) => {
  const { name, email } = req.body;

  try {
    if (!name || !email)
      return res.status(400).json({ error: "Name and email can't be empty" });

    const isUserSubscribed = await subscribedUser.findOne({ email }).exec();
    if (isUserSubscribed)
      return res.status(400).json({ error: 'User already subscribed' });

    await subscribedUser.create(req.body);
    res.status(201).send({ success: 'User subscribed' });
  } catch (error) {
    res.status(500).send({ error: error['message'] });
  }
};

const unsubscribeUser = async (req, res) => {
  const { email } = req.body;

  try {
    const isUserSubscribed = await subscribedUser.findOne({ email }).exec();
    if (!isUserSubscribed)
      return res.status(400).json({ error: 'User is not subscribed' });

    await subscribedUser.deleteOne({ email });
    res.send('User unsubscribed');
  } catch (error) {
    res.status(500).send({ error: error['message'] });
  }
};

module.exports = {
  getSubscribedUsers,
  subscribeUser,
  unsubscribeUser,
};
