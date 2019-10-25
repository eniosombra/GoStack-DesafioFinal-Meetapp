import User from '../models/User';
import Meetup from '../models/Meetup';
import File from '../models/File';
import Subscription from '../models/Subscription';
import Queue from '../../lib/Queue';
import SubscriptionMail from '../jobs/SubscriptionMail';

class SubscriptionController {
  async index(req, res) {
    const subscriptions = await Subscription.findAll({
      where: {
        user_id: req.userId,
      },
      include: [
        {
          model: Meetup,
          include: [
            {
              model: User,
              attributes: ['id', 'name', 'email'],
            },
            {
              model: File,
              as: 'banner',
              attributes: ['id', 'path', 'url'],
            },
          ],

          required: true,
        },
      ],
      order: [[Meetup, 'date']],
    });

    return res.json(subscriptions);
  }

  async store(req, res) {
    const user = await User.findByPk(req.userId);
    const meetup = await Meetup.findByPk(req.params.meetupId, {
      include: [User],
    });

    if (meetup.user_id === req.userId) {
      return res.status(400).json({
        error: 'Não é possível realizar inscrição em seus próprios Meetups',
      });
    }

    if (meetup.past) {
      return res.status(400).json({
        error: 'Não é possível realizar inscrição em Meetup que já ocorreu.',
      });
    }

    const checkDate = await Subscription.findOne({
      where: {
        user_id: user.id,
      },
      include: [
        {
          model: Meetup,
          required: true,
          where: {
            date: meetup.date,
          },
        },
      ],
    });

    if (checkDate) {
      return res.status(400).json({
        error: 'Não é possível realizar inscrição em 2 Meetups ao mesmo tempo.',
      });
    }

    const subscription = await Subscription.create({
      user_id: user.id,
      meetup_id: meetup.id,
    });

    await Queue.add(SubscriptionMail.key, {
      meetup,
      user,
    });

    return res.json(subscription);
  }

  async delete(req, res) {
    const data = await Subscription.findByPk(req.params.id);

    await data.destroy();

    return res.status(200).json({ msg: 'Inscrição cancelada com sucesso!' });
  }
}

export default new SubscriptionController();
